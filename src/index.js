const {
  app,
  ipcMain,
  protocol,
  BrowserWindow,
  Notification,
  shell,
} = require("electron");
const isDev = require("electron-is-dev");
const initSqlJs = require("sql.js");

const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "logs.db");
const docPath = app.getPath("documents");
const savePath = path.join(docPath, "DVA", "saved");
const exportPath = path.join(docPath, "DVA", "exported");

if (!fs.existsSync(savePath)) fs.mkdirSync(savePath, { recursive: true });
if (!fs.existsSync(exportPath)) fs.mkdirSync(exportPath, { recursive: true });

let SQL;
let db;

const defaults = {
  defaultCamera: null,
  preferredTheme: null,
  loggingThreshold: 10,
};

class Save {
  constructor(prefs) {
    const UserDataPath = app.getPath("userData");
    console.log(UserDataPath);
    this.path = path.join(UserDataPath, prefs.configName + ".json");
    this.data = this.parseDataFile(this.path, prefs.defaults);
  }

  get(key) {
    return this.data[key];
  }

  set(key, val) {
    this.data[key] = val;
    fs.writeFileSync(this.path, JSON.stringify(this.data));
  }

  parseDataFile(filePath, defaults) {
    try {
      return JSON.parse(fs.readFileSync(filePath));
    } catch (error) {
      return defaults;
    }
  }
}

const save = new Save({
  configName: "user-preferences",
  defaults: defaults,
});

async function initDatabase() {
  SQL = await initSqlJs({
    locateFile: (file) => `./node_modules/sql.js/dist/${file}`,
  });

  // Check if the database file already exists
  if (fs.existsSync(dbPath)) {
    const data = fs.readFileSync(dbPath);
    db = new SQL.Database(data);
    console.log("Loaded existing database from file:", dbPath);
  } else {
    db = new SQL.Database();
    const data = db.export();
    fs.writeFileSync(dbPath, data);
    console.log("Created new database object.");
  }

  // Create the logs table if it doesn't already exist
  db.run(`CREATE TABLE IF NOT EXISTS logs (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Type TEXT,
    Origin TEXT,
    "Date Occurred" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "File Path" TEXT
  )`);
}

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 960,
    minHeight: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL(
    isDev
      ? "http://localhost:5173/"
      : `file://${path.join(__dirname, "render", "dist", "index.html")}`
  );

  // Open the DevTools.
  if(isDev) mainWindow.webContents.openDevTools();

  mainWindow.removeMenu();
};

const handleAddLog = (event, props) => {
  const recentLogQuery = `SELECT MAX("Date Occurred") FROM logs`;
  const recentLogResult = db.exec(recentLogQuery);
  const recentLogDate = new Date(recentLogResult[0].values[0][0]);
  const timeDiff = props.timestamp - recentLogDate;

  // check logging threshold
  const loggingThreshold = save.get('loggingThreshold');
  if (recentLogDate && timeDiff < loggingThreshold * 60000 && timeDiff > 0) {
    return;
  }

  // Save accident frames
  const dateTimeString = props.timestamp
    .toLocaleString()
    .replace(/[/\s:]/g, "-");
  const folderPath = path.join(savePath, dateTimeString);

  if (props.frameCount === 1) {
    fireNotification(event, {
      body: "DVA",
      icon: "assets/statusRed.svg",
      title: "An accident has been detected",
      sound: null,
    });

    fs.mkdirSync(folderPath, { recursive: true });

    // Save log details
    const insertQuery = `INSERT INTO logs (Type, Origin, "File Path", "Date Occurred")
    values (?, ?, ?, ?)`;

    const insertValues = [
      props.type,
      props.origin,
      folderPath,
      props.timestamp.toISOString(),
    ];
    db.run(insertQuery, insertValues);

    const data = db.export();
    fs.writeFileSync(dbPath, data);

    console.log("New log added.");
  }

  const base64Data = props.frameDataURL.replace(/^data:image\/png;base64,/, "");
  const buffer = Buffer.from(base64Data, "base64");
  const paddedNum = `${props.frameCount.toString().padStart(2, "0")}`;
  const fileName = `${dateTimeString}_${paddedNum}.png`;
  const filePath = path.join(folderPath, fileName);

  fs.writeFile(filePath, buffer, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

const handleGetLogs = (event, props) => {
  // Build the SQL query based on the provided filters
  let query = `SELECT * FROM logs WHERE 1=1`;
  if (props.type != "All") {
    query += ` AND Type = '${props.type}'`;
  }
  if (props.from) {
    query += ` AND "Date Occurred" >= '${props.from}'`;
  }
  if (props.to) {
    query += ` AND "Date Occurred" <= '${props.to}'`;
  }
  // Execute the query
  const result = db.exec(query);
  if (result && result.length > 0) {
    const rows = result[0].values;
    return rows;
  } else {
    return [];
  }
};

const handleExportLogs = (event, props) => {
  // Build the SQL query based on the provided filters
  let query = `SELECT * FROM logs WHERE 1=1`;
  if (props.type != "All") {
    query += ` AND Type = '${props.type}'`;
  }
  if (props.from) {
    query += ` AND "Date Occurred" >= '${props.from}'`;
  }
  if (props.to) {
    query += ` AND "Date Occurred" <= '${props.to}'`;
  }
  const result = db.exec(query);

  if (!result[0]) return result;

  const rows = result[0].values;

  // Convert the rows to a CSV string
  const csv = rows
    .map((row) => row.join(","))
    .join("\n");

  // Define the filename and path for the CSV file
  const now = new Date();
  const dateTimeString = now.toLocaleString().replace(/[/\s:]/g, "-");
  const fileName = `${dateTimeString}.csv`;
  const filePath = path.join(exportPath, fileName);

  // Write the CSV string to the local file
  fs.writeFile(filePath, csv, (err) => {
    if (err) {
      console.error(`Error exporting logs: ${err}`);
      return;
    }
    console.log(`Logs exported to ${filePath}`);
  });
};

const handleOpenLog = (event, id) => {
  if (BrowserWindow.getAllWindows().length == 2) {
    return;
  }

  const query = `SELECT * FROM logs WHERE ID=${id}`;
  const result = db.exec(query);
  let log = result[0].values[0];

  const parent = BrowserWindow.fromWebContents(event.sender);

  const logWindow = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    resizable: false,
    minimizable: false,
    autoHideMenuBar: true,
    parent: parent,
    modal: true,
    show: false,
    frame: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  logWindow.loadURL(
    `file://${path.join(__dirname, "render", "dist", "preview.html")}`
  );

  logWindow.once("ready-to-show", () => {
    setTimeout(() => {
      logWindow.webContents.send('log-data', log);
      logWindow.show();
    }, 50);
  });
};

const handleCloseLog = (event) => {
  const logWindow = BrowserWindow.fromWebContents(event.sender);
  logWindow.hide();
  logWindow.close();
};

const handleGetImage = async (event, props) => {
  const { path, all } = props;
  const files = await fs.promises.readdir(path);

  if (all) {
    const imageDataList = await Promise.all(
      files.map(async (file) => {
        const data = await fs.promises.readFile(`${path}/${file}`);
        return `data:image/png;base64,${data.toString("base64")}`;
      })
    );
    return imageDataList;
  } else {
    const data = await fs.promises.readFile(`${path}/${files[0]}`);
    return `data:image/png;base64,${data.toString("base64")}`;
  }
};


const handleOpenDir = (event, path) => {
  shell.openPath(path);
};

const fireNotification = (event, props) => {
  const window = BrowserWindow.fromWebContents(event.sender);

  let notification = new Notification({
    title: props.title,
    body: props.body,
    icon: path.join(__dirname, props.icon),
    timeoutType: props.sound ? "never" : "default",
  });
  notification.on("click", () => {
    window.webContents.send("close-notification");
    window.isVisible() ? window.focus() : window.show();
  });
  notification.on("close", () => {
    window.webContents.send("close-notification");
  });

  notification.show();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

const handleSaveSettings = (event, prefs) => {
  for (const key in prefs) {
    if (Object.hasOwnProperty.call(prefs, key)) {
      save.set(key, prefs[key]);
    }
  }
};

const handleOpenSettings = (event, pref) => {
  try {
    return save.get(pref);
  } catch (error) {
    return defaults[pref];
  }
};

app.whenReady().then(() => {
  protocol.registerFileProtocol("file", (request, callback) => {
    const url = request.url.substr(7); // Strip off "file://"
    callback({ path: path.normalize(`${__dirname}/${url}`) });
  });

  ipcMain.on("add-log", handleAddLog);
  ipcMain.on("open-log", handleOpenLog);
  ipcMain.on("close-log", handleCloseLog);
  ipcMain.on("export-logs", handleExportLogs);
  ipcMain.on("save-settings", handleSaveSettings);
  ipcMain.on("open-dir", handleOpenDir);

  ipcMain.handle("get-logs", handleGetLogs);
  ipcMain.handle("get-image", handleGetImage);
  ipcMain.handle("open-settings", handleOpenSettings);
  ipcMain.handle("fire-notification", fireNotification);

  initDatabase();
  createWindow();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

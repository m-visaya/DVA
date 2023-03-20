const { app, ipcMain, protocol, BrowserWindow, Notification } = require("electron");
const isDev = require("electron-is-dev");
const fs = require('fs');
const path = require('path');
const initSqlJs = require('sql.js');
const dbPath = path.join(__dirname, 'logs.db');

console.log(dbPath);

let SQL;
let db;

async function initDatabase() {
  // Load the SQL.js library and set up the SQL object
  SQL = await initSqlJs({
    // Required to load the wasm binary asynchronously. Of course, you can host it wherever you want
    // You can omit locateFile completely when running in node
    locateFile: file => `./node_modules/sql.js/dist/${file}`
  });

  // Check if the database file already exists
  if (fs.existsSync(dbPath)) {
    // If it does, load the database from the file
    const data = fs.readFileSync(dbPath);
    db = new SQL.Database(data);
    console.log('Loaded existing database from file:', dbPath);
  } else {
    // If it doesn't, create a new database object
    db = new SQL.Database();
    const data = db.export();
    fs.writeFileSync(dbPath, data);
    console.log('Created new database object.');
  }

  // Create the logs table if it doesn't already exist
  db.run(`CREATE TABLE IF NOT EXISTS logs (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Channel TEXT,
    Type TEXT,
    Origin TEXT,
    "Date Occurred" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "File Path" TEXT
  )`);

  // Print the contents of the 'logs' table
  // const query = `SELECT * FROM logs`;
  // const result = db.exec(query);
  // console.log(result[0]);
}

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1366,
    height: 768,
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
  mainWindow.webContents.openDevTools();

  mainWindow.removeMenu();
};

const handleAddLog = (event, props) => {
  // Retrieve the most recent log from the logs table
  const recentLogQuery = `SELECT MAX("Date Occurred") FROM logs`;
  const recentLogResult = db.exec(recentLogQuery);
  const recentLogDate = new Date(recentLogResult[0].values[0][0]);

  // Compare the most recent log's date with the current time
  const now = new Date();
  const timeDiff = now - recentLogDate;

  if (!recentLogDate || timeDiff >= 60 * 1000) {

    // Save accident frame
    const base64Data = props.imageDataURL.replace(/^data:image\/png;base64,/, "");
    const buffer = Buffer.from(base64Data, "base64");
    const dateTimeString = now.toLocaleString().replace(/[/\s:]/g, "-");
    const fileName = `${dateTimeString}.png`;
    const filePath = path.join(__dirname, `saved`, fileName);

    fs.writeFile(filePath, buffer, (err) => {
      if (err) {
        console.error(err);
      } else {
        // Insert a new log into the logs table with props from the 'props' dictionary
        const insertQuery = `INSERT INTO logs (Channel, Type, Origin, "File Path", "Date Occurred")
        values (?, ?, ?, ?, ?)`;

        const insertValues = [props.channel, props.type, props.origin, filePath, now.toISOString()];
        db.run(insertQuery, insertValues);

        // Export the updated database to the file system
        const data = db.export();
        fs.writeFileSync(dbPath, data);

        console.log("New log added.");
      }
    });

  } else {
    console.log("Not adding new log - last log occurred less than a minute ago.");
  }
};

const handleGetLogs = (event, props) => {
  // Build the SQL query based on the provided filters
  let query = `SELECT * FROM logs WHERE 1=1`;
  if (props.channel != "All") {
    query += ` AND Channel = '${props.channel}'`;
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
    event.reply("logs-data", rows);
  } else {
    event.reply("logs-data", []);
  }
};

const handleOpenLog = (event) => {
  if (BrowserWindow.getAllWindows().length == 2) {
    return;
  }

  const parent = BrowserWindow.fromWebContents(event.sender);
  const logWindow = new BrowserWindow({
    width: 700,
    height: 500,
    minWidth: 500,
    minHeight: 400,
    autoHideMenuBar: true,
    parent: parent,
    modal: true,
    show: false,
    frame: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  logWindow.loadURL("http://localhost:5173/log");

  logWindow.once("ready-to-show", () => {
    setTimeout(() => {
      logWindow.show();
    }, 50);
  });
};

const handleCloseLog = (event) => {
  const logWindow = BrowserWindow.fromWebContents(event.sender);
  logWindow.hide();
  logWindow.close();
};

const handleGetImage = (event, imagePath) => {
  const imageData = `data:image/png;base64,${fs.readFileSync(imagePath).toString('base64')}`;
  event.reply("image-data", imageData);
}

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

app.whenReady().then(() => {
  protocol.registerFileProtocol('file', (request, callback) => {
    const url = request.url.substr(7); // Strip off "file://"
    callback({ path: path.normalize(`${__dirname}/${url}`) });
  });

  ipcMain.on("add-log", handleAddLog);
  ipcMain.on("get-logs", handleGetLogs);
  ipcMain.on("get-image", handleGetImage);

  ipcMain.on("open-log", handleOpenLog);
  ipcMain.on("close-log", handleCloseLog);

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

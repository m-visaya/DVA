const { app, ipcMain, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
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

const handleOpenLogs = (event) => {
  if (BrowserWindow.getAllWindows().length == 2) {
    return;
  }

  const parent = BrowserWindow.fromWebContents(event.sender);
  const logsWindow = new BrowserWindow({
    width: 700,
    height: 500,
    minWidth: 500,
    minHeight: 400,
    autoHideMenuBar: true,
    parent: parent,
    modal: false,
    show: false,
    frame: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  logsWindow.loadURL("http://localhost:5173/logs");

  logsWindow.once("ready-to-show", () => {
    setTimeout(() => {
      logsWindow.show();
    }, 50);
  });
};

const handleCloseLogs = (event, prefs) => {
  const logsWindow = BrowserWindow.fromWebContents(event.sender);
  logsWindow.hide();
  logsWindow.close();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

app.whenReady().then(() => {
  ipcMain.on("open-logs", handleOpenLogs);
  ipcMain.on("close-logs", handleCloseLogs);

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

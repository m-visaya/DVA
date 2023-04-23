// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  openLog: (id) => ipcRenderer.send("open-log", id),
  closeLog: () => ipcRenderer.send("close-log"),
  addLog: (props) => ipcRenderer.send("add-log", props),
  getLogs: (props) => ipcRenderer.invoke("get-logs", props),
  onLogData: (callback) => {
    ipcRenderer.on("log-data", callback);
    return () => {
      ipcRenderer.off("log-data", callback);
    };
  },
  exportLogs: (props) => ipcRenderer.send("export-logs", props),
  getImage: (path) => ipcRenderer.invoke("get-image", path),
  openDir: (path) => ipcRenderer.send("open-dir", path),
  fireNotification: (props) => ipcRenderer.invoke("fire-notification", props),
  saveSettings: (prefs) => ipcRenderer.send("save-settings", prefs),
  fetchSetting: (pref) => ipcRenderer.invoke("open-settings", pref),
});

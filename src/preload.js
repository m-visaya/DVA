// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  // openLogs: () => ipcRenderer.send("open-logs"),
  // closeLogs: () => ipcRenderer.send("close-logs"),
  addLog: (values) => ipcRenderer.send("add-log", values),
  getLogs: () => ipcRenderer.send("get-logs"),
  openLog: () => ipcRenderer.send("open-log"),
  closeLog: () => ipcRenderer.send("close-log"),
  onLogsData: (callback) => ipcRenderer.on("logs-data", callback),
  fireNotification: (props) => ipcRenderer.invoke("fire-notification", props),
});

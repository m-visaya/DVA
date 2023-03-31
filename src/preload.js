// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  addLog: (props) => ipcRenderer.send("add-log", props),
  getLogs: (props) => ipcRenderer.send("get-logs", props),
  openLog: () => ipcRenderer.send("open-log"),
  closeLog: () => ipcRenderer.send("close-log"),
  getImage: (imagePath) => ipcRenderer.send("get-image", imagePath),
  onLogsData: (callback) => {
    ipcRenderer.on("logs-data", callback);
    return () => {
      ipcRenderer.off("logs-data", callback);
    };
  },
  onImageData: (callback) => {
    ipcRenderer.on("image-data", callback);
    return () => {
      ipcRenderer.off("image-data", callback);
    };
  },
  fireNotification: (props) => ipcRenderer.invoke("fire-notification", props),
});

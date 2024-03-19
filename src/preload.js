// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('electron', {
    send: (channel, data) => ipcRenderer.send(channel, data),
    on: (channel, func) => {
        ipcRenderer.on(channel, (event, ...args) => func(...args));
    },
    openPopup: (data) => ipcRenderer.send('show-popup', data),
    onPopupResponse: (callback) => ipcRenderer.on('popup-message', callback),
    closePopup: (data) => ipcRenderer.send('close-popup', data),
    notify: (data) => ipcRenderer.send('notification', data),
    getTaskData: () => ipcRenderer.send('getTaskData')
});

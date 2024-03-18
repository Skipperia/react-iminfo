const { app, BrowserWindow, Menu, Tray, ipcMain } = require('electron');
let tray = null;
let mainWindow = null;
if (process.platform === 'win32') {
    app.setAppUserModelId(app.name);
}// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
    app.quit();
}

const createWindow = () => {

    tray = new Tray(process.cwd() + '\\src\\assets\\icons\\icon.png'); // Path to your tray icon
    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Show App', click: function () {
                mainWindow.show();
            }
        },
        {
            label: 'Quit', click: function () {
                app.isQuiting = true;
                app.quit();
            }
        }
    ]);

    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 550,
        height: 650,
        webPreferences: {
            nodeIntegration: true,
            preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
        },
    });


    tray.setToolTip('IM-Info');
    tray.setContextMenu(contextMenu);
    tray.on('double-click', () => {
        if (mainWindow.isVisible()) {
            mainWindow.hide();
        } else {
            mainWindow.show();
        }
    });

    // Hide the window when it is closed
    mainWindow.on('close', function (event) {
        if (!app.isQuiting) {
            event.preventDefault();
            mainWindow.hide();
        }
        return false;
    });

    // and load the index.html of the app.
    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

    //mainWindow.setMenu(null)

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    let popupWindow;
    // Listen for popup requests
    ipcMain.on('show-popup', (event, message) => {
        popupWindow = new BrowserWindow({
            width: 400,
            height: 200,
            parent: mainWindow, // optional: makes the popup a modal window
            modal: true, // optional: makes the popup a modal window
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false
            }
        });

        popupWindow.setMenu(null)

        popupWindow.on('closed', () => {
            popupWindow = null;
        });



        popupWindow.loadFile('src/assets/htmls/popup.html');

        // Send the message to the popup
        popupWindow.webContents.on('did-finish-load', () => {
            popupWindow.webContents.send('message', message);
        });

    });


    ipcMain.on('close-popup', (event, message) => {
        if (popupWindow) {
            popupWindow.close();
            popupWindow = null;
        }
    })

};


ipcMain.on('notification', (event, data) => {
    showNotification(data.title, data.body);
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    } else {
        mainWindow.show();
    }


});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

import { Notification } from "electron";


function showNotification(title, body) {
    const notification = new Notification({
        title,
        body: body,
        icon: process.cwd() + '\\src\\assets\\icons\\icon.png'
    });

    notification.onclick = () => {
        console.log('Notification clicked');
    };
    notification.show();
}

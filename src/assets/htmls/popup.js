const { ipcRenderer } = require('electron');

ipcRenderer.on('message', (event, message) => {
    document.getElementById('message').innerText = message;
});


function closeWindow() {
    console.log("dsadsa");
    ipcRenderer.send('close-popup');
}

document.getElementById('closer').addEventListener('click', closeWindow);
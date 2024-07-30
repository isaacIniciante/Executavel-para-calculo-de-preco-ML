
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  let mainWindow = new BrowserWindow({
    width: 600,
    height: 700,
    maximizable: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    }
  })

  mainWindow.setMenu(null)
  mainWindow.loadURL(path.join(__dirname, 'index.html'));

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

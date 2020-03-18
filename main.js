const { app, BrowserWindow, net } = require('electron')

function createWindow () {
  const request = net.request('http://localhost:8888')
  request.on('response', (response) => {
    response.on('data', (data) => {
      const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true
        }
      })
      win.loadFile('index.html')
      win.remoteData = data
      win.webContents.openDevTools()   
    })
  })
  request.end()
}

app.whenReady().then(createWindow)

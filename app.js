const { app, BrowserWindow, session, ipcMain } = require('electron')
const path = require('path')
const url = require('url')

const windowManager = require('electron-window-manager');

let win
let mainWin


app.on('ready', function () {

    //win = new WindowManager({ width: 360, height: 530/*, webPreferences: {webSecurity: false}*/ })

    windowManager.init()

    windowManager.open('loginWin', '', 'file://' + __dirname + '/dist/index.html')

    /* win = windowManager.createNew()
    
      win.create()
    
      win.set({'width': 360, 'height': 550});
    
      win.loadURL(url.format({
        pathname: path.join(__dirname, 'dist/index.html'),
        protocol: 'file:',
        slashes: true,
        hash: '#/account/login'
      }))
    
      win.open()
    
      //mainWin = new WindowManager({ width: 1280, height: 720, minWidth:770, minHeight:420, show: false })
    
      mainWin = windowManager.createNew()
    
      mainWin.create()
    
      mainWin.set({'width': 1280, 'height': 720, 'minWidth':770, 'minHeight':420});
    
      mainWin.loadURL(url.format({
        pathname: path.join(__dirname, 'dist/index.html'),
        protocol: 'file:',
        slashes: true,
        hash: '#/app/home'
      }))*/



    /*ipcMain.on('show-main-window', function () {
      mainWin.open()
      win.close()
    })
  
    ipcMain.on('hide-main-window', function () {
      mainWin.close()
      win.open()
    })*/

    // Open the DevTools optionally:
    //win.webContents.openDevTools()

})


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})
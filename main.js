const remote = require('electron').remote;
const ipcRenderer = require('electron').ipcRenderer;

var windowManager = remote.require('electron-window-manager');



if (localStorage.getItem('enc_auth_token')) {

  var MainWin = windowManager.createNew('mainWin', 'Welcome ...', 'file://' + __dirname + '/dist/index.html',false, {
    'width': 1280,
    'height': 720,
    'position': 'center',
    'showDevTools': true,
    'resizable': true
  });
  MainWin.open();

  windowManager.close('loginWin');
}

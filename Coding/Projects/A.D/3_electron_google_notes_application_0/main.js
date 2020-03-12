const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow(){
  win = new BrowserWindow({width:825, height: 760, icon:__dirname+'./img/keep.png'});
  win.autoHideMenuBar = true

  win.loadURL('https://keep.google.com/')

  // Open Developer Tools
  // win.webContents().openDevTools();

  win.on('close', () => {
    win = null
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit()
  }
})

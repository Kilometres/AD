const {app, BrowserWindow, Menu} = require('electron');
const path = require('path');
const url = require('url');

let win;
let winAmnt = 1;

function createWin() {
  // Create Window
  win = new BrowserWindow({
    width:800,
    height:600,
    icon:__dirname+'/img/ico.png'});

  // Load HTML file
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Dev Tools
  // win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
    app.quit();
  });

  // Create Menu from template
  const mainMenu = Menu.buildFromTemplate(MenuTemp);
  // Insert the Menu
  Menu.setApplicationMenu(mainMenu);
}

// Run createWin()
app.on('ready', createWin);
// Close when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

function createWin2() {
  // Create Window
  win2 = new BrowserWindow({
    width:400,
    height:300,
    icon:__dirname+'/img/ico.png'});

  // Load HTML file
  win2.loadURL(url.format({
    pathname: path.join(__dirname, 'pg/win2/pg1/w2p1.html'),
    protocol: 'file:',
    slashes: true
  }));

  win2.on('closed', () => {
    win2 = null;
    winAmnt -= 1;
  });
}
function createWin3() {
  // Create Window
  win3 = new BrowserWindow({
    width:700,
    height:400,
    icon:__dirname+'/img/ico.png'});

  // Load HTML file
  win3.loadURL(url.format({
    pathname: path.join(__dirname, 'pg/win2/pg1/w2p1.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Dev Tools
  // win.webContents.openDevTools();

  win3.on('closed', () => {
    win3 = null;
    winAmnt -= 1;
  });
}

// Make menu template
const MenuTemp = [
  {
    label:'File',
    submenu:[
      {
        label:'Quit',
        click(){
          app.quit();
        },
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q'
      }
    ]
  },
  {
    label:'Dev',
    submenu:[
      {
        label:'Open Dev Tools',
        click(){
          if (winAmnt == 1) {
            win.webContents.openDevTools();
          }
          else if (winAmnt == 2) {
            win.webContents.openDevTools();
            win2.webContents.openDevTools();
          }
          else {
            win.webContents.openDevTools();
            win2.webContents.openDevTools();
            win3.webContents.openDevTools();
          }
        },
        accelerator: process.platform == 'darwin' ? 'Command+Shift+I' : 'Ctrl+Shift+I'
      },
      {
        label:'Open Window 2',
        click(){
          createWin2();
          winAmnt = 2;
        },
        accelerator:'Shift+2'
      },
      {
        label:'Open Window 3',
        click(){
          createWin3();
          winAmnt = 3;
        },
        accelerator:'Shift+3'
      }
    ]
  }
]

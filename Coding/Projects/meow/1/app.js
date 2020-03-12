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
  });
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
  }
]

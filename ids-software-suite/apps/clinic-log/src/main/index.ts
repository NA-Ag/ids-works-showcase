import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { startServer } from '../server';
import { getLocalIPAddress } from '@ids/network-wizard';

const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged;
let mainWindow: BrowserWindow | null = null;

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 1024,
    minHeight: 768,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    title: 'IDS Clinic Log',
    show: false,
  });

  mainWindow.setMenuBarVisibility(false);

  if (isDev) {
    mainWindow.loadURL('http://localhost:3007');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, '../../dist/client/index.html'));
  }

  mainWindow.once('ready-to-show', () => {
    mainWindow?.show();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

ipcMain.handle('get-host-ip', () => {
  return getLocalIPAddress();
});

app.whenReady().then(async () => {
  try {
    console.log('Starting internal Clinic server...');
    await startServer(3007);
    console.log('Clinic Server started successfully.');
    createWindow();
  } catch (error) {
    console.error('Failed to start application:', error);
    app.quit();
  }

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

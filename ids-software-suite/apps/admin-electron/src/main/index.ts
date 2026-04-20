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
    title: 'IDS Admin Suite',
    show: false, // Don't show until ready-to-show
  });

  // Remove default menu for cleaner look
  mainWindow.setMenuBarVisibility(false);

  if (isDev) {
    // In dev, load the Vite dev server
    mainWindow.loadURL('http://localhost:5173');
    mainWindow.webContents.openDevTools();
  } else {
    // In production, load the built React files
    mainWindow.loadFile(path.join(__dirname, '../../dist/client/index.html'));
  }

  mainWindow.once('ready-to-show', () => {
    mainWindow?.show();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// IPC Handlers for the React Frontend
ipcMain.handle('get-host-ip', () => {
  return getLocalIPAddress();
});

// App Lifecycle
app.whenReady().then(async () => {
  try {
    // 1. Start the internal Express/SQLite server first
    console.log('Starting internal server...');
    await startServer(3000);
    console.log('Server started successfully.');
    
    // 2. Create the Electron window
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

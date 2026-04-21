import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  getHostIP: () => ipcRenderer.invoke('get-host-ip'),
});
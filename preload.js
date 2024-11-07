const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  scanNetwork: async () => {
    const result = await ipcRenderer.invoke('scan-network')
    return result
  },
})

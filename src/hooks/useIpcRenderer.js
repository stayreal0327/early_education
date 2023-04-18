import { useEffect } from 'react';

const useIpcRenderer = (keyCallbackMap) => {
  useEffect(() => {
    Object.keys(keyCallbackMap).forEach((key) => {
      if (window.electron) {
        window.electron.ipcRenderer.addListener(key, keyCallbackMap[key]);
      }
    });

    return () => {
      Object.keys(keyCallbackMap).forEach((key) => {
        // electronApi.removeListener(key, keyCallbackMap[key])
        if (window.electron) {
          window.electron.ipcRenderer.removeAllListeners(key);
        }
      });
    };
  });
};

export default useIpcRenderer;

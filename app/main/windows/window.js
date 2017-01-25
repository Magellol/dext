const { BrowserWindow } = require('electron');
const {
  WINDOW_DEFAULT_WIDTH,
  WINDOW_DEFAULT_HEIGHT,
  // WINDOW_MIN_HEIGHT,
  WINDOW_MAX_HEIGHT,
} = require('../../constants');

module.exports = function window(theme) {
  function getDefaultOptions() {
    return {
      width: WINDOW_DEFAULT_WIDTH,
      height: WINDOW_DEFAULT_HEIGHT,
      maxHeight: WINDOW_MAX_HEIGHT,
      center: false,
      frame: false,
      show: false,
      minimizable: false,
      maximizable: false,
      hasShadow: true,
      skipTaskbar: true,
      transparent: true,
    };
  }

  function createWindow() {
    const options = Object.assign({}, getDefaultOptions(), {
      backgroundColor: (theme && theme.window.backgroundColor) ? theme.window.backgroundColor : '#FFF',
    });

    return new BrowserWindow(options);
  }

  let windowInstance = null;

  return {
    getInstance() {
      windowInstance = windowInstance || createWindow();
      return windowInstance;
    },
  };
};

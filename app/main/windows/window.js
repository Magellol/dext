const { BrowserWindow } = require('electron');
const {
  WINDOW_DEFAULT_WIDTH,
  WINDOW_DEFAULT_HEIGHT,
  // WINDOW_MIN_HEIGHT,
  WINDOW_MAX_HEIGHT,
} = require('../../constants');

module.exports = function windowFactory(theme) {
  let windowInstance = null;

  function createWindow(options) {
    const allOptions = Object.assign({}, options, {
      backgroundColor: (theme && theme.window.backgroundColor) ? theme.window.backgroundColor : '#FFF',
    });

    return new BrowserWindow(allOptions);
  }

  return {
    getDefaultOptions() {
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
    },
    getInstance() {
      const options = this.getDefaultOptions();

      windowInstance = windowInstance || createWindow(options);
      return windowInstance;
    },
  };
};

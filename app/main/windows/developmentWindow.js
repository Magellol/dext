const productionWindow = require('./window');
const { WINDOW_MAX_HEIGHT } = require('../../constants');

const { assign } = Object;

module.exports = function developmentWindowFactory() {
  const window = productionWindow();

  return assign({}, window, {
    getDefaultOptions() {
      return assign({}, window.getDefaultOptions(), {
        height: WINDOW_MAX_HEIGHT,
        transparent: false,
      });
    },
  });
};

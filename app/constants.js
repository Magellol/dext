const path = require('path');

module.exports = {
  MAX_RESULTS: 20,
  IS_DEV: process.env.NODE_ENV === 'development',
  CORE_PLUGIN_PATH: path.resolve(__dirname, '..', 'resources', 'plugins'),
  DEBOUNCE_TIME: 150, // in milliseconds
  WINDOW_DEFAULT_WIDTH: 700,
  WINDOW_DEFAULT_HEIGHT: 80,
  WINDOW_MIN_HEIGHT: 80,
  WINDOW_MAX_HEIGHT: 710, // results + query + padding
};

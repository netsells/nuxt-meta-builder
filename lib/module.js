const path = require('path');

/**
 * Module registration function
 */
function metaBuilderModule() {
  // Register plugin
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: 'meta-builder.js',
  });
}

module.exports = metaBuilderModule;
module.exports.meta = require('../package.json');

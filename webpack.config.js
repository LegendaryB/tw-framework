const path = require('path');

module.exports = {
  entry: './src/lib.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.js',
  },
};
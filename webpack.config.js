const path = require('path');

module.exports = {
  entry: './src/framework.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'framework.js',
  },
};
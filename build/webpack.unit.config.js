var vue = require('vue-loader');

module.exports = {
  entry: './unit/main.js',
  output: {
    path: './unit',
    filename: 'test-bundle.js',
    publicPath: 'unit'
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }]
  },
  devtool: 'source-map'
};

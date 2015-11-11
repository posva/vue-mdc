var vue = require('vue-loader');
var path = require('path');

module.exports = {
  entry: './unit/main.coffee',
  output: {
    path: './unit',
    filename: 'test-bundle.js',
    publicPath: 'unit'
  },
  module: {
    loaders: [{
      test: /\.coffee$/,
      include: [
        path.resolve(__dirname, '../unit')
      ],
      loader: 'coffee-loader'
    }, {
      test: /\.vue$/,
      loader: 'vue'
    }]
  },
  devtool: 'source-map'
};

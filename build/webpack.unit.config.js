var vue = require('vue-loader');
var path = require('path');

module.exports = {
  entry: './test/unit/main.coffee',
  output: {
    path: './test/unit',
    filename: 'unit-bundle.js',
    publicPath: 'test/unit'
  },
  module: {
    loaders: [{
      test: /\.coffee$/,
      include: [
        path.resolve(__dirname, '../test/unit')
      ],
      loader: 'coffee-loader'
    }, {
      test: /\.vue$/,
      loader: 'vue'
    }]
  },
  devtool: 'source-map'
};

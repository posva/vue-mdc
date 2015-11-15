var vue = require('vue-loader');
var path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist',
    publicPath: 'dist',
    filename: 'vue-mdl.js',
    library: 'vmdl',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.coffee$/,
      include: [
        path.resolve(__dirname, '../src')
      ],
      loader: 'coffee-loader'
    }, {
      test: /\.vue$/,
      loader: 'vue'
    }]
  },
  devtool: 'source-map'
};

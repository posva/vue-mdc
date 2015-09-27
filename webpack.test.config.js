var vue = require('vue-loader');

module.exports = {
  entry: './test/main.js',
  output: {
    path: './test',
    filename: 'test-bundle.js',
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: vue.withLoaders({})
    }]
  },
  devtool: 'source-map'
};

var vue = require('vue-loader');

module.exports = {
  entry: {
    main: './test/main.js',
    e2e: './test/e2e.js',
  },
  output: {
    path: './test/dist',
    filename: '[name]/bundle.js',
    publicPath: 'test/dist',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }]
  },
  devtool: 'source-map'
};

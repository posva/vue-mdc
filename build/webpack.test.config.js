var path = require('path');

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
  vue: {
    preLoaders: {
      coffee: 'coffeelint'
    }
  },
  module: {
    loaders: [{
      test: /\.coffee$/,
      include: [
        path.resolve(__dirname, '../src')
      ],
      loader: 'coffee!coffeelint'
    }, {
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.css$/,
      loader: 'vue-style!css'
    }]
  },
  devtool: 'source-map'
};

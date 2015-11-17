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
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  },
  devtool: 'source-map'
};

var path = require('path');

module.exports = {
  entry: './doc/src/main.coffee',
  output: {
    path: './doc',
    publicPath: 'doc',
    filename: 'doc-bundle.js',
  },
  module: {
    loaders: [{
      test: /\.coffee$/,
      include: [
        path.resolve(__dirname, '../doc/src'),
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

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
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.(png|jpg|svg)(\?embed)?$/,
      loader: 'url-loader?limit=25000'
    }]
  },
  devtool: 'source-map'
};

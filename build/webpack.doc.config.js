var path = require('path');

module.exports = {
  entry: './doc/src/main.coffee',
  output: {
    path: './doc',
    publicPath: 'doc',
    filename: 'doc-bundle.js',
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
        path.resolve(__dirname, '../doc/src'),
        path.resolve(__dirname, '../src')
      ],
      loader: 'coffee!coffeelint'
    }, {
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.css$/,
      loader: 'vue-style!css'
    }, {
      test: /\.scss$/,
      loaders: ['vue-style', 'css', 'sass']
    }, {
      test: /\.(png|jpg|svg)(\?embed)?$/,
      loader: 'url?limit=25000'
    }]
  },
  devtool: 'source-map'
};

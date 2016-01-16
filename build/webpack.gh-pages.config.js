var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './doc/src/main.coffee',
  output: {
    path: './',
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
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};

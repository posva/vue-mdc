var path = require('path');
var webpack = require('webpack');
var failPlugin = require('webpack-fail-plugin');

module.exports = {
  entry: './src/vue-mdl.js',
  output: {
    path: './dist',
    publicPath: 'dist',
    filename: 'vue-mdl.min.js',
    library: 'vmdl',
    libraryTarget: 'umd'
  },
  vue: {
    preLoaders: {
      coffee: 'coffeelint'
    }
  },
  coffeelint: {
    emitErrors: true,
    failOnErrors: true
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
    }]
  },
  plugins: [
    failPlugin,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  devtool: 'source-map'
};

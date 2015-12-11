var path = require('path');
var failPlugin = require('webpack-fail-plugin');

module.exports = {
  entry: './src/vue-mdl.js',
  output: {
    path: './dist',
    publicPath: 'dist',
    filename: 'vue-mdl.js',
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
    failPlugin
  ],
  devtool: 'source-map'
};

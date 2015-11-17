var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/vue-mdl.js',
  output: {
    path: './dist',
    publicPath: 'dist',
    filename: 'vue-mdl.min.js',
    library: 'vmdl',
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
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  devtool: 'source-map'
};

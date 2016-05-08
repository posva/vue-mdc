// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

var path = require('path')
var merge = require('webpack-merge')
var baseConfig = require('../../build/webpack.base.conf')
var utils = require('../../build/utils')
var projectRoot = path.resolve(__dirname, '../../')
var karmaConf = require('./karma.base.conf')

var webpackConfig = merge(baseConfig, {
  // use inline sourcemap for karma-sourcemap-loader
  module: {
    loaders: utils.styleLoaders()
  },
  devtool: '#inline-source-map',
})

// no need for app entry during tests
delete webpackConfig.entry

karmaConf.webpack = webpackConfig

module.exports = function (config) {
  config.set(karmaConf)
}

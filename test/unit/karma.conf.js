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
  vue: {
    loaders: {
      js: 'isparta'
    }
  },
  isparta: {
    exclude: ['**/test/**']
  }
})

// no need for app entry during tests
delete webpackConfig.entry

// make sure isparta loader is applied before eslint
webpackConfig.module.preLoaders = webpackConfig.module.preLoaders || []
webpackConfig.module.preLoaders.unshift({
  test: /\.js$/,
  loader: 'isparta',
  include: projectRoot,
  exclude: /test\/unit|node_modules|test\/components/
})

// only apply babel for test files when using isparta
webpackConfig.module.loaders.forEach(function (loader, i) {
  if (loader.loader === 'babel') {
    loader.include = /test\/unit/
  }
})

karmaConf.webpack = webpackConfig
karmaConf.reporters.push('coverage')
karmaConf.coverageReporter = {
  dir: './coverage',
  reporters: [
    { type: 'lcov', subdir: '.' },
    { type: 'text-summary' }
  ]
}

module.exports = function (config) {
  config.set(karmaConf)
}

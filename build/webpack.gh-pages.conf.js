var webpack = require('webpack')
var config = require('./webpack.doc.conf')

// naming output files with hashes for better caching.
// dist/index.html will be auto-generated with correct URLs.
config.output.publicPath = undefined
config.output.filename = 'doc-bundle.js'

config.plugins = (config.plugins || []).concat([
  // http://vuejs.github.io/vue-loader/workflow/production.html
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  })
])

module.exports = config

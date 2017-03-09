const merge = require('webpack-merge')
const base = require('./webpack.config.common')
const { filename } = require('./utils')

module.exports = merge(base, {
  output: {
    filename: `${filename}.esm.js`,
    libraryTarget: 'commonjs-module',
  },
  target: 'node',
})

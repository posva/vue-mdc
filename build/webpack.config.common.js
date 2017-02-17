const merge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const base = require('./webpack.config.base')
const { resolve } = require('path')

module.exports = merge(base, {
  output: {
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: resolve(__dirname, `../reports/${process.env.NODE_ENV}.html`),
    }),
  ],
})

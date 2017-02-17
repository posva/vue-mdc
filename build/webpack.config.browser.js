const merge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const base = require('./webpack.config.base')
const { resolve } = require('path')
const {
  filename,
  moduleName,
} = require('./utils')

module.exports = merge(base, {
  output: {
    filename: `${filename}.js`,
    library: moduleName,
    libraryTarget: 'umd',
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: resolve(__dirname, `../reports/${process.env.NODE_ENV}.html`),
    }),
  ],
})

const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const base = require('./webpack.config.base')
const { resolve } = require('path')
const {
  filename,
  moduleName
} = require('./utils')

const rootDir = resolve(__dirname, '../test')
const buildPath = resolve(rootDir, 'dist')

module.exports = merge(base, {
  entry: {
    tests: resolve(rootDir, 'visual.js'),
  },
  output: {
    path: buildPath,
    filename: '[name].js',
    chunkFilename: '[id].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunkSortMode: 'dependency',
    }),
    // new AddAssetHtmlPlugin({ filepath: require.resolve(
    //   path.join(buildPath, dllName) + '.dll.js'
    // ) }),
    new DashboardPlugin(),
  ],
  devtool: '#eval-source-map',
  devServer: {
    inline: true,
    stats: {
      colors: true,
      chunks: false,
      cached: false,
    },
    contentBase: buildPath,
  },
  performance: {
    hints: false,
  },
})

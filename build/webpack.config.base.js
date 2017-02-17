const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { resolve, join } = require('path')

const {
  banner,
  filename,
  version
} = require('./utils')

// It'd be better to add a sass property to the vue-loader options
// but it simply don't work
const sassOptions = {
  includePaths: [
    join(__dirname, '../node_modules')
  ]
}

module.exports = {
  output: {
    path: './dist',
    filename: `${filename}.common.js`,
  },
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
        include: [
          resolve(__dirname, '../node_modules'),
          resolve(__dirname, '../src'),
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract('css-loader'),
            scss: ExtractTextPlugin.extract(
              `css-loader!sass-loader?${JSON.stringify(sassOptions)}`
            ),
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      '__VERSION__': JSON.stringify(version),
    }),
    new ExtractTextPlugin(`${filename}.css`),
    new webpack.BannerPlugin({banner, raw: true, entryOnly: true}),
  ],
}

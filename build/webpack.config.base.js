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

// don't extract css in test mode
const vueLoaders = process.env.BABEL_ENV === 'test'
      ?
        {
          scss: `css-loader!sass-loader?${JSON.stringify(sassOptions)}`,
        }
      :
        {
          css: ExtractTextPlugin.extract('css-loader'),
          scss: ExtractTextPlugin.extract(
            `css-loader!sass-loader?${JSON.stringify(sassOptions)}`
          ),
        }

const plugins = [
  new webpack.DefinePlugin({
    '__VERSION__': JSON.stringify(version),
    'process.env.NODE_ENV': '"test"',
  }),
  new webpack.BannerPlugin({banner, raw: true, entryOnly: true}),
]

// Don't extract css in test mode
if (process.env.BABEL_ENV !== 'test') {
  plugins.push(
    new ExtractTextPlugin(`${filename}.css`)
  )
}

module.exports = {
  output: {
    path: resolve(__dirname, '../dist'),
    filename: `${filename}.common.js`,
  },
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.vue', '.jsx', 'css'],
    alias: {
      'src': resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
        include: [
          resolve(__dirname, '../node_modules/@material'),
          resolve(__dirname, '../src'),
          resolve(__dirname, '../test'),
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: vueLoaders,
        },
      },
    ],
  },
  plugins,
}

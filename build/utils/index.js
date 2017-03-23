const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { join } = require('path')

const {
  red,
  logError,
} = require('./log')

const uppercamelcase = require('uppercamelcase')

exports.write = require('./write')

const {
  author,
  name,
  version,
  dllPlugin,
} = require('../../package.json')

const authorName = author.replace(/\s+<.*/, '')
const minExt = process.env.NODE_ENV === 'production' ? '.min' : ''

exports.author = authorName
exports.version = version
exports.dllName = dllPlugin.name
exports.name = name
exports.moduleName = uppercamelcase(name)
exports.filename = name + minExt
exports.banner = `/*!
 * ${name} v${version}
 * (c) ${new Date().getFullYear()} ${authorName}
 * Released under the MIT License.
 */
`

// log.js
exports.red = red
exports.logError = logError

// It'd be better to add a sass property to the vue-loader options
// but it simply don't work
const sassOptions = {
  includePaths: [
    join(__dirname, '../../node_modules'),
  ],
}

// don't extract css in test mode
const nullLoader = /(common|esm)/.test(process.env.NODE_ENV) ? 'null-loader!' : ''
exports.vueLoaders =
  process.env.BABEL_ENV === 'test' ? {
    scss: `css-loader!sass-loader?${JSON.stringify(sassOptions)}`,
  } : {
    scss: ExtractTextPlugin.extract(
      `${nullLoader}css-loader!sass-loader?${JSON.stringify(sassOptions)}`
    ),
  }

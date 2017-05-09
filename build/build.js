const mkdirp = require('mkdirp')
const rollup = require('rollup').rollup
const vue = require('rollup-plugin-vue')
const buble = require('rollup-plugin-buble')
const replace = require('rollup-plugin-replace')
const cjs = require('rollup-plugin-commonjs')
const node = require('rollup-plugin-node-resolve')
const scss = require('rollup-plugin-scss')
const uglify = require('uglify-js')

// Make sure dist dir exists
mkdirp('dist')

const {
  logError,
  write,
  banner,
  name,
  moduleName,
  version,
} = require('./utils')

function rollupBundle ({ env, entry }) {
  return rollup({
    entry: entry || 'src/index.js',
    plugins: [
      scss({ output: false }),
      node({
        extensions: ['.js', '.jsx', '.vue'],
      }),
      cjs(),
      vue({ compileTemplate: true, css: false }),
      replace(Object.assign({
        __VERSION__: version,
      }, env)),
      buble({
        objectAssign: 'Object.assign',
      }),
    ],
  })
}

const bundleOptions = {
  banner,
  exports: 'named',
  format: 'umd',
  moduleName,
}

function createBundle ({ name, env, entry, format }) {
  return rollupBundle({
    env,
    entry,
  }).then(function (bundle) {
    const options = Object.assign({}, bundleOptions)
    if (format) options.format = format
    const code = bundle.generate(options).code
    if (/min$/.test(name)) {
      const minified = uglify.minify(code, {
        output: {
          preamble: banner,
          ascii_only: true, // eslint-disable-line camelcase
        },
      }).code
      return write(`dist/${name}.js`, minified)
    } else {
      return write(`dist/${name}.js`, code)
    }
  }).catch(logError)
}

// Browser bundle (can be used with script)
createBundle({
  name: `${name}`,
  env: {
    'process.env.NODE_ENV': '"development"',
  },
})

// Commonjs bundle (preserves process.env.NODE_ENV) so
// the user can replace it in dev and prod mode
createBundle({
  name: `${name}.esm`,
  env: {},
  format: 'es',
})

createBundle({
  name: `${name}.common`,
  env: {},
  format: 'cjs',
})

// Minified version for browser
createBundle({
  name: `${name}.min`,
  env: {
    'process.env.NODE_ENV': '"production"',
  },
})

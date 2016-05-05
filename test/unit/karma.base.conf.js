module.exports = {
  browsers: ['PhantomJS'],
  frameworks: ['mocha', 'chai-dom', 'sinon-chai'],
  reporters: ['spec'],
  files: ['./index.js'],
  preprocessors: {
    './index.js': ['webpack', 'sourcemap']
  },
  webpackMiddleware: {
    noInfo: true
  },
  client: {
    chai: {
      includeStack: true
    }
  }
}

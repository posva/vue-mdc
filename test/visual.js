import 'style-loader!css-loader!mocha-css'
import 'style-loader!css-loader!./helpers/style.css'

// create a div where mocha can add its stuff
const mochaDiv = document.createElement('DIV')
mochaDiv.id = 'mocha'
document.body.appendChild(mochaDiv)

import 'mocha/mocha.js'
import chai from 'chai'
window.mocha.setup('bdd')
chai.should()

beforeEach(function () {
  this.DOMElement = document.createElement('DIV')
  this.DOMElement.id = `test-${Math.floor(Math.random() * 1000000)}`
  document.body.appendChild(this.DOMElement)
})

afterEach(function () {
  const testReportElements = document.getElementsByClassName('test')
  const lastReportElement = testReportElements[testReportElements.length - 1]

  if (!lastReportElement) return
  const el = document.getElementById(this.DOMElement.id)
  lastReportElement.appendChild(el)
  if (this.DOMElement.vm) this.DOMElement.vm.visible = false
})

const specsContext = require.context('./specs', true)
specsContext.keys().forEach(specsContext)

window.mocha.checkLeaks()
window.mocha.run()

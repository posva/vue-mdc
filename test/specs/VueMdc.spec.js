import VueMdc from 'src'
import { Vue } from '../helpers/utils.js'

function comp (name) {
  return function () {
    should.exist(Vue.component(name))
  }
}

function dir (name) {
  return function () {
    should.exist(Vue.directive(name))
  }
}

describe('VueMdc', function () {
  describe('Register components', function () {
    before(function () {
      Vue.use(VueMdc)
    })

    it('registers MdcButton', comp('MdcButton'))
    it('registers MdcCard', comp('MdcCard'))
    it('registers v-ripple', dir('ripple'))
  })
  describe('Prefixes', function () {
    before(function () {
      VueMdc.installed = false
      Vue.use(VueMdc, {
        prefix: 'Ui',
      })
    })
    it('registers UiButton', comp('UiButton'))
    console.log(Vue.compile('<ui-button>Hey</ui-button>'))
  })
})

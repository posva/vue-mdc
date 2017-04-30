import VueMdc from 'src'
import { Vue } from '../helpers/utils.js'

Vue.use(VueMdc)

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
  it('registers MdcButton', comp('MdcButton'))
  it('registers MdcCard', comp('MdcCard'))
  it('registers v-ripple', dir('ripple'))
})

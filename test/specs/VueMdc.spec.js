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

    it('registers MdcCheckbox', comp('MdcCheckbox'))

    it('registers MdcCard', comp('MdcCard'))
    it('registers MdcCard', comp('MdcCard'))
    it('registers MdcCardActions', comp('MdcCardActions'))
    it('registers MdcCardHorizontalBlock', comp('MdcCardHorizontalBlock'))
    it('registers MdcCardMedia', comp('MdcCardMedia'))
    it('registers MdcCardPrimary', comp('MdcCardPrimary'))
    it('registers MdcCardSubtitle', comp('MdcCardSubtitle'))
    it('registers MdcCardSupportingText', comp('MdcCardSupportingText'))
    it('registers MdcCardTitle', comp('MdcCardTitle'))

    it('registers MdcDrawer', comp('MdcDrawer'))
    it('registers MdcDrawerHeader', comp('MdcDrawerHeader'))
    it('registers MdcDrawerNav', comp('MdcDrawerNav'))
    it('registers MdcDrawerNavItem', comp('MdcDrawerNavItem'))

    it('registers MdcList', comp('MdcList'))
    it('registers MdcListDivider', comp('MdcListDivider'))

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

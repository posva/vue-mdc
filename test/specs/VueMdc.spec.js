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

const components = [
  'Button',

  'Checkbox',

  'Card',
  'Card',
  'CardActions',
  'CardHorizontalBlock',
  'CardMedia',
  'CardPrimary',
  'CardSubtitle',
  'CardSupportingText',
  'CardTitle',

  'Drawer',
  'DrawerHeader',
  'DrawerNav',
  'DrawerNavItem',

  'List',
  'ListDivider',
]

describe('VueMdc', function () {
  describe('Register components', function () {
    before(function () {
      Vue.use(VueMdc)
    })

    components.forEach(name => {
      it(`registers Mdc${name}`, comp(`Mdc${name}`))
    })

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

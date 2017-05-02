import VueMdc from 'src'
import * as all from 'src'
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

  'Card',
  'CardActions',
  'CardHorizontalBlock',
  'CardMedia',
  'CardPrimary',
  'CardSubtitle',
  'CardSupportingText',
  'CardTitle',

  'Checkbox',

  'Dialog',

  'Drawer',
  'DrawerHeader',
  'DrawerNav',
  'DrawerNavItem',

  'List',
  'ListDivider',
  'ListItem',
]

describe('VueMdc', function () {
  it('exporting all components', function () {
    Object.keys(all).should.eql(
      ['version', ...components, 'ripple', 'default']
    )
  })

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
  })
})

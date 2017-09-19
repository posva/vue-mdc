import VueMdc from 'src'
import * as all from 'src'
import { Vue } from '../helpers/utils'

function comp (Vue, name) {
  return function () {
    should.exist(Vue.component(name))
  }
}

function dir (Vue, name) {
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
  'DialogHeaderTitle',

  'Drawer',
  'DrawerHeader',
  'DrawerNav',
  'DrawerNavItem',

  'Fab',

  'List',
  'ListDivider',
  'ListItem',

  'Toolbar',
  'ToolbarRow',
  'ToolbarSection',
]

describe('VueMdc', function () {
  it('exporting all components', function () {
    Object.keys(all).should.eql(
      ['version', ...components, 'ripple', 'default']
    )
  })

  describe('Register components', function () {
    const Vue1 = Vue.extend()
    components.forEach(name => {
      Vue1.use(VueMdc)
      it(`registers Mdc${name}`, comp(Vue1, `Mdc${name}`))
    })

    it('registers v-ripple', dir(Vue1, 'ripple'))
  })

  describe('Prefixes', function () {
    const Vue2 = Vue.extend()
    before(function () {
      VueMdc.installed = false
      Vue2.use(VueMdc, {
        prefix: 'Ui',
      })
    })
    components.forEach(name => {
      it(`registers Ui${name}`, comp(Vue2, `Ui${name}`))
    })
  })
})

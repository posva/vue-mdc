import Drawer from 'src/Drawer/Drawer'
import DrawerNav from 'src/Drawer/DrawerNav'
import DrawerNavItem from 'src/Drawer/DrawerNavItem'
import DrawerHeader from 'src/Drawer/DrawerHeader'
import ListDivider from 'src/List/ListDivider'
import {
  createVM,
  dataPropagationTest,
  nextTick,
} from '../helpers'

describe('Drawer', function () {
  it('renders an upgraded drawer', function () {
    const vm = createVM(this, `
<Drawer></Drawer>
`, {
  components: { Drawer },
})
    vm
  })

  it('keeps original tag data', dataPropagationTest(Drawer))

  it('is temporary by default', function () {
    const vm = createVM(this, h => (
      <Drawer ref='drawer'>
      </Drawer>
    ))
    vm.$refs.drawer.$el.should.have.class('mdc-temporary-drawer')
  })

  describe('temporary', function () {
    describe('no content', function () {
      beforeEach(function () {
        this.vm = createVM(this, function (h) {
          return (
            <div>
              <Drawer ref='drawer'>
              </Drawer>
              <button onClick={() => this.$refs.drawer.toggle()}>Toggle</button>
            </div>
          )
        })
      })

      it('can be set as temporary', function () {
        this.vm.$refs.drawer.$el.should.have.class('mdc-temporary-drawer')
      })

      it('can toggled', function (done) {
        this.vm.$refs.drawer.$el.should.not.have.class('mdc-temporary-drawer--open')
        this.vm.$refs.drawer.toggle()
        nextTick().then(() => {
          this.vm.$refs.drawer.$el.should.have.class('mdc-temporary-drawer--open')
          this.vm.$refs.drawer.toggle()
        }).then(() => {
          this.vm.$refs.drawer.$el.should.not.have.class('mdc-temporary-drawer--open')
        }).then(done)
      })

      it('can be closed', function (done) {
        this.vm.$refs.drawer.$el.should.not.have.class('mdc-temporary-drawer--open')
        this.vm.$refs.drawer.close()
        nextTick().then(() => {
          this.vm.$refs.drawer.$el.should.not.have.class('mdc-temporary-drawer--open')
        }).then(done)
      })

      it('can be opened', function (done) {
        this.vm.$refs.drawer.$el.should.not.have.class('mdc-temporary-drawer--open')
        this.vm.$refs.drawer.open()
        nextTick().then(() => {
          this.vm.$refs.drawer.$el.should.have.class('mdc-temporary-drawer--open')
          // should do nothing
          this.vm.$refs.drawer.open()
        }).then(() => {
          this.vm.$refs.drawer.$el.should.have.class('mdc-temporary-drawer--open')
          this.vm.$refs.drawer.close()
        }).then(done)
      })
    })

    describe('with a nav', function () {
      beforeEach(function () {
        this.vm = createVM(this, function (h) {
          const select = e => {
            this.selected = e.target.textContent
          }
          const menu1 = [
            { icon: 'inbox', text: 'Inbox' },
            { icon: 'star', text: 'Star' },
            { icon: 'send', text: 'Sent Mail' },
            { icon: 'drafts', text: 'Drafts' },
          ]
          const menu2 = [
            { icon: 'email', text: 'All Mail' },
            { icon: 'delete', text: 'Trash' },
            { icon: 'report', text: 'Spam' },
          ]
          const isSelected = id => id === this.selected

          return (
            <div>
              <Drawer ref='drawer'>
                <DrawerHeader
                    slot='header'
                >
                  Header Here
                </DrawerHeader>

                <DrawerNav>
                  {menu1.map(({ icon, text }) => (
                     <DrawerNavItem href='#'
                                    nativeOnClick={select}
                                    selected={isSelected(icon + text)}
                     >
                       <i class='material-icons mdc-list-item__start-detail'
                          aria-hidden='true'>{icon}</i>{text}
                     </DrawerNavItem>
                   ))}
                </DrawerNav>

                <ListDivider/>

                <DrawerNav>
                  {menu2.map(({ icon, text }) => (
                     <DrawerNavItem href='#'
                                    nativeOnClick={select}
                                    selected={isSelected(icon + text)}
                     >
                       <i class='material-icons mdc-list-item__start-detail'
                          aria-hidden='true'>{icon}</i>{text}
                     </DrawerNavItem>
                   ))}
                </DrawerNav>
              </Drawer>
              <button onClick={() => this.$refs.drawer.toggle()}>Toggle</button>
            </div>
          )
        }, {
          data: {
            selected: 'inboxInbox',
          },
        })
      })

      it('holds a header and nav', function () {
        this.vm.$('.mdc-temporary-drawer__header').should.exist
        this.vm.$('.mdc-temporary-drawer__content').should.match('.mdc-list-group')
        this.vm.$('.mdc-list-group .mdc-list').should.contain('.mdc-list-item')
        this.vm.$('.mdc-list-item').should.have.text('inboxInbox')
        this.vm.$('.mdc-list-item').should.have.class('mdc-temporary-drawer--selected')
      })
    })
  })
})

import Dialog from 'src/Dialog/Dialog'
import {
  createVM,
  dataPropagationTest,
  nextTick,
} from '../helpers'

describe('Dialog', function () {
  it('keeps original tag data', dataPropagationTest(Dialog))

  it('can be scrollable', function (done) {
    const vm = createVM(this, function (h) {
      return (
        <div>
          <Dialog scrollable={this.scrollable} ref='dialog'></Dialog>
          <button onClick={() => this.$refs.dialog.open()}>Open</button>
        </div>
      )
    }, {
      data: {
        scrollable: true,
      },
    })

    vm.$('.mdc-dialog__body')
      .should.exist.and.have.class('mdc-dialog__body--scrollable')
    vm.scrollable = false
    nextTick().then(() => {
      vm.$('.mdc-dialog__body')
        .should.exist.and.not.have.class('mdc-dialog__body--scrollable')
    }).then(done)
  })

  it('has a title', function () {
    const vm = createVM(this, function (h) {
      return (
        <div>
          <Dialog title='Title' ref='dialog'></Dialog>
          <button onClick={() => this.$refs.dialog.open()}>Open</button>
        </div>
      )
    })

    vm.$('.mdc-dialog__header').should.exist.and.have.text('Title')
  })

  it('accept button is focused by default', function () {
    const vm = createVM(this, function (h) {
      return (
        <div>
          <Dialog ref='dialog'></Dialog>
          <button onClick={() => this.$refs.dialog.open()}>Open</button>
        </div>
      )
    })

    vm.$('.mdc-dialog__footer__button--accept')
      .should.exist
      .and.have.text('OK')
      .and.be.focused
  })

  it('can be toggled', function (done) {
    const vm = createVM(this, function (h) {
      return (
        <div>
          <Dialog ref='dialog'></Dialog>
          <button onClick={() => this.$refs.dialog.open()}>Open</button>
        </div>
      )
    })
    vm.$refs.dialog.$el.should.have.class('mdc-dialog')
    vm.$refs.dialog.$el.should.be.hidden
    vm.$refs.dialog.open()
    nextTick().then(() => {
      vm.$refs.dialog.$el.should.not.be.hidden
      vm.$refs.dialog.close()
    }).then(() => {
      vm.$refs.dialog.$el.should.be.hidden
    }).then(done)
  })

  it('displays its content', function () {
    const vm = createVM(this, function (h) {
      return (
        <div>
          <Dialog ref='dialog'>
            Dialog content
          </Dialog>
          <button onClick={() => this.$refs.dialog.open()}>Open</button>
        </div>
      )
    })
    vm.$('.mdc-dialog__body').should.exist.and.have.text('Dialog content')
  })

  it('is visible if content changes', function (done) {
    const vm = createVM(this, function (h) {
      return (
        <div>
          <Dialog ref='dialog'>
            <div class='content'>
              n: {this.n}
            </div>
            <button onClick={() => this.n++}>+</button>
            <button onClick={() => this.n--}>-</button>
          </Dialog>
          <button onClick={() => this.$refs.dialog.open()}>Open</button>
        </div>
      )
    }, {
      data: {
        n: 0,
      },
    })
    vm.$('.content').should.exist.and.have.text('n: 0')
    vm.$refs.dialog.$el.should.be.hidden
    vm.$refs.dialog.open()
    nextTick().then(() => {
      vm.$refs.dialog.$el.should.not.be.hidden
      vm.n = 20
    }).then(() => {
      vm.$refs.dialog.$el.should.not.be.hidden
      vm.$('.content').should.exist.and.have.text('n: 20')
    }).then(done)
  })

  ;['accept', 'cancel'].map(type => {
    it(`displays a ${type} button`, function (done) {
      const vm = createVM(this, function (h) {
        const data = {
          props: {
            [`${type}Text`]: this.text,
          },
        }
        return (
          <div>
            <Dialog ref='dialog' { ...data }>
              Dialog content
            </Dialog>
            <button onClick={() => this.$refs.dialog.open()}>Open</button>
          </div>
        )
      }, {
        data: {
          text: 'Yes',
        },
      })
      vm.$(`.mdc-dialog__footer__button--${type}`)
        .should.exist.and.have.text('Yes')
      vm.text = undefined
      nextTick().then(() => {
        if (type === 'cancel') {
          vm.$(`.mdc-dialog__footer__button--${type}`).should.not.exist
        } else if (type === 'accept') {
          // default text for accept
          vm.$(`.mdc-dialog__footer__button--${type}`).should.exist
        }
        vm.text = 'Yes'
      }).then(done)
    })
  })

  it('has a ripple in buttons', function () {
    const vm = createVM(this, function (h) {
      return (
        <div>
          <Dialog ref='dialog'></Dialog>
          <button onClick={() => this.$refs.dialog.open()}>Open</button>
        </div>
      )
    }, {
      data: {
        n: 0,
      },
    })
    vm.$('.mdc-dialog__footer__button--accept').should.exist.and.have.class('mdc-ripple-surface')
  })

  describe('Events', function () {
    it('accepted', function (done) {
      const spy = sinon.spy()
      const vm = createVM(this, function (h) {
        return (
          <div>
            <Dialog ref='dialog' onAccepted={spy} acceptText={this.text}>
              Dialog content
            </Dialog>
            <button onClick={() => this.$refs.dialog.open()}>Open</button>
          </div>
        )
      }, {
        data: {
          text: 'Yes',
        },
      })
      vm.$refs.dialog.open()
      vm.text = 'ok'
      nextTick().then(() => {
        spy.should.have.not.been.called
        vm.$('.mdc-dialog__footer__button--accept').click()
      }).then(() => {
        spy.should.have.been.called
      }).then(done)
    })

    it('canceled', function (done) {
      const spy = sinon.spy()
      const vm = createVM(this, function (h) {
        return (
          <div>
            <Dialog ref='dialog' onCanceled={spy} cancelText={this.text}>
              Dialog content
            </Dialog>
            <button onClick={() => this.$refs.dialog.open()}>Open</button>
          </div>
        )
      }, {
        data: {
          text: 'No',
        },
      })
      vm.$refs.dialog.open()
      vm.text = 'nope'
      nextTick().then(() => {
        spy.should.have.not.been.called
        vm.$('.mdc-dialog__footer__button--cancel').click()
      }).then(() => {
        spy.should.have.been.called
      }).then(done)
    })
  })
})

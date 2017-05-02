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

    vm.$('.mdc-dialog__body').should.have.class('mdc-dialog__body--scrollable')
    vm.scrollable = false
    nextTick().then(() => {
      vm.$('.mdc-dialog__body').should.not.have.class('mdc-dialog__body--scrollable')
    }).then(done)
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
    vm.$('.mdc-dialog__body').should.have.text('Dialog content')
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
    vm.$('.content').should.have.text('n: 0')
    vm.$refs.dialog.$el.should.be.hidden
    vm.$refs.dialog.open()
    nextTick().then(() => {
      vm.$refs.dialog.$el.should.not.be.hidden
      vm.n = 20
    }).then(() => {
      vm.$refs.dialog.$el.should.not.be.hidden
      vm.$('.content').should.have.text('n: 20')
    }).then(done)
  })
})

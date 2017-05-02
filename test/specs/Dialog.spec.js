import Dialog from 'src/Dialog/Dialog'
import {
  createVM,
  dataPropagationTest,
  nextTick,
} from '../helpers'

describe('Dialog', function () {
  it('keeps original tag data', dataPropagationTest(Dialog))

  it('can be toggled', function (done) {
    const vm = createVM(this, function (h) {
      return (
        <div>
          <Dialog ref='dialog'>
            Here is my content lol
          </Dialog>
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
})

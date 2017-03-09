import { createVM, Vue } from './utils'
import { nextTick } from './wait-for-update'

export function dataPropagationTest (Component) {
  return function () {
    const spy = sinon.spy()
    const vm = createVM(this, function (h) {
      return (
          <Component staticClass='custom' onClick={spy}>Hello</Component>
      )
    })
    spy.should.have.not.been.called
    vm.$('.custom').should.exist
    vm.$('.custom').click()
    spy.should.have.been.calledOnce
  }
}

export {
  createVM,
  Vue,
  nextTick,
}

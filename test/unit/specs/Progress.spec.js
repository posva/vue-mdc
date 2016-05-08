import Progress from '../../components/Progress'
import { vueTest } from '../utils'

describe('Progress', () => {
  let vm
  let progress, indeterminate, pbar, bbar
  before(() => {
    vm = vueTest(Progress)
    progress = vm.$('#progress')
    indeterminate = vm.$('#indeterminate')
    pbar = vm.$('#progress .progressbar')
    bbar = vm.$('#buffer .bufferbar')
  })

  it('exists', () => {
    progress.should.exist
    progress.should.be.visible
  })

  it('is upgraded', () => {
    progress.should.have.class('mdl-progress')
    progress.should.have.attr('data-upgraded')
    .match(/MaterialProgress/)
  })

  it('applies classes even with empty strings in props', () => {
    let prog = vm.$('#html-progress')
    prog.should.have.class('mdl-progress__indeterminate')
  })

  it('starts with the right value', () => {
    pbar.should.have.attr('style')
    .match(/width: 44%/)
  })

  it('can bufferize', () => {
    bbar.should.have.attr('style')
    .match(/width: 80%/)
  })

  it('updates if the variable does', (done) => {
    vm.progress = 80
    vm.nextTick()
    .then(() => {
      pbar.should.have.attr('style')
      .match(/width: 80%/)
      vm.buffer = 90
      return vm.nextTick()
    }).then(() => {
      bbar.should.have.attr('style')
      .match(/width: 90%/)
      return vm.nextTick()
    }).then(done, done)
  })

  it('can change to indeterminate', (done) => {
    indeterminate.should.not.have.class('mdl-progress__indeterminate')
    vm.indeterminate = true
    vm.nextTick()
    .then(() => {
      indeterminate.should.have.class('mdl-progress__indeterminate')
      return vm.nextTick()
    }).then(done, done)
  })
})

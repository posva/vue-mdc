import ripple from 'src/ripple.js'
import { createVM } from '../helpers/utils.js'
import { nextTick } from '../helpers/wait-for-update.js'

describe('Ripple', function () {
  it('upgrades a div', function (done) {
    const vm = createVM(this, function (h) {
      return (
        <div class='my-ripple' v-ripple>Simple</div>
      )
    }, {
      directives: { ripple },
    })
    nextTick().then(() => {
      const ripple = vm.$('.my-ripple')
      ripple.should.have.class('mdc-ripple-surface')
    }).then(() => {
      const ripple = vm.$('.my-ripple')
      ripple.should.have.class('mdc-ripple-upgraded')
    }).then(done)
  })

  it('can use custom class', function (done) {
    const vm = createVM(
      this,
      `<div class='my-ripple' v-ripple.custom>Custom</div>`,
      { directives: { ripple }}
    )
    nextTick().then(() => {
      const ripple = vm.$('.my-ripple')
      ripple.should.not.have.class('mdc-ripple-surface')
    }).then(() => {
      const ripple = vm.$('.my-ripple')
      ripple.should.have.class('mdc-ripple-upgraded')
    }).then(done)
  })

  it('unbounds events and clases', function (done) {
    const vm = createVM(this, function (h) {
      const opts = {
        directives: [],
      }
      if (this.show) {
        opts.directives.push({
          name: 'ripple',
        })
      }
      return (
        <div class='my-ripple' {...opts}>Unbind</div>
      )
    }, {
      data: {
        show: true,
      },
      directives: { ripple },
    })
    vm.show = false
    nextTick().then(() => {
      const ripple = vm.$('.my-ripple')
      ripple.should.not.have.class('mdc-ripple-upgraded')
      ripple.should.not.have.class('mdc-ripple-surface')
    }).then(done)
  })

  it('works with regular elements', function (done) {
    const vm = createVM(
      this,
      `<div class="my-ripple" v-ripple :key="text">A div</div>`,
      {
        data: {
          text: 'foo',
        },
        directives: { ripple },
      }
    )
    const oldEl = vm.$('.my-ripple')
    vm.text = 'bar'
    nextTick().then(() => {
      // we need to wait an extra tick
    }).then(() => {
      const ripple = vm.$('.my-ripple')
      oldEl.should.not.equal(ripple)
      ripple.should.have.class('mdc-ripple-upgraded')
      ripple.should.have.class('mdc-ripple-surface')
    }).then(done)
  })

  it('works with regular components', function (done) {
    const vm = createVM(
      this,
      `<foo class="my-ripple" v-ripple :key="text">A foo</foo>`,
      {
        data: {
          text: 'foo',
        },
        directives: { ripple },
        components: {
          Foo: {
            template: '<div><slot/></div>',
          },
        },
      }
    )
    const oldEl = vm.$('.my-ripple')
    vm.text = 'bar'
    nextTick().then(() => {
      // we need to wait an extra tick
    }).then(() => {
      const ripple = vm.$('.my-ripple')
      oldEl.should.not.equal(ripple)
      ripple.should.have.class('mdc-ripple-upgraded')
      ripple.should.have.class('mdc-ripple-surface')
    }).then(done)
  })

  it('works with functional components', function (done) {
    const vm = createVM(
      this,
      `<foo class="my-ripple" v-ripple>{{text}}</foo>`,
      {
        data: {
          text: 'foo',
        },
        directives: { ripple },
        components: {
          Foo: {
            functional: true,
            render: (h, { data, children }) => h('div', data, children),
          },
        },
      }
    )
    const oldEl = vm.$('.my-ripple')
    vm.text = 'bar'
    nextTick().then(() => {
      // we need to wait an extra tick
    }).then(() => {
      const ripple = vm.$('.my-ripple')
      // The same object is reused
      oldEl.should.equal(ripple)
      ripple.should.have.class('mdc-ripple-upgraded')
      ripple.should.have.class('mdc-ripple-surface')
    }).then(done)
  })

  it('works when the node is reused', function (done) {
    const vm = createVM(
      this,
      `<div class="my-ripple" v-ripple>{{text}}</div>`,
      {
        data: {
          text: 'foo',
        },
        directives: { ripple },
      }
    )
    const oldEl = vm.$('.my-ripple')
    vm.text = 'bar'
    nextTick().then(() => {
      // we need to wait an extra tick
    }).then(() => {
      const ripple = vm.$('.my-ripple')
      // The same object is reused
      oldEl.should.equal(ripple)
      ripple.should.have.class('mdc-ripple-upgraded')
      ripple.should.have.class('mdc-ripple-surface')
    }).then(done)
  })
})

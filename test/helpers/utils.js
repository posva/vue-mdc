import Vue from 'vue/dist/vue.js'
import Test from './Test.vue'

const isKarma = !!window.__karma__

export function createVM (context, template, opts = {}) {
  return isKarma
    ? createKarmaTest(context, template, opts)
    : createVisualTest(context, template, opts)
}

Vue.prototype.$$ = function $$ (selector) {
  const els = document.querySelectorAll(selector)
  const vmEls = this.$el.querySelectorAll(selector)
  const fn = vmEls.length
          ? el => vmEls.find(el)
          : el => this.$el === el
  return Array.from(els).filter(fn)
}

Vue.prototype.$ = function $ (selector) {
  const els = document.querySelectorAll(selector)
  const vmEl = this.$el.querySelector(selector)
  const fn = vmEl
          ? el => el === vmEl
          : el => el === this.$el
  return Array.from(els).find(fn)
}

export function createKarmaTest (context, template, opts) {
  const el = document.createElement('div')
  document.getElementById('tests').appendChild(el)
  const render = typeof template === 'string'
          ? { template: `<div>${template}</div>` }
          : { render: template }
  return new Vue({
    el,
    name: 'Test',
    ...render,
    ...opts,
  })
}

export function createVisualTest (context, template, opts) {
  let vm
  if (typeof template === 'string') {
    opts.components = opts.components || {}
    // Let the user define a test component
    if (!opts.components.Test) {
      opts.components.Test = Test
    }
    vm = new Vue({
      name: 'TestContainer',
      el: context.DOMElement,
      template: `<Test id="${context.DOMElement.id}">${template}</Test>`,
      ...opts,
    })
  } else {
    // TODO allow redefinition of Test component
    vm = new Vue({
      name: 'TestContainer',
      el: context.DOMElement,
      render (h) {
        return h(Test, {
          attrs: {
            id: context.DOMElement.id,
          },
          // render the passed component with this scope
        }, [template.call(this, h)])
      },
      ...opts,
    })
  }

  context.DOMElement.vm = vm
  return vm
}

export function register (name, component) {
  Vue.component(name, component)
}

export { isKarma, Vue }

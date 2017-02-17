import Vue from 'vue/dist/vue.js'

const isKarma = !!window.__karma__

export function createVM (context, template, opts = {}) {
  return isKarma
    ? createKarmaTest(context, template, opts)
    : createVisualTest(context, template, opts)
}

export function createKarmaTest (context, template, opts) {
  const el = document.createElement('div')
  document.getElementById('tests').appendChild(el)
  const render = typeof template === 'string'
               ? { template }
               : { render: template }
  return new Vue({
    el,
    name: 'Test',
    ...render,
    ...opts
  })
}

export function createVisualTest (context, template, opts) {
  const render = typeof template === 'string'
          ? { template: `
<div :class="containerClasses" id="${context.DOMElement.id}">
<div role="button"
@click="toggle"
class="test-dom-container__toggle"
v-text="buttonText"
></div>
<div class="test-dom-container__content">
${template}
</div>
</div>
` }
        : {
          render (h) {
            return (
              <div class={this.containerClasses}
                   id={context.DOMElement.id}
              >
                <div role='button'
                     onClick={this.toggle}
                     class='test-dom-container__toggle'
                >{this.buttonText}</div>
                <div class='test-dom-container__content'>
                  {
                    h({
                      render: template,
                      name: 'JsxTestContainer',
                      ...opts
                    })
                  }
                </div>
              </div>
            )
          }
        }
  const vm = new Vue({
    el: context.DOMElement,
    data: {
      visible: true
    },
    computed: {
      containerClasses () {
        return {
          'test-dom-container': true,
          'test-dom-container--hidden': !this.visible
        }
      },
      buttonText () {
        return this.visible ? '-' : '+'
      }
    },
    methods: {
      toggle () {
        this.visible = !this.visible
      }
    },
    name: 'Test',
    ...render,
    ...opts
  })

  context.DOMElement.vm = vm
  return vm
}

export function register (name, component) {
  Vue.component(name, component)
}

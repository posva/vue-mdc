import Vue from 'vue'

describe('Hello.vue', () => {
  it('dummy lol', () => {
    const vm = new Vue({
      template: '<div><p>Hello</p></div>',
      components: {}
    }).$mount()

    vm.$el.querySelector('p').textContent.should.contain('Hello')
  })
})

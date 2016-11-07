import Vue from 'vue'

export function vueTest (Component) {
  const Class = Vue.extend(Component)
  Class.prototype.$ = function (selector) {
    return this.$el.querySelector(selector)
  }
  Class.prototype.nextTick = function () {
    return new Promise((resolve) => {
      this.$nextTick(resolve)
    })
  }

  const vm = new Class()
  vm.$mount()

  return vm
}

export function nextTick (vm) {
  return new Promise(function (resolve) {
    if (!vm) Vue.nextTick(resolve)
    else vm.$nextTick(resolve)
  })
}

export function delay (timeout) {
  return new Promise(function (resolve) {
    setTimeout(resolve, timeout)
  })
}

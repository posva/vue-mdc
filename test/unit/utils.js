import Vue from 'vue'
import Promise from 'bluebird'

export default {
  nextTick () {
    return new Promise(function (resolve) {
      Vue.nextTick(resolve)
    })
  },
  timeout (timeout) {
    return new Promise(function (resolve) {
      setTimeout(resolve, timeout)
    })
  },
  attachDirective: {
    bind () {
      if (this.arg) {
        window.vms = window.vms || {}
        this.vm.$children.forEach((vm) => {
          if (vm.$el === this.el) {
            window.vms[this.arg] = this.attachedVm = vm
            return false
          }
        })
      } else {
        window.vm = this.vm.$children[0]
      }
    },
    unbind () {
      if (this.arg) {
        if (window.vms[this.arg] === this.attachedVm) {
          window.vms[this.arg] = null
        }
      } else {
        window.vm = null
      }
    }
  }
}

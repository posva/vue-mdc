Vue = require 'vue'
Promise = require 'bluebird'

module.exports =
  nextTick: -> new Promise (resolve) ->
    Vue.nextTick resolve
  timeout: (timeout) ->
    new Promise (resolve) ->
      setTimeout resolve, timeout
  attachDirective:
    bind: ->
      if @arg
        window.vms ?= {}
        @vm.$children.forEach (vm) =>
          if vm.$el is @el
            window.vms[@arg] = @attachedVm = vm
            false
      else
        window.vm = @vm.$children[0]
    unbind: ->
      if @arg
        if window.vms[@arg] is @attachedVm
          window.vms[@arg] = null
      else
        window.vm = null

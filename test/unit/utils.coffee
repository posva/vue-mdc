Vue = require 'vue'
Promise = require 'bluebird'

module.exports =
  nextTick: -> new Promise (resolve) ->
    Vue.nextTick resolve
  timeout: (timeout) ->
    new Promise (resolve) ->
      setTimeout resolve, timeout

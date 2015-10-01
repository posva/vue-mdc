curry = require 'lodash.curry'
module.exports =
  classToggler: curry (className, val) ->
    if val
      @$el.classList.add className
    else
      @$el.classList.remove className

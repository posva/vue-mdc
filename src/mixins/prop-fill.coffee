# When declaring a prop with no value it should be evaluated to true
# but '' is falsy. As a solution add the
module.exports =
  beforeCompile: ->
    for prop, data of @_props
      @[prop] = prop if data.options.fill and data.raw is ''
    undefined

module.exports =
  bind: ->
    @el.classList.add 'mdl-badge'
    if 'overlap' of @modifiers
      @el.classList.add 'mdl-badge--overlap'
    if 'no-background' of @modifiers
      @el.classList.add 'mdl-badge--no-background'
  update: (value) ->
    if typeof value == 'number' and !value
      @el.removeAttribute 'data-badge'
    else
      @el.setAttribute 'data-badge', value

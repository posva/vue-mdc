checkNumber = (num) ->
  num = parseInt num, 10
  num > 0

dataBadgeSetter = (hide, value) ->
  if hide
    @el.removeAttribute 'data-badge'
  else if not @isNumber or checkNumber value
    @el.setAttribute 'data-badge', value
  else
    @el.removeAttribute 'data-badge'

module.exports =
  bind: ->
    @el.classList.add 'mdl-badge'
    if 'overlap' of @modifiers
      @el.classList.add 'mdl-badge--overlap'
    if 'no-background' of @modifiers
      @el.classList.add 'mdl-badge--no-background'
    @isNumber = 'number' of @modifiers
  params: ['hide-badge']
  paramWatchers:
    hideBadge: (hide) -> dataBadgeSetter.call @, hide, @value
  update: (value) ->
    @value = value
    dataBadgeSetter.call @, @params.hideBadge, value

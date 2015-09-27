<template lang="jade">
label.mdl-checkbox.mdl-js-checkbox.mdl-js-ripple-effect(for='{{* id}}')
  span.mdl-checkbox__label
    content
</template>

<script lang="coffee">
module.exports =
  inherit: true
  data: ->
    unwatch: null
  props:
    id:
      type: String
      required: true
    vModel:
      type: String
      required: true
  ready: ->
    componentHandler.upgradeElement @$el
    # For some reason the last label (ripple effect) isn't upgraded when using
    # the upgradeElements function.
    # See https://github.com/google/material-design-lite/blob/3b1442627ee21040113c0a9a340e177f91cf8188/test/unit/componentHandler.js#L146
    componentHandler.upgradeElement @$el.lastChild
    @unwatch = @$watch @vModel, (val) ->
      # Only called when value changes
      if val
        @$el.classList.add 'is-checked'
      else
        @$el.classList.remove 'is-checked'
  beforeCompile: ->
    inp = document.createElement 'INPUT'
    inp.classList.add 'mdl-checkbox__input'
    inp.id = @id
    inp.setAttribute 'type', 'checkbox'
    inp.setAttribute 'v-model', @vModel

    @$el.insertBefore inp, @$el.childNodes[0]
  beforeDestroy: ->
    @unwatch()
</script>

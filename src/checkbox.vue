<template lang="jade">
label.mdl-checkbox.mdl-js-checkbox.mdl-js-ripple-effect(for='{{* id}}')
  input.mdl-checkbox__input(type='checkbox' id='{{* id}}' v-model='checked')
  span.mdl-checkbox__label
    slot
</template>

<script lang="coffee">
module.exports =
  data: ->
    unwatch: null
  props:
    id:
      type: String
      required: true
    checked:
      type: Boolean
      required: true
  ready: ->
    componentHandler.upgradeElement @$el
    # For some reason the last label (ripple effect) isn't upgraded when using
    # the upgradeElements function.
    # See https://github.com/google/material-design-lite/blob/3b1442627ee21040113c0a9a340e177f91cf8188/test/unit/componentHandler.js#L146
    componentHandler.upgradeElement @$el.lastChild
    @unwatch = @$watch 'checked', (val) ->
      # Only called when value changes
      if val
        @$el.classList.add 'is-checked'
      else
        @$el.classList.remove 'is-checked'
  beforeDestroy: ->
    @unwatch()
</script>

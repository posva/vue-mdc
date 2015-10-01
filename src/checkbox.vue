<template lang="jade">
label.mdl-checkbox.mdl-js-checkbox.mdl-js-ripple-effect(for='{{* id}}')
  input.mdl-checkbox__input(type='checkbox' id='{{* id}}' v-model='checked' disabled='{{disabled}}')
  span.mdl-checkbox__label
    slot
</template>

<script lang="coffee">
utils = require 'coffee!./utils.coffee'
module.exports =
  data: ->
    unwatch: []
  props:
    id:
      type: String
      required: true
    checked:
      type: Boolean
      required: true
    disabled: Boolean
  ready: ->
    componentHandler.upgradeElement @$el
    # For some reason the last label (ripple effect) isn't upgraded when using
    # the upgradeElements function.
    # See https://github.com/google/material-design-lite/blob/3b1442627ee21040113c0a9a340e177f91cf8188/test/unit/componentHandler.js#L146
    componentHandler.upgradeElement @$el.lastChild

    # Only called when value changes
    @unwatch.push @$watch 'checked', utils.classToggler 'is-checked'
    @unwatch.push @$watch 'disabled', utils.classToggler 'is-disabled'
  beforeDestroy: ->
    @unwatch.forEach (unwatch) -> unwatch()
</script>

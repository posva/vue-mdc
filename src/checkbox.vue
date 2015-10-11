<template lang="jade">
label.mdl-checkbox.mdl-js-checkbox.mdl-js-ripple-effect(for='{{* id}}')
  input.mdl-checkbox__input(v-bind:value='value' type='checkbox' v-bind:id.once='id' v-model='checked' v-bind:disabled='disabled')
  span.mdl-checkbox__label
    slot
</template>

<script lang="coffee">
utils = require 'coffee!./utils.coffee'
module.exports =
  data: ->
    unwatch: []
  props:
    id: String
    value:
      required: false
    checked:
      validator: (value) ->
        typeof value is 'boolean' or value instanceof Array
      required: true
      twoWay: true
    disabled: Boolean
  ready: ->
    componentHandler.upgradeElement @$el
    # For some reason the last label (ripple effect) isn't upgraded when using
    # the upgradeElements function.
    # See https://github.com/google/material-design-lite/blob/3b1442627ee21040113c0a9a340e177f91cf8188/test/unit/componentHandler.js#L146
    componentHandler.upgradeElement @$el.lastChild

    # Only called when value changes
    if typeof @checked is 'boolean'
      @unwatch.push @$watch 'checked', utils.classToggler 'is-checked'
    else
      @unwatch.push @$watch 'checked', utils.classTogglerWithValue 'is-checked'
    @unwatch.push @$watch 'disabled', utils.classToggler 'is-disabled'
  beforeDestroy: ->
    @unwatch.forEach (unwatch) -> unwatch()
</script>

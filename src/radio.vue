<template lang="jade">
label.mdl-radio.mdl-js-radio.mdl-js-ripple-effect(v-bind:for.once='id')
  input.mdl-radio__button(v-bind:id.once='id' type='radio' v-bind:name.once='name' v-bind:value='value' v-model='checked' v-bind:disabled='disabled')
  span.mdl-radio__label
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
      required: true
    checked:
      required: true
      twoWay: true
    disabled: Boolean
  ready: ->
    componentHandler.upgradeElements @$el
    #debugger

    # Only called when value changes
    @unwatch.push @$watch 'checked', (checked) -> checked is @value
    @unwatch.push @$watch 'disabled', utils.classToggler 'is-disabled'
  beforeDestroy: ->
    @unwatch.forEach (unwatch) -> unwatch()
</script>

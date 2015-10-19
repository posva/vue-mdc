<template lang="jade">
label.mdl-switch.mdl-js-switch.mdl-js-ripple-effect(v-bind:for.once='id' v-bind:class='{ "is-disabled": disabled, "is-checked": isChecked }')
  input.mdl-switch__input(v-bind:value='value' type='checkbox' v-bind:id.once='id' v-model='checked' v-bind:disabled='disabled')
  span.mdl-switch__label
    slot
</template>

<script lang="coffee">
module.exports =
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
  computed:
    isChecked: ->
      if typeof @checked is 'boolean'
        @checked
      else
        @value in @checked
  ready: ->
    componentHandler.upgradeElements @$el
</script>

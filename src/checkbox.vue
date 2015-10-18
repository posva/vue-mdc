<template lang="jade">
label.mdl-checkbox.mdl-js-checkbox.mdl-js-ripple-effect(v-bind:for.once='id' v-bind:class='{ "is-disabled": disabled, "is-checked": isChecked }')
  input.mdl-checkbox__input(v-bind:value='value' type='checkbox' v-bind:id.once='id' v-model='checked' v-bind:disabled='disabled')
  span.mdl-checkbox__label
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

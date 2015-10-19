<template lang="jade">
label.mdl-icon-toggle.mdl-js-icon-toggle.mdl-js-ripple-effect(v-bind:for.once='id' v-bind:class='{ "is-disabled": disabled, "is-checked": isChecked }')
  input.mdl-icon-toggle__input(v-bind:value='value' type='checkbox' v-bind:id.once='id' v-model='checked' v-bind:disabled='disabled')
  i.mdl-icon-toggle__label.material-icons {{icon}}
</template>

<script lang="coffee">
module.exports =
  props:
    icon:
      required: true
      type: String
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

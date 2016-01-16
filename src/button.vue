<template lang="jade">
button.mdl-button.mdl-js-button(v-bind:disabled='disabled' v-bind:class='{"mdl-button--icon": icon, "mdl-button--accent": accent, "mdl-button--primary": primary, "mdl-button--mini-fab": miniFab, "mdl-button--fab": fab || miniFab, "mdl-button--raised": raised, "mdl-button--colored": colored}')
  slot
</template>

<script lang="coffee">
propFill = require './mixins/prop-fill.coffee'

module.exports =
  props:
    disabled:
      fill: true
    icon:
      required: false
    accent:
      fill: true
    primary:
      fill: true
    miniFab:
      fill: true
    fab:
      fill: true
    raised:
      fill: true
    colored:
      fill: true
  mixins: [propFill]
  ready: ->
    componentHandler.upgradeElement @$el
</script>

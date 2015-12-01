<template lang="jade">
  button.mdl-button.mdl-js-button(v-bind:disabled='disabled' v-bind:class='{"mdl-button--icon": icon, "mdl-button--accent": accent, "mdl-button--primary": primary, "mdl-button--mini-fab": miniFab, "mdl-button--fab": fab || miniFab, "mdl-button--raised": raised, "mdl-button--colored": colored}')
    slot
</template>

<script lang="coffee">
module.exports =
  props:
    disabled:
      required: false
    icon:
      required: false
    accent:
      required: false
    primary:
      required: false
    miniFab:
      required: false
    fab:
      required: false
    raised:
      required: false
    colored:
      required: false
  ready: ->
    componentHandler.upgradeElement @$el
</script>

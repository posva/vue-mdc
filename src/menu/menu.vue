<template lang="jade">
ul.mdl-menu.mdl-js-menu(v-bind:for.once='for')
  slot
</template>

<script>
/* global componentHandler*/
export default {
  props: ['for'],
  ready () {
    componentHandler.upgradeElement(this.$el, 'MaterialMenu')
  }
  // beforeDestroy () {
    // TODO Remove mdl event listeners added. This was previously
    // this.$el.MaterialMenu.mdlDowngrade()
    // But has been removed on 1.1
}
</script>

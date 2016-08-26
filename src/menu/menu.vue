<template lang="jade">
ul.mdl-menu.mdl-js-menu(v-bind:for.once='target')
  slot
</template>

<script>
export default {
  props: ['target'],
  mounted () {
    componentHandler.upgradeElement(this.$el, 'MaterialMenu')
  }
  // beforeDestroy () {
    // TODO Remove mdl event listeners added. This was previously
    // this.$el.MaterialMenu.mdlDowngrade()
    // But has been removed on 1.1
}
</script>

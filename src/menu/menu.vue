<template lang="jade">
ul.mdl-menu.mdl-js-menu(v-bind:for.once='for')
  slot
</template>

<script lang="coffee">
propFill = require '../mixins/prop-fill.coffee'

module.exports =
  props: ['for']
  ready: ->
    componentHandler.upgradeElement @$el, 'MaterialMenu'
  # beforeDestroy: ->
    # TODO Remove mdl event listeners added. This was previously
    # @$el.MaterialMenu.mdlDowngrade()
    # But has been removed on 1.1
</script>

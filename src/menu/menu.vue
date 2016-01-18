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
  beforeDestroy: ->
    @$el.MaterialMenu.mdlDowngrade()
</script>

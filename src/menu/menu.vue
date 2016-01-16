<template lang="jade">
ul.mdl-menu.mdl-js-menu(v-bind:for.once='for')
  slot
</template>

<script lang="coffee">
propFill = require '../mixins/prop-fill.coffee'

module.exports =
  data: ->
    unwatch: []
  props: ['for']
  ready: ->
    componentHandler.upgradeElement @$el, 'MaterialMenu'
  beforeDestroy: ->
    @unwatch.forEach (unwatch) -> unwatch()
    @$el.MaterialMenu.mdlDowngrade()
</script>

<template lang="jade">
ul.mdl-menu.mdl-menu--top-left.mdl-js-menu(v-bind:for.once='for')
  li.mdl-menu__item Some Action
  li.mdl-menu__item Another Action
  li.mdl-menu__item(disabled) Disabled Action
  li.mdl-menu__item Yet Another Action
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

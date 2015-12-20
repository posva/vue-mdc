<template lang="jade">
div
  h1 Menus
  div
    h3 MDL
    button#mdl-menu.mdl-button.mdl-js-button.mdl-button--icon
      i.material-icons more_vert
    ul.mdl-menu.mdl-menu--top-left.mdl-js-menu.mdl-js-ripple-effect(for='mdl-menu' v-el:menu)
      li.mdl-menu__item Some Action
      li.mdl-menu__item Another Action
      li.mdl-menu__item(disabled) Disabled Action
      li.mdl-menu__item Yet Another Action
  button#demo-menu-lower-left.mdl-button.mdl-js-button.mdl-button--icon
    i.material-icons more_vert
  ul.mdl-menu.mdl-menu--top-left.mdl-js-menu.mdl-js-ripple-effect(for='demo-menu-lower-left')
    li.mdl-menu__item Some Action
    li.mdl-menu__item Another Action
    li.mdl-menu__item(disabled='') Disabled Action
    li.mdl-menu__item Yet Another Action
  h3 vue
  br
  button(@click='open') Open the menu
</template>

<script lang="coffee">
vmdl = require '../../src/vue-mdl.js'

module.exports =
  data: ->
  directives: vmdl.directives
  components: vmdl.components
  methods:
    open: -> @$emit 'open'
  events:
    open: -> @$els.menu.MaterialMenu.handleForClick_()
</script>

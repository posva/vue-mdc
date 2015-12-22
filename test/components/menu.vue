<style lang="stylus" scoped>
*
  box-sizing: border-box

.content
  margin: 10px

.container
  width: 200px

.background
  background: white
  height: 148px

.bar
  position: relative
  background: #3F51B5
  color: white
  height: 64px
  padding: 16px

</style>

<template lang="jade">
.content
  h1 Menus
  div
    h3 MDL
    .container.mdl-shadow--2dp
      .background
      .bar
        button#mdl-menu.mdl-button.mdl-js-button.mdl-button--icon
          i.material-icons more_vert
        ul.mdl-menu.mdl-menu--top-left.mdl-js-menu.mdl-js-ripple-effect(for='mdl-menu' v-el:menu)
          li.mdl-menu__item Some Action
          li.mdl-menu__item Another Action
          li.mdl-menu__item(disabled) Disabled Action
          li.mdl-menu__item Yet Another Action
  h3 vue
  br
  .container.mdl-shadow--2dp
    .background
    .bar
      button#v-menu.mdl-button.mdl-js-button.mdl-button--icon
        i.material-icons more_vert
      mdl-menu(v-if='show' for='v-menu')
  .bar
    button#test-simple.mdl-button.mdl-js-button.mdl-button--icon
      i.material-icons more_vert
    mdl-menu(v-if='show' for='test-simple')
  mdl-button.mdl-js-ripple-effect(raised colored @click='open') Open the menu
  mdl-checkbox(:checked.sync='show') Show
</template>

<script lang="coffee">
vmdl = require '../../src/vue-mdl.js'

module.exports =
  data: ->
    show: false
  directives: vmdl.directives
  components: vmdl.components
  methods:
    open: -> @$emit 'open'
  events:
    open: -> @$els.menu.MaterialMenu.handleForClick_()
</script>

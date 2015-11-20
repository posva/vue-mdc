<style lang="stylus">
  .header-title
    font-size: 1.5em
  .mdl-badge--blue[data-badge]:after
    background: aquamarine
  .mdl-navigation__link--icon, .mdl-layout-title--icon
    span, i.material-icons
      vertical-align: middle
    i.material-icons
      margin-right: 1em
</style>

<template lang="jade">
.mdl-layout.mdl-js-layout.mdl-layout--fixed-drawer.mdl-layout--fixed-header(v-el='menu')
  header.mdl-layout__header
    .mdl-layout__header-row
      span.header-title Vue MDL
      .mdl-layout-spacer
      mdl-textfield.mdl-textfield--align-right(id='search' expandable='search' v-bind:value.sync='filter')
  .mdl-layout__drawer
    span.mdl-layout-title.mdl-layout-title--icon
      i.material-icons extension
      span Components
    nav.mdl-navigation
      a.mdl-navigation__link(href='#buttons', @click='closeMenu()') Buttons
    span.mdl-layout-title.mdl-layout-title--icon
      i.material-icons link
      span Links
    nav.mdl-navigation
      a.mdl-navigation__link.mdl-navigation__link--icon(href='https://github.com/posva/vue-mdl') Github
      a.mdl-navigation__link.mdl-navigation__link--icon(href='https://github.com/posva/vue-mdl') NPM
  main.mdl-layout__content
    .page-content
      div
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar vitae velit et varius. Integer euismod nisl id nisi rutrum condimentum. Aenean ligula est, blandit id massa vitae, efficitur placerat nulla. Maecenas quis leo neque. Proin porttitor dui quis ex cursus scelerisque. Cras pharetra bibendum orci a convallis. Ut nec aliquam quam. Integer porta et lorem luctus molestie. Donec efficitur egestas erat nec sagittis. Quisque varius, tellus sit amet tincidunt posuere, mauris est sollicitudin purus, nec tristique magna libero accumsan augue.

        p Sed eu augue vehicula, consectetur felis a, dapibus dolor. Aenean orci tortor, maximus eu consectetur ac, luctus et nisi. Vestibulum condimentum quis risus at bibendum. Fusce ac quam dictum, mattis lacus vitae, sodales ipsum. Sed ultrices vehicula quam ut vehicula. Sed efficitur tempor tortor nec sagittis. Maecenas scelerisque erat et ligula convallis iaculis.
      #buttons
        mdl-button Hey
</template>

<script lang="coffee">
vmdl = require '../../src/vue-mdl.js'

module.exports =
  data: ->
    filter: ''
  methods:
    closeMenu: ->
      @$el.MaterialLayout.drawerToggleHandler_()
  components: vmdl.components
  directives: vmdl.directives
</script>

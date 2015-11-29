<style lang="stylus">
  @import './style/variables'
  .header-title
    font-size: 1.5em
  .mdl-badge--blue[data-badge]:after
    background: aquamarine
  .mdl-navigation__link--icon, .mdl-layout-title--icon
    span, i.material-icons
      vertical-align: middle
    i.material-icons
      margin-right: 1em
  a
    color: accent-color
    text-decoration: none
  .mdl-layout__drawer a
    color: main-color
</style>

<template lang="jade">
.mdl-layout.mdl-js-layout.mdl-layout--fixed-drawer.mdl-layout--fixed-header(v-el='menu')
  header.mdl-layout__header
    .mdl-layout__header-row
      span.header-title Vue MDL
      .mdl-layout-spacer
      mdl-textfield.mdl-textfield--align-right(id='search' expandable='search' v-bind:value.sync='filter')
  .mdl-layout__drawer
    a.mdl-layout-title.mdl-layout-title--icon(href='#getting-started')
      i.material-icons home
      span Getting Started
    nav.mdl-navigation
      a.mdl-navigation__link(href='#installation', @click='closeMenu()') Installation
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
      getting-started
      #buttons
        mdl-button Hey
</template>

<script lang="coffee">
module.exports =
  data: ->
    filter: ''
  methods:
    closeMenu: ->
      if @$el.classList.contains 'is-visible'
        @$el.MaterialLayout.drawerToggleHandler_()
  components:
    gettingStarted: require './partials/getting-started.vue'
</script>

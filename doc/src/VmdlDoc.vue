<style lang="stylus">
@import './style/variables'
.header-title
  height: 100%
  font-size: 1.5em
.mdl-badge--blue[data-badge]:after
  background: aquamarine
.mdl-navigation__link--icon, .mdl-layout-title--icon
  span, i.material-icons
    vertical-align: middle
  i.material-icons
    margin-right: 1em
pre
  width: 100%
code.hljs
  background-color: #f3f3f3
  margin: 0 -32px
  padding: 1em 48px
  p
    margin: 0

  langs = {
    css: 'css',
    javascript: 'js',
    html: 'html'
  }

  for lang, text in langs
    &.{lang}::before
      content: text
      position: absolute
      right: 1rem
      text-transform: uppercase
      font-family: 'Roboto', 'Helvetica', 'Source Sans Pro', 'Arial'
      font-size: 12px
      font-weight: 800
      color: silver

table.mdl-data-table
  white-space: pre-line
p a
  color: rgb(0, 150, 136)
  text-decoration: none
.mdl-layout--fixed-drawer > .mdl-layout__header .mdl-layout__header-row
  padding: 1em
.mdl-layout--fixed-drawer.is-small-screen .mdl-layout__header-row
  margin-left: 48px
.mdl-layout__drawer a
  color: main-color
.mdl-layout__header
  background-color: white
.mdl-layout__header
  color: inherit
.mdl-layout__header-logo
  max-height: 100%
  margin-right: .35em

.flex
  display: flex
.wrap
  flex-wrap: wrap
.center
  justify-content: center
.start
  justify-content: flex-start
.reset-width
  width: initial
.space
  margin: 14px
.column
  flex-direction: column

// navigation overrides
.mdl-layout__drawer .mdl-navigation .mdl-navigation__link
  padding: .5em 2em
.mdl-layout__drawer>.mdl-layout-title, .mdl-layout__drawer>.mdl-layout__title
  padding-left: .5em
.mdl-layout__drawer .mdl-navigation
  padding-top: .5em

.algolia-autocomplete
  direction: rtl !important
  .aa-dropdown-menu.aa-with-0
    right: 0 !important
</style>

<template lang="jade">
.mdl-layout.mdl-js-layout.mdl-layout--fixed-drawer.mdl-layout--fixed-header(v-el='menu')
  header.mdl-layout__header
    .mdl-layout__header-row
      span.header-title
        img.mdl-layout__header-logo(src='http://vuejs.org/images/logo.png')
        | Vue MDL
      .mdl-layout-spacer
      mdl-textfield.mdl-textfield--align-right(id='search' expandable='search' v-bind:value.sync='filter')
  .mdl-layout__drawer(v-el:drawer)
    menu-entry(v-for='menu in items', :menu='menu')
    span.mdl-layout-title.mdl-layout-title--icon
      i.material-icons link
      | Links
    nav.mdl-navigation
      a.mdl-navigation__link.mdl-navigation__link--icon(href='https://github.com/posva/vue-mdl' target='_blank') Github
      a.mdl-navigation__link.mdl-navigation__link--icon(href='https://www.npmjs.com/package/vue-mdl' target='_blank') NPM
  main.mdl-layout__content
    .page-content
      router-view
</template>

<script>
/* global docsearch*/
import menuEntry from './utils/menu-entry.vue'

export default {
  data () {
    return {
      filter: '',
      items: [{
        name: 'Getting started',
        icon: 'home',
        items: [
          'Installation',
          'Usage'
        ]
      }, {
        name: 'Components',
        icon: 'extension',
        items: [
          'Buttons',
          'Cards',
          'Checkboxes',
          'Icon Toggles',
          'Menus',
          'Progress bars',
          'Radio Buttons',
          'Sliders',
          'Snackbars',
          'Spinners',
          'Switches',
          'Tabs',
          'Textfields',
          'Tooltips'
        ]
      }, {
        name: 'Custom Components',
        icon: 'extension',
        items: [
          'Selects',
          'Dialogs'
        ]
      },
      {
        name: 'Directives',
        icon: 'settings_ethernet',
        items: [
          'Badges',
          'Ripple Effect'
        ]
      }]
    }
  },
  ready () {
    componentHandler.upgradeElement(this.$el)
    docsearch({
      apiKey: 'b3174bbc58c9406adac95c2cfef57702',
      indexName: 'vue-mdl',
      inputSelector: '#search'
    })
  },
  components: {
    menuEntry
  }
}
</script>

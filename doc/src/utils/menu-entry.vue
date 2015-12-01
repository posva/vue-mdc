<template lang="jade">
a.mdl-layout-title.mdl-layout-title--icon(:href.once='makeLink(menu.name)')
  i.material-icons {{menu.icon}}
  span {{menu.name}}
nav.mdl-navigation(v-for='sub in menu.items')
  a.mdl-navigation__link(:href.once='makeLink(sub)', @click='closeMenu()') {{sub}}
</template>

<script lang="coffee">
_ = require 'lodash'

module.exports =
  props:
    menu:
      required: true
  methods:
    makeLink: (text) -> '#' + _.kebabCase text
    closeMenu: ->
      if @$parent.$els.drawer.classList.contains 'is-visible'
        @$parent.$el.MaterialLayout.drawerToggleHandler_()
</script>

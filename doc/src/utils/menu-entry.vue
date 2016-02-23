<template lang="jade">
a.mdl-layout-title.mdl-layout-title--icon(:href.once='makeLink(menu.name)')
  i.material-icons {{menu.icon}}
  span {{menu.name}}
nav.mdl-navigation(v-for='sub in menu.items')
  a.mdl-navigation__link(:href.once='makeLink(sub)', @click='closeMenu()') {{sub}}
</template>

<script>
import _ from 'lodash'

export default {
  props: {
    menu: {
      required: true
    }
  },
  methods: {
    makeLink (text) {
      return '#' + _.kebabCase(text)
    },
    closeMenu () {
      if (this.$parent.$els.drawer.classList.contains('is-visible')) {
        this.$parent.$el.MaterialLayout.drawerToggleHandler_()
      }
    }
  }
}
</script>

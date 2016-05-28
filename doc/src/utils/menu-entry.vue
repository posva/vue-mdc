<template lang="jade">
span.mdl-layout-title.mdl-layout-title--icon
  i.material-icons {{menu.icon}}
  span {{menu.name}}
nav.mdl-navigation(v-for='sub in menu.items')
  a.mdl-navigation__link(v-link='makeLink(sub)' @click='closeMenu') {{sub}}
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
      return `/${_.kebabCase(text)}`
    },
    closeMenu () {
      if (this.$parent.$els.drawer.classList.contains('is-visible')) {
        this.$parent.$el.MaterialLayout.drawerToggleHandler_()
      }
    }
  }
}
</script>

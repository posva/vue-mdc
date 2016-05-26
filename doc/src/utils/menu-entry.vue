<template lang="jade">
span.mdl-layout-title.mdl-layout-title--icon
  i.material-icons {{menu.icon}}
  span {{menu.name}}
nav.mdl-navigation(v-for='sub in menu.items')
  a.mdl-navigation__link(:href.once='makeLink(sub)', @click.prevent='go(sub)') {{sub}}
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
      return '/#!/' + _.kebabCase(text)
    },
    go (path) {
      this.$router.go({ path: `/${_.kebabCase(path)}` })
      this.closeMenu()
    },
    closeMenu () {
      if (this.$parent.$els.drawer.classList.contains('is-visible')) {
        this.$parent.$el.MaterialLayout.drawerToggleHandler_()
      }
    }
  }
}
</script>

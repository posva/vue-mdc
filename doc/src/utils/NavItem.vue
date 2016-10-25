<template>
  <nav class="mdl-navigation">
    <router-link @click.native="closeMenu"
                 :to="makeLink(item)"
                 class="mdl-navigation__link"
    >{{ item }}</router-link>
  </nav>
</template>

<script>
import { kebabCase } from 'lodash'

export default {
  props: {
    item: {
      type: String,
      required: true
    }
  },
  methods: {
    makeLink (text) {
      return `/${kebabCase(text)}`
    },
    closeMenu () {
      if (this.$parent.$refs.drawer.classList.contains('is-visible')) {
        this.$parent.$refs.menu.MaterialLayout.drawerToggleHandler_()
      }
    }
  }
}
</script>

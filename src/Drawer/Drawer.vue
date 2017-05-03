<template>
  <aside v-if="mode === 'temporary'"
         :class="baseClass"
  >
    <nav class="mdc-temporary-drawer__drawer">
      <slot name="header"></slot>
      <div class="mdc-list-group mdc-temporary-drawer__content">
        <slot></slot>
      </div>
    </nav>
  </aside>

  <nav v-else
       :class="baseClass">
    Not yet supported
  </nav>
</template>

<script>
import { MDCTemporaryDrawer } from '@material/drawer'

export default {
  props: {
    mode: {
      type: String,
      default: 'temporary',
    },
  },

  provide () {
    return {
      mode: this.mode,
    }
  },

  computed: {
    baseClass () {
      return `mdc-${this.mode}-drawer`
    },
  },

  mounted () {
    if (this.mode === 'temporary') {
      this.drawer = new MDCTemporaryDrawer(this.$el)
    }
  },

  methods: {
    open () {
      this.drawer.open = true
    },
    close () {
      this.drawer.open = false
    },
    toggle () {
      this.drawer.open = !this.drawer.open
    },
  },
}
</script>

<style lang="scss" src="@material/drawer/mdc-drawer.scss">
</style>

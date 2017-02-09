<template>
  <div class="mdl-layout mdl-js-layout" :class="layoutClasses">
    <header class="mdl-layout__header" :class="headerClasses">
      <slot name="header"></slot>
    </header>

    <slot></slot>
  </div>
</template>

<script>
// XXX header is fixed if drawer is too
export default {
  computed: {
    layoutClasses () {
      return {
        'mdl-layout--fixed-header': this.isFixed,
        'mdl-layout--fixed-drawer': this.fixedDrawer
      }
    },
    headerClasses () {
      return {
        'mdl-layout__header--scroll': !this.isFixed,
        'mdl-layout__header--waterfall': this.waterfall,
        'mdl-layout__header--transparent': this.transparentHeader
      }
    },
    isFixed () {
      return this.fixedHeader || this.fixedDrawer || this.waterfall
    }
  },

  props: {
    fixedHeader: Boolean,
    fixedDrawer: Boolean,
    transparentHeader: Boolean,
    waterfall: Boolean
  },
  data () {
    return {
      selected: null
    }
  },

  mounted () {
    componentHandler.upgradeElement(this.$el)
  },

  watch: {
    isFixed (isFixed) {
      const action = isFixed ? 'remove' : 'add'
      if (this.$el.parentElement) {
        this.$el.parentElement.classList[action]('has-scrolling-header')
      }
    }
  }
}
</script>

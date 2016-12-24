<template>
  <div class="mdl-layout mdl-js-layout" :class="layoutClasses">
    <header class="mdl-layout__header" :class="headerClasses">
      <slot name="header"></slot>

      <div class="mdl-layout__tab-bar mdl-js-ripple-effect" v-if="hasTabs">
        <a :href="tab.referenceLink"
           class="mdl-layout__tab"
           :class="{ 'is-active': tab.isActive }"
           @click="selectTab(tab)"
           v-for="tab in tabs"
        >{{tab.title}}</a>
      </div>
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
        'mdl-layout--fixed-drawer': this.fixedDrawer,
        'mdl-layout--fixed-tabs': this.fixedTabs
      }
    },
    headerClasses () {
      return {
        'mdl-layout__header--scroll': !this.isFixed,
        'mdl-layout__header--waterfall': this.waterfall,
        'mdl-layout__header--transparent': this.transparentHeader
      }
    },
    hasTabs () {
      return this.tabs.length > 0
    },
    isFixed () {
      return this.fixedHeader || this.fixedDrawer || this.waterfall
    }
  },

  props: {
    fixedHeader: Boolean,
    fixedDrawer: Boolean,
    fixedTabs: Boolean,
    transparentHeader: Boolean,
    waterfall: Boolean
  },
  data () {
    return {
      tabs: [],
      selected: null
    }
  },

  created () {
    this.$root.$on('layout-tab-created', this.onTabCreated)
  },

  methods: {
    selectTab (tab) {
      this.$set(this.selected, 'isActive', false)
      this.$set(tab, 'isActive', true)
      this.selected = tab
    },
    onTabCreated (tab) {
      if (!this.$el.contains(tab.$el)) {
        return
      }
      tab.id = 'layout-tab-' + this.tabs.length

      if (!this.selected) {
        tab.isActive = true
        this.selected = tab
      }

      this.tabs.push(tab)
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

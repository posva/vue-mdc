<template>
  <div class="mdl-tabs is-upgraded">
    <div class="mdl-tabs__tab-bar">
      <tab-link class="mdl-tabs__tab"
         :class="{ 'is-active': tab === selected }"
         @click.prevent="selected = tab"
         v-for="tab in tabs"
      >{{tab}}</tab-link>
    </div>

    <slot></slot>
  </div>
</template>

<script>
import propFill from '../mixins/prop-fill'
import TabLink from './tab-link.vue'

export default {
  data () {
    return {
      shared: {
        // use an object to share the same variable across tabs
        selected: ''
      },
      tabs: []
    }
  },
  computed: {
    selected: {
      set (selected) {
        this.shared.selected = selected
      },
      get () {
        return this.shared.selected
      }
    }
  },
  methods: {
    addTab (tab) {
      if (!this.selected) this.selected = tab
      this.tabs.push(tab)
    },
    removeTab (tab) {
      const index = this.tabs.indexOf(tab)
      if (index > -1) {
        this.tabs.splice(index, 1)
      }
    }
  },
  mixins: [propFill],
  components: {TabLink}
}
</script>

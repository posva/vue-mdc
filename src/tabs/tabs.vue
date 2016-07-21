<template>
  <div class="mdl-tabs is-upgraded">
    <!-- Generated tab links -->
    <div class="mdl-tabs__tab-bar">
      <tab-link
          class="mdl-tabs__tab"
          v-for="tab in tabs"
          :class="{ 'is-active': $index === selected }"
          @click.prevent="selected = $index"
      >{{tab}}</tab-link>
    </div>
    <!-- Tabs content -->
    <slot></slot>
  </div>
</template>

<script>
import propFill from '../mixins/prop-fill'
import TabLink from './tab-link.vue'

export default {
  props: {
    selected: Number,
    twoWay: true
  },
  data () {
    return {
      tabs: []
    }
  },
  methods: {
    isSelected (tab) {
      return this.tabs.indexOf(tab) === this.selected
    },
    addTab (tab) {
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

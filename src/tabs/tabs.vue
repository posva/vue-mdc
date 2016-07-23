<template>
  <div class="mdl-tabs is-upgraded">
    <!-- Generated tab links -->
    <div class="mdl-tabs__tab-bar">
      <tab-link
          class="mdl-tabs__tab"
          v-for="tab in tabs"
          track-by="id"
          :class="{ 'is-active': isSelected(tab) }"
          @click.prevent="selectTab(tab)"
          :tab="tab"
      ></tab-link>
    </div>
    <!-- Tabs content -->
    <slot></slot>
  </div>
</template>

<script>
// TODO Easy way track by index automatically
// write tests about removal
// With same titles use ids
import propFill from '../mixins/prop-fill'
import TabLink from './tab-link.vue'

// indexOf with object
function findTabIndex (tabs, id) {
  for (let i = 0; i < tabs.length; ++i) {
    if (tabs[i].id === id) {
      return i
    }
  }
  return -1
}

export default {
  props: {
    selected: {
      required: true,
      twoWay: true
    }
  },
  data () {
    return {
      tabs: []
    }
  },
  methods: {
    selectTab ({id}) {
      this.selected = id
    },
    isSelected ({id}) {
      return id === this.selected
    },
    addTab (tab) {
      // TODO check for duplicates
      this.tabs.push(tab)
    },
    updateTab ({id}, tab) {
      const index = findTabIndex(this.tabs, id)
      if (index > -1) this.tabs.splice(index, 1, tab)
    },
    removeTab ({id}) {
      const index = findTabIndex(this.tabs, id)
      if (index > -1) this.tabs.splice(index, 1)
    }
  },
  mixins: [propFill],
  components: {TabLink}
}
</script>

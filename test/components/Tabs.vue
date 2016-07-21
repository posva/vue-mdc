<template>
  <div>
    <h1>Tabs</h1>

    <mdl-tabs id="tabs" :selected.sync="selected">
      <mdl-tab title="Tab 1">
        Tab 1
      </mdl-tab>
      <mdl-tab title="Tab 2">
        Tab 2
      </mdl-tab>
    </mdl-tabs>

    <mdl-tabs id="three-tabs" :selected.sync="selected">
      <mdl-tab title="Tab 1">
        Tab 1
      </mdl-tab>
      <mdl-tab title="Tab 2">
        Tab 2
      </mdl-tab>
      <mdl-tab title="Tab 3">
        Tab 3
      </mdl-tab>
    </mdl-tabs>

    <mdl-tabs id="dyn-tabs" v-ref:tabs :selected.sync="selected">
      <mdl-tab v-for="tab in tabs" :title="tab">
        {{tab}}
      </mdl-tab>
    </mdl-tabs>

    <br>
    <br>

    <button @click="addTab">Add Tab</button>
    <div v-for="tab in tabs">
      <span>{{tab}}</span>
      <button @click="removeTab(tab)">X</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: 0,
      tabIndex: 0,
      tabs: []
    }
  },
  methods: {
    addTab () {
      this.tabs.push(`Tab ${++this.tabIndex}`)
    },
    removeTab (tab) {
      this.tabs.splice(this.tabs.indexOf(tab), 1)
      if (this.$refs.tabs.selected === tab) {
        this.$refs.tabs.selected = this.$refs.tabs.tabs[0] || ''
      }
    }
  }
}
</script>

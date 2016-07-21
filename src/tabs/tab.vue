<template>
  <div class="mdl-tabs__panel"
       :class="{'is-active': selected === title }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      shared: this.$parent.shared
    }
  },
  computed: {
    selected () {
      return this.shared.selected
    }
  },
  props: {
    title: {
      required: true,
      type: String
    }
  },
  ready () {
    this.$parent.addTab(this.title)
  },
  beforeDestroy () {
    this.$parent.removeTab(this.title)
  }
}
</script>

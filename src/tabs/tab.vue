<template>
  <div class="mdl-tabs__panel"
       :class="{'is-active': selected }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  computed: {
    selected () {
      return this.$parent.isSelected(this.title)
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

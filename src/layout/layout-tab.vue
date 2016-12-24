<template>
  <section class="mdl-layout__tab-panel"
           :class="activeClass"
           :id="id">
    <div class="page-content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  mounted: function () {
    this.$root.$emit('layout-tab-created', this)
  },
  computed: {
    referenceLink () {
      return '#' + this.id
    },
    activeClass () {
      return {
        'is-active': this.isActive
      }
    }
  },
  data () {
    return {
      id: '',
      isActive: false
    }
  },
  props: {
    title: String
  }
}
</script>

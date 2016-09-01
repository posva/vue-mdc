<template lang="jade">
.mdl-progress.mdl-js-progress(v-bind:class="{ 'mdl-progress__indeterminate': indeterminate }")
</template>

<script>
export default {
  props: {
    progress: {
      required: false
    },
    buffer: {
      required: false
    },
    indeterminate: Boolean
  },
  mounted () {
    componentHandler.upgradeElement(this.$el, 'MaterialProgress')

    if (this.progress != null) {
      this.$el.MaterialProgress.setProgress(this.progress)
      this.$watch('progress', val => this.$el.MaterialProgress.setProgress(val))
    }

    if (this.buffer != null) {
      this.$el.MaterialProgress.setBuffer(this.buffer)
      this.$watch('buffer', val => this.$el.MaterialProgress.setBuffer(val))
    }
  }
}
</script>

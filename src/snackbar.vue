<template lang="jade">
.mdl-snackbar.mdl-js-snackbar(aria-live='assertive', aria-atomic='true', aria-relevant='text')
  .mdl-snackbar__text
  button.mdl-snackbar__action(type='button')
</template>

<script>
export default {
  props: {
    displayOn: {
      type: String,
      required: true
    },
    eventSource: {
      type: Object,
      required: false,
      default () {
        return this.$root
      }
    }
  },
  mounted () {
    componentHandler.upgradeElement(this.$el, 'MaterialSnackbar')
    this.eventHandler = (snackbarConfig) => {
      this.$el.MaterialSnackbar.showSnackbar(snackbarConfig)
    }
    this.eventSource.$on(this.displayOn, this.eventHandler)
  },
  destroyed () {
    this.eventSource.$off(this.displayOn, this.eventHandler)
  }
}
</script>

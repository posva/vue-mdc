<template lang="jade">
.mdl-snackbar.mdl-js-snackbar(aria-live='assertive', aria-atomic='true', aria-relevant='text')
  .mdl-snackbar__text
  button.mdl-snackbar__action(type='button')
</template>

<script>
export default {
  props: ['displayOn'],
  mounted () {
    componentHandler.upgradeElement(this.$el, 'MaterialSnackbar')
    this.$on(this.displayOn, (snackarConfig) => {
      this.$el.MaterialSnackbar.showSnackbar(snackarConfig)
    })
  }
}
</script>

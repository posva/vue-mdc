<template lang="jade">
.mdl-snackbar.mdl-js-snackbar(aria-live='assertive', aria-atomic='true', aria-relevant='text')
  .mdl-snackbar__text
  button.mdl-snackbar__action(type='button')
</template>

<script>
/* global componentHandler*/

export default {
  props: ['displayOn'],
  ready () {
    componentHandler.upgradeElement(this.$el, 'MaterialSnackbar')
    this.$on(this.displayOn, (snackarConfig) => {
      this.$el.MaterialSnackbar.showSnackbar(snackarConfig)
    })
  }
}
</script>

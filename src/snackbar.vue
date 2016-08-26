<template lang="jade">
.mdl-snackbar.mdl-js-snackbar(aria-live='assertive', aria-atomic='true', aria-relevant='text')
  .mdl-snackbar__text
  button.mdl-snackbar__action(type='button')
</template>

<script>
/* global componentHandler*/

export default {
  mounted () {
    componentHandler.upgradeElement(this.$el, 'MaterialSnackbar')
  },
  methods: {
    showSnackbar: function (config) {
      this.$el.MaterialSnackbar.showSnackbar(config)
    }
  }
}
</script>

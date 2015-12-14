<style lang="stylus">
</style>

<template lang="jade">
.section
  title-link Ripple Effect
  .section__content
    p Add the ripple effect by adding the
      code  mdl-js-ripple-effect
      |  class to any component that supports it:
      ul
        li Buttons
        li Checkboxes
        li Icon Toggles
    .flex.start.wrap
      mdl-button.mdl-js-ripple-effect(raised colored) Button
      mdl-checkbox.mdl-js-ripple-effect(:checked.sync='check') Checkbox
      mdl-icon-toggle.mdl-js-ripple-effect(:checked.sync='check', icon='format_bold')

    p At the moment, the
      code  v-mdl-ripple-effect
      |  just adds the class for you, so there is not much benefit from using it.
</template>

<script lang="coffee">
module.exports =
  data: ->
    check: true
</script>

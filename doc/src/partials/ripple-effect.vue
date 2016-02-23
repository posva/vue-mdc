<style lang="stylus">
</style>

<template lang="jade">
.section
  title-link Ripple Effect
  .section__content
    p Add the ripple effect by adding the 
      code mdl-js-ripple-effect
      |  class to any component that supports it:
      ul
        li Radio Buttons
        li Buttons
        li Checkboxes
        li Icon Toggles
        li Switches
    .flex.start.wrap
      mdl-radio.mdl-js-ripple-effect(:checked.sync='radio', value='radio') Radio
    .flex.start.wrap
      mdl-button.mdl-js-ripple-effect(raised colored) Button
    .flex.start.wrap
      mdl-checkbox.reset-width.mdl-js-ripple-effect(:checked.sync='check') Checkbox
    .flex.start.wrap
      mdl-icon-toggle.mdl-js-ripple-effect(:checked.sync='check', icon='format_bold')
    .flex.start.wrap
      mdl-switch.reset-width.mdl-js-ripple-effect(:checked.sync='check') Switch

    p At the moment, the 
      code v-mdl-ripple-effect
      |  just adds the class for you, so there is not much benefit from using it. This directive may disappear in v1
</template>

<script>
export default {
  data () {
    return {
      check: true,
      radio: 'option'
    }
  }
}
</script>

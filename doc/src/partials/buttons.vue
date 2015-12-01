<style lang="stylus">
</style>

<template lang="jade">
.section
  title-link Buttons
  .section__content
    .flex.start.wrap
      mdl-button.space Button
      mdl-button.space(disabled) Disabled
      mdl-button.space(icon)
        i.material-icons star
      mdl-button.space(v-mdl-ripple-effect) Ripple Effect
      mdl-button.space(colored) Colored
      mdl-button.space(primary) Primary
      mdl-button.space(accent) Accent
    div
      p Create a simple button with the element
        code mdl-button
      pre
        code.html
          p= '<mdl-button>Button</mdl-button>'

      p You can make it round with the prop
        code icon
      .flex.center
        mdl-button.space(icon)
          i.material-icons send
        mdl-button.space(v-mdl-ripple-effect icon)
          i.material-icons send
      pre
        code.html
          p= '<mdl-button icon>'
          p= '  <i class="material-icons">add</i>'
          p= '</mdl-button>'

    .flex.start.wrap
      mdl-button.space(raised) Raised
      mdl-button.space(raised colored) Raised Colored
      mdl-button.space(raised primary) Raised Primary
      mdl-button.space(raised accent) Raised Accent

    .flex.start.wrap
      mdl-button.space(fab)
        i.material-icons add
      mdl-button.space(v-mdl-ripple-effect fab)
        i.material-icons add

    .flex.start.wrap
      mdl-button.space(mini-fab)
        i.material-icons add
      mdl-button.space(mini-fab colored)
        i.material-icons add
      mdl-button.space(mini-fab primary)
        i.material-icons add
      mdl-button.space(mini-fab accent)
        i.material-icons add

</template>

<script lang="coffee">
module.exports =
  data: ->
</script>

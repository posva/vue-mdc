<template lang="jade">
div
  h1 Spinner
  h3 MDL
  .mdl-spinner.mdl-js-spinner.is-active
  span.mdl-spinner.mdl-spinner--single-color.mdl-js-spinner.is-active
  h3 vue
  mdl-spinner#spinner.added-class
  <mdl-spinner id='html-spin' single-color></mdl-spinner>
  br
  mdl-spinner.added-class#spinner-multi(v-bind:active='active' v-bind:single-color='color')
  br
  input#active(type='checkbox' v-model='active')
  label(for='#active') Active
  input#color(type='checkbox' v-model='color')
  label(for='#color') Single Color
</template>

<script lang="babel">
export default {
  data () {
    return {
      active: true,
      color: false
    }
  }
}
</script>

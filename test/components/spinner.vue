<template lang="jade">
div
  h1 Spinner
  h3 MDL
  .mdl-spinner.mdl-js-spinner.is-active
  span.mdl-spinner.mdl-spinner--single-color.mdl-js-spinner.is-active
  h3 vue
  mdl-spinner#if(v-if='vif')
  br
  mdl-spinner#spinner.added-class
  br
  mdl-spinner#spinner-multi(v-bind:active='active' v-bind:single-color='color')
  br
  input#active(type='checkbox' v-model='active')
  label(for='#active') Active
  input#v-if(type='checkbox' v-model='vif')
  label(for='#v-if') Show
  input#color(type='checkbox' v-model='color')
  label(for='#color') Single Color
</template>

<script lang="coffee">
vmdl = require '../../src/main.js'

module.exports =
  data: ->
    active: true
    vif: false
    color: false
  components: vmdl.components
</script>

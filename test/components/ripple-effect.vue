<template lang="jade">
div
  h1 Ripple Effect
  button.mdl-button.mdl-js-button.mdl-button--fab.mdl-js-ripple-effect
    i.material-icons add
  h3 vue
  mdl-button#button-ripple(v-mdl-ripple-effect) Hello
  mdl-checkbox#checkbox-ripple(v-mdl-ripple-effect v-bind:checked.sync='check') Checkbox
  mdl-radio#radio-ripple(v-mdl-ripple-effect v-bind:checked.sync='check') Radio
  mdl-switch#switch-ripple(v-mdl-ripple-effect v-bind:checked.sync='check')
  mdl-icon-toggle#icon-toggle-ripple(v-mdl-ripple-effect v-bind:checked.sync='check') add
</template>

<script lang="coffee">
vmdl = require '../../src/main.js'

module.exports =
  data: ->
    check: true
  directives: vmdl.directives
  components: vmdl.components
</script>

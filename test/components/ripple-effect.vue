<template lang="jade">
div
  h1 Ripple Effect
  h3 vue
  mdl-button#button-ripple(v-mdl-ripple-effect) Hello
  mdl-checkbox#checkbox-ripple(v-mdl-ripple-effect v-bind:checked.sync='check') Checkbox
  mdl-radio#radio-ripple(v-mdl-ripple-effect value='one' v-bind:checked.sync='check') Radio
  mdl-switch#switch-ripple(v-mdl-ripple-effect v-bind:checked.sync='check')
  mdl-icon-toggle#icon-toggle-ripple(v-mdl-ripple-effect v-bind:checked.sync='check' icon='add')
</template>

<script lang="coffee">
vmdl = require '../../src/vue-mdl.js'

module.exports =
  data: ->
    check: true
  components: vmdl.components
  directives: vmdl.directives
</script>

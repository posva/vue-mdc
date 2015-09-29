<template lang="jade">
div
  mdl-checkbox(id='check' v-bind:checked.sync='check') {{check}}
  mdl-checkbox(id='check1' v-bind:checked.sync='check')
  mdl-checkbox(id='check2' v-bind:checked.sync='check') Checkbox
  input(type='checkbox' v-model='check')
</template>

<script lang="coffee">
vmdl = require '../../src/main.js'

module.exports =
  data: ->
    check: true
  components:
    'mdl-checkbox': vmdl.mdlCheckbox
</script>

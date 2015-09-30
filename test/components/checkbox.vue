<template lang="jade">
div
  mdl-checkbox(id='check-dyn' v-bind:checked.sync='check') Dynamic {{check}}
  mdl-checkbox(id='check' v-bind:checked.sync='check') Check me
  mdl-checkbox(id='check1' v-bind:checked='check') One way
  mdl-checkbox(id='check2' v-bind:checked.once='check') Once
  input(type='checkbox' id='classic' v-model='check')
  span Classic checkbox
</template>

<script lang="coffee">
vmdl = require '../../src/main.js'

module.exports =
  data: ->
    check: true
  components:
    'mdl-checkbox': vmdl.mdlCheckbox
</script>

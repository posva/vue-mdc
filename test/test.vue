<template lang="jade">
div
  div
    h2 {{msg}}
    mdl-checkbox(id='check' v-bind:checked.sync='check') {{check}}
    input(type='checkbox' v-model='check')
    input(type='text' v-model='msg')
    span {{check}}
</template>

<script lang="coffee">
vmdl = require '../src/main.js'

module.exports =
  data: ->
    check: true
    msg: 'Hello boy'
  components:
    'mdl-checkbox': vmdl.mdlCheckbox
</script>

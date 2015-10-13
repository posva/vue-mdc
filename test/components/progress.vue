<template lang="jade">
div
  h1 Progress bar
  #progress
    mdl-progress(v-bind:progress='progress')
  br
  #buffer
    mdl-progress(v-bind:progress='progress' v-bind:buffer='buffer')
  br
  #indeterminate
    mdl-progress(v-bind:indeterminate='indeterminate')
  br
  #dynamic
    mdl-progress(v-if='indeterminate' v-bind:indeterminate='indeterminate')

  br
  input#progress-val(type='number' v-model='progress' number)
  input#buffer-val(type='number' v-model='buffer' number)
  br
  input#v-if(type='checkbox' v-model='indeterminate')
  span Indeterminate
</template>

<script lang="coffee">
vmdl = require '../../src/main.js'

module.exports =
  data: ->
    progress: 44
    buffer: 80
    indeterminate: false
  components:
    'mdl-progress': vmdl.mdlProgress
</script>

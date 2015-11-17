<style>
  .mdl-badge--blue[data-badge]:after {
    background: aquamarine;
  }
</style>
<template lang="jade">
div
  h1 Vue MDL
  h6 Reusable material design components for vue
</template>

<script lang="coffee">
vmdl = require '../../src/vue-mdl.js'

module.exports =
  data: ->
  components: vmdl.components
  directives: vmdl.directives
</script>

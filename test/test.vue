<template lang="jade">
div
  h1 So cool
  mdl-checkbox(v-model='check')
</template>

<script lang="coffee">
vmdl = require '../dist/dist.js'

module.exports =
  data: ->
      msg: 'Hello from Babel!'
  components:
    'mdl-checkbox': vmdl.mdlCheckbox
</script>

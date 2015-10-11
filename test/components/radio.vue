<template lang="jade">
div
  mdl-radio(v-bind:checked.sync='fruit' id='banana' value='Banana') Banana
  mdl-radio(v-bind:checked.sync='fruit' id='pineapple' value='Pineapple') Pineapple
  mdl-radio(v-bind:checked.sync='fruit' id='kiwi' value='Kiwi') Kiwi
  br
  p#text {{size}} {{fruit}}
  mdl-radio(v-bind:checked.sync='size' id='extra' value='Extra' v-if='disabled') Extra
  mdl-radio(v-bind:checked.sync='size' id='big' value='Big' v-bind:disabled='disabled') Big
  mdl-radio(v-bind:checked.sync='size' id='medium' value='Medium') Medium
  mdl-radio(v-bind:checked.sync='size' id='little' value='Little') Little
  input#disable(type='checkbox' v-model='disabled')
  span Disable Big
  br
  input(v-model='size' type="radio" id='big-or' value='Big')
  span Big
  input(v-model='size' type="radio" id='medium-or' value='Medium')
  span Medium
  input(v-model='size' type="radio" id='little-or' value='Little')
  span Little
</template>

<script lang="coffee">
vmdl = require '../../src/main.js'

module.exports =
  data: ->
    fruit: 'Banana'
    size: 'Little'
    disabled: false
  components:
    'mdl-radio': vmdl.mdlRadio
</script>

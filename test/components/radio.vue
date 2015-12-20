<template lang="jade">
div
  h1 Radio
  h3 MDL
  label.mdl-radio.mdl-js-radio.mdl-js-ripple-effect(for='option-1')
    input#option-1.mdl-radio__button(type='radio', name='options', value='1', checked='')
    span.mdl-radio__label First
  label.mdl-radio.mdl-js-radio.mdl-js-ripple-effect(for='option-2')
    input#option-2.mdl-radio__button(type='radio', name='options', value='2')
    span.mdl-radio__label Second
  h3 vue
  mdl-radio.added-class(v-bind:checked.sync='fruit' id='banana' value='Banana') Banana
  mdl-radio(v-bind:checked.sync='fruit' id='pineapple' value='Pineapple') Pineapple
  mdl-radio(v-bind:checked.sync='fruit' id='kiwi' value='Kiwi') Kiwi
  br
  p#text {{size}} {{fruit}}
  mdl-radio(v-bind:checked.sync='size' id='extra' value='Extra' v-if='disabled') Extra
  mdl-radio(v-bind:checked.sync='size' id='big' value='Big' v-bind:disabled='disabled') Big
  mdl-radio(v-bind:checked.sync='size' id='medium' value='Medium') Medium
  mdl-radio(v-bind:checked.sync='size' id='little' value='Little') Little
  br
  <mdl-radio v-bind:checked.sync='size' id='html-radio' value='HTML' disabled>HTML</mdl-radio>
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
vmdl = require '../../src/vue-mdl.js'

module.exports =
  data: ->
    fruit: 'Banana'
    size: 'Little'
    disabled: false
  components: vmdl.components
</script>

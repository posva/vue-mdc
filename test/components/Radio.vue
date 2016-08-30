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
  mdl-radio.added-class(v-model='fruit' id='banana' selected-value='Banana') Banana
  mdl-radio(v-model='fruit' id='pineapple' selected-value='Pineapple') Pineapple
  mdl-radio(v-model='fruit' id='kiwi' selected-value='Kiwi') Kiwi
  br
  p#text {{size}} {{fruit}}
  mdl-radio(v-model='size' id='extra' selected-value='Extra' v-if='disabled') Extra
  mdl-radio(v-model='size' id='big' selected-value='Big' v-bind:disabled='disabled') Big
  mdl-radio(v-model='size' id='medium' selected-value='Medium') Medium
  mdl-radio(v-model='size' id='little' selected-value='Little') Little
  br
  <mdl-radio v-model='size' id='html-radio' selected-value='HTML' disabled>HTML</mdl-radio>
  input#disable(type='checkbox' v-bind:disabled='disabled')
  span Disable Big
  br
  input(v-model='size' type="radio" id='big-or' value='Big')
  span Big
  input(v-model='size' type="radio" id='medium-or' value='Medium')
  span Medium
  input(v-model='size' type="radio" id='little-or' value='Little')
  span Little
</template>

<script lang="babel">
export default {
  data () {
    return {
      fruit: 'Banana',
      size: 'Little',
      disabled: false
    }
  }
}
</script>

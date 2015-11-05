<template lang="jade">
div
  h1 Slider
  h3 MDL
  input(class='mdl-slider mdl-js-slider' type='range'
    min='0' max='100' value='0')
  input(class='mdl-slider mdl-js-slider' type='range'
    min='0' max='100' value='30' disabled)
  input(class='mdl-slider mdl-js-slider' type='range'
    min='0' max='100' value='0' step='10')
  h3 vue
  mdl-slider#slider(:value.sync='value', :min='minValue', :max='maxValue')
  mdl-slider#disable(:value.sync='value', :min='minValue', :max='maxValue', :disabled='disabled', :step='step')
  mdl-slider#vif(v-if='disabled', :value.sync='value', :min='minValue', :max='maxValue')
  br
  span Min:
  input#min(v-model='minValue' type='text')
  br
  span Max:
  input#max(v-model='maxValue' type='text')
  br
  span Step:
  input#step(v-model='step' type='text')
  br
  span Value:
  input#value(v-model='value' type='text')
  br
  input#disable-val(v-model='disabled' type='checkbox')
  span Disable
</template>

<script lang="coffee">
vmdl = require '../../src/main.js'

module.exports =
  data: ->
    minValue: 0
    maxValue: 100
    value: 25
    step: 25
    disabled: false
  components: vmdl.components
</script>

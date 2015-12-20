<template lang="jade">
div
  h1 Switches
  h3 MDL
  label.mdl-switch.mdl-js-switch.mdl-js-ripple-effect(for='ori-switch-1')
    input#ori-switch-1.mdl-switch__input(type='checkbox' checked)
    span.mdl-switch__label Checkbox
  label.mdl-switch.mdl-js-switch(for='ori-switch-2')
    input#ori-switch-2.mdl-switch__input(type='checkbox')
    span.mdl-switch__label No ripple
  h3 vue
  p
    mdl-switch.added-class(id='check-dyn' v-bind:checked.sync='check') Dynamic {{check}}
    mdl-switch(id='check' v-bind:checked.sync='check' v-bind:disabled='disabled') Check me
  p
    input#classic(type='checkbox' v-model='check')
    span Classic checkbox
    input#disable(type='checkbox' v-model='disabled')
    span Disable
  mdl-switch(v-if='disabled' id='v-if' v-bind:checked.sync='check' v-bind:disabled='disabled') v-if
  mdl-switch(v-for='n in 3' v-bind:value='indexId(n)' v-bind:id='indexId(n)' v-bind:checked.sync='checks') v-for {{indexId(n)}}
  p#checks {{checks | json}}
</template>

<script lang="coffee">
vmdl = require '../../src/vue-mdl.js'

module.exports =
  data: ->
    check: true
    checks: []
    disabled: false
  methods:
    indexId: (num) -> 'id-' + num.toString()
  components: vmdl.components
</script>

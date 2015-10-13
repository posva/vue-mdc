<template lang="jade">
div
  // We can also use the jade syntax #id for literal ids
  mdl-checkbox(id='check-dyn' v-bind:checked.sync='check') Dynamic {{check}}
  mdl-checkbox(id='check' v-bind:checked.sync='check' v-bind:disabled='disabled') Check me
  input#classic(type='checkbox' v-model='check')
  span Classic checkbox
  input#disable(type='checkbox' v-model='disabled')
  span Disable
  mdl-checkbox(v-if='disabled' id='v-if' v-bind:checked.sync='check' v-bind:disabled='disabled') v-if
  mdl-checkbox(v-for='n in 3' v-bind:value='indexId(n)' v-bind:id='indexId(n)' v-bind:checked.sync='checks') v-for {{indexId(n)}}
  p#checks {{checks | json}}
</template>

<script lang="coffee">
vmdl = require '../../src/main.js'

module.exports =
  data: ->
    check: true
    checks: []
    disabled: false
  methods:
    indexId: (num) -> 'id-' + num.toString()
  components:
    'mdl-checkbox': vmdl.mdlCheckbox
</script>

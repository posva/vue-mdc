<template lang="jade">
div
  h1 Icon toggle
  h3 MDL
  label.mdl-icon-toggle.mdl-js-icon-toggle.mdl-js-ripple-effect(for='icon-toggle-1')
    input#icon-toggle-1.mdl-icon-toggle__input(type='checkbox', checked='')
    i.mdl-icon-toggle__label.material-icons format_bold
  label.mdl-icon-toggle.mdl-js-icon-toggle.mdl-js-ripple-effect(for='icon-toggle-2')
    input#icon-toggle-2.mdl-icon-toggle__input(type='checkbox', checked='')
    i.mdl-icon-toggle__label.material-icons face
  label.mdl-icon-toggle.mdl-js-icon-toggle.mdl-js-ripple-effect(for='icon-toggle-3')
    input#icon-toggle-3.mdl-icon-toggle__input(type='checkbox', checked='')
    i.mdl-icon-toggle__label.material-icons http
  h3 vue
  // We can also use the jade syntax #id for literal ids
  mdl-icon-toggle.added-class(id='it' icon='face' v-bind:checked.sync='check' v-bind:disabled='disabled')
  mdl-icon-toggle(id='dit' v-bind:icon='icon' v-bind:checked.sync='check')
  input#dit-val(type='text' v-model='icon')
  input#classic(type='checkbox' v-model='check')
  span Classic icon-toggle
  input#disable(type='checkbox' v-model='disabled')
  span Disable
  mdl-icon-toggle(v-if='disabled' icon='face' id='v-if' v-bind:checked.sync='check' v-bind:disabled='disabled')
  mdl-icon-toggle(v-for='n in 3' icon='face' v-bind:value='indexId(n)' v-bind:id='indexId(n)' v-bind:checked.sync='checks')
  p#its {{checks | json}}
</template>

<script lang="coffee">
vmdl = require '../../src/vue-mdl.js'

module.exports =
  data: ->
    check: true
    checks: []
    disabled: false
    icon: 'code'
  methods:
    indexId: (num) -> 'id-' + num.toString()
  components: vmdl.components
</script>

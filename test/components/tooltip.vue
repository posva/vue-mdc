<template lang="jade">
div
  h1 Tooltip
  h3 MDL
  div(v-mdl)
    .icon.material-icons#tt1 add
    .mdl-tooltip(for='tt1')
      p Follow
    #tt2.icon.material-icons print
    .mdl-tooltip.mdl-tooltip--large(for='tt2')
      | Print
  h3 vue
  i.material-icons#tooltip add
  mdl-tooltip(v-bind:class='{hoho: active}' for='tooltip') Add something
  i.material-icons#large print
  mdl-tooltip.added-class(for='large' large) Print
  <mdl-tooltip for='html' large>Print</mdl-tooltip>
  mdl-spinner#spin
  mdl-tooltip(for='spin')
    p
      i.material-icons cached
      span It's still loading...
  br
  input#active(type='checkbox' v-model='active')
  label(for='#active') Active
  input#color(type='checkbox' v-model='color')
  label(for='#color') Single Color
  br
  br
</template>

<script lang="coffee">
vmdl = require '../../src/vue-mdl.js'

module.exports =
  data: ->
    active: true
    color: false
  components: vmdl.components
  directives: vmdl.directives
</script>

<template lang="jade">
div
  h1 Buttons
  h3 MDL
  h4 Rects
  button.mdl-button.mdl-js-button Normal
  button.mdl-button.mdl-js-button.mdl-js-ripple-effect Normal
  button.mdl-button.mdl-js-button(disabled) Normal
  h3 vue
  mdl-button {{someText}}
  <mdl-button id='html-button' raised colored>Should be raised</mdl-button>
  mdl-button#disable-btn(v-bind:disabled='disable' @click='disable=true') Disable
  br
  mdl-button#if(v-if='disable', :colored='colored', :raised='raised', :fab='fab', :mini-fab='miniFab', :primary='primary', :accent='accent', :icon='icon') Multiple
  br
  br
  mdl-button#button.added-class(:colored='colored', :raised='raised', :fab='fab', :mini-fab='miniFab', :primary='primary', :accent='accent', :icon='icon') Multiple
  br
  input#disable(type='checkbox' v-model='disable')
  label(for='disable') Disable
  br
  input#colored(type='checkbox' v-model='colored')
  label(for='colored') Colored
  br
  input#raised(type='checkbox' v-model='raised')
  label(for='raised') Raised
  br
  input#fab(type='checkbox' v-model='fab')
  label(for='fab') Fab
  br
  input#mini-fab(type='checkbox' v-model='miniFab')
  label(for='mini-fab') Mini Fab
  br
  input#primary(type='checkbox' v-model='primary')
  label(for='primary') Primary
  br
  input#accent(type='checkbox' v-model='accent')
  label(for='accent') Accent
  br
  input#icon(type='checkbox' v-model='icon')
  label(for='icon') Icon
  br
</template>

<script lang="coffee">
vmdl = require '../../src/vue-mdl.js'

module.exports =
  data: ->
    someText: 'Dynamic text'
    disable: false
    icon: false
    accent: false
    primary: false
    miniFab: false
    fab: false
    raised: false
    colored: false
  components: vmdl.components
</script>

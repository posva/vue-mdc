<style>
  .mdl-badge--blue[data-badge]:after {
    background: aquamarine;
  }
</style>
<template lang="jade">
div
  h1 Badges
  h3 MDL
  span.material-icons.mdl-badge(data-badge='1') account_box
  span.material-icons.mdl-badge(data-badge='♥') account_box
  span.material-icons.mdl-badge.mdl-overlap(data-badge='♥') account_box
  span.material-icons.mdl-badge.mdl-badge--no-background(data-badge='♥') account_box
  span.material-icons.mdl-badge.mdl-overlap.mdl-badge--no-background(data-badge='♥') account_box
  h3 vue
  i.material-icons.mdl-badge--blue(v-mdl-badge.literal='3') account_box
  i.material-icons(v-mdl-badge.literal='3') account_box
  i.material-icons#badge(v-mdl-badge='badgeText') account_box
  i.material-icons#badge-nb(v-mdl-badge.no-background='badgeText') account_box
  i.material-icons#badge-overlap(v-mdl-badge.overlap.no-background='badgeText') account_box
  span#badge-2(v-mdl-badge='3') Inbox
  i.material-icons#hider(v-mdl-badge='badgeText', :hide-badge='zero') account_box
  i.material-icons#number(v-mdl-badge.number='badgeText') account_box
  i.material-icons#hider-multi(v-mdl-badge.number='badgeText', :hide-badge='hide') account_box
  br
  input#badge-val(type='text' v-model='badgeText')
  input#badge-hide(type='checkbox' v-model='hide')
  label(for='badge-hide') Hide
</template>

<script lang="coffee">
vmdl = require '../../src/vue-mdl.js'

module.exports =
  data: ->
    badgeText: '♥'
    hide: false
  computed:
    zero: ->
      n = parseInt @badgeText, 10
      n isnt n or n <= 0
  directives: vmdl.directives
</script>

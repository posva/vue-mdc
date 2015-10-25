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
  br
  input#badge-val(type='text' v-model='badgeText')
</template>

<script lang="coffee">
vmdl = require '../../src/main.js'

module.exports =
  data: ->
    badgeText: '♥'
  directives: vmdl.directives
</script>

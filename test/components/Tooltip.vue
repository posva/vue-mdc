<template lang="jade">
div
  h1 Tooltip
  h3 MDL
  div(mdl)
    .icon.material-icons#tt1 add
    .mdl-tooltip(for='tt1')
      p Follow
    #tt2.icon.material-icons print
    .mdl-tooltip.mdl-tooltip--large(for='tt2')
      | Print
  h3 vue
  i.material-icons#tooltip add
  mdl-tooltip(v-bind:class='{hoho: active}' target='tooltip') Add something
  i.material-icons#large print
  mdl-tooltip.added-class(target='large' large) Print
  i.material-icons#top settings
  mdl-tooltip(target='top' top) Settings
  <mdl-tooltip target='html' large>Print</mdl-tooltip>
  mdl-spinner#spin
  mdl-tooltip(target='spin')
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

<script lang="babel">
export default {
  data () {
    return {
      active: true,
      color: false
    }
  }
}
</script>

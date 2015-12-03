<style lang="stylus">
</style>

<template lang="jade">
.section
  title-link Buttons
  .section__content
    p The button component allows to easily toggle classes. It supports the
      a(href='#ripple-effect')
        code v-mdl-ripple-effect
    .flex.start.wrap
      mdl-button.space Button
      mdl-button.space(v-mdl-ripple-effect) Ripple Effect
      mdl-button.space(disabled) Disabled
      mdl-button.space(icon)
        i.material-icons star
    pre
      code.html
        p= '<mdl-button>Button</mdl-button>'
        p= '<mdl-button v-mdl-ripple-effect>Ripple Effect</mdl-button>'
        p= '<mdl-button disabled>Disabled</mdl-button>'
        p= '<mdl-button icon>'
        p= '  <i class="material-icons">star</i>'
        p= '</mdl-button>'

    h5 Playground
    .flex.start.wrap
      mdl-button(:colored='colored', :raised='raised', :fab='fab',
      :mini-fab='miniFab', :primary='primary', :accent='accent', :icon='icon',
      :disabled='disabled')
        i.material-icons(v-if='iconText') {{iconText}}
        span(v-else) {{text}}
      mdl-checkbox(:checked.sync='colored') Colored
      mdl-checkbox(:checked.sync='raised') Raised
      mdl-checkbox(:checked.sync='disabled') Disabled
      mdl-checkbox(:checked.sync='icon') Icon
      mdl-checkbox(:checked.sync='accent') Accent
      mdl-checkbox(:checked.sync='primary') Primary
      mdl-checkbox(:checked.sync='miniFab') Mini Fab
      mdl-checkbox(:checked.sync='fab') Fab
    mdl-textfield(:value.sync='text', label='Text', floating-label)
    mdl-textfield(:value.sync='iconText', label='Icon', floating-label)
    p Result:
    pre
      code.html(v-hljs='playgroundHtml')
    h5 Prop List
    table.mdl-data-table.mdl-js-data-table
      thead
        tr
          th.mdl-data-table__cell--non-numeric Prop
          th.mdl-data-table__cell--non-numeric Description
      tbody
        tr
          td.mdl-data-table__cell--non-numeric
            code disabled
          td.mdl-data-table__cell--non-numeric Disables the button. Adds the
            code is-disabled
            | class to the button
        tr
          td.mdl-data-table__cell--non-numeric
            code raised
          td.mdl-data-table__cell--non-numeric Applies
            i  raised
            |  display effect with
            code mdl-button--colored
            | class
    br
</template>

<script lang="coffee">
module.exports =
  data: ->
    iconText: ''
    text: 'Play with me!'
    disabled: false
    icon: false
    accent: false
    primary: false
    miniFab: false
    fab: false
    raised: false
    colored: false
  computed:
    playgroundHtml: ->
      '<mdl-button' +
      (if @colored then ' colored' else '') +
      (if @icon then ' icon' else '') +
      (if @disabled then ' disabled' else '') +
      (if @accent then ' accent' else '') +
      (if @primary then ' primary' else '') +
      (if @miniFab then ' min-fab' else '') +
      (if @fab then ' fab' else '') +
      (if @raised then ' raised' else '') +
      '>' +
      (if @iconText then "<i class=\"material-icons\">#{@iconText}</i>" else
      @text) +
      '</mdl-button>'
</script>

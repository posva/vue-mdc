<style lang="stylus">
</style>

<template lang="jade">
.section
  title-link Buttons
  .section__content
    p The button component allows to easily toggle classes. It supports the 
      a(href='#ripple-effect')
        code ripple-effect
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
    .flex.center.wrap
      mdl-checkbox.reset-width.space(:checked.sync='colored') Colored
      mdl-checkbox.reset-width.space(:checked.sync='raised') Raised
      mdl-checkbox.reset-width.space(:checked.sync='disabled') Disabled
      mdl-checkbox.reset-width.space(:checked.sync='icon') Icon
      mdl-checkbox.reset-width.space(:checked.sync='accent') Accent
      mdl-checkbox.reset-width.space(:checked.sync='primary') Primary
      mdl-checkbox.reset-width.space(:checked.sync='miniFab') Mini Fab
      mdl-checkbox.reset-width.space(:checked.sync='fab') Fab
    .flex.start.wrap
      mdl-textfield.space(:value.sync='text', label='Text', floating-label)
      mdl-textfield.space(:value.sync='iconText', label='Icon', floating-label)
    p Result:
    pre
      code.html(v-hljs='playgroundHtml')

    h5 Link buttons
    p Sometimes you might want to display a link as a button. In order to do this,
    |  you can use the 
    code mdl-anchor-button
    |  element. It works exactly as the button does but uses an  
    code a
    |  html link instead of a 
    code button
    | .
    .flex.start.wrap
      mdl-anchor-button(href='http://vuejs.org/api' target='_blank') Open Vuejs doc
    pre
      code.html
        p= '<mdl-anchor-button href="http://vuejs.org/api" target="_blank">Open Vuejs doc</mdl-anchor-button>'

    h5 Prop List
    table.mdl-data-table.mdl-js-data-table
      thead
        tr
          th.mdl-data-table__cell--non-numeric Prop
          th.mdl-data-table__cell--non-numeric Description
          th.mdl-data-table__cell--non-numeric Remarks
      tbody
        tr
          td.mdl-data-table__cell--non-numeric
            code disabled
          td.mdl-data-table__cell--non-numeric Disables the button. Adds the 
            code is-disabled
            |  class to the button
          td.mdl-data-table__cell--non-numeric
        tr
          td.mdl-data-table__cell--non-numeric
            code raised
          td.mdl-data-table__cell--non-numeric Applies
            i  raised
            |  display effect with 
            code mdl-button--raised
            |  class
          td.mdl-data-table__cell--non-numeric Mutually exclusive with fab, mini-fab, and icon
        tr
          td.mdl-data-table__cell--non-numeric
            code fab
          td.mdl-data-table__cell--non-numeric Applies
            i  fab
            |  (circular) display effect with 
            code mdl-button--fab
            |  class
          td.mdl-data-table__cell--non-numeric Mutually exclusive with raised, mini-fab, and icon
        tr
          td.mdl-data-table__cell--non-numeric
            code mini-fab
          td.mdl-data-table__cell--non-numeric Applies
            i  mini-fab
            |  (small fab circular) display effect with 
            code mdl-button--mini-fab
            |  class
          td.mdl-data-table__cell--non-numeric Mutually exclusive with raised, fab, and icon
        tr
          td.mdl-data-table__cell--non-numeric
            code icon
          td.mdl-data-table__cell--non-numeric Applies
            i  icon
            |  (small plain circular) display effect with 
            code mdl-button--icon
            |  class
          td.mdl-data-table__cell--non-numeric Mutually exclusive with raised, fab and mini-fab
        tr
          td.mdl-data-table__cell--non-numeric
            code colored
          td.mdl-data-table__cell--non-numeric Applies
            i  colored
            |  display effect with 
            code mdl-button--colored
            |  class
          td.mdl-data-table__cell--non-numeric
        tr
          td.mdl-data-table__cell--non-numeric
            code primary
          td.mdl-data-table__cell--non-numeric Applies
            i  primary
            |  color display effect with 
            code mdl-button--primary
            |  class
          td.mdl-data-table__cell--non-numeric
        tr
          td.mdl-data-table__cell--non-numeric
            code accent
          td.mdl-data-table__cell--non-numeric Applies
            i  accent
            |  color display effect with 
            code mdl-button--accent
            |  class
          td.mdl-data-table__cell--non-numeric
    br
</template>

<script>
export default {
  data () {
    return {
      iconText: '',
      text: 'Play with me!',
      disabled: false,
      icon: false,
      accent: false,
      primary: false,
      miniFab: false,
      fab: false,
      raised: false,
      colored: false
    }
  },
  computed: {
    playgroundHtml () {
      return '<mdl-button' +
      (this.colored ? ' colored' : '') +
      (this.icon ? ' icon' : '') +
      (this.disabled ? ' disabled' : '') +
      (this.accent ? ' accent' : '') +
      (this.primary ? ' primary' : '') +
      (this.miniFab ? ' min-fab' : '') +
      (this.fab ? ' fab' : '') +
      (this.raised ? ' raised' : '') +
      '>' +
      (this.iconText ? `<i class="material-icons">${this.iconText}</i>` : this.text) +
      '</mdl-button>'
    }
  }
}
</script>

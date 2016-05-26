<style lang="stylus">
</style>

<template lang="jade">
.section
  title-link Icon Toggles
  .section__content
    p The icon-toggle component works the same way as the
      a(v-link.literal='/checkboxes')  checkbox component
      |. It also supports the
      a(v-link.literal='/ripple-effect')  ripple effect
    .flex.start.wrap
      mdl-icon-toggle(:checked.sync='bold', icon='format_bold')
      mdl-icon-toggle.mdl-js-ripple-effect(:checked.sync='italic', icon='format_italic')
      mdl-icon-toggle(:checked.sync='underline', icon='format_underlined', disabled)
    pre
      code.html
        p= '<mdl-icon-toggle :checked.sync="checked"  icon="format_bold"></mdl-icon-toggle>'
        p= '<mdl-icon-toggle :checked.sync="checked" icon="format_italic" class="mdl-js-ripple-effect"></mdl-icon-toggle>'
        p= '<mdl-icon-toggle :checked.sync="checked" icon="format_underlined" disabled></mdl-icon-toggle>'

    p You can pass an 
      code id
      |  to the component to access through the form element
    pre
      code.html
        p= '<mdl-icon-toggle id="Subscribe" :checked.sync="subscribe">Subscribe</mdl-icon-toggle>'

    p Instead of using multiple booleans for a group of checkboxes, you can directly pass the same array to multiple checkboxes. If you do this you also need to specify the 
     code value
     |  prop

    .flex.start.wrap
      mdl-icon-toggle(:checked.sync='styles', icon='format_bold', value='bold')
      mdl-icon-toggle(:checked.sync='styles', icon='format_italic', value='italic')
      mdl-icon-toggle(:checked.sync='styles', icon='format_underlined', value='underlined')
    .flex.start.wrap
      p Arrays content: {{styles | json}}

    pre
      code.html
        p= '<mdl-icon-toggle :checked.sync="styles" icon="format_bold" value="bold"></mdl-icon-toggle>'
        p= '<mdl-icon-toggle :checked.sync="styles" icon="format_italic" value="italic"></mdl-icon-toggle>'
        p= '<mdl-icon-toggle :checked.sync="styles" icon="format_underlined" value="underlined"></mdl-icon-toggle>'

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
            code icon
          td.mdl-data-table__cell--non-numeric Set the toggle icon
          td.mdl-data-table__cell--non-numeric Required
        tr
          td.mdl-data-table__cell--non-numeric
            code disabled
          td.mdl-data-table__cell--non-numeric Disables the checkbox. Adds the 
            code is-disabled
            |  class to the button
          td.mdl-data-table__cell--non-numeric
        tr
          td.mdl-data-table__cell--non-numeric
            code checked
          td.mdl-data-table__cell--non-numeric Control whether the icon toggle is checked or not
          td.mdl-data-table__cell--non-numeric You must use a two way binding. You can either use a boolean or an array
        tr
          td.mdl-data-table__cell--non-numeric
            code id
          td.mdl-data-table__cell--non-numeric Defines the id used to link the label and the input
          td.mdl-data-table__cell--non-numeric
        tr
          td.mdl-data-table__cell--non-numeric
            code value
          td.mdl-data-table__cell--non-numeric Defines the value of the toggle. Useful when passing an array to the 
            code checked
            |  prop
          td.mdl-data-table__cell--non-numeric
    br
</template>

<script>
export default {
  data () {
    return {
      bold: true,
      italic: false,
      underline: false,
      styles: []
    }
  }
}
</script>

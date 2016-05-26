<style lang="stylus">
</style>

<template lang="jade">
.section
  title-link Radio Buttons
  .section__content
    p The radio button supports the
      a(v-link.literal='/ripple-effect')  ripple effect
    .flex.start.wrap
      mdl-radio(:checked.sync='checked', value='option 1') Option 1
    .flex.start.wrap
      mdl-radio.mdl-js-ripple-effect(:checked.sync='checked', value='option 2') Option 2
    .flex.start.wrap
      mdl-radio(:checked.sync='checked', value='option 3') Option 3
    .flex.start.wrap
      mdl-radio(:checked.sync='checked', disabled, value='option 4') Option 4
    p Option selected: {{checked}}
    pre
      code.html
        p= '<mdl-radio :checked.sync="check" value="option 1">Option 1</mdl-radio>'
        p= '<mdl-radio :checked.sync="check" class="mdl-js-ripple-effect" value="option 2">Option 2</mdl-radio>'
        p= '<mdl-radio :checked.sync="check" value="option 3">Option 3</mdl-radio>'
        p= '<mdl-radio :checked.sync="check" value="option 4" disabled>Option 4</mdl-radio>'

    p You can pass an 
      code id
      |  and a 
      code name
      |  to the component to access through the form element
    pre
      code.html
        p= '<mdl-radio name="subscription-pro" id="subscription-pro" :checked.sync="subscription" value="pro">Pro Subscription</mdl-radio>'

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
          td.mdl-data-table__cell--non-numeric Disables the radio button. Adds the 
            code is-disabled
            |  class to the button
          td.mdl-data-table__cell--non-numeric
        tr
          td.mdl-data-table__cell--non-numeric
            code checked
          td.mdl-data-table__cell--non-numeric Variable to assign when the radio button is checked
          td.mdl-data-table__cell--non-numeric You must use a two way binding
        tr
          td.mdl-data-table__cell--non-numeric
            code name
          td.mdl-data-table__cell--non-numeric Defines the name used on the input element
          td.mdl-data-table__cell--non-numeric
        tr
          td.mdl-data-table__cell--non-numeric
            code id
          td.mdl-data-table__cell--non-numeric Defines the id used to link the label and the input
          td.mdl-data-table__cell--non-numeric
        tr
          td.mdl-data-table__cell--non-numeric
            code value
          td.mdl-data-table__cell--non-numeric Defines the value of the radio button
          td.mdl-data-table__cell--non-numeric This prop is required
    br
</template>

<script>
export default {
  data () {
    return {
      checked: 'option 2'
    }
  }
}
</script>

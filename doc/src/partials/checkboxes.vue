<style lang="stylus">
</style>

<template lang="jade">
.section
  title-link Checkboxes
  .section__content
    p The checkbox supports the
      router-link(to="/ripple-effect")  ripple effect
    .flex.start.wrap
      mdl-checkbox(v-model='checked') Checkbox
      mdl-checkbox.mdl-js-ripple-effect(v-model='checked') Ripple Effect
      mdl-checkbox(v-model='checked', disabled) Disabled
    pre
      code.html
        p= '<mdl-checkbox v-model="checked">Checkbox</mdl-checkbox>'
        p= '<mdl-checkbox v-model="checked" class="mdl-js-ripple-effect">Ripple Effect</mdl-checkbox>'
        p= '<mdl-checkbox v-model="checked" disabled>Disabled</mdl-checkbox>'

    p You can pass an 
      code id
      |  to the component to access through the form element
    pre
      code.html
        p= '<mdl-checkbox id="Subscribe" v-model="subscribe">Subscribe</mdl-checkbox>'

    p Instead of using multiple booleans for a group of checkboxes, you can directly pass the same array to multiple checkboxes. If you do this you also need to specify the 
     code value
     |  prop

    .flex.start.wrap
      mdl-checkbox(v-model='checks', selected-value='one') One
      mdl-checkbox(v-model='checks', selected-value='two') Two
      mdl-checkbox(v-model='checks', selected-value='three') Three
      mdl-checkbox(v-model='checks', selected-value='four') Four
      mdl-checkbox(v-model='checks', selected-value='five') Five
      p Arrays content: {{checks}}

    pre
      code.html
        p= '<mdl-checkbox v-model="checks" selected-value="one">One</mdl-checkbox>'
        p= '<mdl-checkbox v-model="checks" selected-value="two">Two</mdl-checkbox>'
        p= '<mdl-checkbox v-model="checks" selected-value="three">Three</mdl-checkbox>'
        p= '<mdl-checkbox v-model="checks" selected-value="four">Four</mdl-checkbox>'
        p= '<mdl-checkbox v-model="checks" selected-value="five">Five</mdl-checkbox>'

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
          td.mdl-data-table__cell--non-numeric Disables the checkbox. Adds the 
            code is-disabled
            |  class to the button
          td.mdl-data-table__cell--non-numeric
        tr
          td.mdl-data-table__cell--non-numeric
            code value
          td.mdl-data-table__cell--non-numeric Control whether the checkbox is checked or not
          td.mdl-data-table__cell--non-numeric Typically used with 'v-model' binding. You can either use a boolean or an array
        tr
          td.mdl-data-table__cell--non-numeric
            code id
          td.mdl-data-table__cell--non-numeric Defines the id used to link the label and the input
          td.mdl-data-table__cell--non-numeric
        tr
          td.mdl-data-table__cell--non-numeric
            code selected-value
          td.mdl-data-table__cell--non-numeric Defines the value of the checkbox. Useful when passing an array to the 
            code checked
            |  prop
          td.mdl-data-table__cell--non-numeric
    br
</template>

<script>
export default {
  data () {
    return {
      checked: true,
      checks: ['one', 'four']
    }
  }
}
</script>

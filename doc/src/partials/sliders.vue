<style lang="stylus">
</style>

<template lang="jade">
.section
  title-link Sliders
  .section__content
    p Sliders allows you to display a fancier
      code= ' <input type="range">'
    .flex.start.wrap
      mdl-textfield(:value.sync='amount', floating-label, label='Amount')
    .flex.center.wrap
      mdl-slider(:value.sync='amount', min='0', max='100')
      mdl-slider(:value.sync='amount', min='0', max='100', disabled)
    pre
      code.html
        p= '<mdl-slider :value.sync="amount" min="0" max="100"></mdl-slider>'
        p= '<mdl-slider :value.sync="amount" min="0" max="100" disabled></mdl-slider>'

    p You can set the step to limit the available values
    .flex.start.wrap
      mdl-textfield(:value.sync='amountStep', floating-label, label='Amount')
      mdl-textfield(:value.sync='step', floating-label, label='Step')
    .flex.center.wrap
      mdl-slider(:value.sync='amountStep', :step='step' min='0', max='100')
    pre
      code.html
        p= '<mdl-slider :value.sync="amount" min="0" max="100"></mdl-slider>'
        p= '<mdl-slider :value.sync="amount" min="0" max="100" disabled></mdl-slider>'

    p When changing those props externally (by not using the slider), the slider will be visually updated to match the new value. However min, max and step constraints will not be applied.

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
          td.mdl-data-table__cell--non-numeric Disables the slider
          td.mdl-data-table__cell--non-numeric
        tr
          td.mdl-data-table__cell--non-numeric
            code value
          td.mdl-data-table__cell--non-numeric Variable affected to the slider
          td.mdl-data-table__cell--non-numeric This is required
        tr
          td.mdl-data-table__cell--non-numeric
            code min
          td.mdl-data-table__cell--non-numeric Minimum value for the slider
          td.mdl-data-table__cell--non-numeric This is required
        tr
          td.mdl-data-table__cell--non-numeric
            code max
          td.mdl-data-table__cell--non-numeric Maximum value for the slider
          td.mdl-data-table__cell--non-numeric This is required
        tr
          td.mdl-data-table__cell--non-numeric
            code step
          td.mdl-data-table__cell--non-numeric Step used to increase or decrease the value
          td.mdl-data-table__cell--non-numeric
    br
</template>

<script>
export default {
  data () {
    return {
      amount: 30,
      amountStep: 20,
      step: 5
    }
  }
}
</script>

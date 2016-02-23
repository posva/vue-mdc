<style lang="stylus">
</style>

<template lang="jade">
.section
  title-link Spinners
  .section__content
    p Spinners allows you to inform the user that you're waiting for some responses
    .flex.center.wrap
      mdl-spinner.space
      mdl-spinner.space(single-color)
    pre
      code.html
        p= '<mdl-spinner></mdl-spinner>'
        p= '<mdl-spinner single-color></mdl-spinner>'

    p You can deactivate the spinner by setting the
      code  active
      |  prop to
      code  false
    .flex.start.wrap
      mdl-checkbox(:checked.sync='active') Active
    .flex.center.wrap
      mdl-spinner(:active='active')
    pre
      code.html
        p= '<mdl-spinner :active="active"></mdl-spinner>'

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
            code  active
          td.mdl-data-table__cell--non-numeric Control whether the spinner is active or not. Defaults to true
          td.mdl-data-table__cell--non-numeric This only makes the component invisible
        tr
          td.mdl-data-table__cell--non-numeric
            code  single-color
          td.mdl-data-table__cell--non-numeric Applies a single color effect
          td.mdl-data-table__cell--non-numeric
    br
</template>

<script>
export default {
  data () {
    return {
      active: true
    }
  }
}
</script>

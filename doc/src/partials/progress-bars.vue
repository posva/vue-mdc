<style lang="stylus">
.mdl-progress > .bufferbar,
.mdl-progress:not(.mdl-progress__indeterminate):not(.mdl-progress__indeterminate) > .auxbar
  background-image: initial
  background-color: #c2d6d4
</style>

<template lang="jade">
.section
  title-link Progress Bars
  .section__content
    p Progress bar allows you to easily display progress
    .flex.start.wrap
      mdl-textfield(:value.sync='progress', floating-label, label='Progress')
    .flex.center.wrap
      mdl-progress(:progress='progress')
    br
    .flex.center.wrap
      mdl-progress(indeterminate)
    pre
      code.html
        p= '<mdl-progress :progress="progress"></mdl-progress>'
        p= '<mdl-progress indeterminate></mdl-progress>'

    p You can make it bufferize by using the 
     code buffer
     |  prop
    p
      em Note:
      |  The effect is broken in firefox because I'm manually overriding the colors

    .flex.start.wrap
      mdl-textfield(:value.sync='progress', floating-label, label='Progress')
      mdl-textfield(:value.sync='buffer', floating-label, label='Buffer')
    .flex.center.wrap
      mdl-progress(:progress='progress', :buffer='buffer')

    pre
      code.html
        p= '<mdl-progress :progress="progress" :buffer="buffer"></mdl-progress>'

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
            code progress
          td.mdl-data-table__cell--non-numeric Control the progress amount
          td.mdl-data-table__cell--non-numeric
        tr
          td.mdl-data-table__cell--non-numeric
            code buffer
          td.mdl-data-table__cell--non-numeric Control the buffer amount
          td.mdl-data-table__cell--non-numeric The effect applies to the rest of the progressbar. A buffer value of 80 creates an effect on the remaining 20% of the progressbar
        tr
          td.mdl-data-table__cell--non-numeric
            code indeterminate
          td.mdl-data-table__cell--non-numeric Applies an indeterminate effect on the progressbar
          td.mdl-data-table__cell--non-numeric This overrides buffer and progress effect
    br
</template>

<script>
export default {
  data () {
    return {
      progress: 30,
      buffer: 60
    }
  }
}
</script>

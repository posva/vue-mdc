<style lang="stylus">
</style>

<template lang="jade">
.section
  title-link Tooltips
  .section__content
    p Tooltips make it easy to display additional information based mouse hover
   p They require a
      code  for
      |  prop to bind to the correct dom element
    .flex.center.wrap
      mdl-tooltip(for='add-button') Add something!
      mdl-button#add-button(fab, primary)
        i.material-icons add
    pre
      code.html
        p= '<mdl-tooltip for="add-button">Add something!</mdl-tooltip>'
        p= '<mdl-button id="add-button" fab primary>'
        p= '  <i class="material-icons">add</i>'
        p= '</mdl-button>'

    p Make it larger with the
      code  large
      |  prop

    .flex.center.wrap
      mdl-tooltip(large, for='send-button') Let it go!
      mdl-button#send-button(raised, primary)
        i.material-icons send
    pre
      code.html
        p= '<mdl-tooltip for="send-button" large>Let it go!</mdl-tooltip>'
        p= '<mdl-button id="send-button" fab primary>'
        p= '  <i class="material-icons">send</i>'
        p= '</mdl-button>'

    p You can also add html inside the tooltip

    .flex.center.wrap
      mdl-tooltip(large, for='mood-button')
        | Here is some
        strong  custom
        code  html
        br
        i.material-icons mood
      mdl-button#mood-button(fab, primary)
        i.material-icons mood
    pre
      code.html
        p= '<mdl-tooltip for="mood-button">Add something!</mdl-tooltip>'
        p= '<mdl-button id="mood-button" fab primary>'
        p= '  Here is some <strong>custom</strong> <code>html</code><br/><i class="material-icons">mood</i>'
        p= '</mdl-button>'

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
            code  for
          td.mdl-data-table__cell--non-numeric
            code id
            |  of another item. The tooltip is binded to the item with the specified
            code  id
          td.mdl-data-table__cell--non-numeric This is required
        tr
          td.mdl-data-table__cell--non-numeric
            code  large
          td.mdl-data-table__cell--non-numeric Makes the tooltip bigger
          td.mdl-data-table__cell--non-numeric
    br
</template>

<script>
export default {}
</script>

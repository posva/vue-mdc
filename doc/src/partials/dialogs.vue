<style lang="stylus">
</style>

<template lang="jade">
.section
  title-link Dialogs
  .section__content
   p They require a
      code  for
      |  prop to bind to the correct dom element
    .flex.center.wrap
      mdl-dialogs(for='my-dialogs',title='Dialogs-test',close-button='testcloseButton' content='This is an example of the MDL Dialog being used as a modal.It is using the full width action design intended for use with buttons.that do not fit within the specified')
      mdl-button#my-dialogs(fab, primary)
        i.material-icons power_settings_new
    pre
      code.html
        p= '<mdl-dialogs for="add-button"  title="Dialogs-test" content="your cotent show here"></mdl-dialogs>'
        p= '<mdl-button id="add-button" fab primary>'
        p= '  <i class="material-icons">power_settings_new</i>'
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
            |  of another item. The dialogs is binded to the item with the specified
            code  id
          td.mdl-data-table__cell--non-numeric This is required
        tr
          td.mdl-data-table__cell--non-numeric
            code  title
          td.mdl-data-table__cell--non-numeric This is show for dialogs title
          td.mdl-data-table__cell--non-numeric
        tr
          td.mdl-data-table__cell--non-numeric
            code  content
          td.mdl-data-table__cell--non-numeric This is show for dialogs content
          td.mdl-data-table__cell--non-numeric
        tr
          td.mdl-data-table__cell--non-numeric
            code  close-button
          td.mdl-data-table__cell--non-numeric This is Defines the dialogs close button id with the specified
          td.mdl-data-table__cell--non-numeric

    br
</template>

<script>
export default {}
</script>

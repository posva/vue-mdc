<style lang="stylus">
</style>

<template lang="jade">
.section
  title-link Dialogs
  .section__content
    p The dialog component allows for verification of user actions, simple data input, and alerts to provide extra information to users. To display dialogs, use events.

    div(v-transfer-dom) Hello
      mdl-dialog(title='Hi there' display-on='infoMessage' cancellable)
        p Hello. This is an information message. You can click outside or in the close button to close it.
    .flex.center.wrap
      mdl-button(fab, primary, v-on:click='$broadcast("infoMessage")')
        i.material-icons power_settings_new
    pre
      code.html
        p= '<mdl-dialog title="Hi there" display-on="infoMessage" cancellable>'
        p= '  <p>Hello. This is an information message. You can click outside or in the close button to close it.</p>'
        p='</mdl-dialog>'

      code.javascript.
        // Inside the parent vm
        this.$broadcast('infoMessage')

    p Sometimes the modal need to be appended to the dom. In order to do that you
      | you'll need the 
      a(href='https://github.com/rhyzx/vue-transfer-dom')
        code vue-transfer-dom
        |  directive
      | and include you dialog in an outter container:

    pre
      code.html
        p= '<div v-transfer-dom>'
        p= '  <mdl-dialog title="Hi there" display-on="infoMessage" cancellable>'
        p= '    <p>Hello. This is an information message. You can click outside or in the close button to close it.</p>'
        p='  </mdl-dialog>'
        p='</div>'

    p The example above use this technique to prevent the menu from overlapping.

    p By default there's only one action. You can add more actions by using the slot
      code  actions
      | . Each action must either be a
      code  button
      |  or contain an attribute
      code  data-action
      | .

    pre
      code.html
        p= '<mdl-dialog title="Hi there" display-on="infoMessage">'
        p= '  <p>Hello</p>'
        p= '  <template slot="actions">'
        p= '    <mdl-button primary>Increase</mdl-button>'
        p= '    <mdl-button primary>Decrease</mdl-button>'
        p= '    <mdl-button>Close</mdl-button>'
        p= '  </template>'
        p='</mdl-dialog>'

    p You can pass any number of callbacks as actions in the same order as the buttons when emitting the event.

    pre
      code.javascript.
        // Inside the parent vm
        this.$broadcast('infoMessage', increaseFunction, decreaseFunction, closeCallback)

    p If you added the 
      code cancellable
      |  prop to the dialog, you can specify one extra callback. If there's no extra callback, the callback used for the last action is used. This callback is only called when the dialog is dismissed by clicking outside of it.

    pre
      code.javascript.
        // Inside the parent vm
        this.$broadcast('infoMessage', actionFunc, closeCallback, dismissCallback)

    p By default all actions closes the dialog, if you want to prevent that you must explicitly return false in the callback.
    p You can pass 
      code null
      |  instead of a function for any given action.

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
            code  title
          td.mdl-data-table__cell--non-numeric Title of the dialog
          td.mdl-data-table__cell--non-numeric Optional
        tr
          td.mdl-data-table__cell--non-numeric
            code  display-on
          td.mdl-data-table__cell--non-numeric Event to listen for displaying
          td.mdl-data-table__cell--non-numeric Required
        tr
          td.mdl-data-table__cell--non-numeric
            code  full-width
          td.mdl-data-table__cell--non-numeric Make buttons full width by applying the 
            code  mdl-dialog__actions--full-width
            |  modifier
          td.mdl-data-table__cell--non-numeric This prop doesn't need a value
        tr
          td.mdl-data-table__cell--non-numeric
            code  cancellable
          td.mdl-data-table__cell--non-numeric Make the dialog dismissible by clicking outside of it
          td.mdl-data-table__cell--non-numeric This prop doesn't need a value

    br
</template>

<script>
export default {}
</script>

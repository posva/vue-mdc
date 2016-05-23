<style lang="stylus">
</style>

<template lang="jade">
.section
  title-link Dialogs
  .section__content
    p The dialog component allows for verification of user actions, simple data input, and alerts to provide extra information to users. To display dialogs, use events.

    div(v-transfer-dom)
      mdl-dialog(v-ref:info-message title='Hi there')
        p Hello. This is an information message. You can click outside or in the close button to close it.
    .flex.center.wrap
      mdl-button(fab, primary, v-on:click='$refs.infoMessage.open')
        i.material-icons power_settings_new
    pre
      code.html
        p= '<mdl-dialog v-ref:info-message title="Hi there">'
        p= '  <p>Hello. This is an information message. You can click outside or in the close button to close it.</p>'
        p= '</mdl-dialog>'

      code.javascript.
        // Inside the parent vm
        this.$refs.infoMessage.open()

    p Sometimes the modal need to be appended to the dom. In order to do that you
      | you'll need the 
      a(href='https://github.com/rhyzx/vue-transfer-dom')
        code vue-transfer-dom
        |  directive
      | and include you dialog in an outter container:

    pre
      code.html
        p= '<div v-transfer-dom>'
        p= '  <mdl-dialog v-ref:info-message title="Hi there">'
        p= '    <p>Hello. This is an information message. You can click outside or in the close button to close it.</p>'
        p= '  </mdl-dialog>'
        p= '</div>'

    p The example above use this technique to prevent the menu from overlapping.

    p The dialgo component emits an&nbsp;
      code open
      |  event when it opens as well as a&nbsp;
      code close
      |  event when it closes by clicking the Close button. You can use those events
      | to fire actions when the dialog is closed.

    pre
      code.html
        p= '<mdl-dialog @close="closeCallback" v-ref:info-message title="Hi there">'
        p= '  <p>Hello. This is an information message. You can click outside or in the close button to close it.</p>'
        p= '</mdl-dialog>'

      code.javascript.
        methods: {
          closeCallback () {
            // do something
          }
        }

    p If you want to customise actions, use the&nbsp;
      code actions
      |  slot:

    div(v-transfer-dom)
      mdl-dialog(v-ref:multiple full-width title='Hi there')
        p Hello.
        p Number is {{ number }}
        p Increase the number or decrease without closing this modal
        template(slot="actions")
          mdl-button(primary, v-on:click='number++') Increase
          mdl-button(primary, v-on:click='number--') Decrease
          mdl-button(v-on:click='$refs.multiple.close') Close
    .flex.center.wrap
      mdl-button(fab, primary, v-on:click='$refs.multiple.open')
        i.material-icons power_settings_new
    pre
      code.html
        p= '<mdl-dialog v-ref:multiple full-width title="Hi there">'
        p= '  <p>Hello</p>'
        p= '  <template slot="actions">'
        p= '    <mdl-button primary @click="number++">Increase</mdl-button>'
        p= '    <mdl-button primary @click="number--">Decrease</mdl-button>'
        p= '    <mdl-button @click="$refs.multiple.close">Close</mdl-button>'
        p= '  </template>'
        p= '</mdl-dialog>'

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
            code  full-width
          td.mdl-data-table__cell--non-numeric Make buttons full width by applying the 
            code  mdl-dialog__actions--full-width
            |  modifier
          td.mdl-data-table__cell--non-numeric This prop doesn't need a value

    br
</template>

<script>
export default {
  data () {
    return {
      number: 0
    }
  }
}
</script>

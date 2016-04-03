<template lang="jade">
div
  h1 Dialogs
  br
  p Value is {{number}}
  #dialog
    mdl-button(fab, primary, v-on:click='showInfo')
      i.material-icons info
    mdl-button(fab, primary, v-on:click='showMessageWithCallback')
      i.material-icons plus_one
    mdl-button(fab, primary, v-on:click='showMultipleActions')
      i.material-icons more
    mdl-button(fab, primary, v-on:click='showCancellable')
      i.material-icons vignette

    mdl-dialog#info(title='Info message' display-on='infoMessage')
      p This is a modal example

    mdl-dialog#cancellable(cancellable title='Info message' display-on='cancellableMessage')
      p This is a modal example

    mdl-dialog#callback(title='Increment' display-on='messageWithCallback')
      p Value is incremented when you click the close button

    mdl-dialog#multiple(title='Multiple Actions' display-on='multipleActionsMessage' full-width)
      p You can specify multiple Actions
      template(slot='actions')
        mdl-button.mdl-js-ripple-effect(primary colored) Increase
        mdl-button.mdl-js-ripple-effect(colored) Decrease
        mdl-button.mdl-js-ripple-effect Close
</template>

<script>
export default {
  data () {
    return {
      number: 0
    }
  },
  methods: {
    showInfo () {
      this.$broadcast('infoMessage')
    },
    showCancellable () {
      this.$broadcast('cancellableMessage')
    },
    showMessageWithCallback () {
      this.$broadcast('messageWithCallback', () => this.number++)
    },
    showMultipleActions () {
      this.$broadcast('multipleActionsMessage', () => {
        this.number++
        return false
      }, () => this.number--)
    }
  }
}
</script>

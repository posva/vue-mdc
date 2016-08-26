<template lang="jade">
div
  h1 Snackbar
  mdl-snackbar#snackbar(ref='snackbar')
  mdl-button(@click.native='sendMail') Send
</template>

<script lang="babel">
export default {
  data () {
    return {
    }
  },
  methods: {
    showSnackbar ({message, actionText}) {
      this.$refs.snackbar.showSnackbar({
        message: message,
        actionHandler: (event) => {
          // Stuff to do when the action is clicked
        },
        actionText: actionText,
        timeout: 1000
      })
    },
    sendMail () {
      this.showSnackbar({ message: 'Message Sent', actionText: 'Undo' })
    }
  }
}
</script>

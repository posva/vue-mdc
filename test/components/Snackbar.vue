<template lang="jade">
div
  h1 Snackbar
  mdl-snackbar#snackbar(display-on='sendMail')
  mdl-snackbar#source(display-on='sendMail', :event-source="bus")
  mdl-button(@click.native='sendMail') Send
</template>

<script lang="babel">
import Vue from 'vue'

export default {
  data () {
    return {
      bus: new Vue()
    }
  },
  methods: {
    sendMail () {
      this.$root.$emit('sendMail', {
        message: 'Message Sent',
        actionHandler: (event) => {
          // Stuff to do when the action is clicked
        },
        actionText: 'Undo',
        timeout: 1000
      })
    }
  }
}
</script>

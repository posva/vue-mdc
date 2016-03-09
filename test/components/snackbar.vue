<template lang="jade">
div
  h1 Snackbar
  mdl-snackbar#snackbar(display-on='mailSent')
  mdl-button(@click='sendMail') Send
</template>

<script>
import vmdl from '../../src/vue-mdl'

export default {
  data () {
    return {
    }
  },
  methods: {
    sendMail () {
      const that = this
      this.$broadcast('mailSent', {
        message: 'Message Sent',
        actionHandler: (event) => {
          // Stuff to do when the action is clicked
        },
        actionText: 'Undo',
        timeout: 1000
      })
    }
  },
  components: vmdl.components
}
</script>

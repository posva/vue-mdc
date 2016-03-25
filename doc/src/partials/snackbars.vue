<style lang="stylus">
  .mdl-snackbar__action
    color: wheat
</style>

<template lang="jade">
.section
  title-link Snackbars
  .section__content
    p Snackbars are containers used to notify a user of operation's status.
      | It displays at the bottom of the screen. A snackbar may contain an action
      | button to execute a command for the user. Actions should undo the
      | committed action or retry it if it failed for example. Actions
      | should not be to close the snackbar. By not providing an action,
      | the snackbar becomes a toast component.

    .flex.center.wrap
      mdl-snackbar(display-on='mailSent')
    .flex.center.wrap
      mdl-button(raised, colored, @click='$broadcast("mailSent", { message: "Message Sent" })') Show
    pre
      code.html
        p= '<mdl-snackbar display-on="mailSent"></mdl-snackbar>'
        p= '<mdl-button raised colored @click="$broadcast(\'mailSent\', { message: \'Message Sent\' })">Show</mdl-button>'

    p The object passed when broadcasting the event 
      code mailSent
      | , is the data passsed to the 
      a(target='_blank' href='http://www.getmdl.io/components/index.html#snackbar-section')
        code showSnackbar
        |  function
      | . For instance you can pass a callback for an action:
    .flex.center.wrap
      mdl-snackbar(display-on='colorChanged')
    .flex.center.wrap
      mdl-button(:style='buttonStyle', raised, @click='changeColor') Change color

    pre
      code.html
        p= '<mdl-snackbar display-on="colorChanged"></mdl-snackbar>'
        p= '<mdl-button raised :style="buttonStyle" @click="changeColor">Change color</mdl-button>'
      code.javascript.
        new Vue({
          data: {
            color: null
          },
          computed: {
            buttonStyle () {
              if (this.color) {
                return {
                  'background-color': this.color
                }
              } else {
                return {}
              }
            }
          },
          methods: {
            changeColor () {
              this.color = `#${Math.floor(Math.random() * 0xFFFFFF).toString(16)}`
              this.$broadcast('colorChanged', {
                message: 'Color changed',
                actionHandler: (event) => {
                  this.color = null
                },
                actionText: 'Undo',
                timeout: 2000
              })
            }
          }
        }

    p If you use multiple snackbars at the same time, they will overlap. Click on both button to
      | see an example. If you don't want this to happen use one single snackbar for all
      | your notifications
</template>

<script>
export default {
  data () {
    return {
      color: null
    }
  },
  computed: {
    buttonStyle () {
      if (this.color) {
        return {
          'background-color': this.color
        }
      } else {
        return {}
      }
    }
  },
  methods: {
    changeColor () {
      this.color = `#${Math.floor(Math.random() * 0xFFFFFF).toString(16)}`
      this.$broadcast('colorChanged', {
        message: 'Color changed',
        actionHandler: (event) => {
          this.color = null
        },
        actionText: 'Undo',
        timeout: 2000
      })
    }
  }
}
</script>

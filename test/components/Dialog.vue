<template lang="jade">
div
  h1 Dialogs
  br
  p Value is {{number}}
  #dialog
    mdl-button(fab, primary, v-on:click='$refs.info.open')
      i.material-icons info
    mdl-button(fab, primary, v-on:click='$refs.multiple.open')
      i.material-icons more

    div
      p Events
      ul
        li(v-for='event in events') {{ event }}

    mdl-dialog#info(v-ref:info v-on:close='closed' v-on:open='opened' title='Info message')
      p This is a modal example

    mdl-dialog#multiple(v-ref:multiple title='Multiple Actions' display-on='multipleActionsMessage' full-width)
      p You can specify multiple Actions
      template(slot='actions')
        mdl-button.mdl-js-ripple-effect(@click='number++' primary colored) Increase
        mdl-button.mdl-js-ripple-effect(@click='number--' colored) Decrease
        mdl-button.mdl-js-ripple-effect(@click='$refs.multiple.close') Close
</template>

<script lang="babel">
export default {
  data () {
    return {
      number: 0,
      events: []
    }
  },
  methods: {
    opened () {
      this.events.push('opened')
    },
    closed () {
      this.events.push('closed')
    }
  }
}
</script>

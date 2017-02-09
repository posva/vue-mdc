<template lang="jade">
div
  h1 Dialogs
  br
  p Value is {{number}}
  #dialog
    mdl-button(fab, primary, v-on:click.native="open('info')")
      i.material-icons info
    mdl-button(fab, primary, v-on:click.native="open('multiple')")
      i.material-icons more
    mdl-button(fab, primary, v-on:click.native="open('select')")
      i.material-icons language

    div
      p Events
      ul
        li(v-for='(event, index) in events' v-bind:key='index') {{ event }}

    mdl-dialog#info(ref='info' v-on:close='closed' v-on:open='opened' title='Info message')
      p This is a modal example

    mdl-dialog#multiple(ref='multiple' title='Multiple Actions' display-on='multipleActionsMessage' full-width)
      p You can specify multiple Actions
      template(slot='actions')
        mdl-button.mdl-js-ripple-effect(@click.native='number++' primary colored) Increase
        mdl-button.mdl-js-ripple-effect(@click.native='number--' colored) Decrease
        mdl-button.mdl-js-ripple-effect(@click.native="close('multiple')") Close
    mdl-dialog(ref='select' title='Language')
      mdl-select#langs(label='Language', :value.sync='lang', :options='langs')
</template>

<script lang="babel">
export default {
  data () {
    return {
      number: 0,
      events: [],
      lang: 'es',
      langs: [
        {
          name: 'Russian',
          value: 'ru'
        },
        {
          name: 'Spanish',
          value: 'es'
        },
        {
          name: 'French',
          value: 'fr'
        },
        {
          name: 'Chinese',
          value: 'cn'
        }
      ]
    }
  },
  methods: {
    opened () {
      this.events.push('opened')
    },
    closed () {
      this.events.push('closed')
    },
    open (ref) {
      this.$refs[ref].open()
    },
    close (ref) {
      this.$refs[ref].close()
    }
  }
}
</script>

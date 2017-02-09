<template>
  <div class="section">
    <title-link>Snackbars</title-link>
    <div class="section__content">
      <p>Snackbars are containers used to notify a user of operation's status. It displays at the bottom of the screen. A snackbar may contain an action button to execute a command for the user. Actions should undo the committed action or retry it if it failed for example. Actions should not be to close the snackbar. By not providing an action, the snackbar becomes a toast component.</p>
      <div class="flex center wrap">
        <mdl-snackbar display-on="mailSent"></mdl-snackbar>
      </div>
      <div class="flex center wrap">
        <mdl-button raised="raised" colored="colored" @click.native="$root.$emit('mailSent', { message: 'Message Sent' })">Show</mdl-button>
      </div><pre><code class="html"><p>&lt;mdl-snackbar display-on=&quot;mailSent&quot;&gt;&lt;/mdl-snackbar&gt;</p><p>&lt;mdl-button raised colored @click=&quot;$root.$emit('mailSent', { message: 'Message Sent' })&quot;&gt;Show&lt;/mdl-button&gt;</p></code></pre>
      <p>The object passed when broadcasting the event<code>mailSent</code>, is the data passsed to the<a target="_blank" href="https://www.getmdl.io/components/index.html#snackbar-section"><code>showSnackbar</code> function</a>. For instance you can pass a callback for an action:</p>
      <div class="flex center wrap">
        <mdl-snackbar display-on="colorChanged"></mdl-snackbar>
      </div>
      <div class="flex center wrap">
        <mdl-button :style="buttonStyle" raised="raised" @click.native="changeColor">Change color</mdl-button>
      </div>

      <pre>
        <code v-highlight class="html"><p>&lt;mdl-snackbar display-on=&quot;colorChanged&quot;&gt;&lt;/mdl-snackbar&gt;</p><p>&lt;mdl-button raised :style=&quot;buttonStyle&quot; @click=&quot;changeColor&quot;&gt;Change color&lt;/mdl-button&gt;</p></code>
        <code v-highlight class="javascript">new Vue({
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
      this.$root.$emit('colorChanged', {
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
      </code></pre>
      <p>If you use multiple snackbars at the same time, they will overlap. Click on both button to see an example. If you don't want this to happen use one single snackbar for all your notifications</p>
    </div>
  </div>
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
      this.$root.$emit('colorChanged', {
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

<style>
.mdl-snackbar__action {
  color: wheat;
}
</style>

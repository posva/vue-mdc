<template>
  <div class="section">
    <title-link>Dialogs</title-link>
    <div class="section__content">
      <p>The dialog component allows for verification of user actions, simple data input, and alerts to provide extra information to users. To display dialogs, use events.</p>
      <div>
        <mdl-dialog ref="infoMessage" title="Hi there">
          <p>Hello. This is an information message. You can click outside or in the close button to close it.</p>
        </mdl-dialog>
      </div>
      <div class="flex center wrap">
        <mdl-button fab="fab" primary="primary" @click.native="$refs.infoMessage.open"><i class="material-icons">power_settings_new</i></mdl-button>
      </div>

      <pre><code v-highlight class="html"><p>&lt;mdl-dialog ref="infoMessage" title=&quot;Hi there&quot;&gt;</p><p>  &lt;p&gt;Hello. This is an information message. You can click outside or in the close button to close it.&lt;/p&gt;</p><p>&lt;/mdl-dialog&gt;</p></code><code v-highlight class="javascript">// Inside the parent vm
this.$refs.infoMessage.open()
      </code></pre>
      <p>Sometimes the modal need to be appended to the dom so it gets in front of everything. In order to do that you you'll need a portal implementation but there's not one yet for Vue 2.</p>

      <pre><code v-highlight class="html"><p>&lt;div&gt;</p><p>  &lt;mdl-dialog ref="infoMessage" title=&quot;Hi there&quot;&gt;</p><p>    &lt;p&gt;Hello. This is an information message. You can click outside or in the close button to close it.&lt;/p&gt;</p><p>  &lt;/mdl-dialog&gt;</p><p>&lt;/div&gt;</p></code></pre>
      <p>The example above use this technique to prevent the menu from overlapping.</p>
      <p>The dialog component emits an&nbsp;<code>open</code> event when it opens as well as a&nbsp;<code>close</code> event when it closes by clicking the Close button. You can use those events to fire actions when the dialog is closed.</p>

      <pre><code v-highlight class="html"><p>&lt;mdl-dialog @close=&quot;closeCallback&quot; ref="infoMessage" title=&quot;Hi there&quot;&gt;</p><p>  &lt;p&gt;Hello. This is an information message. You can click outside or in the close button to close it.&lt;/p&gt;</p><p>&lt;/mdl-dialog&gt;</p></code><code v-highlight class="javascript">methods: {
  closeCallback () {
    // do something
  }
}
      </code></pre>
      <p>If you want to customise actions, use the&nbsp;<code>actions</code> slot:</p>
      <div>
        <mdl-dialog ref="multiple" full-width="full-width" title="Hi there">
          <p>Hello.</p>
          <p>Number is {{ number }}</p>
          <p>Increase the number or decrease without closing this modal</p><template slot="actions"><mdl-button primary="primary" @click.native="number++">Increase</mdl-button><mdl-button primary="primary" @click.native="number--">Decrease</mdl-button><mdl-button @click.native="$refs.multiple.close">Close</mdl-button></template></mdl-dialog>
      </div>
      <div class="flex center wrap">
        <mdl-button fab="fab" primary="primary" @click.native="$refs.multiple.open"><i class="material-icons">power_settings_new</i></mdl-button>
      </div>

      <pre><code v-highlight class="html"><p>&lt;mdl-dialog ref="multiple" full-width title=&quot;Hi there&quot;&gt;</p><p>  &lt;p&gt;Hello&lt;/p&gt;</p><p>  &lt;template slot=&quot;actions&quot;&gt;</p><p>    &lt;mdl-button primary @click.native=&quot;number++&quot;&gt;Increase&lt;/mdl-button&gt;</p><p>    &lt;mdl-button primary @click.native=&quot;number--&quot;&gt;Decrease&lt;/mdl-button&gt;</p><p>    &lt;mdl-button @click.native=&quot;$refs.multiple.close&quot;&gt;Close&lt;/mdl-button&gt;</p><p>  &lt;/template&gt;</p><p>&lt;/mdl-dialog&gt;</p></code></pre>
      <h5>Prop List</h5>
      <table class="mdl-data-table mdl-js-data-table">
        <thead>
          <tr>
            <th class="mdl-data-table__cell--non-numeric">Prop</th>
            <th class="mdl-data-table__cell--non-numeric">Description</th>
            <th class="mdl-data-table__cell--non-numeric">Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code> title</code></td>
            <td class="mdl-data-table__cell--non-numeric">Title of the dialog</td>
            <td class="mdl-data-table__cell--non-numeric">Optional</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code> full-width</code></td>
            <td class="mdl-data-table__cell--non-numeric">Make buttons full width by applying the<code> mdl-dialog__actions--full-width</code> modifier</td>
            <td class="mdl-data-table__cell--non-numeric">This prop doesn't need a value</td>
          </tr>
        </tbody>
      </table><br/></div>
  </div>
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

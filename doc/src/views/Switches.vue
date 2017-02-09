<template>
  <div class="section">
    <title-link>Switches</title-link>
    <div class="section__content">
      <p>Switches support the<router-link to="/ripple-effect"> ripple effect</router-link></p>
      <div class="flex start wrap">
        <mdl-switch v-model="checked">Switch</mdl-switch>
        <mdl-switch v-model="checked" class="mdl-js-ripple-effect">Ripple Effect</mdl-switch>
        <mdl-switch v-model="checked" disabled="disabled">Disabled</mdl-switch>
      </div>

      <pre><code v-highlight class="html"><p>&lt;mdl-switch v-model=&quot;checked&quot;&gt;Switch&lt;/mdl-switch&gt;</p><p>&lt;mdl-switch v-model=&quot;checked&quot; class=&quot;mdl-js-ripple-effect&quot;&gt;Ripple Effect&lt;/mdl-switch&gt;</p><p>&lt;mdl-switch v-model=&quot;checked&quot; disabled&gt;Disabled&lt;/mdl-switch&gt;</p></code></pre>
      <p>You can pass an<code>id</code> to the component to access through the form element</p>

      <pre><code v-highlight class="html"><p>&lt;mdl-switch id=&quot;Subscribe&quot; v-model=&quot;subscribe&quot;&gt;Subscribe&lt;/mdl-switch&gt;</p></code></pre>

      <p>Instead of using multiple booleans for a group of checkboxes, you can directly pass the same array to multiple checkboxes. If you do this you also need to specify the value of the toggle with the <code>val</code> prop</p>
      <div class="flex start wrap">
        <mdl-switch v-model="checks" val="one">One</mdl-switch>
        <mdl-switch v-model="checks" val="two">Two</mdl-switch>
        <mdl-switch v-model="checks" val="three">Three</mdl-switch>
        <mdl-switch v-model="checks" val="four">Four</mdl-switch>
        <mdl-switch v-model="checks" val="five">Five</mdl-switch>
        <p>Arrays content: {{ checks }}</p>
      </div>

      <pre><code v-highlight class="html"><p>&lt;mdl-switch v-model=&quot;checks&quot; val=&quot;one&quot;&gt;One&lt;/mdl-switch&gt;</p><p>&lt;mdl-switch v-model=&quot;checks&quot; val=&quot;two&quot;&gt;Two&lt;/mdl-switch&gt;</p><p>&lt;mdl-switch v-model=&quot;checks&quot; val=&quot;three&quot;&gt;Three&lt;/mdl-switch&gt;</p><p>&lt;mdl-switch v-model=&quot;checks&quot; val=&quot;four&quot;&gt;Four&lt;/mdl-switch&gt;</p><p>&lt;mdl-switch v-model=&quot;checks&quot; val=&quot;five&quot;&gt;Five&lt;/mdl-switch&gt;</p></code></pre>
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
            <td class="mdl-data-table__cell--non-numeric"><code>disabled</code></td>
            <td class="mdl-data-table__cell--non-numeric">Disables the switch. Adds the<code>is-disabled</code> class to the button</td>
            <td class="mdl-data-table__cell--non-numeric"></td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>checked</code></td>
            <td class="mdl-data-table__cell--non-numeric">Control whether the switch is checked or not</td>
            <td class="mdl-data-table__cell--non-numeric">You must use a two way binding. You can either use a boolean or an array</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>id</code></td>
            <td class="mdl-data-table__cell--non-numeric">Defines the id used to link the label and the input</td>
            <td class="mdl-data-table__cell--non-numeric"></td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>val</code></td>
            <td class="mdl-data-table__cell--non-numeric">Defines the value of the switch. Useful when passing an array to the<code>checked</code> prop</td>
            <td class="mdl-data-table__cell--non-numeric"></td>
          </tr>
        </tbody>
      </table><br/></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true,
      checks: ['one', 'four']
    }
  }
}
</script>

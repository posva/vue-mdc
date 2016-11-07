<template>
  <div class="section">
    <TitleLink>Checkboxes</TitleLink>
    <div class="section__content">
      <p>Checkboxes support the <router-link to="/ripple-effect">ripple effect</router-link>. You use the <code>v-model</code> directive to set the checkbox state</p>
      <div class="flex start wrap">
        <mdl-checkbox v-model="checked">Checkbox</mdl-checkbox>
        <mdl-checkbox class="mdl-js-ripple-effect" v-model="checked">Ripple Effect</mdl-checkbox>
        <mdl-checkbox v-model="checked" disabled="disabled">Disabled</mdl-checkbox>
      </div>

      <pre><code v-highlight class="html"><p>&lt;mdl-checkbox v-model=&quot;checked&quot;&gt;Checkbox&lt;/mdl-checkbox&gt;</p><p>&lt;mdl-checkbox v-model=&quot;checked&quot; class=&quot;mdl-js-ripple-effect&quot;&gt;Ripple Effect&lt;/mdl-checkbox&gt;</p><p>&lt;mdl-checkbox v-model=&quot;checked&quot; disabled&gt;Disabled&lt;/mdl-checkbox&gt;</p></code></pre>

      <p>You can pass an <code>id</code> to the component to access through the form element</p>

      <pre><code v-highlight class="html"><p>&lt;mdl-checkbox id=&quot;Subscribe&quot; v-model=&quot;subscribe&quot;&gt;Subscribe&lt;/mdl-checkbox&gt;</p></code></pre>

      <p>Instead of using multiple booleans for a group of checkboxes, you can directly pass the same array to multiple checkboxes. If you do this you also need to specify the <code>val</code> prop which is then passed as the <code>value</code> of the input.</p>

      <div class="flex start wrap">
        <mdl-checkbox v-model="checks" val="one">One</mdl-checkbox>
        <mdl-checkbox v-model="checks" val="two">Two</mdl-checkbox>
        <mdl-checkbox v-model="checks" val="three">Three</mdl-checkbox>
        <mdl-checkbox v-model="checks" val="four">Four</mdl-checkbox>
        <mdl-checkbox v-model="checks" val="five">Five</mdl-checkbox>
        <p>Arrays content: {{checks}}</p>
      </div>

      <pre><code v-highlight class="html"><p>&lt;mdl-checkbox v-model=&quot;checks&quot; val=&quot;one&quot;&gt;One&lt;/mdl-checkbox&gt;</p><p>&lt;mdl-checkbox v-model=&quot;checks&quot; val=&quot;two&quot;&gt;Two&lt;/mdl-checkbox&gt;</p><p>&lt;mdl-checkbox v-model=&quot;checks&quot; val=&quot;three&quot;&gt;Three&lt;/mdl-checkbox&gt;</p><p>&lt;mdl-checkbox v-model=&quot;checks&quot; val=&quot;four&quot;&gt;Four&lt;/mdl-checkbox&gt;</p><p>&lt;mdl-checkbox v-model=&quot;checks&quot; val=&quot;five&quot;&gt;Five&lt;/mdl-checkbox&gt;</p></code></pre>

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
            <td class="mdl-data-table__cell--non-numeric">Disables the checkbox. Adds the <code>is-disabled</code> class to the button</td>
            <td class="mdl-data-table__cell--non-numeric"></td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>checked</code></td>
            <td class="mdl-data-table__cell--non-numeric">Control whether the checkbox is checked or not</td>
            <td class="mdl-data-table__cell--non-numeric">You must use a two way binding. You can either use a boolean or an array</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>id</code></td>
            <td class="mdl-data-table__cell--non-numeric">Defines the id used to link the label and the input</td>
            <td class="mdl-data-table__cell--non-numeric"></td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>val</code></td>
            <td class="mdl-data-table__cell--non-numeric">Defines the value of the checkbox. Needed when passing an array to the <code>v-model</code> prop</td>
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

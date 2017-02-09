<template>
  <div class="section">
    <title-link>Icon Toggles</title-link>
    <div class="section__content">
      <p>The icon-toggle component works the same way as the
        <router-link to="/checkboxes"> checkbox component</router-link>. It also supports the
        <router-link to="/ripple-effect"> ripple effect</router-link>
      </p>
      <div class="flex start wrap">
        <mdl-icon-toggle v-model="bold" icon="format_bold"></mdl-icon-toggle>
        <mdl-icon-toggle v-model="italic" icon="format_italic" class="mdl-js-ripple-effect"></mdl-icon-toggle>
        <mdl-icon-toggle v-model="underline" icon="format_underlined" disabled="disabled"></mdl-icon-toggle>
      </div>

      <pre><code v-highlight class="html"><p>&lt;mdl-icon-toggle v-model=&quot;checked&quot;  icon=&quot;format_bold&quot;&gt;&lt;/mdl-icon-toggle&gt;</p><p>&lt;mdl-icon-toggle v-model=&quot;checked&quot; icon=&quot;format_italic&quot; class=&quot;mdl-js-ripple-effect&quot;&gt;&lt;/mdl-icon-toggle&gt;</p><p>&lt;mdl-icon-toggle v-model=&quot;checked&quot; icon=&quot;format_underlined&quot; disabled&gt;&lt;/mdl-icon-toggle&gt;</p></code></pre>

      <p>You can pass an<code>id</code> to the component to access through the form element</p><pre><code class="html"><p>&lt;mdl-icon-toggle id=&quot;Subscribe&quot; v-model=&quot;subscribe&quot;&gt;Subscribe&lt;/mdl-icon-toggle&gt;</p></code></pre>
      <p>Instead of using multiple booleans for a group of checkboxes, you can directly pass the same array to multiple checkboxes. If you do this you also need to specify the value of each checkbox through the <code>val</code> prop</p>
      <div class="flex start wrap">
        <mdl-icon-toggle v-model="styles" icon="format_bold" val="bold"></mdl-icon-toggle>
        <mdl-icon-toggle v-model="styles" icon="format_italic" val="italic"></mdl-icon-toggle>
        <mdl-icon-toggle v-model="styles" icon="format_underlined" val="underlined"></mdl-icon-toggle>
      </div>
      <div class="flex start wrap">
        <p>Arrays content: {{ styles }}</p>
      </div>

      <pre><code v-highlight class="html"><p>&lt;mdl-icon-toggle v-model=&quot;styles&quot; icon=&quot;format_bold&quot; val=&quot;bold&quot;&gt;&lt;/mdl-icon-toggle&gt;</p><p>&lt;mdl-icon-toggle v-model=&quot;styles&quot; icon=&quot;format_italic&quot; val=&quot;italic&quot;&gt;&lt;/mdl-icon-toggle&gt;</p><p>&lt;mdl-icon-toggle v-model=&quot;styles&quot; icon=&quot;format_underlined&quot; val=&quot;underlined&quot;&gt;&lt;/mdl-icon-toggle&gt;</p></code></pre>
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
            <td class="mdl-data-table__cell--non-numeric"><code>icon</code></td>
            <td class="mdl-data-table__cell--non-numeric">Set the toggle icon</td>
            <td class="mdl-data-table__cell--non-numeric">Required</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>disabled</code></td>
            <td class="mdl-data-table__cell--non-numeric">Disables the checkbox. Adds the<code>is-disabled</code> class to the button</td>
            <td class="mdl-data-table__cell--non-numeric"></td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>checked</code></td>
            <td class="mdl-data-table__cell--non-numeric">Control whether the icon toggle is checked or not</td>
            <td class="mdl-data-table__cell--non-numeric">You must use a two way binding. You can either use a boolean or an array</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>id</code></td>
            <td class="mdl-data-table__cell--non-numeric">Defines the id used to link the label and the input</td>
            <td class="mdl-data-table__cell--non-numeric"></td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>val</code></td>
            <td class="mdl-data-table__cell--non-numeric">Defines the value of the toggle. Useful when passing an array to the<code>checked</code> prop</td>
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
      bold: true,
      italic: false,
      underline: false,
      styles: []
    }
  }
}
</script>

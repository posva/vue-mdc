<template>
  <div class="section">
    <title-link>Tooltips</title-link>
    <div class="section__content">
      <p>Tooltips make it easy to display additional information based mouse hover</p>
      <p>They require a <code>target</code> prop to bind to the correct dom element</p>
      <div class="flex center wrap">
        <mdl-tooltip target="add-button">Add something!</mdl-tooltip>
        <mdl-button id="add-button" fab="fab" primary="primary"><i class="material-icons">add</i></mdl-button>
      </div>

      <pre><code v-highlight class="html"><p>&lt;mdl-tooltip target=&quot;add-button&quot;&gt;Add something!&lt;/mdl-tooltip&gt;</p><p>&lt;mdl-button id=&quot;add-button&quot; fab primary&gt;</p><p>  &lt;i class=&quot;material-icons&quot;&gt;add&lt;/i&gt;</p><p>&lt;/mdl-button&gt;</p></code></pre>

      <p>Make it larger with the <code>large</code> prop</p>
      <div class="flex center wrap">
        <mdl-tooltip large="large" target="send-button">Let it go!</mdl-tooltip>
        <mdl-button id="send-button" raised="raised" primary="primary"><i class="material-icons">send</i></mdl-button>
      </div>

      <pre><code v-highlight class="html"><p>&lt;mdl-tooltip target=&quot;send-button&quot; large&gt;Let it go!&lt;/mdl-tooltip&gt;</p><p>&lt;mdl-button id=&quot;send-button&quot; fab primary&gt;</p><p>  &lt;i class=&quot;material-icons&quot;&gt;send&lt;/i&gt;</p><p>&lt;/mdl-button&gt;</p></code></pre>

      <p>You can also add html inside the tooltip</p>
      <div class="flex center wrap">
        <mdl-tooltip large="large" target="mood-button">Here is some<strong> custom </strong><code>html</code><br/><i class="material-icons">mood</i></mdl-tooltip>
        <mdl-button id="mood-button" fab="fab" primary="primary"><i class="material-icons">mood</i></mdl-button>
      </div>

      <pre><code v-highlight class="html"><p>&lt;mdl-tooltip target=&quot;mood-button&quot;&gt;Add something!&lt;/mdl-tooltip&gt;</p><p>&lt;mdl-button id=&quot;mood-button&quot; fab primary&gt;</p><p>  Here is some &lt;strong&gt;custom&lt;/strong&gt; &lt;code&gt;html&lt;/code&gt;&lt;br/&gt;&lt;i class=&quot;material-icons&quot;&gt;mood&lt;/i&gt;</p><p>&lt;/mdl-button&gt;</p></code></pre>

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
            <td class="mdl-data-table__cell--non-numeric"><code>target</code></td>
            <td class="mdl-data-table__cell--non-numeric"><code>id</code> of another item. The tooltip is binded to the item with the specified <code>id</code></td>
            <td class="mdl-data-table__cell--non-numeric">This is required</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>large</code></td>
            <td class="mdl-data-table__cell--non-numeric">Makes the tooltip bigger</td>
            <td class="mdl-data-table__cell--non-numeric"></td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>left</code></td>
            <td class="mdl-data-table__cell--non-numeric">Positions the tooltip to the left</td>
            <td class="mdl-data-table__cell--non-numeric"></td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>right</code></td>
            <td class="mdl-data-table__cell--non-numeric">Positions the tooltip to the right</td>
            <td class="mdl-data-table__cell--non-numeric"></td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>top</code></td>
            <td class="mdl-data-table__cell--non-numeric">Positions the tooltip to the top</td>
            <td class="mdl-data-table__cell--non-numeric"></td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>bottom</code></td>
            <td class="mdl-data-table__cell--non-numeric">Positions the tooltip to the bottom</td>
            <td class="mdl-data-table__cell--non-numeric"></td>
          </tr>
        </tbody>
      </table>
      <br/>
    </div>
  </div>
</template>

<script>
export default {}
</script>

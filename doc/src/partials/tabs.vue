<template>
  <div class="section">
    <title-link>Tabs</title-link>
    <div class="section__content">

      <p>
        Tabs allow you to have different content blocks that share the same screen space in a mutually exclusive manner. Tabs are always presented in sets of two or more, and they make it easy to explore and switch among different views or functional aspects of an app, or to browse categorized data sets individually. Tabs serve as "headings" for their respective content; the active tab — the one whose content is currently displayed — is always visually distinguished from the others so the user knows which heading the current content belongs to
      </p>

      <div class="flex center wrap">
        <p>Selected tab: {{selected}}</p>
        <mdl-tabs :selected.sync="selected">
          <mdl-tab tab="Tab 1">
            <p>Content of Tab 1</p>
          </mdl-tab>
          <mdl-tab tab="Tab 2">
            <p>Content of Tab 2</p>
          </mdl-tab>
          <mdl-tab tab="Tab 3">
            <p>Content of Tab 3</p>
          </mdl-tab>
        </mdl-tabs>
      </div>

      <pre>
        <code class="html">
&lt;mdl-tabs :selected.sync=&quot;selected&quot;&gt;
  &lt;mdl-tab tab=&quot;Tab 1&quot;&gt;
    &lt;p&gt;Content of Tab 1&lt;/p&gt;
  &lt;/mdl-tab&gt;
  &lt;mdl-tab tab=&quot;Tab 2&quot;&gt;
    &lt;p&gt;Content of Tab 2&lt;/p&gt;
  &lt;/mdl-tab&gt;
  &lt;mdl-tab tab=&quot;Tab 3&quot;&gt;
    &lt;p&gt;Content of Tab 3&lt;/p&gt;
  &lt;/mdl-tab&gt;
&lt;/mdl-tabs&gt;
        </code>
      </pre>

      <p>
        The <code>tab</code> prop defines the text used inside the tab-link. This same text is used to find out which tab is selected.<strong> Therefore you cannot have multiple tabs with the same name if you are using the string syntax for <code>tab</code></strong>. If you need to handle tabs with duplicated names you have to use the object syntax below. It will also allow you to define the content of the selected value.
      </p>

      <div class="flex center wrap">
        <p>Selected tab: {{selectedCustom}}</p>
        <mdl-tabs :selected.sync="selectedCustom">
          <mdl-tab :tab="{ title: 'Title', id: 'tab-1' }">
            <p>Content of first Tab</p>
          </mdl-tab>
          <mdl-tab :tab="{ title: 'Title', id: 'tab-2' }">
            <p>This content is different from the first one</p>
          </mdl-tab>
          <mdl-tab :tab="{ title: 'Title', id: 'tab-3' }">
            <p>This content is different from the second one</p>
          </mdl-tab>
        </mdl-tabs>
      </div>

      <pre>
        <code class="html">
&lt;mdl-tabs :selected.sync=&quot;selected&quot;&gt;
  &lt;mdl-tab :tab=&quot;{ title: 'Title', id: 'tab-1' }&quot;&gt;
    &lt;p&gt;Content of first Tab&lt;/p&gt;
  &lt;/mdl-tab&gt;
  &lt;mdl-tab :tab=&quot;{ title: 'Title', id: 'tab-2' }&quot;&gt;
    &lt;p&gt;This content is different from the first one&lt;/p&gt;
  &lt;/mdl-tab&gt;
  &lt;mdl-tab :tab=&quot;{ title: 'Title', id: 'tab-3' }&quot;&gt;
    &lt;p&gt;This content is different from the second one&lt;/p&gt;
  &lt;/mdl-tab&gt;
&lt;/mdl-tabs&gt;
        </code>
      </pre>


      <h5>Prop List for <code>mdl-tabs</code></h5>
      <table class="mdl-data-table mdl-js-data-table">
        <thead>
          <tr>
            <th class="mdl-data-table__cell--non-numeric">Prop</th>
            <th class="mdl-data-table__cell--non-numeric">Description</th>
            <th class="mdl-data-table__cell--non-numeric">Remarks</th>
          </tr>

          <tr>
            <td class="mdl-data-table__cell--non-numeric mdl-data-table__cell--code">
              <code>selected</code>
            </td>
            <td class="mdl-data-table__cell--non-numeric">Defines the selected tab</td>
            <td class="mdl-data-table__cell--non-numeric">This must be passed with the <code>sync</code> modifier. It will contain the identifier of the tab which is, by default, its index</td>
          </tr>

          <tr>
            <td class="mdl-data-table__cell--non-numeric mdl-data-table__cell--code">
              <code>no-ripple-effect</code>
            </td>
            <td class="mdl-data-table__cell--non-numeric">Defines whether there should be or not a ripple effect in tabs links</td>
            <td class="mdl-data-table__cell--non-numeric"><code>true</code> by default</td>
          </tr>
        </thead>
      </table>
      <br/>

      <h5>Prop List for <code>mdl-tab</code></h5>
      <table class="mdl-data-table mdl-js-data-table">
        <thead>
          <tr>
            <th class="mdl-data-table__cell--non-numeric">Prop</th>
            <th class="mdl-data-table__cell--non-numeric">Description</th>
            <th class="mdl-data-table__cell--non-numeric">Remarks</th>
          </tr>

          <tr>
            <td class="mdl-data-table__cell--non-numeric mdl-data-table__cell--code">
              <code>tab</code>
            </td>
            <td class="mdl-data-table__cell--non-numeric">Defines the tab link text. It can also be an object to further control tabs.</td>
            <td class="mdl-data-table__cell--non-numeric"></td>
          </tr>
        </thead>
      </table>
      <br/>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: 'Tab 1',
      selectedCustom: 'tab-1'
    }
  }
}
</script>

<style>
.mdl-data-table__cell--code code {
  display: block;
}
</style>

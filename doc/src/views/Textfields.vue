<template>
  <div class="section">
    <title-link>Textfields</title-link>
    <div class="section__content">
      <p>The textfield component is highly customizable and allows you to use text inputs and textareas. Instead of using the <code>v-model</code> directive you have to pass a two way prop named <code>value</code>.</p>
      <div class="flex center wrap">
        <p>Hello {{name}}</p>
      </div>
      <div class="flex start wrap">
        <mdl-textfield label="Name" v-model="name" class="space"></mdl-textfield>
        <mdl-textfield floating-label="Name" v-model="name" class="space"></mdl-textfield>
      </div>

      <pre><code v-highlight class="html"><p>&lt;mdl-textfield label=&quot;Name&quot; v-model=&quot;name&quot;&gt;&lt;/mdl-textfield&gt;</p><p>&lt;mdl-textfield floating-label=&quot;Name&quot; v-model=&quot;name&quot;&gt;&lt;/mdl-textfield&gt;</p></code></pre>
      <p>Use the <code>textarea</code> prop to use a textarea instead of an input</p>
      <div class="flex start wrap">
        <div>
          <mdl-textfield floating-label="Textarea" textarea="textarea" rows="4" v-model="text"></mdl-textfield>
        </div>
        <div style="padding-left: 1rem">
          <pre>{{text}}</pre>
        </div>
      </div>

      <pre><code v-highlight class="html">&lt;mdl-textfield floating-label=&quot;Name&quot; textarea rows=&quot;4&quot;&gt;&lt;/mdl-textfield&gt;</code></pre>
      <p>You can dynamically bind the <code>floating-label</code> prop and use the <code>label</code> prop for the real label if you need to control whether the label can floats or not</p>

      <pre><code v-highlight class="html">&lt;mdl-textfield :floating-label=&quot;float&quot; label=&quot;Name&quot; textarea&gt;&lt;/mdl-textfield&gt;</code>
        <code v-highlight class="javascript">new Vue({
  el: '#app',
  data: {floating: false}
})
      </code></pre>
      <p>You can make the textfield expandable by using the <code>expandable</code> prop and setting and<code>id</code> on the element.</p>
      <div class="flex start wrap">
        <mdl-textfield id="demo-expandable-button" expandable="search"></mdl-textfield>
      </div>
      <pre><code v-highlight class="html">&lt;mdl-textfield id=&quot;demo-expandable-button&quot; expandable=&quot;search&quot;&gt;&lt;/mdl-textfield&gt;</code></pre>
      <!-- h5 Playground-->
      <!-- .flex.start.wrap-->
      <!--   mdl-textfield(:floating-label='float', :label='label', :textarea='textarea', :rows='rows')-->
      <!-- .flex.start.wrap-->
      <!--   mdl-checkbox.reset-width.space(:checked.sync='float') Floating label-->
      <!--   mdl-checkbox.reset-width.space(:checked.sync='textarea') Textarea-->
      <!-- .flex.start.wrap-->
      <!--   p Rows:-->
      <!--   mdl-slider.reset-width.space(:value.sync='rows', min='1', max='20')-->
      <!-- .flex.start.wrap-->
      <!--   mdl-textfield.space(:value.sync='label', floating-label='Label')-->
      <!-- p Result:-->
      <!-- pre-->
      <!--   code.html(v-hljs='playgroundHtml')-->
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
            <td class="mdl-data-table__cell--non-numeric"><code>value</code></td>
            <td class="mdl-data-table__cell--non-numeric">Defines a value for the textfield</td>
            <td class="mdl-data-table__cell--non-numeric">You should use the <code>v-model</code> directive instead of directly binding this prop</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>label</code></td>
            <td class="mdl-data-table__cell--non-numeric">Defines the label used on the the textfield</td>
            <td class="mdl-data-table__cell--non-numeric">You don't need this if you use <code>floating-label</code></td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>floating-label</code></td>
            <td class="mdl-data-table__cell--non-numeric">Defines whether the label should float or not. If the given value is a String, you don't need to provide a <code>label</code> prop</td>
            <td class="mdl-data-table__cell--non-numeric"></td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>textarea</code></td>
            <td class="mdl-data-table__cell--non-numeric">Makes the textfield a textarea instead of an input</td>
            <td class="mdl-data-table__cell--non-numeric"></td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>rows</code></td>
            <td class="mdl-data-table__cell--non-numeric">Controls the number of rows used in the textarea</td>
            <td class="mdl-data-table__cell--non-numeric">Needs the <code>textarea</code> prop</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>pattern</code></td>
            <td class="mdl-data-table__cell--non-numeric">Input validation using a Regex</td>
            <td class="mdl-data-table__cell--non-numeric">Only works on non-textareas</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>error</code></td>
            <td class="mdl-data-table__cell--non-numeric">Defines the error displayed when the input text doesn't match the given pattern</td>
            <td class="mdl-data-table__cell--non-numeric">Needs the <code>pattern</code> prop</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>expandable</code></td>
            <td class="mdl-data-table__cell--non-numeric">Makes the textfield look like a button that expands. You need to pass a material icon to this prop</td>
            <td class="mdl-data-table__cell--non-numeric">Needs to have an id set</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>type</code></td>
            <td class="mdl-data-table__cell--non-numeric">Defines the type of the input</td>
            <td class="mdl-data-table__cell--non-numeric">Defaults to text. Only works on non-textarea</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>disabled</code></td>
            <td class="mdl-data-table__cell--non-numeric">Disables the input</td>
            <td class="mdl-data-table__cell--non-numeric">Add it without any value or bind it to a Boolean</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>readonly</code></td>
            <td class="mdl-data-table__cell--non-numeric">Makes the input readonly</td>
            <td class="mdl-data-table__cell--non-numeric">Add it without any value or bind it to a Boolean</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>maxlength</code></td>
            <td class="mdl-data-table__cell--non-numeric">Defines the maxlength of the input or textarea</td>
            <td class="mdl-data-table__cell--non-numeric">This uses html attribute maxlength</td>
          </tr>
        </tbody>
      </table>

      <br/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Ed',
      label: 'I am a label',
      float: true,
      textarea: false,
      text: 'You can have\nmultiline',
      rows: 3
    }
  },
  computed: {
    playgroundHtml () {
      return '<mdl-textfield' +
      (this.float ? ` floating-label="${this.label}"` : ` label="${this.label}"`) +
      '</mdl-textfield>'
    }
  }
}
</script>

<style>
.wide {
  width: 80%;
  max-width: 500px;
}
</style>

<template>
  <div class="section">
    <title-link>Radio Buttons</title-link>
    <div class="section__content">
      <p>The radio button supports the <router-link to="/ripple-effect">ripple effect</router-link></p>
      <div class="flex start wrap">
        <mdl-radio v-model="checked" val="option 1">Option 1</mdl-radio>
      </div>
      <div class="flex start wrap">
        <mdl-radio v-model="checked" val="option 2" class="mdl-js-ripple-effect">Option 2</mdl-radio>
      </div>
      <div class="flex start wrap">
        <mdl-radio v-model="checked" val="option 3">Option 3</mdl-radio>
      </div>
      <div class="flex start wrap">
        <mdl-radio v-model="checked" disabled="disabled" val="option 4">Option 4</mdl-radio>
      </div>
      <p>Option selected: {{checked}}</p>

      <pre><code v-highlight class="html"><p>&lt;mdl-radio v-model=&quot;check&quot; val=&quot;option 1&quot;&gt;Option 1&lt;/mdl-radio&gt;</p><p>&lt;mdl-radio v-model=&quot;check&quot; class=&quot;mdl-js-ripple-effect&quot; val=&quot;option 2&quot;&gt;Option 2&lt;/mdl-radio&gt;</p><p>&lt;mdl-radio v-model=&quot;check&quot; val=&quot;option 3&quot;&gt;Option 3&lt;/mdl-radio&gt;</p><p>&lt;mdl-radio v-model=&quot;check&quot; val=&quot;option 4&quot; disabled&gt;Option 4&lt;/mdl-radio&gt;</p></code></pre>
      <p>You can pass an <code>id</code> and a <code>name</code> to the component to access through the form element</p>

      <pre><code v-highlight class="html"><p>&lt;mdl-radio name=&quot;subscription-pro&quot; id=&quot;subscription-pro&quot; v-model=&quot;subscription&quot; val=&quot;pro&quot;&gt;Pro Subscription&lt;/mdl-radio&gt;</p></code></pre>
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
            <td class="mdl-data-table__cell--non-numeric">Disables the radio button. Adds the<code>is-disabled</code> class to the button</td>
            <td class="mdl-data-table__cell--non-numeric"></td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>checked</code></td>
            <td class="mdl-data-table__cell--non-numeric">Variable to assign when the radio button is checked</td>
            <td class="mdl-data-table__cell--non-numeric">You must use a two way binding</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>name</code></td>
            <td class="mdl-data-table__cell--non-numeric">Defines the name used on the input element</td>
            <td class="mdl-data-table__cell--non-numeric"></td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>id</code></td>
            <td class="mdl-data-table__cell--non-numeric">Defines the id used to link the label and the input</td>
            <td class="mdl-data-table__cell--non-numeric"></td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>val</code></td>
            <td class="mdl-data-table__cell--non-numeric">Defines the value of the radio button</td>
            <td class="mdl-data-table__cell--non-numeric">This prop is required</td>
          </tr>
        </tbody>
      </table><br/></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: 'option 2'
    }
  }
}
</script>

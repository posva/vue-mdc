<template>
  <div class="section">
    <title-link>Sliders</title-link>
    <div class="section__content">
      <p>Sliders allows you to display a fancier<code> &lt;input type=&quot;range&quot;&gt;</code></p>
      <div class="flex start wrap">
        <mdl-textfield v-model="amount" floating-label="floating-label" label="Amount"></mdl-textfield>
      </div>
      <div class="flex center wrap">
        <mdl-slider v-model="amount" min="0" max="100"></mdl-slider>
        <mdl-slider v-model="amount" min="0" max="100" disabled="disabled"></mdl-slider>
      </div>

      <pre><code v-highlight class="html"><p>&lt;mdl-slider v-model=&quot;amount&quot; min=&quot;0&quot; max=&quot;100&quot;&gt;&lt;/mdl-slider&gt;</p><p>&lt;mdl-slider v-model=&quot;amount&quot; min=&quot;0&quot; max=&quot;100&quot; disabled&gt;&lt;/mdl-slider&gt;</p></code></pre>
      <p>You can set the step to limit the available values</p>
      <div class="flex start wrap">
        <mdl-textfield v-model="amountStep" floating-label="floating-label" label="Amount"></mdl-textfield>
        <mdl-textfield v-model="step" floating-label="floating-label" label="Step"></mdl-textfield>
      </div>
      <div class="flex center wrap">
        <mdl-slider v-model="amountStep" :step="step" min="0" max="100"></mdl-slider>
      </div>

      <pre><code v-highlight class="html"><p>&lt;mdl-slider v-model=&quot;amount&quot; min=&quot;0&quot; max=&quot;100&quot;&gt;&lt;/mdl-slider&gt;</p><p>&lt;mdl-slider v-model=&quot;amount&quot; min=&quot;0&quot; max=&quot;100&quot; disabled&gt;&lt;/mdl-slider&gt;</p></code></pre>
      <p>When changing those props externally (by not using the slider), the slider will be visually updated to match the new value. However min, max and step constraints will not be applied.</p>
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
            <td class="mdl-data-table__cell--non-numeric">Disables the slider</td>
            <td class="mdl-data-table__cell--non-numeric"></td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>value</code></td>
            <td class="mdl-data-table__cell--non-numeric">Variable affected to the slider</td>
            <td class="mdl-data-table__cell--non-numeric">This is required</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>min</code></td>
            <td class="mdl-data-table__cell--non-numeric">Minimum value for the slider</td>
            <td class="mdl-data-table__cell--non-numeric">This is required</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>max</code></td>
            <td class="mdl-data-table__cell--non-numeric">Maximum value for the slider</td>
            <td class="mdl-data-table__cell--non-numeric">This is required</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>step</code></td>
            <td class="mdl-data-table__cell--non-numeric">Step used to increase or decrease the value</td>
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
      amount: 30,
      amountStep: 20,
      step: 5
    }
  }
}
</script>

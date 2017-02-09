<template>
<div class="section">
  <title-link>Progress Bars</title-link>
  <div class="section__content">
    <p>Progress bar allows you to easily display progress</p>
    <div class="flex start wrap">
      <mdl-textfield v-model="progress" floating-label="floating-label" label="Progress"></mdl-textfield>
    </div>
    <div class="flex center wrap">
      <mdl-progress :progress="progress"></mdl-progress>
    </div><br/>
    <div class="flex center wrap">
      <mdl-progress indeterminate="indeterminate"></mdl-progress>
    </div>

    <pre><code v-highlight class="html"><p>&lt;mdl-progress :progress=&quot;progress&quot;&gt;&lt;/mdl-progress&gt;</p><p>&lt;mdl-progress indeterminate&gt;&lt;/mdl-progress&gt;</p></code></pre>
    <p>You can make it bufferize by using the <code>buffer</code> prop</p>
    <p><em>Note:</em> The effect is broken in firefox because I'm manually overriding the colors</p>
    <div class="flex start wrap">
      <mdl-textfield v-model="progress" floating-label="floating-label" label="Progress"></mdl-textfield>
      <mdl-textfield v-model="buffer" floating-label="floating-label" label="Buffer"></mdl-textfield>
    </div>
    <div class="flex center wrap">
      <mdl-progress :progress="progress" :buffer="buffer"></mdl-progress>
    </div>

    <pre><code v-highlight class="html"><p>&lt;mdl-progress :progress=&quot;progress&quot; :buffer=&quot;buffer&quot;&gt;&lt;/mdl-progress&gt;</p></code></pre>
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
          <td class="mdl-data-table__cell--non-numeric"><code>progress</code></td>
          <td class="mdl-data-table__cell--non-numeric">Control the progress amount</td>
          <td class="mdl-data-table__cell--non-numeric"></td>
        </tr>
        <tr>
          <td class="mdl-data-table__cell--non-numeric"><code>buffer</code></td>
          <td class="mdl-data-table__cell--non-numeric">Control the buffer amount</td>
          <td class="mdl-data-table__cell--non-numeric">The effect applies to the rest of the progressbar. A buffer value of 80 creates an effect on the remaining 20% of the progressbar</td>
        </tr>
        <tr>
          <td class="mdl-data-table__cell--non-numeric"><code>indeterminate</code></td>
          <td class="mdl-data-table__cell--non-numeric">Applies an indeterminate effect on the progressbar</td>
          <td class="mdl-data-table__cell--non-numeric">This overrides buffer and progress effect</td>
        </tr>
      </tbody>
    </table><br/></div>
</div>
</template>

<script>
export default {
  data () {
    return {
      progress: 30,
      buffer: 60
    }
  }
}
</script>

<style>
.mdl-progress > .bufferbar,
.mdl-progress:not(.mdl-progress__indeterminate):not(.mdl-progress__indeterminate) > .auxbar {
  background-image: initial;
  background-color: #c2d6d4;
}
</style>

<template>
  <div class="section">
    <title-link>Spinners</title-link>
    <div class="section__content">
      <p>Spinners allows you to inform the user that you're waiting for some responses</p>
      <div class="flex center wrap">
        <mdl-spinner class="space"></mdl-spinner>
        <mdl-spinner single-color="single-color" class="space"></mdl-spinner>
      </div>

      <pre><code v-highlight class="html"><p>&lt;mdl-spinner&gt;&lt;/mdl-spinner&gt;</p><p>&lt;mdl-spinner single-color&gt;&lt;/mdl-spinner&gt;</p></code></pre>

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
            <td class="mdl-data-table__cell--non-numeric"><code> single-color</code></td>
            <td class="mdl-data-table__cell--non-numeric">Applies a single color effect</td>
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
      active: true
    }
  }
}
</script>

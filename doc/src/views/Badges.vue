<template>
  <div class="section">
    <title-link>Badges</title-link>
    <div class="section__content">
      <p>Badges let you add onscreen notifications. They are made to be used on <code>i</code>, <code>span</code> and <code>a</code> elements</p>
      <div class="flex start wrap">
        <mdl-badge :badge="value">
          <span>Inbox</span>
        </mdl-badge>
        <mdl-badge :badge="value" no-background>
          <span>Inbox</span>
        </mdl-badge>
        <mdl-badge :badge="text" overlap>
          <i class="material-icons">account_box</i>
        </mdl-badge>
      </div>
      <div class="flex start wrap">
        <mdl-textfield v-model="value" label="Badge Number" floating-label="floating-label"></mdl-textfield>
        <mdl-textfield v-model="text" label="Badge Text" floating-label="floating-label"></mdl-textfield>
      </div>
      <p>Pass the text you want to the directive:</p>
      <pre><code v-highlight class="html">
&lt;mdl-badge :badge=&quot;value&quot;&gt;
  &lt;span&gt;Inbox&lt;/span&gt;
&lt;/mdl-badge&gt;
&lt;mdl-badge :badge=&quot;value&quot; no-background&gt;
  &lt;span&gt;Inbox&lt;/span&gt;
&lt;/mdl-badge&gt;
&lt;mdl-badge :badge=&quot;text&quot; overlap&gt;
  &lt;i class=&quot;material-icons&quot;&gt;account_box&lt;/i&gt;
&lt;/mdl-badge&gt;
      </code></pre>
      <p>You'll need to add this css to make the <code>overlap</code> modifier work in mdl lower than 1.0.7</p>

      <pre><code v-highlight class="css">.mdl-badge.mdl-badge--overlap {
  margin-right: 10px;
}
.mdl-badge.mdl-badge--overlap:after {
  right: -10px;
}
      </code></pre>
      <p>You can hide the badge using the <code>hide</code> prop. Badges are automatically hidden if the badge is an empty string or a 0 (must be of type Number)</p>
      <div>
        <mdl-badge :badge="num" :hide="zero">
          <span>Inbox</span>
        </mdl-badge>
        <mdl-badge :badge="num" :hide="hide">
          <span>Inbox</span>
        </mdl-badge>
      </div>
      <div class="flex start wrap">
        <mdl-slider min="0" max="15" v-model="num"></mdl-slider>
        <mdl-checkbox v-model="hide">Hide</mdl-checkbox>
      </div>

      <pre>
        <code v-highlight class="html">
&lt;mdl-badge :badge=&quot;num&quot; :hide=&quot;zero&quot;&gt;
  &lt;span&gt;Inbox&lt;/span&gt;
&lt;/mdl-badge&gt;
&lt;mdl-badge :badge=&quot;num&quot; :hide=&quot;hide&quot;&gt;
  &lt;span&gt;Inbox&lt;/span&gt;
&lt;/mdl-badge&gt;
        </code>
        <code v-highlight class="javascript">
new Vue({
  data: {
    num: 3,
    hide: true
  },
  computed: {
    zero: function() {
      return parseInt(this.num, 10) &lt;= 0
    }
  }
})
        </code>
      </pre>
      <table class="mdl-data-table mdl-js-data-table">
        <thead>
          <tr>
            <th class="mdl-data-table__cell--non-numeric">Props</th>
            <th class="mdl-data-table__cell--non-numeric">Description</th>
            <th class="mdl-data-table__cell--non-numeric">Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>badge</code></td>
            <td class="mdl-data-table__cell--non-numeric">Text to put inside of the badge</td>
            <td class="mdl-data-table__cell--non-numeric"></td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>no-background</code></td>
            <td class="mdl-data-table__cell--non-numeric">Applies open-circle effect to badge by adding the <code>mdl-badge--no-background</code> class</td>
            <td class="mdl-data-table__cell--non-numeric">It actually switches primary and accent colorls. So you will have to add some css to make the desired open-circle effect</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>overlap</code></td>
            <td class="mdl-data-table__cell--non-numeric">Make the badge overlap with its container by adding the <code>mdl-badge--overlap</code> class</td>
            <td class="mdl-data-table__cell--non-numeric">mdl >= 1.0.6</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>hide</code></td>
            <td class="mdl-data-table__cell--non-numeric">Hides the badge</td>
            <td class="mdl-data-table__cell--non-numeric">Can be bound to a computed property so the value is hidden if some conditions are met.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 2,
      num: 3,
      text: '★',
      hide: false
    }
  },
  computed: {
    zero () {
      return parseInt(this.num, 10) <= 0
    }
  }
}
</script>

<style lang="stylus">
overlap-margin = 10px

i.material-icons.mdl-badge {
  font-size: 32px;
}
.mdl-badge.mdl-badge--overlap {
  margin-right: overlap-margin;

  &:after {
    right: -(overlap-margin);
  }
}
</style>

<template>
<div class="section">
  <TitleLink>Buttons</TitleLink>
  <div class="section__content">

    <p>The button component allows to easily toggle classes. It supports the <router-link to="/ripple-effect"><code>ripple-effect</code></router-link></p>

    <div class="flex start wrap">
      <mdl-button class="space">Button</mdl-button>
      <mdl-button class="space mdl-js-ripple-effect">Ripple Effect</mdl-button>
      <mdl-button class="space" disabled="disabled">Disabled</mdl-button>
      <mdl-button class="space" icon="icon"><i class="material-icons">star</i></mdl-button>
    </div>

    <pre><code v-highlight class="html"><p>&lt;mdl-button&gt;Button&lt;/mdl-button&gt;</p><p>&lt;mdl-button class="mdl-js-ripple-effect"&gt;Ripple Effect&lt;/mdl-button&gt;</p><p>&lt;mdl-button disabled&gt;Disabled&lt;/mdl-button&gt;</p><p>&lt;mdl-button icon&gt;</p><p>  &lt;i class=&quot;material-icons&quot;&gt;star&lt;/i&gt;</p><p>&lt;/mdl-button&gt;</p></code></pre>

    <h4>Playground</h4>
    <div class="flex start wrap">
      <mdl-button :colored="colored"
                  :raised="raised"
                  :fab="fab"
                  :mini-fab="miniFab"
                  :primary="primary"
                  :accent="accent"
                  :icon="icon"
                  :disabled="disabled">
        <i class="material-icons" v-if="iconText">{{ iconText }}</i>
        <span v-else="v-else">{{text}}</span>
      </mdl-button>
    </div>

    <div class="flex center wrap">
      <mdl-checkbox class="reset-width space" v-model="colored">Colored</mdl-checkbox>
      <mdl-checkbox class="reset-width space" v-model="raised">Raised</mdl-checkbox>
      <mdl-checkbox class="reset-width space" v-model="disabled">Disabled</mdl-checkbox>
      <mdl-checkbox class="reset-width space" v-model="icon">Icon</mdl-checkbox>
      <mdl-checkbox class="reset-width space" v-model="accent">Accent</mdl-checkbox>
      <mdl-checkbox class="reset-width space" v-model="primary">Primary</mdl-checkbox>
      <mdl-checkbox class="reset-width space" v-model="miniFab">Mini Fab</mdl-checkbox>
      <mdl-checkbox class="reset-width space" v-model="fab">Fab</mdl-checkbox>
    </div>

    <div class="flex start wrap">
      <mdl-textfield class="space" v-model="text" label="Text" floating-label="floating-label"></mdl-textfield>
      <mdl-textfield class="space" v-model="iconText" label="Icon" floating-label="floating-label"></mdl-textfield>
    </div>

    <p>Result:</p>
    <pre><code v-highlight="playgroundHtml" class="html">{{ playgroundHtml }}</code></pre>

    <h5>Link buttons</h5>

    <p>Sometimes you might want to display a link as a button. In order to do this,</p> you can use the <code>mdl-anchor-button</code> element. It works exactly as the button does but uses an <code>a</code> html link instead of a <code>button</code>.

    <div class="flex start wrap">
      <mdl-anchor-button href="http://vuejs.org/api" target="_blank">Open Vuejs doc</mdl-anchor-button>
    </div>

    <pre><code v-highlight class="html"><p>&lt;mdl-anchor-button href=&quot;http://vuejs.org/api&quot; target=&quot;_blank&quot;&gt;Open Vuejs doc&lt;/mdl-anchor-button&gt;</p></code></pre>

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
          <td class="mdl-data-table__cell--non-numeric">Disables the button. Adds the <code>is-disabled</code> class to the button</td>
          <td class="mdl-data-table__cell--non-numeric"></td>
        </tr>
        <tr>
          <td class="mdl-data-table__cell--non-numeric"><code>raised</code></td>
          <td class="mdl-data-table__cell--non-numeric">Applies<i> raised</i> display effect with <code>mdl-button--raised</code> class</td>
          <td class="mdl-data-table__cell--non-numeric">Mutually exclusive with fab, mini-fab, and icon</td>
        </tr>
        <tr>
          <td class="mdl-data-table__cell--non-numeric"><code>fab</code></td>
          <td class="mdl-data-table__cell--non-numeric">Applies <i>fab</i> (circular) display effect with <code>mdl-button--fab</code> class</td>
          <td class="mdl-data-table__cell--non-numeric">Mutually exclusive with raised, mini-fab, and icon</td>
        </tr>
        <tr>
          <td class="mdl-data-table__cell--non-numeric"><code>mini-fab</code></td>
          <td class="mdl-data-table__cell--non-numeric">Applies <i>mini-fab</i> (small fab circular) display effect with <code>mdl-button--mini-fab</code> class</td>
          <td class="mdl-data-table__cell--non-numeric">Mutually exclusive with raised, fab, and icon</td>
        </tr>
        <tr>
          <td class="mdl-data-table__cell--non-numeric"><code>icon</code></td>
          <td class="mdl-data-table__cell--non-numeric">Applies <i>icon</i> (small plain circular) display effect with <code>mdl-button--icon</code> class</td>
          <td class="mdl-data-table__cell--non-numeric">Mutually exclusive with raised, fab and mini-fab</td>
        </tr>
        <tr>
          <td class="mdl-data-table__cell--non-numeric"><code>colored</code></td>
          <td class="mdl-data-table__cell--non-numeric">Applies <i>colored</i> display effect with <code>mdl-button--colored</code> class</td>
          <td class="mdl-data-table__cell--non-numeric"></td>
        </tr>
        <tr>
          <td class="mdl-data-table__cell--non-numeric"><code>primary</code></td>
          <td class="mdl-data-table__cell--non-numeric">Applies <i>primary</i> color display effect with <code>mdl-button--primary</code> class</td>
          <td class="mdl-data-table__cell--non-numeric"></td>
        </tr>
        <tr>
          <td class="mdl-data-table__cell--non-numeric"><code>accent</code></td>
          <td class="mdl-data-table__cell--non-numeric">Applies <i>accent</i> color display effect with <code>mdl-button--accent</code> class</td>
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
      iconText: '',
      text: 'Play with me!',
      disabled: false,
      icon: false,
      accent: false,
      primary: false,
      miniFab: false,
      fab: false,
      raised: false,
      colored: false
    }
  },
  computed: {
    playgroundHtml () {
      return '<mdl-button' +
      (this.colored ? ' colored' : '') +
      (this.icon ? ' icon' : '') +
      (this.disabled ? ' disabled' : '') +
      (this.accent ? ' accent' : '') +
      (this.primary ? ' primary' : '') +
      (this.miniFab ? ' min-fab' : '') +
      (this.fab ? ' fab' : '') +
      (this.raised ? ' raised' : '') +
      '>' +
      (this.iconText ? `<i class="material-icons">${this.iconText}</i>` : this.text) +
      '</mdl-button>'
    }
  }
}
</script>

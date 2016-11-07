<template>
  <div class="section">
    <TitleLink>Cards</TitleLink>
    <div class="section__content">
      <p>Cards are self-contained pieces of paper with data. Vue MDL triesto make them easier to use in common cases. If it doesn't fit your needs, you can always overwrite the content using slots. Cards are not finished yet but you can use can always so using slots may be necessary</p>

      <div class="flex start wrap">
        <mdl-card class="reset-height white-space" v-bind:title="cardTitle" :supporting-text="supportingText" actions="actions" actions-text="View updates"></mdl-card>
      </div>

      <div class="flex start wrap">
        <mdl-textfield v-model="cardTitle" floating-label="Card Title"></mdl-textfield>
        <mdl-textfield textarea="textarea" v-model="supportingText" floating-label="Supporting Text"></mdl-textfield>
      </div>

      <p>Pass the text you want to the directive:</p>

      <pre><code v-highlight class="html">
&lt;mdl-card :title=&quot;cardTitle&quot; :supporting-text=&quot;supportingText&quot; actions=&quot;actions&quot; actions-text=&quot;View updates&quot;&gt;&lt;/mdl-card&gt;
      </code></pre>

      <div class="flex start wrap">
        <mdl-card class="demo-card-welcome" title="Welcome" :supporting-text="supportingText" actions="actions" actions-text="Get started" menu="menu"></mdl-card>
      </div>

      <br />

      <pre><code v-highlight class="css">
.demo-card-welcome.mdl-card {
  width: 512px;
}
.demo-card-welcome .mdl-card__title,
.demo-card-welcome .mdl-card__menu {
  color: white;
}
.demo-card-welcome .mdl-card__title {
  height: 176px;
  background: url('http://www.getmdl.io/assets/demos/welcome_card.jpg') center / cover;
}
      </code>
      <code v-highlight class="html">
&lt;mdl-card class=&quot;demo-card-welcome&quot; title=&quot;Welcome&quot; :supporting-text=&quot;supportingText&quot; actions=&quot;actions&quot; actions-text=&quot;Get started&quot;&gt;&lt;/mdl-card&gt;
      </code></pre>

      <p>You can replace any of the existing content by using slots. Available slots are <code>title</code>, <code>subtitle</code>, <code>supporting-text</code>, <code>media</code>, <code>actions</code> and <code>menu</code></p>

      <div class="flex start wrap">
        <mdl-card class="demo-card-image">
          <div class="mdl-card__title mdl-card--expand" slot="title"></div>
          <div class="mdl-card__actions" slot="actions"><span class="demo-card-image__filename">Image.jpg</span></div>
        </mdl-card>
      </div>

      <br />

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
            <td class="mdl-data-table__cell--non-numeric"><code>title</code></td>
            <td class="mdl-data-table__cell--non-numeric">Defines card's title</td>
            <td class="mdl-data-table__cell--non-numeric"></td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>supporting-text</code></td>
            <td class="mdl-data-table__cell--non-numeric">Defines card's supporting text</td>
            <td class="mdl-data-table__cell--non-numeric"></td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>actions</code></td>
            <td class="mdl-data-table__cell--non-numeric">Makes the actions section visible</td>
            <td class="mdl-data-table__cell--non-numeric">You must set it to a non empty string in order to make it work</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric"><code>actions-text</code></td>
            <td class="mdl-data-table__cell--non-numeric">Defines the actions section button's text</td>
            <td class="mdl-data-table__cell--non-numeric"></td>
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
      cardTitle: 'Update',
      supportingText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.'
    }
  }
}
</script>

<style lang="stylus" scoped>
.reset-height
  min-height: initial
.white-space
  white-space: pre-line
</style>

<style lang="stylus">
.demo-card-welcome.mdl-card
  width: 512px
  .mdl-card__title
    color: white
    height: 176px
    background: url('http://www.getmdl.io/assets/demos/welcome_card.jpg') center / cover
  .mdl-card__menu
    color: white

.demo-card-image.mdl-card
  width: 256px
  height: 256px
  background: url('http://www.getmdl.io/assets/demos/image_card.jpg') center / cover
  .mdl-card__actions
    height: 52px
    padding: 16px
    background: rgba(0, 0, 0, 0.2)
  .demo-card-image__filename
    color: #fff
    font-size: 14px
    font-weight: 500
</style>

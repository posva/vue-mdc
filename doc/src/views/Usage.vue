<template>
  <div class="section">
    <TitleLink>Usage</TitleLink>
    <div class="section__content">
      <p>If you use a module bundler like <a target="_blank" href="https://webpack.github.io/"> webpack</a> or <a target="_blank" href="http://browserify.org/">Browserify</a> with babel (es6 support), you can import it and use it as a plugin:</p>
      <pre><code class="javascript" v-highlight>
import VueMdl from 'vue-mdl'
Vue.use(VueMdl)
      </code></pre>

      <p>If you don't use es6, you'll have to use it this way:</p>
      <pre><code class="javascript" v-highlight>
// es5 webpack/browserify
var VueMdl = require('vue-mdl')
Vue.use(VueMdl.default)
      </code></pre>

      <p>Using it as a plugin will include all components and directives. Vue MDL also exportsa components and a directives properties containing all components and directives:</p>

      <pre><code class="javascript" v-highlight>
// es6
import { components, directives } from 'vue-mdl'

new Vue({
  components,
  directives
})

// es5
var VueMdl = require('vue-mdl')

new Vue({
  components: VueMdl.components,
  directives: VueMdl.directives
})
      </code></pre>

      <p>You can also import individually any component or directive</p>
      <pre><code class="javascript" v-highlight>
// es6
import { MdlCheckbox, MdlBadge } from 'vue-mdl'

new Vue({
  components: {
    MdlCheckbox
  },
  directives: {
    MdlBadge
  }
})

// es5
var VueMdl = require('vue-mdl')

new Vue({
  components: {
    MdlCheckbox: VueMdl.MdlCheckbox
  },
  directives: {
    MdlBadge: VueMdl.MdlBadge
  }
})
      </code></pre>
    </div>
  </div>
</template>

<script>
export default {}
</script>

Vue = require 'vue'
hljs = require 'highlight.js/lib/highlight'
path = require 'path'
vmdl = require '../../src/vue-mdl'
require './style/mdl.scss'
require 'highlight.js/styles/tomorrow.css'
require 'material-design-lite/material.min.js'
context = require.context './partials', false, /.vue$/

vmdl.registerAll Vue

Vue.component 'title-link', require './utils/title-link.vue'
Vue.directive 'hljs', require './utils/hljs.coffee'

context.keys().forEach (comp) ->
  Vue.component path.basename(comp, '.vue'), context comp

Vue.config.debug = true
app = new Vue
  el: 'body'
  components:
    vmdlDoc: require './vmdl-doc.vue'

hljs.registerLanguage 'css', require 'highlight.js/lib/languages/css'
hljs.registerLanguage 'xml', require 'highlight.js/lib/languages/xml'
hljs.registerLanguage 'javascript', require 'highlight.js/lib/languages/javascript'
app.$nextTick -> hljs.initHighlightingOnLoad()

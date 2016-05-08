import Vue from 'vue'
import VueTransferDom from 'vue-transfer-dom'
import hljs from 'highlight.js/lib/highlight'
import path from 'path'
import VueMdl from '../../src/vue-mdl'
import VmdlDoc from './vmdl-doc.vue'

require('./style/mdl.scss')
require('highlight.js/styles/tomorrow.css')
require('material-design-lite/material.min.js')

let context = require.context('./partials', false, /.vue$/)

Vue.use(VueTransferDom)
Vue.use(VueMdl)

Vue.component('title-link', require('./utils/title-link.vue'))
Vue.directive('hljs', require('./utils/hljs').default)

context.keys().forEach(function (comp) {
  Vue.component(path.basename(comp, '.vue'), context(comp))
})

Vue.config.debug = true
let app = new Vue({
  el: 'body',
  components: {
    VmdlDoc
  }
})

hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
app.$nextTick(function () {
  hljs.initHighlightingOnLoad()
})

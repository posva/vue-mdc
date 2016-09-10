import Vue from 'vue'
import VueRouter from 'vue-router'
import VueTransferDom from 'vue-transfer-dom'
import hljs from 'highlight.js/lib/highlight'
import path from 'path'
import VueMdl from '../../src/vue-mdl'
import VmdlDoc from './VmdlDoc.vue'

require('./style/mdl.scss')
require('highlight.js/styles/tomorrow.css')
require('material-design-lite/material.min.js')

let context = require.context('./partials', false, /.vue$/)

Vue.use(VueTransferDom)
Vue.use(VueMdl)
Vue.use(VueRouter)

Vue.component('title-link', require('./utils/title-link.vue'))

hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))

Vue.directive('hljs', require('./utils/hljs').default)
Vue.mixin({
  mounted () {
    hljs.initHighlighting.called = false
    hljs.initHighlighting()
    document.querySelector('main').scrollTop = 0
  }
})

let routes = [
  { path: '/', redirect: '/installation' }
]

context.keys().forEach(function (comp) {
  let name = path.basename(comp, '.vue')
  Vue.component(name, context(comp))
  routes.push({ path: `/${name}`, component: context(comp) })
})

let router = new VueRouter({ routes })

Vue.config.debug = process.env.NODE_ENV !== 'production'
new Vue({
  router,
  components: { VmdlDoc },
  render: function (h) {
    return h('vmdl-doc')
  }
}).$mount('#app')

import Vue from 'vue'
import path from 'path'
import VueRouter from 'vue-router'
import { kebabCase } from 'lodash'
import hljs from 'highlight.js/lib/highlight'
import VueMdl from '../../src/vue-mdl'
import App from './App.vue'
import TitleLink from './utils/TitleLink.vue'

import 'normalize.css'
import './style/mdl.scss'
import 'highlight.js/styles/tomorrow.css'
import 'material-design-lite/material.min.js'

Vue.use(VueMdl)
Vue.use(VueRouter)

// Vue.component('title-link', require('./utils/title-link.vue'))
Vue.directive('hljs', require('./utils/hljs').default)
Vue.directive('highlight', {
  inserted (el) {
    Vue.nextTick(() => hljs.highlightBlock(el))
  },
  update (el, { value }) {
    if (!value) return
    el.innerText = value
    Vue.nextTick(() => hljs.highlightBlock(el))
  }
})

Vue.component('TitleLink', TitleLink)

let routes = []
const context = require.context('./views', false, /.vue$/)
context.keys().forEach(function (comp) {
  const componentName = path.basename(comp, '.vue')
  const name = kebabCase(componentName)
  const component = context(comp)
  Vue.component(componentName, component)
  routes.push({
    component,
    name,
    path: `/${name}`
  })
})

routes.push({
  path: '*',
  redirect: { name: 'installation' }
})

const router = new VueRouter({ routes })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// TODO fix highlighting
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))


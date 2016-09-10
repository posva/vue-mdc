import Vue from 'vue'
import path from 'path'
import VueMdl from '../../src/vue-mdl'
require('material-design-lite/material.js')
require('material-design-lite/material.css')
import App from './App'

Vue.use(VueMdl)

let context = require.context('../components', false, /.vue$/)
let components = []
context.keys().forEach((comp) => {
  let name = `MDL${path.basename(comp, '.vue')}`
  components.push(name)
  Vue.component(name, context(comp))
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: function (h) {
    return h('app', { props: { components: this.components } })
  },
  data: {
    components
  },
  components: { App }
})

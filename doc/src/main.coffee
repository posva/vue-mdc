Vue = require 'vue'
vmdl = require '../../src/vue-mdl'
require 'material-design-lite/material.min.css'
require 'material-design-lite/material.min.js'

vmdl.registerAll Vue

Vue.component 'title-link', require './utils/title-link.vue'

app = new Vue
  el: 'body'
  components:
    vmdlDoc: require './vmdl-doc.vue'


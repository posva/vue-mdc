Vue = require 'vue'
require '../../bower_components/material-design-lite/material.min.css'
require '../../bower_components/material-design-lite/material.min.js'

app = new Vue
  el: 'body'
  components:
    vmdlDoc: require './vmdl-doc.vue'


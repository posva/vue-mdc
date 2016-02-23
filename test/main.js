/* global location*/
require('material-design-lite/material.css')
require('material-design-lite/material.js')
import Vue from 'vue'

Vue.config.debug = true
let test = location.hash.substring(1)
let appOptions = require('./components/' + test + '.vue')
new Vue(appOptions).$mount('#test')

require('material-design-lite/material.css');
require('material-design-lite/material.js');
var Vue = require('vue');

Vue.config.debug = true;
var test = location.hash.substring(1);
var appOptions = require('./components/' + test + '.vue');
var app = new Vue(appOptions).$mount('#test');

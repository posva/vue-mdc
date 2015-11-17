require('../bower_components/material-design-lite/material.min.css');
require('../bower_components/material-design-lite/material.min.js');
var Vue = require('vue');

Vue.config.debug = true;
var test = location.hash.substring(1);
var appOptions = require('./components/' + test + '.vue');
var app = new Vue(appOptions).$mount('#test');

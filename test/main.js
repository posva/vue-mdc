var Vue = require('vue');
var test = location.hash.substring(1);
var appOptions = require('./components/' + test + '.vue');
var app = new Vue(appOptions).$mount('#test');

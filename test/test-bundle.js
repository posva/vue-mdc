/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = reuire('vue');
	var appOptions = __webpack_require__(2);
	var app = new Vue(appOptions).$mount('#test');


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3)
	module.exports.template = __webpack_require__(5)


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var vmdl;
	
	vmdl = __webpack_require__(4);
	
	module.exports = {
	  data: function() {
	    return {
	      msg: 'Hello from Babel!'
	    };
	  },
	  components: {
	    'mdl-checkbox': vmdl.mdlCheckbox
	  }
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["vue-mdl"] = factory();
		else
			root["vue-mdl"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = {
		  mdlCheckbox: __webpack_require__(2),
		
		  register: function(Vue, name) {
		    // TODO
		    Vue.component(name, {});
		  },
		  registerAll: function(Vue) {
		    // TODO
		  }
		};
	
	
	/***/ },
	/* 1 */,
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(3)
		module.exports.template = __webpack_require__(4)
	
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		module.exports = {
		  inherit: true,
		  data: function() {
		    return {
		      unwatch: null
		    };
		  },
		  props: {
		    id: {
		      type: String,
		      required: true
		    },
		    vModel: {
		      type: String,
		      required: true
		    }
		  },
		  ready: function() {
		    componentHandler.upgradeElement(this.$el);
		    componentHandler.upgradeElement(this.$el.lastChild);
		    return this.unwatch = this.$watch(this.vModel, function(val) {
		      if (val) {
		        return this.$el.classList.add('is-checked');
		      } else {
		        return this.$el.classList.remove('is-checked');
		      }
		    });
		  },
		  beforeCompile: function() {
		    var inp;
		    inp = document.createElement('INPUT');
		    inp.classList.add('mdl-checkbox__input');
		    inp.id = this.id;
		    inp.setAttribute('type', 'checkbox');
		    inp.setAttribute('v-model', this.vModel);
		    return this.$el.insertBefore(inp, this.$el.childNodes[0]);
		  },
		  beforeDestroy: function() {
		    return this.unwatch();
		  }
		};
	
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
		module.exports = "<label for=\"{{* id}}\" class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\"><span class=\"mdl-checkbox__label\"><content></content></span></label>";
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=dist.js.map

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<div><h1>So cool</h1><mdl-checkbox v-model=\"check\"></mdl-checkbox></div>";

/***/ }
/******/ ]);
//# sourceMappingURL=test-bundle.js.map
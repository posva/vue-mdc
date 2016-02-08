(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vmdl"] = factory();
	else
		root["vmdl"] = factory();
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
/******/ 	__webpack_require__.p = "dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	module.exports = {
	  components: {
	    'mdl-checkbox': __webpack_require__(1),
	    'mdl-switch': __webpack_require__(5),
	    'mdl-icon-toggle': __webpack_require__(8),
	    'mdl-radio': __webpack_require__(11),
	    'mdl-progress': __webpack_require__(15),
	    'mdl-button': __webpack_require__(18),
	    'mdl-anchor-button': __webpack_require__(22),
	    'mdl-spinner': __webpack_require__(25),
	    'mdl-slider': __webpack_require__(28),
	    'mdl-textfield': __webpack_require__(31),
	    'mdl-tooltip': __webpack_require__(34),
	    'mdl-menu': __webpack_require__(37),
	    'mdl-menu-item': __webpack_require__(40),
	    'mdl-card': __webpack_require__(43),
	  },
	  directives: {
	    'mdl-ripple-effect': __webpack_require__(46),
	    'mdl-badge': __webpack_require__(47),
	    'mdl': __webpack_require__(48),
	  },
	
	  register: function(Vue, name) {
	    var comp, func, that;
	    that = this;
	    var setComp = function(name) {
	      if (name in that.components) {
	        comp = that.components[name];
	        func = 'component';
	      } else if (name in that.directives) {
	        comp = that.directives[name];
	        func = 'directive';
	      }
	    };
	    setComp(name);
	    if (!comp) {
	      name = 'mdl-' + name;
	      setComp(name);
	      if (!comp) {
	        throw new Error('Cannot register component ' + name + " because it doesn't exist");
	      }
	    }
	    return Vue[func](name, comp);
	  },
	  registerAll: function(Vue) {
	    for (var comp in this.components) {
	      Vue.component(comp, this.components[comp]);
	    }
	    for (var dir in this.directives) {
	      var a = Vue.directive(dir, this.directives[dir]);
	    }
	  }
	};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(2)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/toggles/checkbox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(4)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/posva/vue-mdl/src/toggles/checkbox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var common;
	
	common = __webpack_require__(3);
	
	module.exports = {
	  mixins: [common],
	  ready: function() {
	    return componentHandler.upgradeElements(this.$el);
	  }
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

	var indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
	
	module.exports = {
	  props: {
	    checked: {
	      validator: function(value) {
	        return typeof value === 'boolean' || value instanceof Array;
	      },
	      required: true,
	      twoWay: true
	    },
	    disabled: {
	      required: false
	    },
	    id: String,
	    value: {
	      required: false
	    }
	  },
	  computed: {
	    isChecked: function() {
	      var ref;
	      if (typeof this.checked === 'boolean') {
	        return this.checked;
	      } else {
	        return ref = this.value, indexOf.call(this.checked, ref) >= 0;
	      }
	    }
	  }
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<label v-bind:for.once=\"id\" v-bind:class=\"{ &quot;is-disabled&quot;: disabled, &quot;is-checked&quot;: isChecked }\" class=\"mdl-checkbox mdl-js-checkbox\"><input v-bind:value=\"value\" type=\"checkbox\" v-bind:id.once=\"id\" v-model=\"checked\" v-bind:disabled=\"disabled\" class=\"mdl-checkbox__input\"/><span class=\"mdl-checkbox__label\"><slot></slot></span></label>";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/toggles/switch.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(7)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/posva/vue-mdl/src/toggles/switch.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var common;
	
	common = __webpack_require__(3);
	
	module.exports = {
	  mixins: [common],
	  ready: function() {
	    return componentHandler.upgradeElements(this.$el);
	  }
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<label v-bind:for.once=\"id\" v-bind:class=\"{ &quot;is-disabled&quot;: disabled, &quot;is-checked&quot;: isChecked }\" class=\"mdl-switch mdl-js-switch\"><input v-bind:value=\"value\" type=\"checkbox\" v-bind:id.once=\"id\" v-model=\"checked\" v-bind:disabled=\"disabled\" class=\"mdl-switch__input\"/><span class=\"mdl-switch__label\"><slot></slot></span></label>";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(9)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/toggles/icon-toggle.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(10)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/posva/vue-mdl/src/toggles/icon-toggle.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var common;
	
	common = __webpack_require__(3);
	
	module.exports = {
	  props: {
	    icon: {
	      required: true,
	      type: String
	    }
	  },
	  mixins: [common],
	  ready: function() {
	    return componentHandler.upgradeElements(this.$el);
	  }
	};


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<label v-bind:for.once=\"id\" v-bind:class=\"{ &quot;is-disabled&quot;: disabled, &quot;is-checked&quot;: isChecked }\" class=\"mdl-icon-toggle mdl-js-icon-toggle\"><input v-bind:value=\"value\" type=\"checkbox\" v-bind:id.once=\"id\" v-model=\"checked\" v-bind:disabled=\"disabled\" class=\"mdl-icon-toggle__input\"/><i class=\"mdl-icon-toggle__label material-icons\">{{icon}}</i></label>";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(12)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/toggles/radio.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(14)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/posva/vue-mdl/src/toggles/radio.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var propFill;
	
	propFill = __webpack_require__(13);
	
	module.exports = {
	  props: {
	    id: String,
	    name: String,
	    value: {
	      required: true
	    },
	    checked: {
	      required: true,
	      twoWay: true
	    },
	    disabled: {
	      fill: true
	    }
	  },
	  computed: {
	    isChecked: function() {
	      return this.checked === this.value;
	    }
	  },
	  ready: function() {
	    return componentHandler.upgradeElements(this.$el);
	  },
	  mixins: [propFill]
	};


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = {
	  beforeCompile: function() {
	    var data, prop, ref;
	    ref = this._props;
	    for (prop in ref) {
	      data = ref[prop];
	      if (data.options.fill && data.raw === '') {
	        this[prop] = prop;
	      }
	    }
	    return void 0;
	  }
	};


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<label v-bind:for.once=\"id\" v-bind:class=\"{ &quot;is-disabled&quot;: disabled, &quot;is-checked&quot;: isChecked }\" class=\"mdl-radio mdl-js-radio\"><input v-bind:id.once=\"id\" type=\"radio\" v-bind:name.once=\"name\" v-bind:value=\"value\" v-model=\"checked\" v-bind:disabled=\"disabled\" class=\"mdl-radio__button\"/><span class=\"mdl-radio__label\"><slot></slot></span></label>";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(16)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/progress.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(17)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/posva/vue-mdl/src/progress.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var propFill;
	
	propFill = __webpack_require__(13);
	
	module.exports = {
	  data: function() {},
	  props: {
	    progress: {
	      required: false
	    },
	    buffer: {
	      required: false
	    },
	    indeterminate: {
	      fill: true
	    }
	  },
	  ready: function() {
	    componentHandler.upgradeElement(this.$el, 'MaterialProgress');
	    if (this.progress != null) {
	      this.$el.MaterialProgress.setProgress(this.progress);
	      this.$watch('progress', function(val) {
	        return this.$el.MaterialProgress.setProgress(val);
	      });
	    }
	    if (this.buffer != null) {
	      this.$el.MaterialProgress.setBuffer(this.buffer);
	      return this.$watch('buffer', function(val) {
	        return this.$el.MaterialProgress.setBuffer(val);
	      });
	    }
	  },
	  mixins: [propFill]
	};


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<div v-bind:class=\"{ &quot;mdl-progress__indeterminate&quot;: indeterminate }\" class=\"mdl-progress mdl-js-progress\"></div>";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(19)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/button.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(21)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/posva/vue-mdl/src/button.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var button;
	
	button = __webpack_require__(20);
	
	module.exports = {
	  mixins: [button]
	};


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var propFill;
	
	propFill = __webpack_require__(13);
	
	module.exports = {
	  computed: {
	    cssClasses: function() {
	      return {
	        'mdl-button--icon': this.icon,
	        'mdl-button--accent': this.accent,
	        'mdl-button--primary': this.primary,
	        'mdl-button--mini-fab': this.miniFab,
	        'mdl-button--fab': this.fab || this.miniFab,
	        'mdl-button--raised': this.raised,
	        'mdl-button--colored': this.colored
	      };
	    }
	  },
	  props: {
	    disabled: {
	      fill: true
	    },
	    icon: {
	      required: false
	    },
	    accent: {
	      fill: true
	    },
	    primary: {
	      fill: true
	    },
	    miniFab: {
	      fill: true
	    },
	    fab: {
	      fill: true
	    },
	    raised: {
	      fill: true
	    },
	    colored: {
	      fill: true
	    }
	  },
	  mixins: [propFill],
	  ready: function() {
	    return componentHandler.upgradeElement(this.$el);
	  }
	};


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<button v-bind:disabled=\"disabled\" v-bind:class=\"cssClasses\" class=\"mdl-button mdl-js-button\"><slot><i v-if=\"icon\" class=\"material-icon\">{{icon}}</i></slot></button>";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(23)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/anchor-button.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(24)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/posva/vue-mdl/src/anchor-button.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var button;
	
	button = __webpack_require__(20);
	
	module.exports = {
	  mixins: [button]
	};


/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<a v-bind:disabled=\"disabled\" v-bind:class=\"cssClasses\" class=\"mdl-button mdl-js-button\"><slot><i v-if=\"icon\" class=\"material-icon\">{{icon}}</i></slot></a>";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(26)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/spinner.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(27)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/posva/vue-mdl/src/spinner.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var propFill;
	
	propFill = __webpack_require__(13);
	
	module.exports = {
	  props: {
	    active: {
	      "default": true,
	      type: Boolean
	    },
	    singleColor: {
	      fill: true
	    }
	  },
	  ready: function() {
	    return componentHandler.upgradeElement(this.$el, 'MaterialSpinner');
	  },
	  mixins: [propFill]
	};


/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<div v-bind:class=\"{ &quot;mdl-spinner--single-color&quot;: singleColor, &quot;is-active&quot;: active }\" class=\"mdl-spinner mdl-js-spinner\"></div>";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(29)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/slider.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(30)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/posva/vue-mdl/src/slider.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var propFill;
	
	propFill = __webpack_require__(13);
	
	module.exports = {
	  props: {
	    value: {
	      required: true,
	      twoWay: true
	    },
	    step: {
	      required: false
	    },
	    min: {
	      required: true
	    },
	    max: {
	      required: true
	    },
	    disabled: {
	      fill: true
	    }
	  },
	  ready: function() {
	    componentHandler.upgradeElement(this.$el, 'MaterialSlider');
	    if (this.value != null) {
	      this.$el.MaterialSlider.change(this.value);
	      this.$watch('value', function(val) {
	        return this.$el.MaterialSlider.change(val);
	      });
	    }
	    if (this.min != null) {
	      this.$watch('min', function(val) {
	        if (val > this.value) {
	          return this.$el.MaterialSlider.change(val);
	        }
	      });
	    }
	    if (this.max != null) {
	      this.$watch('max', function(val) {
	        if (val < this.value) {
	          return this.$el.MaterialSlider.change(val);
	        }
	      });
	    }
	    if (this.step != null) {
	      return this.$watch('step', function(val) {
	        return this.$el.MaterialSlider.change(val * Math.round(this.value / val));
	      });
	    }
	  },
	  mixins: [propFill]
	};


/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "<input type=\"range\" v-model=\"value\" v-bind:min=\"min\" v-bind:max=\"max\" v-bind:step=\"step\" v-bind:disabled=\"disabled\" class=\"mdl-slider mdl-js-slider\"/>";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(32)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/textfield.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(33)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/posva/vue-mdl/src/textfield.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var propFill;
	
	propFill = __webpack_require__(13);
	
	module.exports = {
	  props: {
	    expandable: String,
	    type: {
	      type: String,
	      "default": 'text'
	    },
	    rows: {
	      required: false
	    },
	    id: String,
	    value: {
	      required: false
	    },
	    label: String,
	    pattern: String,
	    error: String,
	    textarea: {
	      fill: true
	    },
	    floatingLabel: {
	      required: false
	    }
	  },
	  ready: function() {
	    componentHandler.upgradeElement(this.$el);
	    if (this.floatingLabel && (this.label == null)) {
	      this.label = this.floatingLabel;
	      return this.$watch('floatingLabel', (function(_this) {
	        return function(val) {
	          return _this.label = val;
	        };
	      })(this));
	    }
	  },
	  mixins: [propFill]
	};


/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "<div v-bind:class=\"{&quot;mdl-textfield--floating-label&quot;: floatingLabel, &quot;mdl-textfield--expandable&quot;: expandable}\" class=\"mdl-textfield mdl-js-textfield\"><slot v-if=\"expandable\" name=\"expandable-button\"><label v-bind:for.once=\"id\" class=\"mdl-button mdl-js-button mdl-button--icon\"><i class=\"material-icons\">{{expandable}}</i></label></slot><div v-bind:class=\"{&quot;mdl-textfield__expandable-holder&quot;: expandable}\"><slot v-if=\"textarea\" name=\"textarea\"><textarea type=\"text\" v-model=\"value\" v-bind:id.once=\"id\" v-bind:rows=\"rows\" class=\"mdl-textfield__input\"></textarea></slot><slot v-else=\"v-else\" name=\"input\"><input v-bind:type=\"type\" v-model=\"value\" v-bind:id.once=\"id\" v-bind:pattern=\"pattern\" class=\"mdl-textfield__input\"/></slot><slot name=\"label\"><label v-bind:for.once=\"id\" class=\"mdl-textfield__label\">{{label}}</label></slot><slot name=\"error\"><label v-if=\"error\" class=\"mdl-textfield__error\">{{error}}</label></slot></div></div>";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(35)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/tooltip.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(36)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/posva/vue-mdl/src/tooltip.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var propFill;
	
	propFill = __webpack_require__(13);
	
	module.exports = {
	  props: {
	    "for": {
	      required: true,
	      type: String
	    },
	    large: {
	      fill: true
	    }
	  },
	  ready: function() {
	    return componentHandler.upgradeElement(this.$el, 'MaterialTooltip');
	  },
	  mixins: [propFill]
	};


/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "<div v-bind:for=\"for\" v-bind:class=\"{&quot;mdl-tooltip--large&quot;: large}\" class=\"mdl-tooltip\"><slot></slot></div>";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(38)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/menu/menu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(39)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/posva/vue-mdl/src/menu/menu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var propFill;
	
	propFill = __webpack_require__(13);
	
	module.exports = {
	  props: ['for'],
	  ready: function() {
	    return componentHandler.upgradeElement(this.$el, 'MaterialMenu');
	  }
	};


/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "<ul v-bind:for.once=\"for\" class=\"mdl-menu mdl-js-menu\"><slot></slot></ul>";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(41)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/menu/menu-item.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(42)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/posva/vue-mdl/src/menu/menu-item.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = {
	  ready: function() {}
	};


/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "<li class=\"mdl-menu__item\"><slot></slot></li>";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(44)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/card.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(45)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/posva/vue-mdl/src/card.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var propFill, slots;
	
	propFill = __webpack_require__(13);
	
	slots = ['title', 'subtitle', 'supportingText', 'media', 'actions', 'menu'];
	
	module.exports = {
	  computed: {
	    isActionsURL: function() {
	      if (typeof this.actions === 'string') {
	        return this.actions.match(/^(https?:)?\/\//) != null;
	      } else {
	        return false;
	      }
	    }
	  },
	  props: {
	    title: {
	      type: String,
	      "default": true
	    },
	    menu: {
	      "default": true
	    },
	    actions: {
	      type: String,
	      "default": true
	    },
	    actionsTarget: {
	      "default": '_self',
	      type: String
	    },
	    actionsText: String,
	    media: {
	      "default": true,
	      type: String
	    },
	    subtitle: {
	      "default": true,
	      type: String
	    },
	    supportingText: {
	      "default": true,
	      type: String
	    }
	  },
	  compiled: function() {
	    return slots.forEach((function(_this) {
	      return function(slot, pos) {
	        var el;
	        if (_this[slot] === true) {
	          el = _this.$el.children[pos];
	          if (!el.attributes.getNamedItem('slot')) {
	            return _this[slot] = '';
	          }
	        }
	      };
	    })(this));
	  },
	  methods: {
	    triggerMenuEvent: function() {
	      return this.$dispatch(this.menu);
	    },
	    triggerActionsEvent: function() {
	      return this.$dispatch(this.actions);
	    }
	  },
	  components: {
	    mdlButton: __webpack_require__(18),
	    mdlAnchorButton: __webpack_require__(22)
	  }
	};


/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mdl-card mdl-shadow--2dp\"><slot name=\"title\" v-if=\"title\"><div class=\"mdl-card__title\"><h2 class=\"mdl-card__title-text\">{{title}}</h2></div></slot><slot name=\"subtitle\" v-if=\"subtitle\"><div class=\"mdl-card__subtitle-text\">{{subtitle}}</div></slot><slot name=\"supporting-text\" v-if=\"supportingText\"><div class=\"mdl-card__supporting-text\">{{supportingText}}</div></slot><slot name=\"media\" v-if=\"media\"><div class=\"mdl-card__media\"><img :src=\"media\"/></div></slot><!-- TODO this was an anchor--><slot name=\"actions\" v-if=\"actions\"><div class=\"mdl-card__actions mdl-card--border\"><mdl-anchor-button colored=\"colored\" v-if=\"isActionsURL\" v-bind:href=\"actions\" v-bind:target=\"actionsTarget\" class=\"mdl-js-ripple-effect\">{{actionsText}}</mdl-anchor-button><mdl-button colored=\"colored\" v-else=\"v-else\" class=\"mdl-js-ripple-effect\">{{actionsText}}</mdl-button></div></slot><!-- TODO some way of creating a menu or action--><slot name=\"menu\" v-if=\"menu\"><div class=\"mdl-card__menu\"><mdl-button icon=\"icon\" @click=\"triggerMenuEvent\" class=\"mdl-js-ripple-effect\"><i class=\"material-icons\">share</i></mdl-button></div></slot></div>";

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = {
	  bind: function() {
	    return this.el.classList.add('mdl-js-ripple-effect');
	  }
	};


/***/ },
/* 47 */
/***/ function(module, exports) {

	var checkNumber, dataBadgeSetter;
	
	checkNumber = function(num) {
	  num = parseInt(num, 10);
	  return num > 0;
	};
	
	dataBadgeSetter = function(hide, value) {
	  if (hide) {
	    return this.el.removeAttribute('data-badge');
	  } else if (!this.isNumber || checkNumber(value)) {
	    return this.el.setAttribute('data-badge', value);
	  } else {
	    return this.el.removeAttribute('data-badge');
	  }
	};
	
	module.exports = {
	  bind: function() {
	    this.el.classList.add('mdl-badge');
	    if ('overlap' in this.modifiers) {
	      this.el.classList.add('mdl-badge--overlap');
	    }
	    if ('no-background' in this.modifiers) {
	      this.el.classList.add('mdl-badge--no-background');
	    }
	    return this.isNumber = 'number' in this.modifiers;
	  },
	  params: ['hide-badge'],
	  paramWatchers: {
	    hideBadge: function(hide) {
	      return dataBadgeSetter.call(this, hide, this.value);
	    }
	  },
	  update: function(value) {
	    this.value = value;
	    return dataBadgeSetter.call(this, this.params.hideBadge, value);
	  }
	};


/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = {
	  bind: function() {
	    return componentHandler.upgradeElements(this.el);
	  }
	};


/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-mdl.js.map
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
	    'mdl-checkbox': __webpack_require__(11),
	    'mdl-switch': __webpack_require__(15),
	    'mdl-icon-toggle': __webpack_require__(18),
	    'mdl-radio': __webpack_require__(21),
	    'mdl-progress': __webpack_require__(24),
	    'mdl-button': __webpack_require__(27),
	    'mdl-spinner': __webpack_require__(30),
	    'mdl-slider': __webpack_require__(33),
	    'mdl-textfield': __webpack_require__(36),
	    'mdl-tooltip': __webpack_require__(39),
	  },
	  directives: {
	    'mdl-ripple-effect': __webpack_require__(42),
	    'mdl-badge': __webpack_require__(43),
	    'mdl': __webpack_require__(44),
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
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(12)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(14)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!coffee!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./checkbox.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!coffee!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./checkbox.vue","-!vue-html!template-html?raw&engine=jade!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./checkbox.vue"], function () {
	var newOptions = require("-!coffee!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./checkbox.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html!template-html?raw&engine=jade!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./checkbox.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var common;
	
	common = __webpack_require__(13);
	
	module.exports = {
	  mixins: [common],
	  ready: function() {
	    return componentHandler.upgradeElements(this.$el);
	  }
	};


/***/ },
/* 13 */
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
	    disabled: Boolean,
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
/* 14 */
/***/ function(module, exports) {

	module.exports = "<label v-bind:for.once=\"id\" v-bind:class=\"{ &quot;is-disabled&quot;: disabled, &quot;is-checked&quot;: isChecked }\" class=\"mdl-checkbox mdl-js-checkbox\"><input v-bind:value=\"value\" type=\"checkbox\" v-bind:id.once=\"id\" v-model=\"checked\" v-bind:disabled=\"disabled\" class=\"mdl-checkbox__input\"/><span class=\"mdl-checkbox__label\"><slot></slot></span></label>";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(16)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(17)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!coffee!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./switch.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!coffee!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./switch.vue","-!vue-html!template-html?raw&engine=jade!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./switch.vue"], function () {
	var newOptions = require("-!coffee!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./switch.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html!template-html?raw&engine=jade!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./switch.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var common;
	
	common = __webpack_require__(13);
	
	module.exports = {
	  mixins: [common],
	  ready: function() {
	    return componentHandler.upgradeElements(this.$el);
	  }
	};


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<label v-bind:for.once=\"id\" v-bind:class=\"{ &quot;is-disabled&quot;: disabled, &quot;is-checked&quot;: isChecked }\" class=\"mdl-switch mdl-js-switch\"><input v-bind:value=\"value\" type=\"checkbox\" v-bind:id.once=\"id\" v-model=\"checked\" v-bind:disabled=\"disabled\" class=\"mdl-switch__input\"/><span class=\"mdl-switch__label\"><slot></slot></span></label>";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(19)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(20)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!coffee!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./icon-toggle.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!coffee!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./icon-toggle.vue","-!vue-html!template-html?raw&engine=jade!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./icon-toggle.vue"], function () {
	var newOptions = require("-!coffee!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./icon-toggle.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html!template-html?raw&engine=jade!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./icon-toggle.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var common;
	
	common = __webpack_require__(13);
	
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
/* 20 */
/***/ function(module, exports) {

	module.exports = "<label v-bind:for.once=\"id\" v-bind:class=\"{ &quot;is-disabled&quot;: disabled, &quot;is-checked&quot;: isChecked }\" class=\"mdl-icon-toggle mdl-js-icon-toggle\"><input v-bind:value=\"value\" type=\"checkbox\" v-bind:id.once=\"id\" v-model=\"checked\" v-bind:disabled=\"disabled\" class=\"mdl-icon-toggle__input\"/><i class=\"mdl-icon-toggle__label material-icons\">{{icon}}</i></label>";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(22)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(23)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!coffee!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./radio.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!coffee!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./radio.vue","-!vue-html!template-html?raw&engine=jade!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./radio.vue"], function () {
	var newOptions = require("-!coffee!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./radio.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html!template-html?raw&engine=jade!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./radio.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 22 */
/***/ function(module, exports) {

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
	    disabled: Boolean
	  },
	  computed: {
	    isChecked: function() {
	      return this.checked === this.value;
	    }
	  },
	  ready: function() {
	    return componentHandler.upgradeElements(this.$el);
	  }
	};


/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<label v-bind:for.once=\"id\" v-bind:class=\"{ &quot;is-disabled&quot;: disabled, &quot;is-checked&quot;: isChecked }\" class=\"mdl-radio mdl-js-radio\"><input v-bind:id.once=\"id\" type=\"radio\" v-bind:name.once=\"name\" v-bind:value=\"value\" v-model=\"checked\" v-bind:disabled=\"disabled\" class=\"mdl-radio__button\"/><span class=\"mdl-radio__label\"><slot></slot></span></label>";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(25)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(26)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!coffee!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./progress.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!coffee!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./progress.vue","-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./progress.vue"], function () {
	var newOptions = require("-!coffee!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./progress.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./progress.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = {
	  data: function() {
	    return {
	      unwatch: []
	    };
	  },
	  props: {
	    progress: {
	      required: false
	    },
	    buffer: {
	      required: false
	    },
	    indeterminate: {
	      type: Boolean,
	      "default": false
	    }
	  },
	  ready: function() {
	    componentHandler.upgradeElement(this.$el, 'MaterialProgress');
	    if (this.progress != null) {
	      this.$el.MaterialProgress.setProgress(this.progress);
	      this.unwatch.push(this.$watch('progress', function(val) {
	        return this.$el.MaterialProgress.setProgress(val);
	      }));
	    }
	    if (this.buffer != null) {
	      this.$el.MaterialProgress.setBuffer(this.buffer);
	      return this.unwatch.push(this.$watch('buffer', function(val) {
	        return this.$el.MaterialProgress.setBuffer(val);
	      }));
	    }
	  },
	  beforeDestroy: function() {
	    return this.unwatch.forEach(function(unwatch) {
	      return unwatch();
	    });
	  }
	};


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<div v-bind:class=\"{ &quot;mdl-progress__indeterminate&quot;: indeterminate }\" class=\"mdl-progress mdl-js-progress\"></div>";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(28)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(29)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!coffee!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./button.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!coffee!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./button.vue","-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./button.vue"], function () {
	var newOptions = require("-!coffee!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./button.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./button.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = {
	  props: {
	    disabled: {
	      required: false
	    },
	    icon: {
	      required: false
	    },
	    accent: {
	      required: false
	    },
	    primary: {
	      required: false
	    },
	    miniFab: {
	      required: false
	    },
	    fab: {
	      required: false
	    },
	    raised: {
	      required: false
	    },
	    colored: {
	      required: false
	    }
	  },
	  ready: function() {
	    return componentHandler.upgradeElement(this.$el);
	  }
	};


/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "<button v-bind:disabled=\"disabled\" v-bind:class=\"{&quot;mdl-button--icon&quot;: icon, &quot;mdl-button--accent&quot;: accent, &quot;mdl-button--primary&quot;: primary, &quot;mdl-button--mini-fab&quot;: miniFab, &quot;mdl-button--fab&quot;: fab || miniFab, &quot;mdl-button--raised&quot;: raised, &quot;mdl-button--colored&quot;: colored}\" class=\"mdl-button mdl-js-button\"><slot></slot></button>";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(31)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(32)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!coffee!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./spinner.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!coffee!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./spinner.vue","-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./spinner.vue"], function () {
	var newOptions = require("-!coffee!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./spinner.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./spinner.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = {
	  props: {
	    active: {
	      "default": true,
	      type: Boolean
	    },
	    singleColor: {
	      type: Boolean
	    }
	  },
	  ready: function() {
	    return componentHandler.upgradeElement(this.$el, 'MaterialSpinner');
	  }
	};


/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "<div v-bind:class=\"{ &quot;mdl-spinner--single-color&quot;: singleColor, &quot;is-active&quot;: active }\" class=\"mdl-spinner mdl-js-spinner\"></div>";

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(34)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(35)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!coffee!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./slider.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!coffee!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./slider.vue","-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./slider.vue"], function () {
	var newOptions = require("-!coffee!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./slider.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./slider.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = {
	  data: function() {
	    return {
	      unwatch: []
	    };
	  },
	  props: {
	    value: {
	      required: true
	    },
	    step: {
	      required: false
	    },
	    min: {
	      required: false
	    },
	    max: {
	      required: false
	    },
	    disabled: {
	      type: Boolean,
	      required: false
	    }
	  },
	  ready: function() {
	    componentHandler.upgradeElement(this.$el, 'MaterialSlider');
	    if (this.value != null) {
	      this.$el.MaterialSlider.change(this.value);
	      this.unwatch.push(this.$watch('value', function(val) {
	        return this.$el.MaterialSlider.change(val);
	      }));
	    }
	    if (this.min != null) {
	      this.unwatch.push(this.$watch('min', function(val) {
	        if (val > this.value) {
	          return this.$el.MaterialSlider.change(val);
	        }
	      }));
	    }
	    if (this.max != null) {
	      this.unwatch.push(this.$watch('max', function(val) {
	        if (val < this.value) {
	          return this.$el.MaterialSlider.change(val);
	        }
	      }));
	    }
	    if (this.step != null) {
	      return this.unwatch.push(this.$watch('step', function(val) {
	        return this.$el.MaterialSlider.change(val * Math.round(this.value / val));
	      }));
	    }
	  },
	  beforeDestroy: function() {
	    return this.unwatch.forEach(function(unwatch) {
	      return unwatch();
	    });
	  }
	};


/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "<input type=\"range\" v-model=\"value\" v-bind:min=\"min\" v-bind:max=\"max\" v-bind:step=\"step\" v-bind:disabled=\"disabled\" class=\"mdl-slider mdl-js-slider\"/>";

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(37)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(38)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!coffee!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./textfield.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!coffee!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./textfield.vue","-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./textfield.vue"], function () {
	var newOptions = require("-!coffee!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./textfield.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./textfield.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 37 */
/***/ function(module, exports) {

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
	      required: false
	    },
	    floatingLabel: {
	      required: false
	    }
	  },
	  ready: function() {
	    return componentHandler.upgradeElement(this.$el);
	  }
	};


/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "<div v-bind:class=\"{&quot;mdl-textfield--floating-label&quot;: floatingLabel, &quot;mdl-textfield--expandable&quot;: expandable}\" class=\"mdl-textfield mdl-js-textfield\"><slot v-if=\"expandable\" name=\"expandable-button\"><label v-bind:for.once=\"id\" class=\"mdl-button mdl-js-button mdl-button--icon\"><i class=\"material-icons\">{{expandable}}</i></label></slot><div v-bind:class=\"{&quot;mdl-textfield__expandable-holder&quot;: expandable}\"><slot v-if=\"textarea\" name=\"textarea\"><textarea type=\"text\" v-bind:id.once=\"id\" v-bind:rows=\"rows\" class=\"mdl-textfield__input\"></textarea></slot><slot v-else=\"v-else\" name=\"input\"><input v-bind:type=\"type\" v-model=\"value\" v-bind:id.once=\"id\" v-bind:pattern=\"pattern\" class=\"mdl-textfield__input\"/></slot><slot name=\"label\"><label v-bind:for.once=\"id\" class=\"mdl-textfield__label\">{{label}}</label></slot><slot name=\"error\"><label v-if=\"error\" class=\"mdl-textfield__error\">{{error}}</label></slot></div></div>";

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(40)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(41)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!coffee!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./tooltip.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!coffee!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./tooltip.vue","-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./tooltip.vue"], function () {
	var newOptions = require("-!coffee!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./tooltip.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./tooltip.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = {
	  props: {
	    "for": {
	      required: true,
	      type: String
	    },
	    large: {
	      required: false
	    }
	  },
	  ready: function() {
	    return componentHandler.upgradeElement(this.$el, 'MaterialTooltip');
	  }
	};


/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "<div v-bind:for=\"for\" v-bind:class=\"{&quot;mdl-tooltip--large&quot;: large}\" class=\"mdl-tooltip\"><slot></slot></div>";

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = {
	  bind: function() {
	    return this.el.classList.add('mdl-js-ripple-effect');
	  }
	};


/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = {
	  bind: function() {
	    this.el.classList.add('mdl-badge');
	    if ('overlap' in this.modifiers) {
	      this.el.classList.add('mdl-badge--overlap');
	    }
	    if ('no-background' in this.modifiers) {
	      return this.el.classList.add('mdl-badge--no-background');
	    }
	  },
	  update: function(value) {
	    return this.el.setAttribute('data-badge', value);
	  }
	};


/***/ },
/* 44 */
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
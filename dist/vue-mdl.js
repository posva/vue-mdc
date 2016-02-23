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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MdlCard = exports.MdlMenuItem = exports.MdlMenu = exports.MdlTooltip = exports.MdlTextfield = exports.MdlSlider = exports.MdlSpinner = exports.MdlProgress = exports.MdlAnchorButton = exports.MdlButton = exports.MdlIconToggle = exports.MdlRadio = exports.MdlSwitch = exports.MdlCheckbox = exports.MdlRippleEffect = exports.MdlBadge = exports.Mdl = undefined;
	
	var _badge = __webpack_require__(1);
	
	var _badge2 = _interopRequireDefault(_badge);
	
	var _mdl = __webpack_require__(2);
	
	var _mdl2 = _interopRequireDefault(_mdl);
	
	var _rippleEffect = __webpack_require__(3);
	
	var _rippleEffect2 = _interopRequireDefault(_rippleEffect);
	
	var _checkbox = __webpack_require__(4);
	
	var _checkbox2 = _interopRequireDefault(_checkbox);
	
	var _radio = __webpack_require__(8);
	
	var _radio2 = _interopRequireDefault(_radio);
	
	var _button = __webpack_require__(55);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _anchorButton = __webpack_require__(59);
	
	var _anchorButton2 = _interopRequireDefault(_anchorButton);
	
	var _progress = __webpack_require__(62);
	
	var _progress2 = _interopRequireDefault(_progress);
	
	var _spinner = __webpack_require__(65);
	
	var _spinner2 = _interopRequireDefault(_spinner);
	
	var _iconToggle = __webpack_require__(68);
	
	var _iconToggle2 = _interopRequireDefault(_iconToggle);
	
	var _slider = __webpack_require__(71);
	
	var _slider2 = _interopRequireDefault(_slider);
	
	var _switch = __webpack_require__(74);
	
	var _switch2 = _interopRequireDefault(_switch);
	
	var _textfield = __webpack_require__(77);
	
	var _textfield2 = _interopRequireDefault(_textfield);
	
	var _tooltip = __webpack_require__(80);
	
	var _tooltip2 = _interopRequireDefault(_tooltip);
	
	var _menu = __webpack_require__(83);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _menuItem = __webpack_require__(86);
	
	var _menuItem2 = _interopRequireDefault(_menuItem);
	
	var _card = __webpack_require__(89);
	
	var _card2 = _interopRequireDefault(_card);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var vmdl = {
	  components: {
	    mdlCheckbox: _checkbox2.default,
	    mdlSwitch: _switch2.default,
	    mdlIconToggle: _iconToggle2.default,
	    mdlRadio: _radio2.default,
	    mdlProgress: _progress2.default,
	    mdlButton: _button2.default,
	    mdlAnchorButton: _anchorButton2.default,
	    mdlSpinner: _spinner2.default,
	    mdlSlider: _slider2.default,
	    mdlTextfield: _textfield2.default,
	    mdlTooltip: _tooltip2.default,
	    mdlMenu: _menu2.default,
	    mdlMenuItem: _menuItem2.default,
	    mdlCard: _card2.default
	  },
	  directives: {
	    mdl: _mdl2.default,
	    mdlBadge: _badge2.default,
	    mdlRippleEffect: _rippleEffect2.default
	  },
	
	  register: function register(Vue, name) {
	    var comp = undefined,
	        func = undefined,
	        that = undefined;
	    that = this;
	    var setComp = function setComp(name) {
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
	      name = 'mdl' + name[0].toUpperCase() + name.substr(1);
	      setComp(name);
	      if (!comp) {
	        throw new Error('Cannot register component ' + name + " because it doesn't exist");
	      }
	    }
	    return Vue[func](name, comp);
	  },
	  registerAll: function registerAll(Vue) {
	    for (var comp in this.components) {
	      Vue.component(comp, this.components[comp]);
	    }
	    for (var dir in this.directives) {
	      Vue.directive(dir, this.directives[dir]);
	    }
	  }
	};
	
	exports.default = vmdl;
	var Mdl = exports.Mdl = _mdl2.default;
	var MdlBadge = exports.MdlBadge = _badge2.default;
	var MdlRippleEffect = exports.MdlRippleEffect = _rippleEffect2.default;
	var MdlCheckbox = exports.MdlCheckbox = _checkbox2.default;
	var MdlSwitch = exports.MdlSwitch = _switch2.default;
	var MdlRadio = exports.MdlRadio = _radio2.default;
	var MdlIconToggle = exports.MdlIconToggle = _iconToggle2.default;
	var MdlButton = exports.MdlButton = _button2.default;
	var MdlAnchorButton = exports.MdlAnchorButton = _anchorButton2.default;
	var MdlProgress = exports.MdlProgress = _progress2.default;
	var MdlSpinner = exports.MdlSpinner = _spinner2.default;
	var MdlSlider = exports.MdlSlider = _slider2.default;
	var MdlTextfield = exports.MdlTextfield = _textfield2.default;
	var MdlTooltip = exports.MdlTooltip = _tooltip2.default;
	var MdlMenu = exports.MdlMenu = _menu2.default;
	var MdlMenuItem = exports.MdlMenuItem = _menuItem2.default;
	var MdlCard = exports.MdlCard = _card2.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var checkNumber = function checkNumber(num) {
	  num = parseInt(num, 10);
	  return num > 0;
	};
	
	var dataBadgeSetter = function dataBadgeSetter(hide, value) {
	  if (hide) {
	    this.el.removeAttribute('data-badge');
	  } else if (!this.isNumber || checkNumber(value)) {
	    this.el.setAttribute('data-badge', value);
	  } else {
	    this.el.removeAttribute('data-badge');
	  }
	};
	
	exports.default = {
	  bind: function bind() {
	    this.el.classList.add('mdl-badge');
	    if ('overlap' in this.modifiers) {
	      this.el.classList.add('mdl-badge--overlap');
	    }
	    if ('no-background' in this.modifiers) {
	      this.el.classList.add('mdl-badge--no-background');
	    }
	    this.isNumber = 'number' in this.modifiers;
	  },
	
	  params: ['hide-badge'],
	  paramWatchers: {
	    hideBadge: function hideBadge(hide) {
	      dataBadgeSetter.call(this, hide, this.value);
	    }
	  },
	  update: function update(value) {
	    this.value = value;
	    dataBadgeSetter.call(this, this.params.hideBadge, value);
	  }
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  bind: function bind() {
	    componentHandler.upgradeElements(this.el);
	  }
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  bind: function bind() {
	    this.el.classList.add('mdl-js-ripple-effect');
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(5)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/toggles/checkbox.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/posva/vue-mdl/src/toggles/checkbox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toggle = __webpack_require__(6);
	
	var _toggle2 = _interopRequireDefault(_toggle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  ready: function ready() {
	    componentHandler.upgradeElements(this.$el);
	  },
	
	  mixins: [_toggle2.default]
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    checked: {
	      validator: function validator(value) {
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
	    isChecked: function isChecked() {
	      if (typeof this.checked === 'boolean') {
	        return this.checked;
	      } else {
	        return this.checked.indexOf(this.value) >= 0;
	      }
	    }
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<label v-bind:for.once=\"id\" v-bind:class=\"{ &quot;is-disabled&quot;: disabled, &quot;is-checked&quot;: isChecked }\" class=\"mdl-checkbox mdl-js-checkbox\"><input v-bind:value=\"value\" type=\"checkbox\" v-bind:id.once=\"id\" v-model=\"checked\" v-bind:disabled=\"disabled\" class=\"mdl-checkbox__input\"/><span class=\"mdl-checkbox__label\"><slot></slot></span></label>";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(9)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/toggles/radio.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(54)
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propFill = __webpack_require__(10);
	
	var _propFill2 = _interopRequireDefault(_propFill);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
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
	    isChecked: function isChecked() {
	      return this.checked === this.value;
	    }
	  },
	  ready: function ready() {
	    componentHandler.upgradeElements(this.$el);
	  },
	
	  mixins: [_propFill2.default]
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(11);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _getIterator2 = __webpack_require__(23);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  beforeCompile: function beforeCompile() {
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	      for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(this._props)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var prop = _step.value;
	
	        var data = this._props[prop];
	        if (data.options.fill && data.raw === '') {
	          this[prop] = prop;
	        }
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	  }
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(12), __esModule: true };

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(13);
	module.exports = __webpack_require__(19).Object.keys;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(14);
	
	__webpack_require__(16)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(15);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(17)
	  , core    = __webpack_require__(19)
	  , fails   = __webpack_require__(22);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(18)
	  , core      = __webpack_require__(19)
	  , ctx       = __webpack_require__(20)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 18 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 19 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(21);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(24), __esModule: true };

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(25);
	__webpack_require__(46);
	module.exports = __webpack_require__(49);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(26);
	var Iterators = __webpack_require__(29);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(27)
	  , step             = __webpack_require__(28)
	  , Iterators        = __webpack_require__(29)
	  , toIObject        = __webpack_require__(30);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(33)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(31)
	  , defined = __webpack_require__(15);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(32);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(34)
	  , $export        = __webpack_require__(17)
	  , redefine       = __webpack_require__(35)
	  , hide           = __webpack_require__(36)
	  , has            = __webpack_require__(40)
	  , Iterators      = __webpack_require__(29)
	  , $iterCreate    = __webpack_require__(41)
	  , setToStringTag = __webpack_require__(42)
	  , getProto       = __webpack_require__(37).getProto
	  , ITERATOR       = __webpack_require__(43)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(36);

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(37)
	  , createDesc = __webpack_require__(38);
	module.exports = __webpack_require__(39) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(22)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 40 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(37)
	  , descriptor     = __webpack_require__(38)
	  , setToStringTag = __webpack_require__(42)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(36)(IteratorPrototype, __webpack_require__(43)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(37).setDesc
	  , has = __webpack_require__(40)
	  , TAG = __webpack_require__(43)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(44)('wks')
	  , uid    = __webpack_require__(45)
	  , Symbol = __webpack_require__(18).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(18)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(47)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(33)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(48)
	  , defined   = __webpack_require__(15);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(50)
	  , get      = __webpack_require__(52);
	module.exports = __webpack_require__(19).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(51);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(53)
	  , ITERATOR  = __webpack_require__(43)('iterator')
	  , Iterators = __webpack_require__(29);
	module.exports = __webpack_require__(19).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(32)
	  , TAG = __webpack_require__(43)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "<label v-bind:for.once=\"id\" v-bind:class=\"{ &quot;is-disabled&quot;: disabled, &quot;is-checked&quot;: isChecked }\" class=\"mdl-radio mdl-js-radio\"><input v-bind:id.once=\"id\" type=\"radio\" v-bind:name.once=\"name\" v-bind:value=\"value\" v-model=\"checked\" v-bind:disabled=\"disabled\" class=\"mdl-radio__button\"/><span class=\"mdl-radio__label\"><slot></slot></span></label>";

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(56)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/button.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(58)
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _button = __webpack_require__(57);
	
	var _button2 = _interopRequireDefault(_button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_button2.default]
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propFill = __webpack_require__(10);
	
	var _propFill2 = _interopRequireDefault(_propFill);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  computed: {
	    cssClasses: function cssClasses() {
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
	  mixins: [_propFill2.default],
	  ready: function ready() {
	    componentHandler.upgradeElement(this.$el);
	  }
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "<button v-bind:disabled=\"disabled\" v-bind:class=\"cssClasses\" class=\"mdl-button mdl-js-button\"><slot><i v-if=\"icon\" class=\"material-icon\">{{icon}}</i></slot></button>";

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(60)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/anchor-button.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(61)
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _button = __webpack_require__(57);
	
	var _button2 = _interopRequireDefault(_button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_button2.default]
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = "<a v-bind:disabled=\"disabled\" v-bind:class=\"cssClasses\" class=\"mdl-button mdl-js-button\"><slot><i v-if=\"icon\" class=\"material-icon\">{{icon}}</i></slot></a>";

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(63)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/progress.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(64)
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propFill = __webpack_require__(10);
	
	var _propFill2 = _interopRequireDefault(_propFill);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
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
	  ready: function ready() {
	    var _this = this;
	
	    componentHandler.upgradeElement(this.$el, 'MaterialProgress');
	
	    if (this.progress != null) {
	      this.$el.MaterialProgress.setProgress(this.progress);
	      this.$watch('progress', function (val) {
	        return _this.$el.MaterialProgress.setProgress(val);
	      });
	    }
	
	    if (this.buffer != null) {
	      this.$el.MaterialProgress.setBuffer(this.buffer);
	      this.$watch('buffer', function (val) {
	        return _this.$el.MaterialProgress.setBuffer(val);
	      });
	    }
	  },
	
	  mixins: [_propFill2.default]
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = "<div v-bind:class=\"{ &quot;mdl-progress__indeterminate&quot;: indeterminate }\" class=\"mdl-progress mdl-js-progress\"></div>";

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(66)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/spinner.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(67)
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propFill = __webpack_require__(10);
	
	var _propFill2 = _interopRequireDefault(_propFill);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    active: {
	      default: true,
	      type: Boolean
	    },
	    singleColor: {
	      fill: true
	    }
	  },
	  ready: function ready() {
	    componentHandler.upgradeElement(this.$el, 'MaterialSpinner');
	  },
	
	  mixins: [_propFill2.default]
	};

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = "<div v-bind:class=\"{ &quot;mdl-spinner--single-color&quot;: singleColor, &quot;is-active&quot;: active }\" class=\"mdl-spinner mdl-js-spinner\"></div>";

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(69)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/toggles/icon-toggle.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(70)
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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toggle = __webpack_require__(6);
	
	var _toggle2 = _interopRequireDefault(_toggle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    icon: {
	      required: true,
	      type: String
	    }
	  },
	  mixins: [_toggle2.default],
	  ready: function ready() {
	    componentHandler.upgradeElements(this.$el);
	  }
	};

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "<label v-bind:for.once=\"id\" v-bind:class=\"{ &quot;is-disabled&quot;: disabled, &quot;is-checked&quot;: isChecked }\" class=\"mdl-icon-toggle mdl-js-icon-toggle\"><input v-bind:value=\"value\" type=\"checkbox\" v-bind:id.once=\"id\" v-model=\"checked\" v-bind:disabled=\"disabled\" class=\"mdl-icon-toggle__input\"/><i class=\"mdl-icon-toggle__label material-icons\">{{icon}}</i></label>";

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(72)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/slider.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(73)
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
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propFill = __webpack_require__(10);
	
	var _propFill2 = _interopRequireDefault(_propFill);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
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
	  ready: function ready() {
	    var _this = this;
	
	    componentHandler.upgradeElement(this.$el, 'MaterialSlider');
	
	    this.$el.MaterialSlider.change(this.value);
	    this.$watch('value', function (val) {
	      return _this.$el.MaterialSlider.change(val);
	    });
	
	    this.$watch('min', function (val) {
	      if (val > _this.value) {
	        _this.$el.MaterialSlider.change(val);
	      }
	    });
	
	    this.$watch('max', function (val) {
	      if (val < _this.value) {
	        _this.$el.MaterialSlider.change(val);
	      }
	    });
	
	    this.$watch('step', function (val) {
	      return _this.$el.MaterialSlider.change(val * Math.round(_this.value / val));
	    });
	  },
	
	  mixins: [_propFill2.default]
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "<input type=\"range\" v-model=\"value\" v-bind:min=\"min\" v-bind:max=\"max\" v-bind:step=\"step\" v-bind:disabled=\"disabled\" class=\"mdl-slider mdl-js-slider\"/>";

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(75)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/toggles/switch.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(76)
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
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toggle = __webpack_require__(6);
	
	var _toggle2 = _interopRequireDefault(_toggle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_toggle2.default],
	  ready: function ready() {
	    componentHandler.upgradeElements(this.$el);
	  }
	};

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = "<label v-bind:for.once=\"id\" v-bind:class=\"{ &quot;is-disabled&quot;: disabled, &quot;is-checked&quot;: isChecked }\" class=\"mdl-switch mdl-js-switch\"><input v-bind:value=\"value\" type=\"checkbox\" v-bind:id.once=\"id\" v-model=\"checked\" v-bind:disabled=\"disabled\" class=\"mdl-switch__input\"/><span class=\"mdl-switch__label\"><slot></slot></span></label>";

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(78)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/textfield.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(79)
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propFill = __webpack_require__(10);
	
	var _propFill2 = _interopRequireDefault(_propFill);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    expandable: String,
	    type: {
	      type: String,
	      default: 'text'
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
	  ready: function ready() {
	    var _this = this;
	
	    componentHandler.upgradeElement(this.$el);
	    if (this.floatingLabel && this.label == null) {
	      this.label = this.floatingLabel;
	      this.$watch('floatingLabel', function (val) {
	        return _this.label = val;
	      });
	    }
	  },
	
	  mixins: [_propFill2.default]
	};

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = "<div v-bind:class=\"{&quot;mdl-textfield--floating-label&quot;: floatingLabel, &quot;mdl-textfield--expandable&quot;: expandable}\" class=\"mdl-textfield mdl-js-textfield\"><slot v-if=\"expandable\" name=\"expandable-button\"><label v-bind:for.once=\"id\" class=\"mdl-button mdl-js-button mdl-button--icon\"><i class=\"material-icons\">{{expandable}}</i></label></slot><div v-bind:class=\"{&quot;mdl-textfield__expandable-holder&quot;: expandable}\"><slot v-if=\"textarea\" name=\"textarea\"><textarea type=\"text\" v-model=\"value\" v-bind:id.once=\"id\" v-bind:rows=\"rows\" class=\"mdl-textfield__input\"></textarea></slot><slot v-else=\"v-else\" name=\"input\"><input v-bind:type=\"type\" v-model=\"value\" v-bind:id.once=\"id\" v-bind:pattern=\"pattern\" class=\"mdl-textfield__input\"/></slot><slot name=\"label\"><label v-bind:for.once=\"id\" class=\"mdl-textfield__label\">{{label}}</label></slot><slot name=\"error\"><label v-if=\"error\" class=\"mdl-textfield__error\">{{error}}</label></slot></div></div>";

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(81)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/tooltip.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(82)
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
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propFill = __webpack_require__(10);
	
	var _propFill2 = _interopRequireDefault(_propFill);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    for: {
	      required: true,
	      type: String
	    },
	    large: {
	      fill: true
	    }
	  },
	  ready: function ready() {
	    componentHandler.upgradeElement(this.$el, 'MaterialTooltip');
	  },
	
	  mixins: [_propFill2.default]
	};

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "<div v-bind:for=\"for\" v-bind:class=\"{&quot;mdl-tooltip--large&quot;: large}\" class=\"mdl-tooltip\"><slot></slot></div>";

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(84)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/menu/menu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(85)
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
/* 84 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['for'],
	  ready: function ready() {
	    componentHandler.upgradeElement(this.$el, 'MaterialMenu');
	  }
	};

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = "<ul v-bind:for.once=\"for\" class=\"mdl-menu mdl-js-menu\"><slot></slot></ul>";

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(87)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/menu/menu-item.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(88)
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
/* 87 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = "<li class=\"mdl-menu__item\"><slot></slot></li>";

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(90)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/card.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(91)
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
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _button = __webpack_require__(55);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _anchorButton = __webpack_require__(59);
	
	var _anchorButton2 = _interopRequireDefault(_anchorButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var slots = ['title', 'subtitle', 'supportingText', 'media', 'actions', 'menu'];
	
	exports.default = {
	  computed: {
	    isActionsURL: function isActionsURL() {
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
	      default: true
	    },
	    menu: {
	      default: true
	    },
	    actions: {
	      type: String,
	      default: true
	    },
	    actionsTarget: {
	      default: '_self',
	      type: String
	    },
	    actionsText: String,
	    media: {
	      default: true,
	      type: String
	    },
	    subtitle: {
	      default: true,
	      type: String
	    },
	    supportingText: {
	      default: true,
	      type: String
	    }
	  },
	  compiled: function compiled() {
	    var _this = this;
	
	    slots.forEach(function (slot, pos) {
	      if (_this[slot] === true) {
	        var el = _this.$el.children[pos];
	        if (!el.attributes.getNamedItem('slot')) {
	          _this[slot] = '';
	        }
	      }
	    });
	  },
	
	  methods: {
	    triggerMenuEvent: function triggerMenuEvent() {
	      this.$dispatch(this.menu);
	    },
	    triggerActionsEvent: function triggerActionsEvent() {
	      this.$dispatch(this.actions);
	    }
	  },
	  components: {
	    mdlButton: _button2.default,
	    mdlAnchorButton: _anchorButton2.default
	  }
	};

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mdl-card mdl-shadow--2dp\"><slot name=\"title\" v-if=\"title\"><div class=\"mdl-card__title\"><h2 class=\"mdl-card__title-text\">{{title}}</h2></div></slot><slot name=\"subtitle\" v-if=\"subtitle\"><div class=\"mdl-card__subtitle-text\">{{subtitle}}</div></slot><slot name=\"supporting-text\" v-if=\"supportingText\"><div class=\"mdl-card__supporting-text\">{{supportingText}}</div></slot><slot name=\"media\" v-if=\"media\"><div class=\"mdl-card__media\"><img :src=\"media\"/></div></slot><!-- TODO this was an anchor--><slot name=\"actions\" v-if=\"actions\"><div class=\"mdl-card__actions mdl-card--border\"><mdl-anchor-button colored=\"colored\" v-if=\"isActionsURL\" v-bind:href=\"actions\" v-bind:target=\"actionsTarget\" class=\"mdl-js-ripple-effect\">{{actionsText}}</mdl-anchor-button><mdl-button colored=\"colored\" v-else=\"v-else\" class=\"mdl-js-ripple-effect\">{{actionsText}}</mdl-button></div></slot><!-- TODO some way of creating a menu or action--><slot name=\"menu\" v-if=\"menu\"><div class=\"mdl-card__menu\"><mdl-button icon=\"icon\" @click=\"triggerMenuEvent\" class=\"mdl-js-ripple-effect\"><i class=\"material-icons\">share</i></mdl-button></div></slot></div>";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-mdl.js.map
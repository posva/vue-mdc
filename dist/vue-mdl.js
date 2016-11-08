(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("VueMdl", [], factory);
	else if(typeof exports === 'object')
		exports["VueMdl"] = factory();
	else
		root["VueMdl"] = factory();
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
	exports.MdlTab = exports.MdlTabs = exports.MdlDialog = exports.MdlSelect = exports.MdlSnackbar = exports.MdlCard = exports.MdlMenuItem = exports.MdlMenu = exports.MdlTooltip = exports.MdlTextfield = exports.MdlSlider = exports.MdlSpinner = exports.MdlProgress = exports.MdlAnchorButton = exports.MdlButton = exports.MdlIconToggle = exports.MdlRadio = exports.MdlSwitch = exports.MdlBadge = exports.MdlCheckbox = exports.MdlRippleEffect = exports.Mdl = exports.directives = exports.components = undefined;
	
	var _keys = __webpack_require__(1);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _mdl = __webpack_require__(36);
	
	var _mdl2 = _interopRequireDefault(_mdl);
	
	var _rippleEffect = __webpack_require__(37);
	
	var _rippleEffect2 = _interopRequireDefault(_rippleEffect);
	
	var _checkbox = __webpack_require__(38);
	
	var _checkbox2 = _interopRequireDefault(_checkbox);
	
	var _radio = __webpack_require__(42);
	
	var _radio2 = _interopRequireDefault(_radio);
	
	var _badge = __webpack_require__(45);
	
	var _badge2 = _interopRequireDefault(_badge);
	
	var _button = __webpack_require__(46);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _anchorButton = __webpack_require__(50);
	
	var _anchorButton2 = _interopRequireDefault(_anchorButton);
	
	var _progress = __webpack_require__(53);
	
	var _progress2 = _interopRequireDefault(_progress);
	
	var _spinner = __webpack_require__(56);
	
	var _spinner2 = _interopRequireDefault(_spinner);
	
	var _iconToggle = __webpack_require__(59);
	
	var _iconToggle2 = _interopRequireDefault(_iconToggle);
	
	var _slider = __webpack_require__(62);
	
	var _slider2 = _interopRequireDefault(_slider);
	
	var _switch = __webpack_require__(65);
	
	var _switch2 = _interopRequireDefault(_switch);
	
	var _textfield = __webpack_require__(68);
	
	var _textfield2 = _interopRequireDefault(_textfield);
	
	var _tooltip = __webpack_require__(71);
	
	var _tooltip2 = _interopRequireDefault(_tooltip);
	
	var _menu = __webpack_require__(74);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _menuItem = __webpack_require__(77);
	
	var _menuItem2 = _interopRequireDefault(_menuItem);
	
	var _card = __webpack_require__(80);
	
	var _card2 = _interopRequireDefault(_card);
	
	var _snackbar = __webpack_require__(83);
	
	var _snackbar2 = _interopRequireDefault(_snackbar);
	
	var _select = __webpack_require__(86);
	
	var _select2 = _interopRequireDefault(_select);
	
	var _dialog = __webpack_require__(93);
	
	var _dialog2 = _interopRequireDefault(_dialog);
	
	var _tabs = __webpack_require__(100);
	
	var _tabs2 = _interopRequireDefault(_tabs);
	
	var _tab = __webpack_require__(106);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var components = exports.components = {
	  MdlCheckbox: _checkbox2.default,
	  MdlSwitch: _switch2.default,
	  MdlIconToggle: _iconToggle2.default,
	  MdlRadio: _radio2.default,
	  MdlProgress: _progress2.default,
	  MdlButton: _button2.default,
	  MdlAnchorButton: _anchorButton2.default,
	  MdlSpinner: _spinner2.default,
	  MdlSlider: _slider2.default,
	  MdlTextfield: _textfield2.default,
	  MdlTooltip: _tooltip2.default,
	  MdlMenu: _menu2.default,
	  MdlMenuItem: _menuItem2.default,
	  MdlCard: _card2.default,
	  MdlSnackbar: _snackbar2.default,
	  MdlSelect: _select2.default,
	  MdlDialog: _dialog2.default,
	  MdlTabs: _tabs2.default,
	  MdlTab: _tab2.default,
	  MdlBadge: _badge2.default
	};
	
	var directives = exports.directives = {
	  Mdl: _mdl2.default,
	  MdlRippleEffect: _rippleEffect2.default
	};
	
	exports.default = {
	  install: function install(Vue) {
	    (0, _keys2.default)(components).forEach(function (name) {
	      Vue.component(name, components[name]);
	    });
	    (0, _keys2.default)(directives).forEach(function (name) {
	      Vue.directive(name, directives[name]);
	    });
	  }
	};
	exports.Mdl = _mdl2.default;
	exports.MdlRippleEffect = _rippleEffect2.default;
	exports.MdlCheckbox = _checkbox2.default;
	exports.MdlBadge = _badge2.default;
	exports.MdlSwitch = _switch2.default;
	exports.MdlRadio = _radio2.default;
	exports.MdlIconToggle = _iconToggle2.default;
	exports.MdlButton = _button2.default;
	exports.MdlAnchorButton = _anchorButton2.default;
	exports.MdlProgress = _progress2.default;
	exports.MdlSpinner = _spinner2.default;
	exports.MdlSlider = _slider2.default;
	exports.MdlTextfield = _textfield2.default;
	exports.MdlTooltip = _tooltip2.default;
	exports.MdlMenu = _menu2.default;
	exports.MdlMenuItem = _menuItem2.default;
	exports.MdlCard = _card2.default;
	exports.MdlSnackbar = _snackbar2.default;
	exports.MdlSelect = _select2.default;
	exports.MdlDialog = _dialog2.default;
	exports.MdlTabs = _tabs2.default;
	exports.MdlTab = _tab2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = __webpack_require__(23).Object.keys;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(4)
	  , $keys    = __webpack_require__(6);
	
	__webpack_require__(21)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(5);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(7)
	  , enumBugKeys = __webpack_require__(20);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(8)
	  , toIObject    = __webpack_require__(9)
	  , arrayIndexOf = __webpack_require__(12)(false)
	  , IE_PROTO     = __webpack_require__(16)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(10)
	  , defined = __webpack_require__(5);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(11);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(9)
	  , toLength  = __webpack_require__(13)
	  , toIndex   = __webpack_require__(15);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(14)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(14)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(17)('keys')
	  , uid    = __webpack_require__(19);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(18)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

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

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(22)
	  , core    = __webpack_require__(23)
	  , fails   = __webpack_require__(32);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(18)
	  , core      = __webpack_require__(23)
	  , ctx       = __webpack_require__(24)
	  , hide      = __webpack_require__(26)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 23 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(25);
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
/* 25 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(27)
	  , createDesc = __webpack_require__(35);
	module.exports = __webpack_require__(31) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(28)
	  , IE8_DOM_DEFINE = __webpack_require__(30)
	  , toPrimitive    = __webpack_require__(34)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(31) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(29);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(31) && !__webpack_require__(32)(function(){
	  return Object.defineProperty(__webpack_require__(33)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(32)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(29)
	  , document = __webpack_require__(18).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(29);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 35 */
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
/* 36 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  bind: function bind(el) {
	    componentHandler.upgradeElements(el);
	  }
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  bind: function bind(el) {
	    el.classList.add('mdl-js-ripple-effect');
	  }
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(39)
	
	/* template */
	var __vue_template__ = __webpack_require__(41)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/toggles/checkbox.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-59130e27", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-59130e27", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] checkbox.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toggle = __webpack_require__(40);
	
	var _toggle2 = _interopRequireDefault(_toggle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mounted: function mounted() {
	    componentHandler.upgradeElements(this.$el);
	  },
	
	  mixins: [_toggle2.default]
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    disabled: { required: false },
	    id: String,
	    value: {
	      type: [Array, Boolean, Number],
	      required: true
	    },
	    val: { required: false }
	  },
	  data: function data() {
	    return {
	      checkedProxy: false
	    };
	  },
	
	  computed: {
	    checked: {
	      get: function get() {
	        return this.value;
	      },
	      set: function set(val) {
	        this.checkedProxy = val;
	      }
	    },
	    isChecked: function isChecked() {
	      return this.value instanceof Array ? this.value.indexOf(this.val) >= 0 : this.value;
	    },
	    cssClasses: function cssClasses() {
	      return {
	        'is-disabled': this.disabled,
	        'is-checked': this.isChecked
	      };
	    }
	  },
	  methods: {
	    fireChange: function fireChange(event) {
	      this.$emit('input', this.checkedProxy);
	    }
	  }
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('label', {
	    staticClass: "mdl-checkbox mdl-js-checkbox is-upgraded",
	    class: cssClasses,
	    attrs: {
	      "for": id
	    }
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (checked),
	      expression: "checked"
	    }],
	    staticClass: "mdl-checkbox__input",
	    attrs: {
	      "type": "checkbox",
	      "id": id,
	      "disabled": disabled
	    },
	    domProps: {
	      "value": val,
	      "checked": Array.isArray(checked) ? _i(checked, val) > -1 : _q(checked, true)
	    },
	    on: {
	      "change": [function($event) {
	        var $$a = checked,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = val,
	            $$i = _i($$a, $$v);
	          if ($$c) {
	            $$i < 0 && (checked = $$a.concat($$v))
	          } else {
	            $$i > -1 && (checked = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          checked = $$c
	        }
	      }, fireChange]
	    }
	  }), " ", _h('span', {
	    staticClass: "mdl-checkbox__label"
	  }, [_t("default")])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-59130e27", module.exports)
	  }
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(43)
	
	/* template */
	var __vue_template__ = __webpack_require__(44)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/toggles/radio.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3842db47", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3842db47", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] radio.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    name: String,
	    disabled: { required: false },
	    id: String,
	    value: {
	      type: [String, Number],
	      required: true
	    },
	    val: { required: true }
	  },
	  computed: {
	    checked: {
	      get: function get() {
	        return this.value;
	      },
	      set: function set(val) {
	        this.checkedProxy = val;
	      }
	    },
	    isChecked: function isChecked() {
	      return this.value === this.val;
	    },
	    cssClasses: function cssClasses() {
	      return {
	        'is-disabled': this.disabled,
	        'is-checked': this.isChecked
	      };
	    }
	  },
	  mounted: function mounted() {
	    componentHandler.upgradeElements(this.$el);
	  },
	
	  methods: {
	    fireChange: function fireChange(event) {
	      this.$emit('input', this.checkedProxy);
	    }
	  }
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('label', {
	    staticClass: "mdl-radio mdl-js-radio is-upgraded",
	    class: cssClasses,
	    attrs: {
	      "for": id
	    }
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (checked),
	      expression: "checked"
	    }],
	    staticClass: "mdl-radio__button",
	    attrs: {
	      "type": "radio",
	      "id": id,
	      "name": name,
	      "disabled": disabled
	    },
	    domProps: {
	      "value": val,
	      "checked": _q(checked, val)
	    },
	    on: {
	      "change": [function($event) {
	        checked = val
	      }, fireChange]
	    }
	  }), " ", _h('span', {
	    staticClass: "mdl-radio__label"
	  }, [_t("default")])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3842db47", module.exports)
	  }
	}

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function shouldAddProp(_ref) {
	  var hide = _ref.hide,
	      badge = _ref.badge;
	
	  return !hide && badge;
	}
	
	exports.default = {
	  functional: true,
	  props: {
	    badge: [String, Number],
	    overlap: [Boolean, String],
	    noBackground: [Boolean, String],
	    hide: Boolean
	  },
	  render: function render(h, context) {
	    if (context.children.length !== 1) {
	      console.error('MdlBadge must have exactly one child');
	    }
	
	    var child = context.children[0];
	
	    if (!child.elm) {
	      child.data = child.data || {};
	
	      child.data.staticClass = child.data.staticClass || '';
	      child.data.staticClass += ' mdl-badge';
	      if (context.props.overlap) child.data.staticClass += ' mdl-badge--overlap';
	      if (context.props.noBackground) child.data.staticClass += ' mdl-badge--no-background';
	
	      child.data.attrs = child.data.attrs || {};
	      if (shouldAddProp(context.props)) {
	        child.data.attrs['data-badge'] = context.props.badge;
	      }
	    } else {
	      child.elm.removeAttribute('data-badge');
	      if (shouldAddProp(context.props)) {
	        child.elm.dataset.badge = context.props.badge;
	      }
	
	      child.elm.classList.remove('mdl-badge--no-background');
	      if (context.props.noBackground) {
	        child.elm.classList.add('mdl-badge--no-background');
	      }
	
	      child.elm.classList.remove('mdl-badge--overlap');
	      if (context.props.overlap) {
	        child.elm.classList.add('mdl-badge--overlap');
	      }
	    }
	
	    return child;
	  }
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(47)
	
	/* template */
	var __vue_template__ = __webpack_require__(49)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/button.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-22205eb4", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-22205eb4", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] button.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _button = __webpack_require__(48);
	
	var _button2 = _interopRequireDefault(_button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_button2.default]
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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
	    disabled: Boolean,
	    icon: {
	      required: false
	    },
	    accent: Boolean,
	    primary: Boolean,
	    miniFab: Boolean,
	    fab: Boolean,
	    raised: Boolean,
	    colored: Boolean
	  },
	  mounted: function mounted() {
	    componentHandler.upgradeElement(this.$el);
	  }
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('button', {
	    staticClass: "mdl-button mdl-js-button",
	    class: cssClasses,
	    attrs: {
	      "disabled": disabled
	    }
	  }, [_t("default", [(icon) ? _h('i', {
	    staticClass: "material-icons"
	  }, [_s(icon)]) : _e()])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-22205eb4", module.exports)
	  }
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(51)
	
	/* template */
	var __vue_template__ = __webpack_require__(52)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/anchor-button.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7979d0f4", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-7979d0f4", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] anchor-button.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _button = __webpack_require__(48);
	
	var _button2 = _interopRequireDefault(_button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_button2.default]
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('a', {
	    staticClass: "mdl-button mdl-js-button",
	    class: cssClasses,
	    attrs: {
	      "disabled": disabled
	    }
	  }, [_t("default", [(icon) ? _h('i', {
	    staticClass: "material-icons"
	  }, [_s(icon)]) : _e()])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-7979d0f4", module.exports)
	  }
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(54)
	
	/* template */
	var __vue_template__ = __webpack_require__(55)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/progress.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-235def21", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-235def21", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] progress.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    progress: {
	      required: false
	    },
	    buffer: {
	      required: false
	    },
	    indeterminate: Boolean
	  },
	  mounted: function mounted() {
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
	  }
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "mdl-progress mdl-js-progress",
	    class: {
	      'mdl-progress__indeterminate': indeterminate
	    }
	  })
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-235def21", module.exports)
	  }
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(57)
	
	/* template */
	var __vue_template__ = __webpack_require__(58)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/spinner.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-04226856", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-04226856", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] spinner.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    active: {
	      default: true,
	      type: Boolean
	    },
	    singleColor: Boolean
	  },
	  mounted: function mounted() {
	    componentHandler.upgradeElement(this.$el, 'MaterialSpinner');
	  }
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "mdl-spinner mdl-js-spinner",
	    class: {
	      'mdl-spinner--single-color': singleColor, 'is-active': active
	    }
	  })
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-04226856", module.exports)
	  }
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(60)
	
	/* template */
	var __vue_template__ = __webpack_require__(61)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/toggles/icon-toggle.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-15cede18", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-15cede18", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] icon-toggle.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toggle = __webpack_require__(40);
	
	var _toggle2 = _interopRequireDefault(_toggle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    icon: {
	      required: true,
	      type: String
	    }
	  },
	  mounted: function mounted() {
	    componentHandler.upgradeElements(this.$el);
	  },
	
	  mixins: [_toggle2.default]
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('label', {
	    staticClass: "mdl-icon-toggle mdl-js-icon-toggle is-upgraded",
	    class: cssClasses,
	    attrs: {
	      "for": id
	    }
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (checked),
	      expression: "checked"
	    }],
	    staticClass: "mdl-icon-toggle__input",
	    attrs: {
	      "type": "checkbox",
	      "id": id,
	      "disabled": disabled
	    },
	    domProps: {
	      "value": val,
	      "checked": Array.isArray(checked) ? _i(checked, val) > -1 : _q(checked, true)
	    },
	    on: {
	      "change": [function($event) {
	        var $$a = checked,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = val,
	            $$i = _i($$a, $$v);
	          if ($$c) {
	            $$i < 0 && (checked = $$a.concat($$v))
	          } else {
	            $$i > -1 && (checked = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          checked = $$c
	        }
	      }, fireChange]
	    }
	  }), " ", _h('i', {
	    staticClass: "mdl-icon-toggle__label material-icons"
	  }, [_s(icon)])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-15cede18", module.exports)
	  }
	}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(63)
	
	/* template */
	var __vue_template__ = __webpack_require__(64)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/slider.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1b7fb2d5", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1b7fb2d5", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] slider.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 63 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  computed: {
	    model: function model() {
	      return this.value;
	    },
	    lowerBackgroundStyle: function lowerBackgroundStyle() {
	      return {
	        flex: this.relativeValue + ' 1 0%'
	      };
	    },
	    upperBackgroundStyle: function upperBackgroundStyle() {
	      return {
	        flex: 1 - this.relativeValue + ' 1 0%'
	      };
	    },
	    relativeValue: function relativeValue() {
	      var val = Math.round((this.value - this.min) / this.step) * this.step;
	      return val / (this.max - this.min);
	    }
	  },
	  props: {
	    value: {
	      type: Number,
	      required: true
	    },
	    step: {
	      type: Number,
	      default: 1
	    },
	    min: {
	      type: Number,
	      default: 0
	    },
	    max: {
	      type: Number,
	      required: true
	    },
	    disabled: {
	      required: false
	    }
	  },
	  methods: {
	    onInput: function onInput(event) {
	      this.$emit('input', Number(event.target.value));
	    }
	  },
	  mounted: function mounted() {
	    return;
	  }
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "mdl-slider__container"
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (model),
	      expression: "model"
	    }],
	    ref: "input",
	    staticClass: "mdl-slider mdl-js-slider is-upgraded",
	    attrs: {
	      "type": "range",
	      "min": min,
	      "max": max,
	      "step": step,
	      "data-upgraded": ",MaterialSlider",
	      "disabled": disabled
	    },
	    domProps: {
	      "value": _s(model)
	    },
	    on: {
	      "input": [function($event) {
	        model = $event.target.value
	      }, onInput]
	    }
	  }), " ", _h('div', {
	    staticClass: "mdl-slider__background-flex"
	  }, [_h('div', {
	    staticClass: "mdl-slider__background-lower",
	    style: (lowerBackgroundStyle)
	  }), " ", _h('div', {
	    staticClass: "mdl-slider__background-upper",
	    style: (upperBackgroundStyle)
	  })])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1b7fb2d5", module.exports)
	  }
	}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(66)
	
	/* template */
	var __vue_template__ = __webpack_require__(67)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/toggles/switch.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-83b727d0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-83b727d0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] switch.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toggle = __webpack_require__(40);
	
	var _toggle2 = _interopRequireDefault(_toggle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mounted: function mounted() {
	    componentHandler.upgradeElements(this.$el);
	  },
	
	  mixins: [_toggle2.default]
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('label', {
	    staticClass: "mdl-switch mdl-js-switch is-upgraded",
	    class: cssClasses,
	    attrs: {
	      "for": id
	    }
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (checked),
	      expression: "checked"
	    }],
	    staticClass: "mdl-switch__input",
	    attrs: {
	      "type": "checkbox",
	      "id": id,
	      "disabled": disabled
	    },
	    domProps: {
	      "value": val,
	      "checked": Array.isArray(checked) ? _i(checked, val) > -1 : _q(checked, true)
	    },
	    on: {
	      "change": [function($event) {
	        var $$a = checked,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = val,
	            $$i = _i($$a, $$v);
	          if ($$c) {
	            $$i < 0 && (checked = $$a.concat($$v))
	          } else {
	            $$i > -1 && (checked = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          checked = $$c
	        }
	      }, fireChange]
	    }
	  }), " ", _h('span', {
	    staticClass: "mdl-switch__label"
	  }, [_t("default")])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-83b727d0", module.exports)
	  }
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(69)
	
	/* template */
	var __vue_template__ = __webpack_require__(70)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/textfield.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-00ca46a9", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-00ca46a9", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] textfield.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 69 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    maxlength: {
	      required: false
	    },
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
	    disabled: {
	      type: [Boolean, String],
	      fill: true,
	      required: false,
	      default: false
	    },
	    required: {
	      type: [Boolean, String],
	      fill: true,
	      required: false,
	      default: false
	    },
	    readonly: {
	      type: [Boolean, String],
	      fill: true,
	      required: false,
	      default: false
	    },
	    label: String,
	    pattern: String,
	    error: String,
	    textarea: Boolean,
	    floatingLabel: [Boolean, String]
	  },
	  computed: {
	    displayLabel: function displayLabel() {
	      return this.label || this.floatingLabel;
	    },
	    isDirty: function isDirty() {
	      return '' + this.value;
	    }
	  },
	  methods: {
	    fireInputEvent: function fireInputEvent(event) {
	      this.$emit('input', event.target.value);
	    }
	  },
	  mounted: function mounted() {
	    componentHandler.upgradeElement(this.$el);
	  }
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "mdl-textfield mdl-js-textfield",
	    class: {
	      'mdl-textfield--floating-label': floatingLabel, 'mdl-textfield--expandable': expandable, 'is-dirty': isDirty, 'is-disabled': disabled
	    }
	  }, [(expandable) ? _t("expandable-button", [_h('label', {
	    staticClass: "mdl-button mdl-js-button mdl-button--icon",
	    attrs: {
	      "for": id
	    }
	  }, [_h('i', {
	    staticClass: "material-icons"
	  }, [_s(expandable)])])]) : _e(), " ", _h('div', {
	    class: {
	      'mdl-textfield__expandable-holder': expandable
	    }
	  }, [(textarea) ? _t("textarea", [_h('textarea', {
	    staticClass: "mdl-textfield__input",
	    attrs: {
	      "type": "text",
	      "required": required,
	      "id": id,
	      "rows": rows,
	      "maxlength": maxlength
	    },
	    domProps: {
	      "value": value
	    },
	    on: {
	      "input": fireInputEvent
	    }
	  })]) : _t("input", [_h('input', {
	    staticClass: "mdl-textfield__input",
	    attrs: {
	      "type": type,
	      "id": id,
	      "pattern": pattern,
	      "disabled": disabled,
	      "required": required,
	      "readonly": readonly,
	      "maxlength": maxlength
	    },
	    domProps: {
	      "value": value
	    },
	    on: {
	      "input": fireInputEvent
	    }
	  })]), " ", " ", _t("label", [_h('label', {
	    staticClass: "mdl-textfield__label",
	    attrs: {
	      "for": id
	    }
	  }, [_s(displayLabel)])]), " ", _t("error", [(error) ? _h('label', {
	    staticClass: "mdl-textfield__error"
	  }, [_s(error)]) : _e()])])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-00ca46a9", module.exports)
	  }
	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(72)
	
	/* template */
	var __vue_template__ = __webpack_require__(73)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/tooltip.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-e7023682", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-e7023682", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tooltip.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 72 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    target: {
	      required: true,
	      type: String
	    },
	    large: Boolean
	  },
	  mounted: function mounted() {
	    componentHandler.upgradeElement(this.$el, 'MaterialTooltip');
	  }
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "mdl-tooltip",
	    class: {
	      'mdl-tooltip--large': large
	    },
	    attrs: {
	      "for": target
	    }
	  }, [_t("default")])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-e7023682", module.exports)
	  }
	}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(75)
	
	/* template */
	var __vue_template__ = __webpack_require__(76)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/menu/menu.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-67b9a9cb", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-67b9a9cb", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] menu.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 75 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['target'],
	  mounted: function mounted() {
	    componentHandler.upgradeElement(this.$el, 'MaterialMenu');
	  }
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('ul', {
	    staticClass: "mdl-menu mdl-js-menu",
	    attrs: {
	      "for": target
	    }
	  }, [_t("default")])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-67b9a9cb", module.exports)
	  }
	}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(78)
	
	/* template */
	var __vue_template__ = __webpack_require__(79)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/menu/menu-item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-37cc8005", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-37cc8005", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] menu-item.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 78 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('li', {
	    staticClass: "mdl-menu__item"
	  }, [_t("default")])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-37cc8005", module.exports)
	  }
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(81)
	
	/* template */
	var __vue_template__ = __webpack_require__(82)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/card.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-46fd66f8", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-46fd66f8", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] card.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _button = __webpack_require__(46);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _anchorButton = __webpack_require__(50);
	
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
	    title: String,
	    menu: String,
	    actions: String,
	    actionsTarget: {
	      default: '_self',
	      type: String
	    },
	    actionsText: String,
	    media: String,
	    subtitle: String,
	    supportingText: String
	  },
	  mounted: function mounted() {
	    var _this = this;
	
	    slots.forEach(function (slot, pos) {
	      if (_this[slot] === true) {
	        var el = _this.$el.children[pos];
	        if (!el || !_this.$el.attributes.getNamedItem('slot')) {
	          _this[slot] = '';
	        }
	      }
	    });
	  },
	
	  methods: {
	    triggerMenuEvent: function triggerMenuEvent() {
	      this.$emit(this.menu);
	    },
	    triggerActionsEvent: function triggerActionsEvent() {
	      this.$emit(this.actions);
	    }
	  },
	  components: {
	    mdlButton: _button2.default,
	    mdlAnchorButton: _anchorButton2.default
	  }
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "mdl-card mdl-shadow--2dp"
	  }, [(title) ? _t("title", [_h('div', {
	    staticClass: "mdl-card__title"
	  }, [_h('h2', {
	    staticClass: "mdl-card__title-text"
	  }, [_s(title)])])]) : _e(), (subtitle) ? _t("subtitle", [_h('div', {
	    staticClass: "mdl-card__subtitle-text"
	  }, [_s(subtitle)])]) : _e(), (supportingText) ? _t("supporting-text", [_h('div', {
	    staticClass: "mdl-card__supporting-text"
	  }, [_s(supportingText)])]) : _e(), (media) ? _t("media", [_h('div', {
	    staticClass: "mdl-card__media"
	  }, [_h('img', {
	    attrs: {
	      "src": media
	    }
	  })])]) : _e(), (actions) ? _t("actions", [_h('div', {
	    staticClass: "mdl-card__actions mdl-card--border"
	  }, [(isActionsURL) ? _h('mdl-anchor-button', {
	    staticClass: "mdl-js-ripple-effect",
	    attrs: {
	      "colored": "colored",
	      "href": actions,
	      "target": actionsTarget
	    }
	  }, [_s(actionsText)]) : _h('mdl-button', {
	    staticClass: "mdl-js-ripple-effect",
	    attrs: {
	      "colored": "colored"
	    },
	    nativeOn: {
	      "click": function($event) {
	        triggerActionsEvent($event)
	      }
	    }
	  }, [_s(actionsText)])])]) : _e(), (menu) ? _t("menu", [_h('div', {
	    staticClass: "mdl-card__menu"
	  }, [_h('mdl-button', {
	    staticClass: "mdl-js-ripple-effect",
	    attrs: {
	      "icon": "icon"
	    },
	    nativeOn: {
	      "click": function($event) {
	        triggerMenuEvent($event)
	      }
	    }
	  }, [_m(0)])])]) : _e()])
	}},staticRenderFns: [function (){with(this) {
	  return _h('i', {
	    staticClass: "material-icons"
	  }, ["share"])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-46fd66f8", module.exports)
	  }
	}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(84)
	
	/* template */
	var __vue_template__ = __webpack_require__(85)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/snackbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-b5ac2c0e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-b5ac2c0e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] snackbar.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 84 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    displayOn: {
	      type: String,
	      required: true
	    },
	    eventSource: {
	      type: Object,
	      required: false,
	      default: function _default() {
	        return this.$root;
	      }
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;
	
	    componentHandler.upgradeElement(this.$el, 'MaterialSnackbar');
	    this.eventSource.$on(this.displayOn, function (snackbarConfig) {
	      _this.$el.MaterialSnackbar.showSnackbar(snackbarConfig);
	    });
	  }
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _m(0)
	}},staticRenderFns: [function (){with(this) {
	  return _h('div', {
	    staticClass: "mdl-snackbar mdl-js-snackbar",
	    attrs: {
	      "aria-live": "assertive",
	      "aria-atomic": "true",
	      "aria-relevant": "text"
	    }
	  }, [_h('div', {
	    staticClass: "mdl-snackbar__text"
	  }), _h('button', {
	    staticClass: "mdl-snackbar__action",
	    attrs: {
	      "type": "button"
	    }
	  })])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-b5ac2c0e", module.exports)
	  }
	}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(87)
	
	/* script */
	__vue_exports__ = __webpack_require__(91)
	
	/* template */
	var __vue_template__ = __webpack_require__(92)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/select.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-76dce970", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-76dce970", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] select.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(88);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(90)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-76dce970!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./select.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-76dce970!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./select.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(89)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.getmdl-select .mdl-icon-toggle__label {\n  float:right;\n  margin-top:-30px;\n  color: rgba(0, 0, 0, 0.4);\n}\n.getmdl-select.is-focused .mdl-icon-toggle__label {\n  color: #3f51b5;\n}\n.getmdl-select .mdl-menu__container {\n  width: 100% !important;\n}\n.getmdl-select .mdl-menu__container .mdl-menu {\n  width: 100%;\n}\n", ""]);
	
	// exports


/***/ },
/* 89 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 91 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {
	      name: ''
	    };
	  },
	
	
	  methods: {
	    selectValue: function selectValue(_ref) {
	      var value = _ref.value;
	
	      this.$emit('input', value);
	    },
	    setName: function setName() {
	      this.name = null;
	      for (var i = 0; i < this.optionsObject.length; ++i) {
	        var option = this.optionsObject[i];
	        if (this.value === option.value) this.name = option.name;
	      }
	      if (!this.name) this.name = this.value;
	      this.$refs.textfield.MaterialTextfield.change(this.name);
	      this.$refs.textfield.MaterialTextfield.boundBlurHandler();
	    },
	    open: function open() {
	      this.$refs.input.click();
	    }
	  },
	
	  computed: {
	    optionsObject: function optionsObject() {
	      if (this.options && this.options.length !== undefined) {
	        return this.options.map(function (option) {
	          if (typeof option === 'string') {
	            return {
	              name: option,
	              value: option
	            };
	          } else {
	            return option;
	          }
	        });
	      } else {
	        return [];
	      }
	    }
	  },
	  props: {
	    label: String,
	    id: {
	      required: true
	    },
	    value: {
	      required: false
	    },
	    options: {
	      required: true
	    }
	  },
	  mounted: function mounted() {
	    componentHandler.upgradeElements(this.$el);
	    this.setName();
	  },
	
	  watch: {
	    value: function value() {
	      this.setName();
	    }
	  }
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    ref: "textfield",
	    staticClass: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select"
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (name),
	      expression: "name"
	    }],
	    ref: "input",
	    staticClass: "mdl-textfield__input",
	    attrs: {
	      "id": id,
	      "type": "text",
	      "readonly": ""
	    },
	    domProps: {
	      "value": _s(name)
	    },
	    on: {
	      "keydown": function($event) {
	        if ($event.keyCode !== 13 && $event.keyCode !== 32) return;
	        open($event)
	      },
	      "input": function($event) {
	        if ($event.target.composing) return;
	        name = $event.target.value
	      }
	    }
	  }), " ", _h('label', {
	    attrs: {
	      "for": id
	    }
	  }, [_m(0)]), " ", _h('label', {
	    staticClass: "mdl-textfield__label",
	    attrs: {
	      "for": id
	    }
	  }, [_s(label)]), " ", _h('ul', {
	    staticClass: "mdl-menu mdl-menu--bottom-left mdl-js-menu",
	    attrs: {
	      "for": id
	    }
	  }, [_l((optionsObject), function(option) {
	    return _h('li', {
	      staticClass: "mdl-menu__item",
	      on: {
	        "click": function($event) {
	          selectValue(option)
	        }
	      }
	    }, [_s(option.name)])
	  })])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('i', {
	    staticClass: "mdl-icon-toggle__label material-icons"
	  }, ["keyboard_arrow_down"])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-76dce970", module.exports)
	  }
	}

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(94)
	
	/* script */
	__vue_exports__ = __webpack_require__(96)
	
	/* template */
	var __vue_template__ = __webpack_require__(99)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/dialog.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-f1faa888", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-f1faa888", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] dialog.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(95);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(90)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-f1faa888!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dialog.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-f1faa888!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dialog.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(89)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mdl-dialog-container {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content:center;\n  align-items: center;\n  top:0;\n  left: 0;\n  z-index: 10000;\n  background: rgba(0,0,0,0.3);\n}\n.mdl-dialog-container .mdl-dialog {\n  background-color:white;\n  padding: 1em;\n  color: black;\n  width: initial;\n  min-width: 280px;\n}\n", ""]);
	
	// exports


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _button = __webpack_require__(46);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _focusTrap = __webpack_require__(97);
	
	var _focusTrap2 = _interopRequireDefault(_focusTrap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    mdlButton: _button2.default
	  },
	
	  computed: {
	    actionsClasses: function actionsClasses() {
	      return {
	        'mdl-dialog__actions--full-width': this.fullWidth
	      };
	    }
	  },
	
	  data: function data() {
	    return {
	      show: false
	    };
	  },
	
	
	  props: {
	    title: {
	      type: String
	    },
	    fullWidth: Boolean
	  },
	
	  mounted: function mounted() {
	    this._focusTrap = (0, _focusTrap2.default)(this.$el);
	  },
	
	
	  methods: {
	    open: function open() {
	      var _this = this;
	
	      this.show = true;
	      this.$nextTick(function () {
	        return _this._focusTrap.activate();
	      });
	      this.$emit('open');
	    },
	    close: function close() {
	      this.show = false;
	      this._focusTrap.deactivate();
	      this.$emit('close');
	    }
	  }
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var tabbable = __webpack_require__(98);
	
	var listeningFocusTrap = null;
	
	function focusTrap(element, userOptions) {
	  var tabbableNodes = [];
	  var nodeFocusedBeforeActivation = null;
	  var active = false;
	
	  var container = (typeof element === 'string')
	    ? document.querySelector(element)
	    : element;
	
	  var config = userOptions || {};
	  config.returnFocusOnDeactivate = (userOptions && userOptions.returnFocusOnDeactivate != undefined)
	    ? userOptions.returnFocusOnDeactivate
	    : true;
	  config.escapeDeactivates = (userOptions && userOptions.escapeDeactivates != undefined)
	    ? userOptions.escapeDeactivates
	    : true;
	
	  var trap = {
	    activate: activate,
	    deactivate: deactivate,
	    pause: removeListeners,
	    unpause: addListeners,
	  };
	
	  return trap;
	
	  function activate(activateOptions) {
	    var defaultedActivateOptions = {
	      onActivate: (activateOptions && activateOptions.onActivate !== undefined)
	        ? activateOptions.onActivate
	        : config.onActivate,
	    };
	
	    active = true;
	    nodeFocusedBeforeActivation = document.activeElement;
	
	    if (defaultedActivateOptions.onActivate) {
	      defaultedActivateOptions.onActivate();
	    }
	
	    addListeners();
	    return trap;
	  }
	
	  function deactivate(deactivateOptions) {
	    var defaultedDeactivateOptions = {
	      returnFocus: (deactivateOptions && deactivateOptions.returnFocus != undefined)
	        ? deactivateOptions.returnFocus
	        : config.returnFocusOnDeactivate,
	      onDeactivate: (deactivateOptions && deactivateOptions.onDeactivate !== undefined)
	        ? deactivateOptions.onDeactivate
	        : config.onDeactivate,
	    };
	
	    removeListeners();
	
	    if (defaultedDeactivateOptions.onDeactivate) {
	      defaultedDeactivateOptions.onDeactivate();
	    }
	
	    if (defaultedDeactivateOptions.returnFocus) {
	      setTimeout(function() {
	        tryFocus(nodeFocusedBeforeActivation);
	      }, 0);
	    }
	
	    active = false;
	    return this;
	  }
	
	  function addListeners() {
	    if (!active) return;
	
	    // There can be only one listening focus trap at a time
	    if (listeningFocusTrap) {
	      listeningFocusTrap.pause();
	    }
	    listeningFocusTrap = trap;
	
	    updateTabbableNodes();
	    tryFocus(firstFocusNode());
	    document.addEventListener('focus', checkFocus, true);
	    document.addEventListener('click', checkClick, true);
	    document.addEventListener('mousedown', checkPointerDown, true);
	    document.addEventListener('touchstart', checkPointerDown, true);
	    document.addEventListener('keydown', checkKey, true);
	
	    return trap;
	  }
	
	  function removeListeners() {
	    if (!active || listeningFocusTrap !== trap) return;
	
	    document.removeEventListener('focus', checkFocus, true);
	    document.removeEventListener('click', checkClick, true);
	    document.removeEventListener('mousedown', checkPointerDown, true);
	    document.removeEventListener('touchstart', checkPointerDown, true);
	    document.removeEventListener('keydown', checkKey, true);
	
	    listeningFocusTrap = null;
	
	    return trap;
	  }
	
	  function getNodeForOption(key) {
	    var node = config[key];
	    if (!node) {
	      return null;
	    }
	    if (typeof node === 'string') {
	      node = document.querySelector(node);
	      if (!node) {
	        throw new Error('`'+key+'` refers to no known node');
	      }
	    }
	    return node;
	  }
	
	  function firstFocusNode() {
	    var node = getNodeForOption('initialFocus') || tabbableNodes[0] || getNodeForOption('fallbackFocus');
	
	    if (!node) {
	      throw new Error('You can\'t have a focus-trap without at least one focusable element');
	    }
	
	    return node;
	  }
	
	  // This needs to be done on mousedown and touchstart instead of click
	  // so that it precedes the focus event
	  function checkPointerDown(e) {
	    if (config.clickOutsideDeactivates && !container.contains(e.target)) {
	      deactivate({ returnFocus: false });
	    }
	  }
	
	  function checkClick(e) {
	    if (config.clickOutsideDeactivates) return;
	    if (container.contains(e.target)) return;
	    e.preventDefault();
	    e.stopImmediatePropagation();
	  }
	
	  function checkFocus(e) {
	    if (container.contains(e.target)) return;
	    e.preventDefault();
	    e.stopImmediatePropagation();
	    // Checking for a blur method here resolves a Firefox issue (#15)
	    if (typeof e.target.blur === 'function') e.target.blur();
	  }
	
	  function checkKey(e) {
	    if (e.key === 'Tab' || e.keyCode === 9) {
	      handleTab(e);
	    }
	
	    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
	      deactivate();
	    }
	  }
	
	  function handleTab(e) {
	    e.preventDefault();
	    updateTabbableNodes();
	    var currentFocusIndex = tabbableNodes.indexOf(e.target);
	    var lastTabbableNode = tabbableNodes[tabbableNodes.length - 1];
	    var firstTabbableNode = tabbableNodes[0];
	
	    if (e.shiftKey) {
	      if (e.target === firstTabbableNode || tabbableNodes.indexOf(e.target) === -1) {
	        return tryFocus(lastTabbableNode);
	      }
	      return tryFocus(tabbableNodes[currentFocusIndex - 1]);
	    }
	
	    if (e.target === lastTabbableNode) return tryFocus(firstTabbableNode);
	
	    tryFocus(tabbableNodes[currentFocusIndex + 1]);
	  }
	
	  function updateTabbableNodes() {
	    tabbableNodes = tabbable(container);
	  }
	}
	
	function isEscapeEvent(e) {
	  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
	}
	
	function tryFocus(node) {
	  if (!node || !node.focus) return;
	  node.focus();
	  if (node.tagName.toLowerCase() === 'input') {
	    node.select();
	  }
	}
	
	module.exports = focusTrap;


/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = function(el) {
	  var basicTabbables = [];
	  var orderedTabbables = [];
	  var isHidden = createIsHidden();
	
	  var candidates = el.querySelectorAll('input, select, a[href], textarea, button, [tabindex]');
	
	  var candidate, candidateIndex;
	  for (var i = 0, l = candidates.length; i < l; i++) {
	    candidate = candidates[i];
	    candidateIndex = candidate.tabIndex;
	
	    if (
	      candidateIndex < 0
	      || (candidate.tagName === 'INPUT' && candidate.type === 'hidden')
	      || candidate.disabled
	      || isHidden(candidate)
	    ) {
	      continue;
	    }
	
	    if (candidateIndex === 0) {
	      basicTabbables.push(candidate);
	    } else {
	      orderedTabbables.push({
	        tabIndex: candidateIndex,
	        node: candidate,
	      });
	    }
	  }
	
	  var tabbableNodes = orderedTabbables
	    .sort(function(a, b) {
	      return a.tabIndex - b.tabIndex;
	    })
	    .map(function(a) {
	      return a.node
	    });
	
	  Array.prototype.push.apply(tabbableNodes, basicTabbables);
	
	  return tabbableNodes;
	}
	
	function createIsHidden() {
	  // Node cache must be refreshed on every check, in case
	  // the content of the element has changed
	  var nodeCache = [];
	
	  return function isHidden(node) {
	    if (node === document.documentElement) return false;
	
	    // Find the cached node (Array.prototype.find not available in IE9)
	    for (var i = 0, length = nodeCache.length; i < length; i++) {
	      if (nodeCache[i][0] === node) return nodeCache[i][1];
	    }
	
	    var result = false;
	    var style = window.getComputedStyle(node);
	    if (style.visibility === 'hidden' || style.display === 'none') {
	      result = true;
	    } else if (node.parentNode) {
	      result = isHidden(node.parentNode);
	    }
	
	    nodeCache.push([node, result]);
	
	    return result;
	  }
	}


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (show),
	      expression: "show"
	    }],
	    staticClass: "mdl-dialog-container"
	  }, [_h('div', {
	    staticClass: "mdl-dialog"
	  }, [_h('div', {
	    staticClass: "mdl-dialog__title"
	  }, [_s(title)]), " ", _h('div', {
	    staticClass: "mdl-dialog__content"
	  }, [_t("default")]), " ", _h('div', {
	    staticClass: "mdl-dialog__actions",
	    class: actionsClasses
	  }, [_t("actions", [_h('mdl-button', {
	    staticClass: "mdl-js-ripple-effect",
	    nativeOn: {
	      "click": function($event) {
	        $event.stopPropagation();
	        close($event)
	      }
	    }
	  }, ["Close"])])])])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-f1faa888", module.exports)
	  }
	}

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(101)
	
	/* template */
	var __vue_template__ = __webpack_require__(105)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/tabs/tabs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4b9415aa", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4b9415aa", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tabs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tabLink = __webpack_require__(102);
	
	var _tabLink2 = _interopRequireDefault(_tabLink);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function findTabIndex(tabs, id) {
	  for (var i = 0; i < tabs.length; ++i) {
	    if (tabs[i].id === id) {
	      return i;
	    }
	  }
	  return -1;
	}
	
	exports.default = {
	  props: {
	    value: {
	      required: false,
	      type: [String, Number]
	    },
	    noRippleEffect: {
	      type: Boolean,
	      required: false
	    }
	  },
	  data: function data() {
	    return {
	      tabs: []
	    };
	  },
	
	  methods: {
	    selectTab: function selectTab(_ref) {
	      var id = _ref.id;
	
	      this.$emit('input', id);
	    },
	    isSelected: function isSelected(_ref2) {
	      var id = _ref2.id;
	
	      return id === this.value;
	    },
	    addTab: function addTab(tab) {
	      this.tabs.push(tab);
	    },
	    updateTab: function updateTab(_ref3, tab) {
	      var id = _ref3.id;
	
	      var index = findTabIndex(this.tabs, id);
	      if (index > -1) this.tabs.splice(index, 1, tab);
	    },
	    removeTab: function removeTab(_ref4) {
	      var id = _ref4.id;
	
	      var index = findTabIndex(this.tabs, id);
	      if (index > -1) this.tabs.splice(index, 1);
	    }
	  },
	  components: { TabLink: _tabLink2.default }
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(103)
	
	/* template */
	var __vue_template__ = __webpack_require__(104)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/tabs/tab-link.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-192c3c5f", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-192c3c5f", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tab-link.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 103 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    tab: Object,
	    noRippleEffect: {
	      required: false
	    }
	  },
	  mounted: function mounted() {
	    componentHandler.upgradeElement(this.$refs.ripple, 'MaterialRipple');
	  }
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('a', {
	    staticClass: "mdl-tabs__tab",
	    attrs: {
	      "href": "#"
	    }
	  }, [_s(tab.title) + "\n  ", _h('span', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!noRippleEffect),
	      expression: "!noRippleEffect"
	    }],
	    ref: "ripple",
	    staticClass: "mdl-tabs__ripple-container mdl-js-ripple-effect"
	  }, [_m(0)])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('span', {
	    staticClass: "mdl-ripple"
	  })
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-192c3c5f", module.exports)
	  }
	}

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "mdl-tabs is-upgraded"
	  }, [_h('div', {
	    staticClass: "mdl-tabs__tab-bar"
	  }, [_l((tabs), function(tab) {
	    return _h('tab-link', {
	      key: tab.id,
	      staticClass: "mdl-tabs__tab",
	      class: {
	        'is-active': isSelected(tab)
	      },
	      attrs: {
	        "no-ripple-effect": noRippleEffect,
	        "tab": tab
	      },
	      nativeOn: {
	        "click": function($event) {
	          selectTab(tab)
	        }
	      }
	    })
	  })]), " ", " ", _t("default")])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-4b9415aa", module.exports)
	  }
	}

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(107)
	
	/* template */
	var __vue_template__ = __webpack_require__(115)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/posva/vue-mdl/src/tabs/tab.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-9751ea10", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-9751ea10", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tab.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(108);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function tabToOject(tab) {
	  return typeof tab === 'string' ? { id: tab, title: tab } : (0, _extends3.default)({ id: tab.id || tab.title }, tab);
	}
	
	exports.default = {
	  computed: {
	    selected: function selected() {
	      return this.$parent.isSelected(this.tabData);
	    },
	    id: function id() {
	      return typeof this.tab === 'string' ? this.tab : this.tab.id || this.tab.title;
	    },
	    tabData: function tabData() {
	      return tabToOject(this.tab);
	    }
	  },
	  props: {
	    tab: {
	      required: true,
	      type: [String, Object]
	    }
	  },
	  watch: {
	    tab: function tab(newTab, oldTab) {
	      this.$parent.updateTab(tabToOject(oldTab), this.tabData);
	    }
	  },
	  mounted: function mounted() {
	    this.$parent.addTab(this.tabData);
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.$parent.removeTab(this.tabData);
	  }
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(109);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(111);
	module.exports = __webpack_require__(23).Object.assign;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(22);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(112)});

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(6)
	  , gOPS     = __webpack_require__(113)
	  , pIE      = __webpack_require__(114)
	  , toObject = __webpack_require__(4)
	  , IObject  = __webpack_require__(10)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(32)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 113 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 114 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "mdl-tabs__panel",
	    class: {
	      'is-active': selected
	    }
	  }, [_t("default")])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-9751ea10", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-mdl.js.map
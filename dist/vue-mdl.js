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
	exports.MdlDialog = exports.MdlSelect = exports.MdlSnackbar = exports.MdlCard = exports.MdlMenuItem = exports.MdlMenu = exports.MdlTooltip = exports.MdlTextfield = exports.MdlSlider = exports.MdlSpinner = exports.MdlProgress = exports.MdlAnchorButton = exports.MdlButton = exports.MdlIconToggle = exports.MdlRadio = exports.MdlSwitch = exports.MdlCheckbox = exports.MdlRippleEffect = exports.MdlBadge = exports.Mdl = exports.directives = exports.components = undefined;
	
	var _keys = __webpack_require__(1);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _badge = __webpack_require__(36);
	
	var _badge2 = _interopRequireDefault(_badge);
	
	var _mdl = __webpack_require__(37);
	
	var _mdl2 = _interopRequireDefault(_mdl);
	
	var _rippleEffect = __webpack_require__(38);
	
	var _rippleEffect2 = _interopRequireDefault(_rippleEffect);
	
	var _checkbox = __webpack_require__(39);
	
	var _checkbox2 = _interopRequireDefault(_checkbox);
	
	var _radio = __webpack_require__(43);
	
	var _radio2 = _interopRequireDefault(_radio);
	
	var _button = __webpack_require__(69);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _anchorButton = __webpack_require__(73);
	
	var _anchorButton2 = _interopRequireDefault(_anchorButton);
	
	var _progress = __webpack_require__(76);
	
	var _progress2 = _interopRequireDefault(_progress);
	
	var _spinner = __webpack_require__(79);
	
	var _spinner2 = _interopRequireDefault(_spinner);
	
	var _iconToggle = __webpack_require__(82);
	
	var _iconToggle2 = _interopRequireDefault(_iconToggle);
	
	var _slider = __webpack_require__(85);
	
	var _slider2 = _interopRequireDefault(_slider);
	
	var _switch = __webpack_require__(88);
	
	var _switch2 = _interopRequireDefault(_switch);
	
	var _textfield = __webpack_require__(91);
	
	var _textfield2 = _interopRequireDefault(_textfield);
	
	var _tooltip = __webpack_require__(94);
	
	var _tooltip2 = _interopRequireDefault(_tooltip);
	
	var _menu = __webpack_require__(97);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _menuItem = __webpack_require__(100);
	
	var _menuItem2 = _interopRequireDefault(_menuItem);
	
	var _card = __webpack_require__(103);
	
	var _card2 = _interopRequireDefault(_card);
	
	var _snackbar = __webpack_require__(106);
	
	var _snackbar2 = _interopRequireDefault(_snackbar);
	
	var _select = __webpack_require__(109);
	
	var _select2 = _interopRequireDefault(_select);
	
	var _dialog = __webpack_require__(116);
	
	var _dialog2 = _interopRequireDefault(_dialog);
	
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
	  MdlDialog: _dialog2.default
	};
	
	var directives = exports.directives = {
	  Mdl: _mdl2.default,
	  MdlBadge: _badge2.default,
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
	exports.MdlBadge = _badge2.default;
	exports.MdlRippleEffect = _rippleEffect2.default;
	exports.MdlCheckbox = _checkbox2.default;
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

	var core = module.exports = {version: '2.3.0'};
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
/* 37 */
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
/* 38 */
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(40)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/toggles/checkbox.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/posva/vue-mdl/src/toggles/checkbox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toggle = __webpack_require__(41);
	
	var _toggle2 = _interopRequireDefault(_toggle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  ready: function ready() {
	    componentHandler.upgradeElements(this.$el);
	  },
	
	  mixins: [_toggle2.default]
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    checked: {
	      type: [Array, Boolean, Number],
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
	      if (this.checked instanceof Array) {
	        return this.checked.indexOf(this.value) >= 0;
	      } else {
	        return this.checked;
	      }
	    }
	  }
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "<label v-bind:for.once=\"id\" v-bind:class=\"{ &quot;is-disabled&quot;: disabled, &quot;is-checked&quot;: isChecked }\" class=\"mdl-checkbox mdl-js-checkbox\"><input v-bind:value=\"value\" type=\"checkbox\" v-bind:id.once=\"id\" v-model=\"checked\" v-bind:disabled=\"disabled\" class=\"mdl-checkbox__input\"/><span class=\"mdl-checkbox__label\"><slot></slot></span></label>";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(44)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/toggles/radio.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(68)
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propFill = __webpack_require__(45);
	
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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(1);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _getIterator2 = __webpack_require__(46);
	
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(47), __esModule: true };

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(48);
	__webpack_require__(63);
	module.exports = __webpack_require__(65);

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49);
	var global        = __webpack_require__(18)
	  , hide          = __webpack_require__(26)
	  , Iterators     = __webpack_require__(52)
	  , TO_STRING_TAG = __webpack_require__(61)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(50)
	  , step             = __webpack_require__(51)
	  , Iterators        = __webpack_require__(52)
	  , toIObject        = __webpack_require__(9);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(53)(Array, 'Array', function(iterated, kind){
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
/* 50 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(54)
	  , $export        = __webpack_require__(22)
	  , redefine       = __webpack_require__(55)
	  , hide           = __webpack_require__(26)
	  , has            = __webpack_require__(8)
	  , Iterators      = __webpack_require__(52)
	  , $iterCreate    = __webpack_require__(56)
	  , setToStringTag = __webpack_require__(60)
	  , getPrototypeOf = __webpack_require__(62)
	  , ITERATOR       = __webpack_require__(61)('iterator')
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
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
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
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(26);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(57)
	  , descriptor     = __webpack_require__(35)
	  , setToStringTag = __webpack_require__(60)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(26)(IteratorPrototype, __webpack_require__(61)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(28)
	  , dPs         = __webpack_require__(58)
	  , enumBugKeys = __webpack_require__(20)
	  , IE_PROTO    = __webpack_require__(16)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(33)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(59).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(27)
	  , anObject = __webpack_require__(28)
	  , getKeys  = __webpack_require__(6);
	
	module.exports = __webpack_require__(31) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18).document && document.documentElement;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(27).f
	  , has = __webpack_require__(8)
	  , TAG = __webpack_require__(61)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(17)('wks')
	  , uid        = __webpack_require__(19)
	  , Symbol     = __webpack_require__(18).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(8)
	  , toObject    = __webpack_require__(4)
	  , IE_PROTO    = __webpack_require__(16)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(64)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(53)(String, 'String', function(iterated){
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
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(14)
	  , defined   = __webpack_require__(5);
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(28)
	  , get      = __webpack_require__(66);
	module.exports = __webpack_require__(23).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(67)
	  , ITERATOR  = __webpack_require__(61)('iterator')
	  , Iterators = __webpack_require__(52);
	module.exports = __webpack_require__(23).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(11)
	  , TAG = __webpack_require__(61)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = "<label v-bind:for.once=\"id\" v-bind:class=\"{ &quot;is-disabled&quot;: disabled, &quot;is-checked&quot;: isChecked }\" class=\"mdl-radio mdl-js-radio\"><input v-bind:id.once=\"id\" type=\"radio\" v-bind:name.once=\"name\" v-bind:value=\"value\" v-model=\"checked\" v-bind:disabled=\"disabled\" class=\"mdl-radio__button\"/><span class=\"mdl-radio__label\"><slot></slot></span></label>";

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(70)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/button.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(72)
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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _button = __webpack_require__(71);
	
	var _button2 = _interopRequireDefault(_button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_button2.default]
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propFill = __webpack_require__(45);
	
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
/* 72 */
/***/ function(module, exports) {

	module.exports = "<button v-bind:disabled=\"disabled\" v-bind:class=\"cssClasses\" class=\"mdl-button mdl-js-button\"><slot><i v-if=\"icon\" class=\"material-icon\">{{icon}}</i></slot></button>";

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(74)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/anchor-button.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(75)
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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _button = __webpack_require__(71);
	
	var _button2 = _interopRequireDefault(_button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_button2.default]
	};

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = "<a v-bind:disabled=\"disabled\" v-bind:class=\"cssClasses\" class=\"mdl-button mdl-js-button\"><slot><i v-if=\"icon\" class=\"material-icon\">{{icon}}</i></slot></a>";

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(77)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/progress.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(78)
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
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propFill = __webpack_require__(45);
	
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
/* 78 */
/***/ function(module, exports) {

	module.exports = "<div v-bind:class=\"{ &quot;mdl-progress__indeterminate&quot;: indeterminate }\" class=\"mdl-progress mdl-js-progress\"></div>";

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(80)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/spinner.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(81)
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
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propFill = __webpack_require__(45);
	
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
/* 81 */
/***/ function(module, exports) {

	module.exports = "<div v-bind:class=\"{ &quot;mdl-spinner--single-color&quot;: singleColor, &quot;is-active&quot;: active }\" class=\"mdl-spinner mdl-js-spinner\"></div>";

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(83)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/toggles/icon-toggle.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(84)
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
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toggle = __webpack_require__(41);
	
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
/* 84 */
/***/ function(module, exports) {

	module.exports = "<label v-bind:for.once=\"id\" v-bind:class=\"{ &quot;is-disabled&quot;: disabled, &quot;is-checked&quot;: isChecked }\" class=\"mdl-icon-toggle mdl-js-icon-toggle\"><input v-bind:value=\"value\" type=\"checkbox\" v-bind:id.once=\"id\" v-model=\"checked\" v-bind:disabled=\"disabled\" class=\"mdl-icon-toggle__input\"/><i class=\"mdl-icon-toggle__label material-icons\">{{icon}}</i></label>";

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(86)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/slider.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(87)
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
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propFill = __webpack_require__(45);
	
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
/* 87 */
/***/ function(module, exports) {

	module.exports = "<input type=\"range\" v-model=\"value\" v-bind:min=\"min\" v-bind:max=\"max\" v-bind:step=\"step\" v-bind:disabled=\"disabled\" class=\"mdl-slider mdl-js-slider\"/>";

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(89)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/toggles/switch.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(90)
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
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toggle = __webpack_require__(41);
	
	var _toggle2 = _interopRequireDefault(_toggle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_toggle2.default],
	  ready: function ready() {
	    componentHandler.upgradeElements(this.$el);
	  }
	};

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = "<label v-bind:for.once=\"id\" v-bind:class=\"{ &quot;is-disabled&quot;: disabled, &quot;is-checked&quot;: isChecked }\" class=\"mdl-switch mdl-js-switch\"><input v-bind:value=\"value\" type=\"checkbox\" v-bind:id.once=\"id\" v-model=\"checked\" v-bind:disabled=\"disabled\" class=\"mdl-switch__input\"/><span class=\"mdl-switch__label\"><slot></slot></span></label>";

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(92)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/textfield.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(93)
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
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propFill = __webpack_require__(45);
	
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
	    disabled: {
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
	    textarea: {
	      fill: true
	    },
	    floatingLabel: {
	      required: false
	    }
	  },
	  computed: {
	    isDirty: function isDirty() {
	      return '' + this.value;
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
/* 93 */
/***/ function(module, exports) {

	module.exports = "<div v-bind:class=\"{&quot;mdl-textfield--floating-label&quot;: floatingLabel, &quot;mdl-textfield--expandable&quot;: expandable, &quot;is-dirty&quot;: isDirty, &quot;is-disabled&quot;: disabled}\" class=\"mdl-textfield mdl-js-textfield\"><slot v-if=\"expandable\" name=\"expandable-button\"><label v-bind:for.once=\"id\" class=\"mdl-button mdl-js-button mdl-button--icon\"><i class=\"material-icons\">{{expandable}}</i></label></slot><div v-bind:class=\"{&quot;mdl-textfield__expandable-holder&quot;: expandable}\"><slot v-if=\"textarea\" name=\"textarea\"><textarea type=\"text\" v-model=\"value\" v-bind:id.once=\"id\" v-bind:rows=\"rows\" class=\"mdl-textfield__input\"></textarea></slot><slot v-else=\"v-else\" name=\"input\"><input v-bind:type=\"type\" v-model=\"value\" v-bind:id.once=\"id\" v-bind:pattern=\"pattern\" v-bind:disabled=\"disabled\" v-bind:readonly=\"readonly\" class=\"mdl-textfield__input\"/></slot><slot name=\"label\"><label v-bind:for.once=\"id\" class=\"mdl-textfield__label\">{{label}}</label></slot><slot name=\"error\"><label v-if=\"error\" class=\"mdl-textfield__error\">{{error}}</label></slot></div></div>";

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(95)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/tooltip.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(96)
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
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propFill = __webpack_require__(45);
	
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
/* 96 */
/***/ function(module, exports) {

	module.exports = "<div v-bind:for=\"for\" v-bind:class=\"{&quot;mdl-tooltip--large&quot;: large}\" class=\"mdl-tooltip\"><slot></slot></div>";

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(98)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/menu/menu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(99)
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
/* 98 */
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
/* 99 */
/***/ function(module, exports) {

	module.exports = "<ul v-bind:for.once=\"for\" class=\"mdl-menu mdl-js-menu\"><slot></slot></ul>";

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(101)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/menu/menu-item.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(102)
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
/* 101 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = "<li class=\"mdl-menu__item\"><slot></slot></li>";

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(104)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/card.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(105)
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
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _button = __webpack_require__(69);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _anchorButton = __webpack_require__(73);
	
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
/* 105 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mdl-card mdl-shadow--2dp\"><slot name=\"title\" v-if=\"title\"><div class=\"mdl-card__title\"><h2 class=\"mdl-card__title-text\">{{title}}</h2></div></slot><slot name=\"subtitle\" v-if=\"subtitle\"><div class=\"mdl-card__subtitle-text\">{{subtitle}}</div></slot><slot name=\"supporting-text\" v-if=\"supportingText\"><div class=\"mdl-card__supporting-text\">{{supportingText}}</div></slot><slot name=\"media\" v-if=\"media\"><div class=\"mdl-card__media\"><img :src=\"media\"/></div></slot><!-- TODO this was an anchor--><slot name=\"actions\" v-if=\"actions\"><div class=\"mdl-card__actions mdl-card--border\"><mdl-anchor-button colored=\"colored\" v-if=\"isActionsURL\" v-bind:href=\"actions\" v-bind:target=\"actionsTarget\" class=\"mdl-js-ripple-effect\">{{actionsText}}</mdl-anchor-button><mdl-button colored=\"colored\" v-else=\"v-else\" class=\"mdl-js-ripple-effect\">{{actionsText}}</mdl-button></div></slot><!-- TODO some way of creating a menu or action--><slot name=\"menu\" v-if=\"menu\"><div class=\"mdl-card__menu\"><mdl-button icon=\"icon\" @click=\"triggerMenuEvent\" class=\"mdl-js-ripple-effect\"><i class=\"material-icons\">share</i></mdl-button></div></slot></div>";

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(107)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/snackbar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(108)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/posva/vue-mdl/src/snackbar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 107 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['displayOn'],
	  ready: function ready() {
	    var _this = this;
	
	    componentHandler.upgradeElement(this.$el, 'MaterialSnackbar');
	    this.$on(this.displayOn, function (snackarConfig) {
	      _this.$el.MaterialSnackbar.showSnackbar(snackarConfig);
	    });
	  }
	};

/***/ },
/* 108 */
/***/ function(module, exports) {

	module.exports = "<div aria-live=\"assertive\" aria-atomic=\"true\" aria-relevant=\"text\" class=\"mdl-snackbar mdl-js-snackbar\"><div class=\"mdl-snackbar__text\"></div><button type=\"button\" class=\"mdl-snackbar__action\"></button></div>";

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(110)
	__vue_script__ = __webpack_require__(114)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/select.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(115)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/posva/vue-mdl/src/select.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(111);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(113)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./select.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./select.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(112)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.getmdl-select .mdl-icon-toggle__label {\n  float:right;\n  margin-top:-30px;\n  color: rgba(0, 0, 0, 0.4);\n}\n\n.getmdl-select.is-focused .mdl-icon-toggle__label {\n  color: #3f51b5;\n}\n\n.getmdl-select .mdl-menu__container {\n  width: 100% !important;\n}\n.getmdl-select .mdl-menu__container .mdl-menu {\n  width: 100%;\n}\n", ""]);
	
	// exports


/***/ },
/* 112 */
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
/* 113 */
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
/* 114 */
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
	    selectValue: function selectValue(option) {
	      this.value = option.value;
	      this.name = option.name;
	      var event = new Event('change');
	      this.$el.dispatchEvent(event);
	    },
	    setName: function setName() {
	      for (var i = 0; i < this.optionsObject.length; ++i) {
	        var option = this.optionsObject[i];
	        if (this.value === option.value) this.name = option.name;
	      }
	      this.$els.textfield.MaterialTextfield.change(this.name);
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
	  ready: function ready() {
	    componentHandler.upgradeElements(this.$el);
	    this.setName();
	  },
	
	  watch: {
	    value: function value(val, oldVal) {
	      this.setName();
	    }
	  }
	};

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = "<div v-el:textfield=\"v-el:textfield\" class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select\"><input v-bind:id.once=\"id\" v-el:input=\"v-el:input\" v-model=\"name\" type=\"text\" readonly=\"\" tabindex=\"-1\" class=\"mdl-textfield__input\"/><label v-bind:for.once=\"id\"><i class=\"mdl-icon-toggle__label material-icons\">keyboard_arrow_down</i></label><label v-bind:for.once=\"id\" class=\"mdl-textfield__label\">{{label}}</label><ul v-bind:for.once=\"id\" class=\"mdl-menu mdl-menu--bottom-left mdl-js-menu\"><li v-for=\"option in optionsObject\" v-on:click=\"selectValue(option)\" class=\"mdl-menu__item\">{{option.name}}</li></ul></div>";

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(117)
	__vue_script__ = __webpack_require__(119)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/dialog.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(120)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/posva/vue-mdl/src/dialog.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(118);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(113)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./dialog.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./dialog.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(112)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mdl-dialog-container {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack:center;\n  -webkit-justify-content:center;\n      -ms-flex-pack:center;\n          justify-content:center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  top:0;\n  left: 0;\n  z-index: 10000;\n  background: rgba(0,0,0,0.3);\n}\n.mdl-dialog-container .mdl-dialog {\n  background-color:white;\n  padding: 1em;\n  color: black;\n  width: initial;\n  min-width: 280px;\n}\n", ""]);
	
	// exports


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propFill = __webpack_require__(45);
	
	var _propFill2 = _interopRequireDefault(_propFill);
	
	var _button = __webpack_require__(69);
	
	var _button2 = _interopRequireDefault(_button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    mdlButton: _button2.default
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
	    displayOn: {
	      required: true,
	      type: String
	    },
	    fullWidth: {
	      fill: true,
	      default: false
	    },
	    cancellable: {
	      fill: true,
	      default: false
	    }
	  },
	  ready: function ready() {
	    var _this = this;
	
	    this.eventsAdded = [];
	    this.$on(this.displayOn, function () {
	      for (var _len = arguments.length, callbacks = Array(_len), _key = 0; _key < _len; _key++) {
	        callbacks[_key] = arguments[_key];
	      }
	
	      _this.show = !_this.show;
	      var actions = _this.$els.actions.querySelectorAll('button, [data-action]');
	      _this.cancelAction = null;
	      if (_this.cancellable) {
	        _this.cancelAction = callbacks[actions.length] || callbacks[actions.length - 1];
	      }
	      Array.prototype.forEach.call(actions, function (action, i) {
	        var callback = void 0;
	        if (callbacks[i]) {
	          callback = function callback(event) {
	            event.stopPropagation();
	            var ret = callbacks[i]();
	            if (ret !== false) _this.close();
	          };
	        } else {
	          callback = function callback() {
	            return _this.close();
	          };
	        }
	        action.addEventListener('click', callback);
	        _this.eventsAdded.push({
	          el: action,
	          type: 'click',
	          fn: callback
	        });
	      });
	    });
	  },
	  destroyed: function destroyed() {
	    this.removeEventsListeners();
	  },
	
	  methods: {
	    noAction: function noAction() {},
	    cancel: function cancel() {
	      if (this.cancellable) {
	        if (this.cancelAction) this.cancelAction();
	        this.close();
	      }
	    },
	    close: function close() {
	      this.removeEventsListeners();
	      this.show = false;
	    },
	    removeEventsListeners: function removeEventsListeners() {
	      this.eventsAdded.forEach(function (event) {
	        event.el.removeEventListener(event.type, event.fn);
	      });
	      this.eventsAdded.length = 0;
	    }
	  },
	  mixins: [_propFill2.default]
	};

/***/ },
/* 120 */
/***/ function(module, exports) {

	module.exports = "<div v-show=\"show\" v-on:click.stop=\"cancel\" class=\"mdl-dialog-container\"><div v-on:click.stop=\"noAction\" class=\"mdl-dialog\"><div class=\"mdl-dialog__title\">{{title}}</div><div class=\"mdl-dialog__content\"><slot></slot></div><div v-el:actions=\"v-el:actions\" v-bind:class=\"{ &quot;mdl-dialog__actions--full-width&quot;: fullWidth }\" class=\"mdl-dialog__actions\"><slot name=\"actions\"><mdl-button class=\"mdl-js-ripple-effect\">Close</mdl-button></slot></div></div></div>";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-mdl.js.map
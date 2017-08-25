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
/*!*******************!*\
  !*** multi index ***!
  \*******************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./src/index.js */1);


/***/ }),
/* 1 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Examples = exports.Defaults = exports.Composite = exports.Walk = undefined;
	
	var _KeysMethod = __webpack_require__(/*! ./Default/KeysMethod */ 2);
	
	var _KeysMethod2 = _interopRequireDefault(_KeysMethod);
	
	var _LeafCondition = __webpack_require__(/*! ./Default/LeafCondition */ 3);
	
	var _LeafCondition2 = _interopRequireDefault(_LeafCondition);
	
	var _MutationMethod = __webpack_require__(/*! ./Default/MutationMethod */ 4);
	
	var _MutationMethod2 = _interopRequireDefault(_MutationMethod);
	
	var _ReducerMethod = __webpack_require__(/*! ./Default/ReducerMethod */ 5);
	
	var _ReducerMethod2 = _interopRequireDefault(_ReducerMethod);
	
	var _WalkFunction = __webpack_require__(/*! ./Example/WalkFunction */ 6);
	
	var _WalkFunction2 = _interopRequireDefault(_WalkFunction);
	
	var _Composite = __webpack_require__(/*! ./Composite */ 7);
	
	var _Composite2 = _interopRequireDefault(_Composite);
	
	var _Walk = __webpack_require__(/*! ./Walk */ 9);
	
	var _Walk2 = _interopRequireDefault(_Walk);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Defaults = { KeysMethod: _KeysMethod2.default, LeafCondition: _LeafCondition2.default, MutationMethod: _MutationMethod2.default, ReducerMethod: _ReducerMethod2.default };
	var Examples = { WalkFunction: _WalkFunction2.default };
	exports.Walk = _Walk2.default;
	exports.Composite = _Composite2.default;
	exports.Defaults = Defaults;
	exports.Examples = Examples;
	exports.default = _Walk2.default;

/***/ }),
/* 2 */
/*!***********************************!*\
  !*** ./src/Default/KeysMethod.js ***!
  \***********************************/
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var KeysMethod = function KeysMethod(data) {
	  return Object.keys(data);
	};
	exports.default = KeysMethod;

/***/ }),
/* 3 */
/*!**************************************!*\
  !*** ./src/Default/LeafCondition.js ***!
  \**************************************/
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var LeafCondition = function LeafCondition(data) {
	  return data === null || (typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object';
	};
	exports.default = LeafCondition;

/***/ }),
/* 4 */
/*!***************************************!*\
  !*** ./src/Default/MutationMethod.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _LeafCondition = __webpack_require__(/*! ./LeafCondition */ 3);
	
	var _LeafCondition2 = _interopRequireDefault(_LeafCondition);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MutationMethod = function MutationMethod(key) {
	    return function () {
	        for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
	            data[_key] = arguments[_key];
	        }
	
	        return data.map(function (argument) {
	            return _LeafCondition2.default.apply(undefined, data) || (typeof argument === 'undefined' ? 'undefined' : _typeof(argument)) !== 'object' || !argument.hasOwnProperty(key) ? undefined : argument[key];
	        });
	    };
	};
	
	exports.default = MutationMethod;

/***/ }),
/* 5 */
/*!**************************************!*\
  !*** ./src/Default/ReducerMethod.js ***!
  \**************************************/
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var ReducerMethod = {
	    add: function add(result, key, value) {
	        return Array.isArray(result) ? [].concat(_toConsumableArray(result), [value]) : _extends({}, result, _defineProperty({}, key, value));
	    },
	    init: function init(data) {
	        return Array.isArray(data) ? [] : {};
	    }
	};
	
	exports.default = ReducerMethod;

/***/ }),
/* 6 */
/*!*************************************!*\
  !*** ./src/Example/WalkFunction.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _index = __webpack_require__(/*! ../index */ 1);
	
	var WalkFunction = function WalkFunction() {
	    var indices = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0];
	    var parameters = arguments[1];
	    return (0, _index.Walk)(_extends({
	        walkMethod: function walkMethod(parameters) {
	            return WalkFunction(indices, parameters);
	        },
	        leafCondition: function leafCondition() {
	            for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
	                data[_key] = arguments[_key];
	            }
	
	            if (!_index.Defaults.LeafCondition.apply(_index.Defaults, data)) {
	                return false;
	            }
	            data.map(function (argument, i) {
	                if (argument !== undefined && indices.indexOf(i) !== -1 && typeof argument !== 'function') {
	                    throw {
	                        message: "Leaf data could be only function",
	                        data: argument,
	                        index: i
	                    };
	                }
	            });
	            return true;
	        }
	    }, parameters));
	};
	exports.default = WalkFunction;

/***/ }),
/* 7 */
/*!**************************!*\
  !*** ./src/Composite.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _InitDefault = __webpack_require__(/*! ./InitDefault */ 8);
	
	var _InitDefault2 = _interopRequireDefault(_InitDefault);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var Composite = function Composite(parameters) {
	    var defaults = (0, _InitDefault2.default)(parameters);
	    var reducerMethod = defaults.reducerMethod();
	    return function (leafCallback) {
	        return function () {
	            for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
	                data[_key] = arguments[_key];
	            }
	
	            return defaults.keysMethod().apply(undefined, data).reduce(function (result, key) {
	                var value = defaults.walkMethod()(parameters)(leafCallback).apply(undefined, _toConsumableArray(defaults.mutationMethod()(key).apply(undefined, data)));
	                return reducerMethod.add(result, key, value);
	            }, reducerMethod.init.apply(reducerMethod, data));
	        };
	    };
	};
	
	exports.default = Composite;

/***/ }),
/* 8 */
/*!****************************!*\
  !*** ./src/InitDefault.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Walk = __webpack_require__(/*! ./Walk */ 9);
	
	var _Walk2 = _interopRequireDefault(_Walk);
	
	var _Composite = __webpack_require__(/*! ./Composite */ 7);
	
	var _Composite2 = _interopRequireDefault(_Composite);
	
	var _LeafCondition = __webpack_require__(/*! ./Default/LeafCondition */ 3);
	
	var _LeafCondition2 = _interopRequireDefault(_LeafCondition);
	
	var _MutationMethod = __webpack_require__(/*! ./Default/MutationMethod */ 4);
	
	var _MutationMethod2 = _interopRequireDefault(_MutationMethod);
	
	var _KeysMethod = __webpack_require__(/*! ./Default/KeysMethod */ 2);
	
	var _KeysMethod2 = _interopRequireDefault(_KeysMethod);
	
	var _ReducerMethod = __webpack_require__(/*! ./Default/ReducerMethod */ 5);
	
	var _ReducerMethod2 = _interopRequireDefault(_ReducerMethod);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var InitDefault = function InitDefault(_ref) {
	    var _leafCondition = _ref.leafCondition,
	        _mutationMethod = _ref.mutationMethod,
	        _walkMethod = _ref.walkMethod,
	        _compositeMethod = _ref.compositeMethod,
	        _keysMethod = _ref.keysMethod,
	        _reducerMethod = _ref.reducerMethod;
	    return {
	        walkMethod: function walkMethod() {
	            return typeof _walkMethod === 'function' ? _walkMethod : _Walk2.default;
	        },
	        compositeMethod: function compositeMethod() {
	            return typeof _compositeMethod === 'function' ? _compositeMethod : _Composite2.default;
	        },
	        leafCondition: function leafCondition() {
	            return typeof _leafCondition === 'function' ? _leafCondition : _LeafCondition2.default;
	        },
	        mutationMethod: function mutationMethod() {
	            return typeof _mutationMethod === 'function' ? _mutationMethod : _MutationMethod2.default;
	        },
	        keysMethod: function keysMethod() {
	            return typeof _keysMethod === 'function' ? _keysMethod : _KeysMethod2.default;
	        },
	        reducerMethod: function reducerMethod() {
	            return (typeof _reducerMethod === 'undefined' ? 'undefined' : _typeof(_reducerMethod)) === 'object' && typeof _reducerMethod.add === 'function' && typeof _reducerMethod.init === 'function' ? _reducerMethod : _ReducerMethod2.default;
	        }
	    };
	};
	
	exports.default = InitDefault;

/***/ }),
/* 9 */
/*!*********************!*\
  !*** ./src/Walk.js ***!
  \*********************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _InitDefault = __webpack_require__(/*! ./InitDefault */ 8);
	
	var _InitDefault2 = _interopRequireDefault(_InitDefault);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Walk = function Walk(parameters) {
	    var defaults = (0, _InitDefault2.default)(parameters);
	    return function (leafCallback) {
	        return function () {
	            return defaults.leafCondition().apply(undefined, arguments) ? leafCallback.apply(undefined, arguments) : defaults.compositeMethod()(parameters)(leafCallback).apply(undefined, arguments);
	        };
	    };
	};
	exports.default = Walk;

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map
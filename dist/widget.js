/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_message__ = __webpack_require__(2);


var supportedAPI = ['init', 'message']; // enlist all methods supported by API (e.g. `mw('event', 'user-login');`)

/**
    The main entry of the application
    */

function app(window) {
  console.log('JS-Widget starting'); // set default configurations

  var configurations = {
    someDefaultConfiguration: false
  }; // all methods that were called till now and stored in queue
  // needs to be called now 

  var globalObject = window[window['JS-Widget']];
  var queue = globalObject.q;

  if (queue) {
    for (var i = 0; i < queue.length; i++) {
      if (queue[i][0].toLowerCase() == 'init') {
        configurations = extendObject(configurations, queue[i][1]);
        fetchConfig(configurations.configSourceUrl, function (fetchedConfig) {
          configurations = Object.assign(configurations, fetchedConfig);
          globalObject.configurations = configurations;
          Object(__WEBPACK_IMPORTED_MODULE_1__views_message__["a" /* show */])();
        });
        console.log('JS-Widget started', configurations);
        configurations.networkHandleId;
      } else apiHandler(queue[i][0], queue[i][1]);
    }
  } // override temporary (until the app loaded) handler
  // for widget's API calls


  globalObject = apiHandler;
  globalObject.configurations = configurations;
}

function fetchConfig(url, callback) {
  // Set up our HTTP request
  var xhr = new XMLHttpRequest(); // Setup our listener to process compeleted requests

  xhr.onreadystatechange = function () {
    // Only run if the request is complete
    if (xhr.readyState !== 4) return; // Process our return data

    if (xhr.status >= 200 && xhr.status < 300) {
      // What do when the request is successful
      try {
        var networkHandle = JSON.parse(xhr.responseText);
        Object(__WEBPACK_IMPORTED_MODULE_1__views_message__["a" /* show */])(networkHandle);
      } catch (err) {
        console.log(err);
        console.error('Error: failed to parse config object');
      }
    }
  }; // Create and send a GET request
  // The first argument is the post type (GET, POST, PUT, DELETE, etc.)
  // The second argument is the endpoint URL


  xhr.open('GET', url);
  xhr.send();
}
/**
    Method that handles all API calls
    */


function apiHandler(api, params) {
  if (!api) throw Error('API method required');
  api = api.toLowerCase();
  if (supportedAPI.indexOf(api) === -1) throw Error("Method ".concat(api, " is not supported"));
  console.log("Handling API call ".concat(api), params);

  switch (api) {
    // TODO: add API implementation
    case 'message':
      break;

    default:
      console.warn("No handler defined for ".concat(api));
  }
}

function extendObject(a, b) {
  for (var key in b) {
    if (b.hasOwnProperty(key)) a[key] = b[key];
  }

  return a;
}

app(window);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ping */
function ping() {
  return 'pong';
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = show;
/* unused harmony export close */
/* unused harmony export toggle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__message_html__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__message_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__message_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__message_css__);


var body;
function show(networkHandle) {
  body = document.getElementsByTagName('body')[0];
  var div = document.createElement('div');
  div.innerHTML = __WEBPACK_IMPORTED_MODULE_0__message_html___default.a.trim();
  body.appendChild(div);

  if (isMobile()) {
    addSmsOption(networkHandle.handle); // Showing SMS option only on mobile devices
  }

  var widget = document.getElementById('jsWidgetDialog');
  widget.addEventListener('click', toggle);
  body.addEventListener('click', close);
}
function close() {
  var optionContainer = document.getElementById('optionContainer');
  optionContainer.classList.add('closed');
}
function toggle(event) {
  event.stopPropagation();
  var optionContainer = document.getElementById('optionContainer');
  optionContainer.classList.toggle('closed');
}

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function addSmsOption(handle) {
  var smsOption = document.getElementById('smsOption');
  smsOption.classList.remove('hidden');
  smsOption.querySelector('#smsLink').href = "sms:".concat(handle);
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<div class=\"js-widget-dialog\" id=\"jsWidgetDialog\">\n  <svg width=\"30px\" height=\"30px\" viewBox=\"0 0 576 500\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n      <g id=\"comments-solid\" fill=\"#ffffff\" fill-rule=\"nonzero\">\n        <path d=\"M416,160 C416,71.6 322.9,0 208,0 C93.1,0 0,71.6 0,160 C0,194.3 14.1,225.9 38,252 C24.6,282.2 2.5,306.2 2.2,306.5 C2.66453526e-15,308.8 -0.6,312.2 0.7,315.2 C2,318.2 4.8,320 8,320 C44.6,320 74.9,307.7 96.7,295 C128.9,310.7 167,320 208,320 C322.9,320 416,248.4 416,160 Z M538,380 C561.9,354 576,322.3 576,288 C576,221.1 522.5,163.8 446.7,139.9 C447.6,146.5 448,153.2 448,160 C448,265.9 340.3,352 208,352 C197.2,352 186.7,351.2 176.3,350.1 C207.8,407.6 281.8,448 368,448 C409,448 447.1,438.8 479.3,423 C501.1,435.7 531.4,448 568,448 C571.2,448 574.1,446.1 575.3,443.2 C576.6,440.3 576,436.9 573.8,434.5 C573.5,434.2 551.4,410.3 538,380 Z\" id=\"Shape\"></path>\n      </g>\n    </g>\n  </svg>\n  <div id=\"optionContainer\" class=\"option-container closed\">\n    <ul>\n      <li class=\"sms-option option hidden\" id=\"smsOption\">\n        <a id=\"smsLink\">\n          <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 1000 1000\" enable-background=\"new 0 0 1000 1000\" xml:space=\"preserve\">\n            <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>\n            <g><g transform=\"translate(0.000000,511.000000) scale(0.100000,-0.100000)\"><path d=\"M1049.8,4983c-218.5-55.1-443.1-224.6-547.3-416.6C380,4339.8,386.1,4611.4,386.1,110.8c0-4500.6-6.1-4228.9,116.4-4455.6c65.3-118.4,230.7-281.8,355.3-343C1060-4792,990.6-4790,3510.4-4790c2603.5,0,2489.2-6.1,2713.8,128.6c226.7,134.8,379.8,381.9,412.5,663.7c10.2,85.8,16.3,759.6,14.3,1494.7l-6.1,1337.5l-402.3,6.1l-404.3,4.1v-592.2v-592.2H3520.6H1202.9V794.9v3134.5h2715.8c2472.8,0,2717.9,2,2730.2,32.7c6.1,18.4,2,118.4-8.2,224.6c-42.9,406.4-281.8,698.4-649.4,792.3c-106.2,28.6-410.4,32.7-2481,30.6C1709.3,5007.5,1127.4,5001.4,1049.8,4983z M3728.9-3193.1c175.6-89.8,269.5-245,271.6-439c0-140.9-38.8-245-128.6-336.9c-234.8-245-612.6-200.1-784.1,93.9c-75.6,126.6-79.6,336.9-10.2,467.6C3200-3176.8,3500.2-3076.7,3728.9-3193.1z\"/><path d=\"M3679.9,3367.8c-157.2-42.9-265.5-104.1-383.9-216.5c-122.5-116.4-200.1-249.1-245-416.6c-47-181.7-44.9-2413.6,2-2593.3c63.3-247.1,220.5-441,445.1-551.3c167.5-83.7,314.5-112.3,579.9-112.3h187.9v-518.7c0-318.6,8.2-543.2,22.5-577.9c53.1-140.9,157.2-183.8,290-116.4c36.8,18.4,332.8,298.1,657.5,622.8L5828-524.2l1541.7,6.1c1529.5,6.1,1541.7,6.1,1660.2,51.1c234.8,87.8,437,283.8,526.8,510.5l49,118.4l6.1,1233.4c6.1,1345.7,6.1,1337.5-114.3,1560.1c-61.3,114.4-228.7,279.8-347.1,339c-210.4,108.2-124.6,104.2-2842.5,102.1C4202.6,3396.4,3767.7,3390.3,3679.9,3367.8z M5015.3,2214.1c245.1-108.2,343-332.8,196-449.2c-106.2-83.7-226.7-42.9-300.2,98c-71.5,136.8-379.8,142.9-414.5,8.2c-18.4-73.5,22.5-98,279.8-169.5c265.5-71.5,353.3-112.3,437-194c208.3-208.3,118.5-579.9-171.5-708.6c-206.3-91.9-624.9-63.3-814.8,57.2c-147,91.9-228.7,302.2-163.4,422.7c12.3,22.5,53.1,53.1,89.8,69.4c106.2,42.9,183.8,6.1,245-116.4c59.2-116.4,138.8-163.4,273.6-169.5c122.5-2.1,224.6,40.8,238.9,104.1c20.4,81.7-38.8,118.4-294,189.9c-130.7,34.7-277.7,87.8-326.7,114.4c-226.7,132.7-271.6,424.7-91.9,622.8c130.7,145,251.2,183.8,530.9,173.6C4862.2,2261,4943.9,2246.7,5015.3,2214.1z M8282.5,2214.1c245-108.2,343-332.8,196-449.2c-106.2-83.7-226.7-42.9-300.2,98c-71.5,136.8-379.8,142.9-414.5,8.2c-18.4-73.5,22.5-98,279.7-169.5c265.5-71.5,353.3-112.3,437-194c212.4-210.3,116.4-588.1-181.7-714.7c-122.5-51-437-61.3-600.4-20.4c-171.5,44.9-259.3,100.1-330.8,214.4c-98,153.1-75.5,306.3,53.1,361.4c106.2,42.9,183.8,6.1,245-116.4c59.2-116.4,138.9-163.4,273.6-169.5c122.5-2.1,224.6,40.8,238.9,104.1c20.4,81.7-38.8,118.4-294,189.9c-130.7,34.7-277.7,87.8-326.7,114.4c-226.7,132.7-271.6,424.7-91.9,622.8c130.7,145,251.1,183.8,530.9,173.6C8129.4,2261,8211.1,2246.7,8282.5,2214.1z M6044.5,2207.9c69.4-53.1,100-140.9,179.7-504.4c44.9-208.3,87.8-412.5,96-455.4c6.1-42.9,16.3-75.6,18.4-71.5c4.1,4.1,44.9,177.6,91.9,388c149.1,682,140.9,669.8,443.2,669.8c175.6,0,196-4.1,240.9-51l51.1-49v-622.8V890.9l-53.1-63.3c-69.4-81.7-181.8-87.8-267.5-14.3l-57.2,49l4.1,508.5c2,277.7,0,498.2-4.1,486c-6.1-10.2-59.2-222.6-120.5-471.7c-61.3-247.1-124.6-475.8-136.8-506.4c-55.1-118.4-236.9-151.1-343.1-61.3c-75.5,63.3-108.2,161.3-230.7,694.3l-87.8,383.9l-6.1-512.5l-4.1-512.5l-55.1-53.1c-108.2-108.2-287.9-44.9-320.6,112.3c-20.4,100.1-14.3,1059.8,8.2,1151.7c30.6,132.7,73.5,153.1,314.5,153.1C5936.3,2232.4,6024.1,2224.3,6044.5,2207.9z\"/></g></g>\n          </svg>\n          <h2>SMS</h2>\n        </a>\n      <li>\n    </ul>\n  </div>\n</div>\n";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./message.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./message.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto&display=swap);", ""]);

// module
exports.push([module.i, ".js-widget-dialog{\n  position: fixed;\n  font-family: 'Roboto', sans-serif;\n  z-index: 10002;\n  background: black;\n  right: 25px;\n  bottom: 25px;\n  cursor: pointer;\n  margin: 0 0 0 -120px;\n  border-radius: 50%;\n  padding: 20px;\n  box-shadow: black 0 0 5px;\n}\n\n.option-container {\n  position: absolute;\n  bottom: 100%;\n\tright: 0;\n\ttransition: right 300ms ease-out;\n}\n\n.option-container.closed {\n\tright: -230px;\n}\n\n.option-container>ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.option {\n  margin-bottom: 25px;\n}\n\n.option h2 {\n  margin: 0;\n}\n\n.option svg {\n  height: 40px;\n\tpadding-right: 20px;\n}\n\n.option a {\n\tpadding: 10px 15px;\n  width: 200px;\n  border: 1px solid #000;\n  background-color: #fff;\n  font-weight: bold;\n  font-size: 16px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  box-sizing: border-box;\n  color: #000;\n  text-decoration: none;\n}\n\n.hidden {\n  display: none !important;\n}\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzgwZmRlZTIwZjhkYzMxNWU4ZWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tZXNzYWdlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21lc3NhZ2UuY3NzP2EzYzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21lc3NhZ2UuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyJdLCJuYW1lcyI6WyJzdXBwb3J0ZWRBUEkiLCJhcHAiLCJ3aW5kb3ciLCJjb25zb2xlIiwibG9nIiwiY29uZmlndXJhdGlvbnMiLCJzb21lRGVmYXVsdENvbmZpZ3VyYXRpb24iLCJnbG9iYWxPYmplY3QiLCJxdWV1ZSIsInEiLCJpIiwibGVuZ3RoIiwidG9Mb3dlckNhc2UiLCJleHRlbmRPYmplY3QiLCJmZXRjaENvbmZpZyIsImNvbmZpZ1NvdXJjZVVybCIsImZldGNoZWRDb25maWciLCJPYmplY3QiLCJhc3NpZ24iLCJzaG93IiwibmV0d29ya0hhbmRsZUlkIiwiYXBpSGFuZGxlciIsInVybCIsImNhbGxiYWNrIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwibmV0d29ya0hhbmRsZSIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImVyciIsImVycm9yIiwib3BlbiIsInNlbmQiLCJhcGkiLCJwYXJhbXMiLCJFcnJvciIsImluZGV4T2YiLCJ3YXJuIiwiYSIsImIiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsInBpbmciLCJib2R5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJodG1sIiwidHJpbSIsImFwcGVuZENoaWxkIiwiaXNNb2JpbGUiLCJhZGRTbXNPcHRpb24iLCJoYW5kbGUiLCJ3aWRnZXQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGUiLCJjbG9zZSIsIm9wdGlvbkNvbnRhaW5lciIsImNsYXNzTGlzdCIsImFkZCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInNtc09wdGlvbiIsInJlbW92ZSIsInF1ZXJ5U2VsZWN0b3IiLCJocmVmIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUcsQ0FBQyxNQUFELEVBQVMsU0FBVCxDQUFyQixDLENBQTBDOztBQUUxQzs7OztBQUdBLFNBQVNDLEdBQVQsQ0FBYUMsTUFBYixFQUFxQjtBQUNqQkMsU0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFEaUIsQ0FHakI7O0FBQ0EsTUFBSUMsY0FBYyxHQUFHO0FBQ2pCQyw0QkFBd0IsRUFBRTtBQURULEdBQXJCLENBSmlCLENBUWpCO0FBQ0E7O0FBQ0EsTUFBSUMsWUFBWSxHQUFHTCxNQUFNLENBQUNBLE1BQU0sQ0FBQyxXQUFELENBQVAsQ0FBekI7QUFDQSxNQUFJTSxLQUFLLEdBQUdELFlBQVksQ0FBQ0UsQ0FBekI7O0FBQ0EsTUFBSUQsS0FBSixFQUFXO0FBQ1AsU0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixLQUFLLENBQUNHLE1BQTFCLEVBQWtDRCxDQUFDLEVBQW5DLEVBQXVDO0FBQ25DLFVBQUlGLEtBQUssQ0FBQ0UsQ0FBRCxDQUFMLENBQVMsQ0FBVCxFQUFZRSxXQUFaLE1BQTZCLE1BQWpDLEVBQXlDO0FBQ3JDUCxzQkFBYyxHQUFHUSxZQUFZLENBQUNSLGNBQUQsRUFBaUJHLEtBQUssQ0FBQ0UsQ0FBRCxDQUFMLENBQVMsQ0FBVCxDQUFqQixDQUE3QjtBQUNBSSxtQkFBVyxDQUFDVCxjQUFjLENBQUNVLGVBQWhCLEVBQWlDLFVBQVNDLGFBQVQsRUFBdUI7QUFDbkVYLHdCQUFjLEdBQUdZLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjYixjQUFkLEVBQThCVyxhQUE5QixDQUFqQjtBQUNBVCxzQkFBWSxDQUFDRixjQUFiLEdBQThCQSxjQUE5QjtBQUNBYyw4RUFBSTtBQUNMLFNBSlksQ0FBWDtBQUtBaEIsZUFBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFBaUNDLGNBQWpDO0FBQ0FBLHNCQUFjLENBQUNlLGVBQWY7QUFDSCxPQVRELE1BV0lDLFVBQVUsQ0FBQ2IsS0FBSyxDQUFDRSxDQUFELENBQUwsQ0FBUyxDQUFULENBQUQsRUFBY0YsS0FBSyxDQUFDRSxDQUFELENBQUwsQ0FBUyxDQUFULENBQWQsQ0FBVjtBQUNQO0FBQ0osR0EzQmdCLENBNkJqQjtBQUNBOzs7QUFDQUgsY0FBWSxHQUFHYyxVQUFmO0FBQ0FkLGNBQVksQ0FBQ0YsY0FBYixHQUE4QkEsY0FBOUI7QUFDSDs7QUFHRCxTQUFTUyxXQUFULENBQXFCUSxHQUFyQixFQUEwQkMsUUFBMUIsRUFBb0M7QUFDbEM7QUFDQSxNQUFJQyxHQUFHLEdBQUcsSUFBSUMsY0FBSixFQUFWLENBRmtDLENBSWxDOztBQUNBRCxLQUFHLENBQUNFLGtCQUFKLEdBQXlCLFlBQVk7QUFFbkM7QUFDQSxRQUFJRixHQUFHLENBQUNHLFVBQUosS0FBbUIsQ0FBdkIsRUFBMEIsT0FIUyxDQUtuQzs7QUFDQSxRQUFJSCxHQUFHLENBQUNJLE1BQUosSUFBYyxHQUFkLElBQXFCSixHQUFHLENBQUNJLE1BQUosR0FBYSxHQUF0QyxFQUEyQztBQUN6QztBQUNBLFVBQUk7QUFDRixZQUFJQyxhQUFhLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXUCxHQUFHLENBQUNRLFlBQWYsQ0FBcEI7QUFDQWIsNEVBQUksQ0FBQ1UsYUFBRCxDQUFKO0FBQ0QsT0FIRCxDQUdFLE9BQU9JLEdBQVAsRUFBWTtBQUNoQjlCLGVBQU8sQ0FBQ0MsR0FBUixDQUFZNkIsR0FBWjtBQUNJOUIsZUFBTyxDQUFDK0IsS0FBUixDQUFjLHNDQUFkO0FBQ0Q7QUFDRjtBQUVGLEdBakJELENBTGtDLENBd0JsQztBQUNBO0FBQ0E7OztBQUNBVixLQUFHLENBQUNXLElBQUosQ0FBUyxLQUFULEVBQWdCYixHQUFoQjtBQUNBRSxLQUFHLENBQUNZLElBQUo7QUFDRDtBQUVEOzs7OztBQUdBLFNBQVNmLFVBQVQsQ0FBb0JnQixHQUFwQixFQUF5QkMsTUFBekIsRUFBaUM7QUFDN0IsTUFBSSxDQUFDRCxHQUFMLEVBQVUsTUFBTUUsS0FBSyxDQUFDLHFCQUFELENBQVg7QUFDVkYsS0FBRyxHQUFHQSxHQUFHLENBQUN6QixXQUFKLEVBQU47QUFFQSxNQUFJWixZQUFZLENBQUN3QyxPQUFiLENBQXFCSCxHQUFyQixNQUE4QixDQUFDLENBQW5DLEVBQXNDLE1BQU1FLEtBQUssa0JBQVdGLEdBQVgsdUJBQVg7QUFFdENsQyxTQUFPLENBQUNDLEdBQVIsNkJBQWlDaUMsR0FBakMsR0FBd0NDLE1BQXhDOztBQUVBLFVBQVFELEdBQVI7QUFDSTtBQUNBLFNBQUssU0FBTDtBQUNJOztBQUNKO0FBQ0lsQyxhQUFPLENBQUNzQyxJQUFSLGtDQUF1Q0osR0FBdkM7QUFMUjtBQU9IOztBQUVELFNBQVN4QixZQUFULENBQXNCNkIsQ0FBdEIsRUFBeUJDLENBQXpCLEVBQTRCO0FBQ3hCLE9BQUssSUFBSUMsR0FBVCxJQUFnQkQsQ0FBaEI7QUFDSSxRQUFJQSxDQUFDLENBQUNFLGNBQUYsQ0FBaUJELEdBQWpCLENBQUosRUFDSUYsQ0FBQyxDQUFDRSxHQUFELENBQUQsR0FBU0QsQ0FBQyxDQUFDQyxHQUFELENBQVY7QUFGUjs7QUFHQSxTQUFPRixDQUFQO0FBQ0g7O0FBRUR6QyxHQUFHLENBQUNDLE1BQUQsQ0FBSCxDOzs7Ozs7O0FDckdBO0FBQU8sU0FBUzRDLElBQVQsR0FBZ0I7QUFDbkIsU0FBTyxNQUFQO0FBQ0gsQzs7Ozs7OztBQ0hEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLElBQUlDLElBQUo7QUFFTyxTQUFTNUIsSUFBVCxDQUFjVSxhQUFkLEVBQTZCO0FBQ2xDa0IsTUFBSSxHQUFHQyxRQUFRLENBQUNDLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQVA7QUFDQSxNQUFNQyxHQUFHLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0FELEtBQUcsQ0FBQ0UsU0FBSixHQUFnQkMscURBQUksQ0FBQ0MsSUFBTCxFQUFoQjtBQUNBUCxNQUFJLENBQUNRLFdBQUwsQ0FBaUJMLEdBQWpCOztBQUNBLE1BQUlNLFFBQVEsRUFBWixFQUFnQjtBQUNkQyxnQkFBWSxDQUFDNUIsYUFBYSxDQUFDNkIsTUFBZixDQUFaLENBRGMsQ0FFZDtBQUNEOztBQUNELE1BQU1DLE1BQU0sR0FBR1gsUUFBUSxDQUFDWSxjQUFULENBQXdCLGdCQUF4QixDQUFmO0FBQ0FELFFBQU0sQ0FBQ0UsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNDLE1BQWpDO0FBQ0FmLE1BQUksQ0FBQ2MsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0JFLEtBQS9CO0FBQ0Q7QUFFTSxTQUFTQSxLQUFULEdBQWlCO0FBQ3ZCLE1BQU1DLGVBQWUsR0FBR2hCLFFBQVEsQ0FBQ1ksY0FBVCxDQUF3QixpQkFBeEIsQ0FBeEI7QUFDQUksaUJBQWUsQ0FBQ0MsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLFFBQTlCO0FBQ0E7QUFFTSxTQUFTSixNQUFULENBQWdCSyxLQUFoQixFQUF1QjtBQUM1QkEsT0FBSyxDQUFDQyxlQUFOO0FBQ0QsTUFBTUosZUFBZSxHQUFHaEIsUUFBUSxDQUFDWSxjQUFULENBQXdCLGlCQUF4QixDQUF4QjtBQUNBSSxpQkFBZSxDQUFDQyxTQUFoQixDQUEwQkgsTUFBMUIsQ0FBaUMsUUFBakM7QUFDQTs7QUFFRCxTQUFTTixRQUFULEdBQW9CO0FBQ2xCLFNBQU8saUVBQWlFYSxJQUFqRSxDQUFzRUMsU0FBUyxDQUFDQyxTQUFoRixDQUFQO0FBQ0Q7O0FBRUQsU0FBU2QsWUFBVCxDQUFzQkMsTUFBdEIsRUFBOEI7QUFDNUIsTUFBTWMsU0FBUyxHQUFJeEIsUUFBUSxDQUFDWSxjQUFULENBQXdCLFdBQXhCLENBQW5CO0FBQ0FZLFdBQVMsQ0FBQ1AsU0FBVixDQUFvQlEsTUFBcEIsQ0FBMkIsUUFBM0I7QUFDQUQsV0FBUyxDQUFDRSxhQUFWLENBQXdCLFVBQXhCLEVBQW9DQyxJQUFwQyxpQkFBa0RqQixNQUFsRDtBQUNELEM7Ozs7OztBQ3RDRCwyeEo7Ozs7OztBQ0FBOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLENBQXdEO0FBQzlFLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7O0FBRUEsZUFBZTtBQUNmO0FBQ0E7QUFDQSxhQUFhLG1CQUFPLENBQUMsQ0FBbUQ7QUFDeEU7QUFDQTtBQUNBLEdBQUcsS0FBVTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7QUN6QkEsMkJBQTJCLG1CQUFPLENBQUMsQ0FBK0M7QUFDbEY7QUFDQSxjQUFjLFFBQVMsNEVBQTRFOztBQUVuRztBQUNBLGNBQWMsUUFBUyxxQkFBcUIsb0JBQW9CLHNDQUFzQyxtQkFBbUIsc0JBQXNCLGdCQUFnQixpQkFBaUIsb0JBQW9CLHlCQUF5Qix1QkFBdUIsa0JBQWtCLDhCQUE4QixHQUFHLHVCQUF1Qix1QkFBdUIsaUJBQWlCLGFBQWEscUNBQXFDLEdBQUcsOEJBQThCLGtCQUFrQixHQUFHLDBCQUEwQixjQUFjLGVBQWUscUJBQXFCLEdBQUcsYUFBYSx3QkFBd0IsR0FBRyxnQkFBZ0IsY0FBYyxHQUFHLGlCQUFpQixpQkFBaUIsd0JBQXdCLEdBQUcsZUFBZSx1QkFBdUIsaUJBQWlCLDJCQUEyQiwyQkFBMkIsc0JBQXNCLG9CQUFvQix1QkFBdUIsa0JBQWtCLHdCQUF3QixvQkFBb0IsMkJBQTJCLGdCQUFnQiwwQkFBMEIsR0FBRyxhQUFhLDZCQUE2QixHQUFHOztBQUVwZ0M7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdCQUFnQjtBQUNuRCxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxjQUFjOztBQUVsRTtBQUNBOzs7Ozs7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLG1CQUFPLENBQUMsQ0FBUTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBLG1CQUFtQiwyQkFBMkI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUEsUUFBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDNVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSIsImZpbGUiOiJ3aWRnZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3ODBmZGVlMjBmOGRjMzE1ZThlYSIsImltcG9ydCB7IHBpbmcgfSBmcm9tICcuL3NlcnZpY2VzJ1xuaW1wb3J0IHsgc2hvdyB9IGZyb20gJy4vdmlld3MvbWVzc2FnZSdcblxuY29uc3Qgc3VwcG9ydGVkQVBJID0gWydpbml0JywgJ21lc3NhZ2UnXTsgLy8gZW5saXN0IGFsbCBtZXRob2RzIHN1cHBvcnRlZCBieSBBUEkgKGUuZy4gYG13KCdldmVudCcsICd1c2VyLWxvZ2luJyk7YClcblxuLyoqXG4gICAgVGhlIG1haW4gZW50cnkgb2YgdGhlIGFwcGxpY2F0aW9uXG4gICAgKi9cbmZ1bmN0aW9uIGFwcCh3aW5kb3cpIHtcbiAgICBjb25zb2xlLmxvZygnSlMtV2lkZ2V0IHN0YXJ0aW5nJyk7XG5cbiAgICAvLyBzZXQgZGVmYXVsdCBjb25maWd1cmF0aW9uc1xuICAgIGxldCBjb25maWd1cmF0aW9ucyA9IHtcbiAgICAgICAgc29tZURlZmF1bHRDb25maWd1cmF0aW9uOiBmYWxzZVxuICAgIH07XG5cbiAgICAvLyBhbGwgbWV0aG9kcyB0aGF0IHdlcmUgY2FsbGVkIHRpbGwgbm93IGFuZCBzdG9yZWQgaW4gcXVldWVcbiAgICAvLyBuZWVkcyB0byBiZSBjYWxsZWQgbm93IFxuICAgIGxldCBnbG9iYWxPYmplY3QgPSB3aW5kb3dbd2luZG93WydKUy1XaWRnZXQnXV07XG4gICAgbGV0IHF1ZXVlID0gZ2xvYmFsT2JqZWN0LnE7XG4gICAgaWYgKHF1ZXVlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChxdWV1ZVtpXVswXS50b0xvd2VyQ2FzZSgpID09ICdpbml0Jykge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYXRpb25zID0gZXh0ZW5kT2JqZWN0KGNvbmZpZ3VyYXRpb25zLCBxdWV1ZVtpXVsxXSk7XG4gICAgICAgICAgICAgICAgZmV0Y2hDb25maWcoY29uZmlndXJhdGlvbnMuY29uZmlnU291cmNlVXJsLCBmdW5jdGlvbihmZXRjaGVkQ29uZmlnKXtcbiAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9ucyA9IE9iamVjdC5hc3NpZ24oY29uZmlndXJhdGlvbnMsIGZldGNoZWRDb25maWcpO1xuICAgICAgICAgICAgICAgIGdsb2JhbE9iamVjdC5jb25maWd1cmF0aW9ucyA9IGNvbmZpZ3VyYXRpb25zO1xuICAgICAgICAgICAgICAgIHNob3coKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0pTLVdpZGdldCBzdGFydGVkJywgY29uZmlndXJhdGlvbnMpO1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYXRpb25zLm5ldHdvcmtIYW5kbGVJZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGFwaUhhbmRsZXIocXVldWVbaV1bMF0sIHF1ZXVlW2ldWzFdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG92ZXJyaWRlIHRlbXBvcmFyeSAodW50aWwgdGhlIGFwcCBsb2FkZWQpIGhhbmRsZXJcbiAgICAvLyBmb3Igd2lkZ2V0J3MgQVBJIGNhbGxzXG4gICAgZ2xvYmFsT2JqZWN0ID0gYXBpSGFuZGxlcjtcbiAgICBnbG9iYWxPYmplY3QuY29uZmlndXJhdGlvbnMgPSBjb25maWd1cmF0aW9ucztcbn1cblxuXG5mdW5jdGlvbiBmZXRjaENvbmZpZyh1cmwsIGNhbGxiYWNrKSB7XG4gIC8vIFNldCB1cCBvdXIgSFRUUCByZXF1ZXN0XG4gIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAvLyBTZXR1cCBvdXIgbGlzdGVuZXIgdG8gcHJvY2VzcyBjb21wZWxldGVkIHJlcXVlc3RzXG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBPbmx5IHJ1biBpZiB0aGUgcmVxdWVzdCBpcyBjb21wbGV0ZVxuICAgIGlmICh4aHIucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuXG4gICAgLy8gUHJvY2VzcyBvdXIgcmV0dXJuIGRhdGFcbiAgICBpZiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkge1xuICAgICAgLy8gV2hhdCBkbyB3aGVuIHRoZSByZXF1ZXN0IGlzIHN1Y2Nlc3NmdWxcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBuZXR3b3JrSGFuZGxlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgc2hvdyhuZXR3b3JrSGFuZGxlKTsgXG4gICAgICB9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6IGZhaWxlZCB0byBwYXJzZSBjb25maWcgb2JqZWN0Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gIH07XG5cbiAgLy8gQ3JlYXRlIGFuZCBzZW5kIGEgR0VUIHJlcXVlc3RcbiAgLy8gVGhlIGZpcnN0IGFyZ3VtZW50IGlzIHRoZSBwb3N0IHR5cGUgKEdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Yy4pXG4gIC8vIFRoZSBzZWNvbmQgYXJndW1lbnQgaXMgdGhlIGVuZHBvaW50IFVSTFxuICB4aHIub3BlbignR0VUJywgdXJsKTtcbiAgeGhyLnNlbmQoKTsgXG59XG5cbi8qKlxuICAgIE1ldGhvZCB0aGF0IGhhbmRsZXMgYWxsIEFQSSBjYWxsc1xuICAgICovXG5mdW5jdGlvbiBhcGlIYW5kbGVyKGFwaSwgcGFyYW1zKSB7XG4gICAgaWYgKCFhcGkpIHRocm93IEVycm9yKCdBUEkgbWV0aG9kIHJlcXVpcmVkJyk7XG4gICAgYXBpID0gYXBpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAoc3VwcG9ydGVkQVBJLmluZGV4T2YoYXBpKSA9PT0gLTEpIHRocm93IEVycm9yKGBNZXRob2QgJHthcGl9IGlzIG5vdCBzdXBwb3J0ZWRgKTtcblxuICAgIGNvbnNvbGUubG9nKGBIYW5kbGluZyBBUEkgY2FsbCAke2FwaX1gLCBwYXJhbXMpO1xuXG4gICAgc3dpdGNoIChhcGkpIHtcbiAgICAgICAgLy8gVE9ETzogYWRkIEFQSSBpbXBsZW1lbnRhdGlvblxuICAgICAgICBjYXNlICdtZXNzYWdlJzpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBObyBoYW5kbGVyIGRlZmluZWQgZm9yICR7YXBpfWApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZXh0ZW5kT2JqZWN0KGEsIGIpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gYilcbiAgICAgICAgaWYgKGIuaGFzT3duUHJvcGVydHkoa2V5KSlcbiAgICAgICAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICByZXR1cm4gYTtcbn1cblxuYXBwKHdpbmRvdyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi5qcyIsIlxuZXhwb3J0IGZ1bmN0aW9uIHBpbmcoKSB7XG4gICAgcmV0dXJuICdwb25nJztcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMuanMiLCJpbXBvcnQgaHRtbCBmcm9tICcuL21lc3NhZ2UuaHRtbCc7XG5pbXBvcnQgJy4vbWVzc2FnZS5jc3MnO1xuXG5sZXQgYm9keTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3cobmV0d29ya0hhbmRsZSkge1xuICBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pbm5lckhUTUwgPSBodG1sLnRyaW0oKTtcbiAgYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICBpZiAoaXNNb2JpbGUoKSkge1xuICAgIGFkZFNtc09wdGlvbihuZXR3b3JrSGFuZGxlLmhhbmRsZSk7IFxuICAgIC8vIFNob3dpbmcgU01TIG9wdGlvbiBvbmx5IG9uIG1vYmlsZSBkZXZpY2VzXG4gIH1cbiAgY29uc3Qgd2lkZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzV2lkZ2V0RGlhbG9nJyk7XG4gIHdpZGdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZSk7XG4gIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZSgpIHtcblx0Y29uc3Qgb3B0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wdGlvbkNvbnRhaW5lcicpO1xuXHRvcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2xvc2VkJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGUoZXZlbnQpIHtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdGNvbnN0IG9wdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHRpb25Db250YWluZXInKTtcblx0b3B0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2Nsb3NlZCcpO1xufVxuXG5mdW5jdGlvbiBpc01vYmlsZSgpIHtcbiAgcmV0dXJuIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbn0gXG5cbmZ1bmN0aW9uIGFkZFNtc09wdGlvbihoYW5kbGUpIHtcbiAgY29uc3Qgc21zT3B0aW9uID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbXNPcHRpb24nKTtcbiAgc21zT3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBzbXNPcHRpb24ucXVlcnlTZWxlY3RvcignI3Ntc0xpbmsnKS5ocmVmID0gYHNtczoke2hhbmRsZX1gO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZpZXdzL21lc3NhZ2UuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwianMtd2lkZ2V0LWRpYWxvZ1xcXCIgaWQ9XFxcImpzV2lkZ2V0RGlhbG9nXFxcIj5cXG4gIDxzdmcgd2lkdGg9XFxcIjMwcHhcXFwiIGhlaWdodD1cXFwiMzBweFxcXCIgdmlld0JveD1cXFwiMCAwIDU3NiA1MDBcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCI+XFxuICAgIDxnIGlkPVxcXCJQYWdlLTFcXFwiIHN0cm9rZT1cXFwibm9uZVxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxXFxcIiBmaWxsPVxcXCJub25lXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPlxcbiAgICAgIDxnIGlkPVxcXCJjb21tZW50cy1zb2xpZFxcXCIgZmlsbD1cXFwiI2ZmZmZmZlxcXCIgZmlsbC1ydWxlPVxcXCJub256ZXJvXFxcIj5cXG4gICAgICAgIDxwYXRoIGQ9XFxcIk00MTYsMTYwIEM0MTYsNzEuNiAzMjIuOSwwIDIwOCwwIEM5My4xLDAgMCw3MS42IDAsMTYwIEMwLDE5NC4zIDE0LjEsMjI1LjkgMzgsMjUyIEMyNC42LDI4Mi4yIDIuNSwzMDYuMiAyLjIsMzA2LjUgQzIuNjY0NTM1MjZlLTE1LDMwOC44IC0wLjYsMzEyLjIgMC43LDMxNS4yIEMyLDMxOC4yIDQuOCwzMjAgOCwzMjAgQzQ0LjYsMzIwIDc0LjksMzA3LjcgOTYuNywyOTUgQzEyOC45LDMxMC43IDE2NywzMjAgMjA4LDMyMCBDMzIyLjksMzIwIDQxNiwyNDguNCA0MTYsMTYwIFogTTUzOCwzODAgQzU2MS45LDM1NCA1NzYsMzIyLjMgNTc2LDI4OCBDNTc2LDIyMS4xIDUyMi41LDE2My44IDQ0Ni43LDEzOS45IEM0NDcuNiwxNDYuNSA0NDgsMTUzLjIgNDQ4LDE2MCBDNDQ4LDI2NS45IDM0MC4zLDM1MiAyMDgsMzUyIEMxOTcuMiwzNTIgMTg2LjcsMzUxLjIgMTc2LjMsMzUwLjEgQzIwNy44LDQwNy42IDI4MS44LDQ0OCAzNjgsNDQ4IEM0MDksNDQ4IDQ0Ny4xLDQzOC44IDQ3OS4zLDQyMyBDNTAxLjEsNDM1LjcgNTMxLjQsNDQ4IDU2OCw0NDggQzU3MS4yLDQ0OCA1NzQuMSw0NDYuMSA1NzUuMyw0NDMuMiBDNTc2LjYsNDQwLjMgNTc2LDQzNi45IDU3My44LDQzNC41IEM1NzMuNSw0MzQuMiA1NTEuNCw0MTAuMyA1MzgsMzgwIFpcXFwiIGlkPVxcXCJTaGFwZVxcXCI+PC9wYXRoPlxcbiAgICAgIDwvZz5cXG4gICAgPC9nPlxcbiAgPC9zdmc+XFxuICA8ZGl2IGlkPVxcXCJvcHRpb25Db250YWluZXJcXFwiIGNsYXNzPVxcXCJvcHRpb24tY29udGFpbmVyIGNsb3NlZFxcXCI+XFxuICAgIDx1bD5cXG4gICAgICA8bGkgY2xhc3M9XFxcInNtcy1vcHRpb24gb3B0aW9uIGhpZGRlblxcXCIgaWQ9XFxcInNtc09wdGlvblxcXCI+XFxuICAgICAgICA8YSBpZD1cXFwic21zTGlua1xcXCI+XFxuICAgICAgICAgIDxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDEwMDAgMTAwMFxcXCIgZW5hYmxlLWJhY2tncm91bmQ9XFxcIm5ldyAwIDAgMTAwMCAxMDAwXFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj5cXG4gICAgICAgICAgICA8bWV0YWRhdGE+IFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8vd3d3Lm9ubGluZXdlYmZvbnRzLmNvbS9pY29uIDwvbWV0YWRhdGE+XFxuICAgICAgICAgICAgPGc+PGcgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMC4wMDAwMDAsNTExLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKVxcXCI+PHBhdGggZD1cXFwiTTEwNDkuOCw0OTgzYy0yMTguNS01NS4xLTQ0My4xLTIyNC42LTU0Ny4zLTQxNi42QzM4MCw0MzM5LjgsMzg2LjEsNDYxMS40LDM4Ni4xLDExMC44YzAtNDUwMC42LTYuMS00MjI4LjksMTE2LjQtNDQ1NS42YzY1LjMtMTE4LjQsMjMwLjctMjgxLjgsMzU1LjMtMzQzQzEwNjAtNDc5Miw5OTAuNi00NzkwLDM1MTAuNC00NzkwYzI2MDMuNSwwLDI0ODkuMi02LjEsMjcxMy44LDEyOC42YzIyNi43LDEzNC44LDM3OS44LDM4MS45LDQxMi41LDY2My43YzEwLjIsODUuOCwxNi4zLDc1OS42LDE0LjMsMTQ5NC43bC02LjEsMTMzNy41bC00MDIuMyw2LjFsLTQwNC4zLDQuMXYtNTkyLjJ2LTU5Mi4ySDM1MjAuNkgxMjAyLjlWNzk0Ljl2MzEzNC41aDI3MTUuOGMyNDcyLjgsMCwyNzE3LjksMiwyNzMwLjIsMzIuN2M2LjEsMTguNCwyLDExOC40LTguMiwyMjQuNmMtNDIuOSw0MDYuNC0yODEuOCw2OTguNC02NDkuNCw3OTIuM2MtMTA2LjIsMjguNi00MTAuNCwzMi43LTI0ODEsMzAuNkMxNzA5LjMsNTAwNy41LDExMjcuNCw1MDAxLjQsMTA0OS44LDQ5ODN6IE0zNzI4LjktMzE5My4xYzE3NS42LTg5LjgsMjY5LjUtMjQ1LDI3MS42LTQzOWMwLTE0MC45LTM4LjgtMjQ1LTEyOC42LTMzNi45Yy0yMzQuOC0yNDUtNjEyLjYtMjAwLjEtNzg0LjEsOTMuOWMtNzUuNiwxMjYuNi03OS42LDMzNi45LTEwLjIsNDY3LjZDMzIwMC0zMTc2LjgsMzUwMC4yLTMwNzYuNywzNzI4LjktMzE5My4xelxcXCIvPjxwYXRoIGQ9XFxcIk0zNjc5LjksMzM2Ny44Yy0xNTcuMi00Mi45LTI2NS41LTEwNC4xLTM4My45LTIxNi41Yy0xMjIuNS0xMTYuNC0yMDAuMS0yNDkuMS0yNDUtNDE2LjZjLTQ3LTE4MS43LTQ0LjktMjQxMy42LDItMjU5My4zYzYzLjMtMjQ3LjEsMjIwLjUtNDQxLDQ0NS4xLTU1MS4zYzE2Ny41LTgzLjcsMzE0LjUtMTEyLjMsNTc5LjktMTEyLjNoMTg3Ljl2LTUxOC43YzAtMzE4LjYsOC4yLTU0My4yLDIyLjUtNTc3LjljNTMuMS0xNDAuOSwxNTcuMi0xODMuOCwyOTAtMTE2LjRjMzYuOCwxOC40LDMzMi44LDI5OC4xLDY1Ny41LDYyMi44TDU4MjgtNTI0LjJsMTU0MS43LDYuMWMxNTI5LjUsNi4xLDE1NDEuNyw2LjEsMTY2MC4yLDUxLjFjMjM0LjgsODcuOCw0MzcsMjgzLjgsNTI2LjgsNTEwLjVsNDksMTE4LjRsNi4xLDEyMzMuNGM2LjEsMTM0NS43LDYuMSwxMzM3LjUtMTE0LjMsMTU2MC4xYy02MS4zLDExNC40LTIyOC43LDI3OS44LTM0Ny4xLDMzOWMtMjEwLjQsMTA4LjItMTI0LjYsMTA0LjItMjg0Mi41LDEwMi4xQzQyMDIuNiwzMzk2LjQsMzc2Ny43LDMzOTAuMywzNjc5LjksMzM2Ny44eiBNNTAxNS4zLDIyMTQuMWMyNDUuMS0xMDguMiwzNDMtMzMyLjgsMTk2LTQ0OS4yYy0xMDYuMi04My43LTIyNi43LTQyLjktMzAwLjIsOThjLTcxLjUsMTM2LjgtMzc5LjgsMTQyLjktNDE0LjUsOC4yYy0xOC40LTczLjUsMjIuNS05OCwyNzkuOC0xNjkuNWMyNjUuNS03MS41LDM1My4zLTExMi4zLDQzNy0xOTRjMjA4LjMtMjA4LjMsMTE4LjUtNTc5LjktMTcxLjUtNzA4LjZjLTIwNi4zLTkxLjktNjI0LjktNjMuMy04MTQuOCw1Ny4yYy0xNDcsOTEuOS0yMjguNywzMDIuMi0xNjMuNCw0MjIuN2MxMi4zLDIyLjUsNTMuMSw1My4xLDg5LjgsNjkuNGMxMDYuMiw0Mi45LDE4My44LDYuMSwyNDUtMTE2LjRjNTkuMi0xMTYuNCwxMzguOC0xNjMuNCwyNzMuNi0xNjkuNWMxMjIuNS0yLjEsMjI0LjYsNDAuOCwyMzguOSwxMDQuMWMyMC40LDgxLjctMzguOCwxMTguNC0yOTQsMTg5LjljLTEzMC43LDM0LjctMjc3LjcsODcuOC0zMjYuNywxMTQuNGMtMjI2LjcsMTMyLjctMjcxLjYsNDI0LjctOTEuOSw2MjIuOGMxMzAuNywxNDUsMjUxLjIsMTgzLjgsNTMwLjksMTczLjZDNDg2Mi4yLDIyNjEsNDk0My45LDIyNDYuNyw1MDE1LjMsMjIxNC4xeiBNODI4Mi41LDIyMTQuMWMyNDUtMTA4LjIsMzQzLTMzMi44LDE5Ni00NDkuMmMtMTA2LjItODMuNy0yMjYuNy00Mi45LTMwMC4yLDk4Yy03MS41LDEzNi44LTM3OS44LDE0Mi45LTQxNC41LDguMmMtMTguNC03My41LDIyLjUtOTgsMjc5LjctMTY5LjVjMjY1LjUtNzEuNSwzNTMuMy0xMTIuMyw0MzctMTk0YzIxMi40LTIxMC4zLDExNi40LTU4OC4xLTE4MS43LTcxNC43Yy0xMjIuNS01MS00MzctNjEuMy02MDAuNC0yMC40Yy0xNzEuNSw0NC45LTI1OS4zLDEwMC4xLTMzMC44LDIxNC40Yy05OCwxNTMuMS03NS41LDMwNi4zLDUzLjEsMzYxLjRjMTA2LjIsNDIuOSwxODMuOCw2LjEsMjQ1LTExNi40YzU5LjItMTE2LjQsMTM4LjktMTYzLjQsMjczLjYtMTY5LjVjMTIyLjUtMi4xLDIyNC42LDQwLjgsMjM4LjksMTA0LjFjMjAuNCw4MS43LTM4LjgsMTE4LjQtMjk0LDE4OS45Yy0xMzAuNywzNC43LTI3Ny43LDg3LjgtMzI2LjcsMTE0LjRjLTIyNi43LDEzMi43LTI3MS42LDQyNC43LTkxLjksNjIyLjhjMTMwLjcsMTQ1LDI1MS4xLDE4My44LDUzMC45LDE3My42QzgxMjkuNCwyMjYxLDgyMTEuMSwyMjQ2LjcsODI4Mi41LDIyMTQuMXogTTYwNDQuNSwyMjA3LjljNjkuNC01My4xLDEwMC0xNDAuOSwxNzkuNy01MDQuNGM0NC45LTIwOC4zLDg3LjgtNDEyLjUsOTYtNDU1LjRjNi4xLTQyLjksMTYuMy03NS42LDE4LjQtNzEuNWM0LjEsNC4xLDQ0LjksMTc3LjYsOTEuOSwzODhjMTQ5LjEsNjgyLDE0MC45LDY2OS44LDQ0My4yLDY2OS44YzE3NS42LDAsMTk2LTQuMSwyNDAuOS01MWw1MS4xLTQ5di02MjIuOFY4OTAuOWwtNTMuMS02My4zYy02OS40LTgxLjctMTgxLjgtODcuOC0yNjcuNS0xNC4zbC01Ny4yLDQ5bDQuMSw1MDguNWMyLDI3Ny43LDAsNDk4LjItNC4xLDQ4NmMtNi4xLTEwLjItNTkuMi0yMjIuNi0xMjAuNS00NzEuN2MtNjEuMy0yNDcuMS0xMjQuNi00NzUuOC0xMzYuOC01MDYuNGMtNTUuMS0xMTguNC0yMzYuOS0xNTEuMS0zNDMuMS02MS4zYy03NS41LDYzLjMtMTA4LjIsMTYxLjMtMjMwLjcsNjk0LjNsLTg3LjgsMzgzLjlsLTYuMS01MTIuNWwtNC4xLTUxMi41bC01NS4xLTUzLjFjLTEwOC4yLTEwOC4yLTI4Ny45LTQ0LjktMzIwLjYsMTEyLjNjLTIwLjQsMTAwLjEtMTQuMywxMDU5LjgsOC4yLDExNTEuN2MzMC42LDEzMi43LDczLjUsMTUzLjEsMzE0LjUsMTUzLjFDNTkzNi4zLDIyMzIuNCw2MDI0LjEsMjIyNC4zLDYwNDQuNSwyMjA3Ljl6XFxcIi8+PC9nPjwvZz5cXG4gICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgIDxoMj5TTVM8L2gyPlxcbiAgICAgICAgPC9hPlxcbiAgICAgIDxsaT5cXG4gICAgPC91bD5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL21lc3NhZ2UuaHRtbFxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tZXNzYWdlLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tZXNzYWdlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tZXNzYWdlLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvbWVzc2FnZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCIsIFwiXCJdKTtcblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuanMtd2lkZ2V0LWRpYWxvZ3tcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIHotaW5kZXg6IDEwMDAyO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICByaWdodDogMjVweDtcXG4gIGJvdHRvbTogMjVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMCAwIDAgLTEyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJveC1zaGFkb3c6IGJsYWNrIDAgMCA1cHg7XFxufVxcblxcbi5vcHRpb24tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMTAwJTtcXG5cXHRyaWdodDogMDtcXG5cXHR0cmFuc2l0aW9uOiByaWdodCAzMDBtcyBlYXNlLW91dDtcXG59XFxuXFxuLm9wdGlvbi1jb250YWluZXIuY2xvc2VkIHtcXG5cXHRyaWdodDogLTIzMHB4O1xcbn1cXG5cXG4ub3B0aW9uLWNvbnRhaW5lcj51bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLm9wdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbn1cXG5cXG4ub3B0aW9uIGgyIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLm9wdGlvbiBzdmcge1xcbiAgaGVpZ2h0OiA0MHB4O1xcblxcdHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5vcHRpb24gYSB7XFxuXFx0cGFkZGluZzogMTBweCAxNXB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL3NyYy92aWV3cy9tZXNzYWdlLmNzc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAoc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3NlbGVjdG9yXSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9
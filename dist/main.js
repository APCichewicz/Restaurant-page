/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/tangerine/Tangerine-Regular.ttf */ \"./src/assets/fonts/tangerine/Tangerine-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/restaurant.jpg */ \"./src/assets/images/restaurant.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* import the tangerine font from same folder .\\\\tangerine */\\r\\n@font-face {\\r\\n  font-family: \\\"Tangerine\\\";\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\n/* reset styles for the webpage */\\r\\n:root,\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  /* to accomodate the page's dark theme, we will set the text-color universally to a slight offwhite */\\r\\n  color: #f5f5f5;\\r\\n}\\r\\n\\r\\n.content {\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  background-size: cover;\\r\\n  background-position: center;\\r\\n  background-repeat: no-repeat;\\r\\n  background-attachment: fixed;\\r\\n  min-width: 100vw;\\r\\n  height: 100vh;\\r\\n  display: grid;\\r\\n  gridtc-template-columns: 1fr;\\r\\n  grid-template-rows: auto 1fr auto;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  /* adjust font size for header */\\r\\n  font-size: 2rem;\\r\\n  /* make the background of the header semi-transparent and dark */\\r\\n  background-color: rgba(0, 0, 0, 0.75);\\r\\n  /* make the header take up the full width of the page */\\r\\n  width: 100%;\\r\\n  /* center the text */\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 25rem 1fr;\\r\\n  /* style the rows to be one large over one just large enough for the list */\\r\\n  grid-template-rows: 1fr 5rem;\\r\\n}\\r\\nul {\\r\\n  display: flex;\\r\\n  /* take away the list decoration */\\r\\n  list-style: none;\\r\\n}\\r\\nli {\\r\\n  /* make the list items inline */\\r\\n  display: inline;\\r\\n  /* add some space between the list items */\\r\\n  margin: 0 1rem;\\r\\n  /* add some padding so there is spabe between the li and the bottom of the header */\\r\\n  transition: transform 0.2s ease-in-out;\\r\\n}\\r\\nli a {\\r\\n  /* style the links in the list */\\r\\n  text-decoration: none;\\r\\n}\\r\\nli:hover {\\r\\n  /* add a transform effect where the hovered link grows slightly and bounces upwards */\\r\\n  transform: scale(1.1) translateY(-0.5rem);\\r\\n}\\r\\n.selected {\\r\\n  /* style the selected link with a border-bottom */\\r\\n  border-bottom: 1px solid #f5f5f5;\\r\\n  padding-bottom: 0.5rem;\\r\\n}\\r\\n/* position the header h1 and ul to begin in the second column of the grid */\\r\\n.header h1 {\\r\\n  /* set the header font size */\\r\\n  font-size: 7rem;\\r\\n  /* set t he h1 font to something curvy and evoking fancy italian imagery */\\r\\n  font-family: \\\"Tangerine\\\", cursive;\\r\\n  padding-top: 1.5rem;\\r\\n  text-align: center;\\r\\n  grid-column: 2;\\r\\n  grid-row: 1;\\r\\n}\\r\\n.header nav {\\r\\n  grid-column-start: 2;\\r\\n  grid-row: 2;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.main-view {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.main-view-content {\\r\\n  /* set the background of the main view to be semi-transparent and dark */\\r\\n  background-color: rgba(0, 0, 0, 0.75);\\r\\n  /* set the width of the main view to be 50% of the page */\\r\\n  width: 60%;\\r\\n  /* set the height of the main view to be 50% of the page */\\r\\n  height: 50%;\\r\\n  /* add a minor curve border radius */\\r\\n  border-radius: 5px;\\r\\n  /* set the border to be 1px solid white */\\r\\n  border: 1px solid black;\\r\\n  /* set the padding to be 1rem */\\r\\n  padding: 1rem;\\r\\n  /* set the margin to be 1rem */\\r\\n  margin: 1rem;\\r\\n  /* set the text-align to be center */\\r\\n  text-align: center;\\r\\n  /* line height 1.3 */\\r\\n  line-height: 1.3rem;\\r\\n  /* set the font size to be 150% of root */\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n.main-view-content img {\\r\\n  max-width: 15rem;\\r\\n  height: 15rem;\\r\\n  border-radius: 50%;\\r\\n  margin: 1rem;\\r\\n}\\r\\n.main-view-content p {\\r\\n  width: 80%;\\r\\n  margin: 0 auto;\\r\\n}\\r\\nfooter {\\r\\n  /* set the background of the footer to be semi-transparent and dark */\\r\\n  background-color: rgba(0, 0, 0, 0.75);\\r\\n  /* set the width of the footer to be 100% of the page */\\r\\n  width: 100%;\\r\\n  /* set the height of the footer to be 5rem */\\r\\n  height: 5rem;\\r\\n  /* set the display to be flex */\\r\\n  display: flex;\\r\\n  /* set the justify-content to be center */\\r\\n  justify-content: center;\\r\\n  /* set the align-items to be center */\\r\\n  align-items: center;\\r\\n  justify-self: flex-end;\\r\\n}\\r\\nfooter div {\\r\\n  text-align: center;\\r\\n}\\r\\nfooter > div > p:nthof-type(1) {\\r\\n  /* set the font size to be 150% of root */\\r\\n  font-size: 1.5rem;\\r\\n  /* set the font family to be Tangerine */\\r\\n  font-family: \\\"Tangerine\\\", cursive;\\r\\n}\\r\\nfooter img {\\r\\n  max-width: 1rem;\\r\\n  border-radius: 50%;\\r\\n}\\r\\n.menu-view {\\r\\n  width: 60%;\\r\\n  background: rgba(0, 0, 0, 0.8);\\r\\n  margin: 1rem auto;\\r\\n  padding: 2rem;\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr;\\r\\n  overflow: auto;\\r\\n  max-height: 60vh;\\r\\n}\\r\\n.category {\\r\\n  padding: 1rem;\\r\\n  display: grid;\\r\\n  text-align: center;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.category h2 {\\r\\n  grid-column: 1 / -1;\\r\\n  font-size: 3.5rem;\\r\\n  font-family: \\\"Tangerine\\\", cursive;\\r\\n  margin-block: 1rem;\\r\\n}\\r\\n.category h3 {\\r\\n  font-size: 2.5rem;\\r\\n  font-family: \\\"Tangerine\\\", cursive;\\r\\n  margin-block: 1rem;\\r\\n}\\r\\n.category li {\\r\\n  text-align: center;\\r\\n}\\r\\n.category ul {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr 1fr;\\r\\n}\\r\\n.contact-view {\\r\\n  width: 60%;\\r\\n  background: rgba(0, 0, 0, 0.8);\\r\\n  margin: 1rem auto;\\r\\n  padding: 2rem;\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr;\\r\\n  overflow: auto;\\r\\n  max-height: 60vh;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurantpage/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurantpage/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./style.css */ \"./src/style.css\");\r\n// require the tangerine font\r\nconst image = __webpack_require__(/*! ./assets/images/friends.jpg */ \"./src/assets/images/friends.jpg\");\r\nconst github = __webpack_require__(/*! ./assets/images/github-mark.png */ \"./src/assets/images/github-mark.png\");\r\n\r\n// the restaurant menu\r\nconst menu = {\r\n  appetizers: {\r\n    bruschetta: \"Toasted bread topped with tomatoes, garlic, and basil.\",\r\n    friedCalamari:\r\n      \"Tender calamari lightly coated in seasoned breadcrumbs and fried to perfection.\",\r\n    capreseSalad:\r\n      \"Fresh mozzarella, sliced tomatoes, and basil, drizzled with balsamic glaze.\",\r\n  },\r\n  pasta: {\r\n    spaghettiCarbonara:\r\n      \"Classic pasta dish with pancetta, egg, and parmesan cheese.\",\r\n    linguineAlleVongole:\r\n      \"Linguine pasta with fresh clams, garlic, and white wine sauce.\",\r\n    lasagnaAllaBolognese:\r\n      \"Traditional lasagna with layers of pasta, meat sauce, and béchamel.\",\r\n  },\r\n  pizza: {\r\n    margherita: \"Classic pizza with tomato sauce, fresh mozzarella, and basil.\",\r\n    quattroFormaggi:\r\n      \"Four-cheese pizza with mozzarella, gorgonzola, fontina, and parmesan.\",\r\n    diavola: \"Spicy pizza with tomato sauce, pepperoni, and chili flakes.\",\r\n  },\r\n  entrees: {\r\n    ossoBuco: \"Braised veal shanks with vegetables and white wine.\",\r\n    polloAllaCacciatora:\r\n      \"Chicken braised with tomatoes, onions, and bell peppers.\",\r\n    branzinoAlForno:\r\n      \"Whole baked Mediterranean sea bass with garlic and herbs.\",\r\n  },\r\n  desserts: {\r\n    tiramisu:\r\n      \"Classic Italian dessert with layers of mascarpone cheese and ladyfingers soaked in espresso.\",\r\n    cannoli:\r\n      \"Crispy pastry shells filled with sweet ricotta cream and chocolate chips.\",\r\n    gelato:\r\n      \"Italian-style ice cream in various flavors such as vanilla, chocolate, and pistachio.\",\r\n  },\r\n};\r\n\r\n//retrieve the root div from teh document with class content\r\nconst root = document.querySelector(\".content\");\r\nconsole.log(root);\r\n\r\n// create the header\r\nconst header = document.createElement(\"header\");\r\nheader.classList.add(\"header\");\r\nroot.appendChild(header);\r\n//create the title of the page: the restaurant name\r\nconst title = document.createElement(\"h1\");\r\ntitle.textContent = \"Primavera\";\r\nheader.appendChild(title);\r\n//create the navbar\r\nconst navbar = document.createElement(\"nav\");\r\nnavbar.classList.add(\"navbar\");\r\nheader.appendChild(navbar);\r\n//create the links for the navbar\r\nconst link = document.createElement(\"ul\");\r\nconst homeLink = document.createElement(\"li\");\r\nconst menuLink = document.createElement(\"li\");\r\nconst contactLink = document.createElement(\"li\");\r\n//anchor tags for the links\r\nconst homeAnchor = document.createElement(\"a\");\r\nconst menuAnchor = document.createElement(\"a\");\r\nconst contactAnchor = document.createElement(\"a\");\r\n//set the href attribute for the anchor tags to null as this will be handled with an event listner\r\nhomeAnchor.href = \"#\";\r\nmenuAnchor.href = \"#\";\r\ncontactAnchor.href = \"#\";\r\n//set the text content for the anchor tags\r\nhomeAnchor.textContent = \"Home\";\r\nmenuAnchor.textContent = \"Menu\";\r\ncontactAnchor.textContent = \"Contact\";\r\n//append the anchor tags to the list items\r\nhomeLink.appendChild(homeAnchor);\r\nmenuLink.appendChild(menuAnchor);\r\ncontactLink.appendChild(contactAnchor);\r\n//append the list items to the unordered list\r\nlink.appendChild(homeLink);\r\nlink.appendChild(menuLink);\r\nlink.appendChild(contactLink);\r\nnavbar.appendChild(link);\r\n\r\n//create the main content area\r\nconst main = document.createElement(\"main\");\r\nmain.classList.add(\"main\");\r\nroot.appendChild(main);\r\n\r\n//use a function to then generate the main view so that it can be reused\r\n//the main view will be the default view when the page is loaded\r\n//additionally it will contain a centered square div with a representative image of the restaurant and a brief description of the restaurant\r\nfunction generateMainView() {\r\n  // first clear main of any content\r\n  main.innerHTML = \"\";\r\n\r\n  //create the main view which spans the page. it will contain a centered square div which take sup about 50% of the page width\r\n  //the div will have a semi-transparent black background and will contain a brief description of the restaurant and a representative image\r\n  const mainView = document.createElement(\"div\");\r\n  mainView.classList.add(\"main-view\");\r\n  main.appendChild(mainView);\r\n  //create the div that will contain the description and the image\r\n  const mainViewContent = document.createElement(\"div\");\r\n  mainViewContent.classList.add(\"main-view-content\");\r\n  mainView.appendChild(mainViewContent);\r\n  //create the description\r\n  const description = document.createElement(\"p\");\r\n  description.textContent =\r\n    \"Primavera: Rustic upscale Italian restaurant, authentic cuisine, fresh pasta, wood-fired pizza, finest ingredients, warm ambiance for romantic dinners, family celebrations, and nights out.\";\r\n  mainViewContent.appendChild(description);\r\n  //create the image\r\n  const friendImage = document.createElement(\"img\");\r\n  friendImage.src = image;\r\n  friendImage.alt = \"image of friends eating at Primavera\";\r\n  mainViewContent.appendChild(friendImage);\r\n\r\n  //add the selected class to the homeanchor tag\r\n  homeAnchor.classList.add(\"selected\");\r\n}\r\n\r\nfunction generateMenuView() {\r\n  // first clear main of any content\r\n  main.innerHTML = \"\";\r\n\r\n  //create the menu view which spans the page. it will contain a centered square div which take sup about 50% of the page width\r\n  //the div will have a semi-transparent black background and will contain a brief description of the restaurant and a representative image\r\n  const menuView = document.createElement(\"div\");\r\n  menuView.classList.add(\"menu-view\");\r\n  main.appendChild(menuView);\r\n  // iterate over the menu object and for each main category create a div with a title and a list of the items\r\n  for (const category in menu) {\r\n    //create the div for the category\r\n    const categoryDiv = document.createElement(\"div\");\r\n    categoryDiv.classList.add(\"category\");\r\n    menuView.appendChild(categoryDiv);\r\n    //create the title for the category\r\n    const categoryTitle = document.createElement(\"h2\");\r\n    categoryTitle.textContent = category;\r\n    categoryDiv.appendChild(categoryTitle);\r\n    //create the list for the category\r\n    const categoryList = document.createElement(\"ul\");\r\n    categoryDiv.appendChild(categoryList);\r\n    //iterate over the items in the category and create a list item for each item with the item name and description\r\n    for (const item in menu[category]) {\r\n      //create the list item\r\n      const listItem = document.createElement(\"li\");\r\n      categoryList.appendChild(listItem);\r\n      //create the item name\r\n      const itemName = document.createElement(\"h3\");\r\n      itemName.textContent = item;\r\n      listItem.appendChild(itemName);\r\n      //create the item description\r\n      const itemDescription = document.createElement(\"p\");\r\n      itemDescription.textContent = menu[category][item];\r\n      listItem.appendChild(itemDescription);\r\n    }\r\n  }\r\n\r\n  menuAnchor.classList.add(\"selected\");\r\n}\r\nfunction generateContactView() {\r\n  // first clear main of any content\r\n  main.innerHTML = \"\";\r\n\r\n  const contactView = document.createElement(\"div\");\r\n  contactView.classList.add(\"contact-view\");\r\n  main.appendChild(contactView);\r\n  const contactViewContent = document.createElement(\"div\");\r\n  contactViewContent.classList.add(\"contact-view-content\");\r\n  contactView.appendChild(contactViewContent);\r\n  const contactInfo = document.createElement(\"p\");\r\n  contactInfo.textContent =\r\n    \"Thank you for your interest in Primavera Italian restaurant! We are always happy to hear from our customers. Please feel free to contact us with any questions, comments, or concerns. You can reach us by phone at (555) 123-4567, or by email at info@primavera.com. Our restaurant is located at 123 Main Street in the heart of the city, and we look forward to seeing you soon!\";\r\n  contactViewContent.appendChild(contactInfo);\r\n  const contactInfo2 = document.createElement(\"p\");\r\n  contactInfo2.textContent = \"Email:\";\r\n}\r\n\r\n// end the page with a footer\r\nconst footer = document.createElement(\"footer\");\r\nfooter.classList.add(\"footer\");\r\nroot.appendChild(footer);\r\n//create the footer content\r\nconst footerContent = document.createElement(\"div\");\r\nfooterContent.classList.add(\"footer-content\");\r\nfooter.appendChild(footerContent);\r\n//create the footer text\r\nconst footerText = document.createElement(\"p\");\r\nfooterText.textContent = \"Primavera Restaurant\";\r\nfooterContent.appendChild(footerText);\r\n//add the copyright message at the bottom of the footer\r\nconst footerCopy = document.createElement(\"p\");\r\n// copywright 20234 Andrew Cichewicz and ended with the github symbol which is a link to github\r\nfooterCopy.innerHTML =\r\n  \"&copy; 2021 Andrew Cichewicz <a href='https://github.com/APCichewicz'></a>\";\r\nconst githubImage = document.createElement(\"img\");\r\ngithubImage.src = github;\r\ngithubImage.alt = \"github logo\";\r\nfooterCopy.querySelector(\"a\").appendChild(githubImage);\r\nfooterContent.appendChild(footerCopy);\r\n\r\ngenerateMainView();\r\n\r\n//add event listeners to the links in the navbar\r\nhomeAnchor.addEventListener(\"click\", (e) => {\r\n  e.preventDefault();\r\n  //remove the selected class from the other links\r\n  menuAnchor.classList.remove(\"selected\");\r\n  contactAnchor.classList.remove(\"selected\");\r\n  //add the selected class to the homeanchor tag\r\n  homeAnchor.classList.add(\"selected\");\r\n  generateMainView();\r\n});\r\nmenuAnchor.addEventListener(\"click\", (e) => {\r\n  e.preventDefault();\r\n  //remove the selected class from the other links\r\n  homeAnchor.classList.remove(\"selected\");\r\n  contactAnchor.classList.remove(\"selected\");\r\n  //add the selected class to the homeanchor tag\r\n  menuAnchor.classList.add(\"selected\");\r\n  generateMenuView();\r\n});\r\ncontactAnchor.addEventListener(\"click\", (e) => {\r\n  e.preventDefault();\r\n  //remove the selected class from the other links\r\n  homeAnchor.classList.remove(\"selected\");\r\n  menuAnchor.classList.remove(\"selected\");\r\n  //add the selected class to the homeanchor tag\r\n  contactAnchor.classList.add(\"selected\");\r\n  generateContactView();\r\n});\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/assets/fonts/tangerine/Tangerine-Regular.ttf":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/tangerine/Tangerine-Regular.ttf ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6b04eb83dd71e2762243.ttf\";\n\n//# sourceURL=webpack://restaurantpage/./src/assets/fonts/tangerine/Tangerine-Regular.ttf?");

/***/ }),

/***/ "./src/assets/images/friends.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/friends.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"7241b52906cfd899dc32.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/assets/images/friends.jpg?");

/***/ }),

/***/ "./src/assets/images/github-mark.png":
/*!*******************************************!*\
  !*** ./src/assets/images/github-mark.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d765aaab150a250c8165.png\";\n\n//# sourceURL=webpack://restaurantpage/./src/assets/images/github-mark.png?");

/***/ }),

/***/ "./src/assets/images/restaurant.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/restaurant.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ac8b162f5cddd04965fe.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/assets/images/restaurant.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
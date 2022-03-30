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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  display: flex;\\n  height: 100vh;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\nli {\\n  border-bottom: 1px solid #cecece;\\n  padding: 0.5rem;\\n}\\n\\n#list-wrapper {\\n  border: 1px solid #f3f3f3;\\n  box-shadow: 0 3px 10px grey;\\n  width: 350px;\\n}\\n\\nli#list-title {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n#reset-completed {\\n  margin-left: auto;\\n}\\n\\n#reload-icon {\\n  font-size: 0.7rem;\\n  color: #c1c1c1;\\n}\\n\\n#new-item {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n#add-icon {\\n  font-size: 0.5rem;\\n  color: #c1c1c1;\\n  margin-left: auto;\\n}\\n\\n#add-item {\\n  display: block;\\n  border: none;\\n  font-style: italic;\\n  width: 100%;\\n}\\n\\n#add-item:focus-visible {\\n  outline-style: none;\\n}\\n\\n#add-item::placeholder {\\n  color: grey;\\n}\\n\\n#clear-completed {\\n  color: grey;\\n  border: none;\\n  width: 100%;\\n  height: 100%;\\n  background-color: #f1f1f1;\\n  padding: 1rem;\\n}\\n\\n.todo-item {\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: flex-start;\\n  gap: 0.5rem;\\n}\\n\\n.todo-item > * {\\n  background: transparent;\\n}\\n\\n.status {\\n  height: 1.2rem;\\n  width: 1.2rem;\\n  background-color: transparent;\\n  border: 2px solid #c1c1c1;\\n  border-radius: 3px;\\n}\\n\\n.status .check {\\n  display: none;\\n}\\n\\n.completed .status {\\n  border: none;\\n}\\n\\n.completed .status .check {\\n  display: block;\\n  color: blue;\\n}\\n\\n.description {\\n  font-family: Arial, Helvetica, sans-serif;\\n  width: 100%;\\n  height: 100%;\\n  border: none;\\n}\\n\\n.completed .description {\\n  text-decoration: line-through;\\n  color: grey;\\n}\\n\\n.description:focus-visible {\\n  outline-style: none;\\n}\\n\\n#triple-dot {\\n  margin-left: auto;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 2px;\\n}\\n\\n.dot {\\n  width: 4px;\\n  height: 4px;\\n  border-radius: 50%;\\n  background-color: #c1c1c1;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./style.css */ \"./src/style.css\");\nconst { startApp } = __webpack_require__(/*! ./modules/startApp */ \"./src/modules/startApp.js\");\n\nstartApp();\n\n\n//# sourceURL=webpack://list/./src/index.js?");

/***/ }),

/***/ "./src/modules/data.js":
/*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
/***/ ((module) => {

eval("const TASK_ID = [0];\nconst tasks = [];\n\nmodule.exports = { TASK_ID, tasks };\n\n\n//# sourceURL=webpack://list/./src/modules/data.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { TASK_ID, tasks } = __webpack_require__(/*! ./data */ \"./src/modules/data.js\");\n\n// Dom items\nconst todoContainerElem = document.getElementById('todo-items');\nconst newItemElem = document.getElementById('add-item');\n\nconst tripleDotHTML = `\n  <div id=\"triple-dot\">\n    <div class=\"dot\"></div>\n    <div class=\"dot\"></div>\n    <div class=\"dot\"></div>\n  </div>\n`;\n\nconst saveTasksOnLocalStorage = () => {\n  const stringifiedTasks = JSON.stringify(tasks);\n  localStorage.setItem('todo-tasks', stringifiedTasks);\n};\n\nconst getTasksFromLocalStorage = () => {\n  const stringTasks = localStorage.getItem('todo-tasks');\n  if (stringTasks) {\n    tasks.push(...JSON.parse(localStorage.getItem('todo-tasks')));\n  }\n};\n\nconst getCurrentTaskID = () => {\n  if (!tasks.length) return 0;\n  tasks.sort((a, b) => a.index - b.index);\n  return tasks.at(-1).index;\n};\n\nconst removeAllTasksFromDom = () => {\n  const todoContainerElem = document.getElementById('todo-items');\n  todoContainerElem.innerHTML = '';\n};\n\nconst updateTask = (taskEle) => {\n  if (taskEle) {\n    const inputField = taskEle.children[1];\n    const newValue = inputField.value;\n    const idx = inputField.dataset.index;\n    const task = tasks.find((task) => task.index === Number(idx));\n    if (!task) return;\n    task.description = newValue;\n    saveTasksOnLocalStorage();\n  }\n};\n\nconst resetTasksIndexes = () => {\n  // select all task elements on DOM\n  const tasksElems = document.querySelectorAll('.todo-item');\n  tasks.forEach((task, i) => {\n    task.index = i + 1;\n    tasksElems[i].id = `task-${i + 1}`;\n    tasksElems[i].dataset.index = i + 1;\n    tasksElems[i].querySelector('.status').dataset.index = i + 1;\n    tasksElems[i].querySelector('.description').dataset.index = i + 1;\n    tasksElems[i].querySelector('.action-icon').dataset.index = i + 1;\n    tasksElems[i].querySelector('#triple-dot').dataset.index = i + 1;\n  });\n};\n\n// Remove task from array, localStorage and DOM\n// and reset all task Id's\nconst deleteAndRemoveTask = (e) => {\n  const taskToRemoveEle = e.target.parentElement.parentElement;\n  const inputField = taskToRemoveEle.children[1];\n  const idx = inputField.dataset.index;\n  tasks.splice(idx - 1, 1);\n  taskToRemoveEle.remove();\n  resetTasksIndexes();\n  saveTasksOnLocalStorage();\n};\n\nconst createTaskElem = (task) => {\n  // create main list item\n  const listItem = document.createElement('li');\n  listItem.setAttribute('draggable', true);\n  listItem.id = `task-${task.index}`;\n  listItem.classList.add('todo-item');\n  listItem.dataset.index = task.index;\n  // create checkbox\n  const checkBoxDiv = document.createElement('div');\n  checkBoxDiv.innerHTML = '<i class=\"check fa-solid fa-check\"></i>';\n  checkBoxDiv.classList.add('status');\n  if (task.completed) {\n    listItem.classList.add('completed');\n  }\n  checkBoxDiv.dataset.index = task.index;\n\n  // create item for description\n  const textItem = document.createElement('input');\n  textItem.classList.add('description');\n  // create container for action icon\n  const iconContainer = document.createElement('div');\n  iconContainer.classList.add('action-icon');\n  iconContainer.dataset.index = task.index;\n  iconContainer.innerHTML = tripleDotHTML;\n  // set task value\n  textItem.value = task.description;\n  textItem.dataset.index = task.index;\n  // append childs\n  listItem.appendChild(checkBoxDiv);\n  listItem.appendChild(textItem);\n  listItem.appendChild(iconContainer);\n  // insert triple dot icon\n  return listItem;\n};\n\n// ------------- EVENT LISTENERS ---------- //\n\n// Listener for ACTIVATING FOCUS ON TASK INPUT\nconst taskOnFocusListener = (taskEle) => {\n  // Seelect input field to focus\n  const inputField = taskEle.children[1];\n  inputField.onfocus = () => {\n    const idx = inputField.dataset.index;\n    taskEle.style.backgroundColor = '#fffed2';\n    // Change icon to trash can\n    const iconContainer = document.querySelector(`#task-${idx} .action-icon`);\n    // Create event listener to delete item\n    iconContainer.addEventListener('mousedown', deleteAndRemoveTask);\n    iconContainer.innerHTML = '<i class=\"fa-solid fa-trash-can\"></i>';\n  };\n};\n\n// Listener LEAVING FOCUS ON TASK INPUT\nconst taskFocusOutListener = (taskEle) => {\n  // Seelect input field to focus\n  const inputField = taskEle.children[1];\n  inputField.addEventListener('focusout', () => {\n    const idx = inputField.dataset.index;\n    taskEle.style.backgroundColor = '#fff';\n    // Change back icon to triple dot\n    const iconContainer = document.querySelector(`#task-${idx} .action-icon`);\n    iconContainer.innerHTML = tripleDotHTML;\n    updateTask(taskEle);\n    // Remove delete eventListenr\n    iconContainer.removeEventListener('mousedown', deleteAndRemoveTask);\n  });\n};\n\n// change task status\nconst changeTaskStatus = (e) => {\n  let divContainer = null;\n  if (e.target.dataset.index) {\n    divContainer = e.target;\n  } else {\n    divContainer = e.target.parentElement;\n  }\n  const idx = divContainer.dataset.index;\n  const task = tasks[idx - 1];\n  task.completed = !task.completed;\n  divContainer.parentElement.classList.toggle('completed');\n  saveTasksOnLocalStorage();\n};\n\n// create event listener on checkbox and select task\nconst addTaskChangeStatusEvent = (listItemElem) => {\n  const divStatElem = listItemElem.querySelector('.status');\n  divStatElem.onclick = changeTaskStatus;\n};\n\n// display task on DOM and ADD EVENT LISTENERS to TASK\nconst displayTaskElem = (task) => {\n  const listItemElem = createTaskElem(task);\n  todoContainerElem.appendChild(listItemElem);\n  taskOnFocusListener(listItemElem);\n  taskFocusOutListener(listItemElem);\n  addTaskChangeStatusEvent(listItemElem);\n  // testing on drag end\n  listItemElem.ondragstart = (ev) => {\n    ev.dataTransfer.setData('id', ev.target.id);\n  };\n};\n\nconst displayAllTasks = () => {\n  getTasksFromLocalStorage();\n  tasks.forEach((task, i) => {\n    task.index = i + 1;\n    displayTaskElem(task);\n  });\n  // resetTasksIndexes();\n};\n\n// create event listener to clear all completed tasks\nconst clearAllCompletedTasks = () => {\n  const uncompletedTasks = tasks.filter((task) => !task.completed);\n  tasks.splice(0, tasks.length);\n  tasks.push(...uncompletedTasks);\n  saveTasksOnLocalStorage();\n  tasks.splice(0, tasks.length);\n  removeAllTasksFromDom();\n  displayAllTasks();\n};\n\n// ------------- EVENT LISTENERS ---------- //\n\nconst createTask = (event) => {\n  const eventType = event.constructor.name;\n  if (eventType === 'PointerEvent' || event.key === 'Enter') {\n    TASK_ID[0] = getCurrentTaskID();\n    TASK_ID[0] += 1;\n    const task = {\n      description: newItemElem.value,\n      completed: false,\n      index: TASK_ID[0],\n    };\n    newItemElem.value = '';\n    tasks.push(task);\n    saveTasksOnLocalStorage();\n    displayTaskElem(task);\n  }\n};\n\nmodule.exports = {\n  createTask,\n  clearAllCompletedTasks,\n  displayAllTasks,\n  addTaskChangeStatusEvent,\n  deleteAndRemoveTask,\n  resetTasksIndexes,\n  saveTasksOnLocalStorage,\n  removeAllTasksFromDom,\n  updateTask,\n};\n\n\n//# sourceURL=webpack://list/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/startApp.js":
/*!*********************************!*\
  !*** ./src/modules/startApp.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {\n  displayAllTasks,\n  createTask,\n  clearAllCompletedTasks,\n} = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\n// Dom items\nconst newItemElem = document.getElementById('add-item');\nconst addIconElem = document.getElementById('add-icon');\nconst resetCompletedElem = document.getElementById('reset-completed');\nconst btnClearCompletedElem = document.getElementById('clear-completed');\n\nconst startApp = () => {\n  window.onload = displayAllTasks;\n  newItemElem.onkeyup = createTask;\n  addIconElem.onclick = createTask;\n  resetCompletedElem.onclick = clearAllCompletedTasks;\n  btnClearCompletedElem.onclick = clearAllCompletedTasks;\n};\n\nmodule.exports = { startApp };\n\n\n//# sourceURL=webpack://list/./src/modules/startApp.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n:root {\r\n  --bc-header: rgb(255, 99, 71, 0.3);\r\n  --bc-body: rgb(255, 99, 71, 0.01);\r\n  --bc-body-2: rgb(255, 99, 71, 0.1);\r\n  --form-borders: rgba(0, 0, 0, 0.3);\r\n  --text-color: rgba(126, 79, 79, 0.607);\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template-rows: 1fr 6fr 6fr 0.3fr;\r\n  grid-template-columns: minmax(200px, 200px) 6fr;\r\n  height: 100vh;\r\n  background-color: var(--bc-body);\r\n  color: var(--text-color);\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\n/*header*/\r\nheader {\r\n  grid-area: 1 / 1 / 2 / 3;\r\n  background-color: var(--bc-header);\r\n  padding: 20px;\r\n}\r\n\r\nheader h1 {\r\n  display: flex;\r\n  align-items: center;\r\n  color: var(--text-color);\r\n}\r\n\r\n/*left content*/\r\n#left-content {\r\n  grid-area: 2 / 1 / 5 / 2;\r\n  background-color: var(--bc-body-2);\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 20px;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n}\r\n\r\n#li1 {\r\n  list-style-type: \"🏠\";\r\n  padding: 10px;\r\n}\r\n\r\n#li2 {\r\n  list-style-type: \"📥\";\r\n  padding: 10px;\r\n}\r\n\r\n#li3 {\r\n  list-style-type: \"📅\";\r\n  padding: 10px;\r\n}\r\n\r\n#li4 {\r\n  list-style-type: \"🚩\";\r\n  padding: 10px;\r\n}\r\n\r\n#li5 {\r\n  list-style-type: \"⛶\";\r\n  padding: 10px;\r\n}\r\n\r\n#li6 {\r\n  list-style-type: \"+\";\r\n  padding: 10px;\r\n}\r\n\r\nul li button {\r\n  background-color: none;\r\n  background: none;\r\n  border: none;\r\n  color: var(--text-color);\r\n  cursor: pointer;\r\n}\r\n\r\n/*right content*/\r\n#right-content {\r\n  grid-area: 2 / 2 / 3 / 3;\r\n}\r\n\r\n#right-content #addProjectBtn {\r\n  margin-left: 250px;\r\n  background: none;\r\n  border: none;\r\n  color: var(--text-color);\r\n}\r\n\r\n#right-content #addProjectBtn::before {\r\n  content: \"+\";\r\n  margin: 5px;\r\n}\r\n\r\n#right-content #addProjectBtn:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n/*footer*/\r\nfooter {\r\n  grid-area: 4 / 2 / 5 / 3;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: var(--text-color);\r\n}\r\n\r\nfooter a:hover {\r\n  text-decoration: 1px underline var(--text-color);\r\n}\r\n\r\nfooter a {\r\n  text-decoration: none;\r\n  color: var(--text-color);\r\n}\r\n\r\nfooter a:visited {\r\n  color: var(--text-color);\r\n}\r\n\r\n/*form div element*/\r\n\r\nform {\r\n  border: 1px solid var(--form-borders);\r\n  width: 500px;\r\n  height: 350px;\r\n  border-radius: 8px;\r\n  padding: 5px;\r\n  gap: 5px;\r\n  margin: auto auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: white;\r\n}\r\n\r\n.formDiv1 {\r\n  display: flex;\r\n  flex-direction: row;\r\n  border: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  gap: 12px;\r\n}\r\n\r\nform input,\r\nform select {\r\n  padding: 5px;\r\n  border-radius: 3px;\r\n  border: 1px solid var(--form-borders);\r\n}\r\n\r\n.formDiv3 {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: end;\r\n  border-top: 1px solid var(--form-borders);\r\n  padding: 8px;\r\n  padding-top: 20px;\r\n  gap: 5px;\r\n}\r\n\r\n.formDiv3 button {\r\n  padding: 3px 15px;\r\n  border: 1px solid var(--form-borders);\r\n  border-radius: 3px;\r\n}\r\n\r\n#dueDate {\r\n  cursor: pointer;\r\n}\r\n\r\n.formDiv2 {\r\n  padding: 0;\r\n  margin: 0;\r\n  gap: 8px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  justify-content: start;\r\n  color: var(--text-color);\r\n}\r\n\r\n.listItemsContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  justify-content: flex-start;\r\n  overflow-y: scroll;\r\n  width: 100%;\r\n  height: 150px;\r\n  gap: 10px;\r\n}\r\n\r\n.todoListInputContainer {\r\n  padding: 0;\r\n  margin: 0;\r\n  border: 1px solid var(--form-borders);\r\n  border-radius: 16px;\r\n}\r\n\r\n.todoListInputContainer input {\r\n  width: 150px;\r\n}\r\n\r\n.todoListInputContainer button {\r\n  width: 50px;\r\n}\r\n\r\n.todoListInputContainer input,\r\n.todoListInputContainer button {\r\n  border: none;\r\n  background: none;\r\n  outline: none;\r\n  color: black;\r\n}\r\n\r\n.todoListInputContainer button:hover {\r\n  scale: 1.5;\r\n  transition: 500ms;\r\n}\r\n\r\n.listItemDiv {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 5px;\r\n  color: black;\r\n}\r\n\r\n.allProjectsContainer {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 32px;\r\n  margin: 32px;\r\n}\r\n\r\n.projectContainer {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  outline: 1px solid black;\r\n  background-color: white;\r\n  padding: 8px;\r\n  color: black;\r\n  border-radius: 5px;\r\n}\r\n\r\n.titleAndDateContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 8px;\r\n  margin: 30px;\r\n}\r\n\r\n.currentWeekAndDay {\r\n  padding-bottom: 0;\r\n}\r\n\r\n.noProjects {\r\n  margin-left: 50px;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/calculateWeekNumber.js":
/*!************************************!*\
  !*** ./src/calculateWeekNumber.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ calculateWeekNumber)\n/* harmony export */ });\nfunction calculateWeekNumber(date) {\r\n  // date, how to calculate week: https://www.geeksforgeeks.org/calculate-current-week-number-in-javascript/\r\n  //let date = new Date();\r\n  //`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;\r\n  let startDate = new Date(date.getFullYear(), 0, 1)\r\n  var days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000))\r\n  return Math.ceil(days / 7)\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/calculateWeekNumber.js?");

/***/ }),

/***/ "./src/createForm.js":
/*!***************************!*\
  !*** ./src/createForm.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createForm)\n/* harmony export */ });\nfunction createForm(todoListItems) {\r\n  const Form = document.createElement(\"form\")\r\n  Form.id = \"createProjectForm\"\r\n\r\n  const title = document.createElement(\"input\")\r\n  title.addEventListener(\"keypress\", (e) => {\r\n    if (e.key === \"Enter\") {\r\n      e.preventDefault()\r\n    }\r\n  })\r\n  title.id = \"title\"\r\n  title.type = \"text\"\r\n  title.placeholder = \"Title\"\r\n\r\n  const description = document.createElement(\"input\")\r\n  description.addEventListener(\"keypress\", (e) => {\r\n    if (e.key === \"Enter\") {\r\n      e.preventDefault()\r\n    }\r\n  })\r\n  description.id = \"description\"\r\n  description.type = \"text\"\r\n  description.placeholder = \"Description\"\r\n\r\n  // date input\r\n  const formDiv1 = document.createElement(\"div\")\r\n  formDiv1.classList.add(\"formDiv1\")\r\n  const dueDate = document.createElement(\"input\")\r\n  dueDate.addEventListener(\"keypress\", (e) => {\r\n    if (e.key === \"Enter\") {\r\n      e.preventDefault()\r\n    }\r\n  })\r\n  dueDate.type = \"date\"\r\n  dueDate.id = \"dueDate\"\r\n  dueDate.min = \"2000-01-01\"\r\n  dueDate.max = \"2030-01-01\"\r\n  dueDate.placeholder = \"Choose date: yyyy-mm-dd\"\r\n\r\n  formDiv1.appendChild(dueDate)\r\n\r\n  // priority form\r\n  const priority = document.createElement(\"select\")\r\n  priority.id = \"priority\"\r\n  priority.name = \"priority\"\r\n\r\n  const priority1 = document.createElement(\"option\")\r\n  priority1.value = \"1\"\r\n  priority1.innerHTML = \"🟥 Priority 1\"\r\n\r\n  const priority2 = document.createElement(\"option\")\r\n  priority2.value = \"2\"\r\n  priority2.innerHTML = \"🟧 Priority 2\"\r\n\r\n  const priority3 = document.createElement(\"option\")\r\n  priority3.value = \"3\"\r\n  priority3.innerHTML = \"🟩 Priority 3\"\r\n\r\n  const priority4 = document.createElement(\"option\")\r\n  priority4.value = \"4\"\r\n  priority4.innerHTML = \"◻️ Priority 4\"\r\n\r\n  priority.appendChild(priority1)\r\n  priority.appendChild(priority2)\r\n  priority.appendChild(priority3)\r\n  priority.appendChild(priority4)\r\n  formDiv1.appendChild(priority)\r\n\r\n  // todo list\r\n  //const todoListItems = [];\r\n  const formDiv2 = document.createElement(\"div\")\r\n  formDiv2.classList.add(\"formDiv2\")\r\n\r\n  const todoListInputContainer = document.createElement(\"div\")\r\n  todoListInputContainer.classList.add(\"todoListInputContainer\")\r\n  const todoListInput = document.createElement(\"input\")\r\n  todoListInput.type = \"text\"\r\n  todoListInput.placeholder = \"Add a todo item\"\r\n  const todoListInputBtn = document.createElement(\"button\")\r\n  todoListInputBtn.innerHTML = \"+\"\r\n\r\n  todoListInputContainer.appendChild(todoListInput)\r\n  todoListInputContainer.appendChild(todoListInputBtn)\r\n\r\n  const listItemsContainer = document.createElement(\"div\")\r\n  listItemsContainer.classList.add(\"listItemsContainer\")\r\n\r\n  todoListInputBtn.addEventListener(\"click\", (e) => {\r\n    e.preventDefault()\r\n    //console.log(todoListInput.value)\r\n    todoListItems.push(todoListInput.value)\r\n\r\n    let listItemInput = document.createElement(\"input\")\r\n    listItemInput.type = \"checkbox\"\r\n    listItemInput.name = todoListInput.value\r\n\r\n    let listItemLabel = document.createElement(\"label\")\r\n    listItemLabel.innerHTML = todoListInput.value\r\n    listItemLabel.for = todoListInput.value\r\n\r\n    let listItemDiv = document.createElement(\"div\")\r\n    listItemDiv.classList.add(\"listItemDiv\")\r\n    listItemDiv.appendChild(listItemInput)\r\n    listItemDiv.appendChild(listItemLabel)\r\n\r\n    listItemsContainer.appendChild(listItemDiv)\r\n    todoListInput.value = \"\"\r\n  })\r\n\r\n  formDiv2.appendChild(todoListInputContainer)\r\n  formDiv2.appendChild(listItemsContainer)\r\n\r\n  //\r\n  const formDiv3 = document.createElement(\"div\")\r\n  formDiv3.classList.add(\"formDiv3\")\r\n\r\n  const addBtn = document.createElement(\"button\")\r\n  addBtn.type = \"submit\"\r\n  addBtn.innerHTML = \"Add project\"\r\n\r\n  const cancelBtn = document.createElement(\"button\")\r\n  cancelBtn.type = \"button\"\r\n  cancelBtn.id = \"cancelBtn\"\r\n  cancelBtn.innerHTML = \"Cancel\"\r\n\r\n  formDiv3.appendChild(cancelBtn)\r\n  formDiv3.appendChild(addBtn)\r\n\r\n  // add all elements to the form\r\n  Form.appendChild(title)\r\n  Form.appendChild(description)\r\n  Form.appendChild(formDiv1)\r\n  Form.appendChild(formDiv2)\r\n  Form.appendChild(formDiv3)\r\n\r\n  //\r\n  const rightContent = document.getElementById(\"right-content\")\r\n  rightContent.appendChild(Form)\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/createForm.js?");

/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createProject)\n/* harmony export */ });\nfunction createProject(\r\n  title,\r\n  description,\r\n  dueDate,\r\n  priority,\r\n  todoListItems\r\n) {\r\n  return { title, description, dueDate, priority, todoListItems }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/createProject.js?");

/***/ }),

/***/ "./src/deleteForm.js":
/*!***************************!*\
  !*** ./src/deleteForm.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ deleteForm)\n/* harmony export */ });\nfunction deleteForm() {\r\n  const rightContent = document.getElementById(\"right-content\")\r\n  const Form = document.querySelector(\"form\")\r\n  rightContent.removeChild(Form)\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/deleteForm.js?");

/***/ }),

/***/ "./src/formIsValid.js":
/*!****************************!*\
  !*** ./src/formIsValid.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formIsValid)\n/* harmony export */ });\nfunction formIsValid(title, description, dueDate, priority) {\r\n  if (\r\n    title.value !== \"\" &&\r\n    description.value !== \"\" &&\r\n    dueDate.value !== \"\" &&\r\n    priority.value !== \"\"\r\n  ) {\r\n    return true\r\n  } else {\r\n    return false\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/formIsValid.js?");

/***/ }),

/***/ "./src/getProjectsThatExpireThisWeek.js":
/*!**********************************************!*\
  !*** ./src/getProjectsThatExpireThisWeek.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getProjectsThatExpireThisWeek)\n/* harmony export */ });\n/* harmony import */ var _calculateWeekNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculateWeekNumber */ \"./src/calculateWeekNumber.js\");\n\r\n\r\nfunction getProjectsThatExpireThisWeek() {\r\n  const projectsThatExpireThisWeek = []\r\n  let date = new Date()\r\n  var weekToday = (0,_calculateWeekNumber__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(date)\r\n  var projectWeek\r\n  //console.log('Date:' + date);\r\n  //console.log('date.getFullYear()' + date.getFullYear());\r\n  //console.log('Week today: ' + weekToday);\r\n\r\n  //\r\n  const propertyNames = Object.getOwnPropertyNames(localStorage)\r\n  for (let i = 0; i < localStorage.length; i++) {\r\n    let Title = propertyNames[i]\r\n    let project = JSON.parse(localStorage.getItem(Title))\r\n    //console.log('Date: ' + project.dueDate + ' and week: ' + calculateWeekNumber(new Date(project.dueDate)));\r\n    projectWeek = (0,_calculateWeekNumber__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Date(project.dueDate))\r\n\r\n    if (weekToday === projectWeek) {\r\n      projectsThatExpireThisWeek.push(project)\r\n    }\r\n  }\r\n  return projectsThatExpireThisWeek\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/getProjectsThatExpireThisWeek.js?");

/***/ }),

/***/ "./src/getProjectsThatExpireToday.js":
/*!*******************************************!*\
  !*** ./src/getProjectsThatExpireToday.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getProjectsThatExpireToday)\n/* harmony export */ });\nfunction getProjectsThatExpireToday() {\r\n  const projectsThatExpireToday = []\r\n  let date = new Date()\r\n  let day = date.getDate()\r\n  if (day < 10) {\r\n    day = `0${day}`\r\n  } // prevents syntax error\r\n  date = `${date.getFullYear()}-${date.getMonth() + 1}-${day}`\r\n\r\n  const propertyNames = Object.getOwnPropertyNames(localStorage)\r\n  for (let i = 0; i < localStorage.length; i++) {\r\n    let Title = propertyNames[i]\r\n    let project = JSON.parse(localStorage.getItem(Title))\r\n    //console.log(project.dueDate);\r\n    //console.log(date);\r\n    if (date === project.dueDate) {\r\n      projectsThatExpireToday.push(project)\r\n    }\r\n  }\r\n  return projectsThatExpireToday\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/getProjectsThatExpireToday.js?");

/***/ }),

/***/ "./src/getSortedProjects.js":
/*!**********************************!*\
  !*** ./src/getSortedProjects.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getSortedProjects)\n/* harmony export */ });\nfunction getSortedProjects() {\r\n  const sortedProjects = []\r\n  const propertyNames = Object.getOwnPropertyNames(localStorage)\r\n\r\n  for (let i = 0; i < localStorage.length; i++) {\r\n    let Title = propertyNames[i]\r\n    let project = JSON.parse(localStorage.getItem(Title))\r\n    //console.log(project);\r\n    //console.log(project.priority == 4);\r\n    if (project.priority == 1) {\r\n      sortedProjects.push(project)\r\n    }\r\n  }\r\n  for (let i = 0; i < localStorage.length; i++) {\r\n    let Title = propertyNames[i]\r\n    let project = JSON.parse(localStorage.getItem(Title))\r\n    if (project.priority == 2) {\r\n      sortedProjects.push(project)\r\n    }\r\n  }\r\n  for (let i = 0; i < localStorage.length; i++) {\r\n    let Title = propertyNames[i]\r\n    let project = JSON.parse(localStorage.getItem(Title))\r\n    if (project.priority == 3) {\r\n      sortedProjects.push(project)\r\n    }\r\n  }\r\n  for (let i = 0; i < localStorage.length; i++) {\r\n    let Title = propertyNames[i]\r\n    let project = JSON.parse(localStorage.getItem(Title))\r\n    if (project.priority == 4) {\r\n      sortedProjects.push(project)\r\n    }\r\n  }\r\n  return sortedProjects\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/getSortedProjects.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createForm */ \"./src/createForm.js\");\n/* harmony import */ var _formIsValid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formIsValid */ \"./src/formIsValid.js\");\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n/* harmony import */ var _deleteForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleteForm */ \"./src/deleteForm.js\");\n/* harmony import */ var _viewAllProjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewAllProjects */ \"./src/viewAllProjects.js\");\n/* harmony import */ var _removeAllChildNodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./removeAllChildNodes */ \"./src/removeAllChildNodes.js\");\n/* harmony import */ var _updateTitleAndDate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateTitleAndDate */ \"./src/updateTitleAndDate.js\");\n/* harmony import */ var _runHomeTab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./runHomeTab */ \"./src/runHomeTab.js\");\n/* harmony import */ var _runTodayTab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./runTodayTab */ \"./src/runTodayTab.js\");\n/* harmony import */ var _runWeekTab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./runWeekTab */ \"./src/runWeekTab.js\");\n/* harmony import */ var _runPriorityTab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./runPriorityTab */ \"./src/runPriorityTab.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n// Everything in this file should only handle all you see on the first page and nothing else\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst homeTabBtn = document.getElementById(\"homeTabBtn\")\r\nconst todayTabBtn = document.getElementById(\"todayTabBtn\")\r\nconst weekTabBtn = document.getElementById(\"weekTabBtn\")\r\nconst priorityTabBtn = document.getElementById(\"priorityTabBtn\")\r\nconst addProjectBtn = document.getElementById(\"addProjectBtn\")\r\n\r\naddProjectBtn.addEventListener(\"click\", () => {\r\n  ;(0,_removeAllChildNodes__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(document.getElementById(\"right-content\"))\r\n  ;(0,_updateTitleAndDate__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"Add project\")\r\n\r\n  //\r\n  const todoListItems = []\r\n  ;(0,_createForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todoListItems)\r\n  const Form = document.getElementById(\"createProjectForm\")\r\n  const cancelBtn = document.getElementById(\"cancelBtn\")\r\n\r\n  //\r\n  Form.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault()\r\n    if ((0,_formIsValid__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(title, description, dueDate, priority)) {\r\n      //console.log('form is valid');\r\n      let title = document.getElementById(\"title\").value\r\n      let description = document.getElementById(\"description\").value\r\n      let dueDate = document.getElementById(\"dueDate\").value\r\n      let priority = document.getElementById(\"priority\").value\r\n      let project = (0,_createProject__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\r\n        title,\r\n        description,\r\n        dueDate,\r\n        priority,\r\n        todoListItems\r\n      )\r\n\r\n      localStorage.setItem(`${title}`, JSON.stringify(project))\r\n\r\n      //console.log(project);\r\n      Form.reset()\r\n    } else {\r\n      alert(\"Please fill in the form correctly\")\r\n    }\r\n  })\r\n\r\n  //\r\n  cancelBtn.addEventListener(\"click\", () => {\r\n    ;(0,_deleteForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n  })\r\n})\r\n\r\nhomeTabBtn.addEventListener(\"click\", () => {\r\n  ;(0,_runHomeTab__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\n})\r\n\r\ntodayTabBtn.addEventListener(\"click\", () => {\r\n  ;(0,_runTodayTab__WEBPACK_IMPORTED_MODULE_8__[\"default\"])()\r\n})\r\n\r\nweekTabBtn.addEventListener(\"click\", () => {\r\n  ;(0,_runWeekTab__WEBPACK_IMPORTED_MODULE_9__[\"default\"])()\r\n})\r\n\r\npriorityTabBtn.addEventListener(\"click\", () => {\r\n  ;(0,_runPriorityTab__WEBPACK_IMPORTED_MODULE_10__[\"default\"])()\r\n})\r\n\r\nallProjectsTabBtn.addEventListener(\"click\", () => {\r\n  ;(0,_viewAllProjects__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n})\r\n\r\ndocument.body.onload = (0,_runHomeTab__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/removeAllChildNodes.js":
/*!************************************!*\
  !*** ./src/removeAllChildNodes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ removeAllChildNodes)\n/* harmony export */ });\nfunction removeAllChildNodes(parent) {\r\n  while (parent.firstChild) {\r\n    parent.removeChild(parent.firstChild)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/removeAllChildNodes.js?");

/***/ }),

/***/ "./src/runHomeTab.js":
/*!***************************!*\
  !*** ./src/runHomeTab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ runHomeTab)\n/* harmony export */ });\n/* harmony import */ var _removeAllChildNodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeAllChildNodes */ \"./src/removeAllChildNodes.js\");\n/* harmony import */ var _updateTitleAndDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateTitleAndDate */ \"./src/updateTitleAndDate.js\");\n\r\n\r\n\r\nfunction runHomeTab() {\r\n  (0,_removeAllChildNodes__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document.getElementById(\"right-content\"))\r\n  ;(0,_updateTitleAndDate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Home\")\r\n  let numberOfProjects\r\n\r\n  //\r\n\r\n  if (localStorage.length === 0) {\r\n    const noProjects = document.createElement(\"p\")\r\n    noProjects.classList.add(\"noProjects\")\r\n    noProjects.innerHTML = \"You have no current projects\"\r\n    const rightContent = document.getElementById(\"right-content\")\r\n    rightContent.appendChild(noProjects)\r\n  } else if (0 < localStorage.length && localStorage.length < 3) {\r\n    numberOfProjects = localStorage.length\r\n    const allProjectsContainer = document.createElement(\"div\")\r\n    allProjectsContainer.classList.add(\"allProjectsContainer\")\r\n    allProjectsContainer.id = \"allProjectsContainer\"\r\n    const rightContent = document.getElementById(\"right-content\")\r\n    rightContent.appendChild(allProjectsContainer)\r\n\r\n    //console.log(numberOfProjects);\r\n    //\r\n    const propertyNames = Object.getOwnPropertyNames(localStorage)\r\n    for (let i = 0; i < numberOfProjects; i++) {\r\n      let projectContainer = document.createElement(\"div\")\r\n      projectContainer.classList.add(\"projectContainer\")\r\n      let p1 = document.createElement(\"p\")\r\n      let p2 = document.createElement(\"p\")\r\n      let p3 = document.createElement(\"p\")\r\n      let p4 = document.createElement(\"p\")\r\n      let p5 = document.createElement(\"p\")\r\n\r\n      let Title = propertyNames[i]\r\n      let project = JSON.parse(localStorage.getItem(Title))\r\n      p1.innerHTML = `Title: ${project.title}`\r\n      p2.innerHTML = `Description: ${project.description}`\r\n      p3.innerHTML = `Due date: ${project.dueDate}`\r\n      p4.innerHTML = `Priority: ${project.priority}`\r\n      p5.innerHTML = `Todo list: ${project.todoListItems}`\r\n\r\n      projectContainer.id = project.title\r\n      projectContainer.appendChild(p1)\r\n      projectContainer.appendChild(p2)\r\n      projectContainer.appendChild(p3)\r\n      projectContainer.appendChild(p4)\r\n      projectContainer.appendChild(p5)\r\n\r\n      allProjectsContainer.appendChild(projectContainer)\r\n    }\r\n  } else {\r\n    numberOfProjects = 3\r\n    const allProjectsContainer = document.createElement(\"div\")\r\n    allProjectsContainer.classList.add(\"allProjectsContainer\")\r\n    allProjectsContainer.id = \"allProjectsContainer\"\r\n    const rightContent = document.getElementById(\"right-content\")\r\n    rightContent.appendChild(allProjectsContainer)\r\n\r\n    //console.log(numberOfProjects);\r\n    //\r\n    const propertyNames = Object.getOwnPropertyNames(localStorage)\r\n    for (let i = 0; i < numberOfProjects; i++) {\r\n      let projectContainer = document.createElement(\"div\")\r\n      projectContainer.classList.add(\"projectContainer\")\r\n      let p1 = document.createElement(\"p\")\r\n      let p2 = document.createElement(\"p\")\r\n      let p3 = document.createElement(\"p\")\r\n      let p4 = document.createElement(\"p\")\r\n      let p5 = document.createElement(\"p\")\r\n\r\n      let Title = propertyNames[i]\r\n      let project = JSON.parse(localStorage.getItem(Title))\r\n      p1.innerHTML = `Title: ${project.title}`\r\n      p2.innerHTML = `Description: ${project.description}`\r\n      p3.innerHTML = `Due date: ${project.dueDate}`\r\n      p4.innerHTML = `Priority: ${project.priority}`\r\n      p5.innerHTML = `Todo list: ${project.todoListItems}`\r\n\r\n      projectContainer.id = project.title\r\n      projectContainer.appendChild(p1)\r\n      projectContainer.appendChild(p2)\r\n      projectContainer.appendChild(p3)\r\n      projectContainer.appendChild(p4)\r\n      projectContainer.appendChild(p5)\r\n\r\n      allProjectsContainer.appendChild(projectContainer)\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/runHomeTab.js?");

/***/ }),

/***/ "./src/runPriorityTab.js":
/*!*******************************!*\
  !*** ./src/runPriorityTab.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ runPriorityTab)\n/* harmony export */ });\n/* harmony import */ var _removeAllChildNodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeAllChildNodes */ \"./src/removeAllChildNodes.js\");\n/* harmony import */ var _updateTitleAndDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateTitleAndDate */ \"./src/updateTitleAndDate.js\");\n/* harmony import */ var _getSortedProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getSortedProjects */ \"./src/getSortedProjects.js\");\n\r\n\r\n\r\n\r\nfunction runPriorityTab() {\r\n  (0,_removeAllChildNodes__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document.getElementById(\"right-content\"))\r\n  ;(0,_updateTitleAndDate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Priority\")\r\n  const sortedProjects = (0,_getSortedProjects__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n  //console.log(sortedProjects);\r\n\r\n  //console.log(sortedProjects);\r\n  let N = sortedProjects.length\r\n\r\n  if (N === 0) {\r\n    const noProjects = document.createElement(\"p\")\r\n    noProjects.classList.add(\"noProjects\")\r\n    noProjects.innerHTML = \"You have no current projects\"\r\n    const rightContent = document.getElementById(\"right-content\")\r\n    rightContent.appendChild(noProjects)\r\n    return\r\n  }\r\n\r\n  const allProjectsContainer = document.createElement(\"div\")\r\n  allProjectsContainer.classList.add(\"allProjectsContainer\")\r\n  allProjectsContainer.id = \"allProjectsContainer\"\r\n  const rightContent = document.getElementById(\"right-content\")\r\n  rightContent.appendChild(allProjectsContainer)\r\n\r\n  for (let i = 0; i < N; i++) {\r\n    //console.log(sortedProjects[i]);\r\n\r\n    let projectContainer = document.createElement(\"div\")\r\n    projectContainer.classList.add(\"projectContainer\")\r\n    let p1 = document.createElement(\"p\")\r\n    let p2 = document.createElement(\"p\")\r\n    let p3 = document.createElement(\"p\")\r\n    let p4 = document.createElement(\"p\")\r\n    let p5 = document.createElement(\"p\")\r\n\r\n    let project = sortedProjects[i]\r\n    p1.innerHTML = `Title: ${project.title}`\r\n    p2.innerHTML = `Description: ${project.description}`\r\n    p3.innerHTML = `Due date: ${project.dueDate}`\r\n    p4.innerHTML = `Priority: ${project.priority}`\r\n    p5.innerHTML = `Todo list: ${project.todoListItems}`\r\n\r\n    projectContainer.id = project.title\r\n    projectContainer.appendChild(p1)\r\n    projectContainer.appendChild(p2)\r\n    projectContainer.appendChild(p3)\r\n    projectContainer.appendChild(p4)\r\n    projectContainer.appendChild(p5)\r\n\r\n    allProjectsContainer.appendChild(projectContainer)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/runPriorityTab.js?");

/***/ }),

/***/ "./src/runTodayTab.js":
/*!****************************!*\
  !*** ./src/runTodayTab.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ runTodaytab)\n/* harmony export */ });\n/* harmony import */ var _removeAllChildNodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeAllChildNodes */ \"./src/removeAllChildNodes.js\");\n/* harmony import */ var _updateTitleAndDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateTitleAndDate */ \"./src/updateTitleAndDate.js\");\n/* harmony import */ var _getProjectsThatExpireToday__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getProjectsThatExpireToday */ \"./src/getProjectsThatExpireToday.js\");\n\r\n\r\n\r\n\r\nfunction runTodaytab() {\r\n  (0,_removeAllChildNodes__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document.getElementById(\"right-content\"))\r\n  ;(0,_updateTitleAndDate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Today\")\r\n\r\n  const projectsThatExpireToday = (0,_getProjectsThatExpireToday__WEBPACK_IMPORTED_MODULE_2__[\"default\"])() // list with objects, if length=0 noll return\r\n  //console.log(projectsThatExpireToday);\r\n  let N = projectsThatExpireToday.length\r\n\r\n  if (N === 0) {\r\n    const noProjects = document.createElement(\"p\")\r\n    noProjects.classList.add(\"noProjects\")\r\n    noProjects.innerHTML = \"You have no current projects that expire today\"\r\n    const rightContent = document.getElementById(\"right-content\")\r\n    rightContent.appendChild(noProjects)\r\n    return\r\n  }\r\n\r\n  const allProjectsContainer = document.createElement(\"div\")\r\n  allProjectsContainer.classList.add(\"allProjectsContainer\")\r\n  allProjectsContainer.id = \"allProjectsContainer\"\r\n  const rightContent = document.getElementById(\"right-content\")\r\n  rightContent.appendChild(allProjectsContainer)\r\n\r\n  for (let i = 0; i < N; i++) {\r\n    //console.log(projectsThatExpireToday[i]);\r\n\r\n    let projectContainer = document.createElement(\"div\")\r\n    projectContainer.classList.add(\"projectContainer\")\r\n    let p1 = document.createElement(\"p\")\r\n    let p2 = document.createElement(\"p\")\r\n    let p3 = document.createElement(\"p\")\r\n    let p4 = document.createElement(\"p\")\r\n    let p5 = document.createElement(\"p\")\r\n\r\n    let project = projectsThatExpireToday[i]\r\n    p1.innerHTML = `Title: ${project.title}`\r\n    p2.innerHTML = `Description: ${project.description}`\r\n    p3.innerHTML = `Due date: ${project.dueDate}`\r\n    p4.innerHTML = `Priority: ${project.priority}`\r\n    p5.innerHTML = `Todo list: ${project.todoListItems}`\r\n\r\n    projectContainer.id = project.title\r\n    projectContainer.appendChild(p1)\r\n    projectContainer.appendChild(p2)\r\n    projectContainer.appendChild(p3)\r\n    projectContainer.appendChild(p4)\r\n    projectContainer.appendChild(p5)\r\n\r\n    allProjectsContainer.appendChild(projectContainer)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/runTodayTab.js?");

/***/ }),

/***/ "./src/runWeekTab.js":
/*!***************************!*\
  !*** ./src/runWeekTab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ runWeekTab)\n/* harmony export */ });\n/* harmony import */ var _removeAllChildNodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeAllChildNodes */ \"./src/removeAllChildNodes.js\");\n/* harmony import */ var _updateTitleAndDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateTitleAndDate */ \"./src/updateTitleAndDate.js\");\n/* harmony import */ var _getProjectsThatExpireThisWeek__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getProjectsThatExpireThisWeek */ \"./src/getProjectsThatExpireThisWeek.js\");\n\r\n\r\n\r\n\r\nfunction runWeekTab() {\r\n  (0,_removeAllChildNodes__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document.getElementById(\"right-content\"))\r\n  ;(0,_updateTitleAndDate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Week\")\r\n\r\n  const projectsThatExpireThisWeek = (0,_getProjectsThatExpireThisWeek__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n  //console.log(projectsThatExpireThisWeek);\r\n\r\n  //\r\n  let N = projectsThatExpireThisWeek.length\r\n\r\n  if (N === 0) {\r\n    const noProjects = document.createElement(\"p\")\r\n    noProjects.classList.add(\"noProjects\")\r\n    noProjects.innerHTML = \"You have no current projects that expires this week\"\r\n    const rightContent = document.getElementById(\"right-content\")\r\n    rightContent.appendChild(noProjects)\r\n    return\r\n  }\r\n\r\n  const allProjectsContainer = document.createElement(\"div\")\r\n  allProjectsContainer.classList.add(\"allProjectsContainer\")\r\n  allProjectsContainer.id = \"allProjectsContainer\"\r\n  const rightContent = document.getElementById(\"right-content\")\r\n  rightContent.appendChild(allProjectsContainer)\r\n\r\n  for (let i = 0; i < N; i++) {\r\n    //console.log(projectsThatExpireThisWeek[i]);\r\n\r\n    let projectContainer = document.createElement(\"div\")\r\n    projectContainer.classList.add(\"projectContainer\")\r\n    let p1 = document.createElement(\"p\")\r\n    let p2 = document.createElement(\"p\")\r\n    let p3 = document.createElement(\"p\")\r\n    let p4 = document.createElement(\"p\")\r\n    let p5 = document.createElement(\"p\")\r\n\r\n    let project = projectsThatExpireThisWeek[i]\r\n    p1.innerHTML = `Title: ${project.title}`\r\n    p2.innerHTML = `Description: ${project.description}`\r\n    p3.innerHTML = `Due date: ${project.dueDate}`\r\n    p4.innerHTML = `Priority: ${project.priority}`\r\n    p5.innerHTML = `Todo list: ${project.todoListItems}`\r\n\r\n    projectContainer.id = project.title\r\n    projectContainer.appendChild(p1)\r\n    projectContainer.appendChild(p2)\r\n    projectContainer.appendChild(p3)\r\n    projectContainer.appendChild(p4)\r\n    projectContainer.appendChild(p5)\r\n\r\n    allProjectsContainer.appendChild(projectContainer)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/runWeekTab.js?");

/***/ }),

/***/ "./src/updateTitleAndDate.js":
/*!***********************************!*\
  !*** ./src/updateTitleAndDate.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updateTitleAndDate)\n/* harmony export */ });\n/* harmony import */ var _calculateWeekNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculateWeekNumber */ \"./src/calculateWeekNumber.js\");\n\r\nfunction updateTitleAndDate(title) {\r\n  const titleAndDateContainer = document.createElement(\"div\")\r\n  titleAndDateContainer.classList.add(\"titleAndDateContainer\")\r\n\r\n  // title\r\n  const tabTitle = document.createElement(\"h1\")\r\n  tabTitle.id = \"tabTitle\"\r\n  tabTitle.innerHTML = title\r\n\r\n  //\r\n  let date = new Date()\r\n  var weekNumber = (0,_calculateWeekNumber__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(date)\r\n\r\n  const p = document.createElement(\"p\")\r\n  p.classList.add(\"currentDateAndWeek\")\r\n  p.innerHTML = `${date.getFullYear()}-${\r\n    date.getMonth() + 1\r\n  }-${date.getDate()} week ${weekNumber}`\r\n\r\n  // appending\r\n  titleAndDateContainer.appendChild(tabTitle)\r\n  titleAndDateContainer.appendChild(p)\r\n  document.getElementById(\"right-content\").appendChild(titleAndDateContainer)\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/updateTitleAndDate.js?");

/***/ }),

/***/ "./src/viewAllProjects.js":
/*!********************************!*\
  !*** ./src/viewAllProjects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ viewAllProjects)\n/* harmony export */ });\n/* harmony import */ var _removeAllChildNodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeAllChildNodes */ \"./src/removeAllChildNodes.js\");\n/* harmony import */ var _updateTitleAndDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateTitleAndDate */ \"./src/updateTitleAndDate.js\");\n\r\n\r\n\r\nfunction viewAllProjects() {\r\n  (0,_removeAllChildNodes__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document.getElementById(\"right-content\"))\r\n  ;(0,_updateTitleAndDate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"All projects\")\r\n\r\n  //\r\n  if (localStorage.length == 0) {\r\n    const noProjects = document.createElement(\"p\")\r\n    noProjects.classList.add(\"noProjects\")\r\n    noProjects.innerHTML = \"You have no current projects\"\r\n    const rightContent = document.getElementById(\"right-content\")\r\n    rightContent.appendChild(noProjects)\r\n    return\r\n  }\r\n\r\n  const allProjectsContainer = document.createElement(\"div\")\r\n  allProjectsContainer.classList.add(\"allProjectsContainer\")\r\n  allProjectsContainer.id = \"allProjectsContainer\"\r\n  const rightContent = document.getElementById(\"right-content\")\r\n  rightContent.appendChild(allProjectsContainer)\r\n\r\n  //\r\n  const propertyNames = Object.getOwnPropertyNames(localStorage)\r\n  for (let i = 0; i < propertyNames.length; i++) {\r\n    let projectContainer = document.createElement(\"div\")\r\n    projectContainer.classList.add(\"projectContainer\")\r\n    let p1 = document.createElement(\"p\")\r\n    let p2 = document.createElement(\"p\")\r\n    let p3 = document.createElement(\"p\")\r\n    let p4 = document.createElement(\"p\")\r\n    let p5 = document.createElement(\"p\")\r\n\r\n    let Title = propertyNames[i]\r\n    let project = JSON.parse(localStorage.getItem(Title))\r\n    p1.innerHTML = `Title: ${project.title}`\r\n    p2.innerHTML = `Description: ${project.description}`\r\n    p3.innerHTML = `Due date: ${project.dueDate}`\r\n    p4.innerHTML = `Priority: ${project.priority}`\r\n    p5.innerHTML = `Todo list: ${project.todoListItems}`\r\n\r\n    projectContainer.id = project.title\r\n    projectContainer.appendChild(p1)\r\n    projectContainer.appendChild(p2)\r\n    projectContainer.appendChild(p3)\r\n    projectContainer.appendChild(p4)\r\n    projectContainer.appendChild(p5)\r\n\r\n    allProjectsContainer.appendChild(projectContainer)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/viewAllProjects.js?");

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
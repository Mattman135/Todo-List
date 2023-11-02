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

/***/ "./src/createForm.js":
/*!***************************!*\
  !*** ./src/createForm.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createForm)\n/* harmony export */ });\nfunction createForm() {\r\n    const Form = document.createElement('form');\r\n    Form.id = 'createProjectForm';\r\n\r\n    const title = document.createElement('input');\r\n    title.id = 'title';\r\n    title.type = 'text';\r\n    title.placeholder = 'Title';\r\n\r\n    const description = document.createElement('input');\r\n    description.id = 'description';\r\n    description.type = 'text';\r\n    description.placeholder = 'Description';\r\n\r\n    // date input\r\n    const formDiv1 = document.createElement('div');\r\n    formDiv1.classList.add('formDiv1');\r\n    const dueDate = document.createElement('input');\r\n    dueDate.type = 'date';\r\n    dueDate.id = 'dueDate';\r\n    dueDate.min = '2000-01-01';\r\n    dueDate.max = '2030-01-01';\r\n    dueDate.placeholder = 'Choose date: yyyy-mm-dd';\r\n\r\n    formDiv1.appendChild(dueDate);\r\n\r\n    // priority form\r\n    const priority = document.createElement('select');\r\n    priority.id = 'priority';\r\n    priority.name = 'Priority';\r\n\r\n    const priority1 = document.createElement('option');\r\n    priority1.value = '1';\r\n    priority1.innerHTML = '🟥 Priority 1';\r\n\r\n    const priority2 = document.createElement('option');\r\n    priority2.value = '2';\r\n    priority2.innerHTML = '🟧 Priority 2';\r\n\r\n    const priority3 = document.createElement('option');\r\n    priority3.value = '3';\r\n    priority3.innerHTML = '🟩 Priority 3';\r\n\r\n    const priority4 = document.createElement('option');\r\n    priority4.value = '4';\r\n    priority4.innerHTML = '◻️ Priority 4';\r\n\r\n    priority.appendChild(priority1);\r\n    priority.appendChild(priority2);\r\n    priority.appendChild(priority3);\r\n    priority.appendChild(priority4);\r\n    formDiv1.appendChild(priority);\r\n\r\n    //\r\n    const formDiv2 = document.createElement('div');\r\n    formDiv2.classList.add('formDiv2');\r\n\r\n    const addBtn = document.createElement('button');\r\n    addBtn.type = 'submit';\r\n    addBtn.innerHTML = 'Add project';\r\n\r\n    const cancelBtn = document.createElement('button');\r\n    cancelBtn.type = 'button';\r\n    cancelBtn.id = 'cancelBtn';\r\n    cancelBtn.innerHTML = 'Cancel';\r\n\r\n    formDiv2.appendChild(cancelBtn);\r\n    formDiv2.appendChild(addBtn);\r\n\r\n    // add all elements to the form\r\n    Form.appendChild(title);\r\n    Form.appendChild(description);\r\n    Form.appendChild(formDiv1);\r\n    Form.appendChild(formDiv2);\r\n\r\n    //\r\n    const rightContent = document.getElementById('right-content');\r\n    rightContent.appendChild(Form);\r\n};\n\n//# sourceURL=webpack://todo-list/./src/createForm.js?");

/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createProject)\n/* harmony export */ });\nfunction createProject (title, description, dueDate, priority) {\r\n    return { title, description, dueDate, priority }\r\n};\n\n//# sourceURL=webpack://todo-list/./src/createProject.js?");

/***/ }),

/***/ "./src/deleteForm.js":
/*!***************************!*\
  !*** ./src/deleteForm.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ deleteForm)\n/* harmony export */ });\nfunction deleteForm() {\r\n    const rightContent = document.getElementById('right-content');\r\n    const Form = document.querySelector('form');\r\n    rightContent.removeChild(Form);\r\n};\n\n//# sourceURL=webpack://todo-list/./src/deleteForm.js?");

/***/ }),

/***/ "./src/formIsValid.js":
/*!****************************!*\
  !*** ./src/formIsValid.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formIsValid)\n/* harmony export */ });\nfunction formIsValid(title, description, dueDate, priority) {\r\n    if ((title.value !== '') && (description.value !== '') && (dueDate.value !== '') && (priority.value !== '')) {\r\n        return true;\r\n    } else {\r\n        return false;\r\n    }\r\n};\n\n//# sourceURL=webpack://todo-list/./src/formIsValid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createForm */ \"./src/createForm.js\");\n/* harmony import */ var _formIsValid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formIsValid */ \"./src/formIsValid.js\");\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n/* harmony import */ var _deleteForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleteForm */ \"./src/deleteForm.js\");\n// Everything in this file should only handle all you see on the first page and nothing else\r\n\r\n\r\n\r\n\r\n\r\nconst addProjectBtn = document.getElementById('addProjectBtn');\r\nconst projectList = [];\r\n\r\n\r\naddProjectBtn.addEventListener('click', () => {\r\n    addProjectBtn.disabled = true;\r\n    (0,_createForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    const Form = document.getElementById('createProjectForm');\r\n    const cancelBtn = document.getElementById('cancelBtn');\r\n    \r\n    //\r\n    Form.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n        if ((0,_formIsValid__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(title, description, dueDate, priority)) {\r\n\r\n            console.log('form is valid');\r\n            let title = document.getElementById('title').value;\r\n            let description = document.getElementById('description').value;\r\n            let dueDate = document.getElementById('dueDate').value;\r\n            let priority = document.getElementById('priority').value;\r\n            let project = (0,_createProject__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(title, description, dueDate, priority);\r\n            console.log(project);\r\n            addProjectBtn.disabled = false;\r\n            projectList.push(project);\r\n            console.log(\"project list\", projectList);\r\n        } else {\r\n            alert('Please fill in the form correctly');\r\n        }\r\n    });\r\n\r\n    //\r\n    cancelBtn.addEventListener('click', () => {\r\n        (0,_deleteForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n        addProjectBtn.disabled = false;\r\n    });\r\n\r\n});\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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
/******/ 			// no module.id needed
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
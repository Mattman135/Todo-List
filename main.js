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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createForm)\n/* harmony export */ });\nfunction createForm(todoListItems) {\r\n    const Form = document.createElement('form');\r\n    Form.id = 'createProjectForm';\r\n\r\n    const title = document.createElement('input');\r\n    title.id = 'title';\r\n    title.type = 'text';\r\n    title.placeholder = 'Title';\r\n\r\n    const description = document.createElement('input');\r\n    description.id = 'description';\r\n    description.type = 'text';\r\n    description.placeholder = 'Description';\r\n\r\n    // date input\r\n    const formDiv1 = document.createElement('div');\r\n    formDiv1.classList.add('formDiv1');\r\n    const dueDate = document.createElement('input');\r\n    dueDate.type = 'date';\r\n    dueDate.id = 'dueDate';\r\n    dueDate.min = '2000-01-01';\r\n    dueDate.max = '2030-01-01';\r\n    dueDate.placeholder = 'Choose date: yyyy-mm-dd';\r\n\r\n    formDiv1.appendChild(dueDate);\r\n\r\n    // priority form\r\n    const priority = document.createElement('select');\r\n    priority.id = 'priority';\r\n    priority.name = 'priority';\r\n\r\n    const priority1 = document.createElement('option');\r\n    priority1.value = '1';\r\n    priority1.innerHTML = '🟥 Priority 1';\r\n\r\n    const priority2 = document.createElement('option');\r\n    priority2.value = '2';\r\n    priority2.innerHTML = '🟧 Priority 2';\r\n\r\n    const priority3 = document.createElement('option');\r\n    priority3.value = '3';\r\n    priority3.innerHTML = '🟩 Priority 3';\r\n\r\n    const priority4 = document.createElement('option');\r\n    priority4.value = '4';\r\n    priority4.innerHTML = '◻️ Priority 4';\r\n\r\n    priority.appendChild(priority1);\r\n    priority.appendChild(priority2);\r\n    priority.appendChild(priority3);\r\n    priority.appendChild(priority4);\r\n    formDiv1.appendChild(priority);\r\n\r\n    // todo list\r\n    //const todoListItems = [];\r\n    const formDiv2 = document.createElement('div');\r\n    formDiv2.classList.add('formDiv2');\r\n\r\n    const todoListInputContainer = document.createElement('div');\r\n    todoListInputContainer.classList.add('todoListInputContainer');\r\n    const todoListInput = document.createElement('input');\r\n    todoListInput.type = 'text';\r\n    todoListInput.placeholder = 'Add a todo item';\r\n    const todoListInputBtn = document.createElement('button');\r\n    todoListInputBtn.innerHTML = '+';\r\n\r\n    todoListInputContainer.appendChild(todoListInput);\r\n    todoListInputContainer.appendChild(todoListInputBtn);\r\n\r\n    todoListInputBtn.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        console.log(todoListInput.value);\r\n        todoListItems.push(todoListInput.value);\r\n\r\n        let listItemInput = document.createElement('input');\r\n        listItemInput.type = 'checkbox';\r\n        listItemInput.name = todoListInput.value;\r\n\r\n        let listItemLabel = document.createElement('label');\r\n        listItemLabel.innerHTML = todoListInput.value;\r\n        listItemLabel.for = todoListInput.value;\r\n\r\n        let listItemDiv = document.createElement('div');\r\n        listItemDiv.classList.add('listItemDiv');\r\n        listItemDiv.appendChild(listItemInput);\r\n        listItemDiv.appendChild(listItemLabel);\r\n        \r\n        formDiv2.appendChild(listItemDiv);\r\n    })\r\n\r\n    \r\n    formDiv2.appendChild(todoListInputContainer);\r\n\r\n    //\r\n    const formDiv3 = document.createElement('div');\r\n    formDiv3.classList.add('formDiv3');\r\n\r\n    const addBtn = document.createElement('button');\r\n    addBtn.type = 'submit';\r\n    addBtn.innerHTML = 'Add project';\r\n\r\n    const cancelBtn = document.createElement('button');\r\n    cancelBtn.type = 'button';\r\n    cancelBtn.id = 'cancelBtn';\r\n    cancelBtn.innerHTML = 'Cancel';\r\n\r\n    formDiv3.appendChild(cancelBtn);\r\n    formDiv3.appendChild(addBtn);\r\n\r\n    // add all elements to the form\r\n    Form.appendChild(title);\r\n    Form.appendChild(description);\r\n    Form.appendChild(formDiv1);\r\n    Form.appendChild(formDiv2);\r\n    Form.appendChild(formDiv3);\r\n\r\n    //\r\n    const rightContent = document.getElementById('right-content');\r\n    rightContent.appendChild(Form);\r\n};\n\n//# sourceURL=webpack://todo-list/./src/createForm.js?");

/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createProject)\n/* harmony export */ });\nfunction createProject (title, description, dueDate, priority, todoListItems) {\r\n    return { title, description, dueDate, priority, todoListItems }\r\n};\n\n//# sourceURL=webpack://todo-list/./src/createProject.js?");

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

/***/ "./src/getProjectsThatExpireToday.js":
/*!*******************************************!*\
  !*** ./src/getProjectsThatExpireToday.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getProjectsThatExpireToday)\n/* harmony export */ });\nfunction getProjectsThatExpireToday() {\r\n    const projectsThatExpireToday = [];\r\n    let date = new Date();\r\n    let day = date.getDate();\r\n    if (day < 10) { day = `0${day}`; }; // otherwise well have syntax error\r\n    date = `${date.getFullYear()}-${date.getMonth()+1}-${day}`;\r\n\r\n    const propertyNames = Object.getOwnPropertyNames(localStorage);\r\n    for (let i=0; i < localStorage.length; i++) {\r\n        let Title = propertyNames[i];\r\n        let project = JSON.parse(localStorage.getItem(Title));\r\n        //console.log(project.dueDate);\r\n        //console.log(date);\r\n        if (date === project.dueDate) {\r\n            projectsThatExpireToday.push(project);\r\n        }\r\n    }\r\n    return projectsThatExpireToday;\r\n};\n\n//# sourceURL=webpack://todo-list/./src/getProjectsThatExpireToday.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createForm */ \"./src/createForm.js\");\n/* harmony import */ var _formIsValid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formIsValid */ \"./src/formIsValid.js\");\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n/* harmony import */ var _deleteForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleteForm */ \"./src/deleteForm.js\");\n/* harmony import */ var _viewAllProjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewAllProjects */ \"./src/viewAllProjects.js\");\n/* harmony import */ var _removeAllChildNodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./removeAllChildNodes */ \"./src/removeAllChildNodes.js\");\n/* harmony import */ var _updateTitleAndDate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateTitleAndDate */ \"./src/updateTitleAndDate.js\");\n/* harmony import */ var _runHomeTab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./runHomeTab */ \"./src/runHomeTab.js\");\n/* harmony import */ var _runTodayTab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./runTodayTab */ \"./src/runTodayTab.js\");\n// Everything in this file should only handle all you see on the first page and nothing else\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst homeTabBtn = document.getElementById('homeTabBtn');\r\nconst todayTabBtn = document.getElementById('todayTabBtn');\r\nconst weekTabBtn = document.getElementById('weekTabBtn');\r\nconst priorityTabBtn = document.getElementById('priorityTabBtn');\r\nconst addProjectBtn = document.getElementById('addProjectBtn');\r\nconst tabTitle = document.getElementById('tabTitle');\r\n\r\naddProjectBtn.addEventListener('click', () => {\r\n    (0,_removeAllChildNodes__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(document.getElementById('right-content'));\r\n    (0,_updateTitleAndDate__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('Add project');\r\n    \r\n\r\n    //\r\n    const todoListItems = [];\r\n    (0,_createForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todoListItems);\r\n    const Form = document.getElementById('createProjectForm');\r\n    const cancelBtn = document.getElementById('cancelBtn');\r\n\r\n    //\r\n    Form.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n        if ((0,_formIsValid__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(title, description, dueDate, priority)) {\r\n\r\n            //console.log('form is valid');\r\n            let title = document.getElementById('title').value;\r\n            let description = document.getElementById('description').value;\r\n            let dueDate = document.getElementById('dueDate').value;\r\n            let priority = document.getElementById('priority').value;\r\n            let project = (0,_createProject__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(title, description, dueDate, priority, todoListItems);\r\n\r\n            localStorage.setItem(`${title}`, JSON.stringify(project));\r\n\r\n            //console.log(project);            \r\n            Form.reset();\r\n\r\n        } else {\r\n            alert('Please fill in the form correctly');\r\n        }\r\n    });\r\n\r\n    //\r\n    cancelBtn.addEventListener('click', () => {\r\n        (0,_deleteForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n    });\r\n});\r\n\r\nhomeTabBtn.addEventListener('click', () => {\r\n    (0,_runHomeTab__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n});\r\n\r\ntodayTabBtn.addEventListener('click', () => {\r\n    (0,_runTodayTab__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n});\r\n\r\nweekTabBtn.addEventListener('click', () => {\r\n    (0,_removeAllChildNodes__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(document.getElementById('right-content'));\r\n    (0,_updateTitleAndDate__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('Week');\r\n});\r\n\r\npriorityTabBtn.addEventListener('click', () => {\r\n    (0,_removeAllChildNodes__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(document.getElementById('right-content'));\r\n    (0,_updateTitleAndDate__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('Priority');\r\n});\r\n\r\nallProjectsTabBtn.addEventListener('click', () => {\r\n    (0,_removeAllChildNodes__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(document.getElementById('right-content'));\r\n    (0,_updateTitleAndDate__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('All projects');\r\n    (0,_viewAllProjects__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n});\r\n\r\ndocument.body.onload = (0,_runHomeTab__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/removeAllChildNodes.js":
/*!************************************!*\
  !*** ./src/removeAllChildNodes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ removeAllChildNodes)\n/* harmony export */ });\nfunction removeAllChildNodes(parent) {\r\n    while (parent.firstChild) {\r\n        parent.removeChild(parent.firstChild);\r\n    }\r\n};\n\n//# sourceURL=webpack://todo-list/./src/removeAllChildNodes.js?");

/***/ }),

/***/ "./src/runHomeTab.js":
/*!***************************!*\
  !*** ./src/runHomeTab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ runHomeTab)\n/* harmony export */ });\n/* harmony import */ var _removeAllChildNodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeAllChildNodes */ \"./src/removeAllChildNodes.js\");\n/* harmony import */ var _updateTitleAndDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateTitleAndDate */ \"./src/updateTitleAndDate.js\");\n\r\n\r\n\r\nfunction runHomeTab() {\r\n    (0,_removeAllChildNodes__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document.getElementById('right-content'));\r\n    (0,_updateTitleAndDate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Home');\r\n    let numberOfProjects;\r\n\r\n    //\r\n\r\n    if (localStorage.length === 0) {\r\n        const noProjects = document.createElement('p');\r\n        noProjects.innerHTML = \"You have no current projects\";\r\n        const rightContent = document.getElementById('right-content');\r\n        rightContent.appendChild(noProjects);\r\n    } else if (0 < localStorage.length && localStorage.length < 3) {\r\n        numberOfProjects = localStorage.length;\r\n        const allProjectsContainer = document.createElement('div');\r\n        allProjectsContainer.classList.add('allProjectsContainer');\r\n        allProjectsContainer.id = 'allProjectsContainer';\r\n        const rightContent = document.getElementById('right-content');\r\n        rightContent.appendChild(allProjectsContainer);\r\n\r\n        console.log(numberOfProjects);\r\n        //\r\n        const propertyNames = Object.getOwnPropertyNames(localStorage);\r\n        for (let i=0; i < numberOfProjects; i++) {\r\n            let projectContainer = document.createElement('div');\r\n            projectContainer.classList.add('projectContainer');\r\n            let p1 = document.createElement('p');\r\n            let p2 = document.createElement('p');\r\n            let p3 = document.createElement('p');\r\n            let p4 = document.createElement('p');\r\n            let p5 = document.createElement('p');\r\n\r\n            let Title = propertyNames[i];\r\n            let project = JSON.parse(localStorage.getItem(Title));\r\n            p1.innerHTML = `Title: ${project.title}`;\r\n            p2.innerHTML = `Description: ${project.description}`;\r\n            p3.innerHTML = `Due date: ${project.dueDate}`;\r\n            p4.innerHTML = `Priority: ${project.priority}`;\r\n            p5.innerHTML = `Todo list: ${project.todoListItems}`;\r\n\r\n            projectContainer.id = project.title;\r\n            projectContainer.appendChild(p1);\r\n            projectContainer.appendChild(p2);\r\n            projectContainer.appendChild(p3);\r\n            projectContainer.appendChild(p4);\r\n            projectContainer.appendChild(p5);\r\n\r\n            // delete button\r\n            const deleteBtn = document.createElement('button');\r\n            deleteBtn.type = 'button';\r\n            deleteBtn.innerHTML = '🗑️';\r\n            deleteBtn.addEventListener('click', () => {\r\n                localStorage.removeItem(project.title);\r\n                document.getElementById(project.title).remove();\r\n            });\r\n\r\n            projectContainer.appendChild(deleteBtn);\r\n\r\n            allProjectsContainer.appendChild(projectContainer);\r\n        }\r\n    } else {\r\n        numberOfProjects = 3;\r\n        const allProjectsContainer = document.createElement('div');\r\n        allProjectsContainer.classList.add('allProjectsContainer');\r\n        allProjectsContainer.id = 'allProjectsContainer';\r\n        const rightContent = document.getElementById('right-content');\r\n        rightContent.appendChild(allProjectsContainer);\r\n\r\n        //console.log(numberOfProjects);\r\n        //\r\n        const propertyNames = Object.getOwnPropertyNames(localStorage);\r\n        for (let i=0; i < numberOfProjects; i++) {\r\n            let projectContainer = document.createElement('div');\r\n            projectContainer.classList.add('projectContainer');\r\n            let p1 = document.createElement('p');\r\n            let p2 = document.createElement('p');\r\n            let p3 = document.createElement('p');\r\n            let p4 = document.createElement('p');\r\n            let p5 = document.createElement('p');\r\n\r\n            let Title = propertyNames[i];\r\n            let project = JSON.parse(localStorage.getItem(Title));\r\n            p1.innerHTML = `Title: ${project.title}`;\r\n            p2.innerHTML = `Description: ${project.description}`;\r\n            p3.innerHTML = `Due date: ${project.dueDate}`;\r\n            p4.innerHTML = `Priority: ${project.priority}`;\r\n            p5.innerHTML = `Todo list: ${project.todoListItems}`;\r\n\r\n            projectContainer.id = project.title;\r\n            projectContainer.appendChild(p1);\r\n            projectContainer.appendChild(p2);\r\n            projectContainer.appendChild(p3);\r\n            projectContainer.appendChild(p4);\r\n            projectContainer.appendChild(p5);\r\n\r\n            // delete button\r\n            const deleteBtn = document.createElement('button');\r\n            deleteBtn.type = 'button';\r\n            deleteBtn.innerHTML = '🗑️';\r\n            deleteBtn.addEventListener('click', () => {\r\n                localStorage.removeItem(project.title);\r\n                document.getElementById(project.title).remove();\r\n            });\r\n\r\n            projectContainer.appendChild(deleteBtn);\r\n\r\n            allProjectsContainer.appendChild(projectContainer);\r\n        }\r\n    }\r\n\r\n};\n\n//# sourceURL=webpack://todo-list/./src/runHomeTab.js?");

/***/ }),

/***/ "./src/runTodayTab.js":
/*!****************************!*\
  !*** ./src/runTodayTab.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ runTodaytab)\n/* harmony export */ });\n/* harmony import */ var _removeAllChildNodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeAllChildNodes */ \"./src/removeAllChildNodes.js\");\n/* harmony import */ var _updateTitleAndDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateTitleAndDate */ \"./src/updateTitleAndDate.js\");\n/* harmony import */ var _getProjectsThatExpireToday__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getProjectsThatExpireToday */ \"./src/getProjectsThatExpireToday.js\");\n\r\n\r\n\r\n\r\nfunction runTodaytab() {\r\n    (0,_removeAllChildNodes__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document.getElementById('right-content'));\r\n    (0,_updateTitleAndDate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Today');\r\n\r\n\r\n    const projectsThatExpireToday = (0,_getProjectsThatExpireToday__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // list with objects, if length=0 noll return\r\n    //console.log(projectsThatExpireToday);\r\n    let N = projectsThatExpireToday.length;\r\n\r\n    if (N === 0) {\r\n        const noProjects = document.createElement('p');\r\n        noProjects.innerHTML = \"You have no current projects that expire today\";\r\n        const rightContent = document.getElementById('right-content');\r\n        rightContent.appendChild(noProjects);\r\n        return;\r\n    }\r\n\r\n    const allProjectsContainer = document.createElement('div');\r\n    allProjectsContainer.classList.add('allProjectsContainer');\r\n    allProjectsContainer.id = 'allProjectsContainer';\r\n    const rightContent = document.getElementById('right-content');\r\n    rightContent.appendChild(allProjectsContainer);\r\n\r\n    for (let i=0; i<N; i++) {\r\n        console.log(projectsThatExpireToday[i]);\r\n\r\n        let projectContainer = document.createElement('div');\r\n        projectContainer.classList.add('projectContainer');\r\n        let p1 = document.createElement('p');\r\n        let p2 = document.createElement('p');\r\n        let p3 = document.createElement('p');\r\n        let p4 = document.createElement('p');\r\n        let p5 = document.createElement('p');\r\n\r\n        let project = projectsThatExpireToday[i];\r\n        p1.innerHTML = `Title: ${project.title}`;\r\n        p2.innerHTML = `Description: ${project.description}`;\r\n        p3.innerHTML = `Due date: ${project.dueDate}`;\r\n        p4.innerHTML = `Priority: ${project.priority}`;\r\n        p5.innerHTML = `Todo list: ${project.todoListItems}`;\r\n\r\n        projectContainer.id = project.title;\r\n        projectContainer.appendChild(p1);\r\n        projectContainer.appendChild(p2);\r\n        projectContainer.appendChild(p3);\r\n        projectContainer.appendChild(p4);\r\n        projectContainer.appendChild(p5);\r\n\r\n        // delete button\r\n        const deleteBtn = document.createElement('button');\r\n        deleteBtn.type = 'button';\r\n        deleteBtn.innerHTML = '🗑️';\r\n        deleteBtn.addEventListener('click', () => {\r\n            localStorage.removeItem(project.title);\r\n            document.getElementById(project.title).remove();\r\n        });\r\n        projectContainer.appendChild(deleteBtn);\r\n        allProjectsContainer.appendChild(projectContainer);\r\n    }\r\n};\n\n//# sourceURL=webpack://todo-list/./src/runTodayTab.js?");

/***/ }),

/***/ "./src/updateTitleAndDate.js":
/*!***********************************!*\
  !*** ./src/updateTitleAndDate.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updateTitleAndDate)\n/* harmony export */ });\nfunction updateTitleAndDate(title) {\r\n    const titleAndDateContainer = document.createElement('div');\r\n    titleAndDateContainer.classList.add('titleAndDateContainer');\r\n\r\n    // title\r\n    const tabTitle = document.createElement('h1');\r\n    tabTitle.id = 'tabTitle';\r\n    tabTitle.innerHTML = title;\r\n\r\n    // date, how to calculate week: https://www.geeksforgeeks.org/calculate-current-week-number-in-javascript/\r\n    let date = new Date();\r\n    //`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;\r\n    let startDate = new Date(date.getFullYear(), 0, 1);\r\n    var days = Math.floor((date-startDate) / (24 * 60 * 60 * 1000));\r\n    var weekNumber = Math.ceil(days / 7);\r\n\r\n    const p = document.createElement('p');\r\n    p.classList.add('currentDateAndWeek');\r\n    p.innerHTML = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} week ${weekNumber}`;\r\n\r\n\r\n    // appending\r\n    titleAndDateContainer.appendChild(tabTitle);\r\n    titleAndDateContainer.appendChild(p);\r\n    document.getElementById('right-content').appendChild(titleAndDateContainer);\r\n};\n\n//# sourceURL=webpack://todo-list/./src/updateTitleAndDate.js?");

/***/ }),

/***/ "./src/viewAllProjects.js":
/*!********************************!*\
  !*** ./src/viewAllProjects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ viewAllProjects)\n/* harmony export */ });\nfunction viewAllProjects() {\r\n    const allProjectsContainer = document.createElement('div');\r\n    allProjectsContainer.classList.add('allProjectsContainer');\r\n    allProjectsContainer.id = 'allProjectsContainer';\r\n    const rightContent = document.getElementById('right-content');\r\n    rightContent.appendChild(allProjectsContainer);\r\n\r\n    //\r\n    const propertyNames = Object.getOwnPropertyNames(localStorage);\r\n    for (let i=0; i < propertyNames.length; i++) {\r\n\r\n        let projectContainer = document.createElement('div');\r\n        projectContainer.classList.add('projectContainer');\r\n        let p1 = document.createElement('p');\r\n        let p2 = document.createElement('p');\r\n        let p3 = document.createElement('p');\r\n        let p4 = document.createElement('p');\r\n        let p5 = document.createElement('p');\r\n\r\n        let Title = propertyNames[i];\r\n        let project = JSON.parse(localStorage.getItem(Title));\r\n        p1.innerHTML = `Title: ${project.title}`;\r\n        p2.innerHTML = `Description: ${project.description}`;\r\n        p3.innerHTML = `Due date: ${project.dueDate}`;\r\n        p4.innerHTML = `Priority: ${project.priority}`;\r\n        p5.innerHTML = `Todo list: ${project.todoListItems}`;\r\n\r\n        projectContainer.id = project.title;\r\n        projectContainer.appendChild(p1);\r\n        projectContainer.appendChild(p2);\r\n        projectContainer.appendChild(p3);\r\n        projectContainer.appendChild(p4);\r\n        projectContainer.appendChild(p5);\r\n\r\n        // delete button\r\n        const deleteBtn = document.createElement('button');\r\n        deleteBtn.type = 'button';\r\n        deleteBtn.innerHTML = '🗑️';\r\n        deleteBtn.addEventListener('click', () => {\r\n            localStorage.removeItem(project.title);\r\n            document.getElementById(project.title).remove();\r\n        });\r\n\r\n        projectContainer.appendChild(deleteBtn);\r\n\r\n        allProjectsContainer.appendChild(projectContainer);\r\n    }\r\n};\n\n//# sourceURL=webpack://todo-list/./src/viewAllProjects.js?");

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
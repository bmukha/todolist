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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderProjects\": () => (/* binding */ renderProjects),\n/* harmony export */   \"renderTasks\": () => (/* binding */ renderTasks)\n/* harmony export */ });\nconst asideWrapper = document.querySelector(\"#aside-wrapper\");\r\nconst main = document.querySelector(\"#main\");\r\n\r\nfunction renderProjects(projects) {\r\n  asideWrapper.innerHTML = \"\";\r\n  if (projects.length) {\r\n    projects.forEach((element) => {\r\n      const newProj = document.createElement(\"h3\");\r\n      newProj.innerHTML = `<h3>${element.title}</h3>`;\r\n      asideWrapper.appendChild(newProj);\r\n    });\r\n  }\r\n}\r\n\r\nfunction renderTasks(project) {\r\n  if (project.tasks.length) {\r\n    main.innerHTML = `<button id=\"addNewTask\">NEW TASK</button>`;\r\n    project.tasks.forEach((item) => {\r\n      const newDiv = document.createElement(\"div\");\r\n      newDiv.innerHTML = `<p>Title: ${item.title}</p>\r\n      <p>Description: ${item.description}</p>\r\n      <p>Due date: ${item.dueDate}</p>\r\n      <p>Priority: ${item.priority}</p>`;\r\n      main.appendChild(newDiv);\r\n    });\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projectItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectItems.js */ \"./src/projectItems.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\r\n\r\n\r\n\r\nlet currentProjects = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.isItemInLocalStorage)()\r\n  ? (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getProjectsFromLocalStorage)()\r\n  : [new _projectItems_js__WEBPACK_IMPORTED_MODULE_0__.default(\"default project\")];\r\n\r\n\r\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(currentProjects);\r\n\r\nfunction addNewProject(title) {\r\n  currentProjects.push(new _projectItems_js__WEBPACK_IMPORTED_MODULE_0__.default(title));\r\n  (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(currentProjects);\r\n}\r\n\r\n\r\n\r\n\r\nwindow.addEventListener(\"beforeunload\", function( event ) {\r\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjectsToLocalStorage)(currentProjects);\r\n});\r\n\r\n\r\n\r\n\r\nfunction deleteAllProjects() {\r\n  currentProjects = [];\r\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjectsToLocalStorage)((currentProjects));\r\n  (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(currentProjects);\r\n}\r\n\r\nconst deleteAllProjectsButton = document.getElementById(\"deleteAll\");\r\ndeleteAllProjectsButton.addEventListener(\"click\", deleteAllProjects);\r\n\r\nconst addNewProjectButton = document.getElementById(\"addNewProject\");\r\naddNewProjectButton.addEventListener(\"click\", () => {\r\n  const title = prompt(\"Enter the title\", \"title\");\r\n  addNewProject(title);\r\n});\r\n\r\n\r\n const addNewTaskButton = document.querySelector(\"#addNewTask\");\r\n\r\nlet activeProject = currentProjects[currentProjects.length - 1];\r\nconsole.log(activeProject);\r\n\r\nfunction addNewTask() {\r\n  let title = prompt(\"Enter title\", \"title\");\r\n  let description = prompt(\"Enter description\", \"description\");\r\n  let dueDate = prompt(\"Enter due date\", \"due date\");\r\n  let priority = prompt(\"Enter priority\", \"priority\");\r\n  activeProject.newTask(title, description, dueDate, priority);\r\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjectsToLocalStorage)(currentProjects);\r\n  (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(activeProject);\r\n}\r\n\r\naddNewTaskButton.addEventListener(\"click\", addNewTask);\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/projectItems.js":
/*!*****************************!*\
  !*** ./src/projectItems.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ProjectItem {\r\n  constructor(title) {\r\n    this.title = title;\r\n    this.tasks = [];\r\n  }\r\n  newTask(title, description, dueDate, priority) {\r\n    this.tasks.push({title, description, dueDate, priority});\r\n  }  \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectItem);\r\n\n\n//# sourceURL=webpack://todolist/./src/projectItems.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProjectsFromLocalStorage\": () => (/* binding */ getProjectsFromLocalStorage),\n/* harmony export */   \"saveProjectsToLocalStorage\": () => (/* binding */ saveProjectsToLocalStorage),\n/* harmony export */   \"isItemInLocalStorage\": () => (/* binding */ isItemInLocalStorage)\n/* harmony export */ });\nfunction getProjectsFromLocalStorage() {\r\n  if (isItemInLocalStorage(\"currentProjects\")) {\r\n    currentProjects = [];\r\n    let tempArray = JSON.parse(localStorage.getItem(\"currentProjects\"));\r\n\r\n    tempArray.forEach(function (project) {\r\n      let tempProject = new ProjectItem(project.title);\r\n      tempProject.tasks = [...project.tasks];\r\n    });\r\n    currentProjects.push(tempProject);\r\n  } else currentProjects = [];\r\n}\r\n\r\nfunction saveProjectsToLocalStorage(array) {\r\n  localStorage.setItem(\"currentProjects\", JSON.stringify(array));\r\n}\r\n\r\nfunction isItemInLocalStorage(item) {\r\n  return localStorage.getItem(item) !== null;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/storage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
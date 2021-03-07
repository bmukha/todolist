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

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/***/ ((module) => {

eval("/* \n(The MIT License)\nCopyright (c) 2014-2021 Halász Ádám <adam@aimform.com>\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n\n//  Unique Hexatridecimal ID Generator\n// ================================================\n\n//  Dependencies\n// ================================================\nvar pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;\nvar address = '';\nif(false){ var i, mac, networkInterfaces; } \n\n//  Exports\n// ================================================\nmodule.exports = module.exports.default = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }\nmodule.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }\nmodule.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }\n\n//  Helpers\n// ================================================\nfunction now(){\n    var time = Date.now();\n    var last = now.last || time;\n    return now.last = time > last ? time : last + 1;\n}\n\n\n//# sourceURL=webpack://todolist/./node_modules/uniqid/index.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderProjects\": () => (/* binding */ renderProjects),\n/* harmony export */   \"renderTasks\": () => (/* binding */ renderTasks)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\n\r\nconst asideWrapper = document.querySelector(\"#aside-wrapper\");\r\nconst main = document.querySelector(\"#main\");\r\n\r\nfunction renderProjects(projects) {\r\n  asideWrapper.innerHTML = \"\";\r\n  if (projects.length) {\r\n    projects.forEach((element) => {\r\n      const newProj = document.createElement(\"div\");\r\n      newProj.classList.add(\"project\");\r\n      newProj.id = element.id;\r\n      newProj.innerHTML = `\r\n      <div id=\"title-and-close\">\r\n        <h3>${element.title}</h3>\r\n        <button class=\"close-icon\"></button>\r\n      </div>`;\r\n      newProj.addEventListener(\"click\", (event) => {\r\n        event.stopPropagation;\r\n        event.preventDefault;\r\n        console.log(event.currentTarget);\r\n        console.log(event.currentTarget.id);\r\n      });\r\n      asideWrapper.appendChild(newProj);\r\n      const addNewButton = document.createElement(\"button\");\r\n      addNewButton.classList.add(\"addNewButton\");\r\n      addNewButton.textContent = \"new task\";\r\n      addNewButton.addEventListener(\"click\", () => {\r\n        addNewTask(element);\r\n      });\r\n      newProj.appendChild(addNewButton);\r\n    });\r\n  }\r\n}\r\n\r\nfunction addNewTask(project) {\r\n  let title = prompt(\"Enter title\", \"title\");\r\n  let description = prompt(\"Enter description\", \"description\");\r\n  let dueDate = prompt(\"Enter due date\", \"due date\");\r\n  let priority = prompt(\"Enter priority\", \"priority\");\r\n  project.newTask(title, description, dueDate, priority);\r\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveProjectsToLocalStorage)(_index_js__WEBPACK_IMPORTED_MODULE_1__.currentProjects);\r\n  renderTasks(project);\r\n}\r\n\r\nfunction renderTasks(project) {\r\n  if (!project & !project.tasks & !project.tasks.length) {\r\n    return;\r\n  }\r\n  main.innerHTML = \"\";\r\n  project.tasks.forEach((item) => {\r\n    const newDiv = document.createElement(\"div\");\r\n    newDiv.classList.add(\"task\");\r\n    newDiv.innerHTML = `<button class=\"close-icon\"></button>\r\n      <p>Title: ${item.title}</p>\r\n      <p>Description: ${item.description}</p>\r\n      <p>Due date: ${item.dueDate}</p>\r\n      <p>Priority: ${item.priority}</p>`;\r\n    main.appendChild(newDiv);\r\n  });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"currentProjects\": () => (/* binding */ currentProjects)\n/* harmony export */ });\n/* harmony import */ var _projectItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectItems.js */ \"./src/projectItems.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\r\n\r\n\r\n\r\nlet currentProjects = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getProjectsFromLocalStorage)();\r\n\r\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(currentProjects);\r\n\r\nif(currentProjects.length){\r\n  (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(currentProjects[currentProjects.length - 1]);\r\n}\r\n\r\n\r\nfunction addNewProject(title) {\r\n  currentProjects.push(new _projectItems_js__WEBPACK_IMPORTED_MODULE_0__.default(title));\r\n  (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(currentProjects);\r\n}\r\n\r\nwindow.addEventListener(\"beforeunload\", function (event) {\r\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjectsToLocalStorage)(currentProjects);\r\n});\r\n\r\nfunction deleteAllProjects() {\r\n  currentProjects = [];\r\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjectsToLocalStorage)(currentProjects);\r\n}\r\n\r\nconst deleteAllProjectsButton = document.getElementById(\"deleteAll\");\r\ndeleteAllProjectsButton.addEventListener(\"click\", deleteAllProjects);\r\n\r\nconst addNewProjectButton = document.getElementById(\"addNewProject\");\r\naddNewProjectButton.addEventListener(\"click\", () => {\r\n  const title = prompt(\"Enter the title\", \"title\");\r\n  addNewProject(title);\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/projectItems.js":
/*!*****************************!*\
  !*** ./src/projectItems.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_uniqid_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/uniqid/index.js */ \"./node_modules/uniqid/index.js\");\n\r\nclass ProjectItem {\r\n  constructor(title) {\r\n    this.title = title;\r\n    this.id = _node_modules_uniqid_index_js__WEBPACK_IMPORTED_MODULE_0__('proj-');\r\n    this.tasks = [];\r\n  }\r\n  newTask(title, description, dueDate, priority) {\r\n    this.tasks.push({title, description, dueDate, priority});\r\n  }  \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectItem);\r\n\n\n//# sourceURL=webpack://todolist/./src/projectItems.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProjectsFromLocalStorage\": () => (/* binding */ getProjectsFromLocalStorage),\n/* harmony export */   \"saveProjectsToLocalStorage\": () => (/* binding */ saveProjectsToLocalStorage),\n/* harmony export */   \"isItemInLocalStorage\": () => (/* binding */ isItemInLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _projectItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectItems.js */ \"./src/projectItems.js\");\n\r\n\r\nfunction getProjectsFromLocalStorage() {\r\n  let currentProjects = [];\r\n  if (isItemInLocalStorage(\"currentProjects\")) {\r\n    currentProjects = [];\r\n    let tempArray = JSON.parse(localStorage.getItem(\"currentProjects\"));\r\n\r\n    tempArray.forEach(function (project) {\r\n      let tempProject = new _projectItems_js__WEBPACK_IMPORTED_MODULE_0__.default(project.title);\r\n      tempProject.tasks = [...project.tasks];\r\n      currentProjects.push(tempProject);\r\n    });\r\n  } else {\r\n    currentProjects = [new _projectItems_js__WEBPACK_IMPORTED_MODULE_0__.default(\"default project\")];\r\n  }\r\n  return currentProjects;\r\n}\r\n\r\nfunction saveProjectsToLocalStorage(array) {\r\n  localStorage.setItem(\"currentProjects\", JSON.stringify(array));\r\n}\r\n\r\nfunction isItemInLocalStorage(item) {\r\n  return localStorage.getItem(item) !== null;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/storage.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.js");
/******/ })()
;
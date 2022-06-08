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

/***/ "./src/framework.js":
/*!**************************!*\
  !*** ./src/framework.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_world_world__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/world/world */ \"./src/modules/world/world.js\");\n/* harmony import */ var _modules_screens_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/screens/factory */ \"./src/modules/screens/factory.js\");\n/* harmony import */ var _models_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/factory */ \"./src/models/factory.js\");\n\r\n\r\n\r\n\r\nconst win = typeof unsafeWindow != 'undefined' ? unsafeWindow : window;\r\n\r\n(async () => {\r\n    if (!window.TWFramework) {\r\n        win.TWFramework = {};\r\n        win.TWFramework.ModelFactory = _models_factory__WEBPACK_IMPORTED_MODULE_2__.ModelFactory;\r\n        win.TWFramework.ScreenControllerFactory = _modules_screens_factory__WEBPACK_IMPORTED_MODULE_1__.ScreenControllerFactory;\r\n\r\n        win.TWFramework.World = await _modules_world_world__WEBPACK_IMPORTED_MODULE_0__.World.load();\r\n    }\r\n})();\r\n\n\n//# sourceURL=webpack://tw-framework/./src/framework.js?");

/***/ }),

/***/ "./src/models/ally.js":
/*!****************************!*\
  !*** ./src/models/ally.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ally\": () => (/* binding */ Ally)\n/* harmony export */ });\nclass Ally {\r\n    constructor(id, name, tag, playerCount, points, rank, bashpoints, bashpointsRank) {\r\n        this.id = id;\r\n        this.name = name;\r\n        this.tag = tag;\r\n        this.playerCount = playerCount;\r\n        this.points = points;\r\n        this.rank = rank;\r\n        this.bashpoints = bashpoints;\r\n        this.bashpointsRank = bashpointsRank;\r\n    }\r\n}\n\n//# sourceURL=webpack://tw-framework/./src/models/ally.js?");

/***/ }),

/***/ "./src/models/factory.js":
/*!*******************************!*\
  !*** ./src/models/factory.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ModelFactory\": () => (/* binding */ ModelFactory)\n/* harmony export */ });\n/* harmony import */ var _ally__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ally */ \"./src/models/ally.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/models/player.js\");\n\r\n\r\n\r\nclass ModelFactory {\r\n    static createAlly(id, name, tag, playerCount, points, rank, bashpoints, bashpointsRank) {\r\n        return new _ally__WEBPACK_IMPORTED_MODULE_0__.Ally(\r\n            id, name, tag, playerCount, points, rank, bashpoints, bashpointsRank\r\n        );\r\n    }\r\n\r\n    static createPlayer(id, name, points, rank, ally, villageCount) {\r\n        return new _player__WEBPACK_IMPORTED_MODULE_1__.Player(\r\n            id, name, points, rank, ally, villageCount\r\n        );\r\n    }\r\n}\n\n//# sourceURL=webpack://tw-framework/./src/models/factory.js?");

/***/ }),

/***/ "./src/models/player.js":
/*!******************************!*\
  !*** ./src/models/player.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\nclass Player {\r\n    constructor(id, name, points, rank, ally, villageCount) {\r\n        this.id = id;\r\n        this.name = name;\r\n        this.points = points;\r\n        this.rank = rank;\r\n        this.ally = ally;\r\n        this.villageCount = villageCount;\r\n    }\r\n}\n\n//# sourceURL=webpack://tw-framework/./src/models/player.js?");

/***/ }),

/***/ "./src/modules/screens/factory.js":
/*!****************************************!*\
  !*** ./src/modules/screens/factory.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ScreenControllerFactory\": () => (/* binding */ ScreenControllerFactory)\n/* harmony export */ });\n/* harmony import */ var _infoAllyController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./infoAllyController */ \"./src/modules/screens/infoAllyController.js\");\n/* harmony import */ var _infoPlayerController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infoPlayerController */ \"./src/modules/screens/infoPlayerController.js\");\n\r\n\r\n\r\nclass ScreenControllerFactory {\r\n    static #controllers = {\r\n        'info_ally': new _infoAllyController__WEBPACK_IMPORTED_MODULE_0__.InfoAllyController(),\r\n        'info_player': new _infoPlayerController__WEBPACK_IMPORTED_MODULE_1__.InfoPlayerController()\r\n    }\r\n\r\n    static getCurrentScreenController() {\r\n        return this.getControllerForScreen(game_data.screen);\r\n    }\r\n\r\n    static getControllerForScreen(screen) {\r\n        return this.#controllers[screen];\r\n    }\r\n}\n\n//# sourceURL=webpack://tw-framework/./src/modules/screens/factory.js?");

/***/ }),

/***/ "./src/modules/screens/infoAllyController.js":
/*!***************************************************!*\
  !*** ./src/modules/screens/infoAllyController.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InfoAllyController\": () => (/* binding */ InfoAllyController)\n/* harmony export */ });\nclass InfoAllyController {\r\n    #TABLE_CLASSNAME = 'vis';\r\n\r\n    #ATTRIBUTE_TABLE_INDEX = 0;\r\n    #PLAYER_TABLE_INDEX = 1;\r\n\r\n    getAlly() {\r\n        let table = this.getAttributesTable();\r\n        let rows = Array.from(table.querySelectorAll('td:nth-child(2)'));\r\n\r\n        return {\r\n            id: InfoAlly.ally_id,\r\n            name: rows[0].innerText,\r\n            tag: rows[1].innerText,\r\n            playerCount: Number(rows[2].innerText),\r\n            points: Number(rows[4].innerText.replace('.', '')),\r\n            rank: Number(rows[5].innerText),\r\n            bashpoints: this.#getBashpoints(rows[7]),\r\n            bashpointsRank: this.#getBashpointsRank(rows[7])\r\n        };\r\n    }\r\n\r\n    getPlayers() {\r\n        let table = this.getPlayerTable();\r\n        let rows = Array.from(table.querySelectorAll('tr:nth-child(n+2)'));\r\n\r\n        let players = [];\r\n\r\n        for (let row of rows) {\r\n            let player = {\r\n                id: this.#getPlayerId(row.cells[0]),\r\n                name: this.#getPlayerName(row.cells[0]),\r\n                points: Number(row.cells[2].innerText.replace(',', '')),\r\n                rank: Number(row.cells[3].innerText),\r\n                ally: this.getAlly(),\r\n                villageCount: Number(row.cells[4].innerText)\r\n            };\r\n\r\n            players.push(player);\r\n        }\r\n\r\n        return players;\r\n    }\r\n\r\n    getAttributesTable() {\r\n        return this.#getTableByIndex(this.#ATTRIBUTE_TABLE_INDEX);\r\n    }\r\n\r\n    getPlayerTable() {\r\n        return this.#getTableByIndex(this.#PLAYER_TABLE_INDEX);\r\n    }\r\n\r\n    #getPlayerName(cell) {\r\n        let playerAnchor = cell.querySelector('a');\r\n\r\n        return playerAnchor.innerText;\r\n    }\r\n\r\n    #getBashpoints(cell) {\r\n        let bashpoints = cell.innerText;\r\n        bashpoints = bashpoints.substring(0, bashpoints.indexOf(' ') -1);\r\n\r\n        return Number(bashpoints.replace('.', ''));\r\n    }\r\n\r\n    #getBashpointsRank(cell) {\r\n        let bashpointsRank = cell.innerText;\r\n        bashpointsRank = bashpointsRank.substring(bashpointsRank.indexOf('(') + 1, bashpointsRank.indexOf(')'));\r\n\r\n        return Number(bashpointsRank.replace('.', ''));\r\n    }\r\n\r\n    #getPlayerId(cell) {\r\n        let playerAnchor = cell.querySelector('a');\r\n        let searchParams = new URLSearchParams(playerAnchor.href);\r\n\r\n        return Number(searchParams.get('id'));\r\n    }\r\n\r\n    #getTableByIndex(index) {\r\n        return document.getElementsByClassName(this.#TABLE_CLASSNAME)[index];\r\n    }\r\n}\n\n//# sourceURL=webpack://tw-framework/./src/modules/screens/infoAllyController.js?");

/***/ }),

/***/ "./src/modules/screens/infoPlayerController.js":
/*!*****************************************************!*\
  !*** ./src/modules/screens/infoPlayerController.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InfoPlayerController\": () => (/* binding */ InfoPlayerController)\n/* harmony export */ });\nclass InfoPlayerController {\r\n}\n\n//# sourceURL=webpack://tw-framework/./src/modules/screens/infoPlayerController.js?");

/***/ }),

/***/ "./src/modules/world/fetch.js":
/*!************************************!*\
  !*** ./src/modules/world/fetch.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchEndpoint\": () => (/* binding */ fetchEndpoint)\n/* harmony export */ });\nconst buildEndpointURL = (relativeURL) => {\r\n    let url = new URL(window.location.href);\r\n    return `${url.origin}/${relativeURL}`;\r\n};\r\n\r\nconst fetchEndpoint = async (relativeURL) => {\r\n    let url = buildEndpointURL(relativeURL);\r\n    let response = await fetch(url);\r\n    let text = await response.text();\r\n\r\n    return text;\r\n};\n\n//# sourceURL=webpack://tw-framework/./src/modules/world/fetch.js?");

/***/ }),

/***/ "./src/modules/world/parser.js":
/*!*************************************!*\
  !*** ./src/modules/world/parser.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parseXML\": () => (/* binding */ parseXML)\n/* harmony export */ });\nconst parseXML = (data) => {\r\n    let obj = {};\r\n\r\n    let parser = new DOMParser();\r\n    let xml = parser.parseFromString(data, 'text/xml');\r\n    let rootNode = xml.querySelector('config');\r\n\r\n    for (const node of rootNode.children) {\r\n        let key = firstLetterToUpperCase(node.localName);\r\n        obj[key] = {};\r\n\r\n        for (const propNode in node.children) {\r\n            let propertyKey = firstLetterToUpperCase(propNode.localName);\r\n\r\n            obj[key][propertyKey] = Number(propNode.innerHTML);\r\n        }\r\n    }\r\n\r\n    return obj;\r\n}\n\n//# sourceURL=webpack://tw-framework/./src/modules/world/parser.js?");

/***/ }),

/***/ "./src/modules/world/world.js":
/*!************************************!*\
  !*** ./src/modules/world/world.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"World\": () => (/* binding */ World)\n/* harmony export */ });\n/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ \"./src/modules/world/fetch.js\");\n/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser */ \"./src/modules/world/parser.js\");\n\r\n\r\n\r\nconst UNIT_INFO_URL = 'interface.php?func=get_unit_info';\r\nconst BUILDING_INFO_URL = 'interface.php?func=get_building_info';\r\n\r\nclass World {\r\n    constructor(unitInfo, buildingInfo) {\r\n        this.world = game_data.world;\r\n        this.UnitInfo = unitInfo;\r\n        this.BuildingInfo = buildingInfo;\r\n    }\r\n\r\n    static async load() {\r\n        let unitInfo = await this.#loadInfo(UNIT_INFO_URL);\r\n        let buildingInfo = await this.#loadInfo(BUILDING_INFO_URL);\r\n        \r\n        return new World(unitInfo, buildingInfo);\r\n    }\r\n\r\n    static async #loadInfo(infoURL) {\r\n        let data = await (0,_fetch__WEBPACK_IMPORTED_MODULE_0__.fetchEndpoint)(infoURL);\r\n        return (0,_parser__WEBPACK_IMPORTED_MODULE_1__.parseXML)(data);\r\n    }\r\n}\n\n//# sourceURL=webpack://tw-framework/./src/modules/world/world.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/framework.js");
/******/ 	
/******/ })()
;
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/oauth";
exports.ids = ["pages/api/oauth"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "./pages/api/oauth.js":
/*!****************************!*\
  !*** ./pages/api/oauth.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst url = __webpack_require__(/*! url */ \"url\");\nfunction handler(req, res) {\n    const Data = url.parse(req.url, true).query;\n    console.log(Data.code);\n    const fetching = function() {\n        axios__WEBPACK_IMPORTED_MODULE_0___default().get(`http://52.79.199.94:8080/callback/kakao/?code=${Data.code}`).then(function(response) {\n            console.log(response.data);\n        });\n    };\n    fetching();\n    res.redirect('/', 200);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvb2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRXlCO0FBRHpCLEtBQUssQ0FBQ0MsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLGdCQUFLO0FBR1YsUUFBUSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFFekMsS0FBSyxDQUFDQyxJQUFJLEdBQUdMLEdBQUcsQ0FBQ00sS0FBSyxDQUFDSCxHQUFHLENBQUNILEdBQUcsRUFBRSxJQUFJLEVBQUVPLEtBQUs7SUFDM0NDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixJQUFJLENBQUNLLElBQUk7SUFFckIsS0FBSyxDQUFDQyxRQUFRLEdBQUcsUUFBUSxHQUFFLENBQUM7UUFDMUJaLGdEQUFTLEVBQUUsOENBQThDLEVBQUVNLElBQUksQ0FBQ0ssSUFBSSxJQUFJRyxJQUFJLENBQUMsUUFBUSxDQUFDQyxRQUFRLEVBQUMsQ0FBQztZQUM5Rk4sT0FBTyxDQUFDQyxHQUFHLENBQUNLLFFBQVEsQ0FBQ0MsSUFBSTtRQUMzQixDQUFDO0lBQ0gsQ0FBQztJQUVESixRQUFRO0lBRVJQLEdBQUcsQ0FBQ1ksUUFBUSxDQUFDLENBQUcsSUFBQyxHQUFHO0FBQ3RCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21tdW5pdHktYXBwLy4vcGFnZXMvYXBpL29hdXRoLmpzPzAxNDgiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB1cmwgPSByZXF1aXJlKCd1cmwnKTtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcblxuICBjb25zdCBEYXRhID0gdXJsLnBhcnNlKHJlcS51cmwsIHRydWUpLnF1ZXJ5O1xuICBjb25zb2xlLmxvZyhEYXRhLmNvZGUpO1xuXG4gIGNvbnN0IGZldGNoaW5nID0gZnVuY3Rpb24oKXtcbiAgICBheGlvcy5nZXQoYGh0dHA6Ly81Mi43OS4xOTkuOTQ6ODA4MC9jYWxsYmFjay9rYWthby8/Y29kZT0ke0RhdGEuY29kZX1gKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gICAgfSk7XG4gIH1cblxuICBmZXRjaGluZygpO1xuXG4gIHJlcy5yZWRpcmVjdCgnLycsMjAwKTtcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsInVybCIsInJlcXVpcmUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiRGF0YSIsInBhcnNlIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiY29kZSIsImZldGNoaW5nIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInJlZGlyZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/oauth.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/oauth.js"));
module.exports = __webpack_exports__;

})();
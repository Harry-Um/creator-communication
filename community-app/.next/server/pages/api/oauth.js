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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst url = __webpack_require__(/*! url */ \"url\");\nfunction handler(req, res) {\n    const Data = url.parse(req.url, true).query;\n    const Code1 = Data.code;\n    const ServerLogin = async function(Code) {\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`http://52.79.199.94:8080/callback/kakao/?code=${Code}`);\n            const Token = response.data;\n            console.log(response.data);\n        } catch (err) {\n            console.log(\"error\");\n        }\n    };\n    ServerLogin(Code1);\n    res.redirect('/', 200);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvb2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFeUI7QUFDQTtBQUZ6QixLQUFLLENBQUNFLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQyxnQkFBSztBQUlWLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBRXpDLEtBQUssQ0FBQ0MsSUFBSSxHQUFHTCxHQUFHLENBQUNNLEtBQUssQ0FBQ0gsR0FBRyxDQUFDSCxHQUFHLEVBQUUsSUFBSSxFQUFFTyxLQUFLO0lBQzNDLEtBQUssQ0FBQ0MsS0FBSSxHQUFHSCxJQUFJLENBQUNJLElBQUk7SUFHdEIsS0FBSyxDQUFDQyxXQUFXLGtCQUFrQkYsSUFBSSxFQUFDLENBQUM7UUFDdkMsR0FBRyxFQUFDO1lBQ0YsS0FBSyxDQUFDRyxRQUFRLEdBQUcsS0FBSyxDQUFDYixnREFBUyxFQUFFLDhDQUE4QyxFQUFFVSxJQUFJO1lBQ3RGLEtBQUssQ0FBQ0ssS0FBSyxHQUFHRixRQUFRLENBQUNHLElBQUk7WUFDM0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxRQUFRLENBQUNHLElBQUk7UUFDM0IsQ0FBQyxDQUFDLEtBQUssRUFBQ0csR0FBRyxFQUFDLENBQUM7WUFDWEYsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBTztRQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUlETixXQUFXLENBQUNGLEtBQUk7SUFDaEJKLEdBQUcsQ0FBQ2MsUUFBUSxDQUFDLENBQUcsSUFBQyxHQUFHO0FBR3RCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21tdW5pdHktYXBwLy4vcGFnZXMvYXBpL29hdXRoLmpzPzAxNDgiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB1cmwgPSByZXF1aXJlKCd1cmwnKTtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG5cbiAgY29uc3QgRGF0YSA9IHVybC5wYXJzZShyZXEudXJsLCB0cnVlKS5xdWVyeTtcbiAgY29uc3QgQ29kZSA9IERhdGEuY29kZTtcblxuXG4gIGNvbnN0IFNlcnZlckxvZ2luID0gYXN5bmMgZnVuY3Rpb24oQ29kZSl7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly81Mi43OS4xOTkuOTQ6ODA4MC9jYWxsYmFjay9rYWthby8/Y29kZT0ke0NvZGV9YClcbiAgICAgIGNvbnN0IFRva2VuID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gICAgfVxuICB9XG5cblxuXG4gIFNlcnZlckxvZ2luKENvZGUpO1xuICByZXMucmVkaXJlY3QoJy8nLDIwMCk7XG5cblxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiUmVhY3QiLCJ1cmwiLCJyZXF1aXJlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIkRhdGEiLCJwYXJzZSIsInF1ZXJ5IiwiQ29kZSIsImNvZGUiLCJTZXJ2ZXJMb2dpbiIsInJlc3BvbnNlIiwiZ2V0IiwiVG9rZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVyciIsInJlZGlyZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/oauth.js\n");

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
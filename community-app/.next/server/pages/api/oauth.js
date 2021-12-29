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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst url = __webpack_require__(/*! url */ \"url\");\nfunction handler(req, res) {\n    const Data = url.parse(req.url, true).query;\n    console.log(Data);\n    console.log(Data.code);\n    res.status(200).json({\n        code: Data.code\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvb2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNBLEtBQUssQ0FBQ0EsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLGdCQUFLO0FBRVYsUUFBUSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFFekMsS0FBSyxDQUFDQyxJQUFJLEdBQUdMLEdBQUcsQ0FBQ00sS0FBSyxDQUFDSCxHQUFHLENBQUNILEdBQUcsRUFBRSxJQUFJLEVBQUVPLEtBQUs7SUFDekNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixJQUFJO0lBQ2hCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osSUFBSSxDQUFDSyxJQUFJO0lBQ3JCTixHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDRjtRQUFBQSxJQUFJLEVBQUVMLElBQUksQ0FBQ0ssSUFBSTtJQUFBLENBQUM7QUFDMUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbW11bml0eS1hcHAvLi9wYWdlcy9hcGkvb2F1dGguanM/MDE0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHVybCA9IHJlcXVpcmUoJ3VybCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG5cbiAgY29uc3QgRGF0YSA9IHVybC5wYXJzZShyZXEudXJsLCB0cnVlKS5xdWVyeTtcbiAgICBjb25zb2xlLmxvZyhEYXRhKTtcbiAgICBjb25zb2xlLmxvZyhEYXRhLmNvZGUpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtjb2RlOiBEYXRhLmNvZGV9KVxufVxuIl0sIm5hbWVzIjpbInVybCIsInJlcXVpcmUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiRGF0YSIsInBhcnNlIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiY29kZSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/oauth.js\n");

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
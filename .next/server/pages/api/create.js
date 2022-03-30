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
exports.id = "pages/api/create";
exports.ids = ["pages/api/create"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./src/db.ts":
/*!*******************!*\
  !*** ./src/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBVTdDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQU0sSUFBSSxHQUFHLENBQUNELHdEQUFZO0FBRWhELEVBQUUsRUFaRixJQVkwQyxFQUFFRSxNQUFNLENBQUNELE1BQU0sR0FBR0EsTUFBTTtBQUVsRSxpRUFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL21vY2stc2l0ZS8uL3NyYy9kYi50cz9hYjA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xyXG5cclxuLy8gYWRkIHByaXNtYSB0byB0aGUgTm9kZUpTIGdsb2JhbCB0eXBlXHJcbmludGVyZmFjZSBDdXN0b21Ob2RlSnNHbG9iYWwgZXh0ZW5kcyBOb2RlSlMuR2xvYmFsIHtcclxuICBwcmlzbWE6IFByaXNtYUNsaWVudFxyXG59XHJcblxyXG4vLyBQcmV2ZW50IG11bHRpcGxlIGluc3RhbmNlcyBvZiBQcmlzbWEgQ2xpZW50IGluIGRldmVsb3BtZW50XHJcbmRlY2xhcmUgY29uc3QgZ2xvYmFsOiBDdXN0b21Ob2RlSnNHbG9iYWxcclxuXHJcbmNvbnN0IHByaXNtYSA9IGdsb2JhbC5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpXHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIGdsb2JhbC5wcmlzbWEgPSBwcmlzbWFcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByaXNtYSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/db.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/create.jsx":
/*!**********************************!*\
  !*** ./src/pages/api/create.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _db_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db.ts */ \"(api)/./src/db.ts\");\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    // console.log(\"req:\" + JSON.stringify(req.body, null, 2));\n    // const prisma = new PrismaClient({log: [\"query\"]})\n    // const { email, password, confirm }= JSON.stringify(values)\n    console.log(JSON.stringify(req.body));\n    const { email , password  } = req.body;\n    try {\n        const result = await _db_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.create({\n            data: {\n                email: email,\n                hashpass: password\n            }\n        });\n        res.status(200);\n        res.json({\n            userCreated: result\n        });\n    } catch (error) {\n        console.error(\"error:\" + error);\n        res.status(500);\n        res.json({\n            error: \"Something went wrong\"\n        });\n    } finally{\n    // await prisma.$disconnect()\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NyZWF0ZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0M7QUFFaEMsNkJBQWUsMENBQWdCQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBRXRDLEVBQTJEO0lBQzNELEVBQW9EO0lBRXBELEVBQTZEO0lBRTdEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNMLEdBQUcsQ0FBQ00sSUFBSSxFQUFFLENBQUM7SUFFdEMsS0FBSyxDQUFDLENBQUNDLENBQUFBLEtBQUssR0FBRUMsUUFBUSxFQUFDLENBQUMsR0FBRVIsR0FBRyxDQUFDTSxJQUFJO0lBRWxDLEdBQUcsQ0FBQyxDQUFDO1FBQ0QsS0FBSyxDQUFDRyxNQUFNLEdBQUcsS0FBSyxDQUFDViwwREFBa0IsQ0FBQyxDQUFDO1lBQ3JDYSxJQUFJLEVBQUUsQ0FBQztnQkFDSEwsS0FBSyxFQUFFQSxLQUFLO2dCQUNaTSxRQUFRLEVBQUVMLFFBQVE7WUFDdEIsQ0FBQztRQUNMLENBQUM7UUFDRFAsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRztRQUNkYixHQUFHLENBQUNjLElBQUksQ0FBQyxDQUFDO1lBQUNDLFdBQVcsRUFBRVAsTUFBTTtRQUFBLENBQUM7SUFDbkMsQ0FBQyxDQUFDLEtBQUssRUFBRVEsS0FBSyxFQUFFLENBQUM7UUFDYmYsT0FBTyxDQUFDZSxLQUFLLENBQUMsQ0FBUSxVQUFHQSxLQUFLLENBQUMsQ0FBQztRQUNoQ2hCLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUc7UUFDZGIsR0FBRyxDQUFDYyxJQUFJLENBQUMsQ0FBQ0U7WUFBQUEsS0FBSyxFQUFFLENBQXNCO1FBQUEsQ0FBQztJQUM1QyxDQUFDLFFBQVMsQ0FBQztJQUNQLEVBQTZCO0lBQ2pDLENBQUM7QUFFTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9jay1zaXRlLy4vc3JjL3BhZ2VzL2FwaS9jcmVhdGUuanN4P2Q3YTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vZGIudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xyXG4gICAgXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInJlcTpcIiArIEpTT04uc3RyaW5naWZ5KHJlcS5ib2R5LCBudWxsLCAyKSk7XHJcbiAgICAvLyBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KHtsb2c6IFtcInF1ZXJ5XCJdfSlcclxuXHJcbiAgICAvLyBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCwgY29uZmlybSB9PSBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpXHJcblxyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVxLmJvZHkpKTtcclxuXHJcbiAgICBjb25zdCB7ZW1haWwsIHBhc3N3b3JkIH09IHJlcS5ib2R5XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgICAgICBoYXNocGFzczogcGFzc3dvcmRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApXHJcbiAgICAgICAgcmVzLmpzb24oeyB1c2VyQ3JlYXRlZDogcmVzdWx0fSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcImVycm9yOlwiICsgZXJyb3IpOyBcclxuICAgICAgICByZXMuc3RhdHVzKDUwMClcclxuICAgICAgICByZXMuanNvbih7ZXJyb3I6IFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIn0pXHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIC8vIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJib2R5IiwiZW1haWwiLCJwYXNzd29yZCIsInJlc3VsdCIsInVzZXIiLCJjcmVhdGUiLCJkYXRhIiwiaGFzaHBhc3MiLCJzdGF0dXMiLCJqc29uIiwidXNlckNyZWF0ZWQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/create.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/create.jsx"));
module.exports = __webpack_exports__;

})();
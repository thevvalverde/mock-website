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
exports.id = "pages/api/lookup";
exports.ids = ["pages/api/lookup"];
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

/***/ "(api)/./src/pages/api/lookup.jsx":
/*!**********************************!*\
  !*** ./src/pages/api/lookup.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _db_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db.ts */ \"(api)/./src/db.ts\");\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    // console.log(\"req:\" + JSON.stringify(req, null, 2));\n    // const prisma = new PrismaClient({log: [\"query\"]})\n    // const { email, password, confirm }= JSON.stringify(values)\n    const email = req.body.email;\n    console.log(\"BODY: \" + JSON.stringify(req.body));\n    console.log(\"email: \" + email);\n    try {\n        const find = await _db_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findFirst({\n            where: {\n                email: email\n            }\n        });\n        // console.log(find);\n        console.log(\"find: \" + JSON.stringify(find));\n        res.status(200);\n        let response = {};\n        const data = JSON.stringify(find);\n        if (find === null) {\n            res.json({\n                found: 0\n            });\n        } else {\n            res.json({\n                found: 1,\n                data\n            });\n        }\n    } catch (error) {\n        console.error(\"error:\" + error);\n        res.status(500);\n        res.json({\n            error: \"Something went wrong\"\n        });\n        console.error(error);\n    } finally{\n    // await prisma.$disconnect()\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2xvb2t1cC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0M7QUFFaEMsNkJBQWUsMENBQWdCQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBRXRDLEVBQXNEO0lBQ3RELEVBQW9EO0lBRXBELEVBQTZEO0lBRTdELEtBQUssQ0FBQ0MsS0FBSyxHQUFHRixHQUFHLENBQUNHLElBQUksQ0FBQ0QsS0FBSztJQUU1QkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBUSxVQUFHQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1AsR0FBRyxDQUFDRyxJQUFJLEVBQUUsQ0FBQztJQUNqREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBUyxXQUFHSCxLQUFLLENBQUMsQ0FBQztJQUUvQixHQUFHLENBQUMsQ0FBQztRQUNELEtBQUssQ0FBQ00sSUFBSSxHQUFHLEtBQUssQ0FBQ1QsNkRBQXFCLENBQUMsQ0FBQ1k7WUFBQUEsS0FBSyxFQUFFLENBQUNUO2dCQUFBQSxLQUFLLEVBQUVBLEtBQUs7WUFBQSxDQUFDO1FBQUEsQ0FBQztRQUNoRSxFQUFxQjtRQUNyQkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBUSxVQUFHQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsSUFBSSxFQUFFLENBQUM7UUFDN0NQLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUc7UUFDZCxHQUFHLENBQUNDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFFakIsS0FBSyxDQUFDQyxJQUFJLEdBQUdSLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxJQUFJO1FBRWhDLEVBQUUsRUFBQ0EsSUFBSSxLQUFHLElBQUksRUFBRSxDQUFDO1lBQ2JQLEdBQUcsQ0FBQ2MsSUFBSSxDQUFDLENBQUNDO2dCQUFBQSxLQUFLLEVBQUUsQ0FBQztZQUFBLENBQUM7UUFDdkIsQ0FBQyxNQUFNLENBQUM7WUFDSmYsR0FBRyxDQUFDYyxJQUFJLENBQUMsQ0FBQ0M7Z0JBQUFBLEtBQUssRUFBRSxDQUFDO2dCQUFFRixJQUFJO1lBQUEsQ0FBQztRQUM3QixDQUFDO0lBRUwsQ0FBQyxDQUFDLEtBQUssRUFBRUcsS0FBSyxFQUFFLENBQUM7UUFDYmIsT0FBTyxDQUFDYSxLQUFLLENBQUMsQ0FBUSxVQUFHQSxLQUFLLENBQUMsQ0FBQztRQUNoQ2hCLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUc7UUFDZFgsR0FBRyxDQUFDYyxJQUFJLENBQUMsQ0FBQ0U7WUFBQUEsS0FBSyxFQUFFLENBQXNCO1FBQUEsQ0FBQztRQUN4Q2IsT0FBTyxDQUFDYSxLQUFLLENBQUNBLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUMsUUFBUyxDQUFDO0lBQ1AsRUFBNkI7SUFDakMsQ0FBQztBQUVMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2NrLXNpdGUvLi9zcmMvcGFnZXMvYXBpL2xvb2t1cC5qc3g/N2IyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi9kYi50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XHJcbiAgICBcclxuICAgIC8vIGNvbnNvbGUubG9nKFwicmVxOlwiICsgSlNPTi5zdHJpbmdpZnkocmVxLCBudWxsLCAyKSk7XHJcbiAgICAvLyBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KHtsb2c6IFtcInF1ZXJ5XCJdfSlcclxuXHJcbiAgICAvLyBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCwgY29uZmlybSB9PSBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpXHJcblxyXG4gICAgY29uc3QgZW1haWwgPSByZXEuYm9keS5lbWFpbFxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiQk9EWTogXCIgKyBKU09OLnN0cmluZ2lmeShyZXEuYm9keSkpO1xyXG4gICAgY29uc29sZS5sb2coXCJlbWFpbDogXCIgKyBlbWFpbCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBmaW5kID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHt3aGVyZToge2VtYWlsOiBlbWFpbH19KVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZpbmQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmluZDogXCIgKyBKU09OLnN0cmluZ2lmeShmaW5kKSk7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApXHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0ge31cclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGZpbmQpXHJcblxyXG4gICAgICAgIGlmKGZpbmQ9PT1udWxsKSB7XHJcbiAgICAgICAgICAgIHJlcy5qc29uKHtmb3VuZDogMH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzLmpzb24oe2ZvdW5kOiAxLCBkYXRhfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiZXJyb3I6XCIgKyBlcnJvcik7IFxyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKVxyXG4gICAgICAgIHJlcy5qc29uKHtlcnJvcjogXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wifSlcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgLy8gYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KClcclxuICAgIH1cclxuXHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYSIsInJlcSIsInJlcyIsImVtYWlsIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiZmluZCIsInVzZXIiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsInN0YXR1cyIsInJlc3BvbnNlIiwiZGF0YSIsImpzb24iLCJmb3VuZCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/lookup.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/lookup.jsx"));
module.exports = __webpack_exports__;

})();
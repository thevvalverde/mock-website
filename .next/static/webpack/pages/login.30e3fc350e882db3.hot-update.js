"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/pages/login.jsx":
/*!*****************************!*\
  !*** ./src/pages/login.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var C_Users_fvalv_Desktop_projects_mock_site_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_fvalv_Desktop_projects_mock_site_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_fvalv_Desktop_projects_mock_site_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Auth */ \"./src/components/Auth.jsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction handleLogin(values) {\n    return _handleLogin.apply(this, arguments);\n}\nfunction _handleLogin() {\n    _handleLogin = _asyncToGenerator(C_Users_fvalv_Desktop_projects_mock_site_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(values) {\n        var lookup, lookupRes, login, data;\n        return C_Users_fvalv_Desktop_projects_mock_site_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    // alert(JSON.stringify(values, null, 2))\n                    console.log(\"START FETCH LOOKUP\");\n                    _ctx.next = 3;\n                    return fetch('/api/lookup', {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-type\": \"application/json\"\n                        },\n                        body: JSON.stringify(data)\n                    });\n                case 3:\n                    lookup = _ctx.sent;\n                    console.log(\"END FETCH LOOKUP\");\n                    _ctx.t0 = JSON;\n                    _ctx.next = 8;\n                    return lookup.json();\n                case 8:\n                    _ctx.t1 = _ctx.sent;\n                    lookupRes = _ctx.t0.stringify.call(_ctx.t0, _ctx.t1);\n                    if (!(lookupRes.found === 0)) {\n                        _ctx.next = 13;\n                        break;\n                    }\n                    alert(\"This email is not registered.\");\n                    return _ctx.abrupt(\"return\");\n                case 13:\n                    _ctx.next = 15;\n                    return fetch('/api/login', {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        body: JSON.stringify(values)\n                    });\n                case 15:\n                    login = _ctx.sent;\n                    _ctx.t2 = JSON;\n                    _ctx.next = 19;\n                    return login.json();\n                case 19:\n                    _ctx.t3 = _ctx.sent;\n                    data = _ctx.t2.stringify.call(_ctx.t2, _ctx.t3);\n                    console.log(\"this is the data:\" + data);\n                case 22:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _handleLogin.apply(this, arguments);\n}\nfunction Login() {\n    _s();\n    var validate = function(values) {\n        var errors = {};\n        if (!values.email) {\n            errors.email = \"Required\";\n        }\n        if (!values.password) {\n            errors.password = \"Required\";\n        } else if (values.password.length < 3) {\n            errors.password = \"Must be longer than 3 digits\";\n        }\n        return errors;\n    };\n    var formik = (0,formik__WEBPACK_IMPORTED_MODULE_3__.useFormik)({\n        initialValues: {\n            email: '',\n            password: ''\n        },\n        validate: validate,\n        onSubmit: function(values) {\n            handleLogin(values);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"centered\",\n        style: {\n            paddingTop: \"50px\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n            onSubmit: formik.handleSubmit,\n            style: {\n                width: \"50%\",\n                display: \"inline-block\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n                    fullWidth: true,\n                    id: \"email\",\n                    name: \"email\",\n                    label: \"Email\",\n                    variant: \"filled\",\n                    margin: \"dense\",\n                    value: formik.values.email,\n                    onChange: formik.handleChange,\n                    error: formik.touched.email && formik.errors.email\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\fvalv\\\\Desktop\\\\projects\\\\mock-site\\\\src\\\\pages\\\\login.jsx\",\n                    lineNumber: 72,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n                    fullWidth: true,\n                    id: \"password\",\n                    type: \"password\",\n                    name: \"password\",\n                    label: \"Password\",\n                    variant: \"filled\",\n                    margin: \"dense\",\n                    value: formik.values.password,\n                    onChange: formik.handleChange,\n                    error: formik.touched.password && formik.errors.password\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\fvalv\\\\Desktop\\\\projects\\\\mock-site\\\\src\\\\pages\\\\login.jsx\",\n                    lineNumber: 83,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {\n                    style: {\n                        border: \"none\",\n                        margin: \"10px\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\fvalv\\\\Desktop\\\\projects\\\\mock-site\\\\src\\\\pages\\\\login.jsx\",\n                    lineNumber: 95,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                    color: \"secondary\",\n                    variant: \"contained\",\n                    fullWidth: true,\n                    type: \"submit\",\n                    size: \"large\",\n                    margin: \"dense\",\n                    children: \"Log In\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\fvalv\\\\Desktop\\\\projects\\\\mock-site\\\\src\\\\pages\\\\login.jsx\",\n                    lineNumber: 96,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\fvalv\\\\Desktop\\\\projects\\\\mock-site\\\\src\\\\pages\\\\login.jsx\",\n            lineNumber: 71,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\fvalv\\\\Desktop\\\\projects\\\\mock-site\\\\src\\\\pages\\\\login.jsx\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, this);\n};\n_s(Login, \"B/4rI4IXClQ7sG7psKj+pOuRe5Q=\", false, function() {\n    return [\n        formik__WEBPACK_IMPORTED_MODULE_3__.useFormik\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzRGQUMxQzFDLGlEQUFNO29CQUFDbUQsS0FBSyxFQUFDLENBQVc7b0JBQUNWLE9BQU8sRUFBQyxDQUFXO29CQUFDSixTQUFTO29CQUFDVyxJQUFJLEVBQUMsQ0FBUTtvQkFBQ0ksSUFBSSxFQUFDLENBQU87b0JBQUNWLE1BQU0sRUFBQyxDQUFPOzhCQUFDLENBRWxHOzs7Ozs7Ozs7Ozs7Ozs7OztBQVFoQixDQUFDO0dBakV1QnRCLEtBQUs7O1FBbUJWckIsNkNBQVM7OztLQW5CSnFCLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xvZ2luLmpzeD9jOTNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgeyBCdXR0b24sIFRleHRGaWVsZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCJcclxuaW1wb3J0IHsgYXV0aGVudGljYXRlZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0F1dGhcIlxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlTG9naW4odmFsdWVzKSB7XHJcblxyXG4gICAgLy8gYWxlcnQoSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIlNUQVJUIEZFVENIIExPT0tVUFwiKTtcclxuICAgIGNvbnN0IGxvb2t1cCA9IGF3YWl0IGZldGNoKCcvYXBpL2xvb2t1cCcsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVORCBGRVRDSCBMT09LVVBcIik7XHJcblxyXG4gICAgY29uc3QgbG9va3VwUmVzID0gSlNPTi5zdHJpbmdpZnkoYXdhaXQgbG9va3VwLmpzb24oKSk7XHJcblxyXG4gICAgaWYobG9va3VwUmVzLmZvdW5kID09PSAwKSB7XHJcbiAgICAgICAgYWxlcnQoXCJUaGlzIGVtYWlsIGlzIG5vdCByZWdpc3RlcmVkLlwiKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxvZ2luID0gYXdhaXQgZmV0Y2goJy9hcGkvbG9naW4nLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShhd2FpdCBsb2dpbi5qc29uKCkpXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBkYXRhOlwiICsgZGF0YSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuXHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGUgPSB2YWx1ZXMgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVycm9ycyA9IHt9XHJcblxyXG4gICAgICAgIGlmKCF2YWx1ZXMuZW1haWwpIHtcclxuICAgICAgICAgICAgZXJyb3JzLmVtYWlsID0gXCJSZXF1aXJlZFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighdmFsdWVzLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZCA9IFwiUmVxdWlyZWRcIlxyXG4gICAgICAgIH0gZWxzZSBpZih2YWx1ZXMucGFzc3dvcmQubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSBcIk11c3QgYmUgbG9uZ2VyIHRoYW4gMyBkaWdpdHNcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVycm9yc1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvcm1payA9IHVzZUZvcm1paygge1xyXG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzOntlbWFpbDogJycsIHBhc3N3b3JkOicnfSxcclxuICAgICAgICAgICAgdmFsaWRhdGUsXHJcbiAgICAgICAgICAgIG9uU3VibWl0Oih2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZUxvZ2luKHZhbHVlcylcclxuICAgICAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlcmVkXCIgc3R5bGU9e3twYWRkaW5nVG9wOiBcIjUwcHhcIn19PlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0gc3R5bGU9e3t3aWR0aDogXCI1MCVcIiwgZGlzcGxheTpcImlubGluZS1ibG9ja1wifX0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Zvcm1pay50b3VjaGVkLmVtYWlsICYmIGZvcm1pay5lcnJvcnMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Zvcm1pay50b3VjaGVkLnBhc3N3b3JkICYmIGZvcm1pay5lcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGhyIHN0eWxlPXt7Ym9yZGVyOiBcIm5vbmVcIiwgbWFyZ2luOiBcIjEwcHhcIn19Lz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiB2YXJpYW50PVwiY29udGFpbmVkXCIgZnVsbFdpZHRoIHR5cGU9XCJzdWJtaXRcIiBzaXplPVwibGFyZ2VcIiBtYXJnaW49XCJkZW5zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIExvZyBJblxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcblxyXG5cclxuXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJGcmFnbWVudCIsInVzZUZvcm1payIsIkJ1dHRvbiIsIlRleHRGaWVsZCIsImF1dGhlbnRpY2F0ZWQiLCJoYW5kbGVMb2dpbiIsInZhbHVlcyIsImxvb2t1cCIsImxvb2t1cFJlcyIsImxvZ2luIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iLCJmb3VuZCIsImFsZXJ0IiwiTG9naW4iLCJ2YWxpZGF0ZSIsImVycm9ycyIsImVtYWlsIiwicGFzc3dvcmQiLCJsZW5ndGgiLCJmb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwib25TdWJtaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInBhZGRpbmdUb3AiLCJmb3JtIiwiaGFuZGxlU3VibWl0Iiwid2lkdGgiLCJkaXNwbGF5IiwiZnVsbFdpZHRoIiwiaWQiLCJuYW1lIiwibGFiZWwiLCJ2YXJpYW50IiwibWFyZ2luIiwidmFsdWUiLCJvbkNoYW5nZSIsImhhbmRsZUNoYW5nZSIsImVycm9yIiwidG91Y2hlZCIsInR5cGUiLCJociIsImJvcmRlciIsImNvbG9yIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/login.jsx\n");

/***/ })

});
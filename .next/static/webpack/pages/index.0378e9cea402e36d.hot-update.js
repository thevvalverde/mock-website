"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/login.jsx":
/*!*****************************!*\
  !*** ./src/pages/login.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var C_Users_fvalv_Desktop_projects_mock_site_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_fvalv_Desktop_projects_mock_site_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_fvalv_Desktop_projects_mock_site_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.jsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction handleLogin(values, logger) {\n    return _handleLogin.apply(this, arguments);\n}\nfunction _handleLogin() {\n    _handleLogin = _asyncToGenerator(C_Users_fvalv_Desktop_projects_mock_site_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(values, logger) {\n        var lookup, lookupRes, login, data;\n        return C_Users_fvalv_Desktop_projects_mock_site_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch('/api/lookup', {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-type\": \"application/json\"\n                        },\n                        body: JSON.stringify(values)\n                    });\n                case 2:\n                    lookup = _ctx.sent;\n                    _ctx.next = 5;\n                    return lookup.json();\n                case 5:\n                    lookupRes = _ctx.sent;\n                    if (!(lookupRes.found === 0)) {\n                        _ctx.next = 9;\n                        break;\n                    }\n                    alert(\"This email is not registered.\");\n                    return _ctx.abrupt(\"return\", false);\n                case 9:\n                    _ctx.next = 11;\n                    return fetch('/api/login', {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        body: JSON.stringify(values)\n                    });\n                case 11:\n                    login = _ctx.sent;\n                    _ctx.next = 14;\n                    return login.json();\n                case 14:\n                    data = _ctx.sent;\n                    if (!(data.status === 0)) {\n                        _ctx.next = 20;\n                        break;\n                    }\n                    alert(\"Incorrect password.\");\n                    return _ctx.abrupt(\"return\", false);\n                case 20:\n                    if (!(data.status === -1)) {\n                        _ctx.next = 25;\n                        break;\n                    }\n                    alert(\"An unexpected error ocurred\");\n                    return _ctx.abrupt(\"return\", false);\n                case 25:\n                    // props.loginFunction(data.userInfo)\n                    logger(data.userInfo);\n                    return _ctx.abrupt(\"return\", true);\n                case 27:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _handleLogin.apply(this, arguments);\n}\nfunction Login(props) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var validate = function(values) {\n        var errors = {};\n        if (!values.email) {\n            errors.email = \"Required\";\n        }\n        if (!values.password) {\n            errors.password = \"Required\";\n        } else if (values.password.length < 3) {\n            errors.password = \"Must be longer than 3 digits\";\n        }\n        return errors;\n    };\n    var formik = (0,formik__WEBPACK_IMPORTED_MODULE_3__.useFormik)({\n        initialValues: {\n            email: '',\n            password: ''\n        },\n        validate: validate,\n        onSubmit: function() {\n            var _ref = _asyncToGenerator(C_Users_fvalv_Desktop_projects_mock_site_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(values) {\n                var ans;\n                return C_Users_fvalv_Desktop_projects_mock_site_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return handleLogin(values, props.loginFunction);\n                        case 2:\n                            ans = _ctx.sent;\n                            // console.log(\"this is ans: \" + ans);\n                            if (ans) {\n                                props.update();\n                                router.push(\"/\");\n                            }\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function(values) {\n                return _ref.apply(this, arguments);\n            };\n        }()\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"centered\",\n        style: {\n            paddingTop: \"50px\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n            onSubmit: formik.handleSubmit,\n            style: {\n                width: \"50%\",\n                display: \"inline-block\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TextField, {\n                    fullWidth: true,\n                    id: \"email\",\n                    name: \"email\",\n                    label: \"Email\",\n                    variant: \"filled\",\n                    margin: \"dense\",\n                    value: formik.values.email,\n                    onChange: formik.handleChange,\n                    error: formik.touched.email && formik.errors.email\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\fvalv\\\\Desktop\\\\projects\\\\mock-site\\\\src\\\\pages\\\\login.jsx\",\n                    lineNumber: 87,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TextField, {\n                    fullWidth: true,\n                    id: \"password\",\n                    type: \"password\",\n                    name: \"password\",\n                    label: \"Password\",\n                    variant: \"filled\",\n                    margin: \"dense\",\n                    value: formik.values.password,\n                    onChange: formik.handleChange,\n                    error: formik.touched.password && formik.errors.password\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\fvalv\\\\Desktop\\\\projects\\\\mock-site\\\\src\\\\pages\\\\login.jsx\",\n                    lineNumber: 98,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {\n                    style: {\n                        border: \"none\",\n                        margin: \"10px\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\fvalv\\\\Desktop\\\\projects\\\\mock-site\\\\src\\\\pages\\\\login.jsx\",\n                    lineNumber: 110,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    color: \"secondary\",\n                    variant: \"contained\",\n                    fullWidth: true,\n                    type: \"submit\",\n                    size: \"large\",\n                    margin: \"dense\",\n                    children: \"Log In\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\fvalv\\\\Desktop\\\\projects\\\\mock-site\\\\src\\\\pages\\\\login.jsx\",\n                    lineNumber: 111,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\fvalv\\\\Desktop\\\\projects\\\\mock-site\\\\src\\\\pages\\\\login.jsx\",\n            lineNumber: 86,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\fvalv\\\\Desktop\\\\projects\\\\mock-site\\\\src\\\\pages\\\\login.jsx\",\n        lineNumber: 85,\n        columnNumber: 9\n    }, this);\n};\n_s(Login, \"3UF0p0VTbH20bHYAOoqX25faVyU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        formik__WEBPACK_IMPORTED_MODULE_3__.useFormik\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkMsTUFBTSxFQUFDLENBQU87b0JBQ2RDLEtBQUssRUFBRXJCLE1BQU0sQ0FBQ3pCLE1BQU0sQ0FBQ3VCLFFBQVE7b0JBQzdCd0IsUUFBUSxFQUFFdEIsTUFBTSxDQUFDdUIsWUFBWTtvQkFDN0JDLEtBQUssRUFBRXhCLE1BQU0sQ0FBQ3lCLE9BQU8sQ0FBQzNCLFFBQVEsSUFBSUUsTUFBTSxDQUFDSixNQUFNLENBQUNFLFFBQVE7Ozs7Ozs0RkFFM0Q2QixDQUFFO29CQUFDbEIsS0FBSyxFQUFFLENBQUNtQjt3QkFBQUEsTUFBTSxFQUFFLENBQU07d0JBQUVSLE1BQU0sRUFBRSxDQUFNO29CQUFBLENBQUM7Ozs7Ozs0RkFDMUNuRCxpREFBTTtvQkFBQzRELEtBQUssRUFBQyxDQUFXO29CQUFDVixPQUFPLEVBQUMsQ0FBVztvQkFBQ0osU0FBUztvQkFBQ1csSUFBSSxFQUFDLENBQVE7b0JBQUNJLElBQUksRUFBQyxDQUFPO29CQUFDVixNQUFNLEVBQUMsQ0FBTzs4QkFBQyxDQUVsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRaEIsQ0FBQztHQXZFdUI1QixLQUFLOztRQUNWcEIsa0RBQVM7UUFtQlRKLDZDQUFTOzs7S0FwQkp3QixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9sb2dpbi5qc3g/YzkzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCJcclxuaW1wb3J0IHsgQnV0dG9uLCBUZXh0RmllbGQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiXHJcbmltcG9ydCB7Um91dGVyLCB1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlTG9naW4odmFsdWVzLCBsb2dnZXIpIHtcclxuXHJcbiAgICBjb25zdCBsb29rdXAgPSBhd2FpdCBmZXRjaCgnL2FwaS9sb29rdXAnLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodmFsdWVzKVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbG9va3VwUmVzID0gYXdhaXQgbG9va3VwLmpzb24oKTtcclxuXHJcbiAgICBpZihsb29rdXBSZXMuZm91bmQgPT09IDApIHtcclxuICAgICAgICBhbGVydChcIlRoaXMgZW1haWwgaXMgbm90IHJlZ2lzdGVyZWQuXCIpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbG9naW4gPSBhd2FpdCBmZXRjaCgnL2FwaS9sb2dpbicsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHZhbHVlcylcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGxvZ2luLmpzb24oKVxyXG5cclxuICAgIGlmKGRhdGEuc3RhdHVzID09PSAwKSB7XHJcbiAgICAgICAgYWxlcnQoXCJJbmNvcnJlY3QgcGFzc3dvcmQuXCIpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9IGVsc2UgaWYgKGRhdGEuc3RhdHVzID09PSAtMSkge1xyXG4gICAgICAgIGFsZXJ0KFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY3VycmVkXCIpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHByb3BzLmxvZ2luRnVuY3Rpb24oZGF0YS51c2VySW5mbylcclxuICAgICAgICBsb2dnZXIoZGF0YS51c2VySW5mbylcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKHByb3BzKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGUgPSB2YWx1ZXMgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVycm9ycyA9IHt9XHJcblxyXG4gICAgICAgIGlmKCF2YWx1ZXMuZW1haWwpIHtcclxuICAgICAgICAgICAgZXJyb3JzLmVtYWlsID0gXCJSZXF1aXJlZFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighdmFsdWVzLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZCA9IFwiUmVxdWlyZWRcIlxyXG4gICAgICAgIH0gZWxzZSBpZih2YWx1ZXMucGFzc3dvcmQubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSBcIk11c3QgYmUgbG9uZ2VyIHRoYW4gMyBkaWdpdHNcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVycm9yc1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvcm1payA9IHVzZUZvcm1paygge1xyXG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzOntlbWFpbDogJycsIHBhc3N3b3JkOicnfSxcclxuICAgICAgICAgICAgdmFsaWRhdGUsXHJcbiAgICAgICAgICAgIG9uU3VibWl0OmFzeW5jKHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5zID0gYXdhaXQgaGFuZGxlTG9naW4odmFsdWVzLCBwcm9wcy5sb2dpbkZ1bmN0aW9uKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzIGlzIGFuczogXCIgKyBhbnMpO1xyXG4gICAgICAgICAgICAgICAgaWYoYW5zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMudXBkYXRlKClcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlcmVkXCIgc3R5bGU9e3twYWRkaW5nVG9wOiBcIjUwcHhcIn19PlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0gc3R5bGU9e3t3aWR0aDogXCI1MCVcIiwgZGlzcGxheTpcImlubGluZS1ibG9ja1wifX0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Zvcm1pay50b3VjaGVkLmVtYWlsICYmIGZvcm1pay5lcnJvcnMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Zvcm1pay50b3VjaGVkLnBhc3N3b3JkICYmIGZvcm1pay5lcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGhyIHN0eWxlPXt7Ym9yZGVyOiBcIm5vbmVcIiwgbWFyZ2luOiBcIjEwcHhcIn19Lz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiB2YXJpYW50PVwiY29udGFpbmVkXCIgZnVsbFdpZHRoIHR5cGU9XCJzdWJtaXRcIiBzaXplPVwibGFyZ2VcIiBtYXJnaW49XCJkZW5zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIExvZyBJblxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcblxyXG5cclxuXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRnJhZ21lbnQiLCJ1c2VGb3JtaWsiLCJCdXR0b24iLCJUZXh0RmllbGQiLCJSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJIZWFkZXIiLCJoYW5kbGVMb2dpbiIsInZhbHVlcyIsImxvZ2dlciIsImxvb2t1cCIsImxvb2t1cFJlcyIsImxvZ2luIiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsImZvdW5kIiwiYWxlcnQiLCJzdGF0dXMiLCJ1c2VySW5mbyIsIkxvZ2luIiwicHJvcHMiLCJyb3V0ZXIiLCJ2YWxpZGF0ZSIsImVycm9ycyIsImVtYWlsIiwicGFzc3dvcmQiLCJsZW5ndGgiLCJmb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwib25TdWJtaXQiLCJhbnMiLCJsb2dpbkZ1bmN0aW9uIiwidXBkYXRlIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwicGFkZGluZ1RvcCIsImZvcm0iLCJoYW5kbGVTdWJtaXQiLCJ3aWR0aCIsImRpc3BsYXkiLCJmdWxsV2lkdGgiLCJpZCIsIm5hbWUiLCJsYWJlbCIsInZhcmlhbnQiLCJtYXJnaW4iLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlIiwiZXJyb3IiLCJ0b3VjaGVkIiwidHlwZSIsImhyIiwiYm9yZGVyIiwiY29sb3IiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/login.jsx\n");

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var C_Users_fvalv_Desktop_projects_mock_site_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_fvalv_Desktop_projects_mock_site_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_fvalv_Desktop_projects_mock_site_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./src/components/Header.jsx\");\n/* harmony import */ var _MyIframe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MyIframe */ \"./src/components/MyIframe.jsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Layout(param1) {\n    var children1 = param1.children;\n    var ChildComponent = function ChildComponent(param) {\n        var children = param.children;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(children, {\n                update: setAuth,\n                auth: auth,\n                loginFunction: getUserInfo\n            })\n        }, void 0, false);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"false\"), auth = ref[0], setAuth = ref[1];\n    var handleAuthChange = function() {\n        setAuth(!auth);\n    };\n    var getUserInfo = function() {\n        var _ref = _asyncToGenerator(C_Users_fvalv_Desktop_projects_mock_site_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_fvalv_Desktop_projects_mock_site_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        // get user email to pass along to iframe\n        }));\n        return function getUserInfo() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                status: auth,\n                update: handleAuthChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fvalv\\\\Desktop\\\\projects\\\\mock-site\\\\src\\\\components\\\\Layout.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"main-body centered\",\n                children: ChildComponent({\n                    children: children1\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fvalv\\\\Desktop\\\\projects\\\\mock-site\\\\src\\\\components\\\\Layout.js\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MyIframe__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                auth: auth\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fvalv\\\\Desktop\\\\projects\\\\mock-site\\\\src\\\\components\\\\Layout.js\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\fvalv\\\\Desktop\\\\projects\\\\mock-site\\\\src\\\\components\\\\Layout.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n};\n_s(Layout, \"TEpI0bwxozKXO+oJngqyujf1wG0=\");\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNWO0FBQ0k7O0FBRWxCLFFBQVEsQ0FBQ0ksTUFBTSxDQUFDLE1BQVUsRUFBRSxDQUFDO1FBQVpDLFNBQVEsR0FBVCxNQUFVLENBQVRBLFFBQVE7UUFLM0JDLGNBQWMsR0FBdkIsUUFBUSxDQUFDQSxjQUFjLENBQUMsS0FBVSxFQUFFLENBQUM7WUFBWkQsUUFBUSxHQUFULEtBQVUsQ0FBVEEsUUFBUTtRQUM3QixNQUFNO29DQUVHTCx5REFBa0IsQ0FBQ0ssUUFBUSxFQUFFLENBQUNHO2dCQUFBQSxNQUFNLEVBQUVDLE9BQU87Z0JBQUVDLElBQUksRUFBRUEsSUFBSTtnQkFBRUMsYUFBYSxFQUFFQyxXQUFXO1lBQUEsQ0FBQzs7SUFHbkcsQ0FBQzs7SUFURCxHQUFLLENBQW1CWCxHQUFpQixHQUFqQkEsK0NBQVEsQ0FBQyxDQUFPLFNBQWpDUyxJQUFJLEdBQWFULEdBQWlCLEtBQTVCUSxPQUFPLEdBQUlSLEdBQWlCO0lBV3pDLEdBQUssQ0FBQ1ksZ0JBQWdCLEdBQUcsUUFBUSxHQUFGLENBQUM7UUFDNUJKLE9BQU8sRUFBRUMsSUFBSTtJQUNqQixDQUFDO0lBRUQsR0FBSyxDQUFDRSxXQUFXO3lMQUFHLFFBQVEsV0FBSSxDQUFDOzs7Ozs7OztRQUM3QixFQUF5QztRQUM3QyxDQUFDO3dCQUZLQSxXQUFXOzs7O0lBS2pCLE1BQU0sNkVBQ0RFLENBQUc7O3dGQUNIWiwrQ0FBTTtnQkFBQ2EsTUFBTSxFQUFFTCxJQUFJO2dCQUFFRixNQUFNLEVBQUVLLGdCQUFnQjs7Ozs7O3dGQUM3Q0MsQ0FBRztnQkFBQ0UsU0FBUyxFQUFDLENBQW9COzBCQUM5QlYsY0FBYyxDQUFDLENBQUNEO29CQUFBQSxRQUFRLEVBQVJBLFNBQVE7Z0JBQUEsQ0FBQzs7Ozs7O3dGQUU3QkYsaURBQVE7Z0JBQUNPLElBQUksRUFBRUEsSUFBSTs7Ozs7Ozs7Ozs7O0FBRzVCLENBQUM7R0EvQnVCTixNQUFNO0tBQU5BLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0LmpzP2ZlNmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCBNeUlmcmFtZSBmcm9tIFwiLi9NeUlmcmFtZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHtjaGlsZHJlbn0pIHtcclxuXHJcbiAgICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VTdGF0ZShcImZhbHNlXCIpOyBcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gQ2hpbGRDb21wb25lbnQoe2NoaWxkcmVufSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7UmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7dXBkYXRlOiBzZXRBdXRoLCBhdXRoOiBhdXRoLCBsb2dpbkZ1bmN0aW9uOiBnZXRVc2VySW5mb30pfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQXV0aENoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRBdXRoKCFhdXRoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFVzZXJJbmZvID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIC8vIGdldCB1c2VyIGVtYWlsIHRvIHBhc3MgYWxvbmcgdG8gaWZyYW1lXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8SGVhZGVyIHN0YXR1cz17YXV0aH0gdXBkYXRlPXtoYW5kbGVBdXRoQ2hhbmdlfS8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJvZHkgY2VudGVyZWRcIj5cclxuICAgICAgICAgICAge0NoaWxkQ29tcG9uZW50KHtjaGlsZHJlbn0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxNeUlmcmFtZSBhdXRoPXthdXRofSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJIZWFkZXIiLCJNeUlmcmFtZSIsIkxheW91dCIsImNoaWxkcmVuIiwiQ2hpbGRDb21wb25lbnQiLCJjbG9uZUVsZW1lbnQiLCJ1cGRhdGUiLCJzZXRBdXRoIiwiYXV0aCIsImxvZ2luRnVuY3Rpb24iLCJnZXRVc2VySW5mbyIsImhhbmRsZUF1dGhDaGFuZ2UiLCJkaXYiLCJzdGF0dXMiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Layout.js\n");

/***/ })

});
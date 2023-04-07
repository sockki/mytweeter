"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/create-account",{

/***/ "./pages/create-account.tsx":
/*!**********************************!*\
  !*** ./pages/create-account.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_poohc_Desktop_jsworkspace_nextjs_prisma_typescript_tailwind_blueprint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_poohc_Desktop_jsworkspace_nextjs_prisma_typescript_tailwind_blueprint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_poohc_Desktop_jsworkspace_nextjs_prisma_typescript_tailwind_blueprint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function() {\n    var ref, ref1;\n    _s();\n    var ref2 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)(), register = ref2.register, handleSubmit = ref2.handleSubmit, errors = ref2.formState.errors;\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), loading = ref3[0], setLoading = ref3[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var onValid = function() {\n        var _ref = _asyncToGenerator(C_Users_poohc_Desktop_jsworkspace_nextjs_prisma_typescript_tailwind_blueprint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data) {\n            var request;\n            return C_Users_poohc_Desktop_jsworkspace_nextjs_prisma_typescript_tailwind_blueprint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (loading) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        setLoading(true);\n                        _ctx.next = 4;\n                        return fetch(\"/api/users/create-account\", {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify(data)\n                        });\n                    case 4:\n                        request = _ctx.sent;\n                        if (request.status === 200) {\n                            alert(\"Account already exists! Please log in!\");\n                        }\n                        if (request.status === 201) {\n                            alert(\"Account created! Please log in!\");\n                        }\n                        if (request.status !== 405) {\n                            router.push(\"/log-in\");\n                        }\n                        setLoading(false);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onValid(data) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-full max-w-xl mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: \"Create account\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\poohc\\\\Desktop\\\\jsworkspace\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onValid),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                children: \"Name: \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\poohc\\\\Desktop\\\\jsworkspace\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", _objectSpread({\n                                type: \"text\"\n                            }, register(\"name\", {\n                                required: \"Write your name please.\"\n                            })), void 0, false, {\n                                fileName: \"C:\\\\Users\\\\poohc\\\\Desktop\\\\jsworkspace\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                children: errors === null || errors === void 0 ? void 0 : (ref = errors.name) === null || ref === void 0 ? void 0 : ref.message\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\poohc\\\\Desktop\\\\jsworkspace\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\poohc\\\\Desktop\\\\jsworkspace\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                children: \"Email: \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\poohc\\\\Desktop\\\\jsworkspace\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", _objectSpread({\n                                type: \"email\"\n                            }, register(\"email\", {\n                                required: \"Write your email please.\"\n                            })), void 0, false, {\n                                fileName: \"C:\\\\Users\\\\poohc\\\\Desktop\\\\jsworkspace\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                children: errors === null || errors === void 0 ? void 0 : (ref1 = errors.email) === null || ref1 === void 0 ? void 0 : ref1.message\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\poohc\\\\Desktop\\\\jsworkspace\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\poohc\\\\Desktop\\\\jsworkspace\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        children: \"Create Account\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\poohc\\\\Desktop\\\\jsworkspace\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\poohc\\\\Desktop\\\\jsworkspace\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\poohc\\\\Desktop\\\\jsworkspace\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, _this);\n}, \"hixbkF31tW6R2gK4lDSVpwZXtos=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n}));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUU7Z0NBQUUwQixRQUFRLEVBQUUsMEJBQTBCOzZCQUFFLENBQUM7Ozs7cUNBQy9EOzBDQUNGLDhEQUFDQyxNQUFJOzBDQUFFNUIsTUFBTSxhQUFOQSxNQUFNLFdBQU8sR0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxDQUFBQSxJQUFhLEdBQWJBLE1BQU0sQ0FBRStCLEtBQUssY0FBYi9CLElBQWEsY0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxJQUFhLENBQUU4QixPQUFPOzs7OztxQ0FBUTs7Ozs7OzZCQUNqQztrQ0FDTiw4REFBQ0UsUUFBTTtrQ0FBQyxnQkFBYzs7Ozs7NkJBQVM7Ozs7OztxQkFDMUI7Ozs7OzthQUNILENBQ047Q0FDSDs7UUFsREtqQyxvREFBTztRQUVJSCxrREFBUzs7SUFnRHhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NyZWF0ZS1hY2NvdW50LnRzeD80NTBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuXHJcbmludGVyZmFjZSBJRm9ybSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICByZWdpc3RlcixcclxuICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfVxyXG4gIH0gPSB1c2VGb3JtPElGb3JtPigpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBvblZhbGlkID0gYXN5bmMgKGRhdGE6IElGb3JtKSA9PiB7XHJcbiAgICBpZiAoIWxvYWRpbmcpIHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFwiL2FwaS91c2Vycy9jcmVhdGUtYWNjb3VudFwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgYWxlcnQoXCJBY2NvdW50IGFscmVhZHkgZXhpc3RzISBQbGVhc2UgbG9nIGluIVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIGFsZXJ0KFwiQWNjb3VudCBjcmVhdGVkISBQbGVhc2UgbG9nIGluIVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgIT09IDQwNSkge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZy1pblwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXcteGwgbXgtYXV0b1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5DcmVhdGUgYWNjb3VudDwvZGl2PlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uVmFsaWQpfT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTogPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcIm5hbWVcIiwgeyByZXF1aXJlZDogXCJXcml0ZSB5b3VyIG5hbWUgcGxlYXNlLlwiIH0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzcGFuPntlcnJvcnM/Lm5hbWU/Lm1lc3NhZ2V9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw6IDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwiZW1haWxcIiwgeyByZXF1aXJlZDogXCJXcml0ZSB5b3VyIGVtYWlsIHBsZWFzZS5cIiB9KX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c3Bhbj57ZXJyb3JzPy5lbWFpbD8ubWVzc2FnZX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbj5DcmVhdGUgQWNjb3VudDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUZvcm0iLCJlcnJvcnMiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImZvcm1TdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwib25WYWxpZCIsImRhdGEiLCJyZXF1ZXN0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJhbGVydCIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJyZXF1aXJlZCIsInNwYW4iLCJuYW1lIiwibWVzc2FnZSIsImVtYWlsIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/create-account.tsx\n");

/***/ })

});
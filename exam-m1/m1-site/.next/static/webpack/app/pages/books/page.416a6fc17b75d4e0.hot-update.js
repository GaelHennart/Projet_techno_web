"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/books/page",{

/***/ "(app-pages-browser)/./src/app/pages/books/page.tsx":
/*!**************************************!*\
  !*** ./src/app/pages/books/page.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_books_bookCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/books/bookCard */ \"(app-pages-browser)/./src/app/components/books/bookCard.tsx\");\n/* harmony import */ var _components_searchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/searchBar */ \"(app-pages-browser)/./src/app/components/searchBar.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar BooksPage = function() {\n    _s();\n    var books = [\n        {\n            id: \"1\",\n            image_livre: \"/images/salameche.png\",\n            title: \"Salameche\",\n            author_name: \"Ga\\xebl\",\n            publishDate: \"Existe depuis toujours\",\n            rating: 4.5\n        },\n        {\n            id: \"2\",\n            image_livre: \"/images/pikachu.webp\",\n            title: \"Pikachu\",\n            author_name: \"Sacha\",\n            publishDate: \"Existe depuis toujours\",\n            rating: 4.5\n        }\n    ];\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), searchTerm = _useState[0], setSearchTerm = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(books), 2), sortedBooks = _useState1[0], setSortedBooks = _useState1[1]; // Ajouter l'état pour les livres triés\n    // Fonction de mise à jour du terme de recherche\n    var filteredBooks = sortedBooks.filter(function(book) {\n        return book.title.toLowerCase().includes(searchTerm.toLowerCase());\n    });\n    // Fonction de mise à jour du terme de recherche\n    var handleSearch = function(term) {\n        setSearchTerm(term);\n    };\n    // Fonction de gestion des livres triés\n    var handleSort = function(sorted) {\n        setSortedBooks(sorted);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"p-4 mt-5 flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_searchBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    onSearch: handleSearch\n                }, void 0, false, {\n                    fileName: \"C:\\\\Gael\\\\ISEN\\\\M1\\\\technologie_web\\\\Projet_exam\\\\Projet_techno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\pages\\\\books\\\\page.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Gael\\\\ISEN\\\\M1\\\\technologie_web\\\\Projet_exam\\\\Projet_techno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\pages\\\\books\\\\page.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"p-4 mt-5 flex justify-start\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Gael\\\\ISEN\\\\M1\\\\technologie_web\\\\Projet_exam\\\\Projet_techno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\pages\\\\books\\\\page.tsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 justify-items-center\",\n                children: filteredBooks.map(function(book) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_books_bookCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        book: book\n                    }, book.id, false, {\n                        fileName: \"C:\\\\Gael\\\\ISEN\\\\M1\\\\technologie_web\\\\Projet_exam\\\\Projet_techno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\pages\\\\books\\\\page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Gael\\\\ISEN\\\\M1\\\\technologie_web\\\\Projet_exam\\\\Projet_techno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\pages\\\\books\\\\page.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(BooksPage, \"6DCFpeLN00R3Q+sG0GWxcrKkBUI=\");\n_c = BooksPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BooksPage);\nvar _c;\n$RefreshReg$(_c, \"BooksPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvYm9va3MvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDd0M7QUFDZTtBQUNKO0FBWW5ELElBQU1JLFlBQVk7O0lBQ2QsSUFBTUMsUUFBUTtRQUNWO1lBQUVDLElBQUk7WUFBS0MsYUFBYTtZQUF5QkMsT0FBTztZQUFhQyxhQUFhO1lBQVFDLGFBQWE7WUFBMEJDLFFBQVE7UUFBSTtRQUM3STtZQUFFTCxJQUFJO1lBQUtDLGFBQWE7WUFBd0JDLE9BQU87WUFBV0MsYUFBYTtZQUFTQyxhQUFhO1lBQTBCQyxRQUFRO1FBQUk7S0FDOUk7SUFFRCxJQUFvQ1YsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFNBQXRDVyxhQUE2QlgsY0FBakJZLGdCQUFpQlo7SUFDcEMsSUFBc0NBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQ0ksWUFBeENTLGNBQStCYixlQUFsQmMsaUJBQWtCZCxlQUFpQix1Q0FBdUM7SUFFOUYsZ0RBQWdEO0lBQ2hELElBQU1lLGdCQUFnQkYsWUFBWUcsTUFBTSxDQUFDLFNBQUNDO2VBQ3RDQSxLQUFLVixLQUFLLENBQUNXLFdBQVcsR0FBR0MsUUFBUSxDQUFDUixXQUFXTyxXQUFXOztJQUc1RCxnREFBZ0Q7SUFDaEQsSUFBTUUsZUFBZSxTQUFDQztRQUNsQlQsY0FBY1M7SUFDbEI7SUFFQSx1Q0FBdUM7SUFDdkMsSUFBTUMsYUFBYSxTQUFDQztRQUNoQlQsZUFBZVM7SUFDbkI7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUNDO2dCQUFRQyxXQUFVOzBCQUNmLDRFQUFDdkIsNkRBQVNBO29CQUFDd0IsVUFBVU47Ozs7Ozs7Ozs7OzBCQUd6Qiw4REFBQ0k7Z0JBQVFDLFdBQVU7Ozs7OzswQkFHbkIsOERBQUNEO2dCQUFRQyxXQUFVOzBCQUNkVixjQUFjWSxHQUFHLENBQUMsU0FBQ1Y7eUNBQ2hCLDhEQUFDaEIsa0VBQVFBO3dCQUFlZ0IsTUFBTUE7dUJBQWZBLEtBQUtaLEVBQUU7Ozs7Ozs7Ozs7Ozs7QUFLMUM7R0F4Q01GO0tBQUFBO0FBMENOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZXMvYm9va3MvcGFnZS50c3g/MGU2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCb29rQ2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ib29rcy9ib29rQ2FyZFwiO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NlYXJjaEJhclwiO1xyXG5pbXBvcnQgQm9va1NvcnRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ib29rcy9Cb29rU29ydGVyXCI7XHJcblxyXG5pbnRlcmZhY2UgQm9vayB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgaW1hZ2VfbGl2cmU6IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBhdXRob3JfbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGlzaERhdGU6IHN0cmluZztcclxuICAgIHJhdGluZzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBCb29rc1BhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBib29rcyA9IFtcclxuICAgICAgICB7IGlkOiBcIjFcIiwgaW1hZ2VfbGl2cmU6IFwiL2ltYWdlcy9zYWxhbWVjaGUucG5nXCIsIHRpdGxlOiBcIlNhbGFtZWNoZVwiLCBhdXRob3JfbmFtZTogXCJHYcOrbFwiLCBwdWJsaXNoRGF0ZTogXCJFeGlzdGUgZGVwdWlzIHRvdWpvdXJzXCIsIHJhdGluZzogNC41IH0sXHJcbiAgICAgICAgeyBpZDogXCIyXCIsIGltYWdlX2xpdnJlOiBcIi9pbWFnZXMvcGlrYWNodS53ZWJwXCIsIHRpdGxlOiBcIlBpa2FjaHVcIiwgYXV0aG9yX25hbWU6IFwiU2FjaGFcIiwgcHVibGlzaERhdGU6IFwiRXhpc3RlIGRlcHVpcyB0b3Vqb3Vyc1wiLCByYXRpbmc6IDQuNSB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc29ydGVkQm9va3MsIHNldFNvcnRlZEJvb2tzXSA9IHVzZVN0YXRlKGJvb2tzKTsgLy8gQWpvdXRlciBsJ8OpdGF0IHBvdXIgbGVzIGxpdnJlcyB0cmnDqXNcclxuXHJcbiAgICAvLyBGb25jdGlvbiBkZSBtaXNlIMOgIGpvdXIgZHUgdGVybWUgZGUgcmVjaGVyY2hlXHJcbiAgICBjb25zdCBmaWx0ZXJlZEJvb2tzID0gc29ydGVkQm9va3MuZmlsdGVyKChib29rKSA9PlxyXG4gICAgICAgIGJvb2sudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXHJcbiAgICApO1xyXG5cclxuICAgIC8vIEZvbmN0aW9uIGRlIG1pc2Ugw6Agam91ciBkdSB0ZXJtZSBkZSByZWNoZXJjaGVcclxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9ICh0ZXJtOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBzZXRTZWFyY2hUZXJtKHRlcm0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBGb25jdGlvbiBkZSBnZXN0aW9uIGRlcyBsaXZyZXMgdHJpw6lzXHJcbiAgICBjb25zdCBoYW5kbGVTb3J0ID0gKHNvcnRlZDogQm9va1tdKSA9PiB7XHJcbiAgICAgICAgc2V0U29ydGVkQm9va3Moc29ydGVkKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwLTQgbXQtNSBmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoQmFyIG9uU2VhcmNoPXtoYW5kbGVTZWFyY2h9IC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwLTQgbXQtNSBmbGV4IGp1c3RpZnktc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInAtNCBncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00IHhsOmdyaWQtY29scy01IGdhcC01IGp1c3RpZnktaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7ZmlsdGVyZWRCb29rcy5tYXAoKGJvb2spID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Qm9va0NhcmQga2V5PXtib29rLmlkfSBib29rPXtib29rfSAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb29rc1BhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQm9va0NhcmQiLCJTZWFyY2hCYXIiLCJCb29rc1BhZ2UiLCJib29rcyIsImlkIiwiaW1hZ2VfbGl2cmUiLCJ0aXRsZSIsImF1dGhvcl9uYW1lIiwicHVibGlzaERhdGUiLCJyYXRpbmciLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInNvcnRlZEJvb2tzIiwic2V0U29ydGVkQm9va3MiLCJmaWx0ZXJlZEJvb2tzIiwiZmlsdGVyIiwiYm9vayIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJoYW5kbGVTZWFyY2giLCJ0ZXJtIiwiaGFuZGxlU29ydCIsInNvcnRlZCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJvblNlYXJjaCIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/books/page.tsx\n"));

/***/ })

});
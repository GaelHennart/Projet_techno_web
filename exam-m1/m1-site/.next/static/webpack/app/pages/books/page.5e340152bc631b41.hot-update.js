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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_books_bookCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/books/bookCard */ \"(app-pages-browser)/./src/app/components/books/bookCard.tsx\");\n/* harmony import */ var _components_searchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/searchBar */ \"(app-pages-browser)/./src/app/components/searchBar.tsx\");\n/* harmony import */ var _components_books_BookSorter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/books/BookSorter */ \"(app-pages-browser)/./src/app/components/books/BookSorter.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar BooksPage = function() {\n    _s();\n    var books = [\n        {\n            id: \"1\",\n            image_livre: \"/images/salameche.png\",\n            title: \"Salameche\",\n            author: \"Ga\\xebl\",\n            publishDate: \"Existe depuis toujours\",\n            rating: 4.5\n        },\n        {\n            id: \"2\",\n            image_livre: \"/images/pikachu.webp\",\n            title: \"Pikachu\",\n            author: \"Sacha\",\n            publishDate: \"Existe depuis toujours\",\n            rating: 4.5\n        }\n    ];\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), searchTerm = _useState[0], setSearchTerm = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(books), 2), sortedBooks = _useState1[0], setSortedBooks = _useState1[1]; // Ajouter l'état pour les livres triés\n    // Fonction de mise à jour du terme de recherche\n    var filteredBooks = sortedBooks.filter(function(book) {\n        return book.title.toLowerCase().includes(searchTerm.toLowerCase());\n    });\n    // Fonction de mise à jour du terme de recherche\n    var handleSearch = function(term) {\n        setSearchTerm(term);\n    };\n    // Fonction de gestion des livres triés\n    var handleSort = function(sorted) {\n        setSortedBooks(sorted);\n    };\n    // Fonction pour ajouter un nouvel auteur\n    var handleAddBook = function(newBook) {\n        var newId = books.length ? books[books.length - 1].id + 1 : 1; // Assigner un id unique\n        var newBookWithId = (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_6__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_7__._)({}, newBook), {\n            id: newId\n        });\n        setBooks(function(prevBooks) {\n            return (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_8__._)(prevBooks).concat([\n                newBookWithId\n            ]);\n        });\n    };\n    // Fonction pour ouvrir/fermer la modale\n    var toggleModal = function() {\n        return setIsModalOpen(function(prev) {\n            return !prev;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"p-4 mt-5 flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_searchBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    onSearch: handleSearch\n                }, void 0, false, {\n                    fileName: \"C:\\\\Gael\\\\ISEN\\\\M1\\\\technologie_web\\\\Projet_exam\\\\Projet_techno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\pages\\\\books\\\\page.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Gael\\\\ISEN\\\\M1\\\\technologie_web\\\\Projet_exam\\\\Projet_techno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\pages\\\\books\\\\page.tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"p-4 mt-5 flex justify-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_books_BookSorter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    books: books,\n                    onSort: handleSort\n                }, void 0, false, {\n                    fileName: \"C:\\\\Gael\\\\ISEN\\\\M1\\\\technologie_web\\\\Projet_exam\\\\Projet_techno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\pages\\\\books\\\\page.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Gael\\\\ISEN\\\\M1\\\\technologie_web\\\\Projet_exam\\\\Projet_techno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\pages\\\\books\\\\page.tsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 justify-items-center\",\n                children: filteredBooks.map(function(book) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_books_bookCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        book: book\n                    }, book.id, false, {\n                        fileName: \"C:\\\\Gael\\\\ISEN\\\\M1\\\\technologie_web\\\\Projet_exam\\\\Projet_techno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\pages\\\\books\\\\page.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 21\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Gael\\\\ISEN\\\\M1\\\\technologie_web\\\\Projet_exam\\\\Projet_techno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\pages\\\\books\\\\page.tsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(BooksPage, \"6DCFpeLN00R3Q+sG0GWxcrKkBUI=\");\n_c = BooksPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BooksPage);\nvar _c;\n$RefreshReg$(_c, \"BooksPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvYm9va3MvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQ2U7QUFDSjtBQUNRO0FBWTNELElBQU1LLFlBQVk7O0lBQ2QsSUFBTUMsUUFBUTtRQUNWO1lBQUVDLElBQUk7WUFBS0MsYUFBYTtZQUF5QkMsT0FBTztZQUFhQyxRQUFRO1lBQVFDLGFBQWE7WUFBMEJDLFFBQVE7UUFBSTtRQUN4STtZQUFFTCxJQUFJO1lBQUtDLGFBQWE7WUFBd0JDLE9BQU87WUFBV0MsUUFBUTtZQUFTQyxhQUFhO1lBQTBCQyxRQUFRO1FBQUk7S0FDekk7SUFFRCxJQUFvQ1gsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFNBQXRDWSxhQUE2QlosY0FBakJhLGdCQUFpQmI7SUFDcEMsSUFBc0NBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQ0ssWUFBeENTLGNBQStCZCxlQUFsQmUsaUJBQWtCZixlQUFpQix1Q0FBdUM7SUFFOUYsZ0RBQWdEO0lBQ2hELElBQU1nQixnQkFBZ0JGLFlBQVlHLE1BQU0sQ0FBQyxTQUFDQztlQUN0Q0EsS0FBS1YsS0FBSyxDQUFDVyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ1IsV0FBV08sV0FBVzs7SUFHNUQsZ0RBQWdEO0lBQ2hELElBQU1FLGVBQWUsU0FBQ0M7UUFDbEJULGNBQWNTO0lBQ2xCO0lBRUEsdUNBQXVDO0lBQ3ZDLElBQU1DLGFBQWEsU0FBQ0M7UUFDaEJULGVBQWVTO0lBQ25CO0lBQ0EseUNBQXlDO0lBQ3pDLElBQU1DLGdCQUFnQixTQUFDQztRQUNuQixJQUFNQyxRQUFRdEIsTUFBTXVCLE1BQU0sR0FBR3ZCLEtBQUssQ0FBQ0EsTUFBTXVCLE1BQU0sR0FBRyxFQUFFLENBQUN0QixFQUFFLEdBQUcsSUFBSSxHQUFHLHdCQUF3QjtRQUN6RixJQUFNdUIsZ0JBQWdCLHNJQUFLSDtZQUFTcEIsSUFBSXFCOztRQUN4Q0csU0FBUyxTQUFDQzttQkFBYyxvRUFBSUEsa0JBQUo7Z0JBQWVGO2FBQWM7O0lBQ3pEO0lBRUEsd0NBQXdDO0lBQ3hDLElBQU1HLGNBQWM7ZUFBTUMsZUFBZSxTQUFDQzttQkFBUyxDQUFDQTs7O0lBRXBELHFCQUNJOzswQkFDSSw4REFBQ0M7Z0JBQVFDLFdBQVU7MEJBQ2YsNEVBQUNsQyw2REFBU0E7b0JBQUNtQyxVQUFVaEI7Ozs7Ozs7Ozs7OzBCQUV6Qiw4REFBQ2M7Z0JBQVFDLFdBQVU7MEJBQ2YsNEVBQUNqQyxvRUFBVUE7b0JBQUNFLE9BQU9BO29CQUFPaUMsUUFBUWY7Ozs7Ozs7Ozs7OzBCQUV0Qyw4REFBQ1k7Z0JBQVFDLFdBQVU7MEJBQ2RwQixjQUFjdUIsR0FBRyxDQUFDLFNBQUNyQjt5Q0FDaEIsOERBQUNqQixrRUFBUUE7d0JBQWVpQixNQUFNQTt1QkFBZkEsS0FBS1osRUFBRTs7Ozs7Ozs7Ozs7OztBQUsxQztHQWhETUY7S0FBQUE7QUFrRE4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlcy9ib29rcy9wYWdlLnRzeD8wZTYwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJvb2tDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Jvb2tzL2Jvb2tDYXJkXCI7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VhcmNoQmFyXCI7XHJcbmltcG9ydCBCb29rU29ydGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Jvb2tzL0Jvb2tTb3J0ZXJcIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgQm9vayB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgaW1hZ2VfbGl2cmU6IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBhdXRob3I6IHN0cmluZztcclxuICAgIHB1Ymxpc2hEYXRlOiBzdHJpbmc7XHJcbiAgICByYXRpbmc6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgQm9va3NQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYm9va3MgPSBbXHJcbiAgICAgICAgeyBpZDogXCIxXCIsIGltYWdlX2xpdnJlOiBcIi9pbWFnZXMvc2FsYW1lY2hlLnBuZ1wiLCB0aXRsZTogXCJTYWxhbWVjaGVcIiwgYXV0aG9yOiBcIkdhw6tsXCIsIHB1Ymxpc2hEYXRlOiBcIkV4aXN0ZSBkZXB1aXMgdG91am91cnNcIiwgcmF0aW5nOiA0LjUgfSxcclxuICAgICAgICB7IGlkOiBcIjJcIiwgaW1hZ2VfbGl2cmU6IFwiL2ltYWdlcy9waWthY2h1LndlYnBcIiwgdGl0bGU6IFwiUGlrYWNodVwiLCBhdXRob3I6IFwiU2FjaGFcIiwgcHVibGlzaERhdGU6IFwiRXhpc3RlIGRlcHVpcyB0b3Vqb3Vyc1wiLCByYXRpbmc6IDQuNSB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc29ydGVkQm9va3MsIHNldFNvcnRlZEJvb2tzXSA9IHVzZVN0YXRlKGJvb2tzKTsgLy8gQWpvdXRlciBsJ8OpdGF0IHBvdXIgbGVzIGxpdnJlcyB0cmnDqXNcclxuXHJcbiAgICAvLyBGb25jdGlvbiBkZSBtaXNlIMOgIGpvdXIgZHUgdGVybWUgZGUgcmVjaGVyY2hlXHJcbiAgICBjb25zdCBmaWx0ZXJlZEJvb2tzID0gc29ydGVkQm9va3MuZmlsdGVyKChib29rKSA9PlxyXG4gICAgICAgIGJvb2sudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXHJcbiAgICApO1xyXG5cclxuICAgIC8vIEZvbmN0aW9uIGRlIG1pc2Ugw6Agam91ciBkdSB0ZXJtZSBkZSByZWNoZXJjaGVcclxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9ICh0ZXJtOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBzZXRTZWFyY2hUZXJtKHRlcm0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBGb25jdGlvbiBkZSBnZXN0aW9uIGRlcyBsaXZyZXMgdHJpw6lzXHJcbiAgICBjb25zdCBoYW5kbGVTb3J0ID0gKHNvcnRlZDogQm9va1tdKSA9PiB7XHJcbiAgICAgICAgc2V0U29ydGVkQm9va3Moc29ydGVkKTtcclxuICAgIH07XHJcbiAgICAvLyBGb25jdGlvbiBwb3VyIGFqb3V0ZXIgdW4gbm91dmVsIGF1dGV1clxyXG4gICAgY29uc3QgaGFuZGxlQWRkQm9vayA9IChuZXdCb29rOiB7IHRpdGxlOiBzdHJpbmc7IHB1YmxpY2F0aW9uX2RhdGU6IERhdGU7IGF1dGhvcjogc3RyaW5nIH0pID0+IHtcclxuICAgICAgICBjb25zdCBuZXdJZCA9IGJvb2tzLmxlbmd0aCA/IGJvb2tzW2Jvb2tzLmxlbmd0aCAtIDFdLmlkICsgMSA6IDE7IC8vIEFzc2lnbmVyIHVuIGlkIHVuaXF1ZVxyXG4gICAgICAgIGNvbnN0IG5ld0Jvb2tXaXRoSWQgPSB7IC4uLm5ld0Jvb2ssIGlkOiBuZXdJZCB9O1xyXG4gICAgICAgIHNldEJvb2tzKChwcmV2Qm9va3MpID0+IFsuLi5wcmV2Qm9va3MsIG5ld0Jvb2tXaXRoSWRdKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gRm9uY3Rpb24gcG91ciBvdXZyaXIvZmVybWVyIGxhIG1vZGFsZVxyXG4gICAgY29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiBzZXRJc01vZGFsT3BlbigocHJldikgPT4gIXByZXYpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicC00IG10LTUgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEJhciBvblNlYXJjaD17aGFuZGxlU2VhcmNofSAvPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInAtNCBtdC01IGZsZXgganVzdGlmeS1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgPEJvb2tTb3J0ZXIgYm9va3M9e2Jvb2tzfSBvblNvcnQ9e2hhbmRsZVNvcnR9IC8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicC00IGdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTQgeGw6Z3JpZC1jb2xzLTUgZ2FwLTUganVzdGlmeS1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIHtmaWx0ZXJlZEJvb2tzLm1hcCgoYm9vaykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCb29rQ2FyZCBrZXk9e2Jvb2suaWR9IGJvb2s9e2Jvb2t9IC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2tzUGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCb29rQ2FyZCIsIlNlYXJjaEJhciIsIkJvb2tTb3J0ZXIiLCJCb29rc1BhZ2UiLCJib29rcyIsImlkIiwiaW1hZ2VfbGl2cmUiLCJ0aXRsZSIsImF1dGhvciIsInB1Ymxpc2hEYXRlIiwicmF0aW5nIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJzb3J0ZWRCb29rcyIsInNldFNvcnRlZEJvb2tzIiwiZmlsdGVyZWRCb29rcyIsImZpbHRlciIsImJvb2siLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiaGFuZGxlU2VhcmNoIiwidGVybSIsImhhbmRsZVNvcnQiLCJzb3J0ZWQiLCJoYW5kbGVBZGRCb29rIiwibmV3Qm9vayIsIm5ld0lkIiwibGVuZ3RoIiwibmV3Qm9va1dpdGhJZCIsInNldEJvb2tzIiwicHJldkJvb2tzIiwidG9nZ2xlTW9kYWwiLCJzZXRJc01vZGFsT3BlbiIsInByZXYiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwib25TZWFyY2giLCJvblNvcnQiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/books/page.tsx\n"));

/***/ })

});
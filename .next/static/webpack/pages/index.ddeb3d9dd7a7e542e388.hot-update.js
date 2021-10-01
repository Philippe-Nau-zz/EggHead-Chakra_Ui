"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/row-cart.tsx":
/*!*************************************!*\
  !*** ./src/components/row-cart.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/layout */ "./node_modules/@chakra-ui/layout/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\PremierSoft\\Desktop\\chackra\\chackra\\src\\components\\row-cart.tsx";



const RowCart = () => {
  const text = {};
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.HStack, {
    justifyContent: "space-between",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Text, {
      children: "description"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Heading, {
      size: "sm",
      children: "cost"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 12
  }, undefined);
};

_c = RowCart;
/* harmony default export */ __webpack_exports__["default"] = (RowCart);

var _c;

$RefreshReg$(_c, "RowCart");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/sections/cart.tsx":
/*!*******************************!*\
  !*** ./src/sections/cart.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/button */ "./node_modules/@chakra-ui/button/dist/esm/index.js");
/* harmony import */ var _chakra_ui_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/image */ "./node_modules/@chakra-ui/image/dist/esm/index.js");
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/layout */ "./node_modules/@chakra-ui/layout/dist/esm/index.js");
/* harmony import */ var _components_row_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/row-cart */ "./src/components/row-cart.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\PremierSoft\\Desktop\\chackra\\chackra\\src\\sections\\cart.tsx";






const Cart = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__.VStack, {
    w: "full",
    h: "full",
    p: 10,
    spacing: 10,
    alignItems: "flex-start",
    backgroundColor: "gray.50",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__.VStack, {
      alignItems: "flex-start",
      spacing: 3,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__.Heading, {
        size: "2xl",
        children: "Your cart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__.Text, {
        children: ["If the price is too hard on your eyes,", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "link",
          colorScheme: "black",
          children: "try changing the name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__.HStack, {
      spacing: 4,
      alignItems: "Center",
      w: "full",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__.AspectRatio, {
        ratio: 1,
        w: 24,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_image__WEBPACK_IMPORTED_MODULE_4__.Image, {
          src: "/images/skateboard.jpg",
          alt: "Skateboard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        spacing: 0,
        w: "full",
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__.VStack, {
          w: "full",
          spacing: 0,
          alignItems: "flex-start",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__.Heading, {
            size: "md",
            children: "Penny board"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__.Text, {
            color: "grey",
            children: "PNYCOMP27541"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__.Heading, {
          size: "sm",
          textAlign: "end",
          children: "$119.00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__.VStack, {
      spacing: 4,
      alignItems: "stretch",
      w: "full",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_row_cart__WEBPACK_IMPORTED_MODULE_0__.default, {
        props: 2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 12
  }, undefined);
};

_c = Cart;
/* harmony default export */ __webpack_exports__["default"] = (Cart);

var _c;

$RefreshReg$(_c, "Cart");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGRlYjNkOWRkN2E3ZTU0MmUzODguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBR0EsTUFBTUcsT0FBTyxHQUFHLE1BQU07QUFDbEIsUUFBTUMsSUFBSSxHQUFHLEVBQWI7QUFDQSxzQkFBTyw4REFBQyxxREFBRDtBQUFRLGtCQUFjLEVBQUMsZUFBdkI7QUFBQSw0QkFDSCw4REFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERyxlQUVILDhEQUFDLHNEQUFEO0FBQVMsVUFBSSxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFJSCxDQU5EOztLQUFNRDtBQVFOLCtEQUFlQSxPQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLE1BQU1PLElBQUksR0FBRyxNQUFNO0FBQ2Ysc0JBQU8sOERBQUMscURBQUQ7QUFBUSxLQUFDLEVBQUMsTUFBVjtBQUNILEtBQUMsRUFBQyxNQURDO0FBRUgsS0FBQyxFQUFFLEVBRkE7QUFHSCxXQUFPLEVBQUUsRUFITjtBQUlILGNBQVUsRUFBQyxZQUpSO0FBS0gsbUJBQWUsRUFBQyxTQUxiO0FBQUEsNEJBT0gsOERBQUMscURBQUQ7QUFBUSxnQkFBVSxFQUFDLFlBQW5CO0FBQWdDLGFBQU8sRUFBRSxDQUF6QztBQUFBLDhCQUNJLDhEQUFDLHNEQUFEO0FBQVMsWUFBSSxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSSw4REFBQyxtREFBRDtBQUFBLDZEQUE2QyxHQUE3QyxlQUNJLDhEQUFDLHFEQUFEO0FBQVEsaUJBQU8sRUFBQyxNQUFoQjtBQUF1QixxQkFBVyxFQUFDLE9BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEcsZUFhSCw4REFBQyxxREFBRDtBQUFRLGFBQU8sRUFBRSxDQUFqQjtBQUFvQixnQkFBVSxFQUFDLFFBQS9CO0FBQXdDLE9BQUMsRUFBQyxNQUExQztBQUFBLDhCQUNJLDhEQUFDLDBEQUFEO0FBQWEsYUFBSyxFQUFFLENBQXBCO0FBQXVCLFNBQUMsRUFBRSxFQUExQjtBQUFBLCtCQUNJLDhEQUFDLG1EQUFEO0FBQU8sYUFBRyxFQUFDLHdCQUFYO0FBQW9DLGFBQUcsRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUlJLDhEQUFDLG9EQUFEO0FBQ0ksZUFBTyxFQUFFLENBRGI7QUFFSSxTQUFDLEVBQUMsTUFGTjtBQUdJLGlCQUFTLEVBQUUsS0FIZjtBQUlJLHNCQUFjLEVBQUMsZUFKbkI7QUFLSSxrQkFBVSxFQUFDLFFBTGY7QUFBQSxnQ0FPSSw4REFBQyxxREFBRDtBQUFRLFdBQUMsRUFBQyxNQUFWO0FBQWlCLGlCQUFPLEVBQUUsQ0FBMUI7QUFBNkIsb0JBQVUsRUFBQyxZQUF4QztBQUFBLGtDQUNJLDhEQUFDLHNEQUFEO0FBQVMsZ0JBQUksRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUksOERBQUMsbURBQUQ7QUFBTSxpQkFBSyxFQUFDLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBKLGVBV0ksOERBQUMsc0RBQUQ7QUFBUyxjQUFJLEVBQUMsSUFBZDtBQUFtQixtQkFBUyxFQUFDLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkcsZUFpQ0gsOERBQUMscURBQUQ7QUFBUSxhQUFPLEVBQUUsQ0FBakI7QUFBb0IsZ0JBQVUsRUFBQyxTQUEvQjtBQUF5QyxPQUFDLEVBQUMsTUFBM0M7QUFBQSw2QkFDSSw4REFBQyx5REFBRDtBQUFTLGFBQUssRUFBRTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFxQ0gsQ0F0Q0Q7O0tBQU1BO0FBd0NOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Jvdy1jYXJ0LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2NhcnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhTdGFjaywgSGVhZGluZywgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL2xheW91dFwiO1xyXG5cclxuXHJcbmNvbnN0IFJvd0NhcnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0ZXh0ID0ge307XHJcbiAgICByZXR1cm4gPEhTdGFjayBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIj5cclxuICAgICAgICA8VGV4dD5kZXNjcmlwdGlvbjwvVGV4dD5cclxuICAgICAgICA8SGVhZGluZyBzaXplPVwic21cIj5jb3N0PC9IZWFkaW5nPlxyXG4gICAgPC9IU3RhY2s+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvd0NhcnQ7IiwiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvYnV0dG9uXCI7XHJcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcIkBjaGFrcmEtdWkvaW1hZ2VcIjtcclxuaW1wb3J0IHsgVlN0YWNrLCBIU3RhY2ssIEhlYWRpbmcsIFRleHQsIEFzcGVjdFJhdGlvLCBTdGFjayB9IGZyb20gXCJAY2hha3JhLXVpL2xheW91dFwiO1xyXG5pbXBvcnQgUm93Q2FydCBmcm9tIFwiLi4vY29tcG9uZW50cy9yb3ctY2FydFwiO1xyXG5jb25zdCBDYXJ0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxWU3RhY2sgdz1cImZ1bGxcIlxyXG4gICAgICAgIGg9XCJmdWxsXCJcclxuICAgICAgICBwPXsxMH1cclxuICAgICAgICBzcGFjaW5nPXsxMH1cclxuICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiZ3JheS41MFwiXHJcbiAgICA+XHJcbiAgICAgICAgPFZTdGFjayBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICA8SGVhZGluZyBzaXplPVwiMnhsXCI+WW91ciBjYXJ0PC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8VGV4dD5JZiB0aGUgcHJpY2UgaXMgdG9vIGhhcmQgb24geW91ciBleWVzLHsnICd9XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJsaW5rXCIgY29sb3JTY2hlbWU9XCJibGFja1wiPnRyeSBjaGFuZ2luZyB0aGUgbmFtZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPC9WU3RhY2s+XHJcbiAgICAgICAgPEhTdGFjayBzcGFjaW5nPXs0fSBhbGlnbkl0ZW1zPVwiQ2VudGVyXCIgdz1cImZ1bGxcIj5cclxuICAgICAgICAgICAgPEFzcGVjdFJhdGlvIHJhdGlvPXsxfSB3PXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9za2F0ZWJvYXJkLmpwZ1wiIGFsdD1cIlNrYXRlYm9hcmRcIiAvPlxyXG4gICAgICAgICAgICA8L0FzcGVjdFJhdGlvPlxyXG4gICAgICAgICAgICA8U3RhY2tcclxuICAgICAgICAgICAgICAgIHNwYWNpbmc9ezB9XHJcbiAgICAgICAgICAgICAgICB3PVwiZnVsbFwiXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249e1wicm93XCJ9XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxWU3RhY2sgdz1cImZ1bGxcIiBzcGFjaW5nPXswfSBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJtZFwiPlBlbm55IGJvYXJkPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZ3JleVwiPlBOWUNPTVAyNzU0MTwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvVlN0YWNrPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cInNtXCIgdGV4dEFsaWduPVwiZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJDExOS4wMFxyXG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgIDwvSFN0YWNrPlxyXG4gICAgICAgIDxWU3RhY2sgc3BhY2luZz17NH0gYWxpZ25JdGVtcz1cInN0cmV0Y2hcIiB3PVwiZnVsbFwiPlxyXG4gICAgICAgICAgICA8Um93Q2FydCBwcm9wcz17Mn0+PC9Sb3dDYXJ0PlxyXG4gICAgICAgIDwvVlN0YWNrPlxyXG4gICAgPC9WU3RhY2s+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnQ7Il0sIm5hbWVzIjpbIkhTdGFjayIsIkhlYWRpbmciLCJUZXh0IiwiUm93Q2FydCIsInRleHQiLCJCdXR0b24iLCJJbWFnZSIsIlZTdGFjayIsIkFzcGVjdFJhdGlvIiwiU3RhY2siLCJDYXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==
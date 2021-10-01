"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/sections/cart.tsx":
/*!*******************************!*\
  !*** ./src/sections/cart.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/button */ "./node_modules/@chakra-ui/button/dist/esm/index.js");
/* harmony import */ var _chakra_ui_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/image */ "./node_modules/@chakra-ui/image/dist/esm/index.js");
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/layout */ "./node_modules/@chakra-ui/layout/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\PremierSoft\\Desktop\\chackra\\chackra\\src\\sections\\cart.tsx";





const Cart = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.VStack, {
    w: "full",
    h: "full",
    p: 10,
    spacing: 10,
    alignItems: "flex-start",
    backgroundColor: "gray.50",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.VStack, {
      alignItems: "flex-start",
      spacing: 3,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Heading, {
        size: "2xl",
        children: "Your cart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Text, {
        children: ["If the price is too hard on your eyes,", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "link",
          colorScheme: "black",
          children: "try changing the name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.HStack, {
      spacing: 6,
      alignItems: "Center",
      w: "full",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.AspectRatio, {
        ratio: 2,
        w: 24,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_image__WEBPACK_IMPORTED_MODULE_3__.Image, {
          src: "/images/skateboard.jpg",
          alt: "Skateboard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDE1MDU0MDc4NWVhNzY3MDJjYmQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTU8sSUFBSSxHQUFHLE1BQU07QUFDZixzQkFBTyw4REFBQyxxREFBRDtBQUFRLEtBQUMsRUFBQyxNQUFWO0FBQ0gsS0FBQyxFQUFDLE1BREM7QUFFSCxLQUFDLEVBQUUsRUFGQTtBQUdILFdBQU8sRUFBRSxFQUhOO0FBSUgsY0FBVSxFQUFDLFlBSlI7QUFLSCxtQkFBZSxFQUFDLFNBTGI7QUFBQSw0QkFPSCw4REFBQyxxREFBRDtBQUFRLGdCQUFVLEVBQUMsWUFBbkI7QUFBZ0MsYUFBTyxFQUFFLENBQXpDO0FBQUEsOEJBQ0ksOERBQUMsc0RBQUQ7QUFBUyxZQUFJLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJLDhEQUFDLG1EQUFEO0FBQUEsNkRBQTZDLEdBQTdDLGVBQ0ksOERBQUMscURBQUQ7QUFBUSxpQkFBTyxFQUFDLE1BQWhCO0FBQXVCLHFCQUFXLEVBQUMsT0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRyxlQWFILDhEQUFDLHFEQUFEO0FBQVEsYUFBTyxFQUFFLENBQWpCO0FBQW9CLGdCQUFVLEVBQUMsUUFBL0I7QUFBd0MsT0FBQyxFQUFDLE1BQTFDO0FBQUEsNkJBQ0ksOERBQUMsMERBQUQ7QUFBYSxhQUFLLEVBQUUsQ0FBcEI7QUFBdUIsU0FBQyxFQUFFLEVBQTFCO0FBQUEsK0JBQ0ksOERBQUMsbURBQUQ7QUFBTyxhQUFHLEVBQUMsd0JBQVg7QUFBb0MsYUFBRyxFQUFDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQW1CSCxDQXBCRDs7S0FBTUE7QUFzQk4sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2NhcnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJAY2hha3JhLXVpL2ltYWdlXCI7XHJcbmltcG9ydCB7IFZTdGFjaywgSFN0YWNrLCBIZWFkaW5nLCBUZXh0LCBBc3BlY3RSYXRpbyB9IGZyb20gXCJAY2hha3JhLXVpL2xheW91dFwiO1xyXG5jb25zdCBDYXJ0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxWU3RhY2sgdz1cImZ1bGxcIlxyXG4gICAgICAgIGg9XCJmdWxsXCJcclxuICAgICAgICBwPXsxMH1cclxuICAgICAgICBzcGFjaW5nPXsxMH1cclxuICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiZ3JheS41MFwiXHJcbiAgICA+XHJcbiAgICAgICAgPFZTdGFjayBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICA8SGVhZGluZyBzaXplPVwiMnhsXCI+WW91ciBjYXJ0PC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8VGV4dD5JZiB0aGUgcHJpY2UgaXMgdG9vIGhhcmQgb24geW91ciBleWVzLHsnICd9XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJsaW5rXCIgY29sb3JTY2hlbWU9XCJibGFja1wiPnRyeSBjaGFuZ2luZyB0aGUgbmFtZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPC9WU3RhY2s+XHJcbiAgICAgICAgPEhTdGFjayBzcGFjaW5nPXs2fSBhbGlnbkl0ZW1zPVwiQ2VudGVyXCIgdz1cImZ1bGxcIj5cclxuICAgICAgICAgICAgPEFzcGVjdFJhdGlvIHJhdGlvPXsyfSB3PXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9za2F0ZWJvYXJkLmpwZ1wiIGFsdD1cIlNrYXRlYm9hcmRcIi8+XHJcbiAgICAgICAgICAgIDwvQXNwZWN0UmF0aW8+XHJcbiAgICAgICAgPC9IU3RhY2s+XHJcbiAgICA8L1ZTdGFjaz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydDsiXSwibmFtZXMiOlsiQnV0dG9uIiwiSW1hZ2UiLCJWU3RhY2siLCJIU3RhY2siLCJIZWFkaW5nIiwiVGV4dCIsIkFzcGVjdFJhdGlvIiwiQ2FydCJdLCJzb3VyY2VSb290IjoiIn0=
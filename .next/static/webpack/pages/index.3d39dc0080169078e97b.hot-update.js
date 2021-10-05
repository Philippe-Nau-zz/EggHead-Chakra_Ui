"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/detail_row.tsx":
/*!***************************************!*\
  !*** ./src/components/detail_row.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\PremierSoft\\Desktop\\chackra\\chackra\\src\\components\\detail_row.tsx";



const DetailRow = ({
  textColor,
  text,
  textValue
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
    justifyContent: "space-between",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      color: textColor,
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
      size: "sm",
      children: textValue
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 12
  }, undefined);
};

_c = DetailRow;
/* harmony default export */ __webpack_exports__["default"] = (DetailRow);

var _c;

$RefreshReg$(_c, "DetailRow");

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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _components_detail_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/detail_row */ "./src/components/detail_row.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\PremierSoft\\Desktop\\chackra\\chackra\\src\\sections\\cart.tsx",
    _s = $RefreshSig$();





const Cart = () => {
  _s();

  const {
    toggleColorMode
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorMode)();
  const bgColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("gray.50", "whiteAlpha.50");
  const secondaryColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("gray.600", "gray.400");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
    w: "full",
    h: "full",
    p: 10,
    spacing: 6,
    alignItems: "flex-start",
    backgroundColor: bgColor,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
      alignItems: "flex-start",
      spacing: 3,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
        size: "2xl",
        children: "Your cart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
        children: ["If the price is too hard on your eyes,", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          onClick: toggleColorMode,
          variant: "link",
          colorScheme: "black",
          children: "try changing the name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
      spacing: 6,
      alignItems: "Center",
      w: "full",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.AspectRatio, {
        ratio: 1,
        w: 24,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
          src: "/images/skateboard.jpg",
          alt: "Skateboard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        spacing: 0,
        w: "full",
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
          w: "full",
          spacing: 0,
          alignItems: "flex-start",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
            size: "md",
            children: "Penny board"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
            color: secondaryColor,
            children: "PNYCOMP27541"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
          size: "sm",
          textAlign: "end",
          children: "$119.00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
      spacing: 4,
      alignItems: "stretch",
      w: "full",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_detail_row__WEBPACK_IMPORTED_MODULE_0__.default, {
        textColor: secondaryColor,
        text: "teste",
        textValue: "teste"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
        justifyContent: "space-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
          color: secondaryColor,
          children: "Subtotal"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
          size: "sm",
          children: "$119.00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
        justifyContent: "space-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
          color: secondaryColor,
          children: "Shipping"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
          size: "sm",
          children: "$19.99"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
        justifyContent: "space-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
          color: secondaryColor,
          children: "Taxes (estimated)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
          size: "sm",
          children: "$23.80"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
        justifyContent: "space-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
          color: secondaryColor,
          children: "Total"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
          size: "lg",
          children: "$162.79"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 12
  }, undefined);
};

_s(Cart, "4tcmag+holyk57te3cGVpX6RZjQ=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorMode, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2QzOWRjMDA4MDE2OTA3OGU5N2IuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBRUEsTUFBTUcsU0FBUyxHQUFHLENBQUM7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQSxJQUFiO0FBQW1CQyxFQUFBQTtBQUFuQixDQUFELEtBSVo7QUFDRixzQkFBTyw4REFBQyxvREFBRDtBQUFRLGtCQUFjLEVBQUMsZUFBdkI7QUFBQSw0QkFDSCw4REFBQyxrREFBRDtBQUFNLFdBQUssRUFBRUYsU0FBYjtBQUFBLGdCQUF5QkM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERyxlQUVILDhEQUFDLHFEQUFEO0FBQVMsVUFBSSxFQUFDLElBQWQ7QUFBQSxnQkFBb0JDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFJSCxDQVREOztLQUFNSDtBQVdOLCtEQUFlQSxTQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFjQTs7O0FBRUEsTUFBTVksSUFBSSxHQUFHLE1BQU07QUFBQTs7QUFDZixRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBc0JILDhEQUFZLEVBQXhDO0FBQ0EsUUFBTUksT0FBTyxHQUFHSCxtRUFBaUIsQ0FBQyxTQUFELEVBQVksZUFBWixDQUFqQztBQUNBLFFBQU1JLGNBQWMsR0FBR0osbUVBQWlCLENBQUMsVUFBRCxFQUFhLFVBQWIsQ0FBeEM7QUFFQSxzQkFBTyw4REFBQyxvREFBRDtBQUFRLEtBQUMsRUFBQyxNQUFWO0FBQ0gsS0FBQyxFQUFDLE1BREM7QUFFSCxLQUFDLEVBQUUsRUFGQTtBQUdILFdBQU8sRUFBRSxDQUhOO0FBSUgsY0FBVSxFQUFDLFlBSlI7QUFLSCxtQkFBZSxFQUFFRyxPQUxkO0FBQUEsNEJBT0gsOERBQUMsb0RBQUQ7QUFBUSxnQkFBVSxFQUFDLFlBQW5CO0FBQWdDLGFBQU8sRUFBRSxDQUF6QztBQUFBLDhCQUNJLDhEQUFDLHFEQUFEO0FBQVMsWUFBSSxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSSw4REFBQyxrREFBRDtBQUFBLDZEQUE2QyxHQUE3QyxlQUNJLDhEQUFDLG9EQUFEO0FBQVEsaUJBQU8sRUFBR0QsZUFBbEI7QUFBb0MsaUJBQU8sRUFBQyxNQUE1QztBQUFtRCxxQkFBVyxFQUFDLE9BQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEcsZUFhSCw4REFBQyxvREFBRDtBQUFRLGFBQU8sRUFBRSxDQUFqQjtBQUFvQixnQkFBVSxFQUFDLFFBQS9CO0FBQXdDLE9BQUMsRUFBQyxNQUExQztBQUFBLDhCQUNJLDhEQUFDLHlEQUFEO0FBQWEsYUFBSyxFQUFFLENBQXBCO0FBQXVCLFNBQUMsRUFBRSxFQUExQjtBQUFBLCtCQUNJLDhEQUFDLG1EQUFEO0FBQU8sYUFBRyxFQUFDLHdCQUFYO0FBQW9DLGFBQUcsRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUlJLDhEQUFDLG1EQUFEO0FBQ0ksZUFBTyxFQUFFLENBRGI7QUFFSSxTQUFDLEVBQUMsTUFGTjtBQUdJLGlCQUFTLEVBQUUsS0FIZjtBQUlJLHNCQUFjLEVBQUMsZUFKbkI7QUFLSSxrQkFBVSxFQUFDLFFBTGY7QUFBQSxnQ0FPSSw4REFBQyxvREFBRDtBQUFRLFdBQUMsRUFBQyxNQUFWO0FBQWlCLGlCQUFPLEVBQUUsQ0FBMUI7QUFBNkIsb0JBQVUsRUFBQyxZQUF4QztBQUFBLGtDQUNJLDhEQUFDLHFEQUFEO0FBQVMsZ0JBQUksRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUksOERBQUMsa0RBQUQ7QUFBTSxpQkFBSyxFQUFJRSxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQSixlQVdJLDhEQUFDLHFEQUFEO0FBQVMsY0FBSSxFQUFDLElBQWQ7QUFBbUIsbUJBQVMsRUFBQyxLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJHLGVBaUNILDhEQUFDLG9EQUFEO0FBQVEsYUFBTyxFQUFFLENBQWpCO0FBQW9CLGdCQUFVLEVBQUMsU0FBL0I7QUFBeUMsT0FBQyxFQUFDLE1BQTNDO0FBQUEsOEJBQ0ksOERBQUMsMkRBQUQ7QUFBVyxpQkFBUyxFQUFHQSxjQUF2QjtBQUF3QyxZQUFJLEVBQUMsT0FBN0M7QUFBcUQsaUJBQVMsRUFBQztBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUksOERBQUMsb0RBQUQ7QUFBUSxzQkFBYyxFQUFDLGVBQXZCO0FBQUEsZ0NBQ0ksOERBQUMsa0RBQUQ7QUFBTSxlQUFLLEVBQUdBLGNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSSw4REFBQyxxREFBRDtBQUFTLGNBQUksRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQU1JLDhEQUFDLG9EQUFEO0FBQVEsc0JBQWMsRUFBQyxlQUF2QjtBQUFBLGdDQUNJLDhEQUFDLGtEQUFEO0FBQU0sZUFBSyxFQUFHQSxjQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUksOERBQUMscURBQUQ7QUFBUyxjQUFJLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkosZUFVSSw4REFBQyxvREFBRDtBQUFRLHNCQUFjLEVBQUMsZUFBdkI7QUFBQSxnQ0FDSSw4REFBQyxrREFBRDtBQUFNLGVBQUssRUFBR0EsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJLDhEQUFDLHFEQUFEO0FBQVMsY0FBSSxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZKLGVBY0ksOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFkSixlQWVJLDhEQUFDLG9EQUFEO0FBQVEsc0JBQWMsRUFBQyxlQUF2QjtBQUFBLGdDQUNJLDhEQUFDLGtEQUFEO0FBQU0sZUFBSyxFQUFHQSxjQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUksOERBQUMscURBQUQ7QUFBUyxjQUFJLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQXNESCxDQTNERDs7R0FBTUg7VUFDMEJGLDREQUNaQyxpRUFDT0E7OztLQUhyQkM7QUE2RE4sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZGV0YWlsX3Jvdy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZWN0aW9ucy9jYXJ0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIU3RhY2ssIFRleHQsIEhlYWRpbmcgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXHJcblxyXG5jb25zdCBEZXRhaWxSb3cgPSAoeyB0ZXh0Q29sb3IsIHRleHQsIHRleHRWYWx1ZSB9OiB7XHJcbiAgICB0ZXh0Q29sb3I/OiBzdHJpbmc7XHJcbiAgICB0ZXh0Pzogc3RyaW5nO1xyXG4gICAgdGV4dFZhbHVlPzogc3RyaW5nO1xyXG59KSA9PiB7XHJcbiAgICByZXR1cm4gPEhTdGFjayBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIj5cclxuICAgICAgICA8VGV4dCBjb2xvcj17dGV4dENvbG9yfT57dGV4dH08L1RleHQ+XHJcbiAgICAgICAgPEhlYWRpbmcgc2l6ZT1cInNtXCI+e3RleHRWYWx1ZX08L0hlYWRpbmc+XHJcbiAgICA8L0hTdGFjaz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsUm93OyIsImltcG9ydCB7XHJcbiAgICBWU3RhY2ssXHJcbiAgICBIU3RhY2ssXHJcbiAgICBIZWFkaW5nLFxyXG4gICAgVGV4dCxcclxuICAgIEFzcGVjdFJhdGlvLFxyXG4gICAgU3RhY2ssXHJcbiAgICBEaXZpZGVyLFxyXG4gICAgQnV0dG9uLFxyXG4gICAgSW1hZ2UsXHJcbiAgICB1c2VDb2xvck1vZGUsXHJcbiAgICB1c2VDb2xvck1vZGVWYWx1ZSxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5cclxuaW1wb3J0IERldGFpbFJvdyBmcm9tIFwiLi4vY29tcG9uZW50cy9kZXRhaWxfcm93XCI7XHJcblxyXG5jb25zdCBDYXJ0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xyXG4gICAgY29uc3QgYmdDb2xvciA9IHVzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS41MFwiLCBcIndoaXRlQWxwaGEuNTBcIik7XHJcbiAgICBjb25zdCBzZWNvbmRhcnlDb2xvciA9IHVzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS42MDBcIiwgXCJncmF5LjQwMFwiKTtcclxuXHJcbiAgICByZXR1cm4gPFZTdGFjayB3PVwiZnVsbFwiXHJcbiAgICAgICAgaD1cImZ1bGxcIlxyXG4gICAgICAgIHA9ezEwfVxyXG4gICAgICAgIHNwYWNpbmc9ezZ9XHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcj17YmdDb2xvcn1cclxuICAgID5cclxuICAgICAgICA8VlN0YWNrIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCIgc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCIyeGxcIj5Zb3VyIGNhcnQ8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxUZXh0PklmIHRoZSBwcmljZSBpcyB0b28gaGFyZCBvbiB5b3VyIGV5ZXMseycgJ31cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17IHRvZ2dsZUNvbG9yTW9kZSB9IHZhcmlhbnQ9XCJsaW5rXCIgY29sb3JTY2hlbWU9XCJibGFja1wiPnRyeSBjaGFuZ2luZyB0aGUgbmFtZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPC9WU3RhY2s+XHJcbiAgICAgICAgPEhTdGFjayBzcGFjaW5nPXs2fSBhbGlnbkl0ZW1zPVwiQ2VudGVyXCIgdz1cImZ1bGxcIj5cclxuICAgICAgICAgICAgPEFzcGVjdFJhdGlvIHJhdGlvPXsxfSB3PXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9za2F0ZWJvYXJkLmpwZ1wiIGFsdD1cIlNrYXRlYm9hcmRcIiAvPlxyXG4gICAgICAgICAgICA8L0FzcGVjdFJhdGlvPlxyXG4gICAgICAgICAgICA8U3RhY2tcclxuICAgICAgICAgICAgICAgIHNwYWNpbmc9ezB9XHJcbiAgICAgICAgICAgICAgICB3PVwiZnVsbFwiXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249e1wicm93XCJ9XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxWU3RhY2sgdz1cImZ1bGxcIiBzcGFjaW5nPXswfSBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJtZFwiPlBlbm55IGJvYXJkPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPSB7IHNlY29uZGFyeUNvbG9yIH0+UE5ZQ09NUDI3NTQxPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9WU3RhY2s+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyBzaXplPVwic21cIiB0ZXh0QWxpZ249XCJlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAkMTE5LjAwXHJcbiAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgICAgPFZTdGFjayBzcGFjaW5nPXs0fSBhbGlnbkl0ZW1zPVwic3RyZXRjaFwiIHc9XCJmdWxsXCI+XHJcbiAgICAgICAgICAgIDxEZXRhaWxSb3cgdGV4dENvbG9yPXsgc2Vjb25kYXJ5Q29sb3IgfSB0ZXh0PSd0ZXN0ZScgdGV4dFZhbHVlPSd0ZXN0ZScvPlxyXG4gICAgICAgICAgICA8SFN0YWNrIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgY29sb3I9eyBzZWNvbmRhcnlDb2xvciB9PlN1YnRvdGFsPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cInNtXCI+JDExOS4wMDwvSGVhZGluZz5cclxuICAgICAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgICAgICAgIDxIU3RhY2sganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj17IHNlY29uZGFyeUNvbG9yIH0+U2hpcHBpbmc8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyBzaXplPVwic21cIj4kMTkuOTk8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDwvSFN0YWNrPlxyXG4gICAgICAgICAgICA8SFN0YWNrIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgY29sb3I9eyBzZWNvbmRhcnlDb2xvciB9PlRheGVzIChlc3RpbWF0ZWQpPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cInNtXCI+JDIzLjgwPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8L0hTdGFjaz5cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgPEhTdGFjayBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPXsgc2Vjb25kYXJ5Q29sb3IgfT5Ub3RhbDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJsZ1wiPiQxNjIuNzk8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDwvSFN0YWNrPlxyXG4gICAgICAgIDwvVlN0YWNrPlxyXG4gICAgPC9WU3RhY2s+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnQ7Il0sIm5hbWVzIjpbIkhTdGFjayIsIlRleHQiLCJIZWFkaW5nIiwiRGV0YWlsUm93IiwidGV4dENvbG9yIiwidGV4dCIsInRleHRWYWx1ZSIsIlZTdGFjayIsIkFzcGVjdFJhdGlvIiwiU3RhY2siLCJEaXZpZGVyIiwiQnV0dG9uIiwiSW1hZ2UiLCJ1c2VDb2xvck1vZGUiLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIkNhcnQiLCJ0b2dnbGVDb2xvck1vZGUiLCJiZ0NvbG9yIiwic2Vjb25kYXJ5Q29sb3IiXSwic291cmNlUm9vdCI6IiJ9
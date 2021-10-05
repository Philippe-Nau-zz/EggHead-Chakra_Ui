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
  label,
  placeholder,
  colNum
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
    colSpan: colNum,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
        placeholder: placeholder
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
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

/***/ "./src/sections/details.tsx":
/*!**********************************!*\
  !*** ./src/sections/details.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _components_detail_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/detail_row */ "./src/components/detail_row.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\PremierSoft\\Desktop\\chackra\\chackra\\src\\sections\\details.tsx",
    _s = $RefreshSig$();





const Details = () => {
  _s();

  const colSpan = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBreakpointValue)({
    base: 2,
    md: 1
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
    w: "full",
    h: "full",
    p: 10,
    spacing: 10,
    alignItems: "flex-start",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
      alignItems: "flex-start",
      spacing: 3,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
        size: "2xl",
        children: "Your details"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
        children: "If you already have an account, click here to log in."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.SimpleGrid, {
      columns: 2,
      columnGap: 3,
      rowGap: 6,
      w: "full",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_detail_row__WEBPACK_IMPORTED_MODULE_0__.default, {
        colNum: colSpan,
        label: "",
        placeholder: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
        colSpan: colSpan,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
            children: "First Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
            placeholder: "John"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
        colSpan: colSpan,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
            children: "Last Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
            placeholder: "Doe"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
        colSpan: 2,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
            children: "Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
            placeholder: "Bivd. Broken Dreams 21"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
        colSpan: colSpan,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
            children: "City"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
            placeholder: "San Francisco"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
        colSpan: colSpan,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
            children: "Country"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Select, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
              value: "usa",
              children: "United States of America"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 24
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
              value: "uae",
              children: "United Arab Emirates"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 24
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
              value: "nmk",
              children: "North Macedonia"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 24
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
              value: "de",
              children: "Germany"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 24
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 20
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
        colSpan: 2,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
            defaultChecked: true,
            children: "Ship to the billing address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
        colSpan: 2,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "primary",
          size: "lg",
          w: "full",
          children: "Place Order"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 12
  }, undefined);
};

_s(Details, "1kFcYvjowUgKNx2vuIo/Q2H4QFg=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBreakpointValue];
});

_c = Details;
/* harmony default export */ __webpack_exports__["default"] = (Details);

var _c;

$RefreshReg$(_c, "Details");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTQwMzkzNWI0ODkzNTA1YWNmZTIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBRUEsTUFBTUksU0FBUyxHQUFHLENBQUM7QUFBRUMsRUFBQUEsS0FBRjtBQUFTQyxFQUFBQSxXQUFUO0FBQXNCQyxFQUFBQTtBQUF0QixDQUFELEtBSVo7QUFDRixzQkFBTyw4REFBQyxzREFBRDtBQUFVLFdBQU8sRUFBRUEsTUFBbkI7QUFBQSwyQkFDSCw4REFBQyx5REFBRDtBQUFBLDhCQUNJLDhEQUFDLHVEQUFEO0FBQUEsa0JBQ01GO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUlJLDhEQUFDLG1EQUFEO0FBQU8sbUJBQVcsRUFBS0M7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFRSCxDQWJEOztLQUFNRjtBQWVOLCtEQUFlQSxTQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBY0M7OztBQUVELE1BQU1ZLE9BQU8sR0FBRyxNQUFNO0FBQUE7O0FBQ2xCLFFBQU9DLE9BQU8sR0FBR0Ysb0VBQWtCLENBQUM7QUFBQ0csSUFBQUEsSUFBSSxFQUFFLENBQVA7QUFBVUMsSUFBQUEsRUFBRSxFQUFFO0FBQWQsR0FBRCxDQUFuQztBQUNBLHNCQUFPLDhEQUFDLG9EQUFEO0FBQVEsS0FBQyxFQUFDLE1BQVY7QUFDSCxLQUFDLEVBQUMsTUFEQztBQUVILEtBQUMsRUFBRSxFQUZBO0FBR0gsV0FBTyxFQUFFLEVBSE47QUFJSCxjQUFVLEVBQUMsWUFKUjtBQUFBLDRCQU1ILDhEQUFDLG9EQUFEO0FBQVEsZ0JBQVUsRUFBQyxZQUFuQjtBQUFnQyxhQUFPLEVB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QTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWxDSixlQStDSSw4REFBQyxzREFBRDtBQUFVLGVBQU8sRUFBRSxDQUFuQjtBQUFBLCtCQUNJLDhEQUFDLHlEQUFEO0FBQUEsaUNBQ0ksOERBQUMsc0RBQUQ7QUFBVSwwQkFBYyxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQS9DSixlQW9ESSw4REFBQyxzREFBRDtBQUFVLGVBQU8sRUFBRSxDQUFuQjtBQUFBLCtCQUNJLDhEQUFDLG9EQUFEO0FBQVEsaUJBQU8sRUFBQyxTQUFoQjtBQUEwQixjQUFJLEVBQUMsSUFBL0I7QUFBb0MsV0FBQyxFQUFDLE1BQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFwREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBb0VILENBdEVEOztHQUFNRDtVQUNlRDs7O0tBRGZDO0FBd0VOLCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2RldGFpbF9yb3cudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvc2VjdGlvbnMvZGV0YWlscy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZEl0ZW0sIEZvcm1Db250cm9sLCBGb3JtTGFiZWwsIElucHV0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxyXG5cclxuY29uc3QgRGV0YWlsUm93ID0gKHsgbGFiZWwsIHBsYWNlaG9sZGVyLCBjb2xOdW0gfToge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG4gICAgY29sTnVtOiBudW1iZXI7XHJcbn0pID0+IHtcclxuICAgIHJldHVybiA8R3JpZEl0ZW0gY29sU3Bhbj17Y29sTnVtfT5cclxuICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICB7IGxhYmVsIH1cclxuICAgICAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlciA9IHsgcGxhY2Vob2xkZXIgfSAvPlxyXG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICA8L0dyaWRJdGVtPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxSb3c7IiwiaW1wb3J0IHsgRm9ybUNvbnRyb2wsXHJcbiAgICAgRm9ybUxhYmVsLFxyXG4gICAgIElucHV0LFxyXG4gICAgIFNlbGVjdCxcclxuICAgICBDaGVja2JveCxcclxuICAgICBCdXR0b24sXHJcbiAgICAgVlN0YWNrLCBcclxuICAgICBIZWFkaW5nLFxyXG4gICAgIFRleHQsXHJcbiAgICAgU2ltcGxlR3JpZCxcclxuICAgICBHcmlkSXRlbSxcclxuICAgICB1c2VCcmVha3BvaW50VmFsdWUsXHJcbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG4gaW1wb3J0IERldGFpbFJvdyBmcm9tIFwiLi4vY29tcG9uZW50cy9kZXRhaWxfcm93XCI7XHJcblxyXG5jb25zdCBEZXRhaWxzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgIGNvbFNwYW4gPSB1c2VCcmVha3BvaW50VmFsdWUoe2Jhc2U6IDIsIG1kOiAxfSk7XHJcbiAgICByZXR1cm4gPFZTdGFjayB3PVwiZnVsbFwiXHJcbiAgICAgICAgaD1cImZ1bGxcIlxyXG4gICAgICAgIHA9ezEwfVxyXG4gICAgICAgIHNwYWNpbmc9ezEwfVxyXG4gICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcclxuICAgID5cclxuICAgICAgICA8VlN0YWNrIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCIgc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCIyeGxcIj5Zb3VyIGRldGFpbHM8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxUZXh0PklmIHlvdSBhbHJlYWR5IGhhdmUgYW4gYWNjb3VudCwgY2xpY2sgaGVyZSB0byBsb2cgaW4uPC9UZXh0PlxyXG4gICAgICAgIDwvVlN0YWNrPlxyXG4gICAgICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9ezJ9IGNvbHVtbkdhcD17M30gcm93R2FwPXs2fSB3PVwiZnVsbFwiPlxyXG4gICAgICAgICAgICA8RGV0YWlsUm93IGNvbE51bT17Y29sU3Bhbn0gbGFiZWw9JycgcGxhY2Vob2xkZXI9JycvPlxyXG4gICAgICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17Y29sU3Bhbn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRmlyc3QgTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIkpvaG5cIi8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17Y29sU3Bhbn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTGFzdCBOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiRG9lXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgPEdyaWRJdGVtIGNvbFNwYW49ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZHJlc3NcclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJCaXZkLiBCcm9rZW4gRHJlYW1zIDIxXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgPEdyaWRJdGVtIGNvbFNwYW49e2NvbFNwYW59PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENpdHlcclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJTYW4gRnJhbmNpc2NvXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgPEdyaWRJdGVtIGNvbFNwYW49e2NvbFNwYW59PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvdW50cnlcclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgIDxTZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInVzYVwiPlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ1YWVcIj5Vbml0ZWQgQXJhYiBFbWlyYXRlczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJubWtcIj5Ob3J0aCBNYWNlZG9uaWE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVcIj5HZXJtYW55PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXsyfT5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggZGVmYXVsdENoZWNrZWQ+U2hpcCB0byB0aGUgYmlsbGluZyBhZGRyZXNzPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXsyfT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0ncHJpbWFyeScgc2l6ZT1cImxnXCIgdz1cImZ1bGxcIj5QbGFjZSBPcmRlcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgIDwvU2ltcGxlR3JpZD5cclxuICAgIDwvVlN0YWNrPlxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsczsiXSwibmFtZXMiOlsiR3JpZEl0ZW0iLCJGb3JtQ29udHJvbCIsIkZvcm1MYWJlbCIsIklucHV0IiwiRGV0YWlsUm93IiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImNvbE51bSIsIlNlbGVjdCIsIkNoZWNrYm94IiwiQnV0dG9uIiwiVlN0YWNrIiwiSGVhZGluZyIsIlRleHQiLCJTaW1wbGVHcmlkIiwidXNlQnJlYWtwb2ludFZhbHVlIiwiRGV0YWlscyIsImNvbFNwYW4iLCJiYXNlIiwibWQiXSwic291cmNlUm9vdCI6IiJ9
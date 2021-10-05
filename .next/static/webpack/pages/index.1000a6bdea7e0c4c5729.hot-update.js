"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/detail_input.tsx":
/*!*****************************************!*\
  !*** ./src/components/detail_input.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\PremierSoft\\Desktop\\chackra\\chackra\\src\\components\\detail_input.tsx";



const DetailInput = ({
  label,
  placeholder,
  col = 1
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
    colSpan: col,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
        placeholder: placeholder
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 12
  }, undefined);
};

_c = DetailInput;
/* harmony default export */ __webpack_exports__["default"] = (DetailInput);

var _c;

$RefreshReg$(_c, "DetailInput");

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
/* harmony import */ var _components_detail_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/detail_input */ "./src/components/detail_input.tsx");
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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_detail_input__WEBPACK_IMPORTED_MODULE_0__.default, {
        col: colSpan
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTAwMGE2YmRlYTdlMGM0YzU3MjkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBRUEsTUFBTUksV0FBVyxHQUFHLENBQUM7QUFBQ0MsRUFBQUEsS0FBRDtBQUFRQyxFQUFBQSxXQUFSO0FBQXFCQyxFQUFBQSxHQUFHLEdBQUc7QUFBM0IsQ0FBRCxLQUlkO0FBQ0Ysc0JBQU8sOERBQUMsc0RBQUQ7QUFBVSxXQUFPLEVBQUdBLEdBQXBCO0FBQUEsMkJBQ1AsOERBQUMseURBQUQ7QUFBQSw4QkFDSSw4REFBQyx1REFBRDtBQUFBLGtCQUNNRjtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFJSSw4REFBQyxtREFBRDtBQUFPLG1CQUFXLEVBQUtDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE87QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBUUgsQ0FiRDs7S0FBTUY7QUFlTiwrREFBZUEsV0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQWNDOzs7QUFFRCxNQUFNWSxPQUFPLEdBQUcsTUFBTTtBQUFBOztBQUNsQixRQUFPQyxPQUFPLEdBQUdGLG9FQUFrQixDQUFDO0FBQUNHLElBQUFBLElBQUksRUFBRSxDQUFQO0FBQVVDLElBQUFBLEVBQUUsRUFBRTtBQUFkLEdBQUQsQ0FBbkM7QUFDQSxzQkFBTyw4REFBQyxvREFBRDtBQUFRLEtBQUMsRUFBQyxNQUFWO0FBQ0gsS0FBQyxFQUFDLE1BREM7QUFFSCxLQUFDLEVBQUUsRUFGQTtBQUdILFdBQU8sRUFBRSxFQUhOO0FBSUgsY0FBVSxFQUFDLFlBSlI7QUFBQSw0QkFNSCw4REFBQyxvREFBRDtBQUFRLGdCQUFVLEVBQUMsWUFBbkI7QUFB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QSxtQkFsQ0osZUErQ0ksOERBQUMsc0RBQUQ7QUFBVSxlQUFPLEVBQUUsQ0FBbkI7QUFBQSwrQkFDSSw4REFBQyx5REFBRDtBQUFBLGlDQUNJLDhEQUFDLHNEQUFEO0FBQVUsMEJBQWMsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkEvQ0osZUFvREksOERBQUMsc0RBQUQ7QUFBVSxlQUFPLEVBQUUsQ0FBbkI7QUFBQSwrQkFDSSw4REFBQyxvREFBRDtBQUFRLGlCQUFPLEVBQUMsU0FBaEI7QUFBMEIsY0FBSSxFQUFDLElBQS9CO0FBQW9DLFdBQUMsRUFBQyxNQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQW9FSCxDQXRFRDs7R0FBTUQ7VUFDZUQ7OztLQURmQztBQXdFTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9kZXRhaWxfaW5wdXQudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvc2VjdGlvbnMvZGV0YWlscy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZEl0ZW0sIEZvcm1Db250cm9sLCBGb3JtTGFiZWwsIElucHV0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuXHJcbmNvbnN0IERldGFpbElucHV0ID0gKHtsYWJlbCwgcGxhY2Vob2xkZXIsIGNvbCA9IDF9IDoge1xyXG4gICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxuICAgIGNvbDogbnVtYmVyO1xyXG59KSA9PiB7XHJcbiAgICByZXR1cm4gPEdyaWRJdGVtIGNvbFNwYW49eyBjb2wgfT5cclxuICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICA8Rm9ybUxhYmVsPlxyXG4gICAgICAgICAgICB7IGxhYmVsIH1cclxuICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXIgPSB7IHBsYWNlaG9sZGVyIH0vPlxyXG4gICAgPC9Gb3JtQ29udHJvbD5cclxuPC9HcmlkSXRlbT5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsSW5wdXQ7IiwiaW1wb3J0IHsgRm9ybUNvbnRyb2wsXHJcbiAgICAgRm9ybUxhYmVsLFxyXG4gICAgIElucHV0LFxyXG4gICAgIFNlbGVjdCxcclxuICAgICBDaGVja2JveCxcclxuICAgICBCdXR0b24sXHJcbiAgICAgVlN0YWNrLCBcclxuICAgICBIZWFkaW5nLFxyXG4gICAgIFRleHQsXHJcbiAgICAgU2ltcGxlR3JpZCxcclxuICAgICBHcmlkSXRlbSxcclxuICAgICB1c2VCcmVha3BvaW50VmFsdWUsXHJcbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG4gaW1wb3J0IERldGFpbElucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL2RldGFpbF9pbnB1dFwiO1xyXG5cclxuY29uc3QgRGV0YWlscyA9ICgpID0+IHtcclxuICAgIGNvbnN0ICBjb2xTcGFuID0gdXNlQnJlYWtwb2ludFZhbHVlKHtiYXNlOiAyLCBtZDogMX0pO1xyXG4gICAgcmV0dXJuIDxWU3RhY2sgdz1cImZ1bGxcIlxyXG4gICAgICAgIGg9XCJmdWxsXCJcclxuICAgICAgICBwPXsxMH1cclxuICAgICAgICBzcGFjaW5nPXsxMH1cclxuICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXHJcbiAgICA+XHJcbiAgICAgICAgPFZTdGFjayBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICA8SGVhZGluZyBzaXplPVwiMnhsXCI+WW91ciBkZXRhaWxzPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8VGV4dD5JZiB5b3UgYWxyZWFkeSBoYXZlIGFuIGFjY291bnQsIGNsaWNrIGhlcmUgdG8gbG9nIGluLjwvVGV4dD5cclxuICAgICAgICA8L1ZTdGFjaz5cclxuICAgICAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPXsyfSBjb2x1bW5HYXA9ezN9IHJvd0dhcD17Nn0gdz1cImZ1bGxcIj5cclxuICAgICAgICAgICAgPERldGFpbElucHV0IGNvbD0ge2NvbFNwYW59Lz5cclxuICAgICAgICAgICAgPEdyaWRJdGVtIGNvbFNwYW49e2NvbFNwYW59PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpcnN0IE5hbWVcclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJKb2huXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgPEdyaWRJdGVtIGNvbFNwYW49e2NvbFNwYW59PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExhc3QgTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIkRvZVwiLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXsyfT5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGRyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiQml2ZC4gQnJva2VuIERyZWFtcyAyMVwiLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXtjb2xTcGFufT5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiU2FuIEZyYW5jaXNjb1wiLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXtjb2xTcGFufT5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3VudHJ5XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICA8U2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ1c2FcIj5Vbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2E8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidWFlXCI+VW5pdGVkIEFyYWIgRW1pcmF0ZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm1rXCI+Tm9ydGggTWFjZWRvbmlhPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRlXCI+R2VybWFueTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17Mn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGRlZmF1bHRDaGVja2VkPlNoaXAgdG8gdGhlIGJpbGxpbmcgYWRkcmVzczwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17Mn0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3ByaW1hcnknIHNpemU9XCJsZ1wiIHc9XCJmdWxsXCI+UGxhY2UgT3JkZXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICA8L1NpbXBsZUdyaWQ+XHJcbiAgICA8L1ZTdGFjaz5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbHM7Il0sIm5hbWVzIjpbIkdyaWRJdGVtIiwiRm9ybUNvbnRyb2wiLCJGb3JtTGFiZWwiLCJJbnB1dCIsIkRldGFpbElucHV0IiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImNvbCIsIlNlbGVjdCIsIkNoZWNrYm94IiwiQnV0dG9uIiwiVlN0YWNrIiwiSGVhZGluZyIsIlRleHQiLCJTaW1wbGVHcmlkIiwidXNlQnJlYWtwb2ludFZhbHVlIiwiRGV0YWlscyIsImNvbFNwYW4iLCJiYXNlIiwibWQiXSwic291cmNlUm9vdCI6IiJ9
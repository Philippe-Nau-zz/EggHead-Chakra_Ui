"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

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
        label: "First Name",
        placeholder: "John",
        col: colSpan
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_detail_input__WEBPACK_IMPORTED_MODULE_0__.default, {
        label: "Last Name",
        placeholder: "Doe",
        col: colSpan
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_detail_input__WEBPACK_IMPORTED_MODULE_0__.default, {
        label: "Address",
        placeholder: "Doe",
        col: 2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
        colSpan: 2,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
            children: "Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
            placeholder: "Bivd. Broken Dreams 21"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
        colSpan: colSpan,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
            children: "City"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
            placeholder: "San Francisco"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
        colSpan: colSpan,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
            children: "Country"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Select, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
              value: "usa",
              children: "United States of America"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 24
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
              value: "uae",
              children: "United Arab Emirates"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 24
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
              value: "nmk",
              children: "North Macedonia"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 24
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
              value: "de",
              children: "Germany"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 24
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 20
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
        colSpan: 2,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
            defaultChecked: true,
            children: "Ship to the billing address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
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
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "primary",
          size: "lg",
          w: "full",
          children: "Place Order"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmVlOTZlYjliZWQwNGM2MDBjMDUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWNDOzs7QUFFRCxNQUFNYSxPQUFPLEdBQUcsTUFBTTtBQUFBOztBQUNsQixRQUFPQyxPQUFPLEdBQUdILG9FQUFrQixDQUFDO0FBQUNJLElBQUFBLElBQUksRUFBRSxDQUFQO0FBQVVDLElBQUFBLEVBQUUsRUFBRTtBQUFkLEdBQUQsQ0FBbkM7QUFDQSxzQkFBTyw4REFBQyxvREFBRDtBQUFRLEtBQUMsRUFBQyxNQUFWO0FBQ0gsS0FBQyxFQUFDLE1BREM7QUFFSCxLQUFDLEVBQUUsRUFGQTtBQUdILFdBQU8sRUFBRSxFQUhOO0FBSUgsY0FBVSxFQUFDLFlBSlI7QUFBQSw0QkFNSCw4REFBQyxvREFBRDtBQUFRLGdCQUFVLEVBQUMsWUFBbkI7QUFBZ0MsYUFBTyxFQUFFLENBQXpDO0FBQUEsOEJBQ0ksOERBQUMscURBQUQ7QUFBUyxZQUFJLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORyxlQVVILDhEQUFDLHdEQUFEO0FBQVksYUFBTyxFQUFFLENBQXJCO0FBQXdCLGVBQVMsRUFBRSxDQUFuQztBQUFzQyxZQUFNLEVBQUUsQ0FBOUM7QUFBaUQsT0FBQyxFQUFDLE1BQW5EO0FBQUEsOEJBQ0ksOERBQUMsNkRBQUQ7QUFBYSxhQUFLLEVBQUMsWUFBbkI7QUFBZ0MsbUJBQVcsRUFBQyxNQUE1QztBQUFtRCxXQUFHLEVBQUdGO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSSw4REFBQyw2REFBRDtBQUFhLGFBQUssRUFBQyxXQUFuQjtBQUErQixtQkFBVyxFQUFDLEtBQTNDO0FBQWlELFdBQUcsRUFBR0E7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUdJLDhEQUFDLDZEQUFEO0FBQWEsYUFBSyxFQUFDLFNBQW5CO0FBQTZCLG1CQUFXLEVBQUMsS0FBekM7QUFBK0MsV0FBRyxFQUFHO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEosZUFLSSw4REFBQyxzREFBRDtBQUFVLGVBQU8sRUFBRSxDQUFuQjtBQUFBLCtCQUNJLDhEQUFDLHlEQUFEO0FBQUEsa0NBQ0ksOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFJSSw4REFBQyxtREFBRDtBQUFPLHVCQUFXLEVBQUM7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLGVBYUksOERBQUMsc0RBQUQ7QUFBVSxlQUFPLEVBQUVBLE9BQW5CO0FBQUEsK0JBQ0ksOERBQUMseURBQUQ7QUFBQSxrQ0FDSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUlJLDhEQUFDLG1EQUFEO0FBQU8sdUJBQVcsRUFBQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBYkosZUFxQkksOERBQUMsc0RBQUQ7QUFBVSxlQUFPLEVBQUVBLE9BQW5CO0FBQUEsK0JBQ0ksOERBQUMseURBQUQ7QUFBQSxrQ0FDSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUlHLDhEQUFDLG9EQUFEO0FBQUEsb0NBQ0k7QUFBUSxtQkFBSyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFFSTtBQUFRLG1CQUFLLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSixlQUdJO0FBQVEsbUJBQUssRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhKLGVBSUk7QUFBUSxtQkFBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBckJKLGVBa0NJLDhEQUFDLHNEQUFEO0FBQVUsZUFBTyxFQUFFLENBQW5CO0FBQUEsK0JBQ0ksOERBQUMseURBQUQ7QUFBQSxpQ0FDSSw4REFBQyxzREFBRDtBQUFVLDBCQUFjLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbENKLGVBdUNJLDhEQUFDLHNEQUFEO0FBQVUsZUFBTyxFQUFFLENBQW5CO0FBQUEsK0JBQ0ksOERBQUMsb0RBQUQ7QUFBUSxpQkFBTyxFQUFDLFNBQWhCO0FBQTBCLGNBQUksRUFBQyxJQUEvQjtBQUFvQyxXQUFDLEVBQUMsTUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXZDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUF1REgsQ0F6REQ7O0dBQU1EO1VBQ2VGOzs7S0FEZkU7QUEyRE4sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2RldGFpbHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Db250cm9sLFxyXG4gICAgIEZvcm1MYWJlbCxcclxuICAgICBJbnB1dCxcclxuICAgICBTZWxlY3QsXHJcbiAgICAgQ2hlY2tib3gsXHJcbiAgICAgQnV0dG9uLFxyXG4gICAgIFZTdGFjaywgXHJcbiAgICAgSGVhZGluZyxcclxuICAgICBUZXh0LFxyXG4gICAgIFNpbXBsZUdyaWQsXHJcbiAgICAgR3JpZEl0ZW0sXHJcbiAgICAgdXNlQnJlYWtwb2ludFZhbHVlLFxyXG4gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5cclxuIGltcG9ydCBEZXRhaWxJbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50cy9kZXRhaWxfaW5wdXRcIjtcclxuXHJcbmNvbnN0IERldGFpbHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCAgY29sU3BhbiA9IHVzZUJyZWFrcG9pbnRWYWx1ZSh7YmFzZTogMiwgbWQ6IDF9KTtcclxuICAgIHJldHVybiA8VlN0YWNrIHc9XCJmdWxsXCJcclxuICAgICAgICBoPVwiZnVsbFwiXHJcbiAgICAgICAgcD17MTB9XHJcbiAgICAgICAgc3BhY2luZz17MTB9XHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxyXG4gICAgPlxyXG4gICAgICAgIDxWU3RhY2sgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIiBzcGFjaW5nPXszfT5cclxuICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cIjJ4bFwiPllvdXIgZGV0YWlsczwvSGVhZGluZz5cclxuICAgICAgICAgICAgPFRleHQ+SWYgeW91IGFscmVhZHkgaGF2ZSBhbiBhY2NvdW50LCBjbGljayBoZXJlIHRvIGxvZyBpbi48L1RleHQ+XHJcbiAgICAgICAgPC9WU3RhY2s+XHJcbiAgICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz17Mn0gY29sdW1uR2FwPXszfSByb3dHYXA9ezZ9IHc9XCJmdWxsXCI+XHJcbiAgICAgICAgICAgIDxEZXRhaWxJbnB1dCBsYWJlbD0nRmlyc3QgTmFtZScgcGxhY2Vob2xkZXI9J0pvaG4nIGNvbD0ge2NvbFNwYW59Lz5cclxuICAgICAgICAgICAgPERldGFpbElucHV0IGxhYmVsPSdMYXN0IE5hbWUnIHBsYWNlaG9sZGVyPSdEb2UnIGNvbD0ge2NvbFNwYW59Lz4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxEZXRhaWxJbnB1dCBsYWJlbD0nQWRkcmVzcycgcGxhY2Vob2xkZXI9J0RvZScgY29sPSB7Mn0vPlxyXG5cclxuICAgICAgICAgICAgPEdyaWRJdGVtIGNvbFNwYW49ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZHJlc3NcclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJCaXZkLiBCcm9rZW4gRHJlYW1zIDIxXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgPEdyaWRJdGVtIGNvbFNwYW49e2NvbFNwYW59PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENpdHlcclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJTYW4gRnJhbmNpc2NvXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgPEdyaWRJdGVtIGNvbFNwYW49e2NvbFNwYW59PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvdW50cnlcclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgIDxTZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInVzYVwiPlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ1YWVcIj5Vbml0ZWQgQXJhYiBFbWlyYXRlczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJubWtcIj5Ob3J0aCBNYWNlZG9uaWE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVcIj5HZXJtYW55PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXsyfT5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggZGVmYXVsdENoZWNrZWQ+U2hpcCB0byB0aGUgYmlsbGluZyBhZGRyZXNzPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXsyfT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0ncHJpbWFyeScgc2l6ZT1cImxnXCIgdz1cImZ1bGxcIj5QbGFjZSBPcmRlcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgIDwvU2ltcGxlR3JpZD5cclxuICAgIDwvVlN0YWNrPlxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsczsiXSwibmFtZXMiOlsiRm9ybUNvbnRyb2wiLCJGb3JtTGFiZWwiLCJJbnB1dCIsIlNlbGVjdCIsIkNoZWNrYm94IiwiQnV0dG9uIiwiVlN0YWNrIiwiSGVhZGluZyIsIlRleHQiLCJTaW1wbGVHcmlkIiwiR3JpZEl0ZW0iLCJ1c2VCcmVha3BvaW50VmFsdWUiLCJEZXRhaWxJbnB1dCIsIkRldGFpbHMiLCJjb2xTcGFuIiwiYmFzZSIsIm1kIl0sInNvdXJjZVJvb3QiOiIifQ==
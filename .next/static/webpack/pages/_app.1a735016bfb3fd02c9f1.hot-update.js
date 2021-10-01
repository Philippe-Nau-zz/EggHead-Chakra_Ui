"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/theme/index.ts":
/*!****************************!*\
  !*** ./src/theme/index.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _base$fonts, _base$fonts2;


const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
  colors: {
    brand: {
      50: '#f5fee5',
      100: '#e1fbb2',
      200: '#cdf781',
      300: '#b8ee56',
      400: '#a2e032',
      500: '#8ac919',
      600: '#71ab09',
      700: '#578602',
      800: '#3c5e00',
      900: '#203300'
    }
  },
  fonts: {
    heading: `Montserrat, ${(_base$fonts = _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme.fonts) === null || _base$fonts === void 0 ? void 0 : _base$fonts.heading}`,
    body: `Inter, ${(_base$fonts2 = _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme.fonts) === null || _base$fonts2 === void 0 ? void 0 : _base$fonts2.body}`
  },
  components: {
    Input: {
      variants: {
        filled: {
          field: {
            _focus: {
              borderColor: 'brand.500'
            }
          }
        }
      },
      sizes: {
        md: {
          field: {
            borderRadius: 'none'
          }
        }
      }
    }
  }
}, (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.withDefaultColorScheme)({
  colorScheme: 'brand',
  components: ['Checkbox']
}), (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.withDefaultVariant)({
  variant: 'filled',
  components: ['Input', 'Select']
}));
/* harmony default export */ __webpack_exports__["default"] = (theme);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xYTczNTAxNmJmYjNmZDAyYzlmMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQyxLQUFLLEdBQUdELDZEQUFXLENBQUM7QUFDdEJLLEVBQUFBLE1BQU0sRUFBRTtBQUNKQyxJQUFBQSxLQUFLLEVBQUU7QUFDSCxVQUFJLFNBREQ7QUFFSCxXQUFLLFNBRkY7QUFHSCxXQUFLLFNBSEY7QUFJSCxXQUFLLFNBSkY7QUFLSCxXQUFLLFNBTEY7QUFNSCxXQUFLLFNBTkY7QUFPSCxXQUFLLFNBUEY7QUFRSCxXQUFLLFNBUkY7QUFTSCxXQUFLLFNBVEY7QUFVSCxXQUFLO0FBVkY7QUFESCxHQURjO0FBZXRCQyxFQUFBQSxLQUFLLEVBQUU7QUFDSEMsSUFBQUEsT0FBTyxFQUFHLGVBQUQsZUFBZU4seURBQWYsZ0RBQWUsWUFBWU0sT0FBUSxFQUR6QztBQUVIQyxJQUFBQSxJQUFJLEVBQUcsVUFBRCxnQkFBVVAseURBQVYsaURBQVUsYUFBWU8sSUFBSztBQUY5QixHQWZlO0FBbUJ0QkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRTtBQUNIQyxNQUFBQSxRQUFRLEVBQUU7QUFDTkMsUUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFVBQUFBLEtBQUssRUFBRTtBQUNIQyxZQUFBQSxNQUFNLEVBQUU7QUFDSkMsY0FBQUEsV0FBVyxFQUFFO0FBRFQ7QUFETDtBQURIO0FBREYsT0FEUDtBQVVIQyxNQUFBQSxLQUFLLEVBQUU7QUFDSEMsUUFBQUEsRUFBRSxFQUFFO0FBQ0FKLFVBQUFBLEtBQUssRUFBRTtBQUNISyxZQUFBQSxZQUFZLEVBQUU7QUFEWDtBQURQO0FBREQ7QUFWSjtBQURDO0FBbkJVLENBQUQsRUF3Q3JCaEIsd0VBQXNCLENBQUM7QUFDbkJpQixFQUFBQSxXQUFXLEVBQUUsT0FETTtBQUVuQlYsRUFBQUEsVUFBVSxFQUFFLENBQUMsVUFBRDtBQUZPLENBQUQsQ0F4Q0QsRUE0Q3JCTixvRUFBa0IsQ0FBQztBQUNmaUIsRUFBQUEsT0FBTyxFQUFFLFFBRE07QUFFZlgsRUFBQUEsVUFBVSxFQUFFLENBQUMsT0FBRCxFQUFVLFFBQVY7QUFGRyxDQUFELENBNUNHLENBQXpCO0FBa0RBLCtEQUFlVCxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy90aGVtZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleHRlbmRUaGVtZSwgdGhlbWUgYXMgYmFzZSwgd2l0aERlZmF1bHRDb2xvclNjaGVtZSwgd2l0aERlZmF1bHRWYXJpYW50IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuXHJcbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xyXG4gICAgY29sb3JzOiB7XHJcbiAgICAgICAgYnJhbmQ6IHtcclxuICAgICAgICAgICAgNTA6ICcjZjVmZWU1JyxcclxuICAgICAgICAgICAgMTAwOiAnI2UxZmJiMicsXHJcbiAgICAgICAgICAgIDIwMDogJyNjZGY3ODEnLFxyXG4gICAgICAgICAgICAzMDA6ICcjYjhlZTU2JyxcclxuICAgICAgICAgICAgNDAwOiAnI2EyZTAzMicsXHJcbiAgICAgICAgICAgIDUwMDogJyM4YWM5MTknLFxyXG4gICAgICAgICAgICA2MDA6ICcjNzFhYjA5JyxcclxuICAgICAgICAgICAgNzAwOiAnIzU3ODYwMicsXHJcbiAgICAgICAgICAgIDgwMDogJyMzYzVlMDAnLFxyXG4gICAgICAgICAgICA5MDA6ICcjMjAzMzAwJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvbnRzOiB7XHJcbiAgICAgICAgaGVhZGluZzogYE1vbnRzZXJyYXQsICR7YmFzZS5mb250cz8uaGVhZGluZ31gLFxyXG4gICAgICAgIGJvZHk6IGBJbnRlciwgJHtiYXNlLmZvbnRzPy5ib2R5fWAsXHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIElucHV0OiB7XHJcbiAgICAgICAgICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBmaWxsZWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZm9jdXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnYnJhbmQuNTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaXplczoge1xyXG4gICAgICAgICAgICAgICAgbWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSxcclxuICAgIHdpdGhEZWZhdWx0Q29sb3JTY2hlbWUoe1xyXG4gICAgICAgIGNvbG9yU2NoZW1lOiAnYnJhbmQnLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IFsnQ2hlY2tib3gnXSxcclxuICAgIH0pLFxyXG4gICAgd2l0aERlZmF1bHRWYXJpYW50KHtcclxuICAgICAgICB2YXJpYW50OiAnZmlsbGVkJyxcclxuICAgICAgICBjb21wb25lbnRzOiBbJ0lucHV0JywgJ1NlbGVjdCddXHJcbiAgICB9KSxcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lOyJdLCJuYW1lcyI6WyJleHRlbmRUaGVtZSIsInRoZW1lIiwiYmFzZSIsIndpdGhEZWZhdWx0Q29sb3JTY2hlbWUiLCJ3aXRoRGVmYXVsdFZhcmlhbnQiLCJjb2xvcnMiLCJicmFuZCIsImZvbnRzIiwiaGVhZGluZyIsImJvZHkiLCJjb21wb25lbnRzIiwiSW5wdXQiLCJ2YXJpYW50cyIsImZpbGxlZCIsImZpZWxkIiwiX2ZvY3VzIiwiYm9yZGVyQ29sb3IiLCJzaXplcyIsIm1kIiwiYm9yZGVyUmFkaXVzIiwiY29sb3JTY2hlbWUiLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==
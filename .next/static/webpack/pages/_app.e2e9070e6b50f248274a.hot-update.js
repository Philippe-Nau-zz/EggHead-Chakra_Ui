"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/theme/index.ts":
/*!****************************!*\
  !*** ./src/theme/index.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_PremierSoft_Desktop_chackra_chackra_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _base$fonts, _base$fonts2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_PremierSoft_Desktop_chackra_chackra_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


const inputSelectStyles = {
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
};
const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({
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
    heading: `Montserrat, ${(_base$fonts = _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.theme.fonts) === null || _base$fonts === void 0 ? void 0 : _base$fonts.heading}`,
    body: `Inter, ${(_base$fonts2 = _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.theme.fonts) === null || _base$fonts2 === void 0 ? void 0 : _base$fonts2.body}`
  },
  components: {
    Input: _objectSpread({}, inputSelectStyles)
  }
}, (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.withDefaultColorScheme)({
  colorScheme: 'brand',
  components: ['Checkbox']
}), (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.withDefaultVariant)({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lMmU5MDcwZTZiNTBmMjQ4Mjc0YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUssaUJBQWlCLEdBQUc7QUFDdEJDLEVBQUFBLFFBQVEsRUFBRTtBQUNOQyxJQUFBQSxNQUFNLEVBQUU7QUFDSkMsTUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFFBQUFBLE1BQU0sRUFBRTtBQUNKQyxVQUFBQSxXQUFXLEVBQUU7QUFEVDtBQURMO0FBREg7QUFERixHQURZO0FBVXRCQyxFQUFBQSxLQUFLLEVBQUU7QUFDSEMsSUFBQUEsRUFBRSxFQUFFO0FBQ0FKLE1BQUFBLEtBQUssRUFBRTtBQUNISyxRQUFBQSxZQUFZLEVBQUU7QUFEWDtBQURQO0FBREQ7QUFWZSxDQUExQjtBQW1CQSxNQUFNWixLQUFLLEdBQUdELDZEQUFXLENBQUM7QUFDdEJjLEVBQUFBLE1BQU0sRUFBRTtBQUNKQyxJQUFBQSxLQUFLLEVBQUU7QUFDSCxVQUFJLFNBREQ7QUFFSCxXQUFLLFNBRkY7QUFHSCxXQUFLLFNBSEY7QUFJSCxXQUFLLFNBSkY7QUFLSCxXQUFLLFNBTEY7QUFNSCxXQUFLLFNBTkY7QUFPSCxXQUFLLFNBUEY7QUFRSCxXQUFLLFNBUkY7QUFTSCxXQUFLLFNBVEY7QUFVSCxXQUFLO0FBVkY7QUFESCxHQURjO0FBZXRCQyxFQUFBQSxLQUFLLEVBQUU7QUFDSEMsSUFBQUEsT0FBTyxFQUFHLGVBQUQsZUFBZWYseURBQWYsZ0RBQWUsWUFBWWUsT0FBUSxFQUR6QztBQUVIQyxJQUFBQSxJQUFJLEVBQUcsVUFBRCxnQkFBVWhCLHlEQUFWLGlEQUFVLGFBQVlnQixJQUFLO0FBRjlCLEdBZmU7QUFtQnRCQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxvQkFBT2YsaUJBQVA7QUFERztBQW5CVSxDQUFELEVBdUJyQkYsd0VBQXNCLENBQUM7QUFDbkJrQixFQUFBQSxXQUFXLEVBQUUsT0FETTtBQUVuQkYsRUFBQUEsVUFBVSxFQUFFLENBQUMsVUFBRDtBQUZPLENBQUQsQ0F2QkQsRUEyQnJCZixvRUFBa0IsQ0FBQztBQUNma0IsRUFBQUEsT0FBTyxFQUFFLFFBRE07QUFFZkgsRUFBQUEsVUFBVSxFQUFFLENBQUMsT0FBRCxFQUFVLFFBQVY7QUFGRyxDQUFELENBM0JHLENBQXpCO0FBaUNBLCtEQUFlbEIsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdGhlbWUvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUsIHRoZW1lIGFzIGJhc2UsIHdpdGhEZWZhdWx0Q29sb3JTY2hlbWUsIHdpdGhEZWZhdWx0VmFyaWFudCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG5jb25zdCBpbnB1dFNlbGVjdFN0eWxlcyA9IHtcclxuICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICAgZmlsbGVkOiB7XHJcbiAgICAgICAgICAgIGZpZWxkOiB7XHJcbiAgICAgICAgICAgICAgICBfZm9jdXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ2JyYW5kLjUwMCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzaXplczoge1xyXG4gICAgICAgIG1kOiB7XHJcbiAgICAgICAgICAgIGZpZWxkOiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICdub25lJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xyXG4gICAgY29sb3JzOiB7XHJcbiAgICAgICAgYnJhbmQ6IHtcclxuICAgICAgICAgICAgNTA6ICcjZjVmZWU1JyxcclxuICAgICAgICAgICAgMTAwOiAnI2UxZmJiMicsXHJcbiAgICAgICAgICAgIDIwMDogJyNjZGY3ODEnLFxyXG4gICAgICAgICAgICAzMDA6ICcjYjhlZTU2JyxcclxuICAgICAgICAgICAgNDAwOiAnI2EyZTAzMicsXHJcbiAgICAgICAgICAgIDUwMDogJyM4YWM5MTknLFxyXG4gICAgICAgICAgICA2MDA6ICcjNzFhYjA5JyxcclxuICAgICAgICAgICAgNzAwOiAnIzU3ODYwMicsXHJcbiAgICAgICAgICAgIDgwMDogJyMzYzVlMDAnLFxyXG4gICAgICAgICAgICA5MDA6ICcjMjAzMzAwJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvbnRzOiB7XHJcbiAgICAgICAgaGVhZGluZzogYE1vbnRzZXJyYXQsICR7YmFzZS5mb250cz8uaGVhZGluZ31gLFxyXG4gICAgICAgIGJvZHk6IGBJbnRlciwgJHtiYXNlLmZvbnRzPy5ib2R5fWAsXHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIElucHV0OiB7IC4uLmlucHV0U2VsZWN0U3R5bGVzIH0sXHJcbiAgICB9LFxyXG59LFxyXG4gICAgd2l0aERlZmF1bHRDb2xvclNjaGVtZSh7XHJcbiAgICAgICAgY29sb3JTY2hlbWU6ICdicmFuZCcsXHJcbiAgICAgICAgY29tcG9uZW50czogWydDaGVja2JveCddLFxyXG4gICAgfSksXHJcbiAgICB3aXRoRGVmYXVsdFZhcmlhbnQoe1xyXG4gICAgICAgIHZhcmlhbnQ6ICdmaWxsZWQnLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IFsnSW5wdXQnLCAnU2VsZWN0J11cclxuICAgIH0pLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7Il0sIm5hbWVzIjpbImV4dGVuZFRoZW1lIiwidGhlbWUiLCJiYXNlIiwid2l0aERlZmF1bHRDb2xvclNjaGVtZSIsIndpdGhEZWZhdWx0VmFyaWFudCIsImlucHV0U2VsZWN0U3R5bGVzIiwidmFyaWFudHMiLCJmaWxsZWQiLCJmaWVsZCIsIl9mb2N1cyIsImJvcmRlckNvbG9yIiwic2l6ZXMiLCJtZCIsImJvcmRlclJhZGl1cyIsImNvbG9ycyIsImJyYW5kIiwiZm9udHMiLCJoZWFkaW5nIiwiYm9keSIsImNvbXBvbmVudHMiLCJJbnB1dCIsImNvbG9yU2NoZW1lIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=
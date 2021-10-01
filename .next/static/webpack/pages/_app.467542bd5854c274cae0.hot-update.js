"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_PremierSoft_Desktop_chackra_chackra_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/theme */ "./src/theme/index.ts");
/* harmony import */ var _src_theme_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/theme/styles.css */ "./src/theme/styles.css");
/* harmony import */ var _src_theme_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_theme_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\PremierSoft\\Desktop\\chackra\\chackra\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_PremierSoft_Desktop_chackra_chackra_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






const App = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ChakraProvider, {
    theme: _src_theme__WEBPACK_IMPORTED_MODULE_1__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

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
    input: {
      sizes: {
        lg: {
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
  components: ['input', 'Select']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40Njc1NDJiZDU4NTRjMjc0Y2FlMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7OztBQUVBLE1BQU1FLEdBQUcsR0FBRyxDQUFDO0FBQUNDLEVBQUFBLFNBQUQ7QUFBWUMsRUFBQUE7QUFBWixDQUFELEtBQXNDO0FBQzlDLHNCQUNJLDhEQUFDLDREQUFEO0FBQWdCLFNBQUssRUFBRUgsK0NBQXZCO0FBQUEsMkJBQ0ksOERBQUMsU0FBRCxvQkFBZUcsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBS0gsQ0FORDs7S0FBTUY7QUFRTiwrREFBZUEsR0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFFQSxNQUFNRCxLQUFLLEdBQUdJLDZEQUFXLENBQUM7QUFDdEJJLEVBQUFBLE1BQU0sRUFBRTtBQUNKQyxJQUFBQSxLQUFLLEVBQUU7QUFDSCxVQUFJLFNBREQ7QUFFSCxXQUFLLFNBRkY7QUFHSCxXQUFLLFNBSEY7QUFJSCxXQUFLLFNBSkY7QUFLSCxXQUFLLFNBTEY7QUFNSCxXQUFLLFNBTkY7QUFPSCxXQUFLLFNBUEY7QUFRSCxXQUFLLFNBUkY7QUFTSCxXQUFLLFNBVEY7QUFVSCxXQUFLO0FBVkY7QUFESCxHQURjO0FBZXRCQyxFQUFBQSxLQUFLLEVBQUU7QUFDSEMsSUFBQUEsT0FBTyxFQUFHLGVBQUQsZUFBZU4seURBQWYsZ0RBQWUsWUFBWU0sT0FBUSxFQUR6QztBQUVIQyxJQUFBQSxJQUFJLEVBQUcsVUFBRCxnQkFBVVAseURBQVYsaURBQVUsYUFBWU8sSUFBSztBQUY5QixHQWZlO0FBbUJ0QkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRTtBQUNIQyxNQUFBQSxLQUFLLEVBQUU7QUFDSEMsUUFBQUEsRUFBRSxFQUFFO0FBQ0FDLFVBQUFBLEtBQUssRUFBRTtBQUNIQyxZQUFBQSxZQUFZLEVBQUU7QUFEWDtBQURQO0FBREQ7QUFESjtBQURDO0FBbkJVLENBQUQsRUErQnJCWix3RUFBc0IsQ0FBQztBQUNuQmEsRUFBQUEsV0FBVyxFQUFFLE9BRE07QUFFbkJOLEVBQUFBLFVBQVUsRUFBRSxDQUFDLFVBQUQ7QUFGTyxDQUFELENBL0JELEVBbUNyQk4sb0VBQWtCLENBQUM7QUFDZmEsRUFBQUEsT0FBTyxFQUFFLFFBRE07QUFFZlAsRUFBQUEsVUFBVSxFQUFFLENBQUMsT0FBRCxFQUFVLFFBQVY7QUFGRyxDQUFELENBbkNHLENBQXpCO0FBeUNBLCtEQUFlYixLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvdGhlbWUvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuXHJcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3JjL3RoZW1lXCI7XHJcbmltcG9ydCAnLi4vc3JjL3RoZW1lL3N0eWxlcy5jc3MnXHJcblxyXG5jb25zdCBBcHAgPSAoe0NvbXBvbmVudCwgcGFnZVByb3BzfTogQXBwUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L0NoYWtyYVByb3ZpZGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJpbXBvcnQgeyBleHRlbmRUaGVtZSwgdGhlbWUgYXMgYmFzZSwgd2l0aERlZmF1bHRDb2xvclNjaGVtZSwgd2l0aERlZmF1bHRWYXJpYW50IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuXHJcbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xyXG4gICAgY29sb3JzOiB7XHJcbiAgICAgICAgYnJhbmQ6IHtcclxuICAgICAgICAgICAgNTA6ICcjZjVmZWU1JyxcclxuICAgICAgICAgICAgMTAwOiAnI2UxZmJiMicsXHJcbiAgICAgICAgICAgIDIwMDogJyNjZGY3ODEnLFxyXG4gICAgICAgICAgICAzMDA6ICcjYjhlZTU2JyxcclxuICAgICAgICAgICAgNDAwOiAnI2EyZTAzMicsXHJcbiAgICAgICAgICAgIDUwMDogJyM4YWM5MTknLFxyXG4gICAgICAgICAgICA2MDA6ICcjNzFhYjA5JyxcclxuICAgICAgICAgICAgNzAwOiAnIzU3ODYwMicsXHJcbiAgICAgICAgICAgIDgwMDogJyMzYzVlMDAnLFxyXG4gICAgICAgICAgICA5MDA6ICcjMjAzMzAwJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvbnRzOiB7XHJcbiAgICAgICAgaGVhZGluZzogYE1vbnRzZXJyYXQsICR7YmFzZS5mb250cz8uaGVhZGluZ31gLFxyXG4gICAgICAgIGJvZHk6IGBJbnRlciwgJHtiYXNlLmZvbnRzPy5ib2R5fWAsXHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICAgIHNpemVzOiB7XHJcbiAgICAgICAgICAgICAgICBsZzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59LFxyXG4gICAgd2l0aERlZmF1bHRDb2xvclNjaGVtZSh7XHJcbiAgICAgICAgY29sb3JTY2hlbWU6ICdicmFuZCcsXHJcbiAgICAgICAgY29tcG9uZW50czogWydDaGVja2JveCddLFxyXG4gICAgfSksXHJcbiAgICB3aXRoRGVmYXVsdFZhcmlhbnQoe1xyXG4gICAgICAgIHZhcmlhbnQ6ICdmaWxsZWQnLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IFsnaW5wdXQnLCAnU2VsZWN0J11cclxuICAgIH0pLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7Il0sIm5hbWVzIjpbIkNoYWtyYVByb3ZpZGVyIiwidGhlbWUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJleHRlbmRUaGVtZSIsImJhc2UiLCJ3aXRoRGVmYXVsdENvbG9yU2NoZW1lIiwid2l0aERlZmF1bHRWYXJpYW50IiwiY29sb3JzIiwiYnJhbmQiLCJmb250cyIsImhlYWRpbmciLCJib2R5IiwiY29tcG9uZW50cyIsImlucHV0Iiwic2l6ZXMiLCJsZyIsImZpZWxkIiwiYm9yZGVyUmFkaXVzIiwiY29sb3JTY2hlbWUiLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==
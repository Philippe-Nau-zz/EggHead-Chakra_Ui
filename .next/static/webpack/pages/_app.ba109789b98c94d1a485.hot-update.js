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
    Button: {
      variants: {
        primary: {
          rounded: 'none'
        }
      }
    },
    Input: _objectSpread({}, inputSelectStyles),
    Select: _objectSpread({}, inputSelectStyles),
    Checkbox: {
      baseStyle: {
        control: {
          borderRadius: 'none',
          _focus: {
            ring: 2,
            ringColor: 'brand.500'
          }
        }
      }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iYTEwOTc4OWI5OGM5NGQxYTQ4NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUssaUJBQWlCLEdBQUc7QUFDdEJDLEVBQUFBLFFBQVEsRUFBRTtBQUNOQyxJQUFBQSxNQUFNLEVBQUU7QUFDSkMsTUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFFBQUFBLE1BQU0sRUFBRTtBQUNKQyxVQUFBQSxXQUFXLEVBQUU7QUFEVDtBQURMO0FBREg7QUFERixHQURZO0FBVXRCQyxFQUFBQSxLQUFLLEVBQUU7QUFDSEMsSUFBQUEsRUFBRSxFQUFFO0FBQ0FKLE1BQUFBLEtBQUssRUFBRTtBQUNISyxRQUFBQSxZQUFZLEVBQUU7QUFEWDtBQURQO0FBREQ7QUFWZSxDQUExQjtBQW1CQSxNQUFNWixLQUFLLEdBQUdELDZEQUFXLENBQUM7QUFDdEJjLEVBQUFBLE1BQU0sRUFBRTtBQUNKQyxJQUFBQSxLQUFLLEVBQUU7QUFDSCxVQUFJLFNBREQ7QUFFSCxXQUFLLFNBRkY7QUFHSCxXQUFLLFNBSEY7QUFJSCxXQUFLLFNBSkY7QUFLSCxXQUFLLFNBTEY7QUFNSCxXQUFLLFNBTkY7QUFPSCxXQUFLLFNBUEY7QUFRSCxXQUFLLFNBUkY7QUFTSCxXQUFLLFNBVEY7QUFVSCxXQUFLO0FBVkY7QUFESCxHQURjO0FBZXRCQyxFQUFBQSxLQUFLLEVBQUU7QUFDSEMsSUFBQUEsT0FBTyxFQUFHLGVBQUQsZUFBZWYseURBQWYsZ0RBQWUsWUFBWWUsT0FBUSxFQUR6QztBQUVIQyxJQUFBQSxJQUFJLEVBQUcsVUFBRCxnQkFBVWhCLHlEQUFWLGlEQUFVLGFBQVlnQixJQUFLO0FBRjlCLEdBZmU7QUFtQnRCQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsTUFBTSxFQUFFO0FBQ0pkLE1BQUFBLFFBQVEsRUFBRTtBQUNOZSxRQUFBQSxPQUFPLEVBQUU7QUFDTEMsVUFBQUEsT0FBTyxFQUFFO0FBREo7QUFESDtBQUROLEtBREE7QUFRUkMsSUFBQUEsS0FBSyxvQkFBT2xCLGlCQUFQLENBUkc7QUFTUm1CLElBQUFBLE1BQU0sb0JBQU9uQixpQkFBUCxDQVRFO0FBVVJvQixJQUFBQSxRQUFRLEVBQUU7QUFDTkMsTUFBQUEsU0FBUyxFQUFFO0FBQ1BDLFFBQUFBLE9BQU8sRUFBRTtBQUNMZCxVQUFBQSxZQUFZLEVBQUUsTUFEVDtBQUVMSixVQUFBQSxNQUFNLEVBQUU7QUFDSm1CLFlBQUFBLElBQUksRUFBRSxDQURGO0FBRUpDLFlBQUFBLFNBQVMsRUFBRTtBQUZQO0FBRkg7QUFERjtBQURMO0FBVkY7QUFuQlUsQ0FBRCxFQTBDckIxQix3RUFBc0IsQ0FBQztBQUNuQjJCLEVBQUFBLFdBQVcsRUFBRSxPQURNO0FBRW5CWCxFQUFBQSxVQUFVLEVBQUUsQ0FBQyxVQUFEO0FBRk8sQ0FBRCxDQTFDRCxFQThDckJmLG9FQUFrQixDQUFDO0FBQ2YyQixFQUFBQSxPQUFPLEVBQUUsUUFETTtBQUVmWixFQUFBQSxVQUFVLEVBQUUsQ0FBQyxPQUFELEVBQVUsUUFBVjtBQUZHLENBQUQsQ0E5Q0csQ0FBekI7QUFvREEsK0RBQWVsQixLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy90aGVtZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleHRlbmRUaGVtZSwgdGhlbWUgYXMgYmFzZSwgd2l0aERlZmF1bHRDb2xvclNjaGVtZSwgd2l0aERlZmF1bHRWYXJpYW50IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuXHJcbmNvbnN0IGlucHV0U2VsZWN0U3R5bGVzID0ge1xyXG4gICAgdmFyaWFudHM6IHtcclxuICAgICAgICBmaWxsZWQ6IHtcclxuICAgICAgICAgICAgZmllbGQ6IHtcclxuICAgICAgICAgICAgICAgIF9mb2N1czoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnYnJhbmQuNTAwJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNpemVzOiB7XHJcbiAgICAgICAgbWQ6IHtcclxuICAgICAgICAgICAgZmllbGQ6IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJ25vbmUnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XHJcbiAgICBjb2xvcnM6IHtcclxuICAgICAgICBicmFuZDoge1xyXG4gICAgICAgICAgICA1MDogJyNmNWZlZTUnLFxyXG4gICAgICAgICAgICAxMDA6ICcjZTFmYmIyJyxcclxuICAgICAgICAgICAgMjAwOiAnI2NkZjc4MScsXHJcbiAgICAgICAgICAgIDMwMDogJyNiOGVlNTYnLFxyXG4gICAgICAgICAgICA0MDA6ICcjYTJlMDMyJyxcclxuICAgICAgICAgICAgNTAwOiAnIzhhYzkxOScsXHJcbiAgICAgICAgICAgIDYwMDogJyM3MWFiMDknLFxyXG4gICAgICAgICAgICA3MDA6ICcjNTc4NjAyJyxcclxuICAgICAgICAgICAgODAwOiAnIzNjNWUwMCcsXHJcbiAgICAgICAgICAgIDkwMDogJyMyMDMzMDAnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZm9udHM6IHtcclxuICAgICAgICBoZWFkaW5nOiBgTW9udHNlcnJhdCwgJHtiYXNlLmZvbnRzPy5oZWFkaW5nfWAsXHJcbiAgICAgICAgYm9keTogYEludGVyLCAke2Jhc2UuZm9udHM/LmJvZHl9YCxcclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgQnV0dG9uOiB7XHJcbiAgICAgICAgICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91bmRlZDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBJbnB1dDogeyAuLi5pbnB1dFNlbGVjdFN0eWxlcyB9LFxyXG4gICAgICAgIFNlbGVjdDogeyAuLi5pbnB1dFNlbGVjdFN0eWxlcyB9LFxyXG4gICAgICAgIENoZWNrYm94OiB7IFxyXG4gICAgICAgICAgICBiYXNlU3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2w6IHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICBfZm9jdXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmluZzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmluZ0NvbG9yOiAnYnJhbmQuNTAwJyxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSxcclxuICAgIH0sXHJcbn0sXHJcbiAgICB3aXRoRGVmYXVsdENvbG9yU2NoZW1lKHtcclxuICAgICAgICBjb2xvclNjaGVtZTogJ2JyYW5kJyxcclxuICAgICAgICBjb21wb25lbnRzOiBbJ0NoZWNrYm94J10sXHJcbiAgICB9KSxcclxuICAgIHdpdGhEZWZhdWx0VmFyaWFudCh7XHJcbiAgICAgICAgdmFyaWFudDogJ2ZpbGxlZCcsXHJcbiAgICAgICAgY29tcG9uZW50czogWydJbnB1dCcsICdTZWxlY3QnXVxyXG4gICAgfSksXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZTsiXSwibmFtZXMiOlsiZXh0ZW5kVGhlbWUiLCJ0aGVtZSIsImJhc2UiLCJ3aXRoRGVmYXVsdENvbG9yU2NoZW1lIiwid2l0aERlZmF1bHRWYXJpYW50IiwiaW5wdXRTZWxlY3RTdHlsZXMiLCJ2YXJpYW50cyIsImZpbGxlZCIsImZpZWxkIiwiX2ZvY3VzIiwiYm9yZGVyQ29sb3IiLCJzaXplcyIsIm1kIiwiYm9yZGVyUmFkaXVzIiwiY29sb3JzIiwiYnJhbmQiLCJmb250cyIsImhlYWRpbmciLCJib2R5IiwiY29tcG9uZW50cyIsIkJ1dHRvbiIsInByaW1hcnkiLCJyb3VuZGVkIiwiSW5wdXQiLCJTZWxlY3QiLCJDaGVja2JveCIsImJhc2VTdHlsZSIsImNvbnRyb2wiLCJyaW5nIiwicmluZ0NvbG9yIiwiY29sb3JTY2hlbWUiLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==
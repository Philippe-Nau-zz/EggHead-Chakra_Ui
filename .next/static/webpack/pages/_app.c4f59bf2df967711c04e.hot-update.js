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
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/theme-tools */ "./node_modules/@chakra-ui/theme-tools/dist/esm/index.js");
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
const brandRing = {
  _focus: {
    ring: 2,
    ringColor: 'brand.500'
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
        primary: props => _objectSpread(_objectSpread({
          rounded: 'none'
        }, brandRing), {}, {
          backgroundColor: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_2__.mode)('brand.500', 'brand.200')(props)
        })
      }
    },
    Input: _objectSpread({}, inputSelectStyles),
    Select: _objectSpread({}, inputSelectStyles),
    Checkbox: {
      baseStyle: {
        control: _objectSpread({
          borderRadius: 'none'
        }, brandRing)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jNGY1OWJmMmRmOTY3NzExYzA0ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1DO0FBRUQsTUFBTU0saUJBQWlCLEdBQUc7QUFDdEJDLEVBQUFBLFFBQVEsRUFBRTtBQUNOQyxJQUFBQSxNQUFNLEVBQUU7QUFDSkMsTUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFFBQUFBLE1BQU0sRUFBRTtBQUNKQyxVQUFBQSxXQUFXLEVBQUU7QUFEVDtBQURMO0FBREg7QUFERixHQURZO0FBVXRCQyxFQUFBQSxLQUFLLEVBQUU7QUFDSEMsSUFBQUEsRUFBRSxFQUFFO0FBQ0FKLE1BQUFBLEtBQUssRUFBRTtBQUNISyxRQUFBQSxZQUFZLEVBQUU7QUFEWDtBQURQO0FBREQ7QUFWZSxDQUExQjtBQW1CQSxNQUFNQyxTQUFTLEdBQUc7QUFDZEwsRUFBQUEsTUFBTSxFQUFFO0FBQ0pNLElBQUFBLElBQUksRUFBRSxDQURGO0FBRUpDLElBQUFBLFNBQVMsRUFBRTtBQUZQO0FBRE0sQ0FBbEI7QUFPQSxNQUFNaEIsS0FBSyxHQUFHRCw2REFBVyxDQUFDO0FBQ3RCa0IsRUFBQUEsTUFBTSxFQUFFO0FBQ0pDLElBQUFBLEtBQUssRUFBRTtBQUNILFVBQUksU0FERDtBQUVILFdBQUssU0FGRjtBQUdILFdBQUssU0FIRjtBQUlILFdBQUssU0FKRjtBQUtILFdBQUssU0FMRjtBQU1ILFdBQUssU0FORjtBQU9ILFdBQUssU0FQRjtBQVFILFdBQUssU0FSRjtBQVNILFdBQUssU0FURjtBQVVILFdBQUs7QUFWRjtBQURILEdBRGM7QUFldEJDLEVBQUFBLEtBQUssRUFBRTtBQUNIQyxJQUFBQSxPQUFPLEVBQUcsZUFBRCxlQUFlbkIseURBQWYsZ0RBQWUsWUFBWW1CLE9BQVEsRUFEekM7QUFFSEMsSUFBQUEsSUFBSSxFQUFHLFVBQUQsZ0JBQVVwQix5REFBVixpREFBVSxhQUFZb0IsSUFBSztBQUY5QixHQWZlO0FBbUJ0QkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBRTtBQUNKakIsTUFBQUEsUUFBUSxFQUFFO0FBQ05rQixRQUFBQSxPQUFPLEVBQUdDLEtBQUQ7QUFDTEMsVUFBQUEsT0FBTyxFQUFFO0FBREosV0FFRlosU0FGRTtBQUdMYSxVQUFBQSxlQUFlLEVBQUV2Qiw0REFBSSxDQUFDLFdBQUQsRUFBYyxXQUFkLENBQUosQ0FBK0JxQixLQUEvQjtBQUhaO0FBREg7QUFETixLQURBO0FBVVJHLElBQUFBLEtBQUssb0JBQU92QixpQkFBUCxDQVZHO0FBV1J3QixJQUFBQSxNQUFNLG9CQUFPeEIsaUJBQVAsQ0FYRTtBQVlSeUIsSUFBQUEsUUFBUSxFQUFFO0FBQ05DLE1BQUFBLFNBQVMsRUFBRTtBQUNQQyxRQUFBQSxPQUFPO0FBQ0huQixVQUFBQSxZQUFZLEVBQUU7QUFEWCxXQUVBQyxTQUZBO0FBREE7QUFETDtBQVpGO0FBbkJVLENBQUQsRUF5Q3JCWix3RUFBc0IsQ0FBQztBQUNuQitCLEVBQUFBLFdBQVcsRUFBRSxPQURNO0FBRW5CWCxFQUFBQSxVQUFVLEVBQUUsQ0FBQyxVQUFEO0FBRk8sQ0FBRCxDQXpDRCxFQTZDckJuQixvRUFBa0IsQ0FBQztBQUNmK0IsRUFBQUEsT0FBTyxFQUFFLFFBRE07QUFFZlosRUFBQUEsVUFBVSxFQUFFLENBQUMsT0FBRCxFQUFVLFFBQVY7QUFGRyxDQUFELENBN0NHLENBQXpCO0FBbURBLCtEQUFldEIsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdGhlbWUvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUsXHJcbiAgICAgdGhlbWUgYXMgYmFzZSxcclxuICAgICB3aXRoRGVmYXVsdENvbG9yU2NoZW1lLFxyXG4gICAgIHdpdGhEZWZhdWx0VmFyaWFudFxyXG4gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5cclxuIGltcG9ydCB7IG1vZGUgfSBmcm9tIFwiQGNoYWtyYS11aS90aGVtZS10b29sc1wiXHJcblxyXG5jb25zdCBpbnB1dFNlbGVjdFN0eWxlcyA9IHtcclxuICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICAgZmlsbGVkOiB7XHJcbiAgICAgICAgICAgIGZpZWxkOiB7XHJcbiAgICAgICAgICAgICAgICBfZm9jdXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ2JyYW5kLjUwMCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzaXplczoge1xyXG4gICAgICAgIG1kOiB7XHJcbiAgICAgICAgICAgIGZpZWxkOiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICdub25lJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IGJyYW5kUmluZyA9IHtcclxuICAgIF9mb2N1czoge1xyXG4gICAgICAgIHJpbmc6IDIsXHJcbiAgICAgICAgcmluZ0NvbG9yOiAnYnJhbmQuNTAwJyxcclxuICAgIH0sXHJcbn07XHJcblxyXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcclxuICAgIGNvbG9yczoge1xyXG4gICAgICAgIGJyYW5kOiB7XHJcbiAgICAgICAgICAgIDUwOiAnI2Y1ZmVlNScsXHJcbiAgICAgICAgICAgIDEwMDogJyNlMWZiYjInLFxyXG4gICAgICAgICAgICAyMDA6ICcjY2RmNzgxJyxcclxuICAgICAgICAgICAgMzAwOiAnI2I4ZWU1NicsXHJcbiAgICAgICAgICAgIDQwMDogJyNhMmUwMzInLFxyXG4gICAgICAgICAgICA1MDA6ICcjOGFjOTE5JyxcclxuICAgICAgICAgICAgNjAwOiAnIzcxYWIwOScsXHJcbiAgICAgICAgICAgIDcwMDogJyM1Nzg2MDInLFxyXG4gICAgICAgICAgICA4MDA6ICcjM2M1ZTAwJyxcclxuICAgICAgICAgICAgOTAwOiAnIzIwMzMwMCcsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBmb250czoge1xyXG4gICAgICAgIGhlYWRpbmc6IGBNb250c2VycmF0LCAke2Jhc2UuZm9udHM/LmhlYWRpbmd9YCxcclxuICAgICAgICBib2R5OiBgSW50ZXIsICR7YmFzZS5mb250cz8uYm9keX1gLFxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBCdXR0b246IHtcclxuICAgICAgICAgICAgdmFyaWFudHM6IHtcclxuICAgICAgICAgICAgICAgIHByaW1hcnk6IChwcm9wcykgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICByb3VuZGVkOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uYnJhbmRSaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbW9kZSgnYnJhbmQuNTAwJywgJ2JyYW5kLjIwMCcpKHByb3BzKSwgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBJbnB1dDogeyAuLi5pbnB1dFNlbGVjdFN0eWxlcyB9LFxyXG4gICAgICAgIFNlbGVjdDogeyAuLi5pbnB1dFNlbGVjdFN0eWxlcyB9LFxyXG4gICAgICAgIENoZWNrYm94OiB7XHJcbiAgICAgICAgICAgIGJhc2VTdHlsZToge1xyXG4gICAgICAgICAgICAgICAgY29udHJvbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmJyYW5kUmluZyxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59LFxyXG4gICAgd2l0aERlZmF1bHRDb2xvclNjaGVtZSh7XHJcbiAgICAgICAgY29sb3JTY2hlbWU6ICdicmFuZCcsXHJcbiAgICAgICAgY29tcG9uZW50czogWydDaGVja2JveCddLFxyXG4gICAgfSksXHJcbiAgICB3aXRoRGVmYXVsdFZhcmlhbnQoe1xyXG4gICAgICAgIHZhcmlhbnQ6ICdmaWxsZWQnLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IFsnSW5wdXQnLCAnU2VsZWN0J11cclxuICAgIH0pLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7Il0sIm5hbWVzIjpbImV4dGVuZFRoZW1lIiwidGhlbWUiLCJiYXNlIiwid2l0aERlZmF1bHRDb2xvclNjaGVtZSIsIndpdGhEZWZhdWx0VmFyaWFudCIsIm1vZGUiLCJpbnB1dFNlbGVjdFN0eWxlcyIsInZhcmlhbnRzIiwiZmlsbGVkIiwiZmllbGQiLCJfZm9jdXMiLCJib3JkZXJDb2xvciIsInNpemVzIiwibWQiLCJib3JkZXJSYWRpdXMiLCJicmFuZFJpbmciLCJyaW5nIiwicmluZ0NvbG9yIiwiY29sb3JzIiwiYnJhbmQiLCJmb250cyIsImhlYWRpbmciLCJib2R5IiwiY29tcG9uZW50cyIsIkJ1dHRvbiIsInByaW1hcnkiLCJwcm9wcyIsInJvdW5kZWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJJbnB1dCIsIlNlbGVjdCIsIkNoZWNrYm94IiwiYmFzZVN0eWxlIiwiY29udHJvbCIsImNvbG9yU2NoZW1lIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=
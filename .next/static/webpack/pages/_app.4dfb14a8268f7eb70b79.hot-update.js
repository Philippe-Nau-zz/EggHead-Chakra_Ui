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
        primary: {
          rounded: 'none'
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40ZGZiMTRhODI2OGY3ZWI3MGI3OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUssaUJBQWlCLEdBQUc7QUFDdEJDLEVBQUFBLFFBQVEsRUFBRTtBQUNOQyxJQUFBQSxNQUFNLEVBQUU7QUFDSkMsTUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFFBQUFBLE1BQU0sRUFBRTtBQUNKQyxVQUFBQSxXQUFXLEVBQUU7QUFEVDtBQURMO0FBREg7QUFERixHQURZO0FBVXRCQyxFQUFBQSxLQUFLLEVBQUU7QUFDSEMsSUFBQUEsRUFBRSxFQUFFO0FBQ0FKLE1BQUFBLEtBQUssRUFBRTtBQUNISyxRQUFBQSxZQUFZLEVBQUU7QUFEWDtBQURQO0FBREQ7QUFWZSxDQUExQjtBQW1CQSxNQUFNQyxTQUFTLEdBQUc7QUFDZEwsRUFBQUEsTUFBTSxFQUFFO0FBQ0pNLElBQUFBLElBQUksRUFBRSxDQURGO0FBRUpDLElBQUFBLFNBQVMsRUFBRTtBQUZQO0FBRE0sQ0FBbEI7QUFPQSxNQUFNZixLQUFLLEdBQUdELDZEQUFXLENBQUM7QUFDdEJpQixFQUFBQSxNQUFNLEVBQUU7QUFDSkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0gsVUFBSSxTQUREO0FBRUgsV0FBSyxTQUZGO0FBR0gsV0FBSyxTQUhGO0FBSUgsV0FBSyxTQUpGO0FBS0gsV0FBSyxTQUxGO0FBTUgsV0FBSyxTQU5GO0FBT0gsV0FBSyxTQVBGO0FBUUgsV0FBSyxTQVJGO0FBU0gsV0FBSyxTQVRGO0FBVUgsV0FBSztBQVZGO0FBREgsR0FEYztBQWV0QkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0hDLElBQUFBLE9BQU8sRUFBRyxlQUFELGVBQWVsQix5REFBZixnREFBZSxZQUFZa0IsT0FBUSxFQUR6QztBQUVIQyxJQUFBQSxJQUFJLEVBQUcsVUFBRCxnQkFBVW5CLHlEQUFWLGlEQUFVLGFBQVltQixJQUFLO0FBRjlCLEdBZmU7QUFtQnRCQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsTUFBTSxFQUFFO0FBQ0pqQixNQUFBQSxRQUFRLEVBQUU7QUFDTmtCLFFBQUFBLE9BQU8sRUFBRTtBQUNMQyxVQUFBQSxPQUFPLEVBQUU7QUFESjtBQURIO0FBRE4sS0FEQTtBQVFSQyxJQUFBQSxLQUFLLG9CQUFPckIsaUJBQVAsQ0FSRztBQVNSc0IsSUFBQUEsTUFBTSxvQkFBT3RCLGlCQUFQLENBVEU7QUFVUnVCLElBQUFBLFFBQVEsRUFBRTtBQUNOQyxNQUFBQSxTQUFTLEVBQUU7QUFDUEMsUUFBQUEsT0FBTztBQUNIakIsVUFBQUEsWUFBWSxFQUFFO0FBRFgsV0FFQUMsU0FGQTtBQURBO0FBREw7QUFWRjtBQW5CVSxDQUFELEVBdUNyQlgsd0VBQXNCLENBQUM7QUFDbkI0QixFQUFBQSxXQUFXLEVBQUUsT0FETTtBQUVuQlQsRUFBQUEsVUFBVSxFQUFFLENBQUMsVUFBRDtBQUZPLENBQUQsQ0F2Q0QsRUEyQ3JCbEIsb0VBQWtCLENBQUM7QUFDZjRCLEVBQUFBLE9BQU8sRUFBRSxRQURNO0FBRWZWLEVBQUFBLFVBQVUsRUFBRSxDQUFDLE9BQUQsRUFBVSxRQUFWO0FBRkcsQ0FBRCxDQTNDRyxDQUF6QjtBQWlEQSwrREFBZXJCLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuZFRoZW1lLCB0aGVtZSBhcyBiYXNlLCB3aXRoRGVmYXVsdENvbG9yU2NoZW1lLCB3aXRoRGVmYXVsdFZhcmlhbnQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5cclxuY29uc3QgaW5wdXRTZWxlY3RTdHlsZXMgPSB7XHJcbiAgICB2YXJpYW50czoge1xyXG4gICAgICAgIGZpbGxlZDoge1xyXG4gICAgICAgICAgICBmaWVsZDoge1xyXG4gICAgICAgICAgICAgICAgX2ZvY3VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdicmFuZC41MDAnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2l6ZXM6IHtcclxuICAgICAgICBtZDoge1xyXG4gICAgICAgICAgICBmaWVsZDoge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnbm9uZScsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBicmFuZFJpbmcgPSB7XHJcbiAgICBfZm9jdXM6IHtcclxuICAgICAgICByaW5nOiAyLFxyXG4gICAgICAgIHJpbmdDb2xvcjogJ2JyYW5kLjUwMCcsXHJcbiAgICB9LFxyXG59O1xyXG5cclxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XHJcbiAgICBjb2xvcnM6IHtcclxuICAgICAgICBicmFuZDoge1xyXG4gICAgICAgICAgICA1MDogJyNmNWZlZTUnLFxyXG4gICAgICAgICAgICAxMDA6ICcjZTFmYmIyJyxcclxuICAgICAgICAgICAgMjAwOiAnI2NkZjc4MScsXHJcbiAgICAgICAgICAgIDMwMDogJyNiOGVlNTYnLFxyXG4gICAgICAgICAgICA0MDA6ICcjYTJlMDMyJyxcclxuICAgICAgICAgICAgNTAwOiAnIzhhYzkxOScsXHJcbiAgICAgICAgICAgIDYwMDogJyM3MWFiMDknLFxyXG4gICAgICAgICAgICA3MDA6ICcjNTc4NjAyJyxcclxuICAgICAgICAgICAgODAwOiAnIzNjNWUwMCcsXHJcbiAgICAgICAgICAgIDkwMDogJyMyMDMzMDAnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZm9udHM6IHtcclxuICAgICAgICBoZWFkaW5nOiBgTW9udHNlcnJhdCwgJHtiYXNlLmZvbnRzPy5oZWFkaW5nfWAsXHJcbiAgICAgICAgYm9keTogYEludGVyLCAke2Jhc2UuZm9udHM/LmJvZHl9YCxcclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgQnV0dG9uOiB7XHJcbiAgICAgICAgICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91bmRlZDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBJbnB1dDogeyAuLi5pbnB1dFNlbGVjdFN0eWxlcyB9LFxyXG4gICAgICAgIFNlbGVjdDogeyAuLi5pbnB1dFNlbGVjdFN0eWxlcyB9LFxyXG4gICAgICAgIENoZWNrYm94OiB7XHJcbiAgICAgICAgICAgIGJhc2VTdHlsZToge1xyXG4gICAgICAgICAgICAgICAgY29udHJvbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmJyYW5kUmluZyxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59LFxyXG4gICAgd2l0aERlZmF1bHRDb2xvclNjaGVtZSh7XHJcbiAgICAgICAgY29sb3JTY2hlbWU6ICdicmFuZCcsXHJcbiAgICAgICAgY29tcG9uZW50czogWydDaGVja2JveCddLFxyXG4gICAgfSksXHJcbiAgICB3aXRoRGVmYXVsdFZhcmlhbnQoe1xyXG4gICAgICAgIHZhcmlhbnQ6ICdmaWxsZWQnLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IFsnSW5wdXQnLCAnU2VsZWN0J11cclxuICAgIH0pLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7Il0sIm5hbWVzIjpbImV4dGVuZFRoZW1lIiwidGhlbWUiLCJiYXNlIiwid2l0aERlZmF1bHRDb2xvclNjaGVtZSIsIndpdGhEZWZhdWx0VmFyaWFudCIsImlucHV0U2VsZWN0U3R5bGVzIiwidmFyaWFudHMiLCJmaWxsZWQiLCJmaWVsZCIsIl9mb2N1cyIsImJvcmRlckNvbG9yIiwic2l6ZXMiLCJtZCIsImJvcmRlclJhZGl1cyIsImJyYW5kUmluZyIsInJpbmciLCJyaW5nQ29sb3IiLCJjb2xvcnMiLCJicmFuZCIsImZvbnRzIiwiaGVhZGluZyIsImJvZHkiLCJjb21wb25lbnRzIiwiQnV0dG9uIiwicHJpbWFyeSIsInJvdW5kZWQiLCJJbnB1dCIsIlNlbGVjdCIsIkNoZWNrYm94IiwiYmFzZVN0eWxlIiwiY29udHJvbCIsImNvbG9yU2NoZW1lIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=
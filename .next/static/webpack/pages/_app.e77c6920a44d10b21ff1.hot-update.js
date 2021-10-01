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
      inputSelectStyles
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lNzdjNjkyMGE0NGQxMGIyMWZmMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNSyxpQkFBaUIsR0FBRztBQUN0QkMsRUFBQUEsUUFBUSxFQUFFO0FBQ05DLElBQUFBLE1BQU0sRUFBRTtBQUNKQyxNQUFBQSxLQUFLLEVBQUU7QUFDSEMsUUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFVBQUFBLFdBQVcsRUFBRTtBQURUO0FBREw7QUFESDtBQURGLEdBRFk7QUFVdEJDLEVBQUFBLEtBQUssRUFBRTtBQUNIQyxJQUFBQSxFQUFFLEVBQUU7QUFDQUosTUFBQUEsS0FBSyxFQUFFO0FBQ0hLLFFBQUFBLFlBQVksRUFBRTtBQURYO0FBRFA7QUFERDtBQVZlLENBQTFCO0FBbUJBLE1BQU1aLEtBQUssR0FBR0QsNkRBQVcsQ0FBQztBQUN0QmMsRUFBQUEsTUFBTSxFQUFFO0FBQ0pDLElBQUFBLEtBQUssRUFBRTtBQUNILFVBQUksU0FERDtBQUVILFdBQUssU0FGRjtBQUdILFdBQUssU0FIRjtBQUlILFdBQUssU0FKRjtBQUtILFdBQUssU0FMRjtBQU1ILFdBQUssU0FORjtBQU9ILFdBQUssU0FQRjtBQVFILFdBQUssU0FSRjtBQVNILFdBQUssU0FURjtBQVVILFdBQUs7QUFWRjtBQURILEdBRGM7QUFldEJDLEVBQUFBLEtBQUssRUFBRTtBQUNIQyxJQUFBQSxPQUFPLEVBQUcsZUFBRCxlQUFlZix5REFBZixnREFBZSxZQUFZZSxPQUFRLEVBRHpDO0FBRUhDLElBQUFBLElBQUksRUFBRyxVQUFELGdCQUFVaEIseURBQVYsaURBQVUsYUFBWWdCLElBQUs7QUFGOUIsR0FmZTtBQW1CdEJDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUU7QUFBQ2YsTUFBQUE7QUFBRDtBQURDO0FBbkJVLENBQUQsRUF1QnJCRix3RUFBc0IsQ0FBQztBQUNuQmtCLEVBQUFBLFdBQVcsRUFBRSxPQURNO0FBRW5CRixFQUFBQSxVQUFVLEVBQUUsQ0FBQyxVQUFEO0FBRk8sQ0FBRCxDQXZCRCxFQTJCckJmLG9FQUFrQixDQUFDO0FBQ2ZrQixFQUFBQSxPQUFPLEVBQUUsUUFETTtBQUVmSCxFQUFBQSxVQUFVLEVBQUUsQ0FBQyxPQUFELEVBQVUsUUFBVjtBQUZHLENBQUQsQ0EzQkcsQ0FBekI7QUFpQ0EsK0RBQWVsQixLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy90aGVtZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleHRlbmRUaGVtZSwgdGhlbWUgYXMgYmFzZSwgd2l0aERlZmF1bHRDb2xvclNjaGVtZSwgd2l0aERlZmF1bHRWYXJpYW50IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuXHJcbmNvbnN0IGlucHV0U2VsZWN0U3R5bGVzID0ge1xyXG4gICAgdmFyaWFudHM6IHtcclxuICAgICAgICBmaWxsZWQ6IHtcclxuICAgICAgICAgICAgZmllbGQ6IHtcclxuICAgICAgICAgICAgICAgIF9mb2N1czoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnYnJhbmQuNTAwJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNpemVzOiB7XHJcbiAgICAgICAgbWQ6IHtcclxuICAgICAgICAgICAgZmllbGQ6IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJ25vbmUnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XHJcbiAgICBjb2xvcnM6IHtcclxuICAgICAgICBicmFuZDoge1xyXG4gICAgICAgICAgICA1MDogJyNmNWZlZTUnLFxyXG4gICAgICAgICAgICAxMDA6ICcjZTFmYmIyJyxcclxuICAgICAgICAgICAgMjAwOiAnI2NkZjc4MScsXHJcbiAgICAgICAgICAgIDMwMDogJyNiOGVlNTYnLFxyXG4gICAgICAgICAgICA0MDA6ICcjYTJlMDMyJyxcclxuICAgICAgICAgICAgNTAwOiAnIzhhYzkxOScsXHJcbiAgICAgICAgICAgIDYwMDogJyM3MWFiMDknLFxyXG4gICAgICAgICAgICA3MDA6ICcjNTc4NjAyJyxcclxuICAgICAgICAgICAgODAwOiAnIzNjNWUwMCcsXHJcbiAgICAgICAgICAgIDkwMDogJyMyMDMzMDAnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZm9udHM6IHtcclxuICAgICAgICBoZWFkaW5nOiBgTW9udHNlcnJhdCwgJHtiYXNlLmZvbnRzPy5oZWFkaW5nfWAsXHJcbiAgICAgICAgYm9keTogYEludGVyLCAke2Jhc2UuZm9udHM/LmJvZHl9YCxcclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgSW5wdXQ6IHtpbnB1dFNlbGVjdFN0eWxlc30sXHJcbiAgICB9LFxyXG59LFxyXG4gICAgd2l0aERlZmF1bHRDb2xvclNjaGVtZSh7XHJcbiAgICAgICAgY29sb3JTY2hlbWU6ICdicmFuZCcsXHJcbiAgICAgICAgY29tcG9uZW50czogWydDaGVja2JveCddLFxyXG4gICAgfSksXHJcbiAgICB3aXRoRGVmYXVsdFZhcmlhbnQoe1xyXG4gICAgICAgIHZhcmlhbnQ6ICdmaWxsZWQnLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IFsnSW5wdXQnLCAnU2VsZWN0J11cclxuICAgIH0pLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7Il0sIm5hbWVzIjpbImV4dGVuZFRoZW1lIiwidGhlbWUiLCJiYXNlIiwid2l0aERlZmF1bHRDb2xvclNjaGVtZSIsIndpdGhEZWZhdWx0VmFyaWFudCIsImlucHV0U2VsZWN0U3R5bGVzIiwidmFyaWFudHMiLCJmaWxsZWQiLCJmaWVsZCIsIl9mb2N1cyIsImJvcmRlckNvbG9yIiwic2l6ZXMiLCJtZCIsImJvcmRlclJhZGl1cyIsImNvbG9ycyIsImJyYW5kIiwiZm9udHMiLCJoZWFkaW5nIiwiYm9keSIsImNvbXBvbmVudHMiLCJJbnB1dCIsImNvbG9yU2NoZW1lIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=
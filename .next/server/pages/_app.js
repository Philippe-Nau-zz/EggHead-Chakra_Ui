(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/theme */ "./src/theme/index.ts");
/* harmony import */ var _src_theme_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/theme/styles.css */ "./src/theme/styles.css");
/* harmony import */ var _src_theme_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_theme_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\PremierSoft\\Desktop\\chackra\\chackra\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const App = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ChakraProvider, {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/theme/index.ts":
/*!****************************!*\
  !*** ./src/theme/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/theme-tools */ "@chakra-ui/theme-tools");
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__);
var _base$fonts, _base$fonts2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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
    Button: {
      variants: {
        primary: props => _objectSpread(_objectSpread({
          rounded: 'none'
        }, brandRing), {}, {
          color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)('white', 'gray.800')(props),
          backgroundColor: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)('brand.500', 'brand.200')(props),
          _hover: {
            backgroundColor: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)('brand.600', 'brand.300')(props)
          },
          _active: {
            backgroundColor: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)('brand.700', 'brand.400')(props)
          }
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
}, (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.withDefaultColorScheme)({
  colorScheme: 'brand',
  components: ['Checkbox']
}), (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.withDefaultVariant)({
  variant: 'filled',
  components: ['Input', 'Select']
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

/***/ }),

/***/ "./src/theme/styles.css":
/*!******************************!*\
  !*** ./src/theme/styles.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@chakra-ui/theme-tools":
/*!*****************************************!*\
  !*** external "@chakra-ui/theme-tools" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksRUFBRTtBQURYLFdBRUFDLFNBRkE7QUFEQTtBQURMO0FBckJGO0FBbkJVLENBQUQsRUFrRHJCWix3RUFBc0IsQ0FBQztBQUNuQmtDLEVBQUFBLFdBQVcsRUFBRSxPQURNO0FBRW5CZCxFQUFBQSxVQUFVLEVBQUUsQ0FBQyxVQUFEO0FBRk8sQ0FBRCxDQWxERCxFQXNEckJuQixvRUFBa0IsQ0FBQztBQUNma0MsRUFBQUEsT0FBTyxFQUFFLFFBRE07QUFFZmYsRUFBQUEsVUFBVSxFQUFFLENBQUMsT0FBRCxFQUFVLFFBQVY7QUFGRyxDQUFELENBdERHLENBQXpCO0FBNERBLGlFQUFlMUIsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUZBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhY2tyYS8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL2NoYWNrcmEvLi9zcmMvdGhlbWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY2hhY2tyYS9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly9jaGFja3JhL2V4dGVybmFsIFwiQGNoYWtyYS11aS90aGVtZS10b29sc1wiIiwid2VicGFjazovL2NoYWNrcmEvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5cclxuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zcmMvdGhlbWVcIjtcclxuaW1wb3J0ICcuLi9zcmMvdGhlbWUvc3R5bGVzLmNzcydcclxuXHJcbmNvbnN0IEFwcCA9ICh7Q29tcG9uZW50LCBwYWdlUHJvcHN9OiBBcHBQcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyIsImltcG9ydCB7IGV4dGVuZFRoZW1lLFxyXG4gICAgIHRoZW1lIGFzIGJhc2UsXHJcbiAgICAgd2l0aERlZmF1bHRDb2xvclNjaGVtZSxcclxuICAgICB3aXRoRGVmYXVsdFZhcmlhbnRcclxuIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuXHJcbiBpbXBvcnQgeyBtb2RlIH0gZnJvbSBcIkBjaGFrcmEtdWkvdGhlbWUtdG9vbHNcIlxyXG5cclxuY29uc3QgaW5wdXRTZWxlY3RTdHlsZXMgPSB7XHJcbiAgICB2YXJpYW50czoge1xyXG4gICAgICAgIGZpbGxlZDoge1xyXG4gICAgICAgICAgICBmaWVsZDoge1xyXG4gICAgICAgICAgICAgICAgX2ZvY3VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdicmFuZC41MDAnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2l6ZXM6IHtcclxuICAgICAgICBtZDoge1xyXG4gICAgICAgICAgICBmaWVsZDoge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnbm9uZScsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBicmFuZFJpbmcgPSB7XHJcbiAgICBfZm9jdXM6IHtcclxuICAgICAgICByaW5nOiAyLFxyXG4gICAgICAgIHJpbmdDb2xvcjogJ2JyYW5kLjUwMCcsXHJcbiAgICB9LFxyXG59O1xyXG5cclxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XHJcbiAgICBjb2xvcnM6IHtcclxuICAgICAgICBicmFuZDoge1xyXG4gICAgICAgICAgICA1MDogJyNmNWZlZTUnLFxyXG4gICAgICAgICAgICAxMDA6ICcjZTFmYmIyJyxcclxuICAgICAgICAgICAgMjAwOiAnI2NkZjc4MScsXHJcbiAgICAgICAgICAgIDMwMDogJyNiOGVlNTYnLFxyXG4gICAgICAgICAgICA0MDA6ICcjYTJlMDMyJyxcclxuICAgICAgICAgICAgNTAwOiAnIzhhYzkxOScsXHJcbiAgICAgICAgICAgIDYwMDogJyM3MWFiMDknLFxyXG4gICAgICAgICAgICA3MDA6ICcjNTc4NjAyJyxcclxuICAgICAgICAgICAgODAwOiAnIzNjNWUwMCcsXHJcbiAgICAgICAgICAgIDkwMDogJyMyMDMzMDAnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZm9udHM6IHtcclxuICAgICAgICBoZWFkaW5nOiBgTW9udHNlcnJhdCwgJHtiYXNlLmZvbnRzPy5oZWFkaW5nfWAsXHJcbiAgICAgICAgYm9keTogYEludGVyLCAke2Jhc2UuZm9udHM/LmJvZHl9YCxcclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgQnV0dG9uOiB7XHJcbiAgICAgICAgICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBwcmltYXJ5OiAocHJvcHMpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91bmRlZDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmJyYW5kUmluZyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogbW9kZSgnd2hpdGUnLCAnZ3JheS44MDAnKShwcm9wcyksXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBtb2RlKCdicmFuZC41MDAnLCAnYnJhbmQuMjAwJykocHJvcHMpLCBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgX2hvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbW9kZSgnYnJhbmQuNjAwJywgJ2JyYW5kLjMwMCcpKHByb3BzKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgX2FjdGl2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG1vZGUoJ2JyYW5kLjcwMCcsICdicmFuZC40MDAnKShwcm9wcyksIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIElucHV0OiB7IC4uLmlucHV0U2VsZWN0U3R5bGVzIH0sXHJcbiAgICAgICAgU2VsZWN0OiB7IC4uLmlucHV0U2VsZWN0U3R5bGVzIH0sXHJcbiAgICAgICAgQ2hlY2tib3g6IHtcclxuICAgICAgICAgICAgYmFzZVN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBjb250cm9sOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uYnJhbmRSaW5nLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn0sXHJcbiAgICB3aXRoRGVmYXVsdENvbG9yU2NoZW1lKHtcclxuICAgICAgICBjb2xvclNjaGVtZTogJ2JyYW5kJyxcclxuICAgICAgICBjb21wb25lbnRzOiBbJ0NoZWNrYm94J10sXHJcbiAgICB9KSxcclxuICAgIHdpdGhEZWZhdWx0VmFyaWFudCh7XHJcbiAgICAgICAgdmFyaWFudDogJ2ZpbGxlZCcsXHJcbiAgICAgICAgY29tcG9uZW50czogWydJbnB1dCcsICdTZWxlY3QnXVxyXG4gICAgfSksXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvdGhlbWUtdG9vbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJDaGFrcmFQcm92aWRlciIsInRoZW1lIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZXh0ZW5kVGhlbWUiLCJiYXNlIiwid2l0aERlZmF1bHRDb2xvclNjaGVtZSIsIndpdGhEZWZhdWx0VmFyaWFudCIsIm1vZGUiLCJpbnB1dFNlbGVjdFN0eWxlcyIsInZhcmlhbnRzIiwiZmlsbGVkIiwiZmllbGQiLCJfZm9jdXMiLCJib3JkZXJDb2xvciIsInNpemVzIiwibWQiLCJib3JkZXJSYWRpdXMiLCJicmFuZFJpbmciLCJyaW5nIiwicmluZ0NvbG9yIiwiY29sb3JzIiwiYnJhbmQiLCJmb250cyIsImhlYWRpbmciLCJib2R5IiwiY29tcG9uZW50cyIsIkJ1dHRvbiIsInByaW1hcnkiLCJwcm9wcyIsInJvdW5kZWQiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsIl9ob3ZlciIsIl9hY3RpdmUiLCJJbnB1dCIsIlNlbGVjdCIsIkNoZWNrYm94IiwiYmFzZVN0eWxlIiwiY29udHJvbCIsImNvbG9yU2NoZW1lIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=
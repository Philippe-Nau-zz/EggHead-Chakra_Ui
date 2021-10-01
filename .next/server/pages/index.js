"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/layout */ "@chakra-ui/layout");
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_sections_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/sections/cart */ "./src/sections/cart.tsx");
/* harmony import */ var _src_sections_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/sections/details */ "./src/sections/details.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\PremierSoft\\Desktop\\chackra\\chackra\\pages\\index.tsx";





const HomePage = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_0__.Container, {
  maxW: "container.xl",
  p: 0,
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_0__.Flex, {
    h: {
      base: 'auto',
      md: '100vh'
    },
    py: [0, 10, 20],
    direction: {
      base: 'column-reverse',
      md: 'row'
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_src_sections_details__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_src_sections_cart__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, undefined);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "./src/sections/cart.tsx":
/*!*******************************!*\
  !*** ./src/sections/cart.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\PremierSoft\\Desktop\\chackra\\chackra\\src\\sections\\cart.tsx";



const Cart = () => {
  const {
    toggleColorMode
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorMode)();
  const bgColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("gray.50", "whiteAlpha.50");
  const secondaryColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("gray.600", "gray.400");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.VStack, {
    w: "full",
    h: "full",
    p: 10,
    spacing: 6,
    alignItems: "flex-start",
    backgroundColor: bgColor,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.VStack, {
      alignItems: "flex-start",
      spacing: 3,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Heading, {
        size: "2xl",
        children: "Your cart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
        children: ["If the price is too hard on your eyes,", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Button, {
          onClick: toggleColorMode,
          variant: "link",
          colorScheme: "black",
          children: "try changing the name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.HStack, {
      spacing: 6,
      alignItems: "Center",
      w: "full",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.AspectRatio, {
        ratio: 1,
        w: 24,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Image, {
          src: "/images/skateboard.jpg",
          alt: "Skateboard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Stack, {
        spacing: 0,
        w: "full",
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.VStack, {
          w: "full",
          spacing: 0,
          alignItems: "flex-start",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Heading, {
            size: "md",
            children: "Penny board"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
            color: secondaryColor,
            children: "PNYCOMP27541"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Heading, {
          size: "sm",
          textAlign: "end",
          children: "$119.00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.VStack, {
      spacing: 4,
      alignItems: "stretch",
      w: "full",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.HStack, {
        justifyContent: "space-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
          color: secondaryColor,
          children: "Subtotal"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Heading, {
          size: "sm",
          children: "$119.00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.HStack, {
        justifyContent: "space-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
          color: secondaryColor,
          children: "Shipping"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Heading, {
          size: "sm",
          children: "$19.99"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.HStack, {
        justifyContent: "space-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
          color: secondaryColor,
          children: "Taxes (estimated)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Heading, {
          size: "sm",
          children: "$23.80"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Divider, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.HStack, {
        justifyContent: "space-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
          color: secondaryColor,
          children: "Total"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Heading, {
          size: "lg",
          children: "$162.79"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);

/***/ }),

/***/ "./src/sections/details.tsx":
/*!**********************************!*\
  !*** ./src/sections/details.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\PremierSoft\\Desktop\\chackra\\chackra\\src\\sections\\details.tsx";



const Details = () => {
  const colSpan = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useBreakpointValue)({
    base: 2,
    md: 1
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.VStack, {
    w: "full",
    h: "full",
    p: 10,
    spacing: 10,
    alignItems: "flex-start",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.VStack, {
      alignItems: "flex-start",
      spacing: 3,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Heading, {
        size: "2xl",
        children: "Your details"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
        children: "If you already have an account, click here to log in."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.SimpleGrid, {
      columns: 2,
      columnGap: 3,
      rowGap: 6,
      w: "full",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.GridItem, {
        colSpan: colSpan,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel, {
            children: "First Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Input, {
            placeholder: "John"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.GridItem, {
        colSpan: colSpan,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel, {
            children: "Last Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Input, {
            placeholder: "Doe"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.GridItem, {
        colSpan: 2,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel, {
            children: "Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Input, {
            placeholder: "Bivd. Broken Dreams 21"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.GridItem, {
        colSpan: colSpan,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel, {
            children: "City"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Input, {
            placeholder: "San Francisco"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.GridItem, {
        colSpan: colSpan,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel, {
            children: "Country"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Select, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
              value: "usa",
              children: "United States of America"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 24
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
              value: "uae",
              children: "United Arab Emirates"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 24
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
              value: "nmk",
              children: "North Macedonia"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 24
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
              value: "de",
              children: "Germany"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 24
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 20
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.GridItem, {
        colSpan: 2,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Checkbox, {
            defaultChecked: true,
            children: "Ship to the billing address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.GridItem, {
        colSpan: 2,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Button, {
          variant: "primary",
          size: "lg",
          w: "full",
          children: "Place Order"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Details);

/***/ }),

/***/ "@chakra-ui/layout":
/*!************************************!*\
  !*** external "@chakra-ui/layout" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/layout");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTlDSixlQW1ESSw4REFBQyxzREFBRDtBQUFVLGVBQU8sRUFBRSxDQUFuQjtBQUFBLCtCQUNJLDhEQUFDLG9EQUFEO0FBQVEsaUJBQU8sRUFBQyxTQUFoQjtBQUEwQixjQUFJLEVBQUMsSUFBL0I7QUFBb0MsV0FBQyxFQUFDLE1BQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBbUVILENBckVEOztBQXVFQSxpRUFBZTFCLE9BQWY7Ozs7Ozs7Ozs7QUNyRkE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhY2tyYS8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9jaGFja3JhLy4vc3JjL3NlY3Rpb25zL2NhcnQudHN4Iiwid2VicGFjazovL2NoYWNrcmEvLi9zcmMvc2VjdGlvbnMvZGV0YWlscy50c3giLCJ3ZWJwYWNrOi8vY2hhY2tyYS9leHRlcm5hbCBcIkBjaGFrcmEtdWkvbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vY2hhY2tyYS9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly9jaGFja3JhL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGFpbmVyLCBGbGV4LCBWU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9sYXlvdXRcIlxyXG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vc3JjL3NlY3Rpb25zL2NhcnRcIlxyXG5pbXBvcnQgRGV0YWlscyBmcm9tIFwiLi4vc3JjL3NlY3Rpb25zL2RldGFpbHNcIlxyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PlxyXG4gIDxDb250YWluZXIgbWF4Vz1cImNvbnRhaW5lci54bFwiIHA9ezB9PlxyXG4gICAgPEZsZXhcclxuICAgICAgaD17eyBiYXNlOiAnYXV0bycsIG1kOiAnMTAwdmgnIH19XHJcbiAgICAgIHB5PXtbMCwgMTAsIDIwXX1cclxuICAgICAgZGlyZWN0aW9uPXt7IGJhc2U6ICdjb2x1bW4tcmV2ZXJzZScsIG1kOiAncm93JyB9fVxyXG4gICAgPlxyXG4gICAgICA8RGV0YWlscyAvPlxyXG4gICAgICA8Q2FydCAvPlxyXG4gICAgPC9GbGV4PlxyXG4gIDwvQ29udGFpbmVyPlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiLCJpbXBvcnQge1xyXG4gICAgVlN0YWNrLFxyXG4gICAgSFN0YWNrLFxyXG4gICAgSGVhZGluZyxcclxuICAgIFRleHQsXHJcbiAgICBBc3BlY3RSYXRpbyxcclxuICAgIFN0YWNrLFxyXG4gICAgRGl2aWRlcixcclxuICAgIEJ1dHRvbixcclxuICAgIEltYWdlLFxyXG4gICAgdXNlQ29sb3JNb2RlLFxyXG4gICAgdXNlQ29sb3JNb2RlVmFsdWUsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuY29uc3QgQ2FydCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgdG9nZ2xlQ29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcclxuICAgIGNvbnN0IGJnQ29sb3IgPSB1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuNTBcIiwgXCJ3aGl0ZUFscGhhLjUwXCIpO1xyXG4gICAgY29uc3Qgc2Vjb25kYXJ5Q29sb3IgPSB1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuNjAwXCIsIFwiZ3JheS40MDBcIik7XHJcblxyXG4gICAgcmV0dXJuIDxWU3RhY2sgdz1cImZ1bGxcIlxyXG4gICAgICAgIGg9XCJmdWxsXCJcclxuICAgICAgICBwPXsxMH1cclxuICAgICAgICBzcGFjaW5nPXs2fVxyXG4gICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e2JnQ29sb3J9XHJcbiAgICA+XHJcbiAgICAgICAgPFZTdGFjayBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICA8SGVhZGluZyBzaXplPVwiMnhsXCI+WW91ciBjYXJ0PC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8VGV4dD5JZiB0aGUgcHJpY2UgaXMgdG9vIGhhcmQgb24geW91ciBleWVzLHsnICd9XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eyB0b2dnbGVDb2xvck1vZGUgfSB2YXJpYW50PVwibGlua1wiIGNvbG9yU2NoZW1lPVwiYmxhY2tcIj50cnkgY2hhbmdpbmcgdGhlIG5hbWU8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvVlN0YWNrPlxyXG4gICAgICAgIDxIU3RhY2sgc3BhY2luZz17Nn0gYWxpZ25JdGVtcz1cIkNlbnRlclwiIHc9XCJmdWxsXCI+XHJcbiAgICAgICAgICAgIDxBc3BlY3RSYXRpbyByYXRpbz17MX0gdz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvc2thdGVib2FyZC5qcGdcIiBhbHQ9XCJTa2F0ZWJvYXJkXCIgLz5cclxuICAgICAgICAgICAgPC9Bc3BlY3RSYXRpbz5cclxuICAgICAgICAgICAgPFN0YWNrXHJcbiAgICAgICAgICAgICAgICBzcGFjaW5nPXswfVxyXG4gICAgICAgICAgICAgICAgdz1cImZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPXtcInJvd1wifVxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VlN0YWNrIHc9XCJmdWxsXCIgc3BhY2luZz17MH0gYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyBzaXplPVwibWRcIj5QZW5ueSBib2FyZDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj0geyBzZWNvbmRhcnlDb2xvciB9PlBOWUNPTVAyNzU0MTwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvVlN0YWNrPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cInNtXCIgdGV4dEFsaWduPVwiZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJDExOS4wMFxyXG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgIDwvSFN0YWNrPlxyXG4gICAgICAgIDxWU3RhY2sgc3BhY2luZz17NH0gYWxpZ25JdGVtcz1cInN0cmV0Y2hcIiB3PVwiZnVsbFwiPlxyXG4gICAgICAgICAgICA8SFN0YWNrIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgY29sb3I9eyBzZWNvbmRhcnlDb2xvciB9PlN1YnRvdGFsPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cInNtXCI+JDExOS4wMDwvSGVhZGluZz5cclxuICAgICAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgICAgICAgIDxIU3RhY2sganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj17IHNlY29uZGFyeUNvbG9yIH0+U2hpcHBpbmc8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyBzaXplPVwic21cIj4kMTkuOTk8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDwvSFN0YWNrPlxyXG4gICAgICAgICAgICA8SFN0YWNrIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgY29sb3I9eyBzZWNvbmRhcnlDb2xvciB9PlRheGVzIChlc3RpbWF0ZWQpPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cInNtXCI+JDIzLjgwPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8L0hTdGFjaz5cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgPEhTdGFjayBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPXsgc2Vjb25kYXJ5Q29sb3IgfT5Ub3RhbDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJsZ1wiPiQxNjIuNzk8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDwvSFN0YWNrPlxyXG4gICAgICAgIDwvVlN0YWNrPlxyXG4gICAgPC9WU3RhY2s+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnQ7IiwiaW1wb3J0IHsgRm9ybUNvbnRyb2wsXHJcbiAgICAgRm9ybUxhYmVsLFxyXG4gICAgIElucHV0LFxyXG4gICAgIFNlbGVjdCxcclxuICAgICBDaGVja2JveCxcclxuICAgICBCdXR0b24sXHJcbiAgICAgVlN0YWNrLCBcclxuICAgICBIZWFkaW5nLFxyXG4gICAgIFRleHQsXHJcbiAgICAgU2ltcGxlR3JpZCxcclxuICAgICBHcmlkSXRlbSxcclxuICAgICB1c2VCcmVha3BvaW50VmFsdWUsXHJcbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG5jb25zdCBEZXRhaWxzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgIGNvbFNwYW4gPSB1c2VCcmVha3BvaW50VmFsdWUoe2Jhc2U6IDIsIG1kOiAxfSk7XHJcbiAgICByZXR1cm4gPFZTdGFjayB3PVwiZnVsbFwiXHJcbiAgICAgICAgaD1cImZ1bGxcIlxyXG4gICAgICAgIHA9ezEwfVxyXG4gICAgICAgIHNwYWNpbmc9ezEwfVxyXG4gICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcclxuICAgID5cclxuICAgICAgICA8VlN0YWNrIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCIgc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCIyeGxcIj5Zb3VyIGRldGFpbHM8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxUZXh0PklmIHlvdSBhbHJlYWR5IGhhdmUgYW4gYWNjb3VudCwgY2xpY2sgaGVyZSB0byBsb2cgaW4uPC9UZXh0PlxyXG4gICAgICAgIDwvVlN0YWNrPlxyXG4gICAgICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9ezJ9IGNvbHVtbkdhcD17M30gcm93R2FwPXs2fSB3PVwiZnVsbFwiPlxyXG4gICAgICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17Y29sU3Bhbn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRmlyc3QgTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIkpvaG5cIi8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17Y29sU3Bhbn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTGFzdCBOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiRG9lXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgPEdyaWRJdGVtIGNvbFNwYW49ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZHJlc3NcclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJCaXZkLiBCcm9rZW4gRHJlYW1zIDIxXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgPEdyaWRJdGVtIGNvbFNwYW49e2NvbFNwYW59PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENpdHlcclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJTYW4gRnJhbmNpc2NvXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgPEdyaWRJdGVtIGNvbFNwYW49e2NvbFNwYW59PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvdW50cnlcclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgIDxTZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInVzYVwiPlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ1YWVcIj5Vbml0ZWQgQXJhYiBFbWlyYXRlczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJubWtcIj5Ob3J0aCBNYWNlZG9uaWE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVcIj5HZXJtYW55PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXsyfT5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggZGVmYXVsdENoZWNrZWQ+U2hpcCB0byB0aGUgYmlsbGluZyBhZGRyZXNzPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXsyfT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0ncHJpbWFyeScgc2l6ZT1cImxnXCIgdz1cImZ1bGxcIj5QbGFjZSBPcmRlcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgIDwvU2ltcGxlR3JpZD5cclxuICAgIDwvVlN0YWNrPlxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsczsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2xheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwiRmxleCIsIkNhcnQiLCJEZXRhaWxzIiwiSG9tZVBhZ2UiLCJiYXNlIiwibWQiLCJWU3RhY2siLCJIU3RhY2siLCJIZWFkaW5nIiwiVGV4dCIsIkFzcGVjdFJhdGlvIiwiU3RhY2siLCJEaXZpZGVyIiwiQnV0dG9uIiwiSW1hZ2UiLCJ1c2VDb2xvck1vZGUiLCJ1c2VDb2xvck1vZGVWYWx1ZSIsInRvZ2dsZUNvbG9yTW9kZSIsImJnQ29sb3IiLCJzZWNvbmRhcnlDb2xvciIsIkZvcm1Db250cm9sIiwiRm9ybUxhYmVsIiwiSW5wdXQiLCJTZWxlY3QiLCJDaGVja2JveCIsIlNpbXBsZUdyaWQiLCJHcmlkSXRlbSIsInVzZUJyZWFrcG9pbnRWYWx1ZSIsImNvbFNwYW4iXSwic291cmNlUm9vdCI6IiJ9
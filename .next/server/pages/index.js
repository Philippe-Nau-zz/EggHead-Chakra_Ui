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

/***/ "./src/components/cart_row.tsx":
/*!*************************************!*\
  !*** ./src/components/cart_row.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\PremierSoft\\Desktop\\chackra\\chackra\\src\\components\\cart_row.tsx";



const CartRow = ({
  textColor,
  text,
  textValue,
  size = 'sm'
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.HStack, {
    justifyContent: "space-between",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
      color: textColor,
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Heading, {
      size: size,
      children: textValue
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartRow);

/***/ }),

/***/ "./src/components/detail_input.tsx":
/*!*****************************************!*\
  !*** ./src/components/detail_input.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\PremierSoft\\Desktop\\chackra\\chackra\\src\\components\\detail_input.tsx";



const DetailInput = ({
  label,
  placeholder,
  col = 1
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.GridItem, {
    colSpan: col,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel, {
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Input, {
        placeholder: placeholder
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailInput);

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
/* harmony import */ var _components_cart_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/cart_row */ "./src/components/cart_row.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\PremierSoft\\Desktop\\chackra\\chackra\\src\\sections\\cart.tsx";




const Cart = () => {
  const {
    toggleColorMode
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorMode)();
  const bgColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("gray.50", "whiteAlpha.50");
  const secondaryColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("gray.600", "gray.400");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.VStack, {
    w: "full",
    h: "full",
    p: 10,
    spacing: 6,
    alignItems: "flex-start",
    backgroundColor: bgColor,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.VStack, {
      alignItems: "flex-start",
      spacing: 3,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Heading, {
        size: "2xl",
        children: "Your cart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
        children: ["If the price is too hard on your eyes,", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Button, {
          onClick: toggleColorMode,
          variant: "link",
          colorScheme: "black",
          children: "try changing the name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.HStack, {
      spacing: 6,
      alignItems: "Center",
      w: "full",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.AspectRatio, {
        ratio: 1,
        w: 24,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Image, {
          src: "/images/skateboard.jpg",
          alt: "Skateboard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Stack, {
        spacing: 0,
        w: "full",
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.VStack, {
          w: "full",
          spacing: 0,
          alignItems: "flex-start",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Heading, {
            size: "md",
            children: "Penny board"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
            color: secondaryColor,
            children: "PNYCOMP27541"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Heading, {
          size: "sm",
          textAlign: "end",
          children: "$119.00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.VStack, {
      spacing: 4,
      alignItems: "stretch",
      w: "full",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_cart_row__WEBPACK_IMPORTED_MODULE_1__.default, {
        textColor: secondaryColor,
        text: "Subtotal",
        textValue: "$119.00"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_cart_row__WEBPACK_IMPORTED_MODULE_1__.default, {
        textColor: secondaryColor,
        text: "Shipping",
        textValue: "$19.99"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_cart_row__WEBPACK_IMPORTED_MODULE_1__.default, {
        textColor: secondaryColor,
        text: "Taxes (estimated)",
        textValue: "$23.80"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Divider, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_cart_row__WEBPACK_IMPORTED_MODULE_1__.default, {
        textColor: secondaryColor,
        text: "Total",
        textValue: "$162.79",
        size: "md"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
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
/* harmony import */ var _components_detail_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/detail_input */ "./src/components/detail_input.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\PremierSoft\\Desktop\\chackra\\chackra\\src\\sections\\details.tsx";




const Details = () => {
  const colSpan = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useBreakpointValue)({
    base: 2,
    md: 1
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.VStack, {
    w: "full",
    h: "full",
    p: 10,
    spacing: 10,
    alignItems: "flex-start",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.VStack, {
      alignItems: "flex-start",
      spacing: 3,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Heading, {
        size: "2xl",
        children: "Your details"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
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
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.SimpleGrid, {
      columns: 2,
      columnGap: 3,
      rowGap: 6,
      w: "full",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_detail_input__WEBPACK_IMPORTED_MODULE_1__.default, {
        label: "First Name",
        placeholder: "John",
        col: colSpan
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_detail_input__WEBPACK_IMPORTED_MODULE_1__.default, {
        label: "Last Name",
        placeholder: "Doe",
        col: colSpan
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_detail_input__WEBPACK_IMPORTED_MODULE_1__.default, {
        label: "Address",
        placeholder: "Bivd. Broken Dreams 21",
        col: 2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_detail_input__WEBPACK_IMPORTED_MODULE_1__.default, {
        label: "City",
        placeholder: "San Francisco",
        col: colSpan
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.GridItem, {
        colSpan: colSpan,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel, {
            children: "Country"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Select, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
              value: "usa",
              children: "United States of America"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 24
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
              value: "uae",
              children: "United Arab Emirates"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 24
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
              value: "nmk",
              children: "North Macedonia"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 24
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
              value: "de",
              children: "Germany"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 24
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 20
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
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.GridItem, {
        colSpan: 2,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Checkbox, {
            defaultChecked: true,
            children: "Ship to the billing address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.GridItem, {
        colSpan: 2,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Button, {
          variant: "primary",
          size: "lg",
          w: "full",
          children: "Place Order"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUEsK0JBQ0ksOERBQUMsb0RBQUQ7QUFBUSxpQkFBTyxFQUFDLFNBQWhCO0FBQTBCLGNBQUksRUFBQyxJQUEvQjtBQUFvQyxXQUFDLEVBQUMsTUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXZCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUF1Q0gsQ0F6Q0Q7O0FBMkNBLGlFQUFlbkMsT0FBZjs7Ozs7Ozs7OztBQzNEQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGFja3JhLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL2NoYWNrcmEvLi9zcmMvY29tcG9uZW50cy9jYXJ0X3Jvdy50c3giLCJ3ZWJwYWNrOi8vY2hhY2tyYS8uL3NyYy9jb21wb25lbnRzL2RldGFpbF9pbnB1dC50c3giLCJ3ZWJwYWNrOi8vY2hhY2tyYS8uL3NyYy9zZWN0aW9ucy9jYXJ0LnRzeCIsIndlYnBhY2s6Ly9jaGFja3JhLy4vc3JjL3NlY3Rpb25zL2RldGFpbHMudHN4Iiwid2VicGFjazovL2NoYWNrcmEvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2xheW91dFwiIiwid2VicGFjazovL2NoYWNrcmEvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vY2hhY2tyYS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciwgRmxleCwgVlN0YWNrIH0gZnJvbSBcIkBjaGFrcmEtdWkvbGF5b3V0XCJcclxuaW1wb3J0IENhcnQgZnJvbSBcIi4uL3NyYy9zZWN0aW9ucy9jYXJ0XCJcclxuaW1wb3J0IERldGFpbHMgZnJvbSBcIi4uL3NyYy9zZWN0aW9ucy9kZXRhaWxzXCJcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT5cclxuICA8Q29udGFpbmVyIG1heFc9XCJjb250YWluZXIueGxcIiBwPXswfT5cclxuICAgIDxGbGV4XHJcbiAgICAgIGg9e3sgYmFzZTogJ2F1dG8nLCBtZDogJzEwMHZoJyB9fVxyXG4gICAgICBweT17WzAsIDEwLCAyMF19XHJcbiAgICAgIGRpcmVjdGlvbj17eyBiYXNlOiAnY29sdW1uLXJldmVyc2UnLCBtZDogJ3JvdycgfX1cclxuICAgID5cclxuICAgICAgPERldGFpbHMgLz5cclxuICAgICAgPENhcnQgLz5cclxuICAgIDwvRmxleD5cclxuICA8L0NvbnRhaW5lcj5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIiwiaW1wb3J0IHsgSFN0YWNrLCBUZXh0LCBIZWFkaW5nIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxyXG5cclxuY29uc3QgQ2FydFJvdyA9ICh7IHRleHRDb2xvciwgdGV4dCwgdGV4dFZhbHVlLCBzaXplPSdzbSd9IDoge1xyXG4gICAgdGV4dENvbG9yPzogc3RyaW5nO1xyXG4gICAgdGV4dD86IHN0cmluZztcclxuICAgIHRleHRWYWx1ZT86IHN0cmluZztcclxuICAgIHNpemU/OiAnc20nfCdtZCd8J2xnJztcclxufSkgPT4ge1xyXG4gICAgcmV0dXJuIDxIU3RhY2sganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgPFRleHQgY29sb3I9e3RleHRDb2xvcn0+e3RleHR9PC9UZXh0PlxyXG4gICAgICAgIDxIZWFkaW5nIHNpemU9eyBzaXplIH0+e3RleHRWYWx1ZX08L0hlYWRpbmc+XHJcbiAgICA8L0hTdGFjaz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydFJvdzsiLCJpbXBvcnQgeyBHcmlkSXRlbSwgRm9ybUNvbnRyb2wsIEZvcm1MYWJlbCwgSW5wdXQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5cclxuY29uc3QgRGV0YWlsSW5wdXQgPSAoe2xhYmVsLCBwbGFjZWhvbGRlciwgY29sID0gMX0gOiB7XHJcbiAgICBsYWJlbD86IHN0cmluZztcclxuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG4gICAgY29sOiBudW1iZXI7XHJcbn0pID0+IHtcclxuICAgIHJldHVybiA8R3JpZEl0ZW0gY29sU3Bhbj17IGNvbCB9PlxyXG4gICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICAgIHsgbGFiZWwgfVxyXG4gICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlciA9IHsgcGxhY2Vob2xkZXIgfS8+XHJcbiAgICA8L0Zvcm1Db250cm9sPlxyXG48L0dyaWRJdGVtPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxJbnB1dDsiLCJpbXBvcnQge1xyXG4gICAgVlN0YWNrLFxyXG4gICAgSFN0YWNrLFxyXG4gICAgSGVhZGluZyxcclxuICAgIFRleHQsXHJcbiAgICBBc3BlY3RSYXRpbyxcclxuICAgIFN0YWNrLFxyXG4gICAgRGl2aWRlcixcclxuICAgIEJ1dHRvbixcclxuICAgIEltYWdlLFxyXG4gICAgdXNlQ29sb3JNb2RlLFxyXG4gICAgdXNlQ29sb3JNb2RlVmFsdWUsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuXHJcbmltcG9ydCBDYXJ0Um93IGZyb20gXCIuLi9jb21wb25lbnRzL2NhcnRfcm93XCI7XHJcblxyXG5jb25zdCBDYXJ0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xyXG4gICAgY29uc3QgYmdDb2xvciA9IHVzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS41MFwiLCBcIndoaXRlQWxwaGEuNTBcIik7XHJcbiAgICBjb25zdCBzZWNvbmRhcnlDb2xvciA9IHVzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS42MDBcIiwgXCJncmF5LjQwMFwiKTtcclxuXHJcbiAgICByZXR1cm4gPFZTdGFjayB3PVwiZnVsbFwiXHJcbiAgICAgICAgaD1cImZ1bGxcIlxyXG4gICAgICAgIHA9ezEwfVxyXG4gICAgICAgIHNwYWNpbmc9ezZ9XHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcj17YmdDb2xvcn1cclxuICAgID5cclxuICAgICAgICA8VlN0YWNrIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCIgc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCIyeGxcIj5Zb3VyIGNhcnQ8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxUZXh0PklmIHRoZSBwcmljZSBpcyB0b28gaGFyZCBvbiB5b3VyIGV5ZXMseycgJ31cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17IHRvZ2dsZUNvbG9yTW9kZSB9IHZhcmlhbnQ9XCJsaW5rXCIgY29sb3JTY2hlbWU9XCJibGFja1wiPnRyeSBjaGFuZ2luZyB0aGUgbmFtZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPC9WU3RhY2s+XHJcbiAgICAgICAgPEhTdGFjayBzcGFjaW5nPXs2fSBhbGlnbkl0ZW1zPVwiQ2VudGVyXCIgdz1cImZ1bGxcIj5cclxuICAgICAgICAgICAgPEFzcGVjdFJhdGlvIHJhdGlvPXsxfSB3PXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9za2F0ZWJvYXJkLmpwZ1wiIGFsdD1cIlNrYXRlYm9hcmRcIiAvPlxyXG4gICAgICAgICAgICA8L0FzcGVjdFJhdGlvPlxyXG4gICAgICAgICAgICA8U3RhY2tcclxuICAgICAgICAgICAgICAgIHNwYWNpbmc9ezB9XHJcbiAgICAgICAgICAgICAgICB3PVwiZnVsbFwiXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249e1wicm93XCJ9XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxWU3RhY2sgdz1cImZ1bGxcIiBzcGFjaW5nPXswfSBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJtZFwiPlBlbm55IGJvYXJkPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPSB7IHNlY29uZGFyeUNvbG9yIH0+UE5ZQ09NUDI3NTQxPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9WU3RhY2s+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyBzaXplPVwic21cIiB0ZXh0QWxpZ249XCJlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAkMTE5LjAwXHJcbiAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgICAgPFZTdGFjayBzcGFjaW5nPXs0fSBhbGlnbkl0ZW1zPVwic3RyZXRjaFwiIHc9XCJmdWxsXCI+XHJcbiAgICAgICAgICAgIDxDYXJ0Um93IHRleHRDb2xvcj17IHNlY29uZGFyeUNvbG9yIH0gdGV4dD0nU3VidG90YWwnIHRleHRWYWx1ZT0nJDExOS4wMCcvPlxyXG4gICAgICAgICAgICA8Q2FydFJvdyB0ZXh0Q29sb3I9eyBzZWNvbmRhcnlDb2xvciB9IHRleHQ9J1NoaXBwaW5nJyB0ZXh0VmFsdWU9JyQxOS45OScvPlxyXG4gICAgICAgICAgICA8Q2FydFJvdyB0ZXh0Q29sb3I9eyBzZWNvbmRhcnlDb2xvciB9IHRleHQ9J1RheGVzIChlc3RpbWF0ZWQpJyB0ZXh0VmFsdWU9JyQyMy44MCcvPlxyXG4gICAgICAgICAgICA8RGl2aWRlci8+XHJcbiAgICAgICAgICAgIDxDYXJ0Um93IHRleHRDb2xvcj17IHNlY29uZGFyeUNvbG9yIH0gdGV4dD0nVG90YWwnIHRleHRWYWx1ZT0nJDE2Mi43OScgc2l6ZT0nbWQnLz5cclxuICAgICAgICA8L1ZTdGFjaz5cclxuICAgIDwvVlN0YWNrPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0OyIsImltcG9ydCB7IEZvcm1Db250cm9sLFxyXG4gICAgIEZvcm1MYWJlbCxcclxuICAgICBJbnB1dCxcclxuICAgICBTZWxlY3QsXHJcbiAgICAgQ2hlY2tib3gsXHJcbiAgICAgQnV0dG9uLFxyXG4gICAgIFZTdGFjaywgXHJcbiAgICAgSGVhZGluZyxcclxuICAgICBUZXh0LFxyXG4gICAgIFNpbXBsZUdyaWQsXHJcbiAgICAgR3JpZEl0ZW0sXHJcbiAgICAgdXNlQnJlYWtwb2ludFZhbHVlLFxyXG4gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5cclxuIGltcG9ydCBEZXRhaWxJbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50cy9kZXRhaWxfaW5wdXRcIjtcclxuXHJcbmNvbnN0IERldGFpbHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCAgY29sU3BhbiA9IHVzZUJyZWFrcG9pbnRWYWx1ZSh7YmFzZTogMiwgbWQ6IDF9KTtcclxuICAgIHJldHVybiA8VlN0YWNrIHc9XCJmdWxsXCJcclxuICAgICAgICBoPVwiZnVsbFwiXHJcbiAgICAgICAgcD17MTB9XHJcbiAgICAgICAgc3BhY2luZz17MTB9XHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxyXG4gICAgPlxyXG4gICAgICAgIDxWU3RhY2sgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIiBzcGFjaW5nPXszfT5cclxuICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cIjJ4bFwiPllvdXIgZGV0YWlsczwvSGVhZGluZz5cclxuICAgICAgICAgICAgPFRleHQ+SWYgeW91IGFscmVhZHkgaGF2ZSBhbiBhY2NvdW50LCBjbGljayBoZXJlIHRvIGxvZyBpbi48L1RleHQ+XHJcbiAgICAgICAgPC9WU3RhY2s+XHJcbiAgICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz17Mn0gY29sdW1uR2FwPXszfSByb3dHYXA9ezZ9IHc9XCJmdWxsXCI+XHJcbiAgICAgICAgICAgIDxEZXRhaWxJbnB1dCBsYWJlbD0nRmlyc3QgTmFtZScgcGxhY2Vob2xkZXI9J0pvaG4nIGNvbD0ge2NvbFNwYW59Lz5cclxuICAgICAgICAgICAgPERldGFpbElucHV0IGxhYmVsPSdMYXN0IE5hbWUnIHBsYWNlaG9sZGVyPSdEb2UnIGNvbD0ge2NvbFNwYW59Lz4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxEZXRhaWxJbnB1dCBsYWJlbD0nQWRkcmVzcycgcGxhY2Vob2xkZXI9J0JpdmQuIEJyb2tlbiBEcmVhbXMgMjEnIGNvbD0gezJ9Lz5cclxuICAgICAgICAgICAgPERldGFpbElucHV0IGxhYmVsPSdDaXR5JyBwbGFjZWhvbGRlcj0nU2FuIEZyYW5jaXNjbycgY29sPSB7Y29sU3Bhbn0vPlxyXG4gICAgICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17Y29sU3Bhbn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ291bnRyeVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgPFNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidXNhXCI+VW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInVhZVwiPlVuaXRlZCBBcmFiIEVtaXJhdGVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5ta1wiPk5vcnRoIE1hY2Vkb25pYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZVwiPkdlcm1hbnk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgPEdyaWRJdGVtIGNvbFNwYW49ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBkZWZhdWx0Q2hlY2tlZD5TaGlwIHRvIHRoZSBiaWxsaW5nIGFkZHJlc3M8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgPEdyaWRJdGVtIGNvbFNwYW49ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdwcmltYXJ5JyBzaXplPVwibGdcIiB3PVwiZnVsbFwiPlBsYWNlIE9yZGVyPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgPC9TaW1wbGVHcmlkPlxyXG4gICAgPC9WU3RhY2s+XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJGbGV4IiwiQ2FydCIsIkRldGFpbHMiLCJIb21lUGFnZSIsImJhc2UiLCJtZCIsIkhTdGFjayIsIlRleHQiLCJIZWFkaW5nIiwiQ2FydFJvdyIsInRleHRDb2xvciIsInRleHQiLCJ0ZXh0VmFsdWUiLCJzaXplIiwiR3JpZEl0ZW0iLCJGb3JtQ29udHJvbCIsIkZvcm1MYWJlbCIsIklucHV0IiwiRGV0YWlsSW5wdXQiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwiY29sIiwiVlN0YWNrIiwiQXNwZWN0UmF0aW8iLCJTdGFjayIsIkRpdmlkZXIiLCJCdXR0b24iLCJJbWFnZSIsInVzZUNvbG9yTW9kZSIsInVzZUNvbG9yTW9kZVZhbHVlIiwidG9nZ2xlQ29sb3JNb2RlIiwiYmdDb2xvciIsInNlY29uZGFyeUNvbG9yIiwiU2VsZWN0IiwiQ2hlY2tib3giLCJTaW1wbGVHcmlkIiwidXNlQnJlYWtwb2ludFZhbHVlIiwiY29sU3BhbiJdLCJzb3VyY2VSb290IjoiIn0=
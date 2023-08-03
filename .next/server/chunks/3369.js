"use strict";
exports.id = 3369;
exports.ids = [3369];
exports.modules = {

/***/ 73369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CustomImageContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58861);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45269);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);







const ImagePreviewOnModal = (props)=>{
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_6__.useTheme)();
    const { modalImage , handleModalClose  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_5__/* .CustomStackFullWidth */ .Xw, {
        sx: {
            position: "relative",
            width: {
                xs: "270px",
                sm: "500px"
            }
        },
        alignItems: "flex-end",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>handleModalClose(false),
                style: {
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "50%",
                    width: " 2rem",
                    height: "2rem"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3___default()), {
                    sx: {
                        fontSize: "16px"
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImageContainer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                src: modalImage,
                width: "100%",
                height: "100%"
            })
        ]
    });
};
ImagePreviewOnModal.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImagePreviewOnModal);


/***/ })

};
;
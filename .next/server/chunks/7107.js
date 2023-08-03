"use strict";
exports.id = 7107;
exports.ids = [7107];
exports.modules = {

/***/ 7107:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64845);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57987);
/* harmony import */ var _NavBar_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53523);
/* harmony import */ var _NavPopover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41790);
/* harmony import */ var _helper_functions_getStoresOrRestaurants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37698);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_5__, _NavPopover__WEBPACK_IMPORTED_MODULE_7__, _helper_functions_getStoresOrRestaurants__WEBPACK_IMPORTED_MODULE_8__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_5__, _NavPopover__WEBPACK_IMPORTED_MODULE_7__, _helper_functions_getStoresOrRestaurants__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const NavRestaurant = ()=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    const handlePopoverOpen = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = ()=>{
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        onMouseEnter: handlePopoverOpen,
        onMouseLeave: handlePopoverClose,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_NavBar_style__WEBPACK_IMPORTED_MODULE_6__/* .NavMenuLink */ .lC, {
                underline: "none",
                sx: {
                    textTransform: "capitalize"
                },
                children: [
                    t((0,_helper_functions_getStoresOrRestaurants__WEBPACK_IMPORTED_MODULE_8__/* .getStoresOrRestaurants */ .s)()),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_2___default()), {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavPopover__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                popoverFor: "store",
                open: open,
                anchorEl: anchorEl
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavRestaurant);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
"use strict";
exports.id = 2656;
exports.ids = [2656];
exports.modules = {

/***/ 82656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56843);
/* harmony import */ var _mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_6__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const CustomCopyWithTooltip = (props)=>{
    const { t , value  } = props;
    const [copy, setCopy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleCopy = (coupon_code)=>{
        navigator.clipboard.writeText(coupon_code).then(()=>{
            setCopy(true);
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_6__["default"])(()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    children: [
                        t("Code"),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                            style: {
                                marginLeft: "4px",
                                marginRight: "4px"
                            },
                            children: coupon_code
                        }),
                        t("has been copied")
                    ]
                }));
        }).catch((error)=>{
            console.error("Failed to copy code:", error);
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
        placement: "top",
        title: copy ? t("Copied") : t("Copy"),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3___default()), {
            onMouseEnter: ()=>copy && setCopy(false),
            onClick: ()=>handleCopy(value),
            sx: {
                p: {
                    xs: "0px",
                    sm: "5px"
                },
                m: {
                    xs: "0px",
                    sm: "5px"
                }
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_4___default()), {
                color: "primary.main",
                style: {
                    fontSize: 16
                }
            })
        })
    });
};
CustomCopyWithTooltip.propTypes = {
    t: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
    value: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomCopyWithTooltip);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
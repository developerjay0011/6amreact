"use strict";
exports.id = 1729;
exports.ids = [1729];
exports.modules = {

/***/ 86483:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ _index__WEBPACK_IMPORTED_MODULE_12__.getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57987);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _meta_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74121);
/* harmony import */ var _src_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13258);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_components_layout_UserLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70778);
/* harmony import */ var _src_components_address__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73850);
/* harmony import */ var _src_components_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32834);
/* harmony import */ var _src_components_route_guard_AuthGuard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46941);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44369);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_2__, _src_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_5__, _src_components_address__WEBPACK_IMPORTED_MODULE_8__, _src_components_settings__WEBPACK_IMPORTED_MODULE_9__, _index__WEBPACK_IMPORTED_MODULE_12__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_2__, _src_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_5__, _src_components_address__WEBPACK_IMPORTED_MODULE_8__, _src_components_settings__WEBPACK_IMPORTED_MODULE_9__, _index__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Index = ({ configData , landingPageData  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default()), {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_meta_data__WEBPACK_IMPORTED_MODULE_4__["default"], {
                title: `Settings - ${configData?.business_name}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                configData: configData,
                landingPageData: landingPageData,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.NoSsr, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_route_guard_AuthGuard__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        from: router.pathname.replace("/", ""),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_layout_UserLayout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            component: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_settings__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                configData: configData,
                                t: t
                            }),
                            configData: configData,
                            t: t
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 32834:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45269);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _header_top_navbar_ThemeSwitches__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43652);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _header_top_navbar_language_CustomLanguage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8501);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_header_top_navbar_ThemeSwitches__WEBPACK_IMPORTED_MODULE_4__, _header_top_navbar_language_CustomLanguage__WEBPACK_IMPORTED_MODULE_6__]);
([_header_top_navbar_ThemeSwitches__WEBPACK_IMPORTED_MODULE_4__, _header_top_navbar_language_CustomLanguage__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const CustomPaper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper)(({ theme  })=>({
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        //maxWidth: "247px",
        height: "168px",
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "center"
    }));
const CustomSettings = (props)=>{
    const { configData , t  } = props;
    const { countryCode , language  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.configData);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
            container: true,
            spacing: 3,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                    item: true,
                    xs: 12,
                    sm: 6,
                    md: 4,
                    lg: 3,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomPaper, {
                        elevation: 10,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                            alignItems: "center",
                            justifyContent: "center",
                            spacing: 1,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                    fontWeight: "bold",
                                    children: t("Theme Settings")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header_top_navbar_ThemeSwitches__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                    item: true,
                    xs: 12,
                    sm: 6,
                    md: 4,
                    lg: 3,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomPaper, {
                        elevation: 10,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                            alignItems: "center",
                            justifyContent: "center",
                            spacing: 1,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                    fontWeight: "bold",
                                    children: t("Change language")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header_top_navbar_language_CustomLanguage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    countryCode: countryCode,
                                    language: language
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
CustomSettings.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomSettings);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
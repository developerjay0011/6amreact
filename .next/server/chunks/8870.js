"use strict";
exports.id = 8870;
exports.ids = [8870];
exports.modules = {

/***/ 25528:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useGetTypeWiseStore)
/* harmony export */ });
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61176);
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60274);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_0__]);
_MainApi__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const getData = async (storeType, type)=>{
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`${_ApiRoutes__WEBPACK_IMPORTED_MODULE_2__/* .typewise_store_api */ .m3}/${storeType}?type=${type}`);
    return data;
};
function useGetTypeWiseStore(storeType, type) {
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)("type-wise-store", ()=>getData(storeType, type), {
        enabled: false
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36450:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_manage_hooks_react_query_typewise_store_useGetTypeWiseStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25528);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_stores_with_filter_cards_grid_StoresInfoCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20762);
/* harmony import */ var _helper_functions_getModuleId__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(52539);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45269);
/* harmony import */ var _GroupButtons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17230);
/* harmony import */ var _home_stores_with_filter_Shimmer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36792);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_manage_hooks_react_query_typewise_store_useGetTypeWiseStore__WEBPACK_IMPORTED_MODULE_2__, _home_stores_with_filter_cards_grid_StoresInfoCard__WEBPACK_IMPORTED_MODULE_5__, _GroupButtons__WEBPACK_IMPORTED_MODULE_8__]);
([_api_manage_hooks_react_query_typewise_store_useGetTypeWiseStore__WEBPACK_IMPORTED_MODULE_2__, _home_stores_with_filter_cards_grid_StoresInfoCard__WEBPACK_IMPORTED_MODULE_5__, _GroupButtons__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const StoreList = ({ storeType , type , setType , data , isLoading  })=>{
    const { selectedModule  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.utilsData);
    const matchesXs = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_10___default()("(max-width:470px)");
    const { configData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.configData);
    const store_image_url = `${configData?.base_urls?.store_image_url}`;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
        marginTop: "20px",
        minHeight: "60vh",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                container: true,
                spacing: {
                    xs: 2,
                    md: 3
                },
                justifyContent: "flex-start",
                children: [
                    selectedModule?.module_type === "food" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                        item: true,
                        xs: 12,
                        sm: 12,
                        md: 12,
                        align: "center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_7__/* .CustomStackFullWidth */ .Xw, {
                            alignItems: "center",
                            justifyContent: "center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GroupButtons__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                setType: setType,
                                type: type
                            })
                        })
                    }),
                    data && data?.length > 0 && data?.map((store)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                            item: true,
                            xs: matchesXs ? 12 : 6,
                            sm: 6,
                            md: 3,
                            lg: 2.4,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_stores_with_filter_cards_grid_StoresInfoCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                image: `${store_image_url}/${store?.logo}`,
                                title: store?.name,
                                avgRating: store?.avg_rating,
                                address: store?.address,
                                id: store?.id,
                                data: store,
                                moduleId: (0,_helper_functions_getModuleId__WEBPACK_IMPORTED_MODULE_11__/* .getModuleId */ .S)()
                            })
                        }, store?.id);
                    })
                ]
            }),
            isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
                marginTop: "40px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_stores_with_filter_Shimmer__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    count: "10"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoreList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 28870:
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
/* harmony import */ var _typographies_H1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74485);
/* harmony import */ var _StoreList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36450);
/* harmony import */ var _api_manage_hooks_react_query_typewise_store_useGetTypeWiseStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25528);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_manage_hooks_react_query_store_useGetPopularStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63051);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_typographies_H1__WEBPACK_IMPORTED_MODULE_3__, _StoreList__WEBPACK_IMPORTED_MODULE_4__, _api_manage_hooks_react_query_typewise_store_useGetTypeWiseStore__WEBPACK_IMPORTED_MODULE_5__, _api_manage_hooks_react_query_store_useGetPopularStore__WEBPACK_IMPORTED_MODULE_7__]);
([_typographies_H1__WEBPACK_IMPORTED_MODULE_3__, _StoreList__WEBPACK_IMPORTED_MODULE_4__, _api_manage_hooks_react_query_typewise_store_useGetTypeWiseStore__WEBPACK_IMPORTED_MODULE_5__, _api_manage_hooks_react_query_store_useGetPopularStore__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const TypeWiseStore = ({ storeType , title  })=>{
    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("all");
    const { data , refetch , isLoading  } = (0,_api_manage_hooks_react_query_typewise_store_useGetTypeWiseStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(storeType, type);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (storeType === "latest") {
            refetch();
        } else {
            popularRefetch();
        }
    }, [
        type
    ]);
    const queryKey = "navbar-stores";
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { data: popularData , refetch: popularRefetch , isLoading: popularIsLoading  } = (0,_api_manage_hooks_react_query_store_useGetPopularStore__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(queryKey, type);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomPaperBigCard */ .iD, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_typographies_H1__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    text: title,
                    textAlign: "left"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StoreList__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    storeType: storeType,
                    type: type,
                    setType: setType,
                    data: storeType === "latest" ? data : popularData,
                    isLoading: storeType === "latest" ? isLoading : popularIsLoading
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypeWiseStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
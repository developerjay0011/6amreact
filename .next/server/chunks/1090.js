"use strict";
exports.id = 1090;
exports.ids = [1090];
exports.modules = {

/***/ 74800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/nodata.25714da9.png","height":1004,"width":1004,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAo0lEQVR42mPABv7NzWXCFFyQ6/9vdVYtkDYH8xflMKFKnog7/e9yiMf/2bmF/5bm6KIo+rcmu/LfmcDA/wwMov8WZ1sDJQKgCpjBCv4vyDX7Nycv+9+iTNt/C3N6/y3OlYcoyGVm+D8vlxGsaFm29v/F2T7/F2fK/V+cUwZUJAd3w/8lYYwMSODvojx5oCJbBmRwcWEPy8EFk7iOL5jAiaSQCQCor1BEsnrlAwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 13396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/star-review.f108bfd9.png","height":80,"width":80,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAhFBMVEXueCLueCHseSDteCHudyLudyHfdxzudyHueCHudyHudyLudyHvdyHueCHudyHudyHueCHudyHvdyLudyHveCLvdyLudyHueCLudyLudyHudyHueCHueCHveCLudyHudyHveCLudyHudyHudyLudyHudyHudyHudyHudyHudyHudyHudyFu8fnrAAAALHRSTlMAAAAAAAAAAgMGCgoNDxAREx4kMDEzODpFS09QU1dXWFlaW3V4f4OGj5ScwXwdsYcAAABGSURBVHjaBUCFEYAgAHzUtxu7wZb99/NAT+S58CyQvG7SRpSt+6ELH71RcaAXF1CTqOatBtPT6Z53BKWR7TcEYNGIpAz5A5k7BJVmFm1XAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 50080:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useGetMyOrdersList)
/* harmony export */ });
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61176);
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60274);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67759);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_0__, _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__]);
([_MainApi__WEBPACK_IMPORTED_MODULE_0__, _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const getData = async (pageParams)=>{
    const { orderType , offset  } = pageParams;
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`${_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__/* .my_orders_api */ .QH}/${orderType}?limit=${_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__/* .data_limit */ .bU}&offset=${offset}`);
    return data;
};
function useGetMyOrdersList(pageParams) {
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)("my-orders-list", ()=>getData(pageParams), {
        enabled: false,
        onError: _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__/* .onSingleErrorResponse */ .f
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ my_orders_NavigationButtons)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(18442);
// EXTERNAL MODULE: external "@mui/system"
var system_ = __webpack_require__(97986);
// EXTERNAL MODULE: ./src/components/CustomImageContainer.js + 1 modules
var CustomImageContainer = __webpack_require__(58861);
;// CONCATENATED MODULE: ./src/components/my-orders/assets/active_image.png
/* harmony default export */ const active_image = ({"src":"/_next/static/media/active_image.5561c2ad.png","height":58,"width":58,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABC0lEQVR42mOAABV5N1MG/429DA/WdTNckxFhcFfW0pdmgIG01I7jty/N/n/3bMf/e+e6/9861/c/OqxuXyVDkilYQUX5/KNP7iz5//rxyt/PH678c+Zox//8tPbrvaHR1yEmRDdduHtpzv+HN+b9vX913t9jOxr/F2S3XlnVz3CSoXRl/6T64yv+r9gz4f+Dq3P+P7ix4O+Jvc3/8zNbrq7qkT7D0A6UnHRn5/+c/bP/Xjs15f/D24v+HtjZ8L+6sP38wfkyRxjK10xsKNoy5//Wo1P+v76/+P/zB0v/XTje+T87pfVKX4nsCbAbPIxaD7VUTf3f1TbjW2fL9G8tddP++/h0bWNgYHABAMF7kK5wHDs9AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/components/my-orders/assets/past_image.png
/* harmony default export */ const past_image = ({"src":"/_next/static/media/past_image.fb453db4.png","height":58,"width":58,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AYWNegl7c+pI3JYNVBAuBkQDAQH+6tj9tydj7626tiC6AWBFZj+96hDAr378ADAp8wAAAgAAxdYQAD9v/wBvNfEtAboAYrD0rVpPNDcp+wf+7gQEBAIADBIb/LawxwUQWKWcAdEybvbNeVEJFiguAATt5wD+9/QAKCke/9jR1gEdYK/mAc0obfbeg08JJgwVAAIRAQD+CwYAHRsX/8bCzQEcUKznAbsgaLztf0xDIgYT+vokDgb89/QAHR8a+tbM1QYKVaWnAQAAACestMbFECElEwz37QAEAPsAICEbANLP1+BCRDs6AYuFrwAcOC0mBwcElhkI+Dn79fL+/f4AvycqImrTvcnkOzhrSf2Nku8AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/redux/slices/utils.js
var utils = __webpack_require__(67493);
// EXTERNAL MODULE: external "@mui/icons-material/CheckCircle"
var CheckCircle_ = __webpack_require__(66741);
var CheckCircle_default = /*#__PURE__*/__webpack_require__.n(CheckCircle_);
;// CONCATENATED MODULE: ./src/components/my-orders/NavigationButtons.js











const CustomButton = (0,styles_.styled)(material_.Button)(({ theme , isselected  })=>({
        padding: "1rem",
        borderRadius: "14px",
        background: isselected && theme.palette.primary.semiLight,
        [theme.breakpoints.up("xs")]: {
            width: "120.12px",
            height: "84.91px"
        },
        [theme.breakpoints.up("md")]: {
            width: "225px",
            height: "115px"
        }
    }));
const menu = [
    {
        name: "Active orders",
        img: active_image
    },
    {
        name: "Past orders",
        img: past_image
    }
];
const NavigationButtons = (props)=>{
    const { t , setOffset  } = props;
    const { orderType  } = (0,external_react_redux_.useSelector)((state)=>state.utilsData);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const handleOrderType = (index)=>{
        setOffset(1);
        dispatch((0,utils/* setOrderType */.wk)(index));
    };
    const customTick = ()=>/*#__PURE__*/ jsx_runtime_.jsx(system_.Box, {
            sx: {
                position: "absolute",
                top: "4px",
                right: "6px"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx((CheckCircle_default()), {
                color: "success"
            })
        });
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
        container: true,
        spacing: 2,
        children: menu?.map((item, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                xs: 6,
                align: index === 0 && "end",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CustomButton, {
                    isselected: orderType === index,
                    onClick: ()=>handleOrderType(index),
                    children: [
                        orderType === index && customTick(),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(system_.Stack, {
                            alignItems: "center",
                            justifyContent: "center",
                            spacing: 1,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(CustomImageContainer/* default */.Z, {
                                    src: item.img.src,
                                    alt: t(item?.name),
                                    height: "70px",
                                    width: "70px",
                                    objectfit: "contained"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    sx: {
                                        color: orderType !== index && "customColor.textGray"
                                    },
                                    children: t(item?.name)
                                })
                            ]
                        })
                    ]
                })
            }, index);
        })
    });
};
NavigationButtons.propTypes = {};
/* harmony default export */ const my_orders_NavigationButtons = (NavigationButtons);


/***/ }),

/***/ 51090:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavigationButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49878);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57987);
/* harmony import */ var _api_manage_hooks_react_query_order_useGetMyOrdersList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50080);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45269);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _custom_empty_result__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58797);
/* harmony import */ var _assets_nodata_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74800);
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(91770);
/* harmony import */ var _custom_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(92704);
/* harmony import */ var _api_manage_ApiRoutes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(60274);
/* harmony import */ var _redux_slices_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(67493);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(86201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_3__, _api_manage_hooks_react_query_order_useGetMyOrdersList__WEBPACK_IMPORTED_MODULE_4__, _custom_empty_result__WEBPACK_IMPORTED_MODULE_8__, _order__WEBPACK_IMPORTED_MODULE_10__, react_hot_toast__WEBPACK_IMPORTED_MODULE_14__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_3__, _api_manage_hooks_react_query_order_useGetMyOrdersList__WEBPACK_IMPORTED_MODULE_4__, _custom_empty_result__WEBPACK_IMPORTED_MODULE_8__, _order__WEBPACK_IMPORTED_MODULE_10__, react_hot_toast__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const CustomShimmerCard = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_6__/* .CustomBoxFullWidth */ .uu, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {
            container: true,
            spacing: 3,
            children: [
                ...Array(6)
            ].map((item, index)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {
                    item: true,
                    xs: 12,
                    sm: 6,
                    md: 6,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
                        variant: "rectangular",
                        width: "100%",
                        height: "10rem"
                    })
                }, index);
            })
        })
    });
};
const MyOrders = (props)=>{
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_13__.useTheme)();
    const { configData  } = props;
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const { orderType  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.utilsData);
    const [offset, setOffSet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const orderTypeValue = orderType === 0 ? "running-orders" : "list";
    const { data , refetch , isFetching , isRefetching  } = (0,_api_manage_hooks_react_query_order_useGetMyOrdersList__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        orderType: orderTypeValue,
        offset: offset
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isFetching) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_14__.toast.loading(t("Getting Order List..."));
        } else {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_14__.toast.dismiss();
        }
    }, [
        isFetching
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        refetch();
        dispatch((0,_redux_slices_utils__WEBPACK_IMPORTED_MODULE_12__/* .setOrderType */ .wk)(orderType === 0 ? 0 : 1));
    }, [
        orderType,
        offset
    ]);
    const isXs = (0,_mui_material__WEBPACK_IMPORTED_MODULE_7__.useMediaQuery)("(max-width:700px)");
    const handleInnerContent = ()=>{
        if (data) {
            if (data?.orders?.length === 0) {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_custom_empty_result__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    image: _assets_nodata_png__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                    label: "No Orders Found"
                });
            } else {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {
                    container: true,
                    spacing: 2,
                    children: data && data?.orders?.length > 0 && data?.orders?.map((order)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {
                            item: true,
                            xs: 12,
                            sm: isXs ? 12 : 6,
                            md: 6,
                            lg: 6,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_order__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                order: order,
                                t: t,
                                configData: configData,
                                dispatch: dispatch
                            })
                        }, order?.id))
                });
            }
        } else {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomShimmerCard, {});
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_6__/* .CustomStackFullWidth */ .Xw, {
        spacing: 2,
        mt: "3rem",
        sx: {
            minHeight: "80vh"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavigationButtons__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                t: t,
                setOffset: setOffSet
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_6__/* .CustomPaperBigCard */ .iD, {
                backgroundcolor: theme.palette.background.custom2,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_6__/* .CustomStackFullWidth */ .Xw, {
                    spacing: 3,
                    children: [
                        handleInnerContent(),
                        data && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_custom_pagination__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            total_size: data?.total_size,
                            page_limit: _api_manage_ApiRoutes__WEBPACK_IMPORTED_MODULE_15__/* .data_limit */ .bU,
                            offset: offset,
                            setOffset: setOffSet
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyOrders);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 91770:
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
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45269);
/* harmony import */ var _CustomImageContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58861);
/* harmony import */ var _myorders_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30700);
/* harmony import */ var _date_CustomFormatedDateTime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17446);
/* harmony import */ var _helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(89113);
/* harmony import */ var _assets_star_review_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13396);
/* harmony import */ var _mui_icons_material_LocalShipping__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(84107);
/* harmony import */ var _mui_icons_material_LocalShipping__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LocalShipping__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _redux_slices_searchFilter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5795);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_10__]);
_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















const CustomPaper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_6__/* .CustomPaperBigCard */ .iD)(({ theme  })=>({
        padding: "10px"
    }));
const Order = (props)=>{
    const { order , t , configData , dispatch  } = props;
    const storeImage = order?.module_type === "parcel" ? configData?.base_urls?.parcel_category_image_url : configData?.base_urls?.store_image_url;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
    const handleClick = ()=>{
        if (order?.delivery_man) {
            dispatch((0,_redux_slices_searchFilter__WEBPACK_IMPORTED_MODULE_15__/* .setDeliveryManInfoByDispatch */ .gr)(order?.delivery_man));
        }
        router.push(`/order-details/${order?.id}`, undefined, {
            shallow: true
        });
    };
    const handleRateButtonClick = ()=>{
        router.push(`/rate-and-review/${order?.id}`, undefined, {
            shallow: true
        });
    };
    const handleClickTrackOrder = ()=>{
        if (order?.delivery_man) {
            dispatch((0,_redux_slices_searchFilter__WEBPACK_IMPORTED_MODULE_15__/* .setDeliveryManInfoByDispatch */ .gr)(order?.delivery_man));
        }
        router.push(`/track-order/${order?.id}`, undefined, {
            shallow: true
        });
    };
    const deliveredInformation = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_myorders_style__WEBPACK_IMPORTED_MODULE_8__/* .SuccessButton */ .UW, {
                    size: "small",
                    children: t("Delivered")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
                    onClick: ()=>handleRateButtonClick(),
                    variant: "outlined",
                    sx: {
                        p: {
                            xs: "5px",
                            sm: "5px",
                            md: "6px"
                        }
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                        alignItems: "center",
                        justifyContent: "space-between",
                        direction: "row",
                        spacing: 1,
                        flexWrap: "wrap",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImageContainer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                src: _assets_star_review_png__WEBPACK_IMPORTED_MODULE_11__/* ["default"].src */ .Z.src,
                                width: "25px",
                                height: "25px"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_6__/* .CustomColouredTypography */ .i5, {
                                color: "primary",
                                children: t("Give Review")
                            })
                        ]
                    })
                })
            ]
        });
    const notDeliveredInformation = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_6__/* .CustomStackFullWidth */ .Xw, {
            mt: "5px",
            direction: "row",
            flexWrap: "wrap",
            gap: "6px",
            justifyContent: "space-between",
            alignItems: {
                xs: "flex-start",
                md: "center"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_myorders_style__WEBPACK_IMPORTED_MODULE_8__/* .PendingButton */ .CD, {
                    size: "small",
                    children: order?.order_status === "failed" ? t("Payment Failed") : t(order?.order_status).replaceAll("_", " ")
                }),
                order?.order_status !== "delivered" && order?.order_status !== "failed" && order?.order_status !== "canceled" && order?.order_status !== "refund_requested" && order?.order_status !== "refund_request_canceled" && order?.order_status !== "refunded" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                    flexWrap: "wrap",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_myorders_style__WEBPACK_IMPORTED_MODULE_8__/* .TrackOrderButton */ .To, {
                        size: "small",
                        onClick: ()=>handleClickTrackOrder(),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_LocalShipping__WEBPACK_IMPORTED_MODULE_12___default()), {
                                sx: {
                                    fontSize: "14px"
                                }
                            }),
                            t("Track Order")
                        ]
                    })
                })
            ]
        });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomPaper, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
            container: true,
            item: true,
            spacing: 1,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                    item: true,
                    md: 3.5,
                    xs: 4.5,
                    sm: 4.5,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        sx: {
                            cursor: "pointer",
                            maxWidth: "125px",
                            position: "relative"
                        },
                        onClick: ()=>handleClick(),
                        children: [
                            order?.module_type === "parcel" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                sx: {
                                    position: "absolute",
                                    top: "5px",
                                    zIndex: 999
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Chip, {
                                    label: order?.module_type,
                                    color: "primary",
                                    style: {
                                        borderRadius: "2px",
                                        textTransform: "capitalize"
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImageContainer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                src: `${storeImage}/${order?.module_type === "parcel" ? order?.parcel_category?.image : order?.store?.logo}`,
                                width: "100%",
                                borderRadius: ".7rem"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                    item: true,
                    md: 8.5,
                    xs: 7.5,
                    sm: 7.5,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_myorders_style__WEBPACK_IMPORTED_MODULE_8__/* .OrderIdTypography */ .f1, {
                            variant: "h3",
                            onClick: ()=>handleClick(),
                            sx: {
                                cursor: "pointer"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                    component: "span",
                                    variant: {
                                        xs: "h5",
                                        md: "h3"
                                    },
                                    sx: {
                                        color: (theme)=>theme.palette.primary.main
                                    },
                                    children: t("Order ID")
                                }),
                                " ",
                                order?.id
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_myorders_style__WEBPACK_IMPORTED_MODULE_8__/* .DateTypography */ .d$, {
                            children: order?.order_status == "delivered" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_date_CustomFormatedDateTime__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                date: order?.delivered
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_date_CustomFormatedDateTime__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                date: order?.created_at
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                            direction: "row",
                            alignItems: "center",
                            spacing: .5,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_myorders_style__WEBPACK_IMPORTED_MODULE_8__/* .OrderAmountTypography */ .Ih, {
                                    children: [
                                        t("Order Amount"),
                                        " :"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_myorders_style__WEBPACK_IMPORTED_MODULE_8__/* .OrderAmountTypography */ .Ih, {
                                    children: (0,_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_10__/* .getAmountWithSign */ .B9)(order?.order_amount)
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_6__/* .CustomStackFullWidth */ .Xw, {
                            alignItems: "center",
                            spacing: 1,
                            justifyContent: "space-between",
                            direction: {
                                xs: "column",
                                sm: "column",
                                md: "row"
                            },
                            children: order?.order_status == "delivered" ? deliveredInformation() : notDeliveredInformation()
                        })
                    ]
                })
            ]
        })
    });
};
Order.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Order);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
"use strict";
exports.id = 8104;
exports.ids = [8104];
exports.modules = {

/***/ 95543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/wallet.8a35cf6f.png","height":60,"width":60,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAZElEQVR42j3NOwrCUAAF0Yu/ytouuIaAiI2gUdIIRrARNyA8MJW6/IMWklNOMzFOLNy8bROjJCq9q8bFOolO8VHstF6qOGdgqYtDYpqYODl6RvsPcw8bfewzULtH0WjN1H4fqy9e7DlDTa9FOgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 83291:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useGetProfile)
/* harmony export */ });
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61176);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60274);
/* harmony import */ var _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67759);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_0__, _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__]);
([_MainApi__WEBPACK_IMPORTED_MODULE_0__, _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const getUserProfile = async ()=>{
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__/* .profile_info */ .RO);
    return data;
};
function useGetProfile(userOnSuccessHandler) {
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)("user-profile", getUserProfile, {
        enabled: false,
        onSuccess: userOnSuccessHandler,
        onError: _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__/* .onErrorResponse */ .R
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68632:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useGetWalletTransactionsList)
/* harmony export */ });
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61176);
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60274);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_0__]);
_MainApi__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const getData = async (pageParams)=>{
    const { offset  } = pageParams;
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`${_ApiRoutes__WEBPACK_IMPORTED_MODULE_2__/* .wallet_transactions_list_api */ .kY}?offset=${offset}&limit=${_ApiRoutes__WEBPACK_IMPORTED_MODULE_2__/* .data_limit */ .bU}`);
    return data;
};
function useGetWalletTransactionsList(pageParams) {
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)("wallet-transactions-list", ()=>getData(pageParams), {
        enabled: false
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 98272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_4__);






const Shimmer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            ...Array(4)
        ].map((item, index)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                item: true,
                xs: 12,
                sx: {
                    padding: "10px"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                        direction: "row",
                        justifyContent: "space-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                                variant: "text",
                                width: "30%",
                                height: 20
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                                variant: "text",
                                width: "10%",
                                height: 20
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                        direction: "row",
                        justifyContent: "space-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                                variant: "text",
                                width: "30%",
                                height: 20
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                                variant: "text",
                                width: "10%",
                                height: 20
                            })
                        ]
                    })
                ]
            }, index);
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shimmer);


/***/ }),

/***/ 82548:
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45269);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22021);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89113);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_5__, _helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_8__]);
([i18next__WEBPACK_IMPORTED_MODULE_5__, _helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Transaction = ({ data , page  })=>{
    const theme = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.useTheme)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                container: true,
                md: 12,
                xs: 12,
                spacing: 2,
                sx: {
                    padding: "10px"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        item: true,
                        md: 7,
                        xs: 4.5,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                sx: {
                                    fontWeight: "700"
                                },
                                children: page === "loyalty" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        data?.transaction_type === "point_to_wallet" ? data?.debit : data?.credit,
                                        " ",
                                        (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)("points")
                                    ]
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: (0,_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_8__/* .getAmountWithSign */ .B9)(data?.transaction_type === "point_to_wallet" ? data?.debit : data?.credit)
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__/* .CustomTypographyGray */ .mI, {
                                sx: {
                                    fontSize: "14px",
                                    textTransform: "capitalize"
                                },
                                children: (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)(data?.transaction_type).replaceAll("_", " ")
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        item: true,
                        md: 5,
                        xs: 7.5,
                        justifySelf: "flex-end",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                            direction: "row",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            spacing: {
                                xs: 1,
                                md: 0.5
                            },
                            flexWrap: "wrap",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__/* .CustomTypographyGray */ .mI, {
                                    sx: {
                                        fontSize: "14px"
                                    },
                                    children: data?.created_at
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                    sx: {
                                        fontSize: "14px",
                                        textTransform: "capitalize",
                                        paddingRight: "0px"
                                    },
                                    color: data?.transaction_type === "point_to_wallet" ? theme.palette.success.main : theme.palette.error.main,
                                    children: data?.transaction_type === "point_to_wallet" ? (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)("debit") : (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)("credit")
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Divider, {})
        ]
    });
};
Transaction.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Transaction);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 38748:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shimmer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98272);
/* harmony import */ var _Transaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82548);
/* harmony import */ var _custom_empty_result__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58797);
/* harmony import */ var _public_static_nodata_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3715);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57987);
/* harmony import */ var _api_manage_hooks_react_query_useGetWalletTransactionsList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68632);
/* harmony import */ var _CustomDivider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(35740);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Transaction__WEBPACK_IMPORTED_MODULE_4__, _custom_empty_result__WEBPACK_IMPORTED_MODULE_5__, react_i18next__WEBPACK_IMPORTED_MODULE_7__, _api_manage_hooks_react_query_useGetWalletTransactionsList__WEBPACK_IMPORTED_MODULE_8__]);
([_Transaction__WEBPACK_IMPORTED_MODULE_4__, _custom_empty_result__WEBPACK_IMPORTED_MODULE_5__, react_i18next__WEBPACK_IMPORTED_MODULE_7__, _api_manage_hooks_react_query_useGetWalletTransactionsList__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const TransactionHistory = (props)=>{
    const { data , isLoading , page  } = props;
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                fontSize: "18px",
                fontWeight: "700",
                py: "1rem",
                children: t("Transaction History")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomDivider__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shimmer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}) : data && data?.data?.length > 0 ? data?.data?.map((item, index)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Transaction__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    data: item,
                    page: page
                }, index);
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: data?.data?.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_custom_empty_result__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    label: "No transaction found",
                    image: _public_static_nodata_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionHistory);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48104:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ WallatBox),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45269);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CustomImageContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58861);
/* harmony import */ var _assets_wallet_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(95543);
/* harmony import */ var _redux_slices_profileInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65337);
/* harmony import */ var _api_manage_hooks_react_query_profile_useGetProfile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(83291);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(89113);
/* harmony import */ var _transaction_history__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38748);
/* harmony import */ var _api_manage_hooks_react_query_useGetWalletTransactionsList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(68632);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_manage_hooks_react_query_profile_useGetProfile__WEBPACK_IMPORTED_MODULE_9__, _helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_11__, _transaction_history__WEBPACK_IMPORTED_MODULE_12__, _api_manage_hooks_react_query_useGetWalletTransactionsList__WEBPACK_IMPORTED_MODULE_13__]);
([_api_manage_hooks_react_query_profile_useGetProfile__WEBPACK_IMPORTED_MODULE_9__, _helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_11__, _transaction_history__WEBPACK_IMPORTED_MODULE_12__, _api_manage_hooks_react_query_useGetWalletTransactionsList__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const WallatBox = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)(_mui_system__WEBPACK_IMPORTED_MODULE_5__.Box)(({ theme , nobackground  })=>({
        display: "flex",
        height: "123px",
        background: nobackground === "true" ? "inherit" : theme.palette.primary.main,
        borderRadius: "10px",
        [theme.breakpoints.up("xs")]: {
            width: "100%",
            maxWidth: "343px"
        },
        [theme.breakpoints.up("md")]: {
            width: "330px"
        }
    }));
const Wallet = (props)=>{
    const { configData , t  } = props;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();
    const userOnSuccessHandler = (res)=>{
        dispatch((0,_redux_slices_profileInfo__WEBPACK_IMPORTED_MODULE_8__/* .setUser */ .av)(res));
    //handleClose()
    };
    const { data: userData , refetch: profileRefetch  } = (0,_api_manage_hooks_react_query_profile_useGetProfile__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(userOnSuccessHandler);
    const [offset, setOffset] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    let pageParams = {
        offset: offset
    };
    const { data , refetch , isLoading  } = (0,_api_manage_hooks_react_query_useGetWalletTransactionsList__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(pageParams);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchData();
    }, []);
    const fetchData = async ()=>{
        await refetch();
        await profileRefetch();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
        my: "2rem",
        alignItems: "center",
        justifyContent: "space-between",
        sx: {
            height: "100%"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomPaperBigCard */ .iD, {
            sx: {
                paddingTop: "4rem",
                minHeight: "60vh"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                container: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        xs: 12,
                        md: 12,
                        align: "center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WallatBox, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                direction: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 2,
                                flexWrap: "wrap",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImageContainer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        src: _assets_wallet_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z?.src,
                                        width: "60px",
                                        height: "60px"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                                        alignItems: "flex-start",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                fontWeight: "bold",
                                                color: theme.palette.whiteContainer.main,
                                                children: t("Wallet Amount")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                fontSize: "20px",
                                                fontWeight: "bold",
                                                color: theme.palette.whiteContainer.main,
                                                children: userData ? (0,_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_11__/* .getAmountWithSign */ .B9)(userData?.wallet_balance) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                                                    variant: "text",
                                                    width: "100px"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_transaction_history__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            data: data,
                            isLoading: isLoading
                        })
                    })
                ]
            })
        })
    });
};
Wallet.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wallet);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
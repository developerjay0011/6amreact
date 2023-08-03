"use strict";
(() => {
var exports = {};
exports.id = 8745;
exports.ids = [8745,6812,5405];
exports.modules = {

/***/ 25765:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ _index__WEBPACK_IMPORTED_MODULE_6__.getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _meta_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74121);
/* harmony import */ var _src_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13258);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_components_my_orders_order_details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20893);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44369);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_3__, _src_components_my_orders_order_details__WEBPACK_IMPORTED_MODULE_5__, _index__WEBPACK_IMPORTED_MODULE_6__]);
([_src_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_3__, _src_components_my_orders_order_details__WEBPACK_IMPORTED_MODULE_5__, _index__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const index = ({ configData , landingPageData  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1___default()), {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_meta_data__WEBPACK_IMPORTED_MODULE_2__["default"], {
                title: `Order details - ${configData?.business_name}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                configData: configData,
                landingPageData: landingPageData,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_my_orders_order_details__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    configData: configData
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59252:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ usePostOrderCancel)
/* harmony export */ });
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61176);
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60274);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67759);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_0__, _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__]);
([_MainApi__WEBPACK_IMPORTED_MODULE_0__, _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const postData = async (formData)=>{
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__/* .order_cancel_api */ .eE, formData);
    return data;
};
function usePostOrderCancel() {
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)("order-cancel", postData);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13878:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ useUpdatePaymentMethod)
/* harmony export */ });
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61176);
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60274);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_0__]);
_MainApi__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const updateData = async (formData)=>{
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`${_ApiRoutes__WEBPACK_IMPORTED_MODULE_2__/* .update_payment_method_api */ .Nv}`, formData);
    return data;
};
const useUpdatePaymentMethod = ()=>{
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)("update-payment-method", updateData);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5664:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ useGetRefundReasons)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67759);
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61176);
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60274);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_1__, _MainApi__WEBPACK_IMPORTED_MODULE_2__]);
([_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_1__, _MainApi__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const getData = async ()=>{
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get(_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__/* .refund_reasons_api */ .fP);
    return data;
};
const useGetRefundReasons = ()=>{
    return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)("get_refund_list", ()=>getData(), {
        enabled: false,
        onError: _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_1__/* .onErrorResponse */ .R
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 22097:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ useStoreRefundRequest)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_1__]);
_MainApi__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const postHandler = async ({ customer_reason , identity_image , id , customer_note  })=>{
    let formData = new FormData();
    formData.append("customer_reason", customer_reason);
    formData.append("customer_note", customer_note);
    formData.append("order_id", id);
    identity_image.forEach((file)=>{
        formData.append("image[]", file);
    });
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post("/api/v1/customer/order/refund-request", formData);
    return data;
};
const useStoreRefundRequest = ()=>{
    return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)("refund_request", postHandler);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1355:
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
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52468);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29404);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22021);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86201);
/* harmony import */ var _custom_dialog_confirm_CustomDialogConfirm_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87086);
/* harmony import */ var _styled_components_CustomButtons_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81029);
/* harmony import */ var _api_manage_another_formated_api_orderApi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(67019);
/* harmony import */ var _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(67759);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_6__, react_hot_toast__WEBPACK_IMPORTED_MODULE_8__, _api_manage_another_formated_api_orderApi__WEBPACK_IMPORTED_MODULE_11__, _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_12__]);
([i18next__WEBPACK_IMPORTED_MODULE_6__, react_hot_toast__WEBPACK_IMPORTED_MODULE_8__, _api_manage_another_formated_api_orderApi__WEBPACK_IMPORTED_MODULE_11__, _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const DigitalPaymentManage = ({ setModalOpenForPayment , refetchOrderDetails , refetchTrackData , id , setModalOpen  })=>{
    const { mutate: paymentMethodUpdateMutation , isLoading: orderLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation)("order-payment-method-update", _api_manage_another_formated_api_orderApi__WEBPACK_IMPORTED_MODULE_11__/* .OrderApi.FailedPaymentMethodUpdate */ .R.FailedPaymentMethodUpdate);
    const handleOnSuccess = ()=>{
        const handleSuccess = (response)=>{
            react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.toast.success(response.data.message);
            refetchOrderDetails();
            refetchTrackData();
            setModalOpenForPayment(false);
        };
        const formData = {
            order_id: id,
            _method: "put"
        };
        paymentMethodUpdateMutation(formData, {
            onSuccess: handleSuccess,
            onError: _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_12__/* .onErrorResponse */ .R
        });
    };
    const handleClose = ()=>{
        setModalOpenForPayment(false);
        setModalOpen(true);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_custom_dialog_confirm_CustomDialogConfirm_style__WEBPACK_IMPORTED_MODULE_9__/* .WrapperForCustomDialogConfirm */ .f, {
            width: "23rem",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_3___default()), {
                    id: "alert-dialog-title",
                    sx: {
                        padding: "10px 24px"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                        textAlign: "center",
                        variant: "h6",
                        children: (0,i18next__WEBPACK_IMPORTED_MODULE_6__.t)("Switch Your payment method ")
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_5___default()), {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        spacing: {
                            xs: 1,
                            sm: 2,
                            md: 3
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomButtons_style__WEBPACK_IMPORTED_MODULE_10__/* .CustomButtonSuccess */ .p1, {
                                loading: orderLoading,
                                variant: "contained",
                                onClick: handleOnSuccess,
                                width: "14rem",
                                children: (0,i18next__WEBPACK_IMPORTED_MODULE_6__.t)("Switch to Cash on Delivery")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomButtons_style__WEBPACK_IMPORTED_MODULE_10__/* .CustomButtonCancel */ .tZ, {
                                width: "14.5rem",
                                variant: "contained",
                                onClick: handleClose,
                                children: (0,i18next__WEBPACK_IMPORTED_MODULE_6__.t)("Cancel Order")
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DigitalPaymentManage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 76866:
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
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57987);
/* harmony import */ var _myorders_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30700);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45269);
/* harmony import */ var _landing_page_hero_section_HeroSection_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77591);
/* harmony import */ var _date_CustomFormatedDateTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17446);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_3__]);
react_i18next__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const TopDetails = ({ data , trackData  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_myorders_style__WEBPACK_IMPORTED_MODULE_4__/* .HeadingBox */ .S, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_5__/* .CustomStackFullWidth */ .Xw, {
            alignItems: "center",
            justifyContent: "center",
            children: [
                data ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                    sx: {
                        color: "primary.main",
                        fontSize: "36px",
                        fontWeight: "600"
                    },
                    children: [
                        t("Order"),
                        " # ",
                        data?.[0]?.order_id ? data?.[0]?.order_id : data?.id
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                    variant: "text",
                    width: "200px",
                    height: "50px"
                }),
                data ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_landing_page_hero_section_HeroSection_style__WEBPACK_IMPORTED_MODULE_6__/* .CustomTypography */ .ZT, {
                    sx: {
                        color: (theme)=>theme.palette.neutral[400]
                    },
                    children: [
                        t("Order placed"),
                        " :",
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_date_CustomFormatedDateTime__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            date: data?.[0]?.created_at
                        })
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                    variant: "text",
                    width: "240px",
                    height: "20px"
                }),
                trackData?.data?.scheduled === 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_landing_page_hero_section_HeroSection_style__WEBPACK_IMPORTED_MODULE_6__/* .CustomTypography */ .ZT, {
                    children: [
                        t("Order scheduled"),
                        " :",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_date_CustomFormatedDateTime__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            date: trackData?.data?.schedule_at
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopDetails);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20893:
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
/* harmony import */ var _parcel_order_ParcelOrder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30875);
/* harmony import */ var _other_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40741);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_manage_hooks_react_query_order_useGetOrderDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19545);
/* harmony import */ var _api_manage_hooks_react_query_order_useGetTrackOrderData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24073);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_parcel_order_ParcelOrder__WEBPACK_IMPORTED_MODULE_3__, _other_order__WEBPACK_IMPORTED_MODULE_4__, _api_manage_hooks_react_query_order_useGetOrderDetails__WEBPACK_IMPORTED_MODULE_6__, _api_manage_hooks_react_query_order_useGetTrackOrderData__WEBPACK_IMPORTED_MODULE_7__]);
([_parcel_order_ParcelOrder__WEBPACK_IMPORTED_MODULE_3__, _other_order__WEBPACK_IMPORTED_MODULE_4__, _api_manage_hooks_react_query_order_useGetOrderDetails__WEBPACK_IMPORTED_MODULE_6__, _api_manage_hooks_react_query_order_useGetTrackOrderData__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const OrderDetails = ({ configData  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { id  } = router.query;
    const { refetch , data , isRefetching  } = (0,_api_manage_hooks_react_query_order_useGetOrderDetails__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(id);
    const { refetch: refetchTrackOrder , data: trackOrderData  } = (0,_api_manage_hooks_react_query_order_useGetTrackOrderData__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(id);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        refetch();
        refetchTrackOrder();
    }, [
        id
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: !isRefetching && data && data.module_type === "parcel" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_parcel_order_ParcelOrder__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            configData: configData,
            data: data,
            trackOrderData: trackOrderData,
            id: id,
            refetch: refetch,
            refetchTrackOrder: refetchTrackOrder
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_other_order__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            configData: configData,
            data: data,
            refetch: refetch
        })
    });
};
OrderDetails.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderDetails);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48221:
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
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45269);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89113);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_5__]);
_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const getItemsPrice = (items)=>{
    const productPrice = items.reduce((total, product)=>product.price * product.quantity + total, 0);
    return productPrice;
};
const getAddOnsPrice = (items)=>{
    let productAddonsPrice = items.reduce((total, product)=>(product.add_ons.length > 0 ? product.add_ons.reduce((cTotal, cProduct)=>cProduct.price * cProduct.quantity + cTotal, 0) : 0) + total, 0);
    return productAddonsPrice;
};
const getSubTotalPrice = (dataList)=>{
    return getItemsPrice(dataList) + getAddOnsPrice(dataList);
};
function getRestaurantValue(data, key) {
    return data?.[0]?.item_details?.[key];
}
const OrderCalculation = ({ data , t , trackOrderData  })=>{
    const { configData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.configData);
    const handleExcludedVatTotalAmount = ()=>{
        return (0,_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_5__/* .getAmountWithSign */ .B9)(trackOrderData?.order_amount - trackOrderData?.total_tax_amount);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
        spacing: 1,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
                direction: "row",
                alignItems: "center",
                justifyContent: "space-between",
                spacing: 2,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        fontWeight: "bold",
                        children: t("Items Price")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        fontWeight: "bold",
                        children: data && data?.length > 0 && (0,_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_5__/* .getAmountWithSign */ .B9)(getItemsPrice(data))
                    })
                ]
            }),
            trackOrderData?.module?.module_type === "food" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
                direction: "row",
                alignItems: "center",
                justifyContent: "space-between",
                spacing: 2,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        fontWeight: "bold",
                        children: [
                            " ",
                            t("Addons Price")
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        fontWeight: "bold",
                        children: data && data?.length > 0 && (0,_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_5__/* .getAmountWithSign */ .B9)(getAddOnsPrice(data))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Divider, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
                direction: "row",
                alignItems: "center",
                justifyContent: "space-between",
                spacing: 2,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        fontWeight: "bold",
                        children: [
                            " ",
                            t("Subtotal")
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        fontWeight: "bold",
                        children: data && data?.length > 0 && (0,_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_5__/* .getAmountWithSign */ .B9)(getSubTotalPrice(data))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
                direction: "row",
                alignItems: "center",
                justifyContent: "space-between",
                spacing: 2,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        fontWeight: "bold",
                        children: [
                            " ",
                            t("Discount")
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        fontWeight: "bold",
                        children: [
                            "-",
                            trackOrderData && (0,_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_5__/* .getAmountWithSign */ .B9)(trackOrderData?.store_discount_amount) ? (0,_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_5__/* .getAmountWithSign */ .B9)(trackOrderData?.store_discount_amount) : 0
                        ]
                    })
                ]
            }),
            Number.parseInt(trackOrderData?.coupon_discount_amount) !== 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
                direction: "row",
                alignItems: "center",
                justifyContent: "space-between",
                spacing: 2,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        fontWeight: "bold",
                        children: [
                            " ",
                            t("Coupon Discount")
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        fontWeight: "bold",
                        children: [
                            "-",
                            trackOrderData && (0,_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_5__/* .getAmountWithSign */ .B9)(trackOrderData?.coupon_discount_amount)
                        ]
                    })
                ]
            }),
            configData?.tax_included === 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
                direction: "row",
                alignItems: "center",
                justifyContent: "space-between",
                spacing: 2,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        fontWeight: "bold",
                        children: [
                            " ",
                            t("VAT"),
                            "(",
                            getRestaurantValue(data, "tax"),
                            "%)"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        fontWeight: "bold",
                        children: trackOrderData && (0,_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_5__/* .getAmountWithSign */ .B9)(trackOrderData?.total_tax_amount)
                    })
                ]
            }),
            Number.parseInt(trackOrderData?.dm_tips) !== 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
                direction: "row",
                alignItems: "center",
                justifyContent: "space-between",
                spacing: 2,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        fontWeight: "bold",
                        children: t("Delivery Man Tips")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        fontWeight: "bold",
                        children: trackOrderData && (0,_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_5__/* .getAmountWithSign */ .B9)(trackOrderData?.dm_tips)
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
                direction: "row",
                alignItems: "center",
                justifyContent: "space-between",
                spacing: 2,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        fontWeight: "bold",
                        children: t("Delivery fee")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        fontWeight: "bold",
                        children: trackOrderData && (0,_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_5__/* .getAmountWithSign */ .B9)(trackOrderData?.delivery_charge)
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                width: "100%",
                sx: {
                    mt: "20px",
                    borderBottom: (theme)=>`2px solid ${theme.palette.neutral[300]}`
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
                direction: "row",
                alignItems: "center",
                justifyContent: "space-between",
                spacing: 2,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        fontWeight: "bold",
                        color: "primary.main",
                        children: t("Total")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        fontWeight: "bold",
                        children: trackOrderData && configData?.tax_included === 1 ? (0,_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_5__/* .getAmountWithSign */ .B9)(trackOrderData?.order_amount) : handleExcludedVatTotalAmount()
                    })
                ]
            })
        ]
    });
};
OrderCalculation.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderCalculation);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48752:
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
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57987);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86201);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45269);
/* harmony import */ var _api_manage_hooks_react_query_order_usePostOrderCancel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59252);
/* harmony import */ var _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67759);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86390);
/* harmony import */ var _DigitalPaymentManage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1355);
/* harmony import */ var _CenacelOrder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(48746);
/* harmony import */ var _api_manage_hooks_react_query_order_useGetOrderCancelReason__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(80591);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _api_manage_hooks_react_query_googleApi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(91326);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_4__, react_hot_toast__WEBPACK_IMPORTED_MODULE_6__, _api_manage_hooks_react_query_order_usePostOrderCancel__WEBPACK_IMPORTED_MODULE_9__, _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_10__, _DigitalPaymentManage__WEBPACK_IMPORTED_MODULE_12__, _CenacelOrder__WEBPACK_IMPORTED_MODULE_13__, _api_manage_hooks_react_query_order_useGetOrderCancelReason__WEBPACK_IMPORTED_MODULE_14__, _api_manage_hooks_react_query_googleApi__WEBPACK_IMPORTED_MODULE_16__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_4__, react_hot_toast__WEBPACK_IMPORTED_MODULE_6__, _api_manage_hooks_react_query_order_usePostOrderCancel__WEBPACK_IMPORTED_MODULE_9__, _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_10__, _DigitalPaymentManage__WEBPACK_IMPORTED_MODULE_12__, _CenacelOrder__WEBPACK_IMPORTED_MODULE_13__, _api_manage_hooks_react_query_order_useGetOrderCancelReason__WEBPACK_IMPORTED_MODULE_14__, _api_manage_hooks_react_query_googleApi__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const OrderDetailsBottom = ({ id , refetchOrderDetails , refetchTrackData , trackData  })=>{
    const [openModal, setOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [openModalForPayment, setModalOpenForPayment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [cancelReason, setCancelReason] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.useTheme)();
    const currentLatLng = JSON.parse(window.localStorage.getItem("currentLatLng"));
    const { data: zoneData  } = (0,react_query__WEBPACK_IMPORTED_MODULE_15__.useQuery)([
        "zoneId",
        location
    ], async ()=>_api_manage_hooks_react_query_googleApi__WEBPACK_IMPORTED_MODULE_16__/* .GoogleApi.getZoneId */ .K.getZoneId(currentLatLng), {
        retry: 1
    });
    const { data: cancelReasonsData , refetch  } = (0,_api_manage_hooks_react_query_order_useGetOrderCancelReason__WEBPACK_IMPORTED_MODULE_14__/* .useGetOrderCancelReason */ .B)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        refetch().then();
    }, []);
    const { mutate: orderCancelMutation , isLoading: orderLoading  } = (0,_api_manage_hooks_react_query_order_usePostOrderCancel__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const handleTrackOrderClick = ()=>{
        next_router__WEBPACK_IMPORTED_MODULE_5___default().push(`/track-order/${id}`, undefined, {
            shallow: true
        });
    };
    const handleOnSuccess = ()=>{
        if (!cancelReason) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.error("Please select a cancellation reason");
        } else {
            const handleSuccess = (response)=>{
                refetchOrderDetails();
                refetchTrackData();
                setOpenModal(false);
                react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.success(response.message);
            };
            const formData = {
                order_id: id,
                reason: cancelReason,
                _method: "put"
            };
            orderCancelMutation(formData, {
                onSuccess: handleSuccess,
                onError: _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_10__/* .onErrorResponse */ .R
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_8__/* .CustomPaperBigCard */ .iD, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    container: true,
                    spacing: 2,
                    children: [
                        trackData && (trackData?.order_status === "pending" || trackData?.order_status === "confirmed" || trackData?.order_status === "processing" || trackData?.order_status === "accepted" || trackData?.order_status === "picked_up" || trackData?.order_status === "handover") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            xs: 12,
                            md: trackData?.order_status === "confirmed" || trackData?.order_status !== "pending" ? 12 : 6,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                variant: "contained",
                                onClick: handleTrackOrderClick,
                                fullWidth: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    variant: "h6",
                                    children: t("Track Order")
                                })
                            })
                        }),
                        trackData && trackData?.payment_method === "digital_payment" && trackData?.payment_status === "unpaid" && zoneData?.data?.zone_data?.[0]?.cash_on_delivery ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            xs: 12,
                            sm: 6,
                            md: 6,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                variant: "contained",
                                fullWidth: true,
                                onClick: ()=>setModalOpenForPayment(true),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    variant: "h6",
                                    children: t("Switch to Cash on Delivery")
                                })
                            })
                        }) : trackData?.order_status === "pending" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            xs: 12,
                            sm: 6,
                            md: 6,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                variant: "contained",
                                fullWidth: true,
                                onClick: ()=>setOpenModal(true),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    variant: "h6",
                                    children: t("Cancel Order")
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modal__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                openModal: openModal,
                setModalOpen: setOpenModal,
                handleClose: ()=>setOpenModal(false),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CenacelOrder__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    cancelReason: cancelReason,
                    setCancelReason: setCancelReason,
                    cancelReasonsData: cancelReasonsData,
                    setModalOpen: setOpenModal,
                    handleOnSuccess: handleOnSuccess,
                    orderLoading: orderLoading
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modal__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                openModal: openModalForPayment,
                setModalOpen: setModalOpenForPayment,
                handleClose: ()=>setModalOpenForPayment(false),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DigitalPaymentManage__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    setModalOpenForPayment: setModalOpenForPayment,
                    setModalOpen: setOpenModal,
                    refetchOrderDetails: refetchOrderDetails,
                    refetchTrackData: refetchTrackData,
                    id: trackData?.id
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderDetailsBottom);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62028:
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
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94172);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(simplebar_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var simplebar_react_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48710);
/* harmony import */ var simplebar_react_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(simplebar_react_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CustomImageContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58861);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89113);
/* harmony import */ var _OrderCalculation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48221);
/* harmony import */ var _Shimmer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11422);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_7__, _OrderCalculation__WEBPACK_IMPORTED_MODULE_8__, _Shimmer__WEBPACK_IMPORTED_MODULE_9__]);
([_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_7__, _OrderCalculation__WEBPACK_IMPORTED_MODULE_8__, _Shimmer__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const getAddOnsNames = (addOns)=>{
    const names = addOns.map((item, index)=>`${addOns[0].name}(${addOns[0].quantity})${index !== addOns.length - 1 ? "," : ""}`);
    return names;
};
const OrderSummery = (props)=>{
    const { trackOrderData , configData , t , data  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_6__.Box, {
        children: trackOrderData ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
            container: true,
            mt: "1rem",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    item: true,
                    xs: 12,
                    md: 12,
                    align: "center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        fontWeight: "bold",
                        children: t("Order Summery")
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    item: true,
                    xs: 12,
                    md: 12,
                    align: "center",
                    mt: "1rem",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((simplebar_react__WEBPACK_IMPORTED_MODULE_3___default()), {
                            style: {
                                maxHeight: "300px"
                            },
                            children: data && data?.length > 0 && data?.map((product)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                    container: true,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    md: 12,
                                    xs: 12,
                                    spacing: {
                                        xs: 1
                                    },
                                    mb: "1rem",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                            item: true,
                                            md: 3,
                                            xs: 4,
                                            sm: 2,
                                            children: product.item_campaign_id ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImageContainer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                src: `${configData?.base_urls?.campaign_image_url}/${product.item_details.image}`,
                                                height: "90px",
                                                maxWidth: "90px",
                                                width: "100%",
                                                loading: "lazy",
                                                smHeight: "50px"
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImageContainer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                src: `${configData?.base_urls?.item_image_url}/${product.item_details.image}`,
                                                height: "90px",
                                                maxWidth: "90px",
                                                width: "100%",
                                                loading: "lazy",
                                                smHeight: "70px",
                                                borderRadius: ".7rem"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                            item: true,
                                            md: 9,
                                            xs: 8,
                                            sm: 8,
                                            align: "left",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                    children: product?.item_details?.name
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                    children: [
                                                        t("Qty"),
                                                        ": ",
                                                        product?.quantity
                                                    ]
                                                }),
                                                product?.add_ons.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                    children: [
                                                        t("Addons"),
                                                        ": ",
                                                        getAddOnsNames(product?.add_ons)
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                    color: "primary.main",
                                                    fontSize: "16px",
                                                    fontWeight: "bold",
                                                    children: (0,_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_7__/* .getAmountWithSign */ .B9)(product?.item_details?.price)
                                                })
                                            ]
                                        })
                                    ]
                                }, product?.id))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            md: 12,
                            xs: 12,
                            mb: "10px",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                                width: "100%",
                                sx: {
                                    mt: "20px",
                                    borderBottom: (theme)=>`2px solid ${theme.palette.neutral[300]}`
                                }
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            xs: 12,
                            md: 12,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OrderCalculation__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                data: data,
                                t: t,
                                trackOrderData: trackOrderData
                            })
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shimmer__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
    });
};
OrderSummery.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderSummery);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42045:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57987);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86201);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67759);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45269);
/* harmony import */ var _api_manage_hooks_react_query_payment_method_useUpdatePaymentMethod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13878);
/* harmony import */ var _landing_page_ComponentOne__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47922);
/* harmony import */ var _custom_dialog_confirm_CustomDialogConfirm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2922);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_5__, _api_manage_hooks_react_query_payment_method_useUpdatePaymentMethod__WEBPACK_IMPORTED_MODULE_7__, _landing_page_ComponentOne__WEBPACK_IMPORTED_MODULE_8__, _custom_dialog_confirm_CustomDialogConfirm__WEBPACK_IMPORTED_MODULE_9__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_5__, _api_manage_hooks_react_query_payment_method_useUpdatePaymentMethod__WEBPACK_IMPORTED_MODULE_7__, _landing_page_ComponentOne__WEBPACK_IMPORTED_MODULE_8__, _custom_dialog_confirm_CustomDialogConfirm__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const PaymentUpdate = ({ id , refetchOrderDetails , refetchTrackData , trackData  })=>{
    const [openModal, setOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const { mutate: paymentMethodUpdateMutation , isLoading: orderLoading  } = (0,_api_manage_hooks_react_query_payment_method_useUpdatePaymentMethod__WEBPACK_IMPORTED_MODULE_7__/* .useUpdatePaymentMethod */ .e)();
    const handleOnSuccess = ()=>{
        const handleSuccess = (response)=>{
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success(response.message);
            refetchOrderDetails();
            refetchTrackData();
        };
        const formData = {
            order_id: id,
            _method: "put"
        };
        paymentMethodUpdateMutation(formData, {
            onSuccess: handleSuccess,
            onError: _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_5__/* .onErrorResponse */ .R
        });
        setOpenModal(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_6__/* .CustomPaperBigCard */ .iD, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Button, {
                    variant: "contained",
                    onClick: ()=>setOpenModal(true),
                    fullWidth: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                        variant: "h6",
                        children: t("Switch to cash on delivery")
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_custom_dialog_confirm_CustomDialogConfirm__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                dialogTexts: "Are you sure you want to switch this order to Cash On Delivery?",
                open: openModal,
                onClose: ()=>setOpenModal(false),
                onSuccess: handleOnSuccess
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentUpdate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 55008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ other_order_RefundDetails)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@mui/system"
var system_ = __webpack_require__(97986);
// EXTERNAL MODULE: ./src/components/CustomImageContainer.js + 1 modules
var CustomImageContainer = __webpack_require__(58861);
// EXTERNAL MODULE: ./src/styled-components/CustomStyles.style.js
var CustomStyles_style = __webpack_require__(45269);
// EXTERNAL MODULE: ./src/components/modal/index.js
var modal = __webpack_require__(86390);
// EXTERNAL MODULE: ./src/components/chat/ImagePreviewOnModal.js
var ImagePreviewOnModal = __webpack_require__(73369);
;// CONCATENATED MODULE: ./src/components/my-orders/order-details/other-order/Refund.js


// import { CustomStackFullWidth } from '../../styled-components/CustomStyles.style'

// import CustomImageContainer from '../CustomImageContainer'

// import ImagePreviewOnModal from '../image-preview-on-modal'
// import CustomModal from '../custom-modal/CustomModal'





const Refund = (props)=>{
    const { t , title , note , image , reason , configData  } = props;
    const [openModal, setOpenModal] = (0,external_react_.useState)(false);
    const [selectedImage, setSelectedImage] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        selectedImage && setOpenModal(true);
    }, [
        selectedImage
    ]);
    const handleImageClick = (item)=>{
        setSelectedImage(item);
    };
    const handleModalClose = (value)=>{
        setOpenModal(value);
        setSelectedImage(null);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CustomStyles_style/* CustomStackFullWidth */.Xw, {
        spacing: 0.5,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                sx: {
                    fontWeight: "500",
                    textTransform: "capitalize"
                },
                children: t(title)
            }),
            reason && /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                sx: {
                    color: (theme)=>theme.palette.neutral[400]
                },
                children: reason
            }),
            note && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                sx: {
                    color: (theme)=>theme.palette.neutral[400]
                },
                children: [
                    reason && t("Note:-"),
                    " ",
                    note
                ]
            }),
            image && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CustomStyles_style/* CustomStackFullWidth */.Xw, {
                direction: "row",
                alignItems: "center",
                gap: 1,
                flexWrap: "wrap",
                children: [
                    JSON.parse(image)?.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(system_.Box, {
                            onClick: ()=>handleImageClick(item),
                            children: /*#__PURE__*/ jsx_runtime_.jsx(CustomImageContainer/* default */.Z, {
                                src: `${configData?.base_urls?.refund_image_url}/${item}`,
                                alt: note,
                                height: "100px",
                                width: "100px"
                            })
                        }, index)),
                    /*#__PURE__*/ jsx_runtime_.jsx(modal/* default */.Z, {
                        openModal: openModal,
                        handleClose: handleModalClose,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ImagePreviewOnModal/* default */.Z, {
                            modalImage: `${configData?.base_urls?.refund_image_url}/${selectedImage}`,
                            handleModalClose: handleModalClose
                        })
                    })
                ]
            })
        ]
    });
};
Refund.propTypes = {};
/* harmony default export */ const other_order_Refund = (Refund);

;// CONCATENATED MODULE: ./src/components/my-orders/order-details/other-order/RefundDetails.js





const RefundDetails = ({ trackOrderData , configData , t  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: trackOrderData?.refund && trackOrderData?.order_status === "refund_request_canceled" ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
            item: true,
            xs: 12,
            align: "left",
            children: /*#__PURE__*/ jsx_runtime_.jsx(other_order_Refund, {
                t: t,
                title: "Refund cancellation note:",
                note: trackOrderData.refund?.admin_note,
                configData: configData
            })
        }) : trackOrderData?.order_status === "refund_requested" && /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
            item: true,
            xs: 12,
            align: "left",
            children: /*#__PURE__*/ jsx_runtime_.jsx(other_order_Refund, {
                t: t,
                title: "Refund request note:",
                note: trackOrderData?.refund?.customer_note,
                reason: trackOrderData?.refund?.customer_reason,
                image: trackOrderData?.refund?.image,
                configData: configData
            })
        })
    });
};
RefundDetails.propTypes = {};
/* harmony default export */ const other_order_RefundDetails = (RefundDetails);


/***/ }),

/***/ 3109:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57987);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8611);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52468);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29404);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1094);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(76829);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(75609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _custom_dialog_confirm_CustomDialogConfirm_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87086);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(45269);
/* harmony import */ var _custom_select_CustomSelectWithFormik__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(53390);
/* harmony import */ var _form_fields_CustomTextFieldWithFormik__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(42492);
/* harmony import */ var _multi_file_uploader_MultiFileUploader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(17787);
/* harmony import */ var _api_manage_hooks_react_query_refund_request_useGetRefundReasons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5664);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_2__, _custom_select_CustomSelectWithFormik__WEBPACK_IMPORTED_MODULE_14__, _multi_file_uploader_MultiFileUploader__WEBPACK_IMPORTED_MODULE_16__, _api_manage_hooks_react_query_refund_request_useGetRefundReasons__WEBPACK_IMPORTED_MODULE_17__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_2__, _custom_select_CustomSelectWithFormik__WEBPACK_IMPORTED_MODULE_14__, _multi_file_uploader_MultiFileUploader__WEBPACK_IMPORTED_MODULE_16__, _api_manage_hooks_react_query_refund_request_useGetRefundReasons__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const acceptedFileInputFormat = "application/pdf,image/*,text/plain,.doc, .docx,.txt";
const supportedFormatMultiImages = [
    "jpg",
    "jpeg",
    "gif",
    "png",
    "pdf",
    "doc",
    "docx",
    "deb"
];
const RefundModal = (props)=>{
    const { open , onClick , onClose , onSuccess , dialogTexts , formSubmit , refundIsLoading  } = props;
    const { data: reasonsData , refetch  } = (0,_api_manage_hooks_react_query_refund_request_useGetRefundReasons__WEBPACK_IMPORTED_MODULE_17__/* .useGetRefundReasons */ .e)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        refetch();
    }, []);
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const RefundRequestFormik = (0,formik__WEBPACK_IMPORTED_MODULE_9__.useFormik)({
        initialValues: {
            customer_reason: "",
            customer_note: "",
            identity_image: ""
        },
        validationSchema: yup__WEBPACK_IMPORTED_MODULE_11__.object({
            customer_reason: yup__WEBPACK_IMPORTED_MODULE_11__.string().required(t("Please select a reason"))
        }),
        // validationSchema: ValidationSchemaForRestaurant(),
        onSubmit: async (values, helpers)=>{
            try {
                formSubmitOnSuccess(values);
            } catch (err) {}
        }
    });
    let reasonsOption = [];
    if (reasonsData && reasonsData?.refund_reasons?.length > 0) {
        reasonsData?.refund_reasons?.forEach((reason)=>{
            let obj = {
                label: reason.reason,
                value: reason.reason
            };
            reasonsOption.push(obj);
        });
    }
    const noteHandler = (value)=>{
        RefundRequestFormik.setFieldValue("customer_note", value);
    };
    const reasonsHandler = (value)=>{
        RefundRequestFormik.setFieldValue("customer_reason", value);
    };
    const fileImagesHandler = (files)=>{
        RefundRequestFormik.setFieldValue("identity_image", files);
    };
    const formSubmitOnSuccess = (values)=>{
        formSubmit(values);
    };
    // const imageUrl = `${productImageUrl}/${review.food_image}`
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3___default()), {
        open: open,
        onClose: onClose,
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_custom_dialog_confirm_CustomDialogConfirm_style__WEBPACK_IMPORTED_MODULE_12__/* .WrapperForCustomDialogConfirm */ .f, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_13__/* .CustomStackFullWidth */ .Xw, {
                spacing: 1,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                        alignItems: "start",
                        justifyContent: "center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5___default()), {
                            id: "alert-dialog-title",
                            sx: {
                                padding: "10px 24px"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                                children: t("What’s Wrong With This Order? ")
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8___default()), {
                        sx: {
                            padding: "10px 24px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_13__/* .CustomStackFullWidth */ .Xw, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                noValidate: true,
                                onSubmit: RefundRequestFormik.handleSubmit,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                    spacing: 2,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_13__/* .CustomStackFullWidth */ .Xw, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_custom_select_CustomSelectWithFormik__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                selectFieldData: reasonsOption,
                                                inputLabel: t("Select an option"),
                                                passSelectedValue: reasonsHandler,
                                                touched: RefundRequestFormik.touched.customer_reason,
                                                errors: RefundRequestFormik.errors.customer_reason,
                                                fieldProps: RefundRequestFormik.getFieldProps("customer_reason")
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_13__/* .CustomStackFullWidth */ .Xw, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_fields_CustomTextFieldWithFormik__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                type: "text",
                                                label: t("Note"),
                                                touched: RefundRequestFormik.touched.customer_note,
                                                errors: RefundRequestFormik.errors.customer_note,
                                                fieldProps: RefundRequestFormik.getFieldProps("customer_note"),
                                                onChangeHandler: noteHandler,
                                                value: RefundRequestFormik.values.customer_note,
                                                multiline: "true",
                                                rows: "2"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_13__/* .CustomStackFullWidth */ .Xw, {
                                            paddingTop: "20px",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_multi_file_uploader_MultiFileUploader__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                                fileImagesHandler: fileImagesHandler,
                                                totalFiles: RefundRequestFormik.values.identity_image,
                                                maxFileSize: 20000000,
                                                supportedFileFormats: supportedFormatMultiImages,
                                                acceptedFileInputFormat: acceptedFileInputFormat,
                                                labelText: t("File Upload"),
                                                width: "8rem",
                                                gridControl: "true"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_13__/* .CustomStackFullWidth */ .Xw, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                sx: {
                                                    padding: "0px"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    width: "100%",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                        type: "submit",
                                                        variant: "contained",
                                                        sx: {
                                                            width: "100%"
                                                        },
                                                        loading: refundIsLoading,
                                                        children: t("Submit Refund Request")
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
};
RefundModal.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RefundModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11422:
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
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94172);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(simplebar_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CustomImageContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58861);
/* harmony import */ var _helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89113);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _OrderCalculation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48221);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57987);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45269);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_5__, _OrderCalculation__WEBPACK_IMPORTED_MODULE_7__, react_i18next__WEBPACK_IMPORTED_MODULE_8__]);
([_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_5__, _OrderCalculation__WEBPACK_IMPORTED_MODULE_7__, react_i18next__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Shimmer = ()=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        container: true,
        mt: "1rem",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                item: true,
                xs: 12,
                md: 12,
                align: "center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                    fontWeight: "bold",
                    children: t("Order Summery")
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                item: true,
                xs: 12,
                md: 12,
                align: "center",
                mt: "1rem",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((simplebar_react__WEBPACK_IMPORTED_MODULE_3___default()), {
                        style: {
                            maxHeight: "300px"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            container: true,
                            justifyContent: "center",
                            alignItems: "center",
                            md: 12,
                            xs: 12,
                            spacing: {
                                xs: 1
                            },
                            mb: "1rem",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                    item: true,
                                    md: 3,
                                    xs: 4,
                                    sm: 2,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                        width: "80%",
                                        height: "130px",
                                        variant: "text"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                    item: true,
                                    md: 9,
                                    xs: 8,
                                    sm: 8,
                                    align: "left",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                            width: "100px",
                                            variant: "text"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                            width: "100px",
                                            variant: "text"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                            width: "100px",
                                            variant: "text"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        item: true,
                        md: 12,
                        xs: 12,
                        mb: "10px",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                            width: "100%",
                            sx: {
                                mt: "20px",
                                borderBottom: (theme)=>`2px solid ${theme.palette.neutral[300]}`
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        item: true,
                        xs: 12,
                        md: 12,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_9__/* .CustomStackFullWidth */ .Xw, {
                            spacing: 1,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_9__/* .CustomStackFullWidth */ .Xw, {
                                    direction: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    spacing: 2,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                            fontWeight: "bold",
                                            children: t("Items Price")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                            variant: "text",
                                            width: "100px"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_9__/* .CustomStackFullWidth */ .Xw, {
                                    direction: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    spacing: 2,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                            fontWeight: "bold",
                                            children: [
                                                " ",
                                                t("Addons Price")
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                            variant: "text",
                                            width: "100px"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {}),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_9__/* .CustomStackFullWidth */ .Xw, {
                                    direction: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    spacing: 2,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                            fontWeight: "bold",
                                            children: [
                                                " ",
                                                t("Subtotal")
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                            variant: "text",
                                            width: "100px"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_9__/* .CustomStackFullWidth */ .Xw, {
                                    direction: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    spacing: 2,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                            fontWeight: "bold",
                                            children: [
                                                " ",
                                                t("Discount")
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                            variant: "text",
                                            width: "100px"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_9__/* .CustomStackFullWidth */ .Xw, {
                                    direction: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    spacing: 2,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                            fontWeight: "bold",
                                            children: [
                                                " ",
                                                t("Coupon Discount")
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                            variant: "text",
                                            width: "100px"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_9__/* .CustomStackFullWidth */ .Xw, {
                                    direction: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    spacing: 2,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                            fontWeight: "bold",
                                            children: t("VAT")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                            variant: "text",
                                            width: "100px"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_9__/* .CustomStackFullWidth */ .Xw, {
                                    direction: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    spacing: 2,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                            fontWeight: "bold",
                                            children: t("Delivery man tips")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                            variant: "text",
                                            width: "100px"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_9__/* .CustomStackFullWidth */ .Xw, {
                                    direction: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    spacing: 2,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                            fontWeight: "bold",
                                            children: t("Delivery fee")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                            variant: "text",
                                            width: "100px"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                                    width: "100%",
                                    sx: {
                                        mt: "20px",
                                        borderBottom: (theme)=>`2px solid ${theme.palette.neutral[300]}`
                                    }
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_9__/* .CustomStackFullWidth */ .Xw, {
                                    direction: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    spacing: 2,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                            fontWeight: "bold",
                                            color: "primary.main",
                                            children: t("Total")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                            variant: "text",
                                            width: "100px"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shimmer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 61727:
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
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _myorders_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30700);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CustomImageContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58861);
/* harmony import */ var _mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77849);
/* harmony import */ var _mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_Chat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54242);
/* harmony import */ var _mui_icons_material_Chat__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Chat__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45269);











const storeDetails = (props)=>{
    const { trackOrderData , configData , t  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_myorders_style__WEBPACK_IMPORTED_MODULE_4__/* .InformationGrid */ .vY, {
        container: true,
        md: 12,
        xs: 12,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                item: true,
                md: 12,
                xs: 12,
                align: "left",
                mb: "1rem",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                    fontWeight: "bold",
                    children: t("Store Information")
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                item: true,
                md: 3.5,
                sm: 4,
                xs: 12,
                children: trackOrderData && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImageContainer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    src: `${configData?.base_urls?.store_cover_photo_url}/${trackOrderData?.store?.cover_photo}`,
                    height: "120px",
                    borderRadius: ".5rem"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                item: true,
                md: 7.5,
                sm: 8,
                xs: 12,
                ml: "1rem",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                        children: trackOrderData && trackOrderData?.store?.name
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                        sx: {
                            fontWeight: "bold"
                        },
                        children: [
                            trackOrderData && trackOrderData?.store?.rating_count,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_7___default()), {
                                sx: {
                                    fontSize: "16px",
                                    color: (theme)=>theme.palette.primary.main
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                        children: [
                            t("Address"),
                            " : ",
                            trackOrderData && trackOrderData?.store?.address
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_10__/* .CustomStackFullWidth */ .Xw, {
                        alignItems: "flex-end",
                        mt: "1rem",
                        children: trackOrderData && trackOrderData?.order_status === "pending" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                            href: {
                                pathname: "/chatting",
                                query: {
                                    type: "vendor",
                                    id: trackOrderData?.store?.vendor_id,
                                    routeName: "vendor_id",
                                    chatFrom: "true"
                                }
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Chat__WEBPACK_IMPORTED_MODULE_9___default()), {
                                sx: {
                                    height: 25,
                                    width: 25,
                                    color: (theme)=>theme.palette.primary.main
                                }
                            })
                        })
                    })
                ]
            })
        ]
    });
};
storeDetails.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storeDetails);


/***/ }),

/***/ 40741:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57987);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45269);
/* harmony import */ var _api_manage_hooks_react_query_order_useGetTrackOrderData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24073);
/* harmony import */ var _TopDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76866);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _myorders_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30700);
/* harmony import */ var _helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89113);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _RefundDetails__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(55008);
/* harmony import */ var _StoreDetails__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(61727);
/* harmony import */ var _OrderSummery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(62028);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Map_map_style__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(76714);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _OrderDetailsBottom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(48752);
/* harmony import */ var _PaymentUpdate__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(42045);
/* harmony import */ var _RefundModal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3109);
/* harmony import */ var _prescription_order_PrescriptionOrderSummery__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(45007);
/* harmony import */ var _api_manage_hooks_react_query_refund_request_useStoreRefundRequest__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(22097);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(86201);
/* harmony import */ var _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(67759);
/* harmony import */ var _singleOrderAttachment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(47837);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_3__, _api_manage_hooks_react_query_order_useGetTrackOrderData__WEBPACK_IMPORTED_MODULE_5__, _TopDetails__WEBPACK_IMPORTED_MODULE_6__, _helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_9__, _OrderSummery__WEBPACK_IMPORTED_MODULE_13__, _OrderDetailsBottom__WEBPACK_IMPORTED_MODULE_17__, _PaymentUpdate__WEBPACK_IMPORTED_MODULE_18__, _RefundModal__WEBPACK_IMPORTED_MODULE_19__, _prescription_order_PrescriptionOrderSummery__WEBPACK_IMPORTED_MODULE_20__, _api_manage_hooks_react_query_refund_request_useStoreRefundRequest__WEBPACK_IMPORTED_MODULE_21__, react_hot_toast__WEBPACK_IMPORTED_MODULE_22__, _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_23__, _singleOrderAttachment__WEBPACK_IMPORTED_MODULE_24__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_3__, _api_manage_hooks_react_query_order_useGetTrackOrderData__WEBPACK_IMPORTED_MODULE_5__, _TopDetails__WEBPACK_IMPORTED_MODULE_6__, _helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_9__, _OrderSummery__WEBPACK_IMPORTED_MODULE_13__, _OrderDetailsBottom__WEBPACK_IMPORTED_MODULE_17__, _PaymentUpdate__WEBPACK_IMPORTED_MODULE_18__, _RefundModal__WEBPACK_IMPORTED_MODULE_19__, _prescription_order_PrescriptionOrderSummery__WEBPACK_IMPORTED_MODULE_20__, _api_manage_hooks_react_query_refund_request_useStoreRefundRequest__WEBPACK_IMPORTED_MODULE_21__, react_hot_toast__WEBPACK_IMPORTED_MODULE_22__, _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_23__, _singleOrderAttachment__WEBPACK_IMPORTED_MODULE_24__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


























const OtherOrder = (props)=>{
    const { configData , data , refetch  } = props;
    const [openModal, setOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const { id  } = router.query;
    const theme = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.useTheme)();
    const { refetch: refetchTrackOrder , data: trackOrderData  } = (0,_api_manage_hooks_react_query_order_useGetTrackOrderData__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(id);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        refetchTrackOrder();
    }, []);
    const { mutate , isLoading: refundIsLoading  } = (0,_api_manage_hooks_react_query_refund_request_useStoreRefundRequest__WEBPACK_IMPORTED_MODULE_21__/* .useStoreRefundRequest */ .z)();
    const formSubmitHandler = (values)=>{
        const tempValue = {
            ...values,
            id
        };
        const onSuccessHandler = async (resData)=>{
            if (resData) {
                await refetchTrackOrder();
                react_hot_toast__WEBPACK_IMPORTED_MODULE_22__.toast.success(resData.message);
                setOpenModal(false);
            }
        // router.push('/')
        };
        mutate(tempValue, {
            onSuccess: onSuccessHandler,
            onError: _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_23__/* .onErrorResponse */ .R
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__/* .CustomStackFullWidth */ .Xw, {
        alignItems: "center",
        justifyContent: "center",
        mb: "2rem",
        spacing: 2,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TopDetails__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                data: data,
                trackData: trackOrderData
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__/* .CustomPaperBigCard */ .iD, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {
                    container: true,
                    item: true,
                    md: 12,
                    lg: 12,
                    xs: 12,
                    spacing: 3,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {
                            item: true,
                            md: 7,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_myorders_style__WEBPACK_IMPORTED_MODULE_8__/* .OrderStatusBox */ .cs, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_myorders_style__WEBPACK_IMPORTED_MODULE_8__/* .OrderStatusGrid */ .z$, {
                                        container: true,
                                        md: 12,
                                        xs: 12,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {
                                                item: true,
                                                md: 5,
                                                xs: 12,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                        sx: {
                                                            fontWeight: "600"
                                                        },
                                                        align: "left",
                                                        children: t("Payment method")
                                                    }),
                                                    trackOrderData ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                        sx: {
                                                            fontWeight: "700",
                                                            color: (theme)=>theme.palette.primary.main,
                                                            textTransform: "capitalize"
                                                        },
                                                        align: "left",
                                                        children: trackOrderData && t(trackOrderData?.payment_method.replaceAll("_", " "))
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
                                                        width: "100px",
                                                        variant: "text"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_16__.Stack, {
                                                        direction: "row",
                                                        alignItems: "center",
                                                        spacing: 1,
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                                sx: {
                                                                    fontWeight: "500"
                                                                },
                                                                align: "left",
                                                                children: [
                                                                    t("Amount"),
                                                                    ":"
                                                                ]
                                                            }),
                                                            trackOrderData ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                                sx: {
                                                                    fontWeight: "500"
                                                                },
                                                                align: "left",
                                                                children: trackOrderData && (0,_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_9__/* .getAmountWithSign */ .B9)(trackOrderData?.order_amount)
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
                                                                width: "100px",
                                                                variant: "text"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {
                                                item: true,
                                                md: 7,
                                                xs: 12,
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_16__.Stack, {
                                                        direction: "row",
                                                        alignItems: "center",
                                                        spacing: 1,
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                                sx: {
                                                                    fontWeight: "500"
                                                                },
                                                                align: "left",
                                                                children: [
                                                                    t("Order Status"),
                                                                    " :"
                                                                ]
                                                            }),
                                                            trackOrderData ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                                component: "span",
                                                                textTransform: "capitalize",
                                                                color: theme.palette.info.dark,
                                                                align: "left",
                                                                children: trackOrderData && t((trackOrderData?.order_status).replaceAll("_", " "))
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
                                                                width: "100px",
                                                                variant: "text"
                                                            })
                                                        ]
                                                    }),
                                                    trackOrderData && trackOrderData?.order_status === "canceled" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_16__.Stack, {
                                                                direction: "row",
                                                                alignItems: "center",
                                                                spacing: 1,
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                                        sx: {
                                                                            fontWeight: "500"
                                                                        },
                                                                        align: "left",
                                                                        children: [
                                                                            t("Cancelled By"),
                                                                            " :"
                                                                        ]
                                                                    }),
                                                                    trackOrderData ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                                        component: "span",
                                                                        textTransform: "capitalize",
                                                                        color: theme.palette.info.dark,
                                                                        align: "left",
                                                                        children: trackOrderData?.canceled_by
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
                                                                        width: "100px",
                                                                        variant: "text"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_16__.Stack, {
                                                                direction: "row",
                                                                alignItems: "center",
                                                                spacing: 1,
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                                        sx: {
                                                                            fontWeight: "500"
                                                                        },
                                                                        align: "left",
                                                                        children: [
                                                                            t("Cancellation Reason"),
                                                                            " :"
                                                                        ]
                                                                    }),
                                                                    trackOrderData ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                                        component: "span",
                                                                        textTransform: "capitalize",
                                                                        color: theme.palette.info.dark,
                                                                        align: "left",
                                                                        children: trackOrderData?.cancellation_reason
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
                                                                        width: "100px",
                                                                        variant: "text"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                        sx: {
                                                            fontWeight: "500"
                                                        },
                                                        align: "left",
                                                        children: [
                                                            t("Payment Status"),
                                                            " :",
                                                            " ",
                                                            trackOrderData && trackOrderData?.payment_status === "paid" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                style: {
                                                                    color: theme.palette.success.light
                                                                },
                                                                children: t("Paid")
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                style: {
                                                                    color: "red"
                                                                },
                                                                children: t("Unpaid")
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {
                                                item: true,
                                                xs: 12,
                                                children: [
                                                    trackOrderData && trackOrderData?.module_type === "food" && trackOrderData?.cutlery && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_16__.Stack, {
                                                        direction: "row",
                                                        alignItems: "center",
                                                        spacing: 1,
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                                sx: {
                                                                    fontWeight: "500"
                                                                },
                                                                align: "left",
                                                                children: [
                                                                    t("Cutlery"),
                                                                    " :"
                                                                ]
                                                            }),
                                                            trackOrderData ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                                component: "span",
                                                                textTransform: "capitalize",
                                                                align: "left",
                                                                children: t("Yes")
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
                                                                width: "100px",
                                                                variant: "text"
                                                            })
                                                        ]
                                                    }),
                                                    trackOrderData && trackOrderData?.delivery_instruction && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_16__.Stack, {
                                                        direction: "row",
                                                        alignItems: "center",
                                                        spacing: 1,
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                                sx: {
                                                                    fontWeight: "500"
                                                                },
                                                                align: "left",
                                                                children: [
                                                                    t("Delivery instruction"),
                                                                    " :"
                                                                ]
                                                            }),
                                                            trackOrderData ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                                component: "span",
                                                                textTransform: "capitalize",
                                                                align: "left",
                                                                children: t(trackOrderData?.delivery_instruction)
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
                                                                width: "100px",
                                                                variant: "text"
                                                            })
                                                        ]
                                                    }),
                                                    trackOrderData && trackOrderData?.unavailable_item_note && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_16__.Stack, {
                                                        direction: "row",
                                                        alignItems: "center",
                                                        spacing: 1,
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                                sx: {
                                                                    fontWeight: "500"
                                                                },
                                                                align: "left",
                                                                children: [
                                                                    t("Unavailable item note"),
                                                                    " :"
                                                                ]
                                                            }),
                                                            trackOrderData ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                                component: "span",
                                                                // textTransform="capitalize"
                                                                align: "left",
                                                                children: t(trackOrderData?.unavailable_item_note)
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
                                                                width: "100px",
                                                                variant: "text"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RefundDetails__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                trackOrderData: trackOrderData,
                                                configData: configData,
                                                t: t
                                            }),
                                            !data?.prescription_order && trackOrderData?.module_type === "pharmacy" && trackOrderData?.order_attachment && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_singleOrderAttachment__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                                                title: "Prescription",
                                                attachment: trackOrderData?.order_attachment,
                                                configData: configData
                                            })
                                        ]
                                    })
                                }),
                                trackOrderData ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StoreDetails__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    trackOrderData: trackOrderData,
                                    configData: configData,
                                    t: t
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
                                    variant: "text",
                                    width: "100%",
                                    height: "250px"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {
                            item: true,
                            md: 5,
                            xs: 12,
                            children: data?.prescription_order ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_prescription_order_PrescriptionOrderSummery__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                data: data,
                                trackOrderData: trackOrderData
                            }) : trackOrderData && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OrderSummery__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                trackOrderData: trackOrderData,
                                configData: configData,
                                t: t,
                                data: data
                            })
                        })
                    ]
                })
            }),
            data && !data?.[0]?.item_campaign_id && trackOrderData && trackOrderData?.order_status === "delivered" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__/* .CustomPaperBigCard */ .iD, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {
                    container: true,
                    spacing: 1,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {
                            item: true,
                            xs: 12,
                            sm: 12,
                            md: configData?.refund_active_status ? 6 : 12,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_14___default()), {
                                href: `/rate-and-review/${id}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Map_map_style__WEBPACK_IMPORTED_MODULE_15__/* .PrimaryButton */ .KM, {
                                    variant: "contained",
                                    sx: {
                                        width: "100%"
                                    },
                                    children: t("Give a review")
                                })
                            })
                        }),
                        configData?.refund_active_status && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {
                            item: true,
                            xs: 12,
                            sm: 12,
                            md: 6,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                variant: "outlined",
                                sx: {
                                    width: "100%",
                                    color: (theme)=>theme.palette.primary.main
                                },
                                onClick: ()=>setOpenModal(true),
                                children: t("Refund Request")
                            })
                        })
                    ]
                })
            }),
            trackOrderData && (trackOrderData?.order_status === "confirmed" || trackOrderData?.order_status === "accepted" || trackOrderData?.order_status === "picked_up" || trackOrderData?.order_status === "pending" || trackOrderData?.order_status === "processing" || trackOrderData?.order_status === "handover") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_16__.Box, {
                sx: {
                    marginTop: "1rem"
                },
                width: "100%",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OrderDetailsBottom__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                    id: id,
                    refetchOrderDetails: refetch,
                    refetchTrackData: refetchTrackOrder,
                    trackData: trackOrderData
                })
            }),
            trackOrderData && trackOrderData?.order_status === "failed" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PaymentUpdate__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                id: id,
                refetchOrderDetails: refetch,
                refetchTrackData: refetchTrackOrder,
                trackData: trackOrderData
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RefundModal__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                open: openModal,
                onClose: ()=>setOpenModal(false),
                // reasons={reasonsData?.refund_reasons}
                formSubmit: formSubmitHandler
            })
        ]
    });
};
OtherOrder.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OtherOrder);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30875:
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
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45269);
/* harmony import */ var _myorders_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30700);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _landing_page_hero_section_HeroSection_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77591);
/* harmony import */ var _date_CustomFormatedDateTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17446);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57987);
/* harmony import */ var _ParcelOrderTopDetails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75719);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(89113);
/* harmony import */ var _other_order_RefundDetails__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55008);
/* harmony import */ var _other_order_StoreDetails__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(61727);
/* harmony import */ var _other_order_OrderSummery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(62028);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(72805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _CustomImageContainer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(58861);
/* harmony import */ var _api_manage_hooks_react_query_order_useGetTrackOrderData__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(24073);
/* harmony import */ var _other_order_OrderDetailsBottom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(48752);
/* harmony import */ var _other_order_PaymentUpdate__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(42045);
/* harmony import */ var _other_order_RefundModal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(3109);
/* harmony import */ var _Shimmers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(43211);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_8__, _helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_11__, _other_order_OrderSummery__WEBPACK_IMPORTED_MODULE_14__, _api_manage_hooks_react_query_order_useGetTrackOrderData__WEBPACK_IMPORTED_MODULE_17__, _other_order_OrderDetailsBottom__WEBPACK_IMPORTED_MODULE_18__, _other_order_PaymentUpdate__WEBPACK_IMPORTED_MODULE_19__, _other_order_RefundModal__WEBPACK_IMPORTED_MODULE_20__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_8__, _helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_11__, _other_order_OrderSummery__WEBPACK_IMPORTED_MODULE_14__, _api_manage_hooks_react_query_order_useGetTrackOrderData__WEBPACK_IMPORTED_MODULE_17__, _other_order_OrderDetailsBottom__WEBPACK_IMPORTED_MODULE_18__, _other_order_PaymentUpdate__WEBPACK_IMPORTED_MODULE_19__, _other_order_RefundModal__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















const ParcelOrder = (props)=>{
    const { configData , data , trackOrderData , id , refetchTrackOrder , refetch  } = props;
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)();
    const theme = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_15__.useTheme)();
    const [openModal, setOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
        alignItems: "center",
        justifyContent: "center",
        mb: "2rem",
        spacing: 2,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ParcelOrderTopDetails__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                data: data,
                t: t
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomPaperBigCard */ .iD, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                    container: true,
                    item: true,
                    md: 12,
                    lg: 12,
                    xs: 12,
                    spacing: 3,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                            item: true,
                            md: 7,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_myorders_style__WEBPACK_IMPORTED_MODULE_4__/* .OrderStatusBox */ .cs, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_myorders_style__WEBPACK_IMPORTED_MODULE_4__/* .OrderStatusGrid */ .z$, {
                                        container: true,
                                        md: 12,
                                        xs: 12,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                                                item: true,
                                                md: 5,
                                                xs: 12,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                        sx: {
                                                            fontWeight: "600"
                                                        },
                                                        align: "left",
                                                        children: t("Payment method")
                                                    }),
                                                    data ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                        sx: {
                                                            fontWeight: "700",
                                                            color: (theme)=>theme.palette.primary.main,
                                                            textTransform: "capitalize"
                                                        },
                                                        align: "left",
                                                        children: data && data?.payment_method.replaceAll("_", " ")
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {
                                                        width: "100px",
                                                        variant: "text"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_10__.Stack, {
                                                        direction: "row",
                                                        alignItems: "center",
                                                        spacing: 1,
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                                sx: {
                                                                    fontWeight: "500"
                                                                },
                                                                align: "left",
                                                                children: [
                                                                    t("Amount"),
                                                                    ":"
                                                                ]
                                                            }),
                                                            data ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                                sx: {
                                                                    fontWeight: "500"
                                                                },
                                                                align: "left",
                                                                children: data && (0,_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_11__/* .getAmountWithSign */ .B9)(data?.order_amount)
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {
                                                                width: "100px",
                                                                variant: "text"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                                                item: true,
                                                md: 7,
                                                xs: 12,
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_10__.Stack, {
                                                        direction: "row",
                                                        alignItems: "center",
                                                        spacing: 1,
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                                sx: {
                                                                    fontWeight: "500"
                                                                },
                                                                align: "left",
                                                                children: [
                                                                    t("Order Status"),
                                                                    " :"
                                                                ]
                                                            }),
                                                            data ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                                component: "span",
                                                                textTransform: "capitalize",
                                                                color: theme.palette.info.dark,
                                                                align: "left",
                                                                children: data && (data?.order_status).replaceAll("_", " ")
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {
                                                                width: "100px",
                                                                variant: "text"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                        sx: {
                                                            fontWeight: "500"
                                                        },
                                                        align: "left",
                                                        children: [
                                                            t("Payment Status"),
                                                            " :",
                                                            " ",
                                                            data && data?.payment_status === "paid" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                style: {
                                                                    color: theme.palette.primary.main
                                                                },
                                                                children: t("Paid")
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                style: {
                                                                    color: "red"
                                                                },
                                                                children: t("Unpaid")
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_other_order_RefundDetails__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                trackOrderData: trackOrderData,
                                                configData: configData,
                                                t: t
                                            })
                                        ]
                                    })
                                }),
                                data ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_myorders_style__WEBPACK_IMPORTED_MODULE_4__/* .OrderStatusGrid */ .z$, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_10__.Stack, {
                                            direction: "row",
                                            alignItems: "center",
                                            spacing: 0.5,
                                            mb: "1rem",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                    sx: {
                                                        fontWeight: "600"
                                                    },
                                                    children: [
                                                        t("Charge Pay By"),
                                                        " :"
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                    sx: {
                                                        fontWeight: "600"
                                                    },
                                                    color: "primary.main",
                                                    textTransform: "capitalize",
                                                    children: data?.charge_payer
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                            sx: {
                                                fontWeight: "600"
                                            },
                                            align: "left",
                                            children: t("Sender Details")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                            sx: {
                                                fontWeight: "600"
                                            },
                                            color: "primary.main",
                                            textTransform: "capitalize",
                                            children: data?.delivery_address?.contact_person_name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                            children: data?.delivery_address?.address
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                            children: data?.delivery_address?.contact_person_number
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                            sx: {
                                                fontWeight: "600"
                                            },
                                            align: "left",
                                            mt: "0.5rem",
                                            children: t("Receiver Details")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                            sx: {
                                                fontWeight: "600"
                                            },
                                            color: "primary.main",
                                            textTransform: "capitalize",
                                            children: data?.receiver_details?.contact_person_name || "-"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                            children: data?.receiver_details?.address || "-"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                            children: data?.receiver_details?.contact_person_number || "-"
                                        })
                                    ]
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shimmers__WEBPACK_IMPORTED_MODULE_21__/* .DetailsShimmer */ .n, {
                                    t: t
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                            item: true,
                            md: 5,
                            xs: 12,
                            align: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                    fontWeight: "bold",
                                    children: t("Parcel Order Summery")
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
                                    alignItems: "flex-start",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                            fontWeight: "bold",
                                            children: t("Parcel Category")
                                        }),
                                        data ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
                                            direction: "row",
                                            alignItems: "center",
                                            spacing: 2,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImageContainer__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                                    width: "60px",
                                                    height: "60px",
                                                    src: `${configData?.base_urls?.parcel_category_image_url}/${data?.parcel_category?.image}`,
                                                    alt: data?.parcel_category?.name
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_10__.Stack, {
                                                    alignItems: "flex-start",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                            children: data?.parcel_category?.name
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                            children: data?.parcel_category?.description
                                                        })
                                                    ]
                                                })
                                            ]
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shimmers__WEBPACK_IMPORTED_MODULE_21__/* .SummeryShimmer */ .Y, {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_10__.Stack, {
                                            width: "100%",
                                            sx: {
                                                mt: "10px",
                                                borderBottom: (theme)=>`2px solid ${theme.palette.neutral[300]}`
                                            }
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
                                            direction: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            spacing: 2,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                    fontWeight: "bold",
                                                    color: "primary.main",
                                                    children: t("Total Amount")
                                                }),
                                                data ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                    fontWeight: "bold",
                                                    children: data && (0,_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_11__/* .getAmountWithSign */ .B9)(data?.order_amount)
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {
                                                    width: "100px",
                                                    variant: "text"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            trackOrderData && (trackOrderData?.order_status === "confirmed" || trackOrderData?.order_status === "pending") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_10__.Box, {
                sx: {
                    marginTop: "1rem"
                },
                width: "100%",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_other_order_OrderDetailsBottom__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                    id: id,
                    refetchOrderDetails: refetch,
                    refetchTrackData: refetchTrackOrder,
                    trackData: trackOrderData
                })
            }),
            trackOrderData && trackOrderData?.order_status === "failed" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_other_order_PaymentUpdate__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                id: id,
                refetchOrderDetails: refetch,
                refetchTrackData: refetchTrackOrder,
                trackData: trackOrderData
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_other_order_RefundModal__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                open: openModal,
                onClose: ()=>setOpenModal(false)
            })
        ]
    });
};
ParcelOrder.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParcelOrder);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75719:
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
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45269);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _landing_page_hero_section_HeroSection_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77591);
/* harmony import */ var _date_CustomFormatedDateTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17446);
/* harmony import */ var _myorders_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30700);








const ParcelOrderTopDetails = ({ data , t  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_myorders_style__WEBPACK_IMPORTED_MODULE_7__/* .HeadingBox */ .S, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
            alignItems: "center",
            justifyContent: "center",
            children: [
                data ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                    sx: {
                        color: "primary.main",
                        fontSize: "36px",
                        fontWeight: "600"
                    },
                    children: [
                        t("Parcel Order"),
                        " # ",
                        data?.id
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
                    variant: "text",
                    width: "200px",
                    height: "50px"
                }),
                data ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_landing_page_hero_section_HeroSection_style__WEBPACK_IMPORTED_MODULE_5__/* .CustomTypography */ .ZT, {
                    sx: {
                        color: (theme)=>theme.palette.neutral[400]
                    },
                    children: [
                        t("Parcel Order Placed"),
                        " :",
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_date_CustomFormatedDateTime__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            date: data?.created_at
                        })
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
                    variant: "text",
                    width: "240px",
                    height: "20px"
                }),
                data && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_landing_page_hero_section_HeroSection_style__WEBPACK_IMPORTED_MODULE_5__/* .CustomTypography */ .ZT, {
                    children: [
                        t("Parcel Order Scheduled"),
                        " :",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_date_CustomFormatedDateTime__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            date: data?.schedule_at
                        })
                    ]
                })
            ]
        })
    });
};
ParcelOrderTopDetails.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParcelOrderTopDetails);


/***/ }),

/***/ 43211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ SummeryShimmer),
/* harmony export */   "n": () => (/* binding */ DetailsShimmer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomImageContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58861);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45269);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _myorders_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30700);







const SummeryShimmer = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__/* .CustomStackFullWidth */ .Xw, {
        direction: "row",
        alignItems: "center",
        spacing: 2,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                width: "60px",
                height: "60px",
                variant: "rectangle"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                alignItems: "flex-start",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                        width: "100px",
                        variant: "text"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                        width: "100px",
                        variant: "text"
                    })
                ]
            })
        ]
    });
};
const DetailsShimmer = ({ t  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_myorders_style__WEBPACK_IMPORTED_MODULE_6__/* .OrderStatusGrid */ .z$, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                direction: "row",
                alignItems: "center",
                spacing: 0.5,
                mb: "1rem",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                        sx: {
                            fontWeight: "600"
                        },
                        children: [
                            t("Charge Pay By"),
                            " :"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                        width: "100px",
                        variant: "text"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                sx: {
                    fontWeight: "600"
                },
                align: "left",
                children: t("Sender Details")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                width: "100px",
                variant: "text"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                width: "100px",
                variant: "text"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                width: "100px",
                variant: "text"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                sx: {
                    fontWeight: "600"
                },
                align: "left",
                mt: "0.5rem",
                children: t("Receiver Details")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                width: "100px",
                variant: "text"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                width: "100px",
                variant: "text"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                width: "100px",
                variant: "text"
            })
        ]
    });
};


/***/ }),

/***/ 45007:
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
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22021);
/* harmony import */ var _CustomImageContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58861);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89113);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(86390);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_5__, _helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_8__]);
([i18next__WEBPACK_IMPORTED_MODULE_5__, _helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const PrescriptionOrderSummery = ({ data , trackOrderData  })=>{
    const { configData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.configData);
    const [openModal, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [modalImage, setModalImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const handleImageOnClick = (value)=>{
        setModalImage(value);
        setModalOpen(true);
    };
    const handleModalClose = (value)=>{
        setModalOpen(value);
        setModalImage(null);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
        sx: {
            padding: "7px 0px 20px 0px"
        },
        spacing: 2,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                variant: "h6",
                children: (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)("Prescription")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                height: "270px",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                        direction: "row",
                        gap: "10px",
                        flexWrap: "wrap",
                        children: data?.order_attachment?.map((attachment, index)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                onClick: ()=>handleImageOnClick(attachment),
                                sx: {
                                    cursor: "pointer"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImageContainer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    src: `${configData?.base_urls?.order_attachment_url}/${attachment}`,
                                    width: "80px"
                                })
                            }, index);
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                        width: "100%",
                        marginTop: "auto",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                direction: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                spacing: 2,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        fontWeight: "bold",
                                        children: (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)("Item Price")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        fontWeight: "bold",
                                        children: trackOrderData && (0,_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_8__/* .getAmountWithSign */ .B9)(trackOrderData?.order_amount + trackOrderData?.store_discount_amount - trackOrderData?.coupon_discount_amount - trackOrderData?.total_tax_amount - trackOrderData?.dm_tips - trackOrderData?.delivery_charge)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                direction: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                spacing: 2,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        fontWeight: "bold",
                                        children: (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)("Discount")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        fontWeight: "bold",
                                        children: [
                                            "(-) ",
                                            trackOrderData && (0,_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_8__/* .getAmountWithSign */ .B9)(trackOrderData?.store_discount_amount)
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                direction: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                spacing: 2,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        fontWeight: "bold",
                                        children: (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)("Coupon discount")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        fontWeight: "bold",
                                        children: [
                                            "(+) ",
                                            trackOrderData && (0,_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_8__/* .getAmountWithSign */ .B9)(trackOrderData?.coupon_discount_amount)
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                direction: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                spacing: 2,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        fontWeight: "bold",
                                        children: [
                                            (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)("Vat/Tax"),
                                            trackOrderData?.tax_status === "included" ? "(included)" : ""
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        fontWeight: "bold",
                                        children: [
                                            trackOrderData?.tax_status !== "included" && " (+) ",
                                            trackOrderData && (0,_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_8__/* .getAmountWithSign */ .B9)(trackOrderData?.total_tax_amount)
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                direction: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                spacing: 2,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        fontWeight: "bold",
                                        children: (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)("Deliveryman tips")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        fontWeight: "bold",
                                        children: [
                                            "(+) ",
                                            trackOrderData && (0,_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_8__/* .getAmountWithSign */ .B9)(trackOrderData?.dm_tips)
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                direction: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                spacing: 2,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        fontWeight: "bold",
                                        children: (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)("Delivery fee")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        fontWeight: "bold",
                                        children: [
                                            "(+) ",
                                            trackOrderData && (0,_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_8__/* .getAmountWithSign */ .B9)(trackOrderData?.delivery_charge)
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                width: "100%",
                                sx: {
                                    mt: "20px",
                                    mb: "10px",
                                    borderBottom: (theme)=>`2px solid ${theme.palette.neutral[300]}`
                                }
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                direction: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                spacing: 2,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        fontWeight: "bold",
                                        color: "primary.main",
                                        children: (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)("Total")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        fontWeight: "bold",
                                        children: trackOrderData && (0,_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_8__/* .getAmountWithSign */ .B9)(trackOrderData?.order_amount)
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                openModal: openModal,
                handleClose: handleModalClose,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                    position: "relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>handleModalClose(),
                            style: {
                                zIndex: "999",
                                position: "absolute",
                                right: 0,
                                cursor: "pointer",
                                border: "none",
                                borderRadius: "50%",
                                width: " 2rem",
                                height: "2rem"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_10___default()), {
                                sx: {
                                    fontSize: "16px"
                                }
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImageContainer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            src: `${configData?.base_urls?.order_attachment_url}/${modalImage}`,
                            width: "600px",
                            smWidth: "300px",
                            objectfit: "contain"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrescriptionOrderSummery);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47837:
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
/* harmony import */ var _CustomImageContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58861);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22021);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86390);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_5__]);
i18next__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const SingleOrderAttachment = (props)=>{
    const { title , attachment , configData  } = props;
    const [openModal, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleImageOnClick = (value)=>{
        setModalOpen(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
        alignItems: "flex-start",
        spacing: 2,
        mt: "1rem",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                variant: "h6",
                children: (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)(title)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                onClick: ()=>handleImageOnClick(attachment),
                sx: {
                    cursor: "pointer"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImageContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    src: `${configData?.base_urls?.order_attachment_url}/${attachment}`,
                    width: "100px",
                    height: "100px",
                    objectfit: "cover"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                openModal: openModal,
                handleClose: ()=>setModalOpen(false),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                    position: "relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>setModalOpen(false),
                            style: {
                                zIndex: "999",
                                position: "absolute",
                                right: 0,
                                cursor: "pointer",
                                border: "none",
                                borderRadius: "50%",
                                width: " 2rem",
                                height: "2rem"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_8___default()), {
                                sx: {
                                    fontSize: "16px"
                                }
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImageContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            src: `${configData?.base_urls?.order_attachment_url}/${attachment}`,
                            width: "600px",
                            smWidth: "300px",
                            objectfit: "contain"
                        })
                    ]
                })
            })
        ]
    });
};
SingleOrderAttachment.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleOrderAttachment);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 47915:
/***/ ((module) => {

module.exports = require("@mui/icons-material");

/***/ }),

/***/ 1883:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AccountCircle");

/***/ }),

/***/ 66146:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Add");

/***/ }),

/***/ 4195:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowBackIos");

/***/ }),

/***/ 95780:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowBackIosNew");

/***/ }),

/***/ 61883:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowForward");

/***/ }),

/***/ 91658:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowForwardIos");

/***/ }),

/***/ 1575:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowLeft");

/***/ }),

/***/ 7902:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowRight");

/***/ }),

/***/ 33060:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowRightAlt");

/***/ }),

/***/ 54242:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Chat");

/***/ }),

/***/ 7521:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ChatBubbleOutline");

/***/ }),

/***/ 6959:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Check");

/***/ }),

/***/ 76756:
/***/ ((module) => {

module.exports = require("@mui/icons-material/CheckBoxOutlined");

/***/ }),

/***/ 4173:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 44486:
/***/ ((module) => {

module.exports = require("@mui/icons-material/CloudUpload");

/***/ }),

/***/ 29605:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ConfirmationNumber");

/***/ }),

/***/ 83188:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Delete");

/***/ }),

/***/ 8690:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Error");

/***/ }),

/***/ 27372:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Favorite");

/***/ }),

/***/ 6910:
/***/ ((module) => {

module.exports = require("@mui/icons-material/FavoriteBorder");

/***/ }),

/***/ 25967:
/***/ ((module) => {

module.exports = require("@mui/icons-material/FavoriteBorderOutlined");

/***/ }),

/***/ 43866:
/***/ ((module) => {

module.exports = require("@mui/icons-material/FilterList");

/***/ }),

/***/ 50682:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Fullscreen");

/***/ }),

/***/ 64107:
/***/ ((module) => {

module.exports = require("@mui/icons-material/FullscreenExit");

/***/ }),

/***/ 15594:
/***/ ((module) => {

module.exports = require("@mui/icons-material/GpsFixed");

/***/ }),

/***/ 49262:
/***/ ((module) => {

module.exports = require("@mui/icons-material/GridViewRounded");

/***/ }),

/***/ 73467:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Home");

/***/ }),

/***/ 60357:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ImportContacts");

/***/ }),

/***/ 64845:
/***/ ((module) => {

module.exports = require("@mui/icons-material/KeyboardArrowDown");

/***/ }),

/***/ 57834:
/***/ ((module) => {

module.exports = require("@mui/icons-material/KeyboardArrowLeft");

/***/ }),

/***/ 70547:
/***/ ((module) => {

module.exports = require("@mui/icons-material/KeyboardArrowRight");

/***/ }),

/***/ 99881:
/***/ ((module) => {

module.exports = require("@mui/icons-material/KeyboardArrowUp");

/***/ }),

/***/ 96866:
/***/ ((module) => {

module.exports = require("@mui/icons-material/LibraryBooks");

/***/ }),

/***/ 50550:
/***/ ((module) => {

module.exports = require("@mui/icons-material/LocalPhone");

/***/ }),

/***/ 12906:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Lock");

/***/ }),

/***/ 40399:
/***/ ((module) => {

module.exports = require("@mui/icons-material/LockOutlined");

/***/ }),

/***/ 89801:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Logout");

/***/ }),

/***/ 84552:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Loyalty");

/***/ }),

/***/ 14272:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Map");

/***/ }),

/***/ 63365:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 79667:
/***/ ((module) => {

module.exports = require("@mui/icons-material/PersonOutlineOutlined");

/***/ }),

/***/ 15214:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Place");

/***/ }),

/***/ 19509:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Remove");

/***/ }),

/***/ 15642:
/***/ ((module) => {

module.exports = require("@mui/icons-material/RemoveRedEye");

/***/ }),

/***/ 49426:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Room");

/***/ }),

/***/ 38017:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Search");

/***/ }),

/***/ 39823:
/***/ ((module) => {

module.exports = require("@mui/icons-material/SendToMobile");

/***/ }),

/***/ 10032:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Settings");

/***/ }),

/***/ 6408:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ShoppingCartCheckout");

/***/ }),

/***/ 22749:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ShoppingCartOutlined");

/***/ }),

/***/ 72548:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ShoppingCartRounded");

/***/ }),

/***/ 19766:
/***/ ((module) => {

module.exports = require("@mui/icons-material/SmsRounded");

/***/ }),

/***/ 77849:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Star");

/***/ }),

/***/ 33378:
/***/ ((module) => {

module.exports = require("@mui/icons-material/StarRate");

/***/ }),

/***/ 9001:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Wallet");

/***/ }),

/***/ 65342:
/***/ ((module) => {

module.exports = require("@mui/icons-material/WarningAmber");

/***/ }),

/***/ 86072:
/***/ ((module) => {

module.exports = require("@mui/lab");

/***/ }),

/***/ 76829:
/***/ ((module) => {

module.exports = require("@mui/lab/LoadingButton");

/***/ }),

/***/ 65692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 83882:
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 94960:
/***/ ((module) => {

module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ 8611:
/***/ ((module) => {

module.exports = require("@mui/material/Dialog");

/***/ }),

/***/ 29404:
/***/ ((module) => {

module.exports = require("@mui/material/DialogActions");

/***/ }),

/***/ 1094:
/***/ ((module) => {

module.exports = require("@mui/material/DialogContent");

/***/ }),

/***/ 52468:
/***/ ((module) => {

module.exports = require("@mui/material/DialogTitle");

/***/ }),

/***/ 73646:
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 68891:
/***/ ((module) => {

module.exports = require("@mui/material/FormControl");

/***/ }),

/***/ 88185:
/***/ ((module) => {

module.exports = require("@mui/material/FormControlLabel");

/***/ }),

/***/ 6354:
/***/ ((module) => {

module.exports = require("@mui/material/FormHelperText");

/***/ }),

/***/ 76096:
/***/ ((module) => {

module.exports = require("@mui/material/FormLabel");

/***/ }),

/***/ 67934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 85246:
/***/ ((module) => {

module.exports = require("@mui/material/Link");

/***/ }),

/***/ 94192:
/***/ ((module) => {

module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 31011:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemButton");

/***/ }),

/***/ 78315:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 55374:
/***/ ((module) => {

module.exports = require("@mui/material/Radio");

/***/ }),

/***/ 76563:
/***/ ((module) => {

module.exports = require("@mui/material/RadioGroup");

/***/ }),

/***/ 40441:
/***/ ((module) => {

module.exports = require("@mui/material/Skeleton");

/***/ }),

/***/ 27163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 18442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 69868:
/***/ ((module) => {

module.exports = require("@mui/material/useMediaQuery");

/***/ }),

/***/ 69484:
/***/ ((module) => {

module.exports = require("@mui/styles");

/***/ }),

/***/ 97986:
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ 82433:
/***/ ((module) => {

module.exports = require("@react-google-maps/api");

/***/ }),

/***/ 75184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 46517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 32245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 13332:
/***/ ((module) => {

module.exports = require("moment/moment");

/***/ }),

/***/ 53918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 45732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 69274:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/hooks-client-context.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 64486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 99552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 95832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3349:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/server-inserted-html.js");

/***/ }),

/***/ 82470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 11022:
/***/ ((module) => {

module.exports = require("react-geolocated");

/***/ }),

/***/ 50801:
/***/ ((module) => {

module.exports = require("react-image-magnify");

/***/ }),

/***/ 25452:
/***/ ((module) => {

module.exports = require("react-phone-input-2");

/***/ }),

/***/ 61175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 38096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 14161:
/***/ ((module) => {

module.exports = require("redux-persist");

/***/ }),

/***/ 98936:
/***/ ((module) => {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ 94172:
/***/ ((module) => {

module.exports = require("simplebar-react");

/***/ }),

/***/ 75609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 99648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 23745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 33512:
/***/ ((module) => {

module.exports = import("firebase/messaging");;

/***/ }),

/***/ 22021:
/***/ ((module) => {

module.exports = import("i18next");;

/***/ }),

/***/ 69915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 86201:
/***/ ((module) => {

module.exports = import("react-hot-toast");;

/***/ }),

/***/ 57987:
/***/ ((module) => {

module.exports = import("react-i18next");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,8889,5269,7113,4121,8861,9240,4369,801,8401,6672,7595,7787,4024,3369,8470], () => (__webpack_exec__(25765)));
module.exports = __webpack_exports__;

})();
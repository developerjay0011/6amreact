"use strict";
(() => {
var exports = {};
exports.id = 303;
exports.ids = [303,6812,5405];
exports.modules = {

/***/ 29531:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ _index__WEBPACK_IMPORTED_MODULE_7__.getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13258);
/* harmony import */ var _meta_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74121);
/* harmony import */ var _src_components_route_guard_AuthGuard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46941);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44369);
/* harmony import */ var _src_components_review_RateAndReview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36234);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_3__, _index__WEBPACK_IMPORTED_MODULE_7__, _src_components_review_RateAndReview__WEBPACK_IMPORTED_MODULE_8__]);
([_src_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_3__, _index__WEBPACK_IMPORTED_MODULE_7__, _src_components_review_RateAndReview__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Index = ({ configData , landingPageData  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_meta_data__WEBPACK_IMPORTED_MODULE_4__["default"], {
                title: `Rate and Review - ${configData?.business_name}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default()), {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_route_guard_AuthGuard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                from: router.pathname.replace("/", ""),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    configData: configData,
                    landingPageData: landingPageData,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_review_RateAndReview__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 55317:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useSubmitDeliverymanReview)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60274);
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_1__]);
_MainApi__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



//import { onErrorResponse } from '../../../../components/api-response-messages/ApiResponseMessages'
const submitData = async (formData)=>{
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(`${_ApiRoutes__WEBPACK_IMPORTED_MODULE_2__/* .submit_deliveryman_review_api */ .Fp}`, formData);
    return data;
};
const useSubmitDeliverymanReview = ()=>{
    return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)("submit-review-deliveryman", submitData);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39511:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useSubmitItemReview)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60274);
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_1__]);
_MainApi__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



//import { onErrorResponse } from '../../../../components/api-response-messages/ApiResponseMessages'
const submitData = async (formData)=>{
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(`${_ApiRoutes__WEBPACK_IMPORTED_MODULE_2__/* .submit_items_review_api */ .mM}`, formData);
    return data;
};
const useSubmitItemReview = ()=>{
    return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)("submit-review", submitData);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56066:
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
/* harmony import */ var _CustomImageContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58861);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73646);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _form_fields_CustomTextFieldWithFormik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42492);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76829);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57987);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(86201);
/* harmony import */ var _api_manage_hooks_react_query_review_useSubmitDeliverymanReview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55317);
/* harmony import */ var _search_CustomRatings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(27559);
/* harmony import */ var _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(67759);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_9__, react_hot_toast__WEBPACK_IMPORTED_MODULE_12__, _api_manage_hooks_react_query_review_useSubmitDeliverymanReview__WEBPACK_IMPORTED_MODULE_13__, _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_15__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_9__, react_hot_toast__WEBPACK_IMPORTED_MODULE_12__, _api_manage_hooks_react_query_review_useSubmitDeliverymanReview__WEBPACK_IMPORTED_MODULE_13__, _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const DeliverymanForm = ({ data , orderId  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)();
    const { configData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)((state)=>state.configData);
    const productImage = configData?.base_urls?.delivery_man_image_url;
    const { mutate , isLoading , error  } = (0,_api_manage_hooks_react_query_review_useSubmitDeliverymanReview__WEBPACK_IMPORTED_MODULE_13__/* .useSubmitDeliverymanReview */ .V)();
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_11__.useFormik)({
        initialValues: {
            rating: "",
            comment: ""
        },
        onSubmit: async (values, helpers)=>{
            try {
                handleFormsubmit(values);
            } catch (err) {}
        }
    });
    const handleChangeRatings = (value)=>{
        formik.setFieldValue("rating", value);
    };
    const handleFormsubmit = (values)=>{
        const formData = {
            ...values,
            delivery_man_id: data?.id,
            order_id: orderId
        };
        mutate(formData, {
            onSuccess: (response)=>{
                react_hot_toast__WEBPACK_IMPORTED_MODULE_12__["default"].success(response?.message);
            },
            onError: _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_15__/* .onErrorResponse */ .R
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__/* .CustomStackFullWidth */ .Xw, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
            onSubmit: formik.handleSubmit,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                container: true,
                spacing: 2,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        item: true,
                        xs: 12,
                        md: 12,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__/* .CustomStackFullWidth */ .Xw, {
                            direction: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                direction: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                spacing: 1,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImageContainer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        src: `${productImage}/${data?.image}`,
                                        width: "100px",
                                        height: "90px"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__/* .CustomTypographyBold */ .n2, {
                                                children: data?.f_name.concat(" ", data?.l_name)
                                            }),
                                            data && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_search_CustomRatings__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                readOnly: true,
                                                handleChangeRatings: handleChangeRatings,
                                                ratingValue: data?.avg_rating
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
                        md: 12,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_6___default()), {
                            sx: {
                                width: "100%"
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        item: true,
                        xs: 12,
                        md: 12,
                        align: "center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__/* .CustomTypographyGray */ .mI, {
                                    sx: {
                                        fontSize: "18px"
                                    },
                                    children: t("Rate the deliveryman")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_search_CustomRatings__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    handleChangeRatings: handleChangeRatings,
                                    ratingValue: formik.values.rating
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        item: true,
                        xs: 12,
                        md: 12,
                        align: "center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                            alignItems: "center",
                            spacing: 1,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__/* .CustomTypographyGray */ .mI, {
                                    sx: {
                                        fontSize: "18px"
                                    },
                                    children: t("Share your opinion")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_fields_CustomTextFieldWithFormik__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    type: "text",
                                    label: t("Comment"),
                                    touched: formik.touched.comment,
                                    errors: formik.errors.comment,
                                    fieldProps: formik.getFieldProps("comment"),
                                    multiline: true,
                                    rows: 2,
                                    // onChangeHandler={RestaurantNameHandler}
                                    value: formik.values.comment
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        item: true,
                        xs: 12,
                        md: 12,
                        mt: "1rem",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_8___default()), {
                            fullWidth: true,
                            variant: "contained",
                            type: "submit",
                            loading: isLoading,
                            children: t("Submit")
                        })
                    })
                ]
            })
        })
    });
};
DeliverymanForm.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeliverymanForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36795:
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
/* harmony import */ var _food_details_food_card_FoodCard_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36508);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_3__]);
react_i18next__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const GroupButtonsRateAndReview = ({ setType , type , moduleType  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
        orientation: "horizontal",
        // variant="contained"
        variant: "scrollable",
        scrollButtons: "auto",
        "aria-label": "scrollable auto tabs example",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
            children: [
                moduleType !== "parcel" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_food_details_food_card_FoodCard_style__WEBPACK_IMPORTED_MODULE_4__/* .RestaurantDetailsNavButton */ .Ks, {
                    background: type === "items",
                    onClick: ()=>setType("items"),
                    sx: {
                        width: {
                            xs: "80px",
                            md: "100px"
                        }
                    },
                    children: t("Items")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_food_details_food_card_FoodCard_style__WEBPACK_IMPORTED_MODULE_4__/* .RestaurantDetailsNavButton */ .Ks, {
                    // color={
                    //     type === 'veg' ? 'primary' : 'whiteContainer'
                    // }
                    background: type === "delivery_man",
                    onClick: ()=>setType("delivery_man"),
                    sx: {
                        width: "100px"
                    },
                    children: t("Delivery man")
                })
            ]
        })
    });
};
GroupButtonsRateAndReview.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GroupButtonsRateAndReview);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 88277:
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
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45269);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76829);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57987);
/* harmony import */ var _form_fields_CustomTextFieldWithFormik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(42492);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73646);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _CustomImageContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(58861);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(86201);
/* harmony import */ var _api_manage_hooks_react_query_review_useSubmitItemReview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(39511);
/* harmony import */ var _search_CustomRatings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(27559);
/* harmony import */ var _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(67759);
/* harmony import */ var _helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(89113);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_7__, react_hot_toast__WEBPACK_IMPORTED_MODULE_12__, _api_manage_hooks_react_query_review_useSubmitItemReview__WEBPACK_IMPORTED_MODULE_13__, _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_15__, _helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_16__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_7__, react_hot_toast__WEBPACK_IMPORTED_MODULE_12__, _api_manage_hooks_react_query_review_useSubmitItemReview__WEBPACK_IMPORTED_MODULE_13__, _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_15__, _helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const ItemForm = ({ data  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    const { configData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useSelector)((state)=>state.configData);
    const itemImage = configData?.base_urls?.item_image_url;
    const { mutate , isLoading , error  } = (0,_api_manage_hooks_react_query_review_useSubmitItemReview__WEBPACK_IMPORTED_MODULE_13__/* .useSubmitItemReview */ .O)();
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_3__.useFormik)({
        initialValues: {
            rating: "",
            comment: ""
        },
        onSubmit: async (values, helpers)=>{
            try {
                handleFormsubmit(values);
            } catch (err) {}
        }
    });
    const handleChangeRatings = (value)=>{
        formik.setFieldValue("rating", value);
    };
    const handleFormsubmit = (values)=>{
        const formData = {
            ...values,
            delivery_man_id: null,
            item_id: data?.item_id,
            order_id: data?.order_id
        };
        mutate(formData, {
            onSuccess: (response)=>{
                react_hot_toast__WEBPACK_IMPORTED_MODULE_12__["default"].success(response?.message);
            },
            onError: _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_15__/* .onErrorResponse */ .R
        });
    };
    const languageDirection = localStorage.getItem("direction");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__/* .CustomStackFullWidth */ .Xw, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
            onSubmit: formik.handleSubmit,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                container: true,
                spacing: 2,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                        item: true,
                        xs: 12,
                        md: 12,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__/* .CustomStackFullWidth */ .Xw, {
                            direction: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                                    direction: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    spacing: 1,
                                    gap: languageDirection === "rtl" ? "1rem" : "0rem",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImageContainer__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            src: `${itemImage}/${data?.item_details?.image}`,
                                            width: "100px",
                                            height: "90px"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__/* .CustomTypographyBold */ .n2, {
                                                    children: data?.item_details?.name
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__/* .CustomTypographyBold */ .n2, {
                                                    children: (0,_helper_functions_CardHelpers__WEBPACK_IMPORTED_MODULE_16__/* .getAmountWithSign */ .B9)(data?.item_details?.price)
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                                    direction: "row",
                                    spacing: 0.5,
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__/* .CustomTypographyGray */ .mI, {
                                            sx: {
                                                fontSize: "18px"
                                            },
                                            children: t("Quantity")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__/* .CustomTypographyGray */ .mI, {
                                            sx: {
                                                fontSize: "18px"
                                            },
                                            children: ":"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__/* .CustomColouredTypography */ .i5, {
                                            color: "primary.main",
                                            sx: {
                                                fontSize: "18px"
                                            },
                                            children: data?.quantity
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                        item: true,
                        xs: 12,
                        md: 12,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9___default()), {
                            sx: {
                                width: "100%"
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                        item: true,
                        xs: 12,
                        md: 12,
                        align: "center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__/* .CustomTypographyGray */ .mI, {
                                    sx: {
                                        fontSize: "18px"
                                    },
                                    children: t("Rate the item")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_search_CustomRatings__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    handleChangeRatings: handleChangeRatings,
                                    ratingValue: formik.values.rating
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                        item: true,
                        xs: 12,
                        md: 12,
                        align: "center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                            alignItems: "center",
                            spacing: 1,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__/* .CustomTypographyGray */ .mI, {
                                    sx: {
                                        fontSize: "18px"
                                    },
                                    children: t("Share your opinion")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_fields_CustomTextFieldWithFormik__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    type: "text",
                                    label: t("Comment"),
                                    touched: formik.touched.comment,
                                    errors: formik.errors.comment,
                                    fieldProps: formik.getFieldProps("comment"),
                                    multiline: true,
                                    rows: 2,
                                    // onChangeHandler={RestaurantNameHandler}
                                    value: formik.values.comment
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                        item: true,
                        xs: 12,
                        md: 12,
                        mt: "1rem",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_6___default()), {
                            fullWidth: true,
                            variant: "contained",
                            type: "submit",
                            loading: isLoading,
                            children: t("Submit")
                        })
                    })
                ]
            })
        })
    });
};
ItemForm.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36234:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_manage_hooks_react_query_order_useGetOrderDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19545);
/* harmony import */ var _GroupButtonsRateAndReview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36795);
/* harmony import */ var _ItemsFrom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88277);
/* harmony import */ var _Shimmer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87089);
/* harmony import */ var _DeliverymanForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56066);
/* harmony import */ var _api_manage_hooks_react_query_order_useGetTrackOrderData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57987);
/* harmony import */ var _custom_empty_result__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(58797);
/* harmony import */ var _public_static_nodata_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3715);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_manage_hooks_react_query_order_useGetOrderDetails__WEBPACK_IMPORTED_MODULE_5__, _GroupButtonsRateAndReview__WEBPACK_IMPORTED_MODULE_6__, _ItemsFrom__WEBPACK_IMPORTED_MODULE_7__, _DeliverymanForm__WEBPACK_IMPORTED_MODULE_9__, _api_manage_hooks_react_query_order_useGetTrackOrderData__WEBPACK_IMPORTED_MODULE_10__, react_i18next__WEBPACK_IMPORTED_MODULE_12__, _custom_empty_result__WEBPACK_IMPORTED_MODULE_13__]);
([_api_manage_hooks_react_query_order_useGetOrderDetails__WEBPACK_IMPORTED_MODULE_5__, _GroupButtonsRateAndReview__WEBPACK_IMPORTED_MODULE_6__, _ItemsFrom__WEBPACK_IMPORTED_MODULE_7__, _DeliverymanForm__WEBPACK_IMPORTED_MODULE_9__, _api_manage_hooks_react_query_order_useGetTrackOrderData__WEBPACK_IMPORTED_MODULE_10__, react_i18next__WEBPACK_IMPORTED_MODULE_12__, _custom_empty_result__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





//import DeliverymanForm from "./DeliverymanForm";











const RateAndReview = ()=>{
    const { deliveryManInfo  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.searchFilterStore);
    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("items");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { id  } = router.query;
    const { refetch , data , isRefetching  } = (0,_api_manage_hooks_react_query_order_useGetOrderDetails__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(id);
    const { refetch: refetchTrackOrder , data: trackOrderData , isRefetching: refetchingTrackOrder  } = (0,_api_manage_hooks_react_query_order_useGetTrackOrderData__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(id);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        id && refetch() && refetchTrackOrder();
    }, [
        id
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
        alignItems: "center",
        justifyContent: "center",
        spacing: 2,
        children: [
            isRefetching ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Skeleton, {
                variant: "ractangle",
                width: "100px",
                height: "100%"
            }) : deliveryManInfo && data?.module_type !== "parcel" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GroupButtonsRateAndReview__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                setType: setType,
                type: type,
                moduleType: data?.module_type
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                alignItems: "center",
                justifyContent: "center",
                spacing: 3,
                children: type === "items" && data?.module_type !== "parcel" ? data ? data?.map((item, index)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomPaperBigCard */ .iD, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ItemsFrom__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            data: item
                        })
                    }, index);
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shimmer__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomPaperBigCard */ .iD, {
                    children: trackOrderData?.delivery_man ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DeliverymanForm__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        data: trackOrderData?.delivery_man,
                        orderId: id
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                        justifyContent: "center",
                        alignItems: "center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_15__.Stack, {
                            width: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_custom_empty_result__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                label: "No delivery man assigned for the delivery.",
                                image: _public_static_nodata_png__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z
                            })
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RateAndReview);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87089:
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
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73646);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40441);
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_5__);






const Shimmer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomPaperBigCard */ .iD, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                container: true,
                spacing: 2,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        item: true,
                        xs: 12,
                        md: 12,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                            direction: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                    direction: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    spacing: 1,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            variant: "rectangle",
                                            width: "100px",
                                            height: "90px"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomTypographyBold */ .n2, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        variant: "text",
                                                        width: "90px"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomTypographyBold */ .n2, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        variant: "text",
                                                        width: "90px"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                    direction: "row",
                                    spacing: 0.5,
                                    alignItems: "center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        variant: "text",
                                        width: "130px"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        item: true,
                        xs: 12,
                        md: 12,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_4___default()), {
                            sx: {
                                width: "100%"
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        item: true,
                        xs: 12,
                        md: 12,
                        align: "center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    variant: "text",
                                    width: "130px"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    variant: "text",
                                    width: "130px"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        item: true,
                        xs: 12,
                        md: 12,
                        align: "center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                            alignItems: "center",
                            spacing: 1,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    variant: "text",
                                    width: "130px"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    variant: "rectangle",
                                    height: "80px",
                                    width: "100%"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        item: true,
                        xs: 12,
                        md: 12,
                        mt: "1rem",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_5___default()), {
                            variant: "rectangle",
                            height: "35px",
                            width: "100%"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shimmer);


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

/***/ 6354:
/***/ ((module) => {

module.exports = require("@mui/material/FormHelperText");

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
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,8889,5269,7113,4121,8861,9240,4369,801,6941,8470], () => (__webpack_exec__(29531)));
module.exports = __webpack_exports__;

})();
"use strict";
(() => {
var exports = {};
exports.id = 9742;
exports.ids = [9742,6812,5405];
exports.modules = {

/***/ 6719:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ _index__WEBPACK_IMPORTED_MODULE_6__.getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_auth_ForgotPassword_ForgotPassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69552);
/* harmony import */ var _meta_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74121);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13258);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44369);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_auth_ForgotPassword_ForgotPassword__WEBPACK_IMPORTED_MODULE_2__, _src_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_5__, _index__WEBPACK_IMPORTED_MODULE_6__]);
([_src_components_auth_ForgotPassword_ForgotPassword__WEBPACK_IMPORTED_MODULE_2__, _src_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_5__, _index__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const index = ({ configData , landingPageData  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default()), {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_meta_data__WEBPACK_IMPORTED_MODULE_3__["default"], {
                title: `Forgot password - ${configData?.business_name}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                configData: configData,
                landingPageData: landingPageData,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.NoSsr, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_auth_ForgotPassword_ForgotPassword__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 15034:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useForgotPassword)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_1__]);
_MainApi__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const forgotPassword = async (phone)=>{
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post("/api/v1/auth/forgot-password", phone);
    return data;
};
const useForgotPassword = ({ onSuccessHandlerForForgotpass , onErrorResponse  })=>{
    return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)("forgot_password", forgotPassword, {
        onSuccess: onSuccessHandlerForForgotpass,
        onError: onErrorResponse
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8835:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ useOtp)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_1__]);
_MainApi__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const sendOtp = async (otpData)=>{
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post("/api/v1/auth/verify-token", otpData);
    return data;
};
const useOtp = (onSuccessHandlerForOtp)=>{
    return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)("send_otp", sendOtp, {
        onSuccess: onSuccessHandlerForOtp
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87746:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ useResetPassword)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_1__]);
_MainApi__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const resetPassword = async (newPass)=>{
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_1__/* ["default"].put */ .Z.put("/api/v1/auth/reset-password", newPass);
    return data;
};
const useResetPassword = (onSuccessHandlerForReset, onErrorResponse)=>{
    return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)("reset_password", resetPassword, {
        onSuccess: onSuccessHandlerForReset,
        onError: onErrorResponse
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 69552:
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
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45269);
/* harmony import */ var _ForgotPasswordNumberForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70993);
/* harmony import */ var _OtpForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14302);
/* harmony import */ var _NewPassword__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80712);
/* harmony import */ var _api_manage_hooks_react_query_forgot_password_useOtp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8835);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ForgotPasswordNumberForm__WEBPACK_IMPORTED_MODULE_4__, _OtpForm__WEBPACK_IMPORTED_MODULE_5__, _NewPassword__WEBPACK_IMPORTED_MODULE_6__, _api_manage_hooks_react_query_forgot_password_useOtp__WEBPACK_IMPORTED_MODULE_7__]);
([_ForgotPasswordNumberForm__WEBPACK_IMPORTED_MODULE_4__, _OtpForm__WEBPACK_IMPORTED_MODULE_5__, _NewPassword__WEBPACK_IMPORTED_MODULE_6__, _api_manage_hooks_react_query_forgot_password_useOtp__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const ForgotPassword = ()=>{
    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        phone: "",
        otp: ""
    });
    const goNext = ()=>{
        setPage((currPage)=>currPage + 1);
    };
    const goBack = ()=>{
        setPage((currPage)=>currPage - 1);
    };
    const handleFirstForm = (values)=>{
        setData({
            phone: values.phone,
            reset_token: values.reset_token
        });
    };
    const pageShow = ()=>{
        if (page === 0) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ForgotPasswordNumberForm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                goNext: goNext,
                handleFirstForm: handleFirstForm,
                data: data
            });
        } else if (page === 1) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OtpForm__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                data: data,
                goBack: goBack,
                formSubmitHandler: formSubmitHandler,
                isLoading: isLoading
            });
        } else page === 2;
        {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NewPassword__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                data: data,
                handleFirstForm: handleFirstForm,
                goBack: goBack
            });
        }
    };
    const onSuccessHandler = (res)=>{
        if (res) {
            goNext();
        }
    };
    const { mutate , isLoading  } = (0,_api_manage_hooks_react_query_forgot_password_useOtp__WEBPACK_IMPORTED_MODULE_7__/* .useOtp */ .Y)(onSuccessHandler);
    const formSubmitHandler = (values)=>{
        handleFirstForm(values);
        mutate(values, {
            onSuccess: onSuccessHandler
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        minHeight: "50vh",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .FlexContainerCenter */ .E4, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomPaper */ .J8, {
                elevation: 5,
                children: pageShow()
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgotPassword);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70993:
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
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45269);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57987);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76829);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(86201);
/* harmony import */ var _custom_component_CustomPhoneInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65304);
/* harmony import */ var _api_manage_hooks_react_query_forgot_password_useForgotPassword__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15034);
/* harmony import */ var _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(67759);
/* harmony import */ var _utils_staticTexts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(76931);
/* harmony import */ var _helper_functions_getLanguage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(46573);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_5__, react_hot_toast__WEBPACK_IMPORTED_MODULE_9__, _custom_component_CustomPhoneInput__WEBPACK_IMPORTED_MODULE_10__, _api_manage_hooks_react_query_forgot_password_useForgotPassword__WEBPACK_IMPORTED_MODULE_11__, _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_12__, _utils_staticTexts__WEBPACK_IMPORTED_MODULE_13__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_5__, react_hot_toast__WEBPACK_IMPORTED_MODULE_9__, _custom_component_CustomPhoneInput__WEBPACK_IMPORTED_MODULE_10__, _api_manage_hooks_react_query_forgot_password_useForgotPassword__WEBPACK_IMPORTED_MODULE_11__, _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_12__, _utils_staticTexts__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const ForgotPasswordNumberForm = ({ data , goNext , handleFirstForm  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const { configData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.configData);
    const phoneFormik = (0,formik__WEBPACK_IMPORTED_MODULE_3__.useFormik)({
        initialValues: {
            phone: data ? data.phone : ""
        },
        validationSchema: yup__WEBPACK_IMPORTED_MODULE_8__.object({
            phone: yup__WEBPACK_IMPORTED_MODULE_8__.string().required(t("Please give a phone number")).min(10, "number must be 10 digits")
        }),
        onSubmit: async (values, helpers)=>{
            try {
                formSubmitHandler(values);
            } catch (err) {}
        }
    });
    const onSuccessHandler = (res)=>{
        if (res) {
            goNext();
            react_hot_toast__WEBPACK_IMPORTED_MODULE_9__["default"].success(res.message);
        }
    };
    const { mutate , isLoading  } = (0,_api_manage_hooks_react_query_forgot_password_useForgotPassword__WEBPACK_IMPORTED_MODULE_11__/* .useForgotPassword */ .p)({
        onSuccessHandler,
        onError: (errors)=>{
            (0,_api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_12__/* .onErrorResponse */ .R)(errors);
        }
    });
    const formSubmitHandler = (values)=>{
        handleFirstForm(values);
        mutate(values, {
            onSuccess: onSuccessHandler,
            onError: _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_12__/* .onErrorResponse */ .R
        });
    };
    const lanDirection = (0,_helper_functions_getLanguage__WEBPACK_IMPORTED_MODULE_14__/* .getLanguage */ .G)() ? (0,_helper_functions_getLanguage__WEBPACK_IMPORTED_MODULE_14__/* .getLanguage */ .G)() : "ltr";
    const handleOnChange = (value)=>{
        phoneFormik.setFieldValue("phone", `+${value}`);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__/* .CustomStackFullWidth */ .Xw, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                    children: t(_utils_staticTexts__WEBPACK_IMPORTED_MODULE_13__/* .forgot_password_header */ .TB)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                noValidate: true,
                onSubmit: phoneFormik.handleSubmit,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__/* .CustomStackFullWidth */ .Xw, {
                    mt: "2rem",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_custom_component_CustomPhoneInput__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            value: phoneFormik.values.phone,
                            onHandleChange: handleOnChange,
                            initCountry: configData?.country,
                            touched: phoneFormik.touched.phone,
                            errors: phoneFormik.errors.phone,
                            lanDirection: lanDirection
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_7___default()), {
                            type: "submit",
                            fullWidth: true,
                            variant: "contained",
                            sx: {
                                mt: 3,
                                mb: 2
                            },
                            loading: isLoading,
                            children: t("Next")
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgotPasswordNumberForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 80712:
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
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45269);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57987);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60911);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37730);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33103);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(77749);
/* harmony import */ var _mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50773);
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6354);
/* harmony import */ var _mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(68891);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(76829);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(75609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(86201);
/* harmony import */ var _api_manage_hooks_react_query_forgot_password_useResetPassword__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(87746);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_4__, react_hot_toast__WEBPACK_IMPORTED_MODULE_17__, _api_manage_hooks_react_query_forgot_password_useResetPassword__WEBPACK_IMPORTED_MODULE_18__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_4__, react_hot_toast__WEBPACK_IMPORTED_MODULE_17__, _api_manage_hooks_react_query_forgot_password_useResetPassword__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const NewPassword = ({ data , goBack  })=>{
    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showConfirmPassword, setConfirmShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_16__.useRouter)();
    const newPassFormik = (0,formik__WEBPACK_IMPORTED_MODULE_13__.useFormik)({
        initialValues: {
            reset_token: data.reset_token,
            phone: data.phone,
            password: "",
            confirm_password: ""
        },
        validationSchema: yup__WEBPACK_IMPORTED_MODULE_15__.object({
            password: yup__WEBPACK_IMPORTED_MODULE_15__.string().required(t("No password provided.")).min(6, t("Password is too short - should be 6 chars minimum.")),
            confirm_password: yup__WEBPACK_IMPORTED_MODULE_15__.string().required(t("No Confirm Password provided.")).oneOf([
                yup__WEBPACK_IMPORTED_MODULE_15__.ref("password"),
                null
            ], t("Passwords must match"))
        }),
        onSubmit: async (values, helpers)=>{
            try {
                formSubmitHandler(values);
            } catch (err) {}
        }
    });
    const onSuccessHandler = (res)=>{
        if (res) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_17__["default"].success(res.message);
            router.push("/home", undefined, {
                shallow: true
            });
        }
    };
    const { mutate , isLoading  } = (0,_api_manage_hooks_react_query_forgot_password_useResetPassword__WEBPACK_IMPORTED_MODULE_18__/* .useResetPassword */ .m)(onSuccessHandler);
    const formSubmitHandler = (values)=>{
        mutate(values, {
            onSuccess: onSuccessHandler
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        children: t("Enter your new password")
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                    mt: "2rem",
                    padding: "0 20px",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            noValidate: true,
                            onSubmit: newPassFormik.handleSubmit,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default()), {
                                    sx: {
                                        mt: 2
                                    },
                                    variant: "outlined",
                                    fullWidth: true,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            htmlFor: "outlined-adornment-password",
                                            children: t("Password")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            require: true,
                                            type: showPassword ? "text" : "password",
                                            id: "password",
                                            name: "password",
                                            value: newPassFormik.values.password,
                                            onChange: newPassFormik.handleChange,
                                            error: newPassFormik.touched.password && Boolean(newPassFormik.errors.password),
                                            helperText: newPassFormik.touched.password && newPassFormik.errors.password,
                                            touched: newPassFormik.touched.password,
                                            endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                position: "end",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    "aria-label": "toggle password visibility",
                                                    onClick: ()=>setShowPassword((prevState)=>!prevState),
                                                    //   onMouseDown={handleMouseDownPassword}
                                                    edge: "end",
                                                    children: showPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_9___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_10___default()), {})
                                                })
                                            }),
                                            label: t("Password")
                                        }),
                                        newPassFormik.errors.password && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            sx: {
                                                color: "#FF686A"
                                            },
                                            children: newPassFormik.errors.password
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default()), {
                                    sx: {
                                        mt: 2
                                    },
                                    variant: "outlined",
                                    fullWidth: true,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            htmlFor: "outlined-adornment-password",
                                            children: t("Confirm Password")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            require: true,
                                            type: showConfirmPassword ? "text" : "password",
                                            id: "confirm_password",
                                            name: "confirm_password",
                                            value: newPassFormik.values.confirm_password,
                                            onChange: newPassFormik.handleChange,
                                            error: newPassFormik.touched.confirm_password && Boolean(newPassFormik.errors.confirm_password),
                                            helperText: newPassFormik.touched.confirm_password && newPassFormik.errors.confirm_password,
                                            touched: newPassFormik.touched.confirm_password,
                                            endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                position: "end",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    "aria-label": "toggle password visibility",
                                                    onClick: ()=>setConfirmShowPassword((prevState)=>!prevState),
                                                    //   onMouseDown={handleMouseDownPassword}
                                                    edge: "end",
                                                    children: showConfirmPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_9___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_10___default()), {})
                                                })
                                            }),
                                            label: t("Confirm Password")
                                        }),
                                        newPassFormik.errors.confirm_password && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            sx: {
                                                color: "#FF686A"
                                            },
                                            children: newPassFormik.errors.confirm_password
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_14___default()), {
                                    type: "submit",
                                    fullWidth: true,
                                    variant: "contained",
                                    sx: {
                                        mt: 3,
                                        mb: 2
                                    },
                                    children: t("Done")
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_14___default()), {
                            onClick: goBack,
                            fullWidth: true,
                            variant: "contained",
                            sx: {
                                mb: 2
                            },
                            children: t("Back")
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewPassword);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14302:
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
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45269);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57987);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37730);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76829);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_4__]);
react_i18next__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const OtpForm = ({ data , formSubmitHandler , isLoading  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const otpFormik = (0,formik__WEBPACK_IMPORTED_MODULE_5__.useFormik)({
        //here reset_token is otp inputs
        initialValues: {
            reset_token: "",
            phone: data?.phone
        },
        validationSchema: yup__WEBPACK_IMPORTED_MODULE_8__.object({
            reset_token: yup__WEBPACK_IMPORTED_MODULE_8__.string().required(t("field is empty"))
        }),
        onSubmit: async (values)=>{
            try {
                formSubmitHandler(values);
            } catch (err) {}
        }
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomPaperBigCard */ .iD, {
        width: "auto",
        noboxshadow: "true",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                    alignItems: "center",
                    justifyContent: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            children: t("Enter the verification code (OTP) sent to")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            children: data?.phone
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                    noValidate: true,
                    onSubmit: otpFormik.handleSubmit,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                        mt: "2rem",
                        padding: "0 20px",
                        alignItems: "center",
                        justifyContent: "center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .StyledInputBase */ .el, {
                                // inputRef={input => input && input.focus()}
                                inputProps: {
                                    maxLength: 4
                                },
                                width: "100px",
                                onChange: otpFormik.handleChange,
                                value: otpFormik.values.reset_token,
                                name: "reset_token",
                                error: otpFormik.touched.reset_token && Boolean(otpFormik.errors.reset_token),
                                helperText: otpFormik.touched.reset_token && otpFormik.errors.reset_token,
                                touched: otpFormik.touched.reset_token,
                                required: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_7___default()), {
                                type: "submit",
                                fullWidth: true,
                                variant: "contained",
                                sx: {
                                    mt: 3,
                                    mb: 2
                                },
                                loading: isLoading,
                                children: t("Verify")
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OtpForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 76931:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gw": () => (/* binding */ not_found_text_item),
/* harmony export */   "Hh": () => (/* binding */ not_found_text_store),
/* harmony export */   "TB": () => (/* binding */ forgot_password_header)
/* harmony export */ });
/* harmony import */ var _helper_functions_getStoresOrRestaurants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37698);
/* harmony import */ var _helper_functions_getItemsOrFoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83838);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helper_functions_getStoresOrRestaurants__WEBPACK_IMPORTED_MODULE_0__, _helper_functions_getItemsOrFoods__WEBPACK_IMPORTED_MODULE_1__]);
([_helper_functions_getStoresOrRestaurants__WEBPACK_IMPORTED_MODULE_0__, _helper_functions_getItemsOrFoods__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const not_found_text_store = `No ${(0,_helper_functions_getStoresOrRestaurants__WEBPACK_IMPORTED_MODULE_0__/* .getStoresOrRestaurants */ .s)()} found`;
const not_found_text_item = `No ${(0,_helper_functions_getItemsOrFoods__WEBPACK_IMPORTED_MODULE_1__/* .getItemsOrFoods */ .p)()} found`;
const forgot_password_header = "Please enter your registered mobile number";

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

/***/ 50773:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Visibility");

/***/ }),

/***/ 77749:
/***/ ((module) => {

module.exports = require("@mui/icons-material/VisibilityOff");

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

/***/ 33103:
/***/ ((module) => {

module.exports = require("@mui/material/InputAdornment");

/***/ }),

/***/ 60911:
/***/ ((module) => {

module.exports = require("@mui/material/InputLabel");

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

/***/ 37730:
/***/ ((module) => {

module.exports = require("@mui/material/OutlinedInput");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,8889,5269,7113,4121,8861,9240,4369,801], () => (__webpack_exec__(6719)));
module.exports = __webpack_exports__;

})();
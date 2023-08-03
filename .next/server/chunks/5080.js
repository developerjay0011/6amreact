"use strict";
exports.id = 5080;
exports.ids = [5080];
exports.modules = {

/***/ 95081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/facebookLatest.89b869a8.png","height":827,"width":827,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAcklEQVR42iXLvQ3CUAwEYLf8SKzBAuzBdIhFaBASAkGBmCHdS5EqUqroxb7LOTm7uOI78w+I0DEI+stAJfTPeo4baBCgTHcYTyGdAuJN2fodhKcg6nA0xa/rhBL/spkuqEBOFtPu45fV/IsUfdn5A/T3DDvCb8svURs6AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 40657:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ usePostRegisterInfo)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60274);
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_1__]);
_MainApi__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const postHandler = async (info)=>{
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(`${_ApiRoutes__WEBPACK_IMPORTED_MODULE_2__/* .social_register_api */ .kw}`, info);
    return data;
};
const usePostRegisterInfo = ()=>{
    return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)("info_post_request", postHandler);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96875:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ useSignIn)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60274);
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_1__]);
_MainApi__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const userSignIn = async (signInData)=>{
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(`${_ApiRoutes__WEBPACK_IMPORTED_MODULE_2__/* .signIn_api */ .JF}`, signInData);
    return data;
};
const useSignIn = (handleError)=>{
    return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)("sign-In", userSignIn, {
        onError: handleError
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 54675:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ useVerifyPhone)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60274);
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_1__]);
_MainApi__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const sendOtp = async (otpData)=>{
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(`${_ApiRoutes__WEBPACK_IMPORTED_MODULE_2__/* .verify_phone_api */ .ig}`, {
        phone: otpData?.phone,
        otp: otpData?.reset_token
    });
    return data;
};
const useVerifyPhone = ()=>{
    return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)("verify_phone_otp", sendOtp);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 32399:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ usePostEmail)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60274);
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_1__]);
_MainApi__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const postHandler = async (email)=>{
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(`${_ApiRoutes__WEBPACK_IMPORTED_MODULE_2__/* .social_login_api */ .sL}`, email);
    return data;
};
const usePostEmail = ()=>{
    return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)("email_post_request", postHandler);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CustomImageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58861);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45269);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);







const AuthHeader = ({ title , configData  })=>{
    const businessLogo = configData?.base_urls?.business_logo_url;
    let zoneid = undefined;
    if (false) {}
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const handleLogoClick = ()=>{
        if (router.pathname.includes("/auth")) {
            router.push("/home", undefined, {
                shallow: true
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__/* .CustomStackFullWidth */ .Xw, {
        justifyContent: "center",
        alignItems: "center",
        spacing: 2,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_5__.Box, {
                onClick: handleLogoClick,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImageContainer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    width: "150px",
                    height: "50px",
                    objectfit: "cover",
                    src: `${businessLogo}/${configData?.logo}`
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                variant: "h4",
                textTransform: "uppercase",
                children: title
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthHeader);


/***/ }),

/***/ 72823:
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
/* harmony import */ var _custom_component_CustomPhoneInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65304);
/* harmony import */ var _form_fields_CustomTextFieldWithFormik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42492);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22021);
/* harmony import */ var _helper_functions_getLanguage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46573);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_custom_component_CustomPhoneInput__WEBPACK_IMPORTED_MODULE_3__, i18next__WEBPACK_IMPORTED_MODULE_5__]);
([_custom_component_CustomPhoneInput__WEBPACK_IMPORTED_MODULE_3__, i18next__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const SignInForm = ({ loginFormik , configData , handleOnChange , passwordHandler  })=>{
    const lanDirection = (0,_helper_functions_getLanguage__WEBPACK_IMPORTED_MODULE_6__/* .getLanguage */ .G)() ? (0,_helper_functions_getLanguage__WEBPACK_IMPORTED_MODULE_6__/* .getLanguage */ .G)() : "ltr";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
        alignItems: "center",
        spacing: {
            xs: 2,
            md: 2
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_custom_component_CustomPhoneInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                value: loginFormik.values.phone,
                onHandleChange: handleOnChange,
                initCountry: configData?.country,
                touched: loginFormik.touched.phone,
                errors: loginFormik.errors.phone,
                lanDirection: lanDirection
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_fields_CustomTextFieldWithFormik__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                required: "true",
                type: "password",
                label: (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)("Password"),
                touched: loginFormik.touched.password,
                errors: loginFormik.errors.password,
                fieldProps: loginFormik.getFieldProps("password"),
                onChangeHandler: passwordHandler,
                value: loginFormik.values.password
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignInForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 21688:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57987);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22021);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_2__, i18next__WEBPACK_IMPORTED_MODULE_3__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_2__, i18next__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const SignUpValidation = ()=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    return yup__WEBPACK_IMPORTED_MODULE_1__.object({
        phone: yup__WEBPACK_IMPORTED_MODULE_1__.string().required(t("Please give a phone number")).min(10, "number must be 10 digits"),
        password: yup__WEBPACK_IMPORTED_MODULE_1__.string().min(6, t("Password is too short - should be 6 chars minimum.")).required(t("Password is required"))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpValidation);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 35080:
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
/* harmony import */ var _SignInForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72823);
/* harmony import */ var _landing_page_hero_section_HeroSection_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77591);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22021);
/* harmony import */ var _AuthHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4561);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76829);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _SignInValidation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(21688);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(86201);
/* harmony import */ var _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(67759);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _api_manage_hooks_react_query_auth_useSignIn__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(96875);
/* harmony import */ var _landing_page_hero_section_module_selection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(44442);
/* harmony import */ var _api_manage_hooks_react_query_profile_useGetProfile__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(83291);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _redux_slices_profileInfo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(65337);
/* harmony import */ var _utils_toasterMessages__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(70557);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _social_login_SocialLogins__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(75294);
/* harmony import */ var _api_manage_hooks_react_query_forgot_password_useVerifyPhone__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(54675);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(86390);
/* harmony import */ var _sign_up_OtpForm__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(79180);
/* harmony import */ var _redux_slices_wishList__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(64134);
/* harmony import */ var _api_manage_hooks_react_query_wish_list_useWishListGet__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(10550);
/* harmony import */ var _contexts_settings_context__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(18050);
/* harmony import */ var _utils_setDefaultLanguage__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(94993);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SignInForm__WEBPACK_IMPORTED_MODULE_5__, i18next__WEBPACK_IMPORTED_MODULE_7__, _SignInValidation__WEBPACK_IMPORTED_MODULE_11__, react_hot_toast__WEBPACK_IMPORTED_MODULE_12__, _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_13__, _api_manage_hooks_react_query_auth_useSignIn__WEBPACK_IMPORTED_MODULE_15__, _landing_page_hero_section_module_selection__WEBPACK_IMPORTED_MODULE_16__, _api_manage_hooks_react_query_profile_useGetProfile__WEBPACK_IMPORTED_MODULE_17__, _social_login_SocialLogins__WEBPACK_IMPORTED_MODULE_21__, _api_manage_hooks_react_query_forgot_password_useVerifyPhone__WEBPACK_IMPORTED_MODULE_22__, _sign_up_OtpForm__WEBPACK_IMPORTED_MODULE_24__, _api_manage_hooks_react_query_wish_list_useWishListGet__WEBPACK_IMPORTED_MODULE_26__]);
([_SignInForm__WEBPACK_IMPORTED_MODULE_5__, i18next__WEBPACK_IMPORTED_MODULE_7__, _SignInValidation__WEBPACK_IMPORTED_MODULE_11__, react_hot_toast__WEBPACK_IMPORTED_MODULE_12__, _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_13__, _api_manage_hooks_react_query_auth_useSignIn__WEBPACK_IMPORTED_MODULE_15__, _landing_page_hero_section_module_selection__WEBPACK_IMPORTED_MODULE_16__, _api_manage_hooks_react_query_profile_useGetProfile__WEBPACK_IMPORTED_MODULE_17__, _social_login_SocialLogins__WEBPACK_IMPORTED_MODULE_21__, _api_manage_hooks_react_query_forgot_password_useVerifyPhone__WEBPACK_IMPORTED_MODULE_22__, _sign_up_OtpForm__WEBPACK_IMPORTED_MODULE_24__, _api_manage_hooks_react_query_wish_list_useWishListGet__WEBPACK_IMPORTED_MODULE_26__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








// import AcceptTermsAndConditions from "../../../../pages/auth/AcceptTermsAndConditions";






















const SignIn = ({ configData  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const previousRouteName = router.query.from;
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_18__.useDispatch)();
    const [openModuleSelection, setOpenModuleSelection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [openOtpModal, setOpenOtpModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [otpData, setOtpData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        phone: ""
    });
    const [mainToken, setMainToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [isApiCalling, setIsApiCalling] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isRemember, setIsRemember] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const textColor = theme.palette.whiteContainer.main;
    let userDatafor = undefined;
    if (false) {}
    const loginFormik = (0,formik__WEBPACK_IMPORTED_MODULE_14__.useFormik)({
        initialValues: {
            phone: userDatafor ? userDatafor.phone : "",
            password: userDatafor ? userDatafor.password : "",
            tandc: false
        },
        validationSchema: (0,_SignInValidation__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(),
        onSubmit: async (values, helpers)=>{
            try {
                if (isRemember) {
                    localStorage.setItem("userDatafor", JSON.stringify(values));
                }
                formSubmitHandler(values);
            } catch (err) {
                console.log(err);
            }
        }
    });
    let location = undefined;
    let isModuleSelected = undefined;
    let lanDirection = undefined;
    if (false) {}
    const handleOnChange = (value)=>{
        loginFormik.setFieldValue("phone", `+${value}`);
    };
    const passwordHandler = (value)=>{
        loginFormik.setFieldValue("password", value);
    };
    const handleCheckbox = (e)=>{
        loginFormik.setFieldValue("tandc", e.target.checked);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (otpData?.phone !== "") {
            setOpenOtpModal(true);
        }
    }, [
        otpData
    ]);
    const onSuccessHandler = (response)=>{
        dispatch((0,_redux_slices_wishList__WEBPACK_IMPORTED_MODULE_25__/* .setWishList */ .Q5)(response));
        setIsApiCalling(false);
    };
    const { refetch: wishlistRefetch , isLoading: isLoadingWishlist  } = (0,_api_manage_hooks_react_query_wish_list_useWishListGet__WEBPACK_IMPORTED_MODULE_26__/* .useWishListGet */ .F)(onSuccessHandler);
    const userOnSuccessHandler = (res)=>{
        dispatch((0,_redux_slices_profileInfo__WEBPACK_IMPORTED_MODULE_19__/* .setUser */ .av)(res));
    //handleClose()
    };
    const { data: userData , refetch: profileRefetch  } = (0,_api_manage_hooks_react_query_profile_useGetProfile__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(userOnSuccessHandler);
    const handleTokenAfterSignIn = async (response)=>{
        if (response?.data) {
            localStorage.setItem("token", response?.data?.token);
            await wishlistRefetch();
            await profileRefetch();
            react_hot_toast__WEBPACK_IMPORTED_MODULE_12__["default"].success((0,i18next__WEBPACK_IMPORTED_MODULE_7__.t)(_utils_toasterMessages__WEBPACK_IMPORTED_MODULE_28__/* .loginSuccessFull */ .cu));
        }
    };
    const handleTokenAfterSignUp = async (response)=>{
        if (response) {
            if (false) {}
            react_hot_toast__WEBPACK_IMPORTED_MODULE_12__["default"].success((0,i18next__WEBPACK_IMPORTED_MODULE_7__.t)(_utils_toasterMessages__WEBPACK_IMPORTED_MODULE_28__/* .SigninSuccessFull */ .X1));
            if (location && !isModuleSelected) {
                setOpenModuleSelection(true);
            } else {
                if (previousRouteName) {
                    router.push("/home");
                } else {
                    await router.back();
                }
            }
        // dispatch(setToken(response?.data?.token));
        // router.push("/");
        }
    };
    const handleCloseModuleModal = (item)=>{
        if (item) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_12__["default"].success((0,i18next__WEBPACK_IMPORTED_MODULE_7__.t)(_utils_toasterMessages__WEBPACK_IMPORTED_MODULE_28__/* .moduleSelected */ .s0));
            if (previousRouteName) {
                router.push("/home");
            } else {
                router.back();
            }
        }
        setOpenModuleSelection(false);
    };
    const handleError = ()=>{
        setIsApiCalling(false);
    };
    const { mutate  } = (0,_api_manage_hooks_react_query_auth_useSignIn__WEBPACK_IMPORTED_MODULE_15__/* .useSignIn */ .z)(handleError);
    const formSubmitHandler = (values)=>{
        setIsApiCalling(true);
        mutate(values, {
            onSuccess: async (response)=>{
                (0,_utils_setDefaultLanguage__WEBPACK_IMPORTED_MODULE_29__/* .setDefaultLanguage */ .m)();
                if (configData?.customer_verification) {
                    if (Number.parseInt(response?.is_phone_verified) === 1) {
                        await handleTokenAfterSignUp(response);
                    } else {
                        setOtpData({
                            phone: values?.phone
                        });
                        setMainToken(response);
                    }
                } else {
                    await handleTokenAfterSignUp(response);
                }
            },
            onError: _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_13__/* .onErrorResponse */ .R
        });
    };
    const { mutate: otpVerifyMutate , isLoading: isLoadingOtpVerifyApi  } = (0,_api_manage_hooks_react_query_forgot_password_useVerifyPhone__WEBPACK_IMPORTED_MODULE_22__/* .useVerifyPhone */ .t)();
    const otpFormSubmitHandler = (values)=>{
        const onSuccessHandler = (res)=>{
            react_hot_toast__WEBPACK_IMPORTED_MODULE_12__["default"].success(res?.message);
            setOpenOtpModal(false);
            handleTokenAfterSignIn(mainToken);
        };
        otpVerifyMutate(values, {
            onSuccess: onSuccessHandler,
            onError: _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_13__/* .onSingleErrorResponse */ .f
        });
    };
    const handleFormBasedOnDirection = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_settings_context__WEBPACK_IMPORTED_MODULE_27__/* .SettingsProvider */ .mu, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_settings_context__WEBPACK_IMPORTED_MODULE_27__/* .SettingsConsumer */ .ix, {
                children: (value)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SignInForm__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        configData: configData,
                        handleOnChange: handleOnChange,
                        passwordHandler: passwordHandler,
                        loginFormik: loginFormik,
                        lanDirection: value?.settings?.direction
                    })
            })
        });
    const rememberMeHandleChange = (e)=>{
        if (e.target.checked) {
            setIsRemember(true);
        } else {
            localStorage.removeItem("userDatafor");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.NoSsr, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                    justifyContent: "center",
                    alignItems: "center",
                    // mt="10rem"
                    pb: "80px",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        maxWidth: "500px",
                        width: "100%",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomPaperBigCard */ .iD, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                // justifyContent="center"
                                // alignItems="center"
                                spacing: 2,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AuthHeader__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        configData: configData,
                                        title: (0,i18next__WEBPACK_IMPORTED_MODULE_7__.t)("Sign In")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                        noValidate: true,
                                        onSubmit: loginFormik.handleSubmit,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                            spacing: 2,
                                            children: [
                                                handleFormBasedOnDirection(),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    direction: "row",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.FormControlLabel, {
                                                            control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {
                                                                value: "remember",
                                                                color: "primary",
                                                                onChange: rememberMeHandleChange
                                                            }),
                                                            label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_landing_page_hero_section_HeroSection_style__WEBPACK_IMPORTED_MODULE_6__/* .CustomTypography */ .ZT, {
                                                                fontSize: "14px",
                                                                children: (0,i18next__WEBPACK_IMPORTED_MODULE_7__.t)("Remember me")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_20___default()), {
                                                            href: "/forgot-password",
                                                            children: (0,i18next__WEBPACK_IMPORTED_MODULE_7__.t)("Forgot password?")
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                                    spacing: 2,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                            type: "submit",
                                                            fullWidth: true,
                                                            variant: "contained",
                                                            loading: isApiCalling,
                                                            sx: {
                                                                color: textColor
                                                            },
                                                            children: (0,i18next__WEBPACK_IMPORTED_MODULE_7__.t)("Sign In")
                                                        }),
                                                        configData?.social_login?.length > 0 && configData?.social_login?.some((item)=>item.status === true) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            spacing: 1,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomTypographyGray */ .mI, {
                                                                    nodefaultfont: "true",
                                                                    children: (0,i18next__WEBPACK_IMPORTED_MODULE_7__.t)("Or")
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_landing_page_hero_section_HeroSection_style__WEBPACK_IMPORTED_MODULE_6__/* .CustomTypography */ .ZT, {
                                                                    children: (0,i18next__WEBPACK_IMPORTED_MODULE_7__.t)("Login with")
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_social_login_SocialLogins__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                                                    socialLogin: configData?.social_login
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                            children: [
                                                                (0,i18next__WEBPACK_IMPORTED_MODULE_7__.t)("Don't have an account?"),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_20___default()), {
                                                                    href: "/auth/sign-up",
                                                                    style: {
                                                                        color: theme.palette.primary.main,
                                                                        textDecoration: "underline"
                                                                    },
                                                                    children: (0,i18next__WEBPACK_IMPORTED_MODULE_7__.t)("Sign Up")
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            openModuleSelection && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_landing_page_hero_section_module_selection__WEBPACK_IMPORTED_MODULE_16__/* .ModuleSelection */ .U, {
                location: location,
                closeModal: handleCloseModuleModal,
                disableAutoFocus: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modal__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                handleClose: ()=>setOpenOtpModal(false),
                openModal: openOtpModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sign_up_OtpForm__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                    data: otpData,
                    formSubmitHandler: otpFormSubmitHandler,
                    isLoading: isLoadingOtpVerifyApi
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignIn);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5611:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apple_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31487);
/* harmony import */ var react_apple_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apple_login__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Apple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27134);
/* harmony import */ var _mui_icons_material_Apple__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Apple__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57987);
/* harmony import */ var _utils_staticCredential__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13835);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_6__]);
react_i18next__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const AppleLoginComp = (props)=>{
    const credentials = _utils_staticCredential__WEBPACK_IMPORTED_MODULE_7__/* .appleLoginCredential */ .Xx;
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
    const handleAppleResponse = async (res)=>{};
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_apple_login__WEBPACK_IMPORTED_MODULE_3___default()), {
            clientId: credentials.serviceId,
            redirectURI: credentials.redirectURI,
            responseType: "code",
            responseMode: "form_post",
            usePopup: true,
            callback: handleAppleResponse,
            scope: "email name",
            render: (renderProps //Custom Apple Sign in Button
            )=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                    onClick: renderProps.onClick,
                    sx: {
                        width: "220px",
                        border: (theme)=>`1px solid ${theme.palette.neutral[1000]}`
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Apple__WEBPACK_IMPORTED_MODULE_5___default()), {
                            sx: {
                                color: (theme)=>theme.palette.neutral[1000]
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                            sx: {
                                color: (theme)=>theme.palette.neutral[1000]
                            },
                            children: t("Continue with Apple")
                        })
                    ]
                })
        })
    });
};
AppleLoginComp.propTypes = {};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (AppleLoginComp)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 44855:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PhoneInputForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20746);
/* harmony import */ var _CustomImageContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58861);
/* harmony import */ var _public_static_footer_socialicons_facebook_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12998);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66804);
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86201);
/* harmony import */ var _public_static_facebookLatest_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95081);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45269);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57987);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _redux_slices_fbCredentials__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(50307);
/* harmony import */ var _api_manage_hooks_react_query_social_login_useEmailPost__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(32399);
/* harmony import */ var _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(67759);
/* harmony import */ var _api_manage_hooks_react_query_forgot_password_useVerifyPhone__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(54675);
/* harmony import */ var _sign_up_OtpForm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(79180);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(86390);
/* harmony import */ var _utils_staticCredential__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(13835);
/* harmony import */ var _ModalCustom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(75893);
/* harmony import */ var _helper_functions_getLanguage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(46573);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PhoneInputForm__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_7__, react_i18next__WEBPACK_IMPORTED_MODULE_11__, _api_manage_hooks_react_query_social_login_useEmailPost__WEBPACK_IMPORTED_MODULE_14__, _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_15__, _api_manage_hooks_react_query_forgot_password_useVerifyPhone__WEBPACK_IMPORTED_MODULE_16__, _sign_up_OtpForm__WEBPACK_IMPORTED_MODULE_17__]);
([_PhoneInputForm__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_7__, react_i18next__WEBPACK_IMPORTED_MODULE_11__, _api_manage_hooks_react_query_social_login_useEmailPost__WEBPACK_IMPORTED_MODULE_14__, _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_15__, _api_manage_hooks_react_query_forgot_password_useVerifyPhone__WEBPACK_IMPORTED_MODULE_16__, _sign_up_OtpForm__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















const FbLoginComp = (props)=>{
    const { handleSuccess , configData , handleParentModalClose  } = props;
    const { userInfo , jwtToken  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)((state)=>state.fbCredentialsStore);
    const [openModal, setOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [openOtpModal, setOpenOtpModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [otpData, setOtpData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        phone: ""
    });
    const [mainToken, setMainToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useDispatch)();
    const appId = _utils_staticCredential__WEBPACK_IMPORTED_MODULE_19__/* .fb_app_id */ .i_;
    const { mutate  } = (0,_api_manage_hooks_react_query_social_login_useEmailPost__WEBPACK_IMPORTED_MODULE_14__/* .usePostEmail */ .v)();
    const handleToken = (response)=>{
        if (response?.token) {
            handleSuccess(response.token);
        } else {
            setOpenModal(true);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (otpData?.phone !== "") {
            setOpenOtpModal(true);
        }
    }, [
        otpData
    ]);
    const handlePostRequestOnSuccess = (response)=>{
        if (configData?.customer_verification) {
            if (Number.parseInt(response?.is_phone_verified) === 1) {
                handleToken(response);
            } else {
                if (response?.phone) {
                    setOtpData({
                        phone: response?.phone
                    });
                }
                if (response?.token) {
                    setMainToken(response);
                }
            }
        } else {
            handleToken(response);
        }
    };
    const responseFacebook = async (res)=>{
        dispatch((0,_redux_slices_fbCredentials__WEBPACK_IMPORTED_MODULE_13__/* .setUserInfoByDispatch */ .kv)(res));
        dispatch((0,_redux_slices_fbCredentials__WEBPACK_IMPORTED_MODULE_13__/* .setJwtTokenByDispatch */ .ij)(res));
        await mutate({
            email: res?.email,
            token: res?.accessToken,
            unique_id: res?.id,
            medium: "facebook",
            phone: res?.phone
        }, {
            onSuccess: handlePostRequestOnSuccess,
            onError: (error)=>{
                error?.response?.data?.errors?.forEach((item)=>item.code === "email" ? handleToken() : react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast.error(item.message));
            }
        });
    };
    const handleRegistrationOnSuccess = (token)=>{
        //registration on success func remaining
        handleSuccess(token);
        handleParentModalClose();
        setOpenModal(false);
    };
    const onSuccessHandler = (res)=>{
        react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast.success(res?.message);
        setOpenOtpModal(false);
        handleToken(mainToken);
        handleParentModalClose();
    };
    const { mutate: signInMutate , isLoading  } = (0,_api_manage_hooks_react_query_forgot_password_useVerifyPhone__WEBPACK_IMPORTED_MODULE_16__/* .useVerifyPhone */ .t)();
    const formSubmitHandler = (values)=>{
        signInMutate(values, {
            onSuccess: onSuccessHandler,
            onError: _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_15__/* .onErrorResponse */ .R
        });
    };
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_11__.useTranslation)();
    const lanDirection = (0,_helper_functions_getLanguage__WEBPACK_IMPORTED_MODULE_21__/* .getLanguage */ .G)() ? (0,_helper_functions_getLanguage__WEBPACK_IMPORTED_MODULE_21__/* .getLanguage */ .G)() : "ltr";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_6___default()), {
                appId: appId,
                autoLoad: false,
                fields: "name,email,picture",
                callback: responseFacebook,
                render: (renderProps)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            cursor: "pointer",
                            width: "100%"
                        },
                        onClick: renderProps.onClick,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Stack, {
                            alignItems: "center",
                            sx: {
                                backgroundColor: (theme)=>theme.palette.info.dark,
                                height: "45px",
                                width: "100%",
                                borderRadius: "4px",
                                padding: "10px",
                                textAlign: "center"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_10__/* .CustomStackFullWidth */ .Xw, {
                                direction: "row",
                                alignItems: "center",
                                spacing: 1,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImageContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        src: _public_static_facebookLatest_png__WEBPACK_IMPORTED_MODULE_8__/* ["default"].src */ .Z.src,
                                        alt: "facebook",
                                        height: "25px",
                                        width: "25px",
                                        objectFit: "contained"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {
                                        fontSize: "14px",
                                        fontWeight: "600",
                                        sx: {
                                            color: (theme)=>theme.palette.whiteContainer.main
                                        },
                                        children: t("Continue with facebook")
                                    })
                                ]
                            })
                        })
                    })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalCustom__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                openModal: openModal,
                setModalOpen: setOpenModal,
                handleClose: ()=>setOpenModal(false),
                children: userInfo && jwtToken && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PhoneInputForm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    configData: configData,
                    userInfo: userInfo,
                    jwtToken: jwtToken,
                    medium: "facebook",
                    handleRegistrationOnSuccess: handleRegistrationOnSuccess,
                    lanDirection: lanDirection
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modal__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                openModal: openOtpModal,
                setModalOpen: setOpenOtpModal,
                handleClose: ()=>setOpenModal(false),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sign_up_OtpForm__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                    data: otpData,
                    formSubmitHandler: formSubmitHandler,
                    isLoading: isLoading
                })
            })
        ]
    });
};
FbLoginComp.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FbLoginComp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71921:
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
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45567);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86201);
/* harmony import */ var _api_manage_hooks_react_query_social_login_useEmailPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32399);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86390);
/* harmony import */ var _PhoneInputForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20746);
/* harmony import */ var _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67759);
/* harmony import */ var _sign_up_OtpForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79180);
/* harmony import */ var _api_manage_hooks_react_query_forgot_password_useVerifyPhone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54675);
/* harmony import */ var _utils_staticCredential__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13835);
/* harmony import */ var _ModalCustom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(75893);
/* harmony import */ var _helper_functions_getLanguage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(46573);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _api_manage_hooks_react_query_social_login_useEmailPost__WEBPACK_IMPORTED_MODULE_5__, _PhoneInputForm__WEBPACK_IMPORTED_MODULE_7__, _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_8__, _sign_up_OtpForm__WEBPACK_IMPORTED_MODULE_9__, _api_manage_hooks_react_query_forgot_password_useVerifyPhone__WEBPACK_IMPORTED_MODULE_10__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _api_manage_hooks_react_query_social_login_useEmailPost__WEBPACK_IMPORTED_MODULE_5__, _PhoneInputForm__WEBPACK_IMPORTED_MODULE_7__, _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_8__, _sign_up_OtpForm__WEBPACK_IMPORTED_MODULE_9__, _api_manage_hooks_react_query_forgot_password_useVerifyPhone__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// import CustomModal from "../../../custom-modal/CustomModal";
// import PhoneInputForm from "./PhoneInputForm";
// import OtpForm from "../../forgot-password/OtpForm";

// import { useVerifyPhone } from "../../../../hooks/react-query/otp/useVerifyPhone";









// import { gapi } from 'gapi-scrip
// import { gapi } from 'gapi-script'
const GoogleLoginComp = (props)=>{
    const { handleSuccess , configData , handleParentModalClose  } = props;
    const [userInfo, setUserInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [jwtToken, setJwtToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [openModal, setOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [openOtpModal, setOpenOtpModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [otpData, setOtpData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        phone: ""
    });
    const [mainToken, setMainToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { mutate  } = (0,_api_manage_hooks_react_query_social_login_useEmailPost__WEBPACK_IMPORTED_MODULE_5__/* .usePostEmail */ .v)();
    const clientId = _utils_staticCredential__WEBPACK_IMPORTED_MODULE_11__/* .google_client_id */ .q$;
    const handleToken = (response)=>{
        if (response?.token) {
            handleSuccess(response.token);
        } else {
            setOpenModal(true);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (otpData?.phone !== "") {
            setOpenOtpModal(true);
        }
    }, [
        otpData
    ]);
    const handlePostRequestOnSuccess = (response)=>{
        if (configData?.customer_verification) {
            if (Number.parseInt(response?.is_phone_verified) === 1) {
                handleToken(response);
            } else {
                if (response?.phone) {
                    setOtpData({
                        phone: response?.phone
                    });
                }
                if (response?.token) {
                    setMainToken(response);
                }
            }
        } else {
            handleToken(response);
        }
    };
    const handleCallBackResponse = (res)=>{
        const userObj = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(res.credential);
        setJwtToken(res);
        setUserInfo(userObj);
        mutate({
            email: userObj.email,
            token: res.credential,
            unique_id: res?.clientId,
            medium: "google"
        }, {
            onSuccess: handlePostRequestOnSuccess,
            onError: (error)=>{
                error?.response?.data?.errors?.forEach((item)=>item.code === "email" ? handleToken() : react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.toast.error(item.message));
            }
        });
    };
    const handleTokenCallBackResponse = (res)=>{
    //const userObj = jwt_decode(res.credential)
    // setJwtToken(res)
    // setUserInfo(userObj)
    // mutate(
    //     { email: userObj.email },
    //     {
    //         onSuccess: handlePostRequestOnSuccess,
    //     }
    // )
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        /* global google */ if (true) {
            window?.google?.accounts?.id?.initialize({
                client_id: clientId,
                callback: handleCallBackResponse
            });
            window?.google?.accounts?.id?.renderButton(document.getElementById("signInDiv"), {
                theme: "outline",
                size: "large"
            });
        }
    }, []);
    // const handleOnError = (res) => {
    //
    // }
    const handleRegistrationOnSuccess = (token)=>{
        //registration on success func remaining
        setOpenModal(false);
        handleSuccess(token);
        handleParentModalClose();
    };
    const onSuccessHandler = (res)=>{
        react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.toast.success(res?.message);
        setOpenOtpModal(false);
        handleToken(mainToken);
        handleParentModalClose();
    };
    const { mutate: signInMutate , isLoading  } = (0,_api_manage_hooks_react_query_forgot_password_useVerifyPhone__WEBPACK_IMPORTED_MODULE_10__/* .useVerifyPhone */ .t)();
    const formSubmitHandler = (values)=>{
        signInMutate(values, {
            onSuccess: onSuccessHandler,
            onError: _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_8__/* .onErrorResponse */ .R
        });
    };
    const lanDirection = (0,_helper_functions_getLanguage__WEBPACK_IMPORTED_MODULE_13__/* .getLanguage */ .G)() ? (0,_helper_functions_getLanguage__WEBPACK_IMPORTED_MODULE_13__/* .getLanguage */ .G)() : "ltr";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "signInDiv",
                style: {
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    margin: "auto"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalCustom__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                openModal: openModal,
                setModalOpen: setOpenModal,
                handleClose: ()=>setOpenModal(false),
                children: userInfo && jwtToken && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PhoneInputForm__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    userInfo: userInfo,
                    jwtToken: jwtToken,
                    medium: "google",
                    handleRegistrationOnSuccess: handleRegistrationOnSuccess,
                    configData: configData,
                    lanDirection: lanDirection
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                openModal: openOtpModal,
                handleClose: ()=>setOpenOtpModal(false),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sign_up_OtpForm__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    data: otpData,
                    formSubmitHandler: formSubmitHandler,
                    isLoading: isLoading
                })
            })
        ]
    });
};
GoogleLoginComp.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoogleLoginComp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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




const ModalCustom = ({ openModal , setModalOpen , children , disableAutoFocus  })=>{
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const matches = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)(theme.breakpoints.up("sm"));
    const handleClose = (event, reason)=>{
        if (reason && reason == "backdropClick") {
            if (disableAutoFocus) {
                return;
            } else {
                setModalOpen(false);
            }
        } else {
            setModalOpen(false);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Modal, {
            open: openModal,
            onClose: handleClose,
            "aria-labelledby": "modal-modal-title",
            "aria-describedby": "modal-modal-description",
            disableAutoFocus: disableAutoFocus,
            backDrop: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomModalWrapper */ .kY, {
                children: children
            })
        })
    });
};
ModalCustom.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalCustom);


/***/ }),

/***/ 20746:
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
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57987);
/* harmony import */ var _alert_CustomAlert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67294);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76829);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _custom_component_CustomPhoneInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65304);
/* harmony import */ var _api_manage_hooks_react_query_auth_usePostRegisterInfo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(40657);
/* harmony import */ var _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(67759);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_7__, _alert_CustomAlert__WEBPACK_IMPORTED_MODULE_8__, _custom_component_CustomPhoneInput__WEBPACK_IMPORTED_MODULE_10__, _api_manage_hooks_react_query_auth_usePostRegisterInfo__WEBPACK_IMPORTED_MODULE_11__, _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_12__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_7__, _alert_CustomAlert__WEBPACK_IMPORTED_MODULE_8__, _custom_component_CustomPhoneInput__WEBPACK_IMPORTED_MODULE_10__, _api_manage_hooks_react_query_auth_usePostRegisterInfo__WEBPACK_IMPORTED_MODULE_11__, _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const PhoneInputForm = (props)=>{
    const { userInfo , jwtToken , medium , handleRegistrationOnSuccess , configData , lanDirection  } = props;
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    const { mutate , isLoading  } = (0,_api_manage_hooks_react_query_auth_usePostRegisterInfo__WEBPACK_IMPORTED_MODULE_11__/* .usePostRegisterInfo */ .H)();
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_5__.useFormik)({
        initialValues: {
            phone: ""
        },
        validationSchema: yup__WEBPACK_IMPORTED_MODULE_6__.object({
            phone: yup__WEBPACK_IMPORTED_MODULE_6__.string().required(t("Please give a phone number")).min(10, "number must be 10 digits")
        }),
        onSubmit: async (values, helpers)=>{
            try {
                handleOnSubmitFormik(values);
            } catch (err) {}
        }
    });
    const handleOnSubmitFormik = (values)=>{
        const info = {
            email: userInfo?.email,
            token: jwtToken?.credential,
            unique_id: jwtToken?.clientId,
            medium: medium,
            phone: values.phone
        };
        mutate(info, {
            onSuccess: (response)=>{
                handleRegistrationOnSuccess(response?.token);
            },
            onError: _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_12__/* .onErrorResponse */ .R
        });
    };
    const handleOnChange = (value)=>{
        formik.setFieldValue("phone", `+${value}`);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Paper, {
        sx: {
            padding: "1rem",
            position: "relative"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
            onSubmit: formik.handleSubmit,
            noValidate: true,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
                spacing: 2,
                sx: {
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_alert_CustomAlert__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        type: "info",
                        text: t("Give a valid phone number to continue sign-in")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_custom_component_CustomPhoneInput__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        value: formik.values.phone,
                        onHandleChange: handleOnChange,
                        initCountry: configData?.country,
                        touched: formik.touched.phone,
                        errors: formik.errors.phone,
                        lanDirection: lanDirection
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_9___default()), {
                        type: "submit",
                        fullWidth: true,
                        variant: "contained",
                        loading: isLoading,
                        children: t("Continue")
                    })
                ]
            })
        })
    });
};
PhoneInputForm.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhoneInputForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75294:
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
/* harmony import */ var _GoogleLoginComp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71921);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86201);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57987);
/* harmony import */ var _redux_slices_profileInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65337);
/* harmony import */ var _api_manage_hooks_react_query_profile_useGetProfile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83291);
/* harmony import */ var _redux_slices_wishList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64134);
/* harmony import */ var _api_manage_hooks_react_query_wish_list_useWishListGet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10550);
/* harmony import */ var _utils_toasterMessages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(70557);
/* harmony import */ var _FbLoginComp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44855);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _AppleLoginComp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5611);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_GoogleLoginComp__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, react_i18next__WEBPACK_IMPORTED_MODULE_6__, _api_manage_hooks_react_query_profile_useGetProfile__WEBPACK_IMPORTED_MODULE_8__, _api_manage_hooks_react_query_wish_list_useWishListGet__WEBPACK_IMPORTED_MODULE_10__, _FbLoginComp__WEBPACK_IMPORTED_MODULE_11__, _AppleLoginComp__WEBPACK_IMPORTED_MODULE_13__]);
([_GoogleLoginComp__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, react_i18next__WEBPACK_IMPORTED_MODULE_6__, _api_manage_hooks_react_query_profile_useGetProfile__WEBPACK_IMPORTED_MODULE_8__, _api_manage_hooks_react_query_wish_list_useWishListGet__WEBPACK_IMPORTED_MODULE_10__, _FbLoginComp__WEBPACK_IMPORTED_MODULE_11__, _AppleLoginComp__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// import FbLoginComp from "./FbLoginComp";











const SocialLogins = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
    const { socialLogin  } = props;
    const { configData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.configData);
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const userOnSuccessHandler = (res)=>{
        dispatch((0,_redux_slices_profileInfo__WEBPACK_IMPORTED_MODULE_7__/* .setUser */ .av)(res));
    };
    const { refetch: profileRefetch  } = (0,_api_manage_hooks_react_query_profile_useGetProfile__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(userOnSuccessHandler);
    const onSuccessHandler = (response)=>{
        dispatch((0,_redux_slices_wishList__WEBPACK_IMPORTED_MODULE_9__/* .setWishList */ .Q5)(response));
    };
    const { refetch  } = (0,_api_manage_hooks_react_query_wish_list_useWishListGet__WEBPACK_IMPORTED_MODULE_10__/* .useWishListGet */ .F)(onSuccessHandler);
    const handleSuccess = async (value)=>{
        localStorage.setItem("token", value);
        react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.success(t(_utils_toasterMessages__WEBPACK_IMPORTED_MODULE_14__/* .loginSuccessFull */ .cu));
        await refetch();
        await profileRefetch();
        router.push("/home", undefined, {
            shallow: true
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        alignItems: "center",
        justifyContent: "center",
        spacing: 1,
        children: socialLogin?.map((item, index)=>{
            if (item?.login_medium === "google" && item.status === true) {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GoogleLoginComp__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    handleSuccess: handleSuccess,
                    configData: configData
                }, index);
            } else if (item?.login_medium === "facebook" && item.status === true) {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FbLoginComp__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    handleSuccess: handleSuccess,
                    //handleParentModalClose={handleParentModalClose}
                    configData: configData
                }, index);
            }
        })
    });
};
SocialLogins.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(SocialLogins));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 79180:
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
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76829);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_7__);
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
        validationSchema: yup__WEBPACK_IMPORTED_MODULE_7__.object({
            reset_token: yup__WEBPACK_IMPORTED_MODULE_7__.string().required(t("field is empty"))
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_6___default()), {
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

/***/ 94993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ setDefaultLanguage)
/* harmony export */ });
const setDefaultLanguage = ()=>{
    const lan = "en";
    localStorage.setItem("language-setting", JSON.stringify(lan));
};


/***/ }),

/***/ 13835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Xx": () => (/* binding */ appleLoginCredential),
/* harmony export */   "i_": () => (/* binding */ fb_app_id),
/* harmony export */   "q$": () => (/* binding */ google_client_id)
/* harmony export */ });
const google_client_id = "";
const fb_app_id = "";
const appleLoginCredential = {
    appleId: "",
    serviceId: "",
    privateKey: "",
    redirectURI: ``
};


/***/ })

};
;
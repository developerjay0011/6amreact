"use strict";
exports.id = 8218;
exports.ids = [8218];
exports.modules = {

/***/ 35432:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ useSignUp)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60274);
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_1__]);
_MainApi__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const userSignUp = async (signUpData)=>{
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(`${_ApiRoutes__WEBPACK_IMPORTED_MODULE_2__/* .signUp_api */ .h6}`, signUpData);
    return data;
};
const useSignUp = ()=>{
    return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)("sign-up", userSignUp);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 44657:
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
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22021);
/* harmony import */ var _landing_page_hero_section_HeroSection_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77591);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_4__]);
i18next__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const AcceptTermsAndConditions = ({ handleCheckbox , formikType , handleClick  })=>{
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                direction: "row",
                alignItems: "center",
                spacing: {
                    xs: "0",
                    md: ".5"
                },
                sx: {
                    mt: "-10px"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.FormControlLabel, {
                        sx: {
                            marginRight: "5px",
                            "& .MuiFormControlLabel-label": {
                                fontSize: "14px",
                                color: (theme)=>theme.palette.neutral[1000]
                            },
                            [theme.breakpoints.down("sm")]: {
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "12px"
                                }
                            }
                        },
                        control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {
                            value: "ff",
                            color: "primary",
                            onChange: handleCheckbox,
                            required: "true"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                        children: [
                            (0,i18next__WEBPACK_IMPORTED_MODULE_4__.t)("You must accept the"),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                onClick: handleClick,
                                style: {
                                    color: theme.palette.primary.main,
                                    cursor: "pointer",
                                    textDecoration: "underline"
                                },
                                children: (0,i18next__WEBPACK_IMPORTED_MODULE_4__.t)("terms and conditions")
                            })
                        ]
                    })
                ]
            }),
            formikType.touched.tandc && formikType.errors.tandc && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_landing_page_hero_section_HeroSection_style__WEBPACK_IMPORTED_MODULE_5__/* .CustomTypography */ .ZT, {
                variant: "caption",
                sx: {
                    fontWeight: "inherit",
                    color: (theme)=>theme.palette.error.main
                },
                children: (0,i18next__WEBPACK_IMPORTED_MODULE_4__.t)("You must accept the terms and conditions")
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AcceptTermsAndConditions);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8218:
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
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45269);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AuthHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4561);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22021);
/* harmony import */ var _SignUpForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81321);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76829);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _SignUpValidation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(49792);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(86201);
/* harmony import */ var _api_manage_hooks_react_query_auth_useSignUp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(35432);
/* harmony import */ var _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(67759);
/* harmony import */ var _landing_page_hero_section_module_selection__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(44442);
/* harmony import */ var _AcceptTermsAndConditions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(44657);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(86390);
/* harmony import */ var _OtpForm__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(79180);
/* harmony import */ var _api_manage_hooks_react_query_forgot_password_useVerifyPhone__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(54675);
/* harmony import */ var _utils_toasterMessages__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(70557);
/* harmony import */ var _utils_setDefaultLanguage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(94993);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_5__, _SignUpForm__WEBPACK_IMPORTED_MODULE_6__, _SignUpValidation__WEBPACK_IMPORTED_MODULE_10__, react_hot_toast__WEBPACK_IMPORTED_MODULE_14__, _api_manage_hooks_react_query_auth_useSignUp__WEBPACK_IMPORTED_MODULE_15__, _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_16__, _landing_page_hero_section_module_selection__WEBPACK_IMPORTED_MODULE_17__, _AcceptTermsAndConditions__WEBPACK_IMPORTED_MODULE_18__, _OtpForm__WEBPACK_IMPORTED_MODULE_21__, _api_manage_hooks_react_query_forgot_password_useVerifyPhone__WEBPACK_IMPORTED_MODULE_22__]);
([i18next__WEBPACK_IMPORTED_MODULE_5__, _SignUpForm__WEBPACK_IMPORTED_MODULE_6__, _SignUpValidation__WEBPACK_IMPORTED_MODULE_10__, react_hot_toast__WEBPACK_IMPORTED_MODULE_14__, _api_manage_hooks_react_query_auth_useSignUp__WEBPACK_IMPORTED_MODULE_15__, _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_16__, _landing_page_hero_section_module_selection__WEBPACK_IMPORTED_MODULE_17__, _AcceptTermsAndConditions__WEBPACK_IMPORTED_MODULE_18__, _OtpForm__WEBPACK_IMPORTED_MODULE_21__, _api_manage_hooks_react_query_forgot_password_useVerifyPhone__WEBPACK_IMPORTED_MODULE_22__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







// import AcceptTermsAndConditions from "../../../../pages/auth/AcceptTermsAndConditions";


















// import CustomModal from "../../modal";
// import OtpForm from "./OtpForm";
// import { useVerifyPhone } from "../../../api-manage/hooks/auth/useVerifyPhone";
const SignUp = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const { configData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useSelector)((state)=>state.configData);
    const [openModuleSelection, setOpenModuleSelection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_8__.useTheme)();
    const [otpData, setOtpData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        phone: ""
    });
    const [mainToken, setMainToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [openOtpModal, setOpenOtpModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const signUpFormik = (0,formik__WEBPACK_IMPORTED_MODULE_11__.useFormik)({
        initialValues: {
            f_name: "",
            l_name: "",
            email: "",
            phone: "",
            password: "",
            confirm_password: "",
            ref_code: "",
            tandc: false
        },
        validationSchema: (0,_SignUpValidation__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(),
        onSubmit: async (values, helpers)=>{
            try {
                formSubmitHandler(values);
            } catch (err) {}
        }
    });
    const handleClose = ()=>{
        setOpenOtpModal(false);
    };
    const fNameHandler = (value)=>{
        signUpFormik.setFieldValue("f_name", value);
    };
    const lNameHandler = (value)=>{
        signUpFormik.setFieldValue("l_name", value);
    };
    const emailHandler = (value)=>{
        signUpFormik.setFieldValue("email", value);
    };
    const handleOnChange = (value)=>{
        signUpFormik.setFieldValue("phone", `+${value}`);
    };
    const passwordHandler = (value)=>{
        signUpFormik.setFieldValue("password", value);
    };
    const confirmPasswordHandler = (value)=>{
        signUpFormik.setFieldValue("confirm_password", value);
    };
    const handleCheckbox = (e)=>{
        signUpFormik.setFieldValue("tandc", e.target.checked);
    };
    const ReferCodeHandler = (value)=>{
        signUpFormik.setFieldValue("ref_code", value);
    };
    let location = undefined;
    if (false) {}
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (otpData?.phone !== "") {
            setOpenOtpModal(true);
        }
    }, [
        otpData
    ]);
    const handleTokenAfterSignUp = (response)=>{
        if (response) {
            localStorage.setItem("token", response?.token);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_14__["default"].success((0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)(_utils_toasterMessages__WEBPACK_IMPORTED_MODULE_23__/* .signup_successfull */ .fj));
            const zoneSelected = JSON.parse(localStorage.getItem("zoneid"));
            if (zoneSelected) {
                setOpenModuleSelection(true);
            } else {
                router.push("/", undefined, {
                    shallow: true
                });
            }
        }
    };
    const handleCloseModuleModal = (item)=>{
        if (item) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_14__["default"].success((0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)("A Module has been selected."));
            router.push("/interest", undefined, {
                shallow: true
            });
        }
        setOpenModuleSelection(false);
    };
    const { mutate , isLoading , error  } = (0,_api_manage_hooks_react_query_auth_useSignUp__WEBPACK_IMPORTED_MODULE_15__/* .useSignUp */ .Q)();
    const formSubmitHandler = (values)=>{
        mutate(values, {
            onSuccess: async (response)=>{
                (0,_utils_setDefaultLanguage__WEBPACK_IMPORTED_MODULE_24__/* .setDefaultLanguage */ .m)();
                if (configData?.customer_verification) {
                    if (Number.parseInt(response?.is_phone_verified) === 1) {
                        handleTokenAfterSignUp(response);
                    } else {
                        setOtpData({
                            phone: values?.phone
                        });
                        setMainToken(response);
                    }
                } else {
                    handleTokenAfterSignUp(response);
                }
            },
            onError: _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_16__/* .onErrorResponse */ .R
        });
    };
    const handleClick = ()=>{
        window.open("/terms-and-conditions");
    };
    const { mutate: otpVerifyMutate , isLoading: isLoadingOtpVerifyApi  } = (0,_api_manage_hooks_react_query_forgot_password_useVerifyPhone__WEBPACK_IMPORTED_MODULE_22__/* .useVerifyPhone */ .t)();
    const otpFormSubmitHandler = (values)=>{
        const onSuccessHandler = (res)=>{
            react_hot_toast__WEBPACK_IMPORTED_MODULE_14__["default"].success(res?.message);
            setOpenOtpModal(false);
            handleTokenAfterSignUp(mainToken);
        };
        otpVerifyMutate(values, {
            onSuccess: onSuccessHandler,
            onError: _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_16__/* .onSingleErrorResponse */ .f
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                justifyContent: "center",
                alignItems: "center",
                pb: "80px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        maxWidth: "500px",
                        width: "100%",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomPaperBigCard */ .iD, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                // justifyContent="center"
                                // alignItems="center"
                                spacing: 2,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AuthHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        configData: configData,
                                        title: (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)("Sign Up")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                        noValidate: true,
                                        onSubmit: signUpFormik.handleSubmit,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                            spacing: 2,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SignUpForm__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    configData: configData,
                                                    handleOnChange: handleOnChange,
                                                    passwordHandler: passwordHandler,
                                                    fNameHandler: fNameHandler,
                                                    lNameHandler: lNameHandler,
                                                    emailHandler: emailHandler,
                                                    confirmPasswordHandler: confirmPasswordHandler,
                                                    ReferCodeHandler: ReferCodeHandler,
                                                    signUpFormik: signUpFormik
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AcceptTermsAndConditions__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                    handleCheckbox: handleCheckbox,
                                                    handleClick: handleClick,
                                                    formikType: signUpFormik
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                                    spacing: 2,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                            type: "submit",
                                                            fullWidth: true,
                                                            variant: "contained",
                                                            loading: isLoading,
                                                            disabled: !signUpFormik.values.tandc,
                                                            children: (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)("Sign Up")
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                                                            children: [
                                                                (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)("Already have an account?"),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_19___default()), {
                                                                    href: {
                                                                        pathname: "/auth/sign-in",
                                                                        query: {
                                                                            from: "sign-up"
                                                                        }
                                                                    },
                                                                    style: {
                                                                        color: theme.palette.primary.main,
                                                                        textDecoration: "underline"
                                                                    },
                                                                    children: (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)("Sign In")
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
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modal__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                        handleClose: handleClose,
                        openModal: openOtpModal,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OtpForm__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                            data: otpData,
                            formSubmitHandler: otpFormSubmitHandler,
                            isLoading: isLoadingOtpVerifyApi
                        })
                    })
                ]
            }),
            openModuleSelection && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_landing_page_hero_section_module_selection__WEBPACK_IMPORTED_MODULE_17__/* .ModuleSelection */ .U, {
                location: location,
                closeModal: handleCloseModuleModal,
                disableAutoFocus: true
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(SignUp));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81321:
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
/* harmony import */ var _form_fields_CustomTextFieldWithFormik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42492);
/* harmony import */ var _custom_component_CustomPhoneInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65304);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22021);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helper_functions_getLanguage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46573);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_custom_component_CustomPhoneInput__WEBPACK_IMPORTED_MODULE_4__, i18next__WEBPACK_IMPORTED_MODULE_5__]);
([_custom_component_CustomPhoneInput__WEBPACK_IMPORTED_MODULE_4__, i18next__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const SignUpForm = ({ configData , handleOnChange , passwordHandler , lNameHandler , fNameHandler , confirmPasswordHandler , emailHandler , ReferCodeHandler , signUpFormik  })=>{
    const lanDirection = (0,_helper_functions_getLanguage__WEBPACK_IMPORTED_MODULE_7__/* .getLanguage */ .G)() ? (0,_helper_functions_getLanguage__WEBPACK_IMPORTED_MODULE_7__/* .getLanguage */ .G)() : "ltr";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.NoSsr, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
            alignItems: "center",
            spacing: {
                xs: 3,
                md: 4
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_fields_CustomTextFieldWithFormik__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    required: true,
                    label: (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)("First Name"),
                    touched: signUpFormik.touched.f_name,
                    errors: signUpFormik.errors.f_name,
                    fieldProps: signUpFormik.getFieldProps("f_name"),
                    onChangeHandler: fNameHandler,
                    value: signUpFormik.values.f_name
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_fields_CustomTextFieldWithFormik__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    required: true,
                    label: (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)("Last Name"),
                    touched: signUpFormik.touched.l_name,
                    errors: signUpFormik.errors.l_name,
                    fieldProps: signUpFormik.getFieldProps("l_name"),
                    onChangeHandler: lNameHandler,
                    value: signUpFormik.values.l_name
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_fields_CustomTextFieldWithFormik__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    required: true,
                    label: (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)("Email"),
                    touched: signUpFormik.touched.email,
                    errors: signUpFormik.errors.email,
                    fieldProps: signUpFormik.getFieldProps("email"),
                    onChangeHandler: emailHandler,
                    value: signUpFormik.values.email
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_custom_component_CustomPhoneInput__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    value: signUpFormik.values.phone,
                    onHandleChange: handleOnChange,
                    initCountry: configData?.country,
                    touched: signUpFormik.touched.phone,
                    errors: signUpFormik.errors.phone,
                    lanDirection: lanDirection
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_fields_CustomTextFieldWithFormik__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    required: "true",
                    type: "password",
                    label: (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)("Password"),
                    touched: signUpFormik.touched.password,
                    errors: signUpFormik.errors.password,
                    fieldProps: signUpFormik.getFieldProps("password"),
                    onChangeHandler: passwordHandler,
                    value: signUpFormik.values.password
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_fields_CustomTextFieldWithFormik__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    required: "true",
                    type: "password",
                    label: (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)("Confirm Password"),
                    touched: signUpFormik.touched.confirm_password,
                    errors: signUpFormik.errors.confirm_password,
                    fieldProps: signUpFormik.getFieldProps("confirm_password"),
                    onChangeHandler: confirmPasswordHandler,
                    value: signUpFormik.values.confirm_password
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_fields_CustomTextFieldWithFormik__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    label: (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)("Refer Code (Optional)"),
                    touched: signUpFormik.touched.ref_code,
                    errors: signUpFormik.errors.ref_code,
                    fieldProps: signUpFormik.getFieldProps("ref_code"),
                    onChangeHandler: ReferCodeHandler,
                    value: signUpFormik.values.ref_code
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49792:
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
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_2__]);
react_i18next__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const SignUpValidation = ()=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    return yup__WEBPACK_IMPORTED_MODULE_1__.object({
        f_name: yup__WEBPACK_IMPORTED_MODULE_1__.string().required(t("First name is required")),
        l_name: yup__WEBPACK_IMPORTED_MODULE_1__.string().required(t("Last name is required")),
        email: yup__WEBPACK_IMPORTED_MODULE_1__.string().email(t("Must be a valid email")).max(255).required(t("Email is required")),
        phone: yup__WEBPACK_IMPORTED_MODULE_1__.string().required(t("Please give a phone number")).min(10, "number must be 10 digits"),
        password: yup__WEBPACK_IMPORTED_MODULE_1__.string().required(t("No password provided.")).min(6, t("Password is too short - should be 6 chars minimum.")),
        confirm_password: yup__WEBPACK_IMPORTED_MODULE_1__.string().required(t("Confirm Password")).oneOf([
            yup__WEBPACK_IMPORTED_MODULE_1__.ref("password"),
            null
        ], t("Passwords must match"))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpValidation);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
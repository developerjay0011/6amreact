"use strict";
exports.id = 4024;
exports.ids = [4024];
exports.modules = {

/***/ 80591:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ useGetOrderCancelReason)
/* harmony export */ });
/* unused harmony export getData */
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61176);
/* harmony import */ var _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67759);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_1__, _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__]);
([_MainApi__WEBPACK_IMPORTED_MODULE_1__, _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const getData = async ()=>{
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get("api/v1/customer/order/cancellation-reasons?offset=1&limit=10&type=customer");
    return data;
};
const useGetOrderCancelReason = ()=>{
    return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)("cancel-reasons", ()=>getData(), {
        enabled: false,
        //onSuccess: onSuccessHandler,
        onError: _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__/* .onSingleErrorResponse */ .f
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48746:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52468);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22021);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1094);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76096);
/* harmony import */ var _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88185);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76563);
/* harmony import */ var _mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68891);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55374);
/* harmony import */ var _mui_material_Radio__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Radio__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29404);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(76829);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _custom_dialog_confirm_CustomDialogConfirm_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(87086);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(45269);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_4__]);
i18next__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















const CancelOrder = ({ cancelReason , orderLoading , setCancelReason , cancelReasonsData , setModalOpen , handleOnSuccess  })=>{
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const handleChange = (event)=>{
        setCancelReason(event.target.value);
    };
    const onClose = ()=>{
        setModalOpen(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_custom_dialog_confirm_CustomDialogConfirm_style__WEBPACK_IMPORTED_MODULE_14__/* .WrapperForCustomDialogConfirm */ .f, {
        width: "22rem",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_15__/* .CustomStackFullWidth */ .Xw, {
            spacing: 1,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_2___default()), {
                    id: "alert-dialog-title",
                    sx: {
                        padding: "10px 24px"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                        textAlign: "center",
                        variant: "h6",
                        children: (0,i18next__WEBPACK_IMPORTED_MODULE_4__.t)("What’s Wrong With This Order?")
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5___default()), {
                    sx: {
                        padding: "10px 24px"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_15__/* .CustomStackFullWidth */ .Xw, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_9___default()), {
                            component: "fieldset",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    fontWeight: "600",
                                    variant: "h6",
                                    paddingY: ".5rem",
                                    children: (0,i18next__WEBPACK_IMPORTED_MODULE_4__.t)("Cancel Reason")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    "aria-label": "gender",
                                    name: "gender1",
                                    value: cancelReason,
                                    onChange: handleChange,
                                    children: cancelReasonsData && cancelReasonsData?.data?.length > 0 && cancelReasonsData?.data?.map((reason)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            value: reason.reason,
                                            checked: reason.reason == cancelReason ? cancelReason : false,
                                            editable: true,
                                            control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Radio__WEBPACK_IMPORTED_MODULE_10___default()), {}),
                                            label: reason.reason
                                        }, reason?.id);
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_11___default()), {
                    sx: {
                        paddingX: "20px"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Stack, {
                        direction: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Button, {
                                variant: "contained",
                                onClick: onClose,
                                sx: {
                                    width: "100%",
                                    backgroundColor: (theme)=>theme.palette.neutral[300],
                                    color: (theme)=>theme.palette.neutral[1000],
                                    "&:hover": {
                                        backgroundColor: (theme)=>theme.palette.neutral[400]
                                    }
                                },
                                children: (0,i18next__WEBPACK_IMPORTED_MODULE_4__.t)("Back")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_13___default()), {
                                loading: orderLoading,
                                onClick: handleOnSuccess,
                                variant: "contained",
                                sx: {
                                    width: "100%"
                                },
                                children: (0,i18next__WEBPACK_IMPORTED_MODULE_4__.t)("Submit")
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CancelOrder);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
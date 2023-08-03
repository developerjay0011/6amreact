"use strict";
exports.id = 3850;
exports.ids = [3850];
exports.modules = {

/***/ 31631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/delete-icon.7460c87d.png","height":18,"width":18,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAqklEQVR42k3PMQrCQBCF4ek01xBbsddOougGQeIknYjYBMFCQbBQ8QBWGiwFC80NBC+SKwgeYvBvJFn4mBnmLcvK/5iLNsjM6QPbYhFog4WPnMWRCs3hWxA1hUDC8MWBfoc9IegHS7F+WKVJbaA1agdd1HG23rBCIPYYrubGc+qJ29AZUnOhJ8Ix0phijRUmuJR+oHduLnimjRZzgls5EONN6ImM/oWRiMgPwm5vDXlWm10AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 29529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/mapMarker.0e641af6.png","height":1004,"width":1004,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAv0lEQVR42mP43xbIxAAE/2YUc/zLYsgG4sx/c6vZwWLtQYwMMPC/2XPvv20L///bMv//v2aPXQzI4F8yg+2/ZV3/geDXPxBe0v4fKGaBUJDPoPpveuH//+9f///39uX/f1Pz/v8rYFCCSNZZM4PpevvKf93R//91R/0HskugYmA5hn95DGCH/u8InQPEM8BiJTxMEMmuCDDjX2eEG9CEAiAuBLJd4HKfe9PBXvnWkyz+vi/bEoSBbDGgEFAujREAJnpnt5/lJNAAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 74453:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useDeleteAddress)
/* harmony export */ });
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61176);
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60274);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_0__]);
_MainApi__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const deleteData = async (addressId)=>{
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["delete"] */ .Z["delete"](`${_ApiRoutes__WEBPACK_IMPORTED_MODULE_2__/* .delete_address_api */ .fb}?address_id=${addressId}`);
    return data;
};
function useDeleteAddress() {
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)("delete-address", deleteData);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 93220:
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
/* harmony import */ var _api_manage_hooks_react_query_address_useDeleteAddress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74453);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86390);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45269);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86201);
/* harmony import */ var _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67759);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76829);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_mapMarker_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29529);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_3__, _api_manage_hooks_react_query_address_useDeleteAddress__WEBPACK_IMPORTED_MODULE_4__, react_hot_toast__WEBPACK_IMPORTED_MODULE_7__, _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_8__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_3__, _api_manage_hooks_react_query_address_useDeleteAddress__WEBPACK_IMPORTED_MODULE_4__, react_hot_toast__WEBPACK_IMPORTED_MODULE_7__, _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const DeleteAddress = ({ open , handleClose , addressId , refetch  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const { mutate: deleteMutation , isLoading , error  } = (0,_api_manage_hooks_react_query_address_useDeleteAddress__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const deleteAddress = ()=>{
        deleteMutation(addressId, {
            onSuccess: ()=>{
                react_hot_toast__WEBPACK_IMPORTED_MODULE_7__["default"].success(t("Address deleted successfully."));
                refetch?.();
                handleClose?.();
            },
            onError: _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_8__/* .onSingleErrorResponse */ .f
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            openModal: open,
            handleClose: handleClose,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {
                sx: {
                    textAlign: "center",
                    padding: "2rem"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_6__/* .CustomStackFullWidth */ .Xw, {
                    alignItems: "center",
                    justifyContent: "center",
                    spacing: 3,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: _assets_mapMarker_png__WEBPACK_IMPORTED_MODULE_10__/* ["default"].src */ .Z.src,
                            alt: t("map-image"),
                            width: "60px",
                            height: "60px"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            fontWeight: "bold",
                            variant: "h6",
                            children: t("Are you sure you want to delete this address?")
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_6__/* .CustomStackFullWidth */ .Xw, {
                            direction: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            spacing: 2,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    sx: {
                                        backgroundColor: (theme)=>theme.palette.neutral[300],
                                        color: "black",
                                        width: "120px",
                                        "&:hover": {
                                            backgroundColor: (theme)=>theme.palette.neutral[400]
                                        }
                                    },
                                    onClick: handleClose,
                                    children: t("Cancel")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    loading: isLoading,
                                    sx: {
                                        background: (theme)=>theme.palette.error.light,
                                        color: "white",
                                        width: "120px",
                                        "&:hover": {
                                            backgroundColor: (theme)=>theme.palette.error.dark
                                        }
                                    },
                                    onClick: ()=>deleteAddress(),
                                    children: t("Delete")
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteAddress);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59308:
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





const Shimmer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomBoxFullWidth */ .uu, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
            container: true,
            spacing: 3,
            children: [
                ...Array(2)
            ].map((item, index)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                    item: true,
                    xs: 12,
                    sm: 6,
                    md: 6,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                        variant: "rectangular",
                        width: "100%",
                        height: "10rem"
                    })
                }, index);
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shimmer);


/***/ }),

/***/ 74847:
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
/* harmony import */ var _mui_icons_material_LocationOn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72625);
/* harmony import */ var _mui_icons_material_LocationOn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LocationOn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CustomDivider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35740);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_static_delete_icon_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31631);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57987);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86390);
/* harmony import */ var _DeleteAddress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(93220);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_9__, _DeleteAddress__WEBPACK_IMPORTED_MODULE_11__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_9__, _DeleteAddress__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const AddressCard = (props)=>{
    const { address_type , contact_person_number , address , road , floor , house , latitude , longitude , user_id , contact_person_name , zone_id , id , refetch  } = props;
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)();
    const [openDelete, setOpenDelete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {
        elevation: 8,
        sx: {
            p: "10px",
            border: "1px solid",
            borderColor: (theme)=>theme.palette.primary.main,
            height: "100%"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
                spacing: 2,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
                        direction: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                                direction: "row",
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_LocationOn__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        sx: {
                                            fontSize: "16px",
                                            color: (theme)=>theme.palette.primary.main,
                                            marginRight: "8px"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                        fontWeight: "bold",
                                        textTransform: "capitalize",
                                        children: t(address_type)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7___default()), {
                                onClick: ()=>setOpenDelete(true),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: _public_static_delete_icon_png__WEBPACK_IMPORTED_MODULE_8__/* ["default"].src */ .Z.src
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomDivider__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                fontWeight: "bold",
                                textTransform: "capitalize",
                                children: address
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                fontWeight: "bold",
                                textTransform: "capitalize",
                                children: t("Floor:")
                            })
                        ]
                    })
                ]
            }),
            openDelete && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DeleteAddress__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                open: openDelete,
                handleClose: ()=>setOpenDelete(false),
                addressId: id,
                refetch: refetch
            })
        ]
    });
};
AddressCard.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddressCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 73850:
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
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _custom_empty_result__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58797);
/* harmony import */ var _public_static_nodata_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3715);
/* harmony import */ var _api_manage_hooks_react_query_address_useGetAddressList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19376);
/* harmony import */ var _add_new_address__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89728);
/* harmony import */ var _Shimmer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59308);
/* harmony import */ var _address_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(74847);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_custom_empty_result__WEBPACK_IMPORTED_MODULE_6__, _api_manage_hooks_react_query_address_useGetAddressList__WEBPACK_IMPORTED_MODULE_8__, _add_new_address__WEBPACK_IMPORTED_MODULE_9__, _address_card__WEBPACK_IMPORTED_MODULE_11__]);
([_custom_empty_result__WEBPACK_IMPORTED_MODULE_6__, _api_manage_hooks_react_query_address_useGetAddressList__WEBPACK_IMPORTED_MODULE_8__, _add_new_address__WEBPACK_IMPORTED_MODULE_9__, _address_card__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Address = (props)=>{
    const { configData , t  } = props;
    const { data , isLoading , refetch  } = (0,_api_manage_hooks_react_query_address_useGetAddressList__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        refetch();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
            container: true,
            spacing: 2.5,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                    item: true,
                    xs: 12,
                    md: 12,
                    align: "right",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_add_new_address__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        refetch: refetch,
                        t: t,
                        configData: configData
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                    item: true,
                    xs: 12,
                    md: 12,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.NoSsr, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomPaperBigCard */ .iD, {
                            sx: {
                                minHeight: "60vh"
                            },
                            children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shimmer__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}) : data && data?.addresses?.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                    container: true,
                                    spacing: 3,
                                    children: data?.addresses?.map((item, index)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                            item: true,
                                            xs: 12,
                                            sm: 6,
                                            md: 4,
                                            lg: 4,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_address_card__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                ...item,
                                                refetch: refetch
                                            })
                                        }, item.id);
                                    })
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_custom_empty_result__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    label: "No Address Found",
                                    image: _public_static_nodata_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
                                })
                            })
                        })
                    })
                })
            ]
        })
    });
};
Address.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Address);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
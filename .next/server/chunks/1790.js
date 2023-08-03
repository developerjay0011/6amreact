"use strict";
exports.id = 1790;
exports.ids = [1790];
exports.modules = {

/***/ 74223:
/***/ (() => {

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/food.79d59527.svg","height":111,"width":111});

/***/ }),

/***/ 744:
/***/ (() => {

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/image 24.47ad9f9b.svg","height":111,"width":111});

/***/ }),

/***/ 39794:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useGetBasicCampaigns)
/* harmony export */ });
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61176);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67759);
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60274);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_0__, _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__]);
([_MainApi__WEBPACK_IMPORTED_MODULE_0__, _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const getData = async ()=>{
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__/* .basic_campaigns_api */ .KZ);
    return data;
};
function useGetBasicCampaigns() {
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)("basic-cam", getData, {
        enabled: false,
        onError: _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__/* .onSingleErrorResponse */ .f
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 23897:
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
/* harmony import */ var _CustomImageContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58861);
/* harmony import */ var _mui_icons_material_ArrowBackIos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4195);
/* harmony import */ var _mui_icons_material_ArrowBackIos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowBackIos__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45269);
/* harmony import */ var _mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91658);
/* harmony import */ var _mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api_manage_hooks_react_query_all_category_all_categorys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40291);
/* harmony import */ var _NavCategoryShimmer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68340);
/* harmony import */ var _ViewMore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35762);
/* harmony import */ var _helper_functions_getModuleId__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(52539);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _helper_functions_getLanguage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(46573);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _redux_slices_storedData__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8697);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_manage_hooks_react_query_all_category_all_categorys__WEBPACK_IMPORTED_MODULE_8__, _ViewMore__WEBPACK_IMPORTED_MODULE_10__]);
([_api_manage_hooks_react_query_all_category_all_categorys__WEBPACK_IMPORTED_MODULE_8__, _ViewMore__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_7__.makeStyles)((theme)=>({
        popover: {
            pointerEvents: "none"
        },
        paper: {
            pointerEvents: "auto",
            padding: ".5rem"
        }
    }));
const CategoryPopover = ({ handlePopoverOpenSub , catImageUrl , openSub , anchorElSub , subCategory , shimmer , handlePopoverCloseSub  })=>{
    const { categories  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)((state)=>state.storedData);
    const searchKey = "";
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const classes = useStyles();
    const { data: categoriesData , refetch , isFetched , isFetching , isLoading  } = (0,_api_manage_hooks_react_query_all_category_all_categorys__WEBPACK_IMPORTED_MODULE_8__/* .useGetCategories */ .P)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (categories.length === 0) {
            refetch();
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (categoriesData?.data) {
            dispatch((0,_redux_slices_storedData__WEBPACK_IMPORTED_MODULE_13__/* .setCategories */ .DG)(categoriesData?.data));
        }
    }, [
        categoriesData
    ]);
    const primaryColor = theme.palette.primary.main;
    const handleClick = (item)=>{
        router.push({
            pathname: "/category/[id]",
            query: {
                id: `${item?.slug ? item?.slug : item?.id}`,
                module_id: `${(0,_helper_functions_getModuleId__WEBPACK_IMPORTED_MODULE_15__/* .getModuleId */ .S)()}`
            }
        }, undefined, {
            shallow: true
        });
    };
    const handleClickToSubCategory = (item)=>{
        router.push({
            pathname: "/sub-category/[id]",
            query: {
                id: `${item?.slug ? item?.slug : item?.id}`,
                module_id: `${(0,_helper_functions_getModuleId__WEBPACK_IMPORTED_MODULE_15__/* .getModuleId */ .S)()}`
            }
        }, undefined, {
            shallow: true
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        width: "305px",
        padding: "20px",
        spacing: 0.5,
        children: [
            isFetching ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavCategoryShimmer__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: categories && categories.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: categories?.slice(0, 10)?.map((category, index)=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                            onClick: ()=>handleClick(category),
                            direction: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "5px",
                            onMouseEnter: (event)=>handlePopoverOpenSub(event, category),
                            sx: {
                                cursor: "pointer",
                                "&:hover": {
                                    backgroundColor: (theme)=>(0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme.palette.primary.main, 0.2)
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                    direction: "row",
                                    spacing: 1,
                                    sx: {
                                        minWidth: "18px"
                                    },
                                    width: "100%",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImageContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            src: `${catImageUrl}/${category.image}`,
                                            width: "25px",
                                            height: "25px",
                                            loading: "lazy",
                                            borderRadius: "0.13rem"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_14__.Box, {
                                            style: {
                                                width: "170px",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                underline: "none",
                                                variant: "subtitle2",
                                                fontWeight: "400",
                                                color: theme.palette.neutral[1000],
                                                sx: {
                                                    display: "-webkit-box",
                                                    WebkitLineClamp: "1",
                                                    WebkitBoxOrient: "vertical",
                                                    overflow: "hidden"
                                                },
                                                children: category.name
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                    direction: "row",
                                    alignItems: "center",
                                    gap: 1,
                                    justifyContent: "space-between",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_5__/* .CustomTypographyGray */ .mI, {
                                            variant: "subtitle2",
                                            nodefaultfont: "true",
                                            sx: {
                                                paddingRight: category?.childes.length === 0 && "20px"
                                            },
                                            children: category?.childes_count > 0 && `(${category?.childes_count})`
                                        }),
                                        category?.childes.length > 0 && ((0,_helper_functions_getLanguage__WEBPACK_IMPORTED_MODULE_16__/* .getLanguage */ .G)() === "rtl" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ArrowBackIos__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            style: {
                                                width: "12px",
                                                height: "12px"
                                            },
                                            color: theme.palette.neutral[400]
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            style: {
                                                width: "12px",
                                                height: "12px"
                                            },
                                            color: theme.palette.neutral[400]
                                        }))
                                    ]
                                })
                            ]
                        }, index);
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Popover, {
                open: openSub,
                anchorEl: anchorElSub,
                anchorOrigin: {
                    vertical: "20px",
                    horizontal: "right"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "left"
                },
                className: classes.popover,
                classes: {
                    paper: classes.paper
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                    height: "100%",
                    sx: {
                        cursor: "pointer"
                    },
                    alignItems: "flex-start",
                    justifyContent: "center",
                    children: subCategory?.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: subCategory?.map((sub)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                direction: "row",
                                spacing: 2,
                                px: "1rem",
                                py: ".5rem",
                                sx: {
                                    "&:hover": {
                                        backgroundColor: (theme)=>(0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme.palette.primary.main, 0.2)
                                    }
                                },
                                onClick: ()=>handleClickToSubCategory(sub),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    // sx={{ color: 'black',  }}
                                    // href="#"
                                    underline: "none",
                                    variant: "subtitle2",
                                    fontWeight: "400",
                                    color: theme.palette.neutral[1000],
                                    width: "200px",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    children: sub.name
                                })
                            }, sub?.id);
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ViewMore__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                redirect: "/categories",
                handlePopoverCloseSub: handlePopoverCloseSub
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryPopover);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68340:
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





const NavCategoryShimmer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
        sx: {
            padding: "10px"
        },
        children: [
            ...Array(10)
        ].map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                width: "100%",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                    width: "100%",
                    direction: "row",
                    spacing: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                            width: 20,
                            height: 30
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                            width: "100%",
                            height: 20
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                            width: 10,
                            height: 20
                        })
                    ]
                })
            }, index))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavCategoryShimmer);


/***/ }),

/***/ 41790:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CustomImageContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58861);
/* harmony import */ var _mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91658);
/* harmony import */ var _mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45269);
/* harmony import */ var _CategoryPopover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23897);
/* harmony import */ var _NavStorePopover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84505);
/* harmony import */ var _helper_functions_getLanguage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46573);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CategoryPopover__WEBPACK_IMPORTED_MODULE_8__, _NavStorePopover__WEBPACK_IMPORTED_MODULE_9__]);
([_CategoryPopover__WEBPACK_IMPORTED_MODULE_8__, _NavStorePopover__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_6__.makeStyles)((theme)=>({
        popover: {
            pointerEvents: "none"
        },
        paper: {
            pointerEvents: "auto"
        }
    }));
const NavPopover = ({ catImageUrl , open , anchorEl , handlePopoverOpenSub , openSub , anchorElSub , subCategory , popoverFor , handlePopoverCloseSub  })=>{
    const classes = useStyles();
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_7__/* .CustomStackFullWidth */ .Xw, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Popover, {
            disableScrollLock: true,
            id: "mouse-over-popover",
            open: open,
            anchorEl: anchorEl,
            anchorOrigin: {
                vertical: "bottom",
                horizontal: (0,_helper_functions_getLanguage__WEBPACK_IMPORTED_MODULE_10__/* .getLanguage */ .G)() === "rtl" ? "right" : "left"
            },
            transformOrigin: {
                vertical: "top",
                horizontal: (0,_helper_functions_getLanguage__WEBPACK_IMPORTED_MODULE_10__/* .getLanguage */ .G)() === "rtl" ? "right" : "left"
            },
            className: classes.popover,
            classes: {
                paper: classes.paper
            },
            children: popoverFor === "category" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CategoryPopover__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                // categoriesData={categoriesData}
                handlePopoverOpenSub: handlePopoverOpenSub,
                catImageUrl: catImageUrl,
                openSub: openSub,
                anchorElSub: anchorElSub,
                subCategory: subCategory,
                handlePopoverCloseSub: handlePopoverCloseSub
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavStorePopover__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavPopover);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45269);
/* harmony import */ var _nav_store_component_NavPopularStores__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22255);
/* harmony import */ var _nav_store_component_NavNewStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37836);
/* harmony import */ var _nav_store_component_NavFoodCampaigns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82070);
/* harmony import */ var _api_manage_hooks_react_query_useGetItemCampaigns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61340);
/* harmony import */ var _api_manage_hooks_react_query_useGetBasicCampaigns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39794);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_slices_storedData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8697);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_nav_store_component_NavPopularStores__WEBPACK_IMPORTED_MODULE_5__, _nav_store_component_NavNewStore__WEBPACK_IMPORTED_MODULE_6__, _nav_store_component_NavFoodCampaigns__WEBPACK_IMPORTED_MODULE_7__, _api_manage_hooks_react_query_useGetItemCampaigns__WEBPACK_IMPORTED_MODULE_8__, _api_manage_hooks_react_query_useGetBasicCampaigns__WEBPACK_IMPORTED_MODULE_9__]);
([_nav_store_component_NavPopularStores__WEBPACK_IMPORTED_MODULE_5__, _nav_store_component_NavNewStore__WEBPACK_IMPORTED_MODULE_6__, _nav_store_component_NavFoodCampaigns__WEBPACK_IMPORTED_MODULE_7__, _api_manage_hooks_react_query_useGetItemCampaigns__WEBPACK_IMPORTED_MODULE_8__, _api_manage_hooks_react_query_useGetBasicCampaigns__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const NavStorePopover = ()=>{
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const bgColor = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.alpha)(theme.palette.primary.main, 0.2);
    const { data , refetch , isLoading , isFetching  } = (0,_api_manage_hooks_react_query_useGetBasicCampaigns__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const { basicCampaigns  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)((state)=>state.storedData);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (basicCampaigns.length === 0) {
            refetch();
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (data) {
            dispatch((0,_redux_slices_storedData__WEBPACK_IMPORTED_MODULE_11__/* .setBasicCampaigns */ .lh)(data));
        }
    }, [
        data
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        width: basicCampaigns?.length > 0 ? "843px" : "500px",
        sx: {
            position: "relative",
            zIndex: "1",
            padding: "0px"
        },
        children: [
            basicCampaigns?.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                style: {
                    position: "absolute",
                    zIndex: "-1",
                    blockSize: "100%",
                    inlineSize: "50%",
                    insetInlineEnd: "0",
                    insetBlockStart: "0",
                    display: "block",
                    backgroundColor: bgColor
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__/* .CustomStackFullWidth */ .Xw, {
                sx: {
                    padding: "2.5rem"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                    container: true,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                            item: true,
                            md: basicCampaigns?.length > 0 ? 3 : 6,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nav_store_component_NavPopularStores__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                            item: true,
                            md: basicCampaigns?.length > 0 ? 3 : 6,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nav_store_component_NavNewStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                        }),
                        basicCampaigns?.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                            item: true,
                            md: 6,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nav_store_component_NavFoodCampaigns__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                campaigns: basicCampaigns,
                                isLoading: isLoading
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavStorePopover);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 35762:
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
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22021);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _NavLinks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37494);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_3__]);
i18next__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const ViewMore = ({ redirect , handlePopoverCloseSub  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const handleClick = ()=>{
        router.push(redirect, undefined, {
            shallow: true
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
        direction: "row",
        alignItems: "center",
        gap: 1,
        justifyContent: "center",
        padding: "10px",
        sx: {
            cursor: "pointer"
        },
        onMouseEnter: handlePopoverCloseSub,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
            onClick: ()=>handleClick(),
            variant: "text",
            children: (0,i18next__WEBPACK_IMPORTED_MODULE_3__.t)("View More")
        })
    });
};
ViewMore.propTypes = {
    redirect: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewMore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82070:
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
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CustomImageContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58861);
/* harmony import */ var _public_static_landing_page_image_24_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(744);
/* harmony import */ var _public_static_landing_page_food_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74223);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57987);
/* harmony import */ var _mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(61883);
/* harmony import */ var _mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _api_manage_hooks_react_query_useGetItemCampaigns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(61340);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ViewMore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(35762);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _helper_functions_getModuleId__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(52539);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_4__, react_i18next__WEBPACK_IMPORTED_MODULE_9__, _api_manage_hooks_react_query_useGetItemCampaigns__WEBPACK_IMPORTED_MODULE_11__, _ViewMore__WEBPACK_IMPORTED_MODULE_13__]);
([i18next__WEBPACK_IMPORTED_MODULE_4__, react_i18next__WEBPACK_IMPORTED_MODULE_9__, _api_manage_hooks_react_query_useGetItemCampaigns__WEBPACK_IMPORTED_MODULE_11__, _ViewMore__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const NavFoodCampaigns = ({ campaigns , isLoading  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_15__.useRouter)();
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)();
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const { configData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)((state)=>state.configData);
    const handleClick = (e, item)=>{
        e.stopPropagation();
        router.push({
            pathname: "/campaigns/[id]",
            query: {
                id: `${item?.slug ? item?.slug : item?.id}`,
                module_id: `${(0,_helper_functions_getModuleId__WEBPACK_IMPORTED_MODULE_16__/* .getModuleId */ .S)()}`
            }
        }, undefined, {
            shallow: true
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
        spacing: 4,
        sx: {
            height: "100%"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                variant: "h6",
                fontWeight: "500",
                textAlign: "center",
                children: t("Campaigns")
            }),
            campaigns?.length > 0 && campaigns?.slice(0, 3).map((item, index)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                    direction: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    spacing: 2,
                    sx: {
                        cursor: "pointer"
                    },
                    onClick: (e)=>handleClick(e, item),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImageContainer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            src: `${configData?.base_urls?.campaign_image_url}/${item?.image}`,
                            width: "70px",
                            height: "70px",
                            borderRadius: ".5rem"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                            width: "219px",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                                    direction: "row",
                                    alignItems: "center",
                                    spacing: 0.4,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                            variant: "h6",
                                            color: theme.palette.primary.main,
                                            children: item?.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            sx: {
                                                color: (theme)=>theme.palette.primary.main,
                                                width: "20px",
                                                height: "20px"
                                            }
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                    fontSize: "13px",
                                    sx: {
                                        cursor: "pointer",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        display: "-webkit-box",
                                        WebkitLineClamp: "2",
                                        WebkitBoxOrient: "vertical"
                                    },
                                    children: item?.description
                                })
                            ]
                        })
                    ]
                }, index);
            }),
            isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                    width: "100%",
                    height: 30
                })
            }),
            campaigns?.length > 3 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                height: "100%",
                width: "100%",
                sx: {
                    marginTop: "auto"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ViewMore__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    redirect: "/campaigns"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavFoodCampaigns);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 37836:
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_manage_hooks_react_query_store_useGetLatestStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85296);
/* harmony import */ var _NavStoreShimmer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54699);
/* harmony import */ var _ViewMore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(35762);
/* harmony import */ var _helper_functions_getModuleId__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(52539);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_slices_storedData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8697);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_4__, _api_manage_hooks_react_query_store_useGetLatestStore__WEBPACK_IMPORTED_MODULE_7__, _ViewMore__WEBPACK_IMPORTED_MODULE_9__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_4__, _api_manage_hooks_react_query_store_useGetLatestStore__WEBPACK_IMPORTED_MODULE_7__, _ViewMore__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const NavNewStore = ()=>{
    const { configData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.configData);
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const newText = t("New On");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const { data , refetch , isFetching  } = (0,_api_manage_hooks_react_query_store_useGetLatestStore__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { newStores  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.storedData);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (newStores.length === 0) {
            refetch();
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (data) {
            dispatch((0,_redux_slices_storedData__WEBPACK_IMPORTED_MODULE_11__/* .setNewStores */ .hT)(data));
        }
    }, [
        data
    ]);
    const handleClick = (item)=>{
        router.push({
            pathname: "/store/[id]",
            query: {
                id: `${item?.slug ? item?.slug : item?.id}`,
                module_id: `${(0,_helper_functions_getModuleId__WEBPACK_IMPORTED_MODULE_12__/* .getModuleId */ .S)()}`
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
        spacing: 4,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                variant: "h6",
                fontWeight: "500",
                children: `${newText} ${configData?.business_name}`
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                width: "100%",
                spacing: 2.5,
                children: [
                    !isFetching ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: newStores?.slice(0, 6).map((store)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                                width: "100%",
                                onClick: ()=>handleClick(store),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomTypographyGray */ .mI, {
                                    sx: {
                                        fontSize: "14px",
                                        fontWeight: "400",
                                        cursor: "pointer",
                                        "&:hover": {
                                            color: (theme)=>theme.palette.primary.main
                                        }
                                    },
                                    children: store.name
                                })
                            }, store.id);
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                        width: "100%",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavStoreShimmer__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                        width: "70%",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ViewMore__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            redirect: "/store/latest"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavNewStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 22255:
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
/* harmony import */ var _typographies_H4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54028);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57987);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api_manage_hooks_react_query_store_useGetPopularStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63051);
/* harmony import */ var _NavStoreShimmer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54699);
/* harmony import */ var _ViewMore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35762);
/* harmony import */ var _helper_functions_getModuleId__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(52539);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _helper_functions_getStoresOrRestaurants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37698);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _redux_slices_storedData__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8697);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_typographies_H4__WEBPACK_IMPORTED_MODULE_3__, react_i18next__WEBPACK_IMPORTED_MODULE_5__, _api_manage_hooks_react_query_store_useGetPopularStore__WEBPACK_IMPORTED_MODULE_8__, _ViewMore__WEBPACK_IMPORTED_MODULE_10__, _helper_functions_getStoresOrRestaurants__WEBPACK_IMPORTED_MODULE_12__]);
([_typographies_H4__WEBPACK_IMPORTED_MODULE_3__, react_i18next__WEBPACK_IMPORTED_MODULE_5__, _api_manage_hooks_react_query_store_useGetPopularStore__WEBPACK_IMPORTED_MODULE_8__, _ViewMore__WEBPACK_IMPORTED_MODULE_10__, _helper_functions_getStoresOrRestaurants__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



//import Subtitle1 from "../../../typographies/Subtitle1";













const NavPopularStore = ()=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const queryKey = "navbar-stores";
    const filterBy = "all";
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const { data , refetch , isFetching  } = (0,_api_manage_hooks_react_query_store_useGetPopularStore__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(queryKey, filterBy);
    const { popularStores  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useSelector)((state)=>state.storedData);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (popularStores.length === 0) {
            refetch();
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (data) {
            dispatch((0,_redux_slices_storedData__WEBPACK_IMPORTED_MODULE_14__/* .setPopularStores */ .Ww)(data));
        }
    }, [
        data
    ]);
    const handleClick = (item)=>{
        router.push({
            pathname: "/store/[id]",
            query: {
                id: `${item?.slug ? item?.slug : item?.id}`,
                module_id: `${(0,_helper_functions_getModuleId__WEBPACK_IMPORTED_MODULE_15__/* .getModuleId */ .S)()}`
            }
        });
    };
    const popular = t("Popular");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
        spacing: 4,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                variant: "h6",
                fontWeight: "500",
                children: t(`${popular} ${(0,_helper_functions_getStoresOrRestaurants__WEBPACK_IMPORTED_MODULE_12__/* .getStoresOrRestaurants */ .s)()}`)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                width: "100%",
                spacing: 2.5,
                children: [
                    !isFetching ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: popularStores?.slice(0, 6).map((store)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                                width: "100%",
                                onClick: ()=>handleClick(store),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomTypographyGray */ .mI, {
                                    sx: {
                                        fontSize: "14px",
                                        fontWeight: "400",
                                        cursor: "pointer",
                                        "&:hover": {
                                            color: (theme)=>theme.palette.primary.main
                                        }
                                    },
                                    children: store.name
                                })
                            }, store.id);
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                        width: "100%",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavStoreShimmer__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                        width: "70%",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ViewMore__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            redirect: "/store/popular"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavPopularStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 54699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45269);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);





const NavStoreShimmer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
        spacing: 0.5,
        children: [
            ...Array(10)
        ].map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                spacing: 3,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
                    width: 150,
                    height: 20
                })
            }, index))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavStoreShimmer);


/***/ })

};
;
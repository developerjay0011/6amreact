"use strict";
(() => {
var exports = {};
exports.id = 6483;
exports.ids = [6483,6812,5405];
exports.modules = {

/***/ 39891:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ _index__WEBPACK_IMPORTED_MODULE_10__.getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13258);
/* harmony import */ var _src_components_module_wise_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69530);
/* harmony import */ var _src_components_my_orders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51090);
/* harmony import */ var _meta_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74121);
/* harmony import */ var _src_components_route_guard_AuthGuard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46941);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_components_review__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23631);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44369);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_3__, _src_components_module_wise_layout__WEBPACK_IMPORTED_MODULE_4__, _src_components_my_orders__WEBPACK_IMPORTED_MODULE_5__, _src_components_review__WEBPACK_IMPORTED_MODULE_9__, _index__WEBPACK_IMPORTED_MODULE_10__]);
([_src_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_3__, _src_components_module_wise_layout__WEBPACK_IMPORTED_MODULE_4__, _src_components_my_orders__WEBPACK_IMPORTED_MODULE_5__, _src_components_review__WEBPACK_IMPORTED_MODULE_9__, _index__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Index = ({ configData , landingPageData  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const { id  } = router.query;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_meta_data__WEBPACK_IMPORTED_MODULE_6__["default"], {
                title: `Review - ${configData?.business_name}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default()), {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_route_guard_AuthGuard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                from: router.pathname.replace("/", ""),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    configData: configData,
                    landingPageData: landingPageData,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_review__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        id: id
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58968:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useGetStoreReviews)
/* harmony export */ });
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60274);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67759);
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_1__, _MainApi__WEBPACK_IMPORTED_MODULE_2__]);
([_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_1__, _MainApi__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const getData = async (id)=>{
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get(`${_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__/* .store_review_api */ .ZU}?store_id=${id}`);
    return data;
};
function useGetStoreReviews(id) {
    return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)("track-order-data", ()=>getData(id), {
        enabled: false,
        onError: _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_1__/* .onSingleErrorResponse */ .f
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45269);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);




const CustomShimmerCard = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_1__/* .CustomBoxFullWidth */ .uu, {
        mt: "2rem",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
            container: true,
            spacing: 3,
            children: [
                ...Array(3)
            ].map((item, index)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    item: true,
                    xs: 12,
                    sm: 6,
                    md: 6,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                        variant: "rectangular",
                        width: "100%",
                        height: "10rem"
                    })
                }, index);
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomShimmerCard);


/***/ }),

/***/ 17901:
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
/* harmony import */ var _styled_components_CustomTypographies_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10648);
/* harmony import */ var _mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77849);
/* harmony import */ var _mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CustomImageContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58861);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45269);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86390);








// import ReviewModal from "../RreviewModal";
const ReviewCard = ({ review , productImageUrl  })=>{
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const [openModal, setOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const imageUrl = `${productImageUrl}/${review.item_image}`;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {
                sx: {
                    padding: ".5rem",
                    backgroundColor: (theme)=>theme.palette.neutral[300]
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_6__/* .CustomStackFullWidth */ .Xw, {
                    direction: "row",
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                            maxWidth: "120px",
                            width: "100%",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImageContainer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                src: imageUrl,
                                alt: review.item_name,
                                width: "100%",
                                height: "100%",
                                objectFit: "contained",
                                borderRadius: ".7rem"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                            width: "100%",
                            spacing: 0.5,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    variant: "h6",
                                    children: review.item_name
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    variant: "h5",
                                    children: [
                                        review.rating,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            sx: {
                                                width: "16px",
                                                color: "orange"
                                            }
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    variant: "h6",
                                    children: review.customer_name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomTypographies_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomTypographyGray */ .mI, {
                                    sx: {
                                        fontSize: "13px",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        display: "-webkit-box",
                                        WebkitLineClamp: "2",
                                        WebkitBoxOrient: "vertical",
                                        cursor: "pointer"
                                    },
                                    onClick: ()=>setOpenModal(true),
                                    children: review.comment
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                openModal: openModal,
                handleClose: ()=>setOpenModal(false),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                    direction: "row",
                    spacing: 1,
                    sx: {
                        padding: "10px",
                        width: "450px",
                        [theme.breakpoints.down("sm")]: {
                            width: "250px"
                        }
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                            maxWidth: "120px",
                            width: "100%",
                            height: "100px",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImageContainer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                src: imageUrl,
                                alt: review.item_name,
                                width: "100%",
                                height: "100%",
                                smHeight: "70px",
                                objectFit: "contained",
                                borderRadius: ".7rem"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                            width: "100%",
                            paddingRight: "10px",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    fontSize: {
                                        xs: "12px",
                                        md: "16px"
                                    },
                                    fontWeight: "500",
                                    children: review.item_name
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    variant: "h6",
                                    children: [
                                        review.rating,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            sx: {
                                                width: "16px",
                                                color: "orange"
                                            }
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    fontSize: {
                                        xs: "12px",
                                        md: "16px"
                                    },
                                    fontWeight: "500",
                                    children: review.customer_name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomTypographies_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomTypographyGray */ .mI, {
                                    sx: {
                                        fontSize: "13px"
                                    },
                                    children: review.comment
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewCard);


/***/ }),

/***/ 59238:
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
/* harmony import */ var _public_static_nodata_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3715);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45269);
/* harmony import */ var _api_manage_hooks_react_query_review_useGetStoreReviews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58968);
/* harmony import */ var _custom_empty_result__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58797);
/* harmony import */ var _ReviewCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17901);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _coupons_Shimmer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75873);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_manage_hooks_react_query_review_useGetStoreReviews__WEBPACK_IMPORTED_MODULE_5__, _custom_empty_result__WEBPACK_IMPORTED_MODULE_6__]);
([_api_manage_hooks_react_query_review_useGetStoreReviews__WEBPACK_IMPORTED_MODULE_5__, _custom_empty_result__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// import { useQuery } from "react-query";
//import {useReviewListsGet} from "../../hooks/react-query/config/reviews/useReiewLists";
// import { ReviewApi } from "../../hooks/react-query/config/reviewlist";
// import ReviewCard from "./ReviewCard";
// import { useSelector } from "react-redux";
// import WishListShimmer from "../wishlist-page/WishListShimmer";
// import CustomEmptyResult from "../empty-view/CustomEmptyResult";


// import ReviewModal from "../RreviewModal";
// import { onErrorResponse } from "../ErrorResponse";





const ReviewLists = ({ id  })=>{
    const { configData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.configData);
    const { data , refetch  } = (0,_api_manage_hooks_react_query_review_useGetStoreReviews__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(id);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        refetch();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__/* .CustomStackFullWidth */ .Xw, {
        sx: {
            minHeight: "60vh"
        },
        children: data ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
            container: true,
            spacing: 1,
            children: [
                data?.map((review)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        item: true,
                        md: 6,
                        sm: 6,
                        xs: 12,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReviewCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            review: review,
                            productImageUrl: configData?.base_urls?.item_image_url
                        })
                    }, review.id);
                }),
                data?.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    item: true,
                    textAlign: "center",
                    md: 12,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_custom_empty_result__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            label: "No Review found",
                            image: _public_static_nodata_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
                        })
                    })
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_coupons_Shimmer__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewLists);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 23631:
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
/* harmony import */ var _ReviewLists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59238);
/* harmony import */ var _typographies_H1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74485);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ReviewLists__WEBPACK_IMPORTED_MODULE_3__, _typographies_H1__WEBPACK_IMPORTED_MODULE_4__]);
([_ReviewLists__WEBPACK_IMPORTED_MODULE_3__, _typographies_H1__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const ReviewPage = ({ id  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomPaperBigCard */ .iD, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                spacing: 4,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_typographies_H1__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        text: "Reviews",
                        textAlign: "left"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReviewLists__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        id: id
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewPage);

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

/***/ 66741:
/***/ ((module) => {

module.exports = require("@mui/icons-material/CheckCircle");

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

/***/ 84107:
/***/ ((module) => {

module.exports = require("@mui/icons-material/LocalShipping");

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
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,8889,5269,7113,4121,8861,9240,4369,801,6941,8401,9530,1090], () => (__webpack_exec__(39891)));
module.exports = __webpack_exports__;

})();
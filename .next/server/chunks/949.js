"use strict";
exports.id = 949;
exports.ids = [949];
exports.modules = {

/***/ 30949:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestimonialSlideImage": () => (/* binding */ TestimonialSlideImage),
/* harmony export */   "TestimonialSlideText": () => (/* binding */ TestimonialSlideText),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57987);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88278);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61598);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45269);
/* harmony import */ var _CustomImageContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58861);
/* harmony import */ var _icons_NextIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80893);
/* harmony import */ var _icons_PrevIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11132);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(28332);
/* harmony import */ var _DollarSignHighlighter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(40116);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_4__]);
react_i18next__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable @next/next/no-img-element */ 















const PrevWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box)(({ theme  })=>({
        zIndex: 1,
        [theme.breakpoints.down("lg")]: {
            left: -5
        },
        [theme.breakpoints.down("sm")]: {
            left: -10,
            display: "none"
        }
    }));
const NextWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box)(({ theme  })=>({
        zIndex: 1,
        [theme.breakpoints.down("lg")]: {
            right: -5
        },
        [theme.breakpoints.down("sm")]: {
            right: -5,
            display: "none"
        }
    }));
const Next = ({ onClick , className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NextWrapper, {
        className: `client-nav client-next ${className}`,
        onClick: onClick,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_NextIcon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
    });
};
const Prev = ({ onClick , className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PrevWrapper, {
        className: `client-nav client-prev ${className}`,
        onClick: onClick,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_PrevIcon__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
    });
};
const Testimonials = ({ isSmall , landingPageData  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const { configData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)((state)=>state.configData);
    const primary = theme.palette.primary.main;
    const [onClient, setOnClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [nav1, setNav1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [nav2, setNav2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [indexState, setIndexState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        oldSlide: 0,
        activeSlide: 0,
        activeSlide2: 0
    });
    const setting = {
        dots: false,
        arrow: true,
        infinite: landingPageData?.testimonial_list.length > 1 ? true : false,
        slidesToShow: landingPageData?.testimonial_list.length > 2 ? 3 : 1,
        focusOnSelect: true,
        className: "center",
        centerMode: true,
        centerPadding: "164px",
        speed: 1000,
        beforeChange: (current, next)=>setIndexState({
                oldSlide: current,
                activeSlide: next
            }),
        afterChange: (current)=>setIndexState({
                activeSlide2: current
            }),
        prevArrow: landingPageData?.testimonial_list.length > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Prev, {}),
        nextArrow: landingPageData?.testimonial_list.length > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Next, {}),
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: landingPageData?.testimonial_list.length > 2 ? 3 : 1,
                    centerPadding: "64px"
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: landingPageData?.testimonial_list.length > 2 ? 3 : 1,
                    centerPadding: "0"
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: landingPageData?.testimonial_list.length > 2 ? 3 : 1,
                    initialSlide: 2,
                    centerPadding: "0"
                }
            }
        ]
    };
    const textSliderSettings = {
        fade: true
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: landingPageData && landingPageData?.testimonial_list?.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_container__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_8__/* .CustomStackFullWidth */ .Xw, {
                    py: {
                        xs: "30px",
                        md: "3.35rem"
                    },
                    spacing: 4,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        textAlign: "center",
                        variant: isSmall ? "h7" : "h4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DollarSignHighlighter__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            theme: theme,
                            text: landingPageData?.testimonial_title
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_8__/* .CustomStackFullWidth */ .Xw, {
                    pb: {
                        xs: "0px",
                        md: "45px"
                    },
                    sx: {
                        marginTop: "5px",
                        textAlign: "center"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        sx: {
                            display: "block",
                            position: "relative"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            sx: {
                                gap: "35px"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                    className: "slider-wrapper",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        asNavFor: nav2,
                                        ref: (e)=>setNav1(e),
                                        ...setting,
                                        children: landingPageData?.testimonial_list?.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TestimonialSlideImage, {
                                                img: `${landingPageData?.base_urls?.testimonial_image_url}/${item?.reviewer_image}`,
                                                indexState: indexState,
                                                currentIndex: i
                                            }, i))
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    asNavFor: nav1,
                                    ref: (e)=>setNav2(e),
                                    ...textSliderSettings,
                                    children: landingPageData?.testimonial_list.map((item, i)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(TestimonialSlideText, {
                                            ...item,
                                            key: i
                                        }))
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
const TestimonialSlideImage = (props)=>{
    const { img , indexState , currentIndex  } = props;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const primary = theme.palette.primary.main;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Stack, {
            p: "4px",
            sx: {
                position: "relative",
                width: "100%",
                maxWidth: "140px",
                aspectRatio: "1",
                margin: "0 auto"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
                sx: {
                    position: "absolute",
                    inset: "0",
                    background: currentIndex === indexState?.activeSlide2 && primary,
                    width: "100%",
                    height: "100%",
                    aspectRatio: "1",
                    borderRadius: "50%",
                    padding: "5px",
                    transition: "all ease 0.2s"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImageContainer__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    src: img,
                    alt: "",
                    width: "100%",
                    objectfit: "contained",
                    borderRadius: "50%"
                })
            })
        })
    });
};
const TestimonialSlideText = (props)=>{
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const { name , designation , review , activeState , index  } = props;
    const isSmall = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)(theme.breakpoints.down("sm"));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {
        className: `slide-item ${index > activeState ? "next-slide" : index == activeState ? "active" : "prev-slide"}`,
        sx: {
            marginTop: "30px"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Stack, {
            className: "content",
            spacing: 3,
            alignItems: "center",
            children: [
                review && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                    fontSize: {
                        xs: "12px",
                        md: "18px"
                    },
                    fontWeight: "500",
                    color: theme.palette.primary.main,
                    lineHeight: "2",
                    fontStyle: "italic",
                    sx: {
                        maxWidth: {
                            xs: "280px",
                            sm: "400px",
                            md: "580px"
                        }
                    },
                    children: [
                        "“",
                        review,
                        "”"
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                    spacing: 1,
                    children: [
                        name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            variant: isSmall ? "subtitle2" : "h6",
                            fontWeight: "600",
                            children: name
                        }),
                        designation && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            variant: isSmall ? "body2" : "body1",
                            className: "designation",
                            color: "text.secondary",
                            children: designation
                        })
                    ]
                })
            ]
        })
    });
};
Testimonials.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonials);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
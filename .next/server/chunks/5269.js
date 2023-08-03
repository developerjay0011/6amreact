"use strict";
exports.id = 5269;
exports.ids = [5269];
exports.modules = {

/***/ 45269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* binding */ SliderCustom),
/* harmony export */   "B7": () => (/* binding */ CloseIconWrapper),
/* harmony export */   "DF": () => (/* binding */ CustomListItem),
/* harmony export */   "E4": () => (/* binding */ FlexContainerCenter),
/* harmony export */   "G3": () => (/* binding */ CustomStackForLoaction),
/* harmony export */   "J8": () => (/* binding */ CustomPaper),
/* harmony export */   "Ks": () => (/* binding */ CustomTextArea),
/* harmony export */   "SE": () => (/* binding */ CustomImageContainerStyled),
/* harmony export */   "XN": () => (/* binding */ CustomChip),
/* harmony export */   "Xw": () => (/* binding */ CustomStackFullWidth),
/* harmony export */   "YG": () => (/* binding */ CustomTabs),
/* harmony export */   "el": () => (/* binding */ StyledInputBase),
/* harmony export */   "hQ": () => (/* binding */ CustomFab),
/* harmony export */   "hu": () => (/* binding */ StoreDetailsNavButton),
/* harmony export */   "i5": () => (/* binding */ CustomColouredTypography),
/* harmony export */   "iD": () => (/* binding */ CustomPaperBigCard),
/* harmony export */   "jH": () => (/* binding */ CustomOverlayBox),
/* harmony export */   "kY": () => (/* binding */ CustomModalWrapper),
/* harmony export */   "m": () => (/* binding */ CustomBoxForTips),
/* harmony export */   "mI": () => (/* binding */ CustomTypographyGray),
/* harmony export */   "mo": () => (/* binding */ ImageContainer),
/* harmony export */   "n2": () => (/* binding */ CustomTypographyBold),
/* harmony export */   "uu": () => (/* binding */ CustomBoxFullWidth),
/* harmony export */   "yM": () => (/* binding */ CustomTextField),
/* harmony export */   "zv": () => (/* binding */ CustomTextFieldContainer)
/* harmony export */ });
/* unused harmony exports FlexContainerCol, FlexContainerSpaceBetween, FlexContainer, CustomButton, CustomFullDivider, LayoutCenter, CustomAlert, OutletWrapper, CustomImageContainer, CustomImageContainerWithBorderRadius, CustomColouredTypographySubtitle, CenteringSingleComponentOnLayout, CustomStack, CustomBoxTab, CustomFormControlLabel, CustomBadge, CustomTypographyAlign, CustomIconButton, CustomBoxWithSpacing, CustomSearch, SearchIconWrapper, SearchInputBase, Logo, CustomBoxNav, CustomLink, CustomOtp, EmptyMessageContainer, CustomViewAll, CustomBoxRelative, CustomBoxAbsoluteCenter, ccsSelect, BackImage, List, CustomHeroBackground, customScrollBar, CustomZoom, PhoneWrapper */
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85246);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94192);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_2__);


// import imgB from '../../public/static/Privacy/RectangleP.png'
//import { Link } from 'react-router-dom'

const FlexContainerCol = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
});
const FlexContainerSpaceBetween = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box)({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
});
const FlexContainerCenter = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    maxWidth: "1400px",
    width: "100%",
    marginRight: "auto",
    marginLeft: "auto"
});
const FlexContainer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box)({
    display: "flex",
    gap: ".5rem",
    overflowX: "auto",
    whiteSpace: "nowrap",
    flexWrap: "nowrap",
    padding: "8px 0px 8px 5px",
    typography: "body1",
    "& :not(style) + :not(style)": {
        ml: 1
    }
});
const CustomTextField = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TextField)(({ theme  })=>({
        borderRadius: "13px",
        "& .MuiInputBase-input": {
            padding: "10px 10px",
            "& .MuiOutlinedInput-input": {
                padding: "4px 10px",
                borderRadius: "5px"
            }
        }
    }));
const CustomTextArea = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TextareaAutosize)(({ theme  })=>({
        padding: "10px",
        borderRadius: "8px",
        border: `1px solid ${theme.palette.primary.main}`,
        backgroundColor: theme.palette.neutral[100],
        color: theme.palette.neutral[1000]
    }));
const CustomPaper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Paper)(({ theme , width , height  })=>({
        //backgroundColor: '#D1D5DB',
        padding: "2rem",
        maxWidth: width ? width : "600px",
        width: "100%",
        minHeight: "300px",
        height: height ? height : "100%",
        borderRadius: "20px",
        justifyContent: "center",
        textAlign: "center"
    }));
const CustomPaperBigCard = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Paper)(({ theme , nopadding , minheight , height , backgroundcolor , padding , width , noboxshadow  })=>({
        backgroundColor: backgroundcolor ? backgroundcolor : theme.palette.background.paper,
        padding: nopadding === "true" ? "none" : padding ? padding : "1.875rem",
        width: width ? width : "100%",
        height: height ? height : "100%",
        minHeight: minheight && minheight,
        borderRadius: "10px",
        boxShadow: noboxshadow === "true" ? "none" : theme.palette.mode === "light" ? `0px 0px 2px rgba(145, 158, 171, 0.2), 0px 5px 20px ${theme.palette.paperBoxShadow}` : "none"
    }));
const CustomButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Button)(({ theme  })=>({
        [theme.breakpoints.up("sm")]: {}
    }));
const CustomFullDivider = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Divider)(({ theme  })=>({
        width: "100%"
    }));
const LayoutCenter = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)("div")(({ theme  })=>({
        backgroundColor: theme.palette.background.default,
        height: "100%",
        paddingTop: "7.5rem"
    }));
const CustomAlert = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Alert)(({ theme  })=>({}));
const OutletWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Container)(({ theme , iconicSidebar  })=>({
        display: "flex",
        flex: "1 1 auto",
        width: "100%",
        paddingTop: "6.25rem",
        paddingBottom: "10vh",
        [theme.breakpoints.up("lg")]: {
            paddingLeft: iconicSidebar ? 180 : 310
        }
    }));
const CustomImageContainer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box)(({ theme  })=>({
        position: "relative",
        width: "100%",
        height: "100%",
        "& img": {
            width: "100%",
            height: "100%",
            borderRadius: "5px",
            objectFit: "contained"
        }
    }));
const CustomImageContainerWithBorderRadius = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box)(({ theme  })=>({
        borderRadius: "0.125rem",
        position: "relative",
        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "contained"
        }
    }));
const ImageContainer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box)(({ theme  })=>({
        borderRadius: "0.125rem",
        position: "relative",
        "& img": {
            width: "100%",
            height: "300px",
            objectFit: "contain"
        }
    }));
const CustomColouredTypography = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography)(({ theme , color  })=>({
        color: color ? color : theme.palette.primary.main
    }));
const CustomColouredTypographySubtitle = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography)(({ theme  })=>({
        marginTop: "0.563rem",
        textTransform: "none",
        color: theme.palette.neutral[700]
    }));
const CenteringSingleComponentOnLayout = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%"
});
const CustomStack = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Stack)({
    alignItems: "start",
    width: "100%",
    paddingLeft: "1rem"
});
const CustomBoxTab = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box)({
    border: "1px solid #ff903f",
    padding: "5px",
    borderRadius: "15px"
});
const CustomTabs = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Tabs)(({ theme  })=>({
        border: "1px solid",
        borderColor: theme.palette.primary.main,
        padding: "5px",
        borderRadius: "15px",
        "& .MuiTabs-scrollButtons.Mui-disabled": {
            opacity: 0.3
        }
    }));
const CloseIconWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)("div")(({ theme , right , language_direction  })=>({
        top: 0,
        right: language_direction !== "rtl" ? right ? right : 9 : null,
        left: language_direction === "rtl" ? right ? right : 9 : null,
        height: "100%",
        position: "absolute",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }));
const CustomFormControlLabel = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.FormControlLabel)(({ theme  })=>({
        color: theme.palette.neutral[500]
    }));
const CustomBadge = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Badge)(({ theme  })=>({
        "& .MuiBadge-badge": {
            fontWeight: "bold"
        }
    }));
const CustomTypographyBold = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography)(({ theme , marginTop  })=>({
        fontWeight: "bold"
    }));
const CustomTypographyAlign = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography)(({ theme , align  })=>({
        textAlign: align
    }));
const CustomChip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Chip)(({ theme  })=>({
        fontWeight: "bold",
        color: theme.palette.whiteContainer.main
    }));
const CustomIconButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box)(({ theme , marginTop  })=>({
        color: theme.palette.neutral[700],
        cursor: "pointer"
    }));
const CustomBoxFullWidth = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box)(({ theme  })=>({
        width: "100%"
    }));
const CustomStackFullWidth = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Stack)(({ theme , marginBottom  })=>({
        width: "100%"
    }));
const CustomBoxWithSpacing = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box)(({ theme , marginTopBottom  })=>({
        width: "100%",
        marginTop: marginTopBottom && `${marginTopBottom}rem`,
        marginBottom: marginTopBottom && `${marginTopBottom}rem`
    }));
// export const CustomLink = styled(Link)(({ theme, width }) => ({
//     textDecoration: 'none',
//     width: width ? '100%' : 'auto',
// }))
const CustomSearch = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)("div")(({ theme  })=>({
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "#F3F2F2",
        color: "black",
        //alpha(theme.palette.common.white, 0.15),
        "&:hover": {
            //backgroundColor: alpha(theme.palette.common.white, 0.25),
            backgroundColor: "#F3F2F2"
        },
        marginLeft: 0,
        marginRight: "10px",
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto"
        }
    }));
const SearchIconWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)("div")(({ theme , language_direction  })=>({
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        left: language_direction === "rtl" ? "0px" : ""
    }));
const StyledInputBase = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.InputBase)(({ theme , width  })=>({
        color: "inherit",
        width: "120px",
        border: "2px solid #EF7822",
        padding: "5px 0",
        marginLeft: "5px",
        borderRadius: "5px",
        "& .MuiInputBase-input": {
            fontSize: "1.3rem",
            textAlign: "center"
        }
    }));
const SearchInputBase = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.InputBase)(({ theme  })=>({
        color: "inherit",
        "& .MuiInputBase-input": {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create("width"),
            width: "100%",
            [theme.breakpoints.up("sm")]: {
                width: "40ch",
                "&:focus": {
                    width: "50ch"
                }
            }
        }
    }));
const Logo = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)("div")(({ theme , height , width  })=>({
        width: width,
        height: height,
        justifyContent: "center",
        position: "relative",
        cursor: "pointer",
        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "contained"
        }
    }));
const CustomBoxNav = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box)(({ theme , isSmall  })=>({
        // display: isSmall ? 'none' : 'inline',
        flexGrow: 1
    }));
const CustomLink = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_1___default()))(({ theme , color  })=>({
        color: color ? color : "primary.main",
        cursor: "pointer",
        fontWeight: "700",
        "&:hover": {
            //backgroundColor: alpha(theme.palette.common.white, 0.25),
            color: theme.palette.primary.dark,
            textDecoration: "none"
        }
    }));
const CustomOtp = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.OutlinedInput)(({ theme  })=>({
        width: "60px"
    }));
const CustomTextFieldContainer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box)(({ theme , background , noheight  })=>({
        width: "100%",
        height: !noheight && "5.5rem",
        color: theme.palette.neutral[1000]
    }));
const CustomStackForLoaction = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Stack)(({ theme  })=>({
        justifyContent: "center",
        cursor: "pointer",
        alignItems: "center"
    }));
const CustomOverlayBox = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box)(({ theme , height , top  })=>({
        position: "absolute",
        bottom: 0,
        left: 0,
        top: top ? top : 0,
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.54)",
        color: "white",
        // padding: '10px',
        height: height ? height : "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "999"
    }));
const EmptyMessageContainer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(CustomStackFullWidth)(({ theme  })=>({
        height: "20vh",
        width: "25vw"
    }));
const CustomViewAll = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Stack)(({ theme  })=>({
        justifyContent: "end",
        color: theme.palette.primary.main,
        paddingTop: "5px",
        paddingBottom: "5px",
        fontSize: "14px",
        cursor: "pointer"
    }));
const CustomFab = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Fab)(({ theme  })=>({
        width: "40px",
        height: "40px",
        [theme.breakpoints.down("sm")]: {
            width: "33px",
            height: "35px"
        }
    }));
const CustomImageContainerStyled = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box)(({ theme , sm_width , max_width , margin_bottom , width , smheight , height , objectfit , minwidth , border_radius , sm_mb , sm_max_width , mdHeight , cursor , aspect_ratio  })=>({
        //maxWidth:'20rem',
        display: "inline-flex",
        background: "transparent",
        width: width ? width : "100%",
        height: height ? height : "100%",
        minWidth: minwidth,
        maxWidth: max_width,
        marginBottom: margin_bottom,
        position: "relative",
        //cursor: "pointer",
        [theme.breakpoints.down("md")]: {
            height: mdHeight ? mdHeight : ""
        },
        [theme.breakpoints.down("sm")]: {
            marginBottom: sm_mb ? sm_mb : "",
            height: smheight ? smheight : "",
            maxWidth: sm_max_width ? sm_max_width : "",
            width: sm_width ? sm_width : ""
        },
        "& img": {
            width: "100%",
            height: "100%",
            objectFit: objectfit ? objectfit : "cover",
            borderRadius: border_radius,
            aspectRatio: aspect_ratio ? aspect_ratio : ""
        }
    }));
const CustomListItem = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.ListItem)(({ theme , display , cursor  })=>({
        display: display,
        cursor: cursor && "pointer"
    }));
const CustomBoxRelative = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box)(({ theme , maxWidth , height  })=>({
        position: "relative",
        textAlign: "center",
        maxWidth: maxWidth,
        width: "100%",
        height: height
    }));
const CustomBoxAbsoluteCenter = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box)(({ theme  })=>({
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }));
const ccsSelect = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Select)(({ theme  })=>({
        select: {
            "&:before": {
                borderColor: (theme)=>theme.palette.primary.main
            },
            "&:after": {
                borderColor: (theme)=>theme.palette.primary.main
            }
        },
        icon: {
            fill: (theme)=>theme.palette.primary.main
        }
    }));
const BackImage = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Stack)(({ theme  })=>({
        backgroundImage: "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')"
    }));
const List = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)((_mui_material_List__WEBPACK_IMPORTED_MODULE_2___default()))(({ theme  })=>({}));
const SliderCustom = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Stack)(({ theme , language_direction , nopadding  })=>({
        position: "relative",
        width: "100%",
        paddingY: "10px",
        "& .slick-slider": {
            "& .slick-slide": {
                padding: "6px"
            },
            "& .slick-list": {
                paddingY: nopadding !== "true" && "8px",
                "& .slick-track": {
                    float: "left",
                    gap: "5px"
                }
            }
        }
    }));
const CustomHeroBackground = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box)(({ theme , bgImg  })=>({
        backgroundColor: (theme)=>(0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme.palette.primary.main, 0.15),
        width: "100%",
        height: "100%",
        paddingTop: "8.25rem",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }));
const customScrollBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Stack)(({ theme , height  })=>({
        overflowY: "auto",
        height: height,
        "&:hover::-webkit-scrollbar": {
            display: "block"
        },
        "&::-webkit-scrollbar": {
            display: "none",
            width: "0.512rem"
        },
        "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)"
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#8d8e90",
            height: "8px",
            borderRadius: "8px"
        }
    }));
const CustomTypographyGray = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography)(({ theme , nodefaultfont , textdecoration  })=>({
        color: theme.palette.neutral[400],
        fontWeight: "bold",
        fontSize: nodefaultfont !== "true" && "1rem",
        textDecoration: textdecoration
    }));
const CustomBoxForTips = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box)(({ theme  })=>({
        height: "40px",
        width: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid",
        cursor: "pointer",
        borderRadius: "8px",
        [theme.breakpoints.down("sm")]: {
            height: "40px"
        }
    }));
const CustomZoom = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Stack)(({ theme  })=>({}));
const StoreDetailsNavButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Button)(({ theme , color , background , language_direction , borderRigthTop , borderRightBottom , borderLeftBottom , borderLeftTop  })=>({
        backgroundColor: background ? theme.palette.primary.main : "inherit",
        color: background ? theme.palette.whiteContainer.main : theme.palette.neutral[1000],
        borderRadius: "15px",
        borderBottomLeftRadius: borderLeftBottom && borderLeftBottom,
        "&:hover": {
            backgroundColor: background && theme.palette.primary.light
        }
    }));
const CustomModalWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box)(({ theme  })=>({
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "8px",
        backgroundColor: "background.paper",
        p: 2,
        outline: "none"
    }));
// export const phoneWrapper=styled((Stack)(({theme})=>({
//
// }))
const PhoneWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Stack)(({ theme , lanDirection  })=>({
        "&.react-tel-input .special-label": {
            color: focus ? theme.palette.primary.main : theme.palette.neutral[1000],
            left: "10px",
            background: theme.palette.neutral[100]
        },
        "&.react-tel-input .form-control": {
            background: theme.palette.neutral[100],
            color: theme.palette.neutral[1000],
            padding: "1px 70px 0px 1px",
            borderRadius: "8px"
        },
        "&.react-tel-input .form-control:focus": {
            borderColor: theme.palette.primary.main,
            borderWidth: "2px",
            zIndex: 999,
            boxShadow: "none"
        },
        "&.react-tel-input .country-list .country-name": {
            color: "#000000"
        },
        "&.react-tel-input .flag-dropdown": {
            borderRadius: "8px 0px 0px 8px"
        },
        "&.react-tel-input .selected-flag": {
            marginRight: lanDirection === "rtl" ? "30px" : "0px",
            padding: " 0 0px 0 11px"
        },
        "&.react-tel-input .selected-flag .arrow": {
            left: "29px"
        }
    }));


/***/ })

};
;
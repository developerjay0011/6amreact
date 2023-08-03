"use strict";
exports.id = 8401;
exports.ids = [8401];
exports.modules = {

/***/ 17446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13332);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_2__);



const CustomFormatedDateTime = ({ date  })=>{
    const { configData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.configData);
    let timeFormat = configData?.timeformat;
    if (timeFormat === "12") {
        return moment_moment__WEBPACK_IMPORTED_MODULE_2___default()(date).format("ll hh:mm a");
    } else {
        return moment_moment__WEBPACK_IMPORTED_MODULE_2___default()(date).format("ll HH:mm");
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomFormatedDateTime);


/***/ }),

/***/ 30700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CD": () => (/* binding */ PendingButton),
/* harmony export */   "Ih": () => (/* binding */ OrderAmountTypography),
/* harmony export */   "S": () => (/* binding */ HeadingBox),
/* harmony export */   "To": () => (/* binding */ TrackOrderButton),
/* harmony export */   "UW": () => (/* binding */ SuccessButton),
/* harmony export */   "cs": () => (/* binding */ OrderStatusBox),
/* harmony export */   "d$": () => (/* binding */ DateTypography),
/* harmony export */   "f1": () => (/* binding */ OrderIdTypography),
/* harmony export */   "vY": () => (/* binding */ InformationGrid),
/* harmony export */   "z$": () => (/* binding */ OrderStatusGrid)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_2__);



const OrderIdTypography = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography)(({ theme  })=>({
        [theme.breakpoints.up("xs")]: {
            fontSize: "14px"
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "22px"
        }
    }));
const DateTypography = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography)(({ theme  })=>({
        color: theme.palette.text.secondary,
        [theme.breakpoints.up("xs")]: {
            fontSize: "12px"
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "16px"
        }
    }));
const OrderAmountTypography = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography)(({ theme  })=>({
        [theme.breakpoints.up("xs")]: {
            fontSize: "12px"
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "16px"
        }
    }));
const SuccessButton = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button)(({ theme  })=>({
        background: "rgba(0, 171, 17, 0.1);",
        color: theme.palette.success.main,
        borderRadius: "5px",
        [theme.breakpoints.up("xs")]: {
            width: "59.68px",
            height: "20.56px",
            fontSize: "12px"
        },
        [theme.breakpoints.up("md")]: {
            width: "88px",
            height: "30px",
            fontSize: "14px"
        }
    }));
const PendingButton = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_system__WEBPACK_IMPORTED_MODULE_2__.Box)(({ theme  })=>({
        textAlign: "center",
        textTransform: "capitalize",
        background: "rgba(0, 95, 149, 0.1)",
        color: theme.palette.info.dark,
        borderRadius: "5px",
        padding: "5px",
        width: "auto",
        [theme.breakpoints.down("md")]: {
            maxWidth: "100px"
        },
        [theme.breakpoints.up("xs")]: {
            fontSize: "12px"
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "16px"
        }
    }));
const TrackOrderButton = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button)(({ theme  })=>({
        width: "100%",
        height: "32px",
        background: theme.palette.primary.main,
        border: "1px solid rgba(239, 120, 34, 0.3)",
        borderRadius: "5px",
        color: "white",
        gap: "5px",
        "&:hover": {
            backgroundColor: theme.palette.primary.dark
        },
        [theme.breakpoints.up("md")]: {
            width: "150px",
            height: "32px",
            fontSize: "16px"
        }
    }));
const HeadingBox = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_system__WEBPACK_IMPORTED_MODULE_2__.Box)(()=>({
        padding: "10px 0px 20px 0px"
    }));
const OrderStatusBox = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_system__WEBPACK_IMPORTED_MODULE_2__.Box)(({ theme  })=>({
        padding: "7px 0px 20px 0px",
        [theme.breakpoints.up("xs")]: {
            textAlign: "center"
        }
    }));
const OrderStatusGrid = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid)(({ theme  })=>({
        background: theme.palette.neutral[300],
        borderRadius: "14px",
        padding: "20px",
        rowGap: "10px"
    }));
const InformationGrid = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid)(({ theme  })=>({
        background: (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.primary.main, 0.1),
        borderRadius: "14px",
        padding: "20px"
    }));


/***/ })

};
;
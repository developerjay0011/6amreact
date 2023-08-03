"use strict";
exports.id = 5213;
exports.ids = [5213];
exports.modules = {

/***/ 65213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UK": () => (/* binding */ CardWrapper),
/* harmony export */   "ef": () => (/* binding */ BodyWrapper),
/* harmony export */   "qo": () => (/* binding */ TimeWrapper),
/* harmony export */   "yj": () => (/* binding */ ChatMessageWrapper),
/* harmony export */   "zU": () => (/* binding */ CustomAvatar)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);



const ChatMessageWrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()))(({ theme , authortype , usertype , language_direction  })=>({
        display: "flex",
        flexDirection: authortype === usertype ? "row-reverse" : "row",
        maxWidth: 500,
        marginLeft: authortype === usertype ? language_direction === "rtl" ? 0 : "auto" : 0,
        marginBottom: "1rem",
        marginRight: authortype === usertype ? language_direction === "rtl" ? "auto" : 0 : 0
    }));
const CustomAvatar = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Avatar)(({ theme , authortype , usertype  })=>({
        height: 32,
        marginLeft: authortype === usertype ? 2 : 0,
        marginRight: authortype === usertype ? 0 : 2,
        width: 32
    }));
const BodyWrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()))(({ theme  })=>({
        flexGrow: 1,
        maxWidth: 500
    }));
const CardWrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card)(({ theme , authortype , usertype  })=>({
        backgroundColor: authortype === usertype ? theme.palette.neutral[200] : theme.palette.neutral[700],
        color: authortype === usertype ? theme.palette.primary.contrastText : "text.primary",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        paddingTop: ".1rem",
        paddingBottom: ".5rem"
    }));
const TimeWrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()))(({ theme , authortype , usertype  })=>({
        display: "flex",
        justifyContent: authortype === usertype ? "flex-end" : "flex-start",
        marginTop: 1,
        paddingTop: 2
    }));


/***/ })

};
;
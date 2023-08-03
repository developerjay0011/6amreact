"use strict";
exports.id = 7595;
exports.ids = [7595];
exports.modules = {

/***/ 77595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ec": () => (/* binding */ FilePreviewerWrapper),
/* harmony export */   "JL": () => (/* binding */ CustomBoxForFilePreviewer),
/* harmony export */   "i3": () => (/* binding */ IconButtonImagePreviewer),
/* harmony export */   "oC": () => (/* binding */ CustomDotBox),
/* harmony export */   "w_": () => (/* binding */ CustomBoxImageText)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45269);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





const FilePreviewerWrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .ImageContainer */ .mo)(({ theme , width , objectFit , height , borderRadius  })=>({
        cursor: "pointer",
        height: height ? height : "8.75rem",
        maxWidth: width,
        width: "100%",
        borderRadius: "50%",
        marginRight: "auto",
        marginLeft: "auto",
        "& img": {
            borderRadius: borderRadius ? borderRadius : "12px",
            height: "100%",
            //height:height ? height : 'auto',
            objectFit: objectFit ? "contained" : "cover"
        }
    }));
const IconButtonImagePreviewer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3___default()))(({ theme  })=>({
        backgroundColor: theme.palette.error.back,
        color: theme.palette.error.light,
        position: "absolute",
        borderRadius: "50%",
        bottom: -13,
        right: -18
    }));
const CustomBoxForFilePreviewer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()))(({ theme , width  })=>({
        width: width ? width : "100%",
        position: "relative",
        height: "10.25rem"
    }));
const CustomDotBox = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()))(({ theme , width , error , borderRadius  })=>({
        width: width && "100%",
        position: "relative",
        height: "9.25rem",
        border: "1px dashed ",
        borderRadius: borderRadius ? borderRadius : "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderColor: error && "red"
    }));
const CustomBoxImageText = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()))(({ theme  })=>({
        maxWidth: "14.375rem"
    }));


/***/ })

};
;
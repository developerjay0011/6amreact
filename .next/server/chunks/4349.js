"use strict";
exports.id = 4349;
exports.ids = [4349];
exports.modules = {

/***/ 39626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ single_file_uploader_with_preview_ImageAddIcon)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(67934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/icons-material/Create"
var Create_ = __webpack_require__(99520);
var Create_default = /*#__PURE__*/__webpack_require__.n(Create_);
;// CONCATENATED MODULE: ./src/components/single-file-uploader-with-preview/CustomImageInput.js


// eslint-disable-next-line react/display-name
const CustomImageInput = /*#__PURE__*/ external_react_default().forwardRef((props, ref)=>{
    const { imageChangeHandler  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("input", {
        ref: ref,
        id: "file",
        name: "file",
        type: "file",
        accept: "image/*",
        hidden: true,
        onChange: (e)=>{
            imageChangeHandler?.(e);
        }
    });
});
/* harmony default export */ const single_file_uploader_with_preview_CustomImageInput = (CustomImageInput);

;// CONCATENATED MODULE: ./src/components/single-file-uploader-with-preview/ImageAddIcon.js






const ImageAddIcon = (props)=>{
    const { imageChangeHandler  } = props;
    const imageContainerRef = (0,external_react_.useRef)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            position: "absolute",
            bottom: "18%",
            right: "0px",
            height: "38px",
            width: "38px",
            borderRadius: "50%",
            background: (theme)=>theme.palette.neutral[100]
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                onClick: ()=>imageContainerRef.current.click(),
                children: /*#__PURE__*/ jsx_runtime_.jsx((Create_default()), {
                    color: "secondary"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(single_file_uploader_with_preview_CustomImageInput, {
                ref: imageContainerRef,
                imageChangeHandler: imageChangeHandler
            })
        ]
    });
};
ImageAddIcon.propTypes = {};
/* harmony default export */ const single_file_uploader_with_preview_ImageAddIcon = (ImageAddIcon);


/***/ }),

/***/ 57790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ single_file_uploader_with_preview_ImageUploaderWithPreview)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./src/components/file-previewer/FilePreviewer.style.js
var FilePreviewer_style = __webpack_require__(77595);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: external "@mui/icons-material/CloudUpload"
var CloudUpload_ = __webpack_require__(44486);
var CloudUpload_default = /*#__PURE__*/__webpack_require__.n(CloudUpload_);
;// CONCATENATED MODULE: ./src/components/single-file-uploader-with-preview/ImageUploaderThumbnail.js





const ImageUploaderThumbnail = ({ label , maxWidth , width , error , borderRadius  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FilePreviewer_style/* CustomDotBox */.oC, {
        width: width,
        error: error,
        borderRadius: borderRadius,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CloudUpload_default()), {}),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Stack, {
                children: label
            })
        ]
    });
};
/* harmony default export */ const single_file_uploader_with_preview_ImageUploaderThumbnail = (ImageUploaderThumbnail);

// EXTERNAL MODULE: external "@mui/icons-material/Delete"
var Delete_ = __webpack_require__(83188);
;// CONCATENATED MODULE: ./src/components/single-file-uploader-with-preview/ImagePreviewer.js






const ImagePreviewer = ({ anchor , file , label , width , imageUrl , borderRadius , error , objectFit , height  })=>{
    let previewImage;
    if (typeof file !== "string") {
        previewImage = {
            url: URL.createObjectURL(file)
        };
    } else previewImage = file;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(FilePreviewer_style/* CustomBoxForFilePreviewer */.JL, {
            children: previewImage ? /*#__PURE__*/ jsx_runtime_.jsx(FilePreviewer_style/* FilePreviewerWrapper */.Ec, {
                onClick: ()=>anchor.current.click(),
                width: width,
                objectFit: objectFit,
                borderRadius: borderRadius,
                height: height,
                children: typeof file !== "string" ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: previewImage.url,
                    alt: "preview"
                }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: imageUrl ? `${imageUrl}/${previewImage}` : previewImage,
                    alt: "profile"
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx(FilePreviewer_style/* FilePreviewerWrapper */.Ec, {
                onClick: ()=>anchor.current.click(),
                width: width,
                height: height,
                objectFit: true,
                borderRadius: borderRadius,
                children: /*#__PURE__*/ jsx_runtime_.jsx(single_file_uploader_with_preview_ImageUploaderThumbnail, {
                    label: label,
                    width: width,
                    error: error,
                    borderRadius: borderRadius
                })
            })
        })
    });
};
/* harmony default export */ const single_file_uploader_with_preview_ImagePreviewer = (ImagePreviewer);

;// CONCATENATED MODULE: ./src/components/single-file-uploader-with-preview/ImageUploaderWithPreview.js



const ImageUploaderWithPreview = ({ file , type , labelText , hintText , imageOnChange , onChange , width , imageUrl , borderRadius , error , objectFit , height  })=>{
    const imageContainerRef = (0,external_react_.useRef)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(single_file_uploader_with_preview_ImagePreviewer, {
                anchor: imageContainerRef,
                file: file,
                label: labelText,
                hintText: hintText,
                width: width,
                imageUrl: imageUrl,
                borderRadius: borderRadius,
                error: error,
                height: height,
                objectFit: objectFit
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                ref: imageContainerRef,
                id: "file",
                name: "file",
                type: "file",
                accept: "image/*",
                hidden: true,
                onChange: (e)=>{
                    onChange(e);
                }
            })
        ]
    });
};
/* harmony default export */ const single_file_uploader_with_preview_ImageUploaderWithPreview = (ImageUploaderWithPreview);


/***/ })

};
;
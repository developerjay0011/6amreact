"use strict";
exports.id = 8861;
exports.ids = [8861];
exports.modules = {

/***/ 58861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_CustomImageContainer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./src/styled-components/CustomStyles.style.js
var CustomStyles_style = __webpack_require__(45269);
;// CONCATENATED MODULE: ./public/static/no-image-found.png
/* harmony default export */ const no_image_found = ({"src":"/_next/static/media/no-image-found.0dc47f70.png","height":2000,"width":2000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAPUlEQVR42mM4n3Y+7RwEglkMQArGBWMGMAWEMBqs4mz6wZx9uWfTgYIwgX25+3PPQsyAKb6QimwGhi1IEACBC0z5yYZiXQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/components/CustomImageContainer.js




const CustomImageContainer = ({ cursor , mdHeight , maxWidth , height , width , objectfit , minwidth , src , alt , borderRadius , marginBottom , smHeight , smMb , smMaxWidth , smWidth , aspectRatio  })=>{
    const [imageFile, setState] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setState(src);
    }, [
        src
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(CustomStyles_style/* CustomImageContainerStyled */.SE, {
        height: height,
        width: width,
        objectfit: objectfit,
        minwidth: minwidth,
        border_radius: borderRadius,
        margin_bottom: marginBottom,
        smheight: smHeight,
        sm_mb: smMb,
        max_width: maxWidth,
        sm_max_width: smMaxWidth,
        sm_width: smWidth,
        md_height: mdHeight,
        cursor: cursor,
        aspect_ratio: aspectRatio,
        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: imageFile,
            alt: alt,
            onError: ()=>{
                // currentTarget.onerror = null; // prevents looping
                setState(no_image_found.src);
            },
            loading: "lazy"
        })
    });
};
/* harmony default export */ const components_CustomImageContainer = (CustomImageContainer);


/***/ })

};
;
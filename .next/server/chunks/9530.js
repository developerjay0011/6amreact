"use strict";
exports.id = 9530;
exports.ids = [9530];
exports.modules = {

/***/ 43382:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useGetParcelCategory)
/* harmony export */ });
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61176);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60274);
/* harmony import */ var _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67759);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_0__, _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__]);
([_MainApi__WEBPACK_IMPORTED_MODULE_0__, _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const getParcelCategory = async ()=>{
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__/* .parcel_category_api */ .jP);
    return data;
};
function useGetParcelCategory() {
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)("parcel-category", getParcelCategory, {
        enabled: false,
        onError: _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__/* .onSingleErrorResponse */ .f
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 69530:
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
/* harmony import */ var _footer_Footer_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37056);
/* harmony import */ var _module_select_ModuleSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62255);
/* harmony import */ var _home_HomePageComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24371);
/* harmony import */ var _parcel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67916);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_slices_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67493);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _api_manage_hooks_react_query_useGetModule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38579);
/* harmony import */ var _redux_slices_storedData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8697);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_home_HomePageComponents__WEBPACK_IMPORTED_MODULE_5__, _parcel__WEBPACK_IMPORTED_MODULE_6__, _api_manage_hooks_react_query_useGetModule__WEBPACK_IMPORTED_MODULE_11__]);
([_home_HomePageComponents__WEBPACK_IMPORTED_MODULE_5__, _parcel__WEBPACK_IMPORTED_MODULE_6__, _api_manage_hooks_react_query_useGetModule__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const ModuleWiseLayout = ({ configData  })=>{
    const [rerender, setRerender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { selectedModule  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.utilsData);
    const { data , refetch  } = (0,_api_manage_hooks_react_query_useGetModule__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (router.pathname === "/home") {
            refetch();
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        handleModuleSelect();
    }, [
        selectedModule
    ]);
    const handleModuleSelect = ()=>{
        dispatch((0,_redux_slices_storedData__WEBPACK_IMPORTED_MODULE_12__/* .setResetStoredData */ .LH)());
        setRerender((prevState)=>!prevState);
    };
    const isSmall = (0,_mui_material__WEBPACK_IMPORTED_MODULE_10__.useMediaQuery)("(max-width:1180px)");
    const moduleSelectHandler = (item)=>{
        localStorage.setItem("module", JSON.stringify(item));
        if (item?.module_type === "parcel") {
            dispatch((0,_redux_slices_utils__WEBPACK_IMPORTED_MODULE_8__/* .setSelectedModule */ .$w)(item));
        } else {
            dispatch((0,_redux_slices_utils__WEBPACK_IMPORTED_MODULE_8__/* .setSelectedModule */ .$w)(item));
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
        children: [
            !isSmall && data && data?.length > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_module_select_ModuleSelect__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                moduleSelectHandler: moduleSelectHandler,
                selectedModule: selectedModule,
                data: data,
                configData: configData,
                dispatch: dispatch
            }),
            selectedModule && selectedModule?.module_type === "parcel" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_parcel__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_HomePageComponents__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                configData: configData
            }, rerender)
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(ModuleWiseLayout));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14017:
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
/* harmony import */ var _ParcelHeroImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11725);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_5__]);
react_i18next__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const ParcelHero = ()=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
        sx: {
            paddingBottom: "30px"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
            justifyContent: "center",
            alignItems: "center",
            spacing: 2,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ParcelHeroImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                    variant: "h5",
                    color: theme.palette.primary.main,
                    children: t("Instant Same Day Delivery")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                    children: t("Send your parcel anywhere in country instantly & Safely")
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParcelHero);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11725:
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



const ParcelHeroImage = ()=>{
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: "316",
            height: "210",
            viewBox: "0 0 316 210",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M29.5314 157.714C27.6184 156.52 25.4565 155.779 23.2114 155.547C22.1791 155.438 21.05 155.467 20.2199 156.093C20.1239 156.148 20.0445 156.228 19.9903 156.324C19.9362 156.42 19.9092 156.529 19.9124 156.639C19.9616 156.794 20.0647 156.927 20.2031 157.013C22.7774 158.97 26.6705 159.214 29.5398 157.714",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M29.367 157.538C27.9021 156.466 26.5345 155.267 25.2801 153.956C24.022 152.634 23.138 151.004 22.7184 149.231C22.636 148.968 22.6114 148.691 22.6463 148.419C22.6812 148.146 22.7748 147.885 22.9206 147.651C26.1775 150.171 28.7392 153.464 29.367 157.538Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M29.4931 157.693C29.1883 155.92 29.2126 154.107 29.5647 152.343C29.9361 150.565 30.963 148.992 32.4424 147.933C33.0028 149.243 32.7626 150.755 32.3666 152.133C31.7493 154.254 30.7917 156.263 29.531 158.08",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M32.6868 163.38C30.7486 163.615 29.0633 164.64 27.6308 165.942C26.1655 167.269 25.146 169.014 24.7109 170.94C26.6154 170.822 28.2249 169.487 29.3962 168C30.5675 166.513 31.3764 164.858 32.6615 163.455",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M33.3821 164.308C32.6191 162.376 32.3516 160.285 32.6039 158.224C32.8563 156.163 33.6205 154.198 34.8273 152.506C35.9312 156.424 35.5267 160.847 33.3821 164.308Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M37.6 169.315C35.8263 169.207 34.0601 169.622 32.5218 170.509C30.9835 171.395 29.7412 172.714 28.95 174.3C28.88 174.397 28.8376 174.511 28.8272 174.63C28.8168 174.749 28.8389 174.869 28.891 174.976C28.9662 175.048 29.0575 175.1 29.1571 175.129C29.2568 175.158 29.362 175.164 29.464 175.144C31.1494 175.035 32.6788 174.01 33.9259 172.847C35.1731 171.683 36.2601 170.327 37.6379 169.331",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M37.4647 169.041C36.5572 166.127 36.5017 163.015 37.3046 160.07C37.6206 158.915 38.1473 157.697 39.2259 157.155C39.2689 157.127 39.3173 157.108 39.3681 157.099C39.4188 157.09 39.4709 157.092 39.5208 157.105C39.6073 157.151 39.6735 157.227 39.7062 157.319C40.0658 158.127 40.2207 159.012 40.1571 159.894C40.0902 160.772 39.9493 161.643 39.7357 162.498C39.3987 164.094 39.2217 165.803 38.3453 167.176C38.138 167.508 37.9509 167.852 37.785 168.205C37.6206 168.554 37.6206 168.676 37.469 168.953",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M48.6346 170.701C47.792 167.563 48.6852 163.758 50.6655 161.188C50.8129 160.999 51.0067 160.797 51.2469 160.818C51.6093 160.852 51.7062 161.335 51.6893 161.7C51.538 164.926 50.4795 168.045 48.6346 170.701Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M49.6415 171.385C53.463 172.376 57.8491 171.414 61.0175 169.075C59.1102 168.122 56.9307 167.856 54.8492 168.323C52.7931 168.794 50.9098 169.713 49.6289 171.385",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M50.4883 169.298C52.6287 165.816 56.7367 163.544 60.8278 163.338C60.3559 165.018 58.9866 166.278 57.4571 167.063C55.9277 167.849 54.1918 168.18 52.4938 168.512C51.8365 168.638 50.9307 168.781 50.5009 169.298",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M48.8452 159.18C49.494 157.221 49.9373 155.2 50.1682 153.149C50.3283 151.091 50.0333 148.949 48.9631 147.177C46.9618 151.037 46.7596 155.543 48.7862 159.39",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M55.5781 155.769C57.9207 151.532 62.6902 148.146 67.5187 147.672C65.6564 152.292 60.5794 155.866 55.5781 155.769Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M54.1074 156.597C57.5961 157.126 60.5707 159.348 63.8276 160.696C64.5121 161.022 65.2698 161.167 66.0269 161.116C66.3788 161.111 66.7206 160.998 67.0065 160.794C67.2923 160.589 67.5085 160.302 67.626 159.972C67.7434 159.641 67.7565 159.282 67.6635 158.944C67.5705 158.606 67.3758 158.304 67.1056 158.079C66.6429 157.656 66.0999 157.329 65.5087 157.117C61.9569 155.643 58.148 155.605 54.4066 156.5",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M52.0894 159.038C52.8815 159.264 53.1511 159.672 53.7747 160.201C55.9084 162.009 58.4315 163.303 61.148 163.981C61.4261 164.052 61.7969 164.078 61.9359 163.826C62.075 163.574 61.9022 163.334 61.7463 163.137C60.563 161.752 59.0276 160.711 57.3012 160.121C55.6159 159.491 54.1244 158.731 52.0936 158.891",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M49.8101 144.308C51.2411 145.622 52.9321 146.623 54.7744 147.247C56.6167 147.872 58.5696 148.105 60.5077 147.932C60.685 147.937 60.8577 147.875 60.9922 147.76C61.2619 147.466 60.9417 147.017 60.6257 146.773C57.4825 144.329 53.6737 143.316 49.8101 144.308Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M52.5107 143.321C54.4046 141.932 56.6007 141.009 58.9202 140.626C61.2397 140.244 63.617 140.413 65.8586 141.12C64.1143 142.735 61.8741 143.716 59.5007 143.904C57.1541 144.117 54.7884 143.918 52.5107 143.316",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M51.4407 136.551C51.1289 133.426 51.3311 130.957 51.112 127.811C51.112 127.559 51.0404 127.256 50.8044 127.168C50.4758 127.042 50.2019 127.445 50.0966 127.777C49.6363 129.237 49.5177 130.782 49.7499 132.294C49.9822 133.806 50.5591 135.245 51.4364 136.501",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M51.2129 136.92C53.2644 135.601 55.0318 133.888 56.4121 131.88C57.4402 130.482 58.3039 128.802 58.0722 127.084C57.3493 127.103 56.6393 127.279 55.9917 127.6C55.344 127.92 54.7743 128.378 54.3223 128.94C53.425 130.073 52.7737 131.378 52.4095 132.775C51.9881 134.153 51.7016 135.568 51.2129 136.92Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M56.3198 135.483C60.9946 133.754 65.3221 131.207 69.0988 127.961C67.5694 127.348 65.8209 127.718 64.2914 128.331C60.8028 129.734 57.9714 132.111 56.2397 135.45",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M52.6665 138.6C55.0302 138.861 57.4276 139.02 59.7702 138.634C62.1128 138.248 64.249 137.34 66.402 136.437C66.591 136.387 66.7528 136.265 66.8528 136.097C66.8869 135.998 66.8899 135.891 66.8612 135.791C66.8326 135.69 66.7738 135.601 66.6927 135.534C66.5284 135.402 66.3348 135.312 66.1281 135.27C63.7855 134.615 61.2617 134.921 58.9654 135.69C56.7699 136.439 54.6588 137.414 52.6665 138.6Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M39.1839 144.412C37.5744 141.17 37.6755 137.386 39.0702 134.047C40.0476 135.534 40.1698 137.407 39.9887 139.2C39.8075 140.994 39.2682 142.795 39.2345 144.576",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M32.725 141.179C30.7089 141.15 28.7088 141.54 26.8529 142.325C24.9969 143.111 23.326 144.274 21.9473 145.741C23.9528 146.051 26.0216 145.535 27.8459 144.649C29.6404 143.701 31.3343 142.575 32.9019 141.289",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M28.3978 139.734C26.4302 139.575 24.5342 139.314 22.6424 139.911C20.7506 140.507 19.0274 141.801 18.2563 143.619C20.1142 143.767 21.9778 143.416 23.6536 142.603C25.317 141.788 26.9046 140.828 28.3978 139.734Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M34.8066 139.801C33.037 138.642 31.2168 137.466 29.1565 136.987C27.0962 136.508 24.703 136.861 23.2578 138.411C24.9431 139.385 26.9529 139.503 28.8868 139.503C30.8207 139.503 33.1929 139.477 35.0172 140.12",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M34.8146 139.894C31.7894 136.929 30.6392 131.607 31.8653 127.559C34.2516 131.206 35.294 135.566 34.8146 139.894Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M43.1401 131.498C43.7089 130.175 44.1134 128.785 44.6232 127.441C45.0877 126.075 45.8019 124.806 46.7299 123.699C47.6746 122.588 49.0202 121.892 50.4756 121.763C50.0106 123.804 49.1233 125.726 47.8703 127.407C46.6174 129.087 45.0264 130.487 43.1991 131.519",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M41.6321 133.249C40.6883 131.951 39.597 130.192 38.3162 129.226C37.0353 128.26 35.3669 127.672 33.8037 128.041C34.6123 129.456 35.741 130.664 37.1 131.568C38.459 132.472 40.0108 133.048 41.6321 133.249Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M41.9352 131.607C41.2602 130.06 40.7613 128.443 40.4479 126.785C40.138 125.113 40.4053 123.385 41.2063 121.884C42.8664 125.013 43.4057 128.377 42.049 131.64",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M43.1528 121.884C44.0966 118.78 46.9448 116.496 50.0248 115.446C50.4063 115.291 50.8194 115.229 51.2298 115.265C51.4344 115.288 51.6278 115.37 51.7858 115.501C51.9439 115.633 52.0597 115.808 52.1188 116.004C52.2284 116.533 51.7944 117.004 51.3815 117.357C48.9739 119.405 46.1746 120.945 43.1528 121.884Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M43.1908 119.343C43.3087 117.343 43.4351 115.315 44.0882 113.416C44.7413 111.518 45.9968 109.741 47.8296 108.914C48.1414 110.934 47.244 112.946 46.1443 114.685C45.0446 116.424 43.768 118.066 43.1191 120.006",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M43.1404 120.721C42.3609 118.461 42.2977 115.589 40.9242 113.619C39.972 112.241 38.4509 111.3 37.6336 109.839C37.1389 111.238 37.2069 112.773 37.8232 114.123C38.4453 115.459 39.3014 116.673 40.3512 117.71C41.3581 118.781 42.2177 119.587 43.153 120.717",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M43.1531 187.341C43.0941 187.341 43.0435 172.251 43.0393 153.641C43.0351 135.03 43.0815 119.936 43.1404 119.936C43.1994 119.936 43.2542 135.022 43.2584 153.641C43.2626 172.259 43.2163 187.341 43.1531 187.341Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M56.3827 142.137C56.1995 142.224 56.0092 142.295 55.8139 142.351L54.2466 142.876C52.9278 143.325 51.1118 143.976 49.1442 144.779C47.1766 145.581 45.3522 146.291 44.3073 147.194C43.8894 147.54 43.5578 147.979 43.3382 148.475C43.1866 148.832 43.1613 149.046 43.1402 149.042C43.1192 149.037 43.1402 148.987 43.1402 148.886C43.1637 148.736 43.2018 148.588 43.254 148.445C43.4505 147.918 43.7764 147.449 44.202 147.08C44.8366 146.546 45.5464 146.107 46.3087 145.778C47.1513 145.388 48.0782 144.98 49.0642 144.577C51.0402 143.771 52.8562 143.141 54.2044 142.729C54.8701 142.523 55.4179 142.368 55.7929 142.267C55.9855 142.207 56.1828 142.164 56.3827 142.137Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M60.7185 131.519C60.7185 131.519 60.6721 131.582 60.5626 131.691L60.0738 132.144C59.623 132.564 59.0079 133.106 58.2621 133.787L52.2455 139.142C49.8902 141.242 47.8552 143.232 46.4437 144.736C45.7359 145.488 45.1797 146.109 44.8005 146.542C44.6235 146.744 44.4803 146.912 44.3792 147.042C44.3306 147.103 44.2755 147.16 44.2148 147.21C44.2492 147.14 44.2931 147.075 44.3455 147.017C44.4381 146.895 44.5688 146.714 44.7668 146.487C45.1249 146.038 45.6642 145.395 46.3594 144.631C48.1813 142.647 50.1082 140.761 52.1317 138.982C54.4954 136.882 56.6442 135.021 58.2115 133.669L60.0696 132.081C60.2761 131.909 60.4446 131.766 60.5836 131.661C60.6241 131.61 60.6693 131.562 60.7185 131.519Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M49.6838 141.268C49.6206 141.242 50.1051 140.108 50.6023 138.676C51.0995 137.244 51.3312 136.034 51.3944 136.047C51.34 136.972 51.1424 137.883 50.8088 138.748C50.599 139.366 50.3542 139.971 50.0756 140.562C49.9802 140.815 49.8482 141.053 49.6838 141.268Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M43.1699 150.402C43.0333 150.277 42.9117 150.136 42.8076 149.982L41.8764 148.794C41.0928 147.786 40.0141 146.4 38.8049 144.875C37.5957 143.351 36.4792 141.994 35.6744 141.007L34.7222 139.831C34.6006 139.692 34.4906 139.543 34.3936 139.386C34.5396 139.501 34.6724 139.632 34.7896 139.776C35.0298 140.041 35.3753 140.423 35.7924 140.906C36.635 141.868 37.76 143.22 38.9734 144.741C40.1869 146.261 41.2486 147.681 41.9986 148.701C42.3736 149.218 42.6728 149.638 42.875 149.932C42.9898 150.078 43.0886 150.236 43.1699 150.402Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M40.2669 146.69C39.6821 146.044 39.2654 145.265 39.0534 144.422C38.8263 143.682 38.7322 142.909 38.7753 142.137H38.8722C38.8301 142.313 38.8006 142.402 38.7838 142.402C38.7838 142.402 38.7838 142.301 38.7838 142.12H38.8807C38.9279 142.874 39.0578 143.62 39.2683 144.346C39.5422 145.151 39.876 145.934 40.2669 146.69Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M36.5255 141.994C36.2647 141.798 35.9819 141.633 35.6829 141.503C34.9195 141.277 34.117 141.214 33.3276 141.318C32.5276 141.379 31.7341 141.507 30.9555 141.7C30.6362 141.802 30.3094 141.879 29.978 141.931C30.2698 141.76 30.5848 141.631 30.9134 141.549C31.6861 141.32 32.4815 141.177 33.2855 141.121C34.1051 141.013 34.9387 141.102 35.7166 141.381C36.0478 141.489 36.3329 141.705 36.5255 141.994Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M35.6362 140.856C35.6362 140.889 35.1433 140.658 34.3343 140.385C32.2361 139.672 29.9903 139.501 27.8079 139.89C26.9652 140.037 26.4596 140.192 26.4512 140.158C26.5572 140.09 26.674 140.041 26.7967 140.011C27.1161 139.899 27.4426 139.808 27.7742 139.738C29.9878 139.253 32.2959 139.428 34.4102 140.242C34.7281 140.362 35.0377 140.502 35.3371 140.662C35.445 140.713 35.5456 140.778 35.6362 140.856Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M43.1404 136.047C42.7544 134.973 42.4377 133.876 42.1924 132.763C41.8747 131.668 41.6284 130.554 41.4551 129.428C41.8423 130.499 42.1589 131.595 42.4031 132.708C42.7215 133.804 42.9678 134.919 43.1404 136.047Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M43.1994 136.047C42.8977 135.367 42.5471 134.71 42.1503 134.081C41.7042 133.488 41.1847 132.953 40.604 132.489C40.8233 132.544 41.0267 132.649 41.1981 132.796C41.6395 133.114 42.0217 133.506 42.3273 133.955C42.7995 134.562 43.1006 135.285 43.1994 136.047Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M43.1528 179.294C43.1528 179.294 43.0854 178.933 42.9168 178.291C42.6648 177.389 42.3261 176.515 41.9056 175.678C40.8565 173.549 38.9563 170.848 36.5378 168.143C35.337 166.778 34.1784 165.489 33.1672 164.258C32.2832 163.172 31.4831 162.021 30.774 160.814C30.2992 159.999 29.8947 159.144 29.5648 158.261C29.4552 157.946 29.3752 157.702 29.3288 157.53C29.3012 157.445 29.28 157.358 29.2656 157.27C29.2656 157.27 29.3962 157.614 29.6448 158.231C30.0028 159.101 30.4253 159.944 30.9088 160.751C31.6325 161.939 32.4407 163.073 33.3273 164.145C34.3174 165.363 35.4803 166.644 36.6979 168.009C39.1206 170.722 41.0208 173.469 42.0405 175.624C42.4527 176.473 42.7719 177.364 42.9927 178.282C43.0515 178.533 43.0965 178.787 43.1275 179.042C43.1453 179.125 43.1538 179.21 43.1528 179.294Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M55.1103 165.837C54.907 165.963 54.6975 166.08 54.4825 166.185C53.916 166.504 53.3725 166.862 52.8561 167.256C52.097 167.848 51.3843 168.497 50.7242 169.197C49.9742 169.986 49.2032 170.902 48.4153 171.885C46.8395 173.855 45.369 175.593 44.4842 176.988C44.0376 177.677 43.7132 178.248 43.4983 178.668C43.3978 178.884 43.2824 179.093 43.1528 179.294C43.1674 179.233 43.1872 179.174 43.2118 179.117C43.2582 179.004 43.3214 178.836 43.4225 178.63C43.6959 178.036 44.0069 177.459 44.3536 176.904C45.1963 175.48 46.671 173.712 48.2425 171.746C49.0346 170.763 49.8141 169.844 50.5767 169.058C51.2511 168.358 51.9825 167.715 52.7634 167.135C53.2948 166.746 53.8586 166.403 54.4488 166.11C54.6552 166.005 54.8238 165.942 54.9375 165.896C55.0513 165.849 55.1061 165.828 55.1103 165.837Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M55.3421 170.2C54.9066 170.298 54.4643 170.362 54.0191 170.394C52.9559 170.502 51.905 170.709 50.8802 171.011C49.8648 171.338 48.9129 171.835 48.0657 172.481C47.4168 172.981 47.1135 173.392 47.084 173.367C47.1293 173.255 47.195 173.153 47.2778 173.065C47.485 172.808 47.7164 172.572 47.9688 172.359C48.8079 171.663 49.7734 171.134 50.8128 170.801C51.8512 170.494 52.9212 170.305 54.0023 170.238C54.4468 170.184 54.8953 170.172 55.3421 170.2Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M47.4676 172.889C47.4002 172.851 47.9985 171.944 48.4578 170.722C48.917 169.5 48.9971 168.404 49.0729 168.416C49.1152 168.651 49.1152 168.891 49.0729 169.126C49.0095 169.699 48.8794 170.263 48.6853 170.806C48.4839 171.342 48.2269 171.856 47.9185 172.339C47.6614 172.692 47.4929 172.906 47.4676 172.889Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M58.9868 154.115C58.9179 154.157 58.8461 154.193 58.772 154.224L58.1526 154.506C57.8787 154.623 57.5459 154.77 57.1751 154.968C56.8043 155.165 56.3619 155.358 55.9111 155.631L55.1864 156.051C54.9378 156.194 54.6892 156.366 54.4238 156.53C53.8929 156.854 53.3578 157.248 52.789 157.656C50.3416 159.464 48.2069 161.659 46.469 164.153C46.0814 164.733 45.7022 165.279 45.3988 165.833C45.243 166.102 45.0786 166.354 44.9438 166.61C44.809 166.866 44.6826 167.106 44.5604 167.341C44.3034 167.803 44.1391 168.244 43.9368 168.626C43.7346 169.008 43.6166 169.336 43.5155 169.613C43.4144 169.89 43.3217 170.075 43.2543 170.243C43.2263 170.318 43.1911 170.39 43.1489 170.457C43.1583 170.378 43.1796 170.3 43.2121 170.226C43.2711 170.058 43.3427 169.844 43.4354 169.584C43.5504 169.241 43.6826 168.905 43.8315 168.576C44 168.189 44.177 167.736 44.4256 167.274L44.8006 166.526C44.9312 166.27 45.0913 166.014 45.2472 165.741C45.5463 165.191 45.9213 164.64 46.3089 164.061C47.1783 162.806 48.1446 161.621 49.1993 160.516C50.2752 159.423 51.4345 158.415 52.6668 157.5C53.2441 157.08 53.7834 156.702 54.3227 156.387C54.5923 156.224 54.8409 156.056 55.0979 155.917L55.8311 155.518C56.2945 155.249 56.7369 155.06 57.1161 154.88C57.4411 154.722 57.7745 154.582 58.1147 154.46L58.7509 154.216C58.8239 154.171 58.9035 154.137 58.9868 154.115Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M49.519 160.44C49.6098 160.136 49.7921 159.866 50.0415 159.668C50.6264 159.16 51.3729 158.876 52.1482 158.865C52.9047 158.859 53.655 159.002 54.3559 159.285C54.6573 159.38 54.9417 159.522 55.1986 159.705C54.8966 159.645 54.6005 159.558 54.3138 159.445C53.6232 159.211 52.8988 159.09 52.1692 159.088C51.4442 159.103 50.743 159.349 50.1679 159.789C49.9357 159.99 49.7189 160.208 49.519 160.44Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M48.1035 161.885C48.3867 161.271 48.5878 160.623 48.7018 159.957C48.7435 159.282 48.6982 158.605 48.567 157.941C48.6937 158.106 48.7776 158.299 48.8114 158.504C49.0686 159.475 48.9482 160.507 48.4743 161.394C48.2889 161.73 48.1246 161.902 48.1035 161.885Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M32.6997 181.44C33.0241 187.207 34.7685 193.074 37.4523 199.001H49.1106C51.6681 193.121 53.2903 187.274 53.581 181.44H32.6997Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M51.6892 190.789C51.6892 190.848 47.8508 190.898 43.115 190.898C38.3792 190.898 34.5493 190.848 34.5493 190.789C34.5493 190.73 38.3877 190.68 43.1234 190.68C47.8592 190.68 51.6892 190.73 51.6892 190.789Z",
                    fill: "#FAFAFA"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M51.4279 192.877C51.4279 192.94 47.8297 192.986 43.393 192.986C38.9564 192.986 35.354 192.94 35.354 192.877C35.354 192.814 38.9522 192.78 43.3973 192.78C47.8423 192.78 51.4279 192.818 51.4279 192.877Z",
                    fill: "#FAFAFA"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M37.6379 185.245C37.7839 187.027 37.7839 188.818 37.6379 190.6C37.4918 188.818 37.4918 187.027 37.6379 185.245Z",
                    fill: "#FAFAFA"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M43.8859 185.245C44.032 187.09 44.032 188.944 43.8859 190.789C43.7399 188.944 43.7399 187.09 43.8859 185.245Z",
                    fill: "#FAFAFA"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M49.7511 185.195C49.8972 187.078 49.8972 188.97 49.7511 190.853C49.6051 188.97 49.6051 187.078 49.7511 185.195Z",
                    fill: "#FAFAFA"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M53.2102 185.245C53.2102 185.304 48.7061 185.354 43.1529 185.354C37.5998 185.354 33.0957 185.304 33.0957 185.245C33.0957 185.186 37.5955 185.136 43.1529 185.136C48.7103 185.136 53.2102 185.182 53.2102 185.245Z",
                    fill: "#FAFAFA"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M79.6785 17.4385H33.5088V84.1471H79.6785V17.4385Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M77.365 17.4385H31.1953V84.1471H77.365V17.4385Z",
                    fill: "#F5F5F5"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M71.6265 24.6621H36.9297V76.9227H71.6265V24.6621Z",
                    fill: "white"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M71.6266 76.9233C71.6266 76.9233 71.6266 76.8351 71.6266 76.6671C71.6266 76.4991 71.6266 76.2471 71.6266 75.9237C71.6266 75.2685 71.6266 74.3067 71.6266 73.0593C71.6266 70.5393 71.6266 66.9063 71.5929 62.2947C71.5929 53.0799 71.5634 40.0347 71.5381 24.6627L71.6266 24.7803H36.934L37.0604 24.6543C37.0604 44.3691 37.0604 62.5467 37.0351 76.9149L36.934 76.8141L62.1887 76.8645L69.166 76.8939H70.9988H71.6308H71.0199H69.2081L62.2519 76.9191L36.934 76.9737H36.8329V76.8729C36.8329 62.5047 36.8329 44.3271 36.8076 24.6123V24.4863H36.9382H71.6308H71.7488V24.5997C71.7235 39.9969 71.7067 53.0715 71.6898 62.3073C71.6898 66.9063 71.6898 70.5477 71.6603 73.0467C71.6603 74.3067 71.6603 75.2391 71.6603 75.8901C71.6603 76.2051 71.6603 76.4487 71.6603 76.6167C71.6603 76.7847 71.6266 76.9233 71.6266 76.9233Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M77.4956 17.4385C77.2512 17.8592 76.9692 18.257 76.6529 18.6271C76.1178 19.3453 75.3552 20.3071 74.4873 21.3697C73.6193 22.4323 72.8019 23.3521 72.2036 24.0115C71.905 24.3872 71.5706 24.7332 71.2051 25.0447C71.468 24.639 71.7639 24.2555 72.0899 23.8981L74.3103 21.2101L76.5307 18.5179C76.8209 18.1314 77.1437 17.7702 77.4956 17.4385Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M71.8037 76.7549C73.5287 79.4949 75.5599 82.0311 77.8583 84.3149L71.8037 76.7549Z",
                    fill: "white"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M77.8583 84.2981C77.4721 84.0179 77.1175 83.6968 76.8007 83.3405C75.1907 81.7071 73.7521 79.9142 72.5073 77.9897C72.2323 77.6023 71.9966 77.1887 71.8037 76.7549C72.1151 77.1094 72.397 77.4886 72.6464 77.8889C73.1562 78.6029 73.8725 79.5689 74.7067 80.6189C75.5409 81.6689 76.3373 82.5677 76.9229 83.2187C77.26 83.5559 77.5726 83.9166 77.8583 84.2981Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M31.1787 84.0922L37.2248 76.6582L31.1787 84.0922Z",
                    fill: "white"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M37.2331 76.6582C36.3246 77.9677 35.3487 79.2294 34.3091 80.4382C32.6238 82.492 31.2418 84.1216 31.187 84.0754C32.103 82.7648 33.0875 81.503 34.1363 80.2954C35.1045 79.0302 36.1382 77.8161 37.2331 76.6582Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M31.1787 17.4385C31.2335 17.3923 32.548 18.9589 34.128 20.9371C35.107 22.103 36.0212 23.3215 36.8667 24.5869C36.8119 24.6331 35.5016 23.0665 33.9174 21.0883C32.9385 19.9223 32.0242 18.7039 31.1787 17.4385Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M60.8154 35.2715H49.1992V68.1533H60.8154V35.2715Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M285.816 21.332H249.097V59.4848H285.816V21.332Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M283.33 21.332H246.61V59.4848H283.33V21.332Z",
                    fill: "#FAFAFA"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M283.338 59.497H246.598V21.3232H283.338V59.497ZM246.619 59.497H283.317V21.3442H246.619V59.497Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M278.392 26.46H251.544V54.3564H278.392V26.46Z",
                    fill: "white"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M251.536 54.541C251.347 54.8229 251.125 55.081 250.875 55.3096C250.453 55.7632 249.842 56.3722 249.168 57.0358C248.494 57.6994 247.87 58.2958 247.415 58.7158C247.181 58.959 246.921 59.1758 246.64 59.3626C246.833 59.0762 247.062 58.8164 247.323 58.5898C247.744 58.1362 248.355 57.5272 249.033 56.8594C249.712 56.1916 250.331 55.5994 250.79 55.1794C251.014 54.9389 251.264 54.7247 251.536 54.541Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M278.392 54.4736C278.672 54.6646 278.931 54.8857 279.163 55.133C279.613 55.553 280.224 56.162 280.89 56.813C281.556 57.464 282.154 58.1066 282.575 58.5644C282.823 58.7933 283.039 59.053 283.22 59.3372C282.94 59.1471 282.683 58.9259 282.453 58.6778C282.002 58.2578 281.387 57.6488 280.722 56.9726C280.056 56.2964 279.458 55.679 279.036 55.2212C278.793 54.9981 278.576 54.7472 278.392 54.4736Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M278.316 26.5359C278.508 26.2556 278.732 25.9978 278.982 25.7673C279.403 25.3179 280.01 24.7089 280.688 24.0453C281.366 23.3817 281.982 22.7853 282.441 22.3653C282.672 22.1209 282.933 21.9052 283.216 21.7227C283.028 22.0023 282.807 22.2589 282.559 22.4871C282.137 22.9365 281.526 23.5497 280.848 24.2133C280.17 24.8769 279.546 25.4733 279.091 25.8933C278.859 26.1371 278.599 26.3528 278.316 26.5359Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M251.473 26.6031C251.187 26.4156 250.926 26.1942 250.693 25.9437C250.243 25.5237 249.628 24.9147 248.962 24.2427C248.296 23.5707 247.698 22.9533 247.276 22.4955C247.031 22.2645 246.815 22.005 246.632 21.7227C246.913 21.9099 247.17 22.1298 247.399 22.3779C247.849 22.7979 248.465 23.4069 249.13 24.0831C249.796 24.7593 250.394 25.3809 250.816 25.8345C251.064 26.064 251.285 26.322 251.473 26.6031Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M278.316 54.3561C278.316 54.3561 278.316 54.3099 278.316 54.2217C278.316 54.1335 278.316 53.9991 278.316 53.8311C278.316 53.4825 278.316 52.9911 278.316 52.3275C278.316 51.0045 278.316 49.0809 278.287 46.6407C278.287 41.7561 278.257 34.7967 278.236 26.4807L278.337 26.5857H251.57L251.688 26.4639C251.688 36.7035 251.688 46.2837 251.688 54.3603L251.587 54.2595L270.968 54.3099L276.412 54.3393H277.853H278.354C278.315 54.3435 278.275 54.3435 278.236 54.3393H277.878H276.454L271.031 54.3645L251.583 54.4149H251.481V54.3099C251.481 46.2333 251.481 36.6699 251.481 26.4135V26.2959H251.536H278.304H278.409V26.4597C278.409 34.8219 278.371 41.8065 278.358 46.7079C278.358 49.1397 278.337 51.0549 278.329 52.3695C278.329 53.0121 278.329 53.5119 278.329 53.8563C278.329 54.0159 278.329 54.1419 278.329 54.2343C278.329 54.2752 278.325 54.3161 278.316 54.3561Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M269.447 35.9434H260.489V44.8726H269.447V35.9434Z",
                    fill: "#EBEBEB"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M159.534 148.168H91.6274V179.387H159.534V148.168Z",
                    fill: "#F5F5F5"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M157.916 177.916H93.1821V149.81H157.916V177.916ZM93.6035 177.496H157.494V150.23H93.6035V177.496Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M176.122 148.168H159.534V179.387H176.122V148.168Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M93.3925 158.508H157.705C157.724 158.504 157.742 158.493 157.755 158.477C157.767 158.462 157.774 158.442 157.774 158.422C157.774 158.402 157.767 158.383 157.755 158.367C157.742 158.351 157.724 158.34 157.705 158.336H93.3925C93.3729 158.34 93.3553 158.351 93.3427 158.367C93.3301 158.383 93.3232 158.402 93.3232 158.422C93.3232 158.442 93.3301 158.462 93.3427 158.477C93.3553 158.493 93.3729 158.504 93.3925 158.508Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M125.76 158.424C125.932 155.6 125.932 152.768 125.76 149.944C125.755 149.924 125.744 149.907 125.729 149.894C125.713 149.882 125.693 149.875 125.673 149.875C125.653 149.875 125.633 149.882 125.618 149.894C125.602 149.907 125.591 149.924 125.587 149.944C125.425 152.769 125.432 155.6 125.608 158.424C125.612 158.438 125.62 158.451 125.632 158.46C125.644 158.469 125.658 158.474 125.673 158.474C125.688 158.474 125.703 158.469 125.714 158.46C125.726 158.451 125.735 158.438 125.738 158.424H125.76Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M143.072 154.182C143.072 154.355 143.021 154.524 142.924 154.668C142.828 154.811 142.691 154.923 142.531 154.989C142.371 155.055 142.195 155.073 142.025 155.039C141.855 155.005 141.699 154.922 141.576 154.8C141.453 154.678 141.37 154.522 141.336 154.353C141.302 154.183 141.32 154.008 141.386 153.848C141.452 153.688 141.565 153.552 141.709 153.456C141.853 153.36 142.022 153.309 142.196 153.309C142.428 153.309 142.651 153.401 142.815 153.564C142.98 153.728 143.072 153.951 143.072 154.182Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M109.319 154.182C109.319 154.355 109.268 154.524 109.171 154.668C109.075 154.811 108.938 154.923 108.778 154.989C108.618 155.055 108.442 155.073 108.272 155.039C108.102 155.005 107.946 154.922 107.823 154.8C107.701 154.678 107.617 154.522 107.583 154.353C107.549 154.183 107.567 154.008 107.633 153.848C107.699 153.688 107.812 153.552 107.956 153.456C108.1 153.36 108.269 153.309 108.443 153.309C108.675 153.309 108.898 153.401 109.062 153.564C109.227 153.728 109.319 153.951 109.319 154.182Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M126.425 163.863C126.425 164.036 126.374 164.205 126.277 164.348C126.181 164.492 126.044 164.604 125.884 164.67C125.724 164.736 125.548 164.753 125.378 164.72C125.208 164.686 125.052 164.603 124.929 164.481C124.806 164.358 124.723 164.203 124.689 164.033C124.655 163.864 124.673 163.688 124.739 163.529C124.805 163.369 124.918 163.232 125.062 163.136C125.206 163.04 125.375 162.989 125.549 162.989C125.781 162.989 126.004 163.081 126.168 163.245C126.333 163.409 126.425 163.631 126.425 163.863Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M99.7466 179.387L96.2495 198.984H98.2171L104.664 179.387H99.7466Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M154.73 179.387L157.654 199.018H155.687L149.813 179.387H154.73Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M167.855 179.387L171.167 199.018H169.203L162.938 179.387H167.855Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M126.366 172.696C126.366 172.869 126.315 173.038 126.218 173.181C126.122 173.325 125.985 173.437 125.825 173.503C125.665 173.569 125.489 173.586 125.319 173.553C125.149 173.519 124.993 173.436 124.87 173.314C124.747 173.191 124.664 173.036 124.63 172.866C124.596 172.697 124.614 172.521 124.68 172.362C124.746 172.202 124.859 172.065 125.003 171.969C125.147 171.873 125.316 171.822 125.49 171.822C125.722 171.822 125.945 171.914 126.109 172.078C126.274 172.242 126.366 172.464 126.366 172.696Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M93.3925 168.176H157.705C157.724 168.172 157.742 168.161 157.755 168.145C157.767 168.13 157.774 168.11 157.774 168.09C157.774 168.07 157.767 168.05 157.755 168.035C157.742 168.019 157.724 168.008 157.705 168.004H93.3925C93.3729 168.008 93.3553 168.019 93.3427 168.035C93.3301 168.05 93.3232 168.07 93.3232 168.09C93.3232 168.11 93.3301 168.13 93.3427 168.145C93.3553 168.161 93.3729 168.172 93.3925 168.176Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M139.032 137.571L139.01 133.404L118.478 133.511L118.5 137.678L139.032 137.571Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M141.501 148.076L141.467 141.604L118.584 141.723L118.618 148.195L141.501 148.076Z",
                    fill: "#F5F5F5"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M137.098 148.038C136.984 146.963 136.946 145.88 136.984 144.8C136.946 143.719 136.984 142.637 137.098 141.562C137.206 142.637 137.243 143.719 137.207 144.8C137.243 145.88 137.206 146.962 137.098 148.038Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M138.058 148.038C137.947 146.962 137.911 145.88 137.949 144.8C137.911 143.719 137.947 142.637 138.058 141.562C138.167 142.637 138.203 143.719 138.168 144.8C138.203 145.88 138.167 146.962 138.058 148.038Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M122.065 148.038C121.956 146.962 121.92 145.88 121.955 144.8C121.92 143.719 121.956 142.637 122.065 141.562C122.176 142.637 122.212 143.719 122.174 144.8C122.212 145.88 122.176 146.962 122.065 148.038Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M123.029 148.038C122.921 146.962 122.884 145.88 122.92 144.8C122.884 143.719 122.921 142.637 123.029 141.562C123.143 142.637 123.181 143.719 123.143 144.8C123.181 145.88 123.143 146.963 123.029 148.038Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M125.136 144.901C125.136 144.838 127.445 144.787 130.293 144.787C133.141 144.787 135.45 144.838 135.45 144.901C135.45 144.964 133.141 145.01 130.293 145.01C127.445 145.01 125.136 144.964 125.136 144.901Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M150.091 141.565L150.069 137.398L121.832 137.546L121.854 141.712L150.091 141.565Z",
                    fill: "#EBEBEB"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M146.055 141.053C145.787 141.056 145.524 140.98 145.299 140.834C145.075 140.688 144.899 140.478 144.794 140.232C144.689 139.986 144.66 139.715 144.71 139.452C144.76 139.189 144.888 138.948 145.076 138.757C145.265 138.567 145.506 138.437 145.768 138.384C146.031 138.33 146.304 138.356 146.552 138.457C146.8 138.559 147.012 138.732 147.162 138.954C147.311 139.176 147.391 139.437 147.391 139.705C147.392 139.88 147.358 140.055 147.292 140.218C147.225 140.381 147.127 140.529 147.003 140.654C146.879 140.78 146.732 140.879 146.569 140.948C146.406 141.016 146.232 141.052 146.055 141.053Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M142.385 140.121V139.289H123.484V140.121H142.385Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M295.919 112.4H252.231V194.72H295.919V112.4Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M282.955 112.4H239.267V194.72H282.955V112.4Z",
                    fill: "#F5F5F5"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M279.74 129.36H242.241V116.294H279.74V129.36ZM242.688 128.886H279.264V116.76H242.688V128.886Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M254.127 116.525H268.36V117.046C268.36 117.598 268.14 118.126 267.749 118.516C267.358 118.906 266.827 119.125 266.274 119.125H256.213C255.659 119.125 255.129 118.906 254.738 118.516C254.347 118.126 254.127 117.598 254.127 117.046V116.525Z",
                    fill: "#EBEBEB"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M279.74 145.92H242.241V132.871H279.74V145.92ZM242.688 145.458H279.264V133.329H242.688V145.458Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M254.127 133.103H268.36V133.623C268.36 134.173 268.141 134.701 267.752 135.09C267.362 135.48 266.834 135.7 266.282 135.702H256.213C255.659 135.702 255.129 135.483 254.738 135.093C254.347 134.704 254.127 134.175 254.127 133.623V133.103Z",
                    fill: "#EBEBEB"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M279.74 162.493H242.241V149.448H279.74V162.493ZM242.688 162.036H279.264V149.906H242.688V162.036Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M254.127 149.676H268.36V150.197C268.36 150.748 268.14 151.277 267.749 151.667C267.358 152.057 266.827 152.276 266.274 152.276H256.213C255.659 152.276 255.129 152.057 254.738 151.667C254.347 151.277 254.127 150.748 254.127 150.197V149.676Z",
                    fill: "#EBEBEB"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M279.74 179.071H242.241V166.021H279.74V179.071ZM242.688 178.613H279.264V166.479H242.688V178.613Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M254.127 166.253H268.36V166.774C268.356 167.321 268.136 167.846 267.747 168.233C267.358 168.62 266.832 168.838 266.282 168.84H256.213C255.659 168.84 255.129 168.621 254.738 168.231C254.347 167.841 254.127 167.312 254.127 166.761V166.24V166.253Z",
                    fill: "#EBEBEB"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M284.779 109.317H237.329V113.417H284.779V109.317Z",
                    fill: "#EBEBEB"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M299.05 109.317H284.779V113.417H299.05V109.317Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M241.563 194.721H239.267V198.925H241.563V194.721Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M255.749 194.721H253.453V198.925H255.749V194.721Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M281.657 194.721H279.361V198.925H281.657V194.721Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M294.613 194.721H292.316V198.925H294.613V194.721Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M276.083 98.0068L280.502 109.284L277.755 109.275L275.552 102.345L276.083 98.0068Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M260.982 87.5908L259.461 109.196L275.152 109.523L276.921 87.5908H260.982Z",
                    fill: "#EBEBEB"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M262.55 89.3296L261.286 107.314L272.952 107.86L274.583 89.2246L262.55 89.3296Z",
                    fill: "#FAFAFA"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M265.111 91.8711L264.163 104.513H270.601L271.734 91.8711H265.111Z",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M298.468 199.017C298.468 199.08 235.572 199.127 158.008 199.127C80.4452 199.127 17.5317 199.08 17.5317 199.017C17.5317 198.954 80.4115 198.908 158.008 198.908C235.605 198.908 298.468 198.959 298.468 199.017Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M181.03 160.44L131.372 160.411C129.952 160.41 128.546 160.131 127.235 159.589C125.923 159.047 124.732 158.252 123.728 157.251C122.725 156.25 121.929 155.062 121.386 153.754C120.843 152.446 120.564 151.045 120.564 149.629L120.59 25.5363C120.589 24.1199 120.869 22.7174 121.412 21.4088C121.956 20.1002 122.753 18.9113 123.758 17.91C124.763 16.9087 125.956 16.1146 127.269 15.5732C128.582 15.0319 129.989 14.7538 131.41 14.7549L181.068 14.7843C183.932 14.7854 186.679 15.9196 188.706 17.9379C190.732 19.9562 191.872 22.6935 191.875 25.5489V149.646C191.877 151.066 191.597 152.471 191.053 153.783C190.508 155.094 189.709 156.286 188.701 157.288C187.694 158.291 186.497 159.086 185.181 159.627C183.865 160.168 182.454 160.444 181.03 160.44Z",
                    fill: "#455A64"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M181.013 19.0679H171.385C170.751 19.0822 170.149 19.3468 169.71 19.8035C169.272 20.2603 169.033 20.8718 169.047 21.5039V23.2427C169.061 23.8747 168.822 24.4863 168.383 24.943C167.945 25.3998 167.343 25.6644 166.709 25.6787H147.942C147.629 25.6716 147.319 25.6029 147.032 25.4767C146.745 25.3504 146.486 25.169 146.269 24.9428C146.052 24.7165 145.882 24.45 145.769 24.1582C145.656 23.8665 145.601 23.5554 145.608 23.2427V21.4829C145.622 20.8508 145.383 20.2393 144.945 19.7825C144.506 19.3258 143.904 19.0612 143.27 19.0469H131.456C129.444 19.0469 127.515 19.8434 126.093 21.2611C124.671 22.6789 123.872 24.6018 123.872 26.6069V147.714C123.872 149.719 124.671 151.642 126.093 153.06C127.515 154.477 129.444 155.274 131.456 155.274L181.009 155.303C183.02 155.303 184.949 154.507 186.371 153.089C187.794 151.671 188.593 149.748 188.593 147.743L188.618 26.6153C188.616 25.6218 188.418 24.6383 188.035 23.7212C187.652 22.8041 187.091 21.9712 186.385 21.2703C185.678 20.5693 184.84 20.014 183.919 19.6361C182.997 19.2582 182.009 19.0651 181.013 19.0679Z",
                    fill: "#EBEBEB"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M170.926 110.376C171.048 110.716 171.284 117.684 171.466 119.687C171.575 120.947 171.811 131.145 171.811 131.145V155.291H158.387L155.817 128.352L154.696 155.282L139.828 155.303V111.334L170.926 110.376Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M166.334 44.4742L164.969 63.7942C164.861 65.314 164.18 66.7367 163.062 67.7756C161.944 68.8145 160.472 69.3923 158.944 69.3928C158.117 69.3929 157.299 69.2237 156.54 68.8959C155.782 68.5681 155.099 68.0885 154.533 67.487C153.968 66.8854 153.533 66.1745 153.254 65.3985C152.976 64.6224 152.86 63.7977 152.914 62.9752C153.037 61.1356 153.146 59.6152 153.146 59.6152C153.146 59.6152 148.453 58.8886 148.398 54.214C148.364 51.5134 148.819 45.394 149.24 40.69C149.371 39.1596 150.074 37.734 151.209 36.6956C152.345 35.6572 153.83 35.0817 155.371 35.083H158.202C159.361 35.151 160.494 35.45 161.534 35.9623C162.574 36.4745 163.501 37.1897 164.259 38.0653C165.018 38.941 165.592 39.9593 165.948 41.0602C166.305 42.161 166.436 43.3219 166.334 44.4742Z",
                    fill: "#FFBE9D"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M153.146 59.6403C155.317 59.633 157.44 59.0047 159.264 57.8301C159.264 57.8301 157.751 61.2279 153.074 60.8079L153.146 59.6403Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M150.108 45.1672C150.193 45.2554 150.703 44.8816 151.423 44.8816C152.144 44.8816 152.687 45.2429 152.75 45.1547C152.813 45.0665 152.704 44.9614 152.472 44.7934C152.16 44.5781 151.79 44.4637 151.41 44.4659C151.035 44.4657 150.67 44.5833 150.365 44.8018C150.146 44.974 150.071 45.1294 150.108 45.1672Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M156.534 47.1622C156.531 47.3361 156.598 47.5039 156.718 47.6296C156.839 47.7553 157.004 47.8288 157.178 47.8342C157.264 47.8417 157.35 47.8319 157.431 47.8055C157.512 47.7791 157.588 47.7365 157.652 47.6805C157.717 47.6244 157.769 47.5559 157.806 47.4791C157.844 47.4024 157.865 47.3189 157.869 47.2336C157.872 47.0598 157.805 46.892 157.685 46.7663C157.564 46.6406 157.399 46.5671 157.225 46.5616C157.14 46.5548 157.054 46.565 156.973 46.5916C156.892 46.6183 156.817 46.6608 156.752 46.7168C156.688 46.7728 156.635 46.841 156.598 46.9175C156.56 46.994 156.539 47.0772 156.534 47.1622Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M150.1 47.1616C150.097 47.3355 150.164 47.5033 150.284 47.629C150.405 47.7546 150.57 47.8281 150.744 47.8336C150.83 47.8411 150.915 47.8313 150.997 47.8049C151.078 47.7784 151.153 47.7359 151.218 47.6798C151.282 47.6238 151.335 47.5553 151.372 47.4785C151.41 47.4017 151.431 47.3182 151.435 47.233C151.438 47.0591 151.371 46.8913 151.251 46.7657C151.13 46.64 150.965 46.5665 150.791 46.561C150.705 46.5536 150.619 46.5633 150.538 46.5898C150.457 46.6162 150.382 46.6587 150.317 46.7148C150.252 46.7709 150.2 46.8393 150.163 46.9161C150.125 46.9929 150.104 47.0764 150.1 47.1616Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M157.068 45.2639C157.153 45.3521 157.663 44.9783 158.383 44.9783C159.103 44.9783 159.647 45.3395 159.71 45.2513C159.773 45.1631 159.664 45.0581 159.432 44.8901C159.12 44.6748 158.75 44.5604 158.37 44.5625C157.995 44.5624 157.63 44.68 157.325 44.8985C157.106 45.0707 157.031 45.2261 157.068 45.2639Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M154.507 50.8536C154.127 50.7341 153.733 50.6635 153.336 50.6436C153.154 50.6436 152.978 50.589 152.948 50.463C152.933 50.2729 152.976 50.0827 153.07 49.917L153.614 48.5226C154.372 46.5318 154.916 44.898 154.836 44.8686C154.756 44.8392 154.077 46.4268 153.323 48.4134C153.142 48.9048 152.965 49.371 152.801 49.8204C152.686 50.0415 152.652 50.2952 152.704 50.5386C152.73 50.6037 152.771 50.6619 152.824 50.7085C152.876 50.7552 152.939 50.789 153.007 50.8074C153.109 50.835 153.213 50.8505 153.319 50.8536C153.713 50.9042 154.113 50.9042 154.507 50.8536Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M156.626 51.3497C156.512 51.3497 156.508 52.1225 155.838 52.6769C155.168 53.2313 154.338 53.1473 154.33 53.2565C154.321 53.3657 154.515 53.4077 154.869 53.4161C155.327 53.4279 155.774 53.2793 156.133 52.9961C156.472 52.7169 156.691 52.3185 156.744 51.8831C156.769 51.5387 156.681 51.3455 156.626 51.3497Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M157.115 42.6593C157.186 42.8567 157.907 42.7643 158.754 42.8651C159.601 42.9659 160.283 43.1969 160.393 43.0205C160.443 42.9365 160.325 42.7517 160.047 42.5627C159.68 42.3306 159.264 42.1854 158.832 42.1381C158.4 42.0908 157.962 42.1426 157.553 42.2897C157.241 42.4199 157.085 42.5669 157.115 42.6593Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M149.995 43C150.121 43.1638 150.618 43 151.216 43C151.815 43 152.316 43.1134 152.434 42.9412C152.485 42.8572 152.405 42.6934 152.185 42.5212C151.889 42.3333 151.542 42.2409 151.191 42.2566C150.84 42.2622 150.5 42.3767 150.218 42.5842C149.995 42.7522 149.944 42.9202 149.995 43Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M164.741 47.9857C164.821 47.9479 167.964 47.0323 167.863 50.2285C167.762 53.4247 164.56 52.6645 164.56 52.5721C164.56 52.4797 164.741 47.9857 164.741 47.9857Z",
                    fill: "#FFBE9D"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M165.584 51.3911C165.584 51.3911 165.639 51.4331 165.731 51.4793C165.864 51.5412 166.015 51.5488 166.153 51.5003C166.364 51.3761 166.538 51.1982 166.657 50.9849C166.776 50.7716 166.836 50.5306 166.831 50.2865C166.846 50.0129 166.802 49.7392 166.701 49.4843C166.669 49.3857 166.615 49.296 166.541 49.2229C166.468 49.1498 166.378 49.0954 166.279 49.0643C166.216 49.0454 166.148 49.0494 166.087 49.0755C166.026 49.1016 165.976 49.1482 165.946 49.2071C165.9 49.2953 165.917 49.3583 165.9 49.3625C165.883 49.3667 165.833 49.3079 165.862 49.1777C165.884 49.0991 165.932 49.0299 165.997 48.9803C166.087 48.9166 166.199 48.8909 166.309 48.9089C166.439 48.9389 166.559 49.0018 166.658 49.0915C166.757 49.1812 166.831 49.2948 166.873 49.4213C167.002 49.7027 167.06 50.0113 167.042 50.3201C167 50.9627 166.65 51.5549 166.199 51.6725C166.112 51.6957 166.021 51.6986 165.932 51.6811C165.844 51.6636 165.761 51.6262 165.689 51.5717C165.584 51.4709 165.584 51.3995 165.584 51.3911Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M166.54 47.8807C166.235 47.8599 165.93 47.9224 165.657 48.0615C165.385 48.2006 165.156 48.4111 164.994 48.6703C164.788 49.1239 164.741 49.6405 164.535 50.0983C164.328 50.5561 163.857 50.9677 163.364 50.8543C163.198 50.8022 163.048 50.7071 162.932 50.5787C162.815 50.4502 162.734 50.2931 162.698 50.1235C162.63 49.7837 162.63 49.4342 162.698 49.0945C162.883 47.5993 163.199 46.1209 163.258 44.6173C163.382 43.1071 163.054 41.5942 162.314 40.2703C161.522 38.9893 160.069 38.0485 158.565 38.1703C157.566 38.2501 156.652 38.7667 155.662 38.9053C155.07 38.9815 154.468 38.9217 153.902 38.7302C153.337 38.5387 152.823 38.2207 152.4 37.8007C152.291 37.6957 151.79 37.3807 151.79 37.3807C151.805 37.0264 151.922 36.684 152.127 36.3937C154.094 34.5835 157.633 34.0795 160.225 34.7137C162.816 35.3479 165.251 37.1875 166.368 39.6109C167.484 42.0343 167.156 45.4069 166.54 47.8597",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M148.731 39.8584C149.152 40.8328 150.222 41.3956 151.259 41.5048C152.322 41.5495 153.384 41.3942 154.389 41.047C155.968 40.6535 157.583 40.4171 159.209 40.3414C159.369 40.3414 159.559 40.3414 159.63 40.207C159.702 40.0726 159.563 39.8164 159.399 39.6862C158 38.5942 154.629 37.9264 152.864 37.8508C151.098 37.7752 149.228 38.5354 148.267 40.0264",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M149.177 39.98C150.139 39.0912 151.365 38.5396 152.67 38.4092C156.728 38.0648 163.376 39.308 166.869 46.2716C166.869 46.2716 167.602 43.991 167.602 42.5672C167.602 41.618 167.029 35.9564 161.185 34.1672C161.185 34.1756 152.379 30.824 149.177 39.98Z",
                    fill: "#455A64"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    opacity: "0.2",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M149.177 39.9803C150.204 38.9098 151.607 38.2788 153.091 38.2205C156.719 38.0609 163.578 39.7157 166.869 46.2803C166.869 46.2803 167.602 43.9997 167.602 42.5759C167.602 41.6267 167.029 35.9651 161.185 34.1759C161.185 34.1759 152.379 30.8243 149.177 39.9803Z",
                        fill: "black"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M166.325 45.2759C164.573 42.3359 161.952 40.3199 159.121 38.5559C156.289 36.7919 151.617 35.0531 148.393 34.2005C147.444 33.8892 146.438 33.7833 145.444 33.8897C144.458 34.0619 143.493 34.7297 143.245 35.6831C142.941 36.8927 145.099 38.7617 146.11 39.4967C147.103 40.1555 148.132 40.7612 149.19 41.3111C149.19 41.3111 149.16 39.0557 152.771 38.6021C157.675 37.9847 166.473 45.4019 166.325 45.2759Z",
                    fill: "#455A64"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M159.774 36.5027C159.736 36.5741 158.396 35.6627 156.491 35.2133C154.587 34.7639 152.982 34.9403 152.978 34.8605C153.314 34.7548 153.666 34.7066 154.018 34.7177C155.728 34.663 157.42 35.0724 158.914 35.9021C159.231 36.055 159.521 36.2578 159.774 36.5027Z",
                    fill: "white"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M148.28 65.3945H144.614C143.43 65.8145 133.908 73.8869 133.908 73.8869L139.289 82.3205L146.27 78.2549L148.28 65.3945Z",
                    fill: "#455A64"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M144.614 65.3944L152.716 62.3284C152.716 62.3284 153.9 64.8064 157.511 64.273C161.122 63.7396 165.378 61.207 165.378 61.207C165.378 61.207 171.588 64.7476 173.421 66.2218C175.254 67.696 171.942 98.5912 171.942 98.5912L171.099 107.852C171.099 107.852 171.748 108.323 171.748 109.914C171.748 111.506 171.807 112.569 171.807 112.569C160.612 115.929 150.033 118.31 139.811 115.051C139.811 115.051 139.221 109.679 139.811 108.205C140.401 106.731 139.811 104.005 139.811 104.005L141.581 90.1786L141.758 77.44L144.614 65.3944Z",
                    fill: "#455A64"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M173.42 66.2217C173.42 66.2217 176.012 66.9483 176.791 70.7787C177.571 74.6091 177.423 89.2335 177.423 89.2335L162.942 86.1003C162.942 86.1003 164.905 79.9641 164.905 79.5441C164.905 79.1241 168.887 69.2373 169.026 69.0441C169.165 68.8509 173.42 66.2217 173.42 66.2217Z",
                    fill: "#455A64"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M141.53 71.4004C141.597 71.4004 141.69 73.9582 141.736 77.1124C141.783 80.2666 141.766 82.8244 141.698 82.8244C141.631 82.8244 141.538 80.2708 141.492 77.1124C141.446 73.954 141.462 71.4004 141.53 71.4004Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M166.713 72.7822C166.718 72.9533 166.7 73.1244 166.658 73.2904C166.612 73.6138 166.528 74.08 166.414 74.6554C166.186 75.8062 165.833 77.3854 165.377 79.1158C164.922 80.8462 164.446 82.396 164.076 83.509C163.89 84.0634 163.734 84.5128 163.616 84.8194C163.569 84.9841 163.501 85.1422 163.414 85.2898C163.43 85.119 163.468 84.951 163.528 84.79C163.633 84.4246 163.76 83.9794 163.911 83.4586C164.24 82.333 164.686 80.779 165.142 79.0528C165.597 77.3266 165.984 75.7558 166.245 74.6176L166.566 73.2694C166.594 73.1015 166.643 72.9377 166.713 72.7822Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M165.356 72.4717C165.425 73.451 165.414 74.4342 165.323 75.4117C165.31 76.3976 165.217 77.3809 165.045 78.3517C164.975 77.3724 164.987 76.3891 165.078 75.4117C165.088 74.4256 165.181 73.4422 165.356 72.4717Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M161.75 77.3015C159.683 77.4639 157.606 77.4639 155.539 77.3015C157.606 77.1391 159.683 77.1391 161.75 77.3015Z",
                    fill: "white"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M143.873 99.4903L161.467 97.3903L164.244 86.2812L174.091 88.4107C174.091 88.4107 170.198 103.825 166.182 105.316C162.167 106.807 142.398 104.056 142.398 104.056L143.873 99.4903Z",
                    fill: "#FFBE9D"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M164.392 101.867C164.311 101.892 164.021 100.8 163.245 99.6743C162.47 98.5487 161.56 97.8683 161.628 97.8053C161.695 97.7423 162.672 98.3429 163.469 99.5273C164.265 100.712 164.455 101.862 164.392 101.867Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M117.21 83.8486V100.842H145.827V83.8486H117.21Z",
                    fill: theme.palette.primary.main
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M147.58 76.0156H115.959V83.8486H147.58V76.0156Z",
                    fill: theme.palette.primary.main
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    opacity: "0.4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M135.362 83.8486H129.455V100.838H135.362V83.8486Z",
                        fill: "white"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M147.58 83.8488C147.58 83.9076 140.502 83.9538 131.772 83.9538C123.042 83.9538 115.959 83.9076 115.959 83.8488C115.959 83.79 123.037 83.748 131.772 83.748C140.506 83.748 147.58 83.7942 147.58 83.8488Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    opacity: "0.4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M133.504 83.7352L126.762 83.7646V76.0156H133.504V83.7352Z",
                        fill: "white"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M130.419 73.101C129.603 73.1027 128.801 72.8851 128.098 72.471C127.377 72.0888 126.711 71.631 125.991 71.2572C124.193 70.3799 122.127 70.2191 120.214 70.8078C120.122 70.8282 120.038 70.8767 119.974 70.9464C119.925 71.0421 119.908 71.1514 119.928 71.2572C120.147 73.6512 120.363 76.0438 120.577 78.435C120.576 78.6844 120.652 78.928 120.796 79.1322C120.934 79.2453 121.096 79.3253 121.27 79.3661C121.444 79.4069 121.625 79.4073 121.799 79.3674C122.945 79.3088 124.082 79.1285 125.19 78.8298C126.302 78.5328 127.318 77.954 128.14 77.1498C128.51 76.7634 128.822 76.3098 129.201 75.9486C129.568 75.5508 130.066 75.2987 130.604 75.2388L130.419 73.101Z",
                    fill: theme.palette.primary.main
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M143.805 77.8768C143.839 74.8822 143.868 71.8666 143.409 68.9056C141.479 68.515 139.474 69.124 137.721 70.0228C135.968 70.9216 134.372 72.0934 132.606 72.9628L132.248 75.0628C132.856 74.9747 133.476 75.0821 134.018 75.3694C134.554 75.6581 135.066 75.9911 135.547 76.3648C136.656 77.2146 137.89 77.8902 139.204 78.3682C140.528 78.8453 141.968 78.8938 143.321 78.5068C143.491 78.4717 143.641 78.3743 143.742 78.2338C143.794 78.1222 143.815 77.9992 143.805 77.8768Z",
                    fill: theme.palette.primary.main
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    opacity: "0.3",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M130.419 73.101C129.603 73.1027 128.801 72.8851 128.098 72.471C127.377 72.0888 126.711 71.631 125.991 71.2572C124.193 70.3799 122.127 70.2191 120.214 70.8078C120.122 70.8282 120.038 70.8767 119.974 70.9464C119.925 71.0421 119.908 71.1514 119.928 71.2572C120.147 73.6512 120.363 76.0438 120.577 78.435C120.576 78.6844 120.652 78.928 120.796 79.1322C120.934 79.2453 121.096 79.3253 121.27 79.3661C121.444 79.4069 121.625 79.4073 121.799 79.3674C122.945 79.3088 124.082 79.1285 125.19 78.8298C126.302 78.5328 127.318 77.954 128.14 77.1498C128.51 76.7634 128.822 76.3098 129.201 75.9486C129.568 75.5508 130.066 75.2987 130.604 75.2388L130.419 73.101Z",
                        fill: "black"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M130.42 73.1013C130.42 73.1013 130.42 73.1433 130.42 73.2357L130.462 73.6557C130.495 74.0211 130.546 74.5545 130.609 75.2391V75.2685H130.613C130.237 75.305 129.879 75.4511 129.585 75.6885C129.233 75.9728 128.916 76.2986 128.642 76.6587C128.321 77.0764 127.947 77.4506 127.529 77.7717C127.058 78.117 126.544 78.3994 126 78.6117C124.755 79.071 123.449 79.34 122.124 79.4097C121.764 79.4709 121.395 79.4566 121.041 79.3677C120.943 79.3335 120.855 79.278 120.782 79.2053C120.709 79.1326 120.654 79.0446 120.619 78.9477C120.556 78.7708 120.52 78.5852 120.514 78.3975C120.447 77.6639 120.379 76.9163 120.312 76.1547C120.211 75.0333 120.11 73.9371 120.017 72.8829C119.971 72.3537 119.924 71.8329 119.878 71.3247C119.844 71.184 119.859 71.0359 119.92 70.9047C120.011 70.8006 120.137 70.7321 120.274 70.7115C120.518 70.6401 120.758 70.5813 121.003 70.5351C121.918 70.3568 122.858 70.3412 123.779 70.4889C124.582 70.6182 125.36 70.8719 126.084 71.2407C126.746 71.5809 127.297 71.9589 127.807 72.2487C128.235 72.5075 128.69 72.7188 129.164 72.8787C129.464 72.9795 129.775 73.043 130.091 73.0677C130.306 73.0677 130.428 73.0677 130.424 73.0677H130.34C130.257 73.072 130.174 73.072 130.091 73.0677C129.772 73.054 129.456 72.999 129.151 72.9039C128.672 72.7469 128.21 72.54 127.774 72.2865C127.26 72.0009 126.703 71.6271 126.046 71.2911C124.493 70.5186 122.726 70.2822 121.024 70.6191C120.782 70.6655 120.543 70.7244 120.308 70.7955C120.19 70.8291 120.063 70.8627 120.013 70.9467C119.971 71.0537 119.962 71.1707 119.987 71.2827C120.034 71.7909 120.084 72.3075 120.131 72.8367C120.226 73.8951 120.324 74.9857 120.426 76.1085C120.497 76.8687 120.565 77.6205 120.628 78.3513C120.636 78.5286 120.668 78.7038 120.725 78.8721C120.755 78.9501 120.801 79.0209 120.86 79.0796C120.92 79.1383 120.992 79.1835 121.07 79.2123C121.408 79.2931 121.76 79.3046 122.102 79.2459C123.417 79.1815 124.714 78.9196 125.949 78.4689C126.488 78.2561 126.997 77.9737 127.462 77.6289C127.875 77.3153 128.246 76.9496 128.566 76.5411C128.847 76.179 129.171 75.8518 129.531 75.5667C129.837 75.3236 130.21 75.1773 130.601 75.1467L130.571 75.1761C130.521 74.4957 130.483 73.9707 130.457 73.6053C130.457 73.4289 130.436 73.2945 130.428 73.1853C130.42 73.0761 130.42 73.1013 130.42 73.1013Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    opacity: "0.3",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M143.805 77.8768C143.839 74.8822 143.868 71.8666 143.409 68.9056C141.479 68.515 139.474 69.124 137.721 70.0228C135.968 70.9216 134.372 72.0934 132.606 72.9628L132.248 75.0628C132.856 74.9747 133.476 75.0821 134.018 75.3694C134.554 75.6581 135.066 75.9911 135.547 76.3648C136.656 77.2146 137.89 77.8902 139.204 78.3682C140.528 78.8453 141.968 78.8938 143.321 78.5068C143.491 78.4717 143.641 78.3743 143.742 78.2338C143.794 78.1222 143.815 77.9992 143.805 77.8768Z",
                        fill: "black"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M143.805 77.8768C143.818 77.9589 143.818 78.0425 143.805 78.1246C143.783 78.2281 143.723 78.3196 143.637 78.3808C143.519 78.4562 143.389 78.5115 143.253 78.5446C142.387 78.8023 141.475 78.864 140.582 78.7252C139.229 78.4996 137.938 77.9961 136.79 77.2468C136.457 77.041 136.12 76.8268 135.783 76.5832C135.446 76.3396 135.109 76.0918 134.751 75.8524C134.394 75.6005 134.006 75.3958 133.596 75.2434C133.173 75.0847 132.715 75.0398 132.269 75.1132H132.189V75.0334C132.303 74.3698 132.425 73.6642 132.547 72.9334V72.904H132.572C133.415 72.484 134.258 71.9926 135.1 71.4718C136.411 70.5987 137.809 69.864 139.272 69.2794C140.595 68.7636 142.034 68.6184 143.434 68.8594H143.468V68.8804C143.763 71.036 143.894 73.2108 143.86 75.3862C143.86 76.1758 143.86 76.7932 143.839 77.2132C143.839 77.419 143.839 77.5828 143.839 77.6962V77.818C143.839 77.8474 143.839 77.86 143.839 77.86V77.7004C143.839 77.587 143.839 77.4232 143.839 77.2174C143.839 76.7974 143.839 76.1758 143.839 75.3904C143.854 73.2201 143.713 71.0516 143.418 68.9014L143.455 68.9434C142.075 68.7075 140.655 68.8527 139.352 69.3634C137.898 69.9471 136.509 70.679 135.206 71.5474C134.363 72.0682 133.52 72.5722 132.678 72.9838L132.707 72.9418C132.585 73.6642 132.463 74.3698 132.349 75.0418L132.282 74.9746C132.748 74.9013 133.225 74.949 133.668 75.1132C134.085 75.2701 134.48 75.4804 134.843 75.739C135.206 75.9826 135.539 76.2388 135.876 76.474C136.213 76.7092 136.541 76.936 136.874 77.1418C138.009 77.8902 139.287 78.3964 140.628 78.6286C141.512 78.7718 142.416 78.723 143.278 78.4858C143.413 78.4549 143.541 78.4024 143.658 78.3304C143.741 78.2759 143.799 78.1917 143.822 78.0952C143.822 78.022 143.816 77.949 143.805 77.8768Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M130.815 75.7051C130.815 75.7051 130.272 75.7051 129.577 77.1037C128.882 78.5023 126.775 85.2349 126.775 85.2349L133.053 88.1749L132.299 76.1923L130.815 75.7051Z",
                    fill: theme.palette.primary.main
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M132.808 76.0458L135.336 84.1896L139.549 80.4306C139.549 80.4306 135.901 75.8358 133.124 75.3906L132.808 76.0458Z",
                    fill: theme.palette.primary.main
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    opacity: "0.3",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M130.815 75.7051C130.815 75.7051 130.272 75.7051 129.577 77.1037C128.882 78.5023 126.775 85.2349 126.775 85.2349L133.053 88.1749L132.299 76.1923L130.815 75.7051Z",
                        fill: "black"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    opacity: "0.3",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M132.808 76.0458L135.336 84.1896L139.549 80.4306C139.549 80.4306 135.901 75.8358 133.124 75.3906L132.808 76.0458Z",
                        fill: "black"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M130.815 75.7054L130.912 75.7306L131.199 75.8188L132.315 76.1674C132.467 78.343 132.762 82.8286 133.095 88.1626V88.2592L133.002 88.2172L131.254 87.3772L126.724 85.2478L126.682 85.2268V85.1806C127.613 82.2406 128.443 79.7584 129.109 78.0154C129.334 77.3191 129.681 76.6679 130.133 76.0918C130.258 75.9412 130.411 75.8158 130.584 75.7222C130.629 75.6999 130.677 75.683 130.727 75.6718C130.744 75.668 130.761 75.668 130.777 75.6718H130.731C130.683 75.6868 130.636 75.7065 130.592 75.7306C130.43 75.8304 130.287 75.9584 130.171 76.1086C129.732 76.6881 129.397 77.3389 129.181 78.0322C128.561 79.8214 127.748 82.3204 126.821 85.2604L126.792 85.1932L131.325 87.3184L133.074 88.1584L132.994 88.2172C132.661 82.879 132.395 78.3934 132.277 76.2178V76.2388L131.174 75.8692L130.891 75.7684L130.815 75.7054Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M132.808 76.0452C132.808 76.0452 132.808 76.0452 132.808 76.0032C132.808 75.9612 132.846 75.9318 132.867 75.8814L133.107 75.3984C134.16 75.6376 135.139 76.1276 135.96 76.8264C137.294 77.8841 138.506 79.0856 139.575 80.409L139.608 80.451L139.566 80.4846L137.632 82.2066L135.34 84.2436L135.273 84.3024L135.248 84.2184C134.527 81.8664 133.904 79.8252 133.453 78.3678L132.943 76.6668L132.812 76.2132C132.794 76.163 132.781 76.1109 132.774 76.0578L132.833 76.2174C132.867 76.3266 132.918 76.4778 132.981 76.671C133.111 77.091 133.297 77.6496 133.524 78.351C133.984 79.8042 134.62 81.8328 135.357 84.1722L135.264 84.147L137.552 82.1058L139.49 80.388V80.4678C138.432 79.1492 137.234 77.9481 135.918 76.8852C135.11 76.1864 134.149 75.6871 133.111 75.4278H133.133L132.876 75.8982L132.808 76.02V76.0452Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M130.234 74.6638C129.963 74.6974 129.69 74.7142 129.416 74.7142C128.911 74.7352 128.216 74.7898 127.453 74.899C126.802 74.9927 126.157 75.1189 125.519 75.277C125.03 75.3988 124.731 75.487 124.723 75.4702C124.788 75.4324 124.857 75.4028 124.929 75.382C125.06 75.3316 125.254 75.2686 125.498 75.1972C126.134 75.0143 126.781 74.874 127.436 74.7772C128.091 74.6841 128.751 74.6336 129.412 74.626C129.665 74.626 129.871 74.626 130.015 74.626C130.089 74.6273 130.163 74.64 130.234 74.6638Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M130.128 73.9203C129.875 73.8974 129.624 73.861 129.374 73.8111C128.772 73.7136 128.164 73.6519 127.554 73.6263C126.842 73.5969 126.193 73.6263 125.726 73.6263C125.472 73.6437 125.217 73.6437 124.963 73.6263C125.028 73.6034 125.096 73.5893 125.165 73.5843L125.721 73.5255C126.334 73.4729 126.948 73.4575 127.563 73.4793C128.175 73.5053 128.785 73.5783 129.387 73.6977C129.619 73.7439 129.808 73.7901 129.93 73.8237C130.001 73.8466 130.067 73.8791 130.128 73.9203Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M139.883 73.135C139.883 73.156 139.525 73.0888 138.947 73.0342C138.195 72.9587 137.437 72.9587 136.685 73.0342C135.936 73.1184 135.198 73.2846 134.485 73.5298C133.938 73.723 133.609 73.8742 133.601 73.8574C133.67 73.8065 133.745 73.7641 133.824 73.7314C134.029 73.6271 134.24 73.5346 134.456 73.4542C135.169 73.1817 135.913 73.001 136.672 72.9166C137.432 72.8351 138.198 72.8422 138.956 72.9376C139.242 72.9754 139.478 73.0174 139.638 73.0552C139.723 73.0711 139.805 73.0979 139.883 73.135Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M139.149 75.0581C139.078 75.0805 139.004 75.0918 138.93 75.0917C138.791 75.0917 138.589 75.1253 138.336 75.1379C137.681 75.1691 137.025 75.1508 136.373 75.0833C135.718 75.0153 135.07 74.8973 134.434 74.7305C134.19 74.6675 134.013 74.6087 133.866 74.5625C133.793 74.5438 133.724 74.5155 133.659 74.4785C133.927 74.5225 134.193 74.58 134.455 74.6507C135.728 74.9413 137.03 75.0823 138.336 75.0707C138.607 75.0516 138.878 75.0474 139.149 75.0581Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M133.714 74.7897C133.703 74.376 133.628 73.9665 133.491 73.5759C133.381 73.2315 133.377 72.9123 132.973 72.6687C132.785 72.5735 132.578 72.5239 132.368 72.5239C132.158 72.5239 131.951 72.5735 131.763 72.6687C131.523 72.3453 131.013 72.4125 130.659 72.5973C130.486 72.6999 130.339 72.8414 130.23 73.0105C130.121 73.1797 130.053 73.3718 130.032 73.5717C129.993 73.9714 130.051 74.3746 130.2 74.7477C130.383 75.3088 130.729 75.803 131.195 76.1673C131.408 76.3202 131.656 76.4169 131.917 76.4485C132.178 76.4801 132.442 76.4455 132.686 76.3479C132.995 76.2222 133.259 76.006 133.443 75.7279C133.626 75.4497 133.721 75.1226 133.714 74.7897Z",
                    fill: theme.palette.primary.main
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    opacity: "0.3",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M133.714 74.7897C133.703 74.376 133.628 73.9665 133.491 73.5759C133.381 73.2315 133.377 72.9123 132.973 72.6687C132.785 72.5735 132.578 72.5239 132.368 72.5239C132.158 72.5239 131.951 72.5735 131.763 72.6687C131.523 72.3453 131.013 72.4125 130.659 72.5973C130.486 72.6999 130.339 72.8414 130.23 73.0105C130.121 73.1797 130.053 73.3718 130.032 73.5717C129.993 73.9714 130.051 74.3746 130.2 74.7477C130.383 75.3088 130.729 75.803 131.195 76.1673C131.408 76.3202 131.656 76.4169 131.917 76.4485C132.178 76.4801 132.442 76.4455 132.686 76.3479C132.995 76.2222 133.259 76.006 133.443 75.7279C133.626 75.4497 133.721 75.1226 133.714 74.7897Z",
                        fill: "black"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M133.714 74.7899C133.718 74.8318 133.718 74.874 133.714 74.9159C133.707 75.0389 133.69 75.1611 133.664 75.2813C133.61 75.503 133.51 75.7109 133.37 75.8912C133.23 76.0714 133.053 76.22 132.851 76.3271C132.568 76.4769 132.247 76.5411 131.928 76.5119C131.561 76.4715 131.218 76.3121 130.95 76.0583C130.661 75.7848 130.429 75.4564 130.268 75.0923C130.079 74.7063 129.97 74.2864 129.948 73.8575C129.932 73.6138 129.98 73.3701 130.085 73.1497C130.19 72.9292 130.351 72.7392 130.55 72.5975C130.746 72.4767 130.969 72.406 131.199 72.3917C131.311 72.3811 131.425 72.3982 131.529 72.4414C131.633 72.4846 131.725 72.5526 131.797 72.6395H131.721C131.956 72.5102 132.226 72.4587 132.492 72.4925C132.722 72.4954 132.943 72.5785 133.117 72.7275C133.291 72.8765 133.407 73.0817 133.445 73.3073C133.487 73.4921 133.542 73.6517 133.584 73.8071C133.649 74.0433 133.692 74.2852 133.71 74.5295C133.71 74.6177 133.71 74.6807 133.71 74.7269C133.71 74.7731 133.71 74.7941 133.71 74.7941C133.71 74.7941 133.71 74.7017 133.681 74.5337C133.65 74.293 133.598 74.0555 133.525 73.8239C133.483 73.6769 133.424 73.5089 133.373 73.3283C133.335 73.1343 133.238 72.9567 133.095 72.8201C132.924 72.6779 132.711 72.5966 132.488 72.5891C132.246 72.5612 132.002 72.6096 131.789 72.7277L131.743 72.7571L131.713 72.7151C131.652 72.6431 131.573 72.5874 131.485 72.5529C131.397 72.5185 131.302 72.5064 131.207 72.5177C130.998 72.5284 130.794 72.5935 130.618 72.7067C130.436 72.8372 130.29 73.0117 130.194 73.2137C130.098 73.4157 130.055 73.6387 130.07 73.8617C130.094 74.2728 130.198 74.6752 130.377 75.0461C130.529 75.3992 130.753 75.7169 131.035 75.9785C131.285 76.2144 131.606 76.3619 131.949 76.3985C132.25 76.4308 132.553 76.3738 132.821 76.2347C133.017 76.1361 133.189 75.9977 133.328 75.8284C133.467 75.6591 133.568 75.4627 133.626 75.2519C133.665 75.0998 133.694 74.9455 133.714 74.7899Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M130.866 75.903C130.866 75.903 131.005 75.7602 131.203 75.5082C131.463 75.1857 131.655 74.8144 131.767 74.4162C131.878 74.0186 131.905 73.6026 131.847 73.194C131.81 72.8748 131.742 72.6858 131.763 72.6816C131.85 72.8347 131.907 73.0029 131.932 73.1772C132.01 73.5957 131.992 74.0263 131.881 74.4372C131.765 74.8507 131.555 75.2317 131.266 75.5502C131.158 75.6938 131.022 75.8139 130.866 75.903Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M133.584 73.8701C133.57 74.0332 133.527 74.1925 133.457 74.3405C133.313 74.7072 133.11 75.0477 132.855 75.3485C132.596 75.6465 132.286 75.8967 131.94 76.0877C131.801 76.1749 131.647 76.2361 131.485 76.2683C131.958 76.0047 132.384 75.6672 132.749 75.2687C133.091 74.8431 133.372 74.3724 133.584 73.8701Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M143.017 99.2208C143.017 99.2208 142.082 98.0112 141.303 97.8306C140.975 97.7597 140.639 97.7343 140.304 97.755C140.036 97.7754 139.786 97.8982 139.606 98.0977C139.426 98.2971 139.331 98.558 139.339 98.826L139.394 99.8088L136.487 100.754L134.536 100.397C134.536 100.397 131.165 99.813 130.799 100.544C130.799 100.544 128.692 99.7626 128.304 100.174C128.304 100.174 127.196 100.435 127.335 100.943C127.474 101.451 131.271 103.123 131.271 103.123L136.588 104.097C136.588 104.097 139.883 103.824 140.734 103.803C141.332 103.821 141.926 103.901 142.508 104.042H142.398L145.962 104.504C145.877 103.527 145.96 102.543 146.207 101.594C146.628 99.6954 146.388 99.2712 146.388 99.2712L143.017 99.2208Z",
                    fill: "#FFBE9D"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M141.597 101.27C141.597 101.27 141.45 101.27 141.273 101.115C141.096 100.96 140.953 100.632 140.675 100.409C140.5 100.299 140.305 100.224 140.102 100.187C139.833 100.133 139.587 100.002 139.394 99.8087C139.189 99.5757 139.073 99.2784 139.065 98.9687C139.055 98.8019 139.082 98.6348 139.144 98.4795C139.206 98.3242 139.301 98.1843 139.423 98.0699C139.662 97.8742 139.947 97.741 140.251 97.6823C140.554 97.6237 140.868 97.6414 141.163 97.7339C141.628 97.8837 142.05 98.143 142.394 98.4899C142.619 98.7149 142.828 98.9563 143.017 99.2123C143.148 99.3971 143.215 99.5021 143.198 99.5147C143.182 99.5273 142.853 99.1493 142.271 98.6243C141.936 98.3194 141.535 98.094 141.1 97.9649C140.845 97.8902 140.575 97.8779 140.314 97.929C140.053 97.9802 139.808 98.0934 139.6 98.2589C139.425 98.445 139.325 98.6896 139.32 98.9449C139.316 99.2003 139.406 99.4483 139.575 99.6407C139.874 100.002 140.439 99.9557 140.788 100.254C140.997 100.498 141.184 100.76 141.349 101.035C141.479 101.22 141.606 101.249 141.597 101.27Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M138.833 100.166C138.833 100.208 138.576 100.166 138.201 100.304C137.712 100.54 137.203 100.733 136.68 100.88C136.128 100.903 135.577 100.817 135.058 100.628C134.666 100.519 134.414 100.519 134.414 100.481C134.414 100.443 134.671 100.384 135.092 100.447C135.598 100.579 136.12 100.64 136.642 100.628C137.22 100.527 137.725 100.208 138.151 100.132C138.576 100.057 138.846 100.136 138.833 100.166Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M138.779 102.3C138.779 102.3 138.673 102.384 138.454 102.476C138.142 102.605 137.817 102.701 137.485 102.762C136.387 102.936 135.267 102.914 134.178 102.694C133.541 102.564 132.947 102.417 132.404 102.274C131.908 102.199 131.425 102.058 130.967 101.854C130.777 101.756 130.628 101.594 130.546 101.397C130.489 101.251 130.479 101.091 130.516 100.939C130.592 100.687 130.761 100.641 130.756 100.653C130.752 100.666 130.647 100.741 130.613 100.96C130.597 101.111 130.629 101.263 130.704 101.395C130.78 101.527 130.896 101.632 131.034 101.695C131.485 101.87 131.954 101.992 132.433 102.06L134.199 102.438C135.263 102.652 136.355 102.7 137.435 102.581C138.281 102.48 138.762 102.258 138.779 102.3Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M117.13 85.6048C116.94 85.5908 116.75 85.6418 116.592 85.7494C116.435 85.857 116.318 86.0148 116.263 86.197C116.18 86.5563 116.219 86.9327 116.372 87.268C116.546 87.7403 116.789 88.1846 117.093 88.5868C117.366 88.948 117.8 89.3092 118.251 89.1748C118.368 89.1354 118.475 89.0693 118.562 88.9818C118.649 88.8943 118.714 88.7878 118.753 88.6708C118.823 88.4439 118.838 88.2032 118.795 87.9694C118.706 87.1924 117.741 86.1508 117.13 85.6048Z",
                    fill: "#FFBE9D"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M116.633 87.4106C116.443 87.3963 116.254 87.4467 116.096 87.5535C115.938 87.6603 115.822 87.8172 115.765 87.9986C115.682 88.3592 115.72 88.7372 115.875 89.0738C116.051 89.5452 116.293 89.9893 116.595 90.3926C116.865 90.7496 117.299 91.115 117.754 90.9806C117.871 90.9411 117.977 90.875 118.064 90.7876C118.151 90.7001 118.217 90.5936 118.255 90.4766C118.326 90.2482 118.34 90.0061 118.297 89.771C118.192 88.994 117.227 87.9566 116.633 87.4106Z",
                    fill: "#FFBE9D"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M116.507 89.2708C116.316 89.2568 116.127 89.3078 115.969 89.4154C115.811 89.523 115.695 89.6808 115.639 89.863C115.555 90.2219 115.592 90.5982 115.744 90.934C115.922 91.4057 116.166 91.8498 116.469 92.2528C116.739 92.614 117.173 92.9752 117.628 92.8408C117.745 92.8014 117.851 92.7353 117.938 92.6478C118.025 92.5603 118.09 92.4539 118.129 92.3368C118.2 92.1084 118.214 91.8664 118.171 91.6312C118.066 90.8584 117.097 89.8168 116.507 89.2708Z",
                    fill: "#FFBE9D"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M239.874 41.6174C239.538 39.4402 238.391 37.4692 236.662 36.097C234.933 34.7247 232.749 34.052 230.545 34.2128L230.095 34.2464C225.22 34.889 223.042 39.3746 223.817 44.213L225.502 61.3911L225.586 64.9443L237.194 65.9943L236.946 58.4973C236.946 58.4973 241.58 57.4263 241.315 52.7307C241.188 50.4627 240.527 45.8174 239.874 41.6174Z",
                    fill: "#FFBE9D"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M236.996 58.4851C234.81 58.6406 232.625 58.1668 230.701 57.1201C230.701 57.1201 232.336 60.5053 237.021 59.7409L236.996 58.4851Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M237.779 45.8382C237.794 46.013 237.739 46.1865 237.628 46.3221C237.516 46.4577 237.356 46.5447 237.181 46.5648C237.096 46.5778 237.009 46.5737 236.926 46.5527C236.842 46.5318 236.764 46.4943 236.695 46.4427C236.626 46.391 236.569 46.3261 236.526 46.2519C236.482 46.1776 236.455 46.0955 236.444 46.0104C236.431 45.8358 236.485 45.6629 236.597 45.5276C236.708 45.3922 236.868 45.3049 237.042 45.2838C237.127 45.2708 237.214 45.2749 237.298 45.2959C237.381 45.3168 237.459 45.3543 237.528 45.4059C237.597 45.4576 237.655 45.5225 237.698 45.5967C237.741 45.671 237.769 45.7531 237.779 45.8382Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M239.031 43.9866C238.955 44.079 238.416 43.743 237.695 43.7976C236.975 43.8522 236.469 44.2512 236.385 44.1672C236.301 44.0832 236.414 43.9656 236.633 43.7808C236.928 43.5369 237.292 43.3902 237.674 43.3608C238.051 43.3316 238.427 43.4228 238.748 43.6212C238.98 43.7934 239.069 43.9446 239.031 43.9866Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M230.941 46.4857C230.957 46.6603 230.903 46.8338 230.791 46.969C230.679 47.1041 230.518 47.19 230.343 47.2081C230.258 47.2205 230.171 47.216 230.088 47.1948C230.005 47.1735 229.927 47.1361 229.858 47.0845C229.79 47.0329 229.732 46.9683 229.689 46.8943C229.645 46.8204 229.617 46.7386 229.606 46.6537C229.592 46.4793 229.646 46.3063 229.758 46.1714C229.87 46.0365 230.03 45.9504 230.204 45.9313C230.289 45.9182 230.376 45.9223 230.459 45.9433C230.543 45.9643 230.621 46.0017 230.69 46.0534C230.759 46.1051 230.816 46.17 230.86 46.2442C230.903 46.3184 230.931 46.4005 230.941 46.4857Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M231.932 44.637C231.856 44.7294 231.316 44.3934 230.596 44.4438C229.876 44.4942 229.37 44.8974 229.286 44.8176C229.201 44.7378 229.315 44.616 229.534 44.4312C229.831 44.1872 230.196 44.0406 230.579 44.0112C230.955 43.982 231.33 44.0732 231.649 44.2716C231.885 44.4438 231.97 44.595 231.932 44.637Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M234.948 49.7911C235.321 49.6459 235.71 49.5471 236.107 49.497C236.288 49.4634 236.461 49.413 236.486 49.287C236.487 49.0954 236.43 48.9079 236.322 48.7495L235.673 47.3887C234.767 45.4483 234.101 43.848 234.177 43.8102C234.253 43.7724 235.054 45.318 235.96 47.2584C236.174 47.7372 236.381 48.1951 236.583 48.6319C236.715 48.8451 236.767 49.098 236.731 49.3458C236.709 49.4132 236.673 49.4748 236.624 49.5258C236.575 49.5768 236.515 49.6159 236.448 49.6399C236.348 49.6749 236.243 49.6961 236.136 49.7028C235.746 49.7831 235.347 49.8127 234.948 49.7911Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M232.854 50.4463C232.972 50.4463 233.031 51.2107 233.743 51.7063C234.455 52.2019 235.285 52.0675 235.298 52.1767C235.298 52.2229 235.125 52.3405 234.771 52.3783C234.313 52.4165 233.855 52.2932 233.478 52.0297C233.116 51.7758 232.867 51.3919 232.783 50.9587C232.728 50.6437 232.804 50.4463 232.854 50.4463Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M231.915 41.7984C231.856 42 231.127 41.958 230.288 42.1218C229.45 42.2856 228.776 42.567 228.649 42.399C228.595 42.3192 228.7 42.126 228.961 41.916C229.312 41.653 229.721 41.476 230.153 41.3994C230.583 41.317 231.027 41.3371 231.447 41.4582C231.767 41.58 231.936 41.7018 231.915 41.7984Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M238.614 41.9198C238.496 42.092 237.986 41.9576 237.388 41.9954C236.789 42.0332 236.288 42.1844 236.162 42.0206C236.103 41.9408 236.162 41.7728 236.381 41.6006C236.664 41.3895 237.005 41.2707 237.358 41.2604C237.71 41.2409 238.059 41.332 238.357 41.5208C238.58 41.672 238.664 41.8358 238.614 41.9198Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M224.908 48.7196C224.892 48.5468 224.84 48.3793 224.756 48.2274C224.672 48.0755 224.557 47.9425 224.419 47.8368C224.281 47.7312 224.122 47.655 223.954 47.6133C223.785 47.5715 223.609 47.5649 223.437 47.594C222.565 47.741 221.626 48.308 221.815 50.114C222.152 53.3144 225.308 52.319 225.304 52.214C225.3 52.109 225.059 50.0636 224.908 48.7196Z",
                    fill: "#FFBE9D"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M224.478 51.0931C224.478 51.0931 224.428 51.1393 224.335 51.1939C224.207 51.2647 224.055 51.2828 223.914 51.2443C223.693 51.1353 223.505 50.9697 223.37 50.7645C223.234 50.5594 223.156 50.322 223.143 50.0767C223.107 49.8029 223.133 49.5245 223.219 49.2619C223.238 49.1585 223.282 49.0613 223.348 48.9787C223.413 48.896 223.497 48.8304 223.594 48.7873C223.656 48.7642 223.725 48.7637 223.788 48.786C223.852 48.8082 223.905 48.8518 223.939 48.9091C223.99 48.9931 223.977 49.0561 223.994 49.0603C224.011 49.0645 224.057 49.0015 224.019 48.8713C223.992 48.7941 223.94 48.7277 223.872 48.6823C223.824 48.654 223.771 48.6353 223.716 48.6274C223.661 48.6194 223.605 48.6224 223.551 48.6361C223.423 48.676 223.307 48.7478 223.214 48.8448C223.121 48.9418 223.055 49.0608 223.021 49.1905C222.913 49.4832 222.879 49.7973 222.919 50.1061C223.008 50.7487 223.404 51.3157 223.884 51.3997C223.973 51.417 224.064 51.4135 224.151 51.3895C224.238 51.3654 224.319 51.3215 224.386 51.2611C224.478 51.1729 224.491 51.1015 224.478 51.0931Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M222.333 45.4605C222.599 46.3803 222.502 47.9049 223.328 47.6949C224.958 47.2749 224.567 50.6349 225.35 50.2947C226.134 49.9545 226.808 49.0347 226.854 46.9725C226.918 44.3643 225.864 42.4869 226.897 39.5007C227.225 38.9057 227.701 38.4049 228.279 38.0466C228.858 37.6884 229.519 37.4847 230.2 37.4553C230.886 37.4414 231.565 37.6022 232.172 37.9226C232.779 38.2431 233.293 38.7125 233.667 39.2865C233.815 38.3793 234.257 37.0059 235.07 36.5691C235.476 36.3465 235.939 36.248 236.4 36.2861C236.862 36.3242 237.302 36.4972 237.666 36.7833C238.014 37.0877 238.241 37.5073 238.304 37.965C238.366 38.4227 238.261 38.8876 238.007 39.2739C238.196 39.3289 238.397 39.3227 238.582 39.2562C238.766 39.1898 238.925 39.0666 239.035 38.9043C239.049 39.118 239.019 39.3323 238.947 39.5339C238.874 39.7355 238.761 39.92 238.614 40.0761C238.956 39.993 239.255 39.7884 239.456 39.5007L239.216 40.6305C240.59 40.6641 241.938 39.3369 242.322 38.1525C242.899 36.3633 242.452 34.5573 241.449 32.9613C240.956 32.156 240.268 31.4868 239.448 31.015C238.628 30.5432 237.702 30.2839 236.756 30.2607C234.868 30.2607 233.288 31.1679 232.542 32.9067C231.316 32.0415 228.835 31.7433 227.465 32.3607C226.78 32.6777 226.188 33.1646 225.745 33.7749C225.302 34.3853 225.024 35.0986 224.937 35.8467C224.498 35.6938 224.027 35.6595 223.57 35.7473C223.113 35.8351 222.688 36.0418 222.338 36.3465L222.161 36.4977C221.68 36.955 221.324 37.5261 221.125 38.1577C220.926 38.7893 220.891 39.4609 221.023 40.1097C221.12 40.6305 221.301 41.1723 221.411 41.5881C221.756 42.8397 222.333 45.4605 222.333 45.4605Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M239.246 38.8199C239.246 38.8199 239.288 38.7947 239.36 38.7317C239.459 38.6429 239.549 38.5444 239.629 38.4377C239.925 38.0377 240.108 37.5666 240.16 37.0727C240.205 36.7053 240.172 36.3325 240.061 35.9791C239.951 35.6258 239.766 35.2998 239.52 35.0231C239.217 34.6814 238.834 34.4186 238.406 34.2576C237.978 34.0965 237.517 34.0421 237.063 34.0991C236.596 34.1683 236.151 34.3421 235.761 34.6073C235.397 34.8468 235.073 35.1415 234.801 35.4809C234.017 36.4388 233.61 37.6478 233.655 38.8829C233.662 39.0151 233.676 39.1469 233.697 39.2777C233.7 39.3247 233.708 39.3712 233.722 39.4163C233.68 38.7552 233.744 38.0916 233.912 37.4507C234.105 36.7595 234.442 36.1168 234.902 35.5649C235.442 34.8711 236.218 34.3988 237.084 34.2377C237.515 34.1847 237.952 34.2361 238.358 34.3875C238.765 34.5388 239.128 34.7857 239.419 35.1071C239.657 35.37 239.838 35.6802 239.948 36.0175C240.059 36.3548 240.096 36.7115 240.059 37.0643C240.016 37.5451 239.849 38.0067 239.574 38.4041C239.385 38.6855 239.237 38.8073 239.246 38.8199Z",
                    fill: "#455A64"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M239.878 40.2527C239.916 40.2051 239.949 40.1529 239.975 40.0973C240.034 39.9923 240.122 39.8369 240.227 39.6353C240.543 39.0653 240.803 38.4661 241.003 37.8461C241.131 37.4149 241.202 36.9687 241.213 36.5189C241.23 35.9968 241.135 35.4772 240.935 34.9943C240.704 34.4614 240.322 34.0074 239.836 33.6881C239.302 33.3439 238.688 33.1455 238.053 33.1127C237.433 33.0795 236.812 33.1783 236.233 33.4025C235.698 33.6063 235.196 33.8895 234.746 34.2425C233.959 34.825 233.387 35.6504 233.12 36.5903C232.954 37.2275 232.986 37.8998 233.212 38.5181C233.277 38.6829 233.359 38.8405 233.457 38.9885C233.487 39.0421 233.523 39.0915 233.566 39.1355C233.452 38.9313 233.352 38.7194 233.267 38.5013C233.063 37.8916 233.046 37.2353 233.216 36.6155C233.494 35.7053 234.058 34.9085 234.826 34.3433C235.737 33.6081 236.881 33.2209 238.053 33.2513C238.654 33.2873 239.235 33.4783 239.739 33.8057C240.21 34.1121 240.579 34.5505 240.8 35.0657C240.995 35.5313 241.091 36.0316 241.083 36.5357C241.076 36.9764 241.011 37.4142 240.889 37.8377C240.699 38.4489 240.455 39.042 240.16 39.6101L239.933 40.0847C239.91 40.1392 239.891 40.1954 239.878 40.2527Z",
                    fill: "#455A64"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M223.471 43.3898C223.471 43.3898 223.172 43.1504 222.784 42.6842C222.273 42.0794 221.92 41.358 221.756 40.5842C221.603 39.8129 221.639 39.016 221.862 38.2616C222.038 37.682 222.236 37.3544 222.211 37.3418C222.152 37.4087 222.102 37.4837 222.064 37.5644C221.944 37.7755 221.845 37.9978 221.769 38.228C221.504 38.9953 221.452 39.8195 221.617 40.6139C221.783 41.4084 222.16 42.1438 222.708 42.743C222.871 42.9241 223.05 43.09 223.243 43.2386C223.312 43.2994 223.388 43.3503 223.471 43.3898Z",
                    fill: "#455A64"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M226.4 43.2972C226.4 43.2972 226.24 43.2258 225.978 43.0536C225.624 42.8095 225.344 42.4722 225.169 42.0792L225.035 41.7726L225.064 42.1086C225.102 42.558 225.152 43.0788 225.203 43.6416L225.304 43.5786C224.897 43.3003 224.542 42.9535 224.255 42.5538C223.894 42.0537 223.649 41.4798 223.539 40.8738C223.448 40.3753 223.448 39.8645 223.539 39.366C223.636 38.9082 223.789 38.4639 223.994 38.043C223.994 38.043 223.969 38.0682 223.931 38.1186C223.893 38.169 223.846 38.2572 223.787 38.3664C223.629 38.6777 223.512 39.008 223.438 39.3492C223.33 39.8577 223.317 40.3816 223.4 40.8948C223.498 41.4606 223.71 42.0006 224.023 42.4822C224.337 42.9637 224.746 43.3768 225.224 43.6962L225.342 43.776V43.6374C225.279 43.0746 225.224 42.5538 225.178 42.1044L225.072 42.1338C225.261 42.539 225.566 42.8795 225.949 43.1124C226.052 43.1743 226.161 43.2277 226.273 43.272C226.313 43.2882 226.356 43.2967 226.4 43.2972Z",
                    fill: "#455A64"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M227.289 36.5402C227.476 36.1876 227.729 35.8739 228.034 35.6162C228.378 35.3506 228.779 35.1693 229.206 35.087C229.724 34.9928 230.259 35.0408 230.752 35.2256C231.244 35.4198 231.685 35.7262 232.037 36.1202C232.326 36.4415 232.561 36.8075 232.732 37.2038C232.881 37.5756 232.998 37.9591 233.082 38.3504C233.091 38.2422 233.084 38.1332 233.061 38.027C232.945 37.2886 232.624 36.5974 232.134 36.032C231.768 35.6219 231.306 35.3076 230.79 35.1164C230.271 34.92 229.708 34.8734 229.164 34.982C228.724 35.0766 228.315 35.2771 227.971 35.5658C227.741 35.7607 227.549 35.9972 227.407 36.263C227.37 36.3354 227.338 36.4097 227.31 36.4856C227.293 36.5402 227.284 36.5402 227.289 36.5402Z",
                    fill: "#455A64"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M228.043 34.104C228.324 33.9574 228.621 33.842 228.927 33.7596C229.677 33.5988 230.46 33.709 231.135 34.0704C231.802 34.4535 232.344 35.019 232.698 35.7C232.976 36.2208 233.069 36.5778 233.094 36.5694C233.089 36.4835 233.072 36.3987 233.044 36.3174C232.981 36.0888 232.896 35.8666 232.791 35.6538C232.445 34.946 231.891 34.36 231.203 33.9738C230.5 33.5942 229.681 33.4923 228.906 33.6882C228.675 33.7499 228.453 33.8447 228.249 33.9696C228.106 34.02 228.038 34.0956 228.043 34.104Z",
                    fill: "#455A64"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M238.382 185.304L238.053 194.086C238.053 194.086 246.901 197.362 246.998 198.992H229.892L229.837 185.287L238.382 185.304Z",
                    fill: "#455A64"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M232.77 193.342C232.606 193.392 232.465 193.501 232.376 193.647C232.286 193.794 232.254 193.968 232.286 194.136C232.329 194.303 232.436 194.446 232.582 194.536C232.729 194.627 232.905 194.658 233.073 194.623C233.247 194.57 233.394 194.455 233.487 194.3C233.58 194.145 233.613 193.961 233.579 193.783C233.517 193.614 233.391 193.476 233.228 193.397C233.066 193.319 232.879 193.307 232.707 193.363",
                    fill: "#E0E0E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M229.896 198.978L229.947 197.597L246.328 198.126C246.328 198.126 247.087 198.458 247.003 198.991L229.896 198.978Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M238.336 193.998C238.336 194.082 237.915 194.12 237.493 194.389C237.072 194.658 236.866 195.006 236.79 194.973C236.714 194.939 236.836 194.46 237.337 194.133C237.839 193.805 238.353 193.923 238.336 193.998Z",
                    fill: "white"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M240.127 194.741C240.148 194.821 239.785 194.964 239.503 195.312C239.221 195.661 239.136 196.039 239.052 196.035C238.968 196.031 238.917 195.56 239.275 195.128C239.634 194.695 240.127 194.661 240.127 194.741Z",
                    fill: "white"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M241.146 196.883C241.07 196.883 240.952 196.484 241.146 196.043C241.34 195.602 241.753 195.409 241.787 195.476C241.82 195.543 241.58 195.791 241.412 196.165C241.243 196.539 241.226 196.875 241.146 196.883Z",
                    fill: "white"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M238.184 191.99C238.15 192.066 237.763 191.952 237.295 191.99C236.827 192.028 236.452 192.171 236.41 192.099C236.368 192.028 236.722 191.73 237.278 191.7C237.834 191.671 238.226 191.94 238.184 191.99Z",
                    fill: "white"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M218.756 186.11L218.074 196.72L219.961 205.267C219.994 205.412 219.996 205.563 219.967 205.709C219.939 205.855 219.88 205.994 219.796 206.117C219.711 206.24 219.602 206.344 219.476 206.423C219.349 206.502 219.207 206.555 219.06 206.577C218.888 206.602 218.712 206.587 218.547 206.531C218.382 206.476 218.233 206.382 218.112 206.258C216.549 204.637 210.831 198.643 210.924 197.858C211.033 196.959 210.898 186.619 210.898 186.619L218.756 186.11Z",
                    fill: "#455A64"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M219.06 206.577L210.953 197.152V197.602C210.936 197.991 211.058 198.374 211.299 198.681C211.943 199.5 213.772 201.726 218.095 206.241C218.219 206.371 218.374 206.469 218.545 206.526C218.716 206.582 218.899 206.595 219.077 206.565L219.06 206.577Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    opacity: "0.6",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M213.283 193.817C213.409 193.919 213.494 194.063 213.52 194.223C213.547 194.382 213.513 194.546 213.427 194.683C213.331 194.809 213.191 194.894 213.035 194.922C212.879 194.95 212.718 194.919 212.584 194.834C212.45 194.726 212.361 194.572 212.333 194.402C212.306 194.232 212.343 194.058 212.436 193.914C212.551 193.789 212.71 193.713 212.88 193.702C213.049 193.691 213.217 193.746 213.347 193.855",
                        fill: "white"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M216.814 201.835C217.085 201.514 217.413 201.246 217.783 201.046C218.179 200.908 218.598 200.846 219.018 200.865C219.018 200.84 218.895 200.752 218.651 200.706C218.323 200.655 217.988 200.7 217.686 200.836C217.383 200.966 217.125 201.182 216.945 201.457C216.81 201.672 216.789 201.827 216.814 201.835Z",
                    fill: "white"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M217.513 203.28C217.564 203.331 217.935 202.999 218.478 202.86C218.824 202.808 219.173 202.777 219.523 202.768C219.363 202.659 219.18 202.59 218.988 202.567C218.795 202.543 218.601 202.566 218.419 202.633C217.783 202.801 217.459 203.28 217.513 203.28Z",
                    fill: "white"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M215.474 199.953C215.938 199.672 216.421 199.424 216.919 199.21C217.442 199.07 217.974 198.969 218.512 198.908C217.959 198.731 217.36 198.759 216.827 198.987C216.278 199.145 215.8 199.486 215.474 199.953Z",
                    fill: "white"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M215.411 196.711C215.436 196.778 216.039 196.555 216.806 196.559C217.573 196.564 218.171 196.769 218.196 196.706C217.792 196.42 217.3 196.285 216.806 196.324C216.31 196.288 215.817 196.425 215.411 196.711Z",
                    fill: "white"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M215.533 193.595C216.003 193.46 216.49 193.394 216.978 193.398C217.462 193.471 217.933 193.613 218.377 193.818C218.377 193.792 218.285 193.658 218.044 193.503C217.725 193.312 217.366 193.198 216.995 193.171C216.624 193.143 216.252 193.202 215.908 193.343C215.647 193.448 215.516 193.57 215.533 193.595Z",
                    fill: "white"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M216.987 192.801C217.028 192.672 217.04 192.536 217.021 192.402C216.997 192.032 216.902 191.67 216.742 191.335C216.644 191.081 216.465 190.866 216.233 190.722C216.153 190.68 216.061 190.664 215.972 190.678C215.882 190.691 215.799 190.733 215.736 190.798C215.618 190.928 215.551 191.096 215.546 191.272C215.555 191.63 215.689 191.974 215.925 192.244C216.161 192.514 216.485 192.693 216.839 192.751C217.191 192.801 217.55 192.746 217.87 192.592C218.19 192.439 218.458 192.194 218.638 191.89C218.683 191.813 218.711 191.727 218.72 191.639C218.729 191.55 218.718 191.461 218.689 191.377C218.653 191.297 218.594 191.23 218.518 191.186C218.443 191.142 218.355 191.122 218.268 191.129C218.003 191.176 217.756 191.292 217.551 191.465C217.253 191.683 216.994 191.952 216.789 192.259C216.704 192.365 216.643 192.488 216.612 192.62C216.903 192.231 217.251 191.886 217.644 191.6C217.829 191.458 218.046 191.363 218.276 191.323C218.326 191.316 218.376 191.326 218.42 191.35C218.464 191.374 218.499 191.412 218.521 191.457C218.535 191.514 218.538 191.573 218.529 191.631C218.519 191.689 218.498 191.744 218.466 191.793C218.302 192.052 218.068 192.258 217.79 192.387C217.512 192.516 217.202 192.562 216.898 192.52C216.599 192.469 216.326 192.319 216.124 192.094C215.921 191.869 215.8 191.582 215.782 191.281C215.781 191.158 215.823 191.04 215.9 190.945C215.935 190.91 215.981 190.887 216.03 190.879C216.078 190.871 216.129 190.877 216.174 190.898C216.364 191.022 216.511 191.201 216.595 191.411C216.808 191.847 216.941 192.318 216.987 192.801Z",
                    fill: "white"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M245.873 111.086C246.784 114.705 247.149 118.439 246.956 122.166C246.83 124.526 239.216 192.801 239.216 192.801L229.526 191.932L231.211 128.092L230.79 128.453C230.79 128.453 225.021 155.308 224.638 159.554C224.301 163.38 219.696 194.04 219.696 194.04L210.296 193.595L212.428 154.842L215.276 119.658L216.418 109.41L245.873 111.086Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M229.34 122.598C229.483 122.694 229.635 122.775 229.795 122.837C230.223 123.038 230.677 123.179 231.144 123.257C231.472 123.316 231.809 123.316 232.138 123.257C232.522 123.184 232.877 123.004 233.162 122.736C233.459 122.426 233.669 122.041 233.769 121.623C233.876 121.195 233.962 120.762 234.026 120.326C234.329 118.549 234.527 116.924 234.632 115.748C234.687 115.16 234.721 114.685 234.738 114.353C234.758 114.183 234.758 114.011 234.738 113.841C234.688 114.005 234.657 114.174 234.645 114.345C234.597 114.723 234.538 115.185 234.468 115.731C234.32 116.903 234.101 118.515 233.798 120.288C233.642 121.166 233.545 122.056 233.01 122.589C232.76 122.808 232.464 122.968 232.144 123.058C231.825 123.149 231.489 123.168 231.16 123.114C230.705 123.046 230.258 122.926 229.829 122.757C229.673 122.686 229.509 122.632 229.34 122.598Z",
                    fill: "#455A64"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M232.395 114.202C232.395 114.202 232.323 114.148 232.171 114.144C231.954 114.142 231.743 114.215 231.573 114.349C231.443 114.448 231.338 114.575 231.265 114.721C231.192 114.866 231.153 115.027 231.152 115.189C231.17 115.393 231.247 115.586 231.373 115.747C231.499 115.908 231.669 116.03 231.862 116.097C232.055 116.165 232.264 116.175 232.463 116.127C232.662 116.079 232.843 115.975 232.985 115.828C233.085 115.698 233.154 115.548 233.186 115.387C233.218 115.227 233.212 115.062 233.17 114.904C233.121 114.692 233.001 114.504 232.829 114.37C232.707 114.278 232.622 114.265 232.618 114.278C232.818 114.449 232.955 114.681 233.01 114.937C233.035 115.069 233.032 115.205 233 115.335C232.968 115.466 232.908 115.588 232.825 115.693C232.708 115.802 232.564 115.878 232.407 115.911C232.251 115.944 232.088 115.934 231.937 115.881C231.786 115.829 231.652 115.736 231.55 115.614C231.448 115.491 231.382 115.343 231.358 115.185C231.359 115.05 231.388 114.917 231.445 114.794C231.502 114.672 231.584 114.563 231.687 114.475C231.888 114.312 232.136 114.216 232.395 114.202Z",
                    fill: "#455A64"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M215.411 119.019C215.531 119.057 215.656 119.074 215.782 119.07C216.119 119.094 216.456 119.094 216.793 119.07C219.04 118.892 221.157 117.945 222.784 116.39C223.031 116.159 223.259 115.909 223.467 115.643C223.552 115.551 223.623 115.448 223.678 115.336C223.644 115.311 223.307 115.714 222.679 116.273C221.025 117.724 218.968 118.644 216.78 118.91C215.942 118.998 215.415 118.982 215.411 119.019Z",
                    fill: "#455A64"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M241.521 114.189C241.668 114.574 241.865 114.938 242.107 115.273C242.651 116.106 243.298 116.867 244.032 117.541C244.762 118.218 245.571 118.805 246.442 119.288C246.793 119.506 247.173 119.675 247.571 119.788C247.571 119.754 247.15 119.544 246.526 119.149C245.691 118.633 244.907 118.04 244.184 117.377C243.47 116.707 242.819 115.974 242.241 115.184C241.795 114.575 241.555 114.172 241.521 114.189Z",
                    fill: "#455A64"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M251.115 75.625C252.556 79.825 252.379 79.4554 255.088 91.963C255.585 94.273 254.709 97.8808 252.623 98.9938C250.538 100.107 246.822 98.8846 245.579 96.8938L243.582 77.9938L251.115 75.625Z",
                    fill: "#FFBE9D"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M216.414 98.3132L216.469 88.3634L216.426 87.389L206.314 85.0328C206.314 85.0328 208.303 78.5018 210.128 71.4836C211.181 67.4306 214.686 65.3936 215.533 64.9568L215.719 64.8728L225.468 60.7568C227.436 62.8568 230.305 64.5368 233.052 63.7262C234.622 63.2171 236.013 62.2696 237.059 60.9962L243.632 63.2432C245.53 63.8944 247.135 65.193 248.165 66.9098C249.539 69.3332 253.934 80.4506 254.009 80.6984L245.873 81.425C245.873 81.425 247.314 107.734 246.805 112.434C246.805 112.434 244.829 113.799 239.84 114.03C229.728 114.508 214.686 113.79 214.686 113.79C214.922 112.274 215.167 109.737 215.306 108.452L216.414 98.3132Z",
                    fill: theme.palette.primary.main
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M245.604 71.627C245.562 71.627 245.781 77.927 246.088 85.6424C246.396 93.3578 246.678 99.6494 246.72 99.6494C246.763 99.6494 246.543 93.3746 246.236 85.634C245.928 77.8934 245.638 71.627 245.604 71.627Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M217.526 73.3818C217.598 73.3818 217.392 78.9552 217.067 85.818C216.743 92.6808 216.422 98.2416 216.351 98.2374C216.279 98.2332 216.481 92.6682 216.806 85.8054C217.13 78.9426 217.455 73.3776 217.526 73.3818Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M206.255 89.7664C206.584 87.301 206.858 85.117 206.858 85.117L214.956 86.9902L214.611 88.2922L220.872 81.9502L221.862 82.0342L225.013 85.3018C225.013 85.3018 222.266 91.0894 220.669 93.3406C218.592 96.2806 215.323 100.737 210.848 100.363C206.711 100.014 205.661 94.1974 206.255 89.7664Z",
                    fill: "#FFBE9D"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M210.642 91.2443C210.591 91.1981 211.333 90.4043 212.42 89.6147C213.507 88.8251 214.505 88.3883 214.526 88.4513C214.547 88.5143 213.637 89.0561 212.567 89.8247C211.497 90.5933 210.692 91.2989 210.642 91.2443Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M231.801 73.6761L229.02 72.2607L225.414 73.4031L223.627 75.0495L220.876 81.9501L218.672 84.7305L222.561 89.7705L225.018 85.2933C225.018 85.2933 227.124 84.3861 227.942 83.0715C228.759 81.7569 229.151 81.0471 229.151 81.0471C229.151 81.0471 230.356 80.4717 230.579 79.9173C230.711 79.6042 230.784 79.2697 230.794 78.9303L230.183 78.0441C230.222 77.6569 230.159 77.2663 230.002 76.9101C229.88 76.7409 229.712 76.6098 229.517 76.5321C229.517 76.5321 229.699 75.7803 229.416 75.5115C228.883 75.2001 228.318 74.9453 227.731 74.7513L228.944 74.0667C228.944 74.0667 231.654 74.9067 231.801 73.6761Z",
                    fill: "#FFBE9D"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M227.672 76.1836C227.672 76.2172 228.093 76.2298 228.607 76.339C229.121 76.4482 229.513 76.6036 229.526 76.5742C229.26 76.3878 228.954 76.2669 228.633 76.2214C228.32 76.1352 227.991 76.1222 227.672 76.1836Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M228.506 77.7335C228.506 77.7671 228.873 77.7671 229.311 77.8343C229.749 77.9015 230.099 78.0065 230.112 77.9771C229.876 77.8279 229.607 77.7385 229.328 77.7167C229.057 77.6583 228.775 77.664 228.506 77.7335Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M229.681 80.1607C229.715 80.1607 229.74 80.0011 229.736 79.8037C229.732 79.6063 229.702 79.4551 229.669 79.4551C229.635 79.4551 229.614 79.6147 229.618 79.8079C229.622 80.0011 229.652 80.1607 229.681 80.1607Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M229.151 80.9085C229.191 80.68 229.278 80.4625 229.408 80.2701C229.561 80.0902 229.752 79.9467 229.968 79.8501C229.968 79.8501 229.88 79.8249 229.749 79.8501C229.578 79.9103 229.427 80.0182 229.315 80.1611C229.203 80.304 229.134 80.4759 229.117 80.6565C229.109 80.8287 229.138 80.9085 229.151 80.9085Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M226.977 78.6953C227.104 78.506 227.269 78.3445 227.461 78.2207C227.668 78.1253 227.891 78.0697 228.119 78.0569C228.119 78.0569 228.047 78.0065 227.912 77.9939C227.734 77.9868 227.558 78.029 227.402 78.1157C227.248 78.2038 227.12 78.3314 227.032 78.4853C226.968 78.6071 226.96 78.6911 226.977 78.6953Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M225.709 77.158C225.738 77.158 225.848 76.885 226.13 76.7002C226.32 76.5989 226.525 76.5281 226.737 76.4902C226.737 76.4902 226.665 76.4482 226.539 76.4482C226.371 76.4572 226.208 76.5093 226.067 76.5994C225.926 76.6882 225.811 76.8129 225.734 76.9606C225.7 77.074 225.692 77.1538 225.709 77.158Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M224.857 76.4057C224.857 76.4057 224.857 76.3091 224.887 76.1705C224.911 75.9883 224.982 75.8154 225.093 75.6683C225.204 75.5213 225.35 75.4049 225.519 75.3305C225.649 75.2717 225.742 75.2549 225.738 75.2339C225.734 75.2129 225.641 75.2086 225.489 75.2548C225.29 75.3127 225.116 75.4336 224.992 75.5993C224.868 75.7642 224.8 75.9643 224.798 76.1705C224.803 76.3217 224.845 76.4099 224.857 76.4057Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M226.037 74.6042C226.037 74.6462 226.619 74.6546 227.301 74.7596C227.984 74.8646 228.531 75.1124 228.565 75.0788C228.191 74.8492 227.771 74.7058 227.335 74.6588C227.03 74.6113 226.721 74.5888 226.412 74.5916C226.287 74.5741 226.16 74.5784 226.037 74.6042Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M244.125 76.5193L242.899 89.5183C242.896 89.8138 242.822 90.1043 242.681 90.3647C242.541 90.6251 242.34 90.8478 242.094 91.0135L234.182 90.8497C233.861 90.5557 233.508 89.6317 233.579 88.6363L234.456 76.1959C234.506 75.4483 234.788 74.9065 235.125 74.8981L243.459 74.7091C243.881 74.6965 244.214 75.5995 244.125 76.5193Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M245.275 79.1362C245.43 78.9318 245.511 78.682 245.506 78.4262C245.502 78.1705 245.412 77.9237 245.25 77.725C245.082 77.5318 244.873 77.3778 244.639 77.274C244.404 77.1702 244.15 77.1192 243.893 77.1244C243.381 77.1388 242.877 77.2544 242.41 77.4646C241.821 77.7023 241.256 77.9978 240.725 78.3466C240.527 78.448 240.352 78.5891 240.211 78.7612C240.071 78.9332 239.967 79.1324 239.908 79.3462C239.844 79.7872 240.329 80.2744 240.717 80.0476C240.447 80.1677 240.209 80.3505 240.025 80.5806C239.84 80.8108 239.713 81.0816 239.655 81.3706C239.583 81.925 239.891 82.2106 240.43 82.3618C240.227 82.4465 240.066 82.6068 239.98 82.8084C239.894 83.01 239.891 83.2371 239.971 83.4412C240.099 83.6335 240.291 83.7737 240.514 83.8361C240.737 83.8986 240.975 83.8791 241.184 83.7814C241.598 83.5704 241.953 83.2601 242.217 82.8784C241.957 83.5056 241.909 84.1995 242.077 84.8566C243.257 84.4366 244.42 83.1178 244.066 81.8746C244.359 81.6401 244.565 81.3148 244.651 80.9503C244.738 80.5858 244.699 80.203 244.542 79.8628C244.812 79.7365 245.043 79.5399 245.211 79.2938C245.379 79.0477 245.477 78.7611 245.494 78.4642",
                    fill: "#FFBE9D"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M245.406 78.002L245.503 83.5586L246.948 85.7258L253.576 91.631C253.576 91.631 252.594 99.6614 249.602 98.771C246.611 97.8806 245.882 97.322 244.125 94.0796C243.181 92.345 242.596 89.5226 242.048 87.9056C241.728 86.9564 242.01 83.8946 242.01 83.8946L245.406 78.002Z",
                    fill: "#FFBE9D"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M240.455 82.3705C240.632 82.2411 240.801 82.1008 240.961 81.9505C241.348 81.6132 241.805 81.3664 242.301 81.2281C242.571 81.1675 242.852 81.1675 243.122 81.2281C243.344 81.2776 243.553 81.3751 243.733 81.5137C243.898 81.6517 244.04 81.8147 244.154 81.9967C244.15 81.9378 244.132 81.8805 244.104 81.8287C244.034 81.6807 243.933 81.5491 243.809 81.4423C243.624 81.2842 243.405 81.1706 243.168 81.1105C242.879 81.0413 242.577 81.0413 242.288 81.1105C241.773 81.2531 241.303 81.5217 240.919 81.8917C240.742 82.028 240.585 82.1893 240.455 82.3705Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M240.535 80.106C240.751 80.039 240.959 79.9474 241.155 79.833C241.367 79.7179 241.587 79.6156 241.812 79.5264C242.086 79.4242 242.368 79.3441 242.654 79.287C242.94 79.2255 243.234 79.2156 243.522 79.2576C243.758 79.2943 243.981 79.3849 244.175 79.5222C244.346 79.656 244.489 79.8215 244.597 80.0094C244.597 80.0094 244.597 79.9422 244.542 79.8372C244.466 79.6844 244.357 79.5509 244.222 79.4466C244.022 79.2919 243.788 79.1868 243.539 79.14C243.237 79.0835 242.927 79.0835 242.625 79.14C242.327 79.2012 242.035 79.2883 241.753 79.4004C241.527 79.4972 241.307 79.608 241.096 79.7322C240.9 79.8428 240.712 79.9678 240.535 80.106Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M252.863 94.8271C253.022 94.1483 253.05 93.4455 252.943 92.7565C252.812 92.0151 252.546 91.3036 252.16 90.6565C251.677 89.8657 251.087 89.1449 250.407 88.5145C249.695 87.8299 248.962 87.2293 248.3 86.6665C247.71 86.1725 247.148 85.6467 246.615 85.0915C246.259 84.714 245.936 84.3065 245.65 83.8735C245.537 83.7203 245.444 83.5539 245.372 83.3779C245.498 83.5191 245.614 83.6693 245.718 83.8273C246.03 84.2334 246.367 84.6192 246.729 84.9823C247.184 85.4443 247.761 85.9567 248.414 86.5111C249.067 87.0655 249.813 87.6619 250.521 88.3549C251.214 89.0008 251.811 89.7418 252.295 90.5557C252.681 91.228 252.939 91.9656 253.057 92.7313C253.13 93.2499 253.112 93.7773 253.002 94.2895C252.974 94.4324 252.935 94.5728 252.884 94.7095C252.881 94.7493 252.874 94.7887 252.863 94.8271Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M258.079 49.4721C258.13 49.5057 258.037 49.7283 257.873 49.9677C257.708 50.2071 257.536 50.3877 257.485 50.3373C257.434 50.2869 257.527 50.0811 257.691 49.8417C257.856 49.6023 258.029 49.4385 258.079 49.4721Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M260.287 45.9443C260.211 46.2869 260.068 46.611 259.866 46.8977C259.571 47.3933 259.293 47.7713 259.238 47.7377C259.314 47.3954 259.457 47.0714 259.659 46.7843C259.81 46.4651 260.023 46.1794 260.287 45.9443Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M261.993 42.1602C261.969 42.511 261.872 42.853 261.707 43.164C261.615 43.5064 261.451 43.8255 261.227 44.1006C261.252 43.7499 261.349 43.4082 261.513 43.0968C261.605 42.7544 261.769 42.4352 261.993 42.1602Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M262.958 38.124C263.007 38.4729 262.979 38.8282 262.878 39.1656C262.851 39.5157 262.75 39.8561 262.583 40.1652C262.54 39.8162 262.567 39.462 262.663 39.1236C262.694 38.7743 262.794 38.4345 262.958 38.124Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M263.034 33.9736C263.154 34.3042 263.206 34.6557 263.186 35.0068C263.241 35.3555 263.213 35.7122 263.106 36.0484C262.997 35.7152 262.95 35.3652 262.967 35.0152C262.915 34.6672 262.938 34.3121 263.034 33.9736Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M262.377 29.8701C262.55 30.1765 262.658 30.5155 262.693 30.8655C262.797 31.2024 262.831 31.5567 262.794 31.9071C262.626 31.5991 262.523 31.2605 262.491 30.9117C262.382 30.5758 262.344 30.2214 262.377 29.8701Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M260.919 25.9814C261.17 26.2325 261.357 26.539 261.467 26.876C261.64 27.1855 261.739 27.5303 261.757 27.884C261.54 27.6089 261.373 27.2975 261.264 26.9642C261.092 26.6595 260.975 26.3268 260.919 25.9814Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M258.526 22.5967C258.568 22.5547 258.947 22.8571 259.301 23.3065C259.552 23.558 259.739 23.8664 259.845 24.2053C259.794 24.2389 259.491 23.8861 259.128 23.4451C258.766 23.0041 258.48 22.6429 258.526 22.5967Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M255.218 20.0928C255.569 20.1498 255.899 20.2943 256.179 20.5128C256.668 20.8236 257.022 21.1554 256.971 21.2016C256.641 21.0843 256.332 20.9141 256.057 20.6976C255.748 20.5402 255.465 20.3362 255.218 20.0928Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M251.304 18.7025C251.658 18.6593 252.017 18.7041 252.349 18.8327C252.7 18.8929 253.031 19.037 253.314 19.2527C252.963 19.2438 252.617 19.1741 252.29 19.0469C251.945 18.9857 251.612 18.8694 251.304 18.7025Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M247.154 18.5179C247.477 18.367 247.834 18.3019 248.19 18.3289C248.543 18.2808 248.903 18.3227 249.235 18.4507C248.896 18.5388 248.544 18.5714 248.195 18.5473C247.848 18.592 247.497 18.5821 247.154 18.5179Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M243.257 19.8911C243.223 19.8449 243.581 19.5215 244.099 19.2653C244.403 19.0768 244.752 18.9725 245.11 18.9629C244.831 19.1708 244.523 19.3377 244.196 19.4585C243.903 19.6421 243.587 19.7875 243.257 19.8911Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M240.977 23.2558C240.941 22.8976 241.016 22.537 241.192 22.2226C241.299 21.8797 241.51 21.5777 241.794 21.3574C241.689 21.6881 241.548 22.0063 241.373 22.3066C241.274 22.6358 241.141 22.9538 240.977 23.2558Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M241.529 27.3001C241.289 27.0347 241.124 26.7097 241.053 26.3593C240.917 26.0285 240.875 25.6666 240.931 25.3135C241.085 25.6251 241.197 25.9555 241.264 26.2963C241.399 26.6169 241.488 26.9548 241.529 27.3001Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M244.028 30.5968C243.99 30.643 243.606 30.3784 243.185 29.9542C242.764 29.53 242.54 29.1142 242.591 29.0848C242.642 29.0554 242.953 29.3914 243.345 29.803C243.737 30.2146 244.066 30.5506 244.028 30.5968Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M247.634 32.6427C246.93 32.5592 246.268 32.2665 245.734 31.8027C246.078 31.8727 246.408 31.9975 246.711 32.1723C247.043 32.2781 247.354 32.437 247.634 32.6427Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M251.742 33.1802C251.412 33.3181 251.052 33.3673 250.697 33.323C250.341 33.3513 249.983 33.2846 249.661 33.1298C250.004 33.0708 250.355 33.0623 250.701 33.1046C251.05 33.0782 251.401 33.1037 251.742 33.1802Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M255.589 31.7061C255.374 31.9996 255.083 32.2291 254.747 32.3697C254.452 32.5733 254.106 32.6924 253.748 32.7141C254.021 32.4983 254.322 32.319 254.641 32.1807C254.933 31.979 255.253 31.8192 255.589 31.7061Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M258.075 28.4219C258.045 28.7779 257.922 29.1199 257.717 29.4131C257.426 29.9213 257.093 30.2531 257.047 30.2279C257.163 29.8999 257.323 29.5891 257.523 29.3039C257.664 28.9854 257.85 28.6885 258.075 28.4219Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M258.669 24.3604C258.814 24.6872 258.868 25.0471 258.825 25.402C258.853 25.7578 258.785 26.1147 258.627 26.4352C258.571 26.0921 258.563 25.7428 258.606 25.3978C258.579 25.0507 258.6 24.7016 258.669 24.3604Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M257.337 20.4414C257.6 20.682 257.798 20.9836 257.915 21.3192C258.097 21.6246 258.195 21.9721 258.201 22.3272C257.994 22.0508 257.829 21.745 257.712 21.42C257.534 21.1166 257.407 20.786 257.337 20.4414Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M254.755 17.1906C254.797 17.1486 255.176 17.4384 255.564 17.8626C255.951 18.2868 256.208 18.7026 256.162 18.7278C256.116 18.753 255.787 18.4296 255.404 18.0096C255.02 17.5896 254.713 17.22 254.755 17.1906Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M251.472 14.6416C251.812 14.7406 252.127 14.9079 252.399 15.133C252.876 15.4606 253.213 15.7882 253.179 15.8344C253.145 15.8806 252.758 15.637 252.273 15.3136C251.788 14.9902 251.439 14.7004 251.472 14.6416Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M247.765 12.7471C248.116 12.7893 248.454 12.9037 248.759 13.0831C249.091 13.1989 249.398 13.3787 249.661 13.6123C249.31 13.5722 248.971 13.4591 248.666 13.2805C248.333 13.1647 248.026 12.9833 247.765 12.7471Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M243.792 11.4917C244.145 11.4763 244.498 11.5335 244.828 11.6597C245.177 11.7175 245.51 11.8477 245.805 12.0419C245.452 12.0529 245.1 11.9944 244.769 11.8697C244.421 11.8101 244.089 11.6816 243.792 11.4917Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M239.675 10.8445C240.021 10.7706 240.379 10.7706 240.724 10.8445C241.077 10.8522 241.424 10.9323 241.744 11.0797C241.045 11.1404 240.34 11.056 239.675 10.8319V10.8445Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M235.525 10.7816C235.86 10.6685 236.214 10.6242 236.566 10.6514C236.917 10.6091 237.272 10.6392 237.611 10.7396C237.277 10.8565 236.923 10.9009 236.57 10.8698C236.22 10.9135 235.864 10.8835 235.525 10.7816Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M231.371 11.2935C232.026 11.0405 232.729 10.9289 233.431 10.9659C232.775 11.2198 232.073 11.3315 231.371 11.2935Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M227.347 12.373C227.637 12.1687 227.965 12.0258 228.312 11.953C228.636 11.8138 228.987 11.7451 229.34 11.7514C229.046 11.958 228.714 12.1037 228.363 12.1798C228.041 12.3124 227.695 12.3781 227.347 12.373Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M223.53 14.0368C223.5 13.9822 223.896 13.7302 224.41 13.474C224.713 13.2895 225.052 13.1734 225.405 13.1338C225.43 13.1926 225.021 13.4194 224.507 13.6714C224.21 13.8591 223.877 13.9835 223.53 14.0368Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M219.995 16.2376C219.957 16.1914 220.315 15.889 220.795 15.5656C221.067 15.3397 221.383 15.1724 221.722 15.0742C221.752 15.1246 221.394 15.427 220.918 15.7462C220.647 15.9706 220.333 16.1377 219.995 16.2376Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M216.805 18.9004C216.763 18.8584 217.075 18.5098 217.504 18.1234C217.934 17.737 218.313 17.4598 218.347 17.506C218.381 17.5522 218.073 17.9008 217.648 18.283C217.222 18.6652 216.847 18.9592 216.805 18.9004Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M214.037 22.0085C214.172 21.6838 214.371 21.3896 214.623 21.1433C214.994 20.7023 215.335 20.3747 215.377 20.4167C215.419 20.4587 215.162 20.8367 214.791 21.2819C214.421 21.7271 214.071 22.0463 214.037 22.0085Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M211.682 25.4485C211.772 25.1083 211.929 24.7897 212.146 24.5119C212.453 24.0247 212.744 23.6719 212.794 23.6719C212.707 24.0129 212.549 24.332 212.331 24.6085C212.028 25.1125 211.737 25.4821 211.682 25.4485Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M209.824 29.173C209.865 28.824 209.977 28.4868 210.152 28.1818C210.273 27.8556 210.456 27.556 210.692 27.2998C210.652 27.6492 210.54 27.9867 210.363 28.291C210.244 28.6177 210.06 28.9175 209.824 29.173Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M208.509 33.1129C208.503 32.7616 208.569 32.4128 208.703 32.0881C208.774 31.7401 208.917 31.4109 209.124 31.1221C209.129 31.4728 209.065 31.821 208.935 32.1469C208.862 32.495 208.717 32.824 208.509 33.1129Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M207.742 37.1993C207.69 36.8506 207.709 36.4949 207.797 36.1535C207.816 35.803 207.906 35.4599 208.063 35.1455C208.118 35.4925 208.101 35.8471 208.012 36.1871C207.994 36.5396 207.902 36.8845 207.742 37.1993Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M207.321 41.332C207.246 40.9888 207.246 40.6336 207.321 40.2904C207.316 39.9385 207.385 39.5894 207.523 39.2656C207.596 39.609 207.596 39.9638 207.523 40.3072C207.527 40.6591 207.459 41.0079 207.321 41.332Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M206.874 45.4697C206.803 45.1248 206.803 44.7689 206.874 44.4239C206.88 44.0718 206.957 43.7245 207.102 43.4033C207.173 43.7483 207.173 44.1042 207.102 44.4491C207.098 44.8014 207.021 45.1491 206.874 45.4697Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M206.091 49.5605C206.06 49.2097 206.103 48.8563 206.217 48.5231C206.26 48.1745 206.375 47.8384 206.554 47.5361C206.585 47.8869 206.542 48.2403 206.428 48.5735C206.386 48.9224 206.271 49.2586 206.091 49.5605Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M204.62 53.4329C204.676 53.0875 204.793 52.7548 204.966 52.4501C205.072 52.1169 205.238 51.8055 205.454 51.5303C205.44 51.8829 205.342 52.227 205.168 52.5341C204.936 53.0675 204.675 53.4623 204.62 53.4329Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M202.24 56.8432C202.189 56.7928 202.489 56.4232 202.821 55.978C203.154 55.5328 203.491 55.1884 203.542 55.222C203.592 55.2556 203.348 55.642 202.994 56.1124C202.809 56.4156 202.549 56.6671 202.24 56.8432Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M198.958 59.3548C198.928 59.3002 199.32 59.044 199.8 58.7374C200.074 58.519 200.383 58.3486 200.715 58.2334C200.748 58.2796 200.411 58.6072 199.918 58.9222C199.639 59.1429 199.309 59.2915 198.958 59.3548Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M195.018 60.6523C195.333 60.5003 195.67 60.3997 196.017 60.3541C196.347 60.2395 196.695 60.1799 197.045 60.1777C196.756 60.3866 196.42 60.5208 196.067 60.5683C195.73 60.6844 195.369 60.7133 195.018 60.6523Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M191.875 60.5854C191.875 60.5224 192.128 60.5056 192.41 60.5434C192.692 60.5812 192.924 60.661 192.92 60.7198C192.916 60.7786 192.676 60.7996 192.381 60.7618C192.086 60.724 191.862 60.6442 191.875 60.5854Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M267.058 50.3369H244.841C244.457 50.3369 244.077 50.4123 243.722 50.5588C243.367 50.7053 243.045 50.92 242.773 51.1907C242.502 51.4613 242.287 51.7827 242.14 52.1363C241.993 52.4899 241.917 52.869 241.917 53.2517V67.5023C241.917 67.8851 241.993 68.2641 242.14 68.6178C242.287 68.9714 242.502 69.2928 242.773 69.5634C243.045 69.8341 243.367 70.0488 243.722 70.1953C244.077 70.3417 244.457 70.4171 244.841 70.4171H247.369V74.0123L252.13 70.4171H267.071C267.846 70.4171 268.59 70.11 269.138 69.5634C269.687 69.0168 269.995 68.2754 269.995 67.5023V53.2517C269.995 52.8679 269.919 52.4878 269.771 52.1334C269.623 51.7789 269.407 51.457 269.134 51.1862C268.861 50.9154 268.537 50.7009 268.181 50.5552C267.825 50.4095 267.443 50.3353 267.058 50.3369Z",
                    fill: "white"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M267.058 50.3372H267.247C267.435 50.3402 267.622 50.367 267.804 50.417C268.519 50.59 269.141 51.0306 269.539 51.6476C269.835 52.0911 270.002 52.6068 270.024 53.1386C270.024 53.7182 270.024 54.3398 270.024 55.0118C270.024 56.36 270.024 57.8972 270.024 59.6066C270.024 61.316 270.024 63.1934 270.024 65.2262V66.7802C270.024 67.0448 270.024 67.3052 270.024 67.5782C270.018 67.8627 269.974 68.1451 269.893 68.4182C269.72 68.9738 269.389 69.4676 268.94 69.8402C268.492 70.2127 267.945 70.4482 267.365 70.5182C262.731 70.5686 257.578 70.5434 252.079 70.556H252.143L247.386 74.1512L247.213 74.2814V74.063C247.213 72.9206 247.213 71.6984 247.213 70.4678L247.323 70.577H244.795C244.159 70.5627 243.544 70.3499 243.036 69.9687C242.528 69.5874 242.153 69.0568 241.963 68.4518C241.85 68.0562 241.805 67.6445 241.828 67.2338V64.8734C241.828 61.7528 241.828 58.7414 241.828 55.8686V53.7686C241.815 53.4144 241.838 53.0599 241.896 52.7102C242.004 52.1964 242.245 51.7198 242.596 51.3278C242.946 50.9358 243.393 50.642 243.893 50.4758C244.215 50.3704 244.552 50.3179 244.891 50.3204H245.861H252.981L263.291 50.3582H266.093H266.822H267.07C267.07 50.3582 266.986 50.3582 266.822 50.3582H266.093H263.291L252.968 50.4002H245.848C245.209 50.3507 244.566 50.4018 243.943 50.5514C243.476 50.7101 243.058 50.987 242.73 51.3551C242.402 51.7232 242.176 52.1699 242.073 52.6514C242.019 52.9888 241.999 53.3307 242.014 53.672C242.014 54.3692 242.014 55.079 242.014 55.772C242.014 58.6448 242.014 61.652 242.014 64.7768V67.2002C241.991 67.5881 242.034 67.9771 242.14 68.351C242.316 68.9128 242.665 69.4054 243.136 69.7595C243.608 70.1136 244.179 70.3114 244.769 70.325H247.462V70.4342C247.462 71.6648 247.462 72.887 247.462 74.0294L247.289 73.9412L252.046 70.3502L252.075 70.3292H252.113C257.59 70.3292 262.769 70.3544 267.378 70.3292C267.923 70.2658 268.438 70.0471 268.861 69.6991C269.284 69.3512 269.597 68.8889 269.763 68.3678C269.885 67.855 269.929 67.327 269.893 66.8012V65.2262C269.893 63.1934 269.893 61.316 269.893 59.6066C269.893 57.8972 269.893 56.36 269.893 55.0118C269.893 54.3398 269.893 53.714 269.893 53.1428C269.872 52.525 269.652 51.9303 269.267 51.4459C268.882 50.9614 268.351 50.6126 267.753 50.4506C267.525 50.3947 267.292 50.3568 267.058 50.3372Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M255.294 58.6992C255.294 58.779 253.609 63.4368 252.918 65.4192C252.886 65.5151 252.877 65.6172 252.893 65.7171C252.908 65.817 252.947 65.9118 253.006 65.9938C253.065 66.0758 253.143 66.1427 253.233 66.1888C253.323 66.2349 253.423 66.2591 253.525 66.2592H262.912C263.049 66.26 263.183 66.2167 263.294 66.1357C263.405 66.0548 263.487 65.9406 263.527 65.8098L265.756 58.7076L255.294 58.6992Z",
                    fill: theme.palette.primary.main
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M266.657 58.7286H254.017C253.987 58.7289 253.956 58.7213 253.929 58.7065C253.902 58.6917 253.879 58.6702 253.862 58.6441C253.846 58.618 253.836 58.5881 253.835 58.5573C253.833 58.5265 253.839 58.4958 253.853 58.4682L254.78 56.553C254.796 56.5227 254.819 56.4974 254.848 56.4796C254.877 56.4618 254.91 56.4523 254.944 56.4522H267.479C267.509 56.4518 267.539 56.459 267.566 56.473C267.592 56.4871 267.615 56.5075 267.632 56.5326C267.649 56.5576 267.659 56.5864 267.662 56.6164C267.664 56.6464 267.66 56.6765 267.648 56.7042L266.805 58.6194C266.793 58.6493 266.773 58.6753 266.747 58.6945C266.721 58.7138 266.69 58.7256 266.657 58.7286Z",
                    fill: theme.palette.primary.main
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    opacity: "0.4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M258.825 66.2507H257L259.941 58.7285H261.656L258.825 66.2507Z",
                        fill: "white"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    opacity: "0.4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M261.117 58.6949L259.158 58.7033L259.857 56.4521H261.816L261.117 58.6949Z",
                        fill: "white"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M266.207 58.7288C266.207 58.754 263.54 58.7708 260.249 58.7708C256.959 58.7708 254.292 58.7708 254.292 58.7288C254.292 58.6868 256.959 58.6826 260.249 58.6826C263.54 58.6826 266.207 58.7036 266.207 58.7288Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M260.354 55.5785C260.053 55.5603 259.762 55.4616 259.512 55.2929C259.259 55.1333 259.027 54.9485 258.774 54.7973C258.137 54.4312 257.383 54.3215 256.668 54.4907C256.632 54.4948 256.599 54.5111 256.575 54.5369C256.554 54.5692 256.545 54.6079 256.55 54.6461L256.609 57.2795C256.603 57.3707 256.625 57.4614 256.672 57.5399C256.719 57.5844 256.776 57.6174 256.838 57.6363C256.9 57.6553 256.966 57.6596 257.03 57.6491C257.454 57.6567 257.878 57.6187 258.294 57.5357C258.706 57.4534 259.091 57.2668 259.41 56.9939C259.554 56.8595 259.676 56.7083 259.832 56.5739C259.975 56.4392 260.162 56.359 260.358 56.3471L260.354 55.5785Z",
                    fill: theme.palette.primary.main
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M265.116 57.6491C265.231 56.5596 265.257 55.4627 265.196 54.3689C264.483 54.2194 263.741 54.3141 263.089 54.6377C262.428 54.9191 261.825 55.3097 261.151 55.5827L260.97 56.3345C261.193 56.3183 261.417 56.3742 261.606 56.4941C261.796 56.6167 261.974 56.7574 262.137 56.9141C262.521 57.2499 262.955 57.526 263.422 57.7331C263.892 57.9392 264.416 57.9921 264.918 57.8843C264.982 57.8778 265.041 57.846 265.082 57.7961C265.104 57.7504 265.116 57.7001 265.116 57.6491Z",
                    fill: theme.palette.primary.main
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    opacity: "0.3",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M260.354 55.5785C260.053 55.5603 259.762 55.4616 259.512 55.2929C259.259 55.1333 259.027 54.9485 258.774 54.7973C258.137 54.4312 257.383 54.3215 256.668 54.4907C256.632 54.4948 256.599 54.5111 256.575 54.5369C256.554 54.5692 256.545 54.6079 256.55 54.6461L256.609 57.2795C256.603 57.3707 256.625 57.4614 256.672 57.5399C256.719 57.5844 256.776 57.6174 256.838 57.6363C256.9 57.6553 256.966 57.6596 257.03 57.6491C257.454 57.6567 257.878 57.6187 258.294 57.5357C258.706 57.4534 259.091 57.2668 259.41 56.9939C259.554 56.8595 259.676 56.7083 259.832 56.5739C259.975 56.4392 260.162 56.359 260.358 56.3471L260.354 55.5785Z",
                        fill: "black"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M260.355 55.5791C260.356 55.5958 260.356 55.6127 260.355 55.6295V55.7765C260.355 55.9109 260.355 56.1041 260.355 56.3561C260.217 56.3581 260.084 56.4005 259.971 56.4779C259.835 56.5732 259.71 56.6846 259.6 56.8097C259.477 56.953 259.335 57.0801 259.179 57.1877C258.999 57.3052 258.803 57.3971 258.598 57.4607C258.133 57.6002 257.65 57.6668 257.165 57.6581C257.033 57.671 256.9 57.6567 256.773 57.6161C256.74 57.6015 256.711 57.5802 256.687 57.5534C256.663 57.5266 256.645 57.495 256.634 57.4607C256.616 57.3937 256.607 57.3243 256.609 57.2549C256.609 56.9861 256.609 56.7131 256.609 56.4149C256.609 55.9949 256.609 55.6043 256.579 55.2179C256.579 55.0247 256.579 54.8315 256.579 54.6467C256.569 54.5962 256.578 54.5438 256.605 54.4997C256.64 54.463 256.688 54.4406 256.739 54.4367C256.827 54.4152 256.915 54.3997 257.005 54.3905C257.344 54.3472 257.688 54.3643 258.02 54.4409C258.309 54.5096 258.586 54.6214 258.842 54.7727C259.074 54.9113 259.263 55.0625 259.444 55.1927C259.595 55.2965 259.756 55.3838 259.925 55.4531C260.031 55.4979 260.143 55.5289 260.258 55.5455H260.376H260.253C260.138 55.5318 260.025 55.5036 259.916 55.4615C259.745 55.3941 259.582 55.3067 259.432 55.2011C259.251 55.0835 259.057 54.9365 258.825 54.7811C258.278 54.464 257.642 54.3342 257.013 54.4115L256.748 54.4577C256.702 54.4577 256.655 54.4577 256.634 54.5081C256.613 54.5585 256.634 54.5837 256.634 54.6299C256.634 54.8147 256.634 55.0037 256.634 55.1969C256.634 55.5875 256.655 55.9865 256.664 56.3981C256.664 56.6753 256.664 56.9525 256.664 57.2381C256.662 57.3017 256.669 57.3653 256.685 57.4271C256.694 57.4564 256.709 57.4834 256.73 57.5066C256.75 57.5297 256.775 57.5484 256.803 57.5615C256.924 57.5995 257.051 57.6124 257.178 57.5993C257.658 57.6067 258.136 57.543 258.598 57.4103C258.8 57.3464 258.992 57.256 259.171 57.1415C259.326 57.0367 259.468 56.9125 259.592 56.7719C259.705 56.6487 259.831 56.5376 259.967 56.4401C260.092 56.3585 260.239 56.3161 260.388 56.3183C260.388 56.0705 260.388 55.8773 260.388 55.7429V55.5413L260.355 55.5791Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    opacity: "0.3",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M265.116 57.6491C265.231 56.5596 265.257 55.4627 265.196 54.3689C264.483 54.2194 263.741 54.3141 263.089 54.6377C262.428 54.9191 261.825 55.3097 261.151 55.5827L260.97 56.3345C261.193 56.3183 261.417 56.3742 261.606 56.4941C261.796 56.6167 261.974 56.7574 262.137 56.9141C262.521 57.2499 262.955 57.526 263.422 57.7331C263.892 57.9392 264.416 57.9921 264.918 57.8843C264.982 57.8778 265.041 57.846 265.082 57.7961C265.104 57.7504 265.116 57.7001 265.116 57.6491Z",
                        fill: "black"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M265.115 57.6494C265.121 57.6785 265.121 57.7084 265.115 57.7376C265.112 57.7566 265.104 57.7745 265.092 57.7898C265.081 57.8051 265.065 57.8175 265.048 57.8258C265.004 57.8526 264.955 57.8711 264.905 57.8804C264.583 57.9509 264.249 57.9509 263.927 57.8804C263.44 57.7668 262.982 57.5521 262.583 57.2504C262.465 57.1664 262.347 57.0782 262.234 56.9858L261.875 56.6918C261.746 56.591 261.604 56.5063 261.454 56.4398C261.303 56.3731 261.138 56.3456 260.974 56.36H260.944V56.3306C261.003 56.0912 261.062 55.8392 261.125 55.5788C261.45 55.4425 261.768 55.2897 262.078 55.121C262.576 54.8358 263.103 54.6021 263.649 54.4238C264.144 54.2664 264.673 54.2475 265.179 54.3692C265.231 55.1624 265.224 55.9584 265.158 56.7506C265.158 57.0362 265.12 57.2588 265.107 57.4142C265.107 57.4898 265.107 57.5486 265.107 57.5906V57.4142C265.107 57.2588 265.132 57.032 265.149 56.7464C265.207 55.9565 265.207 55.1633 265.149 54.3734C264.651 54.2568 264.131 54.2786 263.645 54.4364C263.1 54.6123 262.574 54.8446 262.078 55.1294C261.757 55.2974 261.441 55.4612 261.125 55.5914C261.062 55.8518 260.999 56.108 260.944 56.3474L260.919 56.3222C261.091 56.3048 261.264 56.3338 261.42 56.4062C261.572 56.4708 261.714 56.5571 261.842 56.6624C261.968 56.759 262.082 56.8598 262.2 56.9564C262.318 57.053 262.432 57.137 262.55 57.221C262.944 57.5234 263.397 57.7395 263.881 57.8552C264.2 57.9269 264.531 57.9269 264.85 57.8552C264.899 57.8501 264.947 57.8344 264.989 57.809C265.005 57.8008 265.019 57.7896 265.031 57.7759C265.042 57.7622 265.051 57.7463 265.056 57.7292C265.115 57.683 265.111 57.6494 265.115 57.6494Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M260.434 56.5361C260.434 56.5361 260.236 56.5361 259.95 57.0149C259.663 57.4937 258.728 59.9087 258.728 59.9087L260.94 61.1393L260.965 56.7503L260.434 56.5361Z",
                    fill: theme.palette.primary.main
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M261.151 56.7001L261.871 59.7283L263.506 58.4683C263.506 58.4683 262.288 56.7043 261.29 56.4775L261.151 56.7001Z",
                    fill: theme.palette.primary.main
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    opacity: "0.3",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M260.434 56.5361C260.434 56.5361 260.236 56.5361 259.95 57.0149C259.663 57.4937 258.728 59.9087 258.728 59.9087L260.94 61.1393L260.965 56.7503L260.434 56.5361Z",
                        fill: "black"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    opacity: "0.3",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M261.151 56.7001L261.871 59.7283L263.506 58.4683C263.506 58.4683 262.288 56.7043 261.29 56.4775L261.151 56.7001Z",
                        fill: "black"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M260.435 56.5361H260.473L260.574 56.5739L260.97 56.7293C260.97 57.5273 260.97 59.1653 260.97 61.1183V61.1561H260.94L260.321 60.8117L258.699 59.9255C259.12 58.8839 259.474 57.9935 259.76 57.3761C259.86 57.1278 260.003 56.8989 260.182 56.6999C260.231 56.649 260.29 56.6077 260.355 56.5781H260.409H260.359C260.296 56.6127 260.239 56.6566 260.19 56.7083C260.012 56.9079 259.869 57.1366 259.769 57.3845C259.487 58.0019 259.128 58.8965 258.72 59.9381V59.9129L260.317 60.7991L260.936 61.1435H260.902C260.902 59.1905 260.928 57.5525 260.94 56.7545L260.548 56.5907L260.447 56.5487L260.435 56.5361Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M261.151 56.6998L261.176 56.6577L261.273 56.4856C261.652 56.5991 261.997 56.8023 262.28 57.0777C262.74 57.4958 263.151 57.9634 263.506 58.4722L262.756 59.0518L261.872 59.7363H261.846V59.707C261.64 58.8334 261.463 58.0731 261.336 57.5313C261.273 57.2625 261.227 57.0484 261.193 56.8972L261.155 56.7292V56.6746C261.155 56.6746 261.155 56.6746 261.155 56.7334L261.197 56.9013C261.235 57.0525 261.286 57.2667 261.353 57.5313L261.876 59.6986H261.842L262.727 59.0098L263.477 58.4344V58.4596C263.123 57.9545 262.716 57.4884 262.263 57.0694C261.986 56.7933 261.647 56.5874 261.273 56.4688L261.172 56.6325L261.143 56.6746C261.143 56.6746 261.155 56.6998 261.151 56.6998Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M260.249 56.1461H259.963C259.777 56.1461 259.541 56.1461 259.242 56.1671C259.004 56.1843 258.766 56.2137 258.53 56.2553C258.433 56.2789 258.335 56.2958 258.235 56.3057C258.235 56.3057 258.261 56.3057 258.311 56.2805L258.522 56.2259C258.758 56.1753 258.997 56.1402 259.238 56.1209C259.479 56.1042 259.722 56.1042 259.963 56.1209H260.182C260.205 56.1264 260.228 56.1349 260.249 56.1461Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M260.228 55.8601C260.137 55.8438 260.047 55.8228 259.958 55.7971C259.741 55.7493 259.522 55.7129 259.301 55.6879C259.04 55.6585 258.804 55.6501 258.631 55.6459C258.539 55.6533 258.446 55.6533 258.353 55.6459H258.429H258.631C258.856 55.6407 259.081 55.6505 259.305 55.6753C259.528 55.7013 259.749 55.742 259.967 55.7971L260.161 55.8601C260.207 55.8601 260.232 55.8601 260.228 55.8601Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M263.797 55.8224C263.797 55.8224 263.666 55.7972 263.46 55.7636C263.181 55.719 262.899 55.7021 262.617 55.7132C262.342 55.7253 262.069 55.7675 261.804 55.8392C261.597 55.8938 261.475 55.9442 261.475 55.9358C261.5 55.9194 261.527 55.9066 261.555 55.898C261.61 55.8728 261.694 55.8434 261.795 55.8098C262.069 55.7267 262.352 55.6801 262.638 55.6712C262.92 55.6572 263.203 55.6784 263.481 55.7342C263.586 55.7552 263.67 55.7762 263.725 55.793L263.797 55.8224Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M263.489 56.5071C263.463 56.5104 263.436 56.5104 263.409 56.5071H263.19C262.71 56.4993 262.234 56.4171 261.779 56.2635L261.577 56.1879L261.505 56.1543C261.601 56.175 261.695 56.2016 261.787 56.2341C262.016 56.3016 262.248 56.3563 262.482 56.3979C262.756 56.4441 263.009 56.4651 263.19 56.4777C263.29 56.4819 263.39 56.4917 263.489 56.5071Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M261.513 56.2799C261.521 56.1283 261.504 55.9764 261.462 55.8305C261.433 55.7045 261.437 55.5869 261.298 55.4861C261.234 55.4513 261.163 55.431 261.09 55.4267C261.017 55.4223 260.944 55.434 260.877 55.4609C260.797 55.3391 260.611 55.3517 260.455 55.4105C260.389 55.4435 260.332 55.4915 260.288 55.5506C260.245 55.6097 260.215 55.6782 260.203 55.7507C260.18 55.8913 260.192 56.0353 260.236 56.1707C260.287 56.3784 260.401 56.5659 260.561 56.7083C260.634 56.7698 260.722 56.8116 260.817 56.83C260.911 56.8484 261.009 56.8426 261.1 56.8133C261.215 56.7767 261.316 56.7061 261.39 56.6108C261.464 56.5155 261.507 56.4001 261.513 56.2799Z",
                    fill: theme.palette.primary.main
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    opacity: "0.3",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M261.513 56.2799C261.521 56.1283 261.504 55.9764 261.462 55.8305C261.433 55.7045 261.437 55.5869 261.298 55.4861C261.234 55.4513 261.163 55.431 261.09 55.4267C261.017 55.4223 260.944 55.434 260.877 55.4609C260.797 55.3391 260.611 55.3517 260.455 55.4105C260.389 55.4435 260.332 55.4915 260.288 55.5506C260.245 55.6097 260.215 55.6782 260.203 55.7507C260.18 55.8913 260.192 56.0353 260.236 56.1707C260.287 56.3784 260.401 56.5659 260.561 56.7083C260.634 56.7698 260.722 56.8116 260.817 56.83C260.911 56.8484 261.009 56.8426 261.1 56.8133C261.215 56.7767 261.316 56.7061 261.39 56.6108C261.464 56.5155 261.507 56.4001 261.513 56.2799Z",
                        fill: "black"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M261.513 56.2802C261.513 56.2802 261.513 56.2802 261.513 56.3264C261.509 56.3705 261.5 56.4141 261.488 56.4566C261.462 56.5362 261.42 56.6096 261.364 56.6718C261.309 56.7341 261.24 56.7838 261.163 56.8178C261.057 56.8658 260.938 56.8818 260.822 56.864C260.691 56.8394 260.571 56.7731 260.481 56.675C260.381 56.5686 260.303 56.4428 260.253 56.3054C260.195 56.1599 260.167 56.0043 260.169 55.8476C260.17 55.7591 260.193 55.6722 260.236 55.595C260.28 55.5179 260.342 55.453 260.418 55.4066C260.491 55.367 260.574 55.3468 260.658 55.3478C260.7 55.3463 260.741 55.3551 260.779 55.3734C260.816 55.3917 260.848 55.419 260.873 55.4528H260.847C260.936 55.4132 261.034 55.4015 261.13 55.4192C261.218 55.4289 261.3 55.469 261.361 55.5326C261.414 55.5893 261.447 55.6616 261.454 55.7384C261.454 55.8056 261.484 55.8686 261.492 55.9232C261.512 56.0115 261.522 56.1016 261.522 56.192C261.524 56.2158 261.524 56.2397 261.522 56.2634C261.523 56.2717 261.523 56.2803 261.522 56.2886C261.522 56.2886 261.522 56.255 261.522 56.192C261.516 56.1043 261.503 56.0172 261.484 55.9316C261.484 55.8728 261.454 55.814 261.442 55.7468C261.433 55.6749 261.402 55.6074 261.353 55.5536C261.293 55.4989 261.218 55.4637 261.138 55.4528C261.05 55.4389 260.959 55.4505 260.877 55.4864C260.856 55.4583 260.829 55.4358 260.797 55.4211C260.766 55.4064 260.731 55.4 260.696 55.4024C260.62 55.4005 260.544 55.4179 260.477 55.4528C260.405 55.4966 260.346 55.5585 260.306 55.6322C260.266 55.706 260.246 55.789 260.249 55.8728C260.25 56.0165 260.277 56.1589 260.329 56.2928C260.377 56.4246 260.45 56.5459 260.544 56.6498C260.628 56.7456 260.743 56.8094 260.869 56.8304C260.977 56.8507 261.088 56.8375 261.189 56.7926C261.262 56.7616 261.329 56.7157 261.384 56.6579C261.439 56.6001 261.482 56.5316 261.509 56.4566C261.515 56.398 261.516 56.3391 261.513 56.2802Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M260.447 56.612C260.447 56.612 260.502 56.5616 260.582 56.4776C260.684 56.3654 260.763 56.234 260.814 56.0912C260.863 55.9483 260.883 55.7969 260.873 55.646C260.873 55.5326 260.848 55.4612 260.873 55.457C260.901 55.5163 260.919 55.5804 260.923 55.646C260.939 55.8005 260.922 55.9566 260.873 56.1038C260.82 56.253 260.733 56.3881 260.62 56.4986C260.571 56.5484 260.512 56.5871 260.447 56.612Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M261.492 55.9355C261.482 55.9944 261.462 56.0512 261.433 56.1036C261.372 56.2338 261.289 56.353 261.188 56.4563C261.086 56.5586 260.966 56.6424 260.835 56.7041C260.782 56.7324 260.725 56.7509 260.666 56.7587C260.845 56.6732 261.009 56.5614 261.155 56.427C261.287 56.2778 261.4 56.1127 261.492 55.9355Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M252.88 61.2532C252.88 61.2532 251.093 61.2952 248.886 61.2952C246.678 61.2952 244.896 61.2742 244.896 61.2532C244.896 61.2322 246.682 61.207 248.886 61.207C251.089 61.207 252.88 61.228 252.88 61.2532Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M251.738 63.5677C251.738 63.5887 250.761 63.6097 249.56 63.6097C248.359 63.6097 247.386 63.6097 247.386 63.5677C247.386 63.5257 248.359 63.5215 249.56 63.5215C250.761 63.5215 251.738 63.5425 251.738 63.5677Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M245.73 63.714C245.482 63.7571 245.231 63.7712 244.98 63.756C244.728 63.7711 244.475 63.757 244.226 63.714C244.475 63.671 244.728 63.6569 244.98 63.672C245.231 63.6567 245.482 63.6708 245.73 63.714Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M249.505 58.7373C248.344 58.7989 247.181 58.7989 246.021 58.7373C246.021 58.7373 246.8 58.6953 247.761 58.6953C248.721 58.6953 249.505 58.7163 249.505 58.7373Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M252.425 58.6995C251.773 58.7555 251.118 58.7555 250.466 58.6995C251.117 58.6379 251.773 58.6379 252.425 58.6995Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M253.007 56.3519C252.116 56.4079 251.222 56.4079 250.331 56.3519C251.222 56.2903 252.116 56.2903 253.007 56.3519Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M249.505 66.0195C249.961 66.0195 250.331 66.0007 250.331 65.9775C250.331 65.9543 249.961 65.9355 249.505 65.9355C249.049 65.9355 248.679 65.9543 248.679 65.9775C248.679 66.0007 249.049 66.0195 249.505 66.0195Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M57.6135 48.8706L53.9732 47.8794C51.5009 49.3987 48.548 49.9412 45.6949 49.4003C42.8417 48.8594 40.2948 47.2742 38.5546 44.9563C36.8145 42.6384 36.0071 39.7554 36.2911 36.8742C36.5752 33.993 37.9301 31.3219 40.0896 29.386C42.249 27.4501 45.0568 26.3894 47.961 26.4125C50.8652 26.4355 53.6557 27.5407 55.784 29.5106C57.9123 31.4805 59.2243 34.1728 59.4623 37.0582C59.7003 39.9435 58.8469 42.8133 57.07 45.1032L57.6135 48.8706Z",
                    fill: "white"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M57.6133 48.871C57.6133 48.871 57.6133 48.7828 57.5712 48.619C57.5291 48.4552 57.5038 48.199 57.4574 47.8966C57.3563 47.2582 57.2131 46.3258 57.0361 45.1162L57.1119 45.1498C57.1027 45.1581 57.0907 45.1627 57.0782 45.1627C57.0658 45.1627 57.0538 45.1581 57.0445 45.1498C57.0384 45.1413 57.035 45.131 57.035 45.1204C57.035 45.1099 57.0384 45.0996 57.0445 45.091C58.2063 43.5703 58.9733 41.7871 59.2776 39.8998C59.4726 38.6791 59.4655 37.4348 59.2565 36.2164C59.005 34.6455 58.4276 33.1441 57.5612 31.8081C56.6948 30.4721 55.5584 29.331 54.2246 28.4575C52.8908 27.584 51.3889 26.9974 49.8148 26.7352C48.2407 26.4729 46.6291 26.5408 45.0829 26.9344C43.2794 27.3764 41.6144 28.2583 40.2375 29.5006C39.5383 30.1237 38.9172 30.8288 38.3879 31.6006C37.8733 32.3581 37.4491 33.1728 37.1239 34.0282C36.5029 35.6843 36.2695 37.4598 36.4413 39.2194C36.647 41.149 37.3382 42.9955 38.4509 44.5877C39.5636 46.1798 41.0617 47.466 42.8063 48.3269C44.5508 49.1878 46.4851 49.5955 48.4299 49.5122C50.3747 49.4289 52.2669 48.8573 53.9309 47.8504C53.9417 47.8462 53.9537 47.8462 53.9646 47.8504L56.6527 48.6022L57.3521 48.8038L57.5965 48.8752L57.369 48.8248L56.678 48.6484L53.9435 47.9428H53.9772C52.3272 48.9706 50.4427 49.5645 48.4999 49.669C45.5038 49.8222 42.5628 48.8253 40.2815 46.8832C38.0002 44.9411 36.5521 42.2016 36.2349 39.2278C36.0576 37.4358 36.294 35.627 36.9259 33.94C37.2497 33.0695 37.6739 32.2393 38.1899 31.4662C38.7288 30.683 39.3612 29.968 40.0732 29.3368C41.4749 28.0737 43.1685 27.1762 45.0028 26.7244C46.7503 26.2784 48.5779 26.2439 50.3411 26.6236C51.935 26.9715 53.4387 27.6468 54.7561 28.6064C56.0735 29.5661 57.1758 30.789 57.9925 32.197C58.7043 33.424 59.1841 34.7707 59.4082 36.1702C59.6147 37.4049 59.6147 38.6652 59.4082 39.8998C59.0873 41.8119 58.2922 43.6136 57.0951 45.1414L57.0277 45.0742C57.032 45.0697 57.0372 45.066 57.043 45.0635C57.0488 45.061 57.0551 45.0597 57.0614 45.0597C57.0677 45.0597 57.0739 45.061 57.0797 45.0635C57.0855 45.066 57.0907 45.0697 57.0951 45.0742C57.2594 46.3006 57.3858 47.2456 57.4701 47.8966C57.508 48.2032 57.5417 48.4384 57.5628 48.6106C57.5838 48.7828 57.6133 48.871 57.6133 48.871Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M46.347 32.6007L46.743 38.8377C46.759 39.0838 46.8646 39.3156 47.0399 39.4896C47.2153 39.6636 47.4483 39.7678 47.6952 39.7827C47.9555 39.7993 48.2121 39.7151 48.4115 39.5476C48.6109 39.3801 48.7377 39.1423 48.7654 38.8839L49.4606 32.6175C49.4732 32.5053 49.4617 32.3918 49.4268 32.2845C49.3919 32.1772 49.3345 32.0785 49.2584 31.995C49.1822 31.9116 49.0891 31.8453 48.9852 31.8005C48.8813 31.7557 48.7691 31.7336 48.6559 31.7355H47.1307C47.0208 31.7368 46.9125 31.7607 46.8124 31.8057C46.7123 31.8508 46.6226 31.916 46.549 31.9972C46.4754 32.0785 46.4195 32.174 46.3847 32.2779C46.3499 32.3817 46.3371 32.4916 46.347 32.6007Z",
                    fill: theme.palette.primary.main
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M49.3426 43.2893C49.2475 43.5745 49.0696 43.8252 48.8316 44.0097C48.5936 44.1942 48.306 44.3042 48.0053 44.3259C47.7046 44.3476 47.4041 44.2799 47.142 44.1314C46.8798 43.983 46.6676 43.7604 46.5323 43.4918C46.397 43.2232 46.3446 42.9206 46.3817 42.6224C46.4188 42.3241 46.5438 42.0434 46.7408 41.8159C46.9378 41.5884 47.1981 41.4242 47.4887 41.3441C47.7793 41.264 48.0872 41.2715 48.3735 41.3657C48.564 41.4284 48.7402 41.5279 48.892 41.6586C49.0439 41.7892 49.1683 41.9485 49.2584 42.1271C49.3484 42.3058 49.4021 42.5004 49.4166 42.6999C49.4311 42.8993 49.4059 43.0996 49.3426 43.2893Z",
                    fill: theme.palette.primary.main
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M69.2629 64.567C68.8962 61.7672 68.9217 58.9303 69.3387 56.1376L66.2756 53.1094C62.8207 53.1094 60.9289 55.6546 60.3095 58.5022C59.8124 60.7912 60.7604 63.1222 61.7926 65.2222C62.3572 66.3814 63.2336 67.4776 63.2294 68.767C63.2294 69.9598 62.4626 71.0014 61.78 71.9842C60.9765 73.0758 60.3312 74.2748 59.8629 75.5458C59.3916 76.8259 59.3327 78.2207 59.6944 79.5358C60.0272 80.6194 60.714 81.577 60.9584 82.6774C61.2028 83.7778 60.8446 85.1974 59.7534 85.5082C60.2563 85.7971 60.8437 85.9048 61.4168 85.813C61.9899 85.7212 62.5139 85.4356 62.9007 85.0042C62.9805 85.9161 62.6941 86.8224 62.1044 87.5242C63.4264 87.7874 64.7994 87.5588 65.9638 86.8816C67.8851 85.6846 68.6056 83.2864 69.1491 81.094C69.8317 78.3346 70.4679 75.529 70.4131 72.694C70.3626 69.9472 69.621 67.276 69.2629 64.567Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M69.0438 52.0803L68.5761 52.1307C68.3175 51.9252 68.0007 51.8057 67.6704 51.7891C67.3401 51.7725 67.0129 51.8597 66.7349 52.0383C66.1858 52.4135 65.7897 52.9722 65.6183 53.6133C65.4098 54.3984 65.3078 55.2078 65.315 56.0199C65.2897 56.7129 65.315 57.5109 65.8585 57.9435C66.1094 58.112 66.4069 58.1978 66.7093 58.1887C67.0117 58.1797 67.3035 58.0763 67.5438 57.8931C68.0158 57.5145 68.3611 57.0019 68.534 56.4231C69.0227 55.0623 69.0353 53.5629 69.0438 52.0803Z",
                    fill: theme.palette.primary.main
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M90.2329 70.8789L93.5783 78.8589C93.5783 78.8589 96.5908 84.3483 97.9011 89.0019C98.4489 90.9675 99.0092 93.0549 96.7593 94.2351C94.5094 95.4153 93.3887 95.1759 93.1864 95.1759H93.1401C92.4602 95.1797 91.799 94.9544 91.2637 94.5367C90.7283 94.1189 90.3502 93.5331 90.1907 92.8743L85.6108 74.0877L90.2329 70.8789Z",
                    fill: "#FFBE9D"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M88.5516 56.3052C88.4443 55.3236 88.2669 54.351 88.0207 53.3946C87.5994 51.7146 87.4013 50.0346 86.9042 48.384C86.407 46.7334 85.5896 45.1416 84.2371 44.0874C82.8846 43.0332 80.108 41.937 76.6531 43.7934L74.4116 46.7334C76.4576 52.9516 79.4105 58.8359 83.1754 64.197C83.353 64.5152 83.6295 64.7672 83.9632 64.9152C84.4394 65.0664 84.9323 64.7808 85.3494 64.4952C86.4479 63.7115 87.3446 62.6795 87.9659 61.4838C88.6864 60.2742 88.7538 57.729 88.5516 56.3052Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M72.7809 47.7838L78.7891 45.3604L80.3606 45.5326C83.8956 45.5326 86.352 49.405 86.3899 52.2526C86.4321 55.4236 86.3562 59.296 85.859 61.6354C84.8605 66.3604 81.1865 66.7804 81.1865 66.7804C81.1865 66.7804 81.4856 70.2999 81.5235 71.8792C81.5909 74.7141 78.9955 74.7981 76.1684 74.7393C74.8643 74.713 73.6223 74.1795 72.7075 73.2527C71.7927 72.3259 71.2777 71.0793 71.2725 69.7792L71.2051 49.4008C71.2199 48.9844 71.3893 48.5885 71.6805 48.2897C71.9717 47.9909 72.3638 47.8106 72.7809 47.7838Z",
                    fill: "#FFBE9D"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M85.775 54.1081C85.695 54.1837 85.2526 53.8226 84.5953 53.789C83.938 53.7554 83.4408 54.0619 83.3734 53.9779C83.306 53.8939 83.424 53.8015 83.6431 53.6587C83.9371 53.4778 84.2798 53.3913 84.6248 53.4109C84.9664 53.4257 85.2943 53.5493 85.5601 53.7637C85.754 53.9275 85.8172 54.0745 85.775 54.1081Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M81.1232 59.0146C81.4739 58.9225 81.835 58.8759 82.1976 58.876C82.3662 58.876 82.5263 58.8424 82.56 58.729C82.5829 58.5573 82.552 58.3827 82.4715 58.2292C82.3367 57.8176 82.1962 57.385 82.0502 56.9314C81.4519 55.0834 81.0305 53.5714 81.1022 53.5462C81.1738 53.521 81.7215 54.9994 82.3198 56.8474L82.7412 58.1494C82.8346 58.358 82.8539 58.592 82.7959 58.813C82.7684 58.8711 82.7279 58.9222 82.6775 58.9622C82.6271 59.0023 82.5682 59.0302 82.5052 59.044C82.4108 59.0618 82.3148 59.0702 82.2187 59.0692C81.8527 59.0977 81.4845 59.0794 81.1232 59.0146Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M81.1867 66.7797C78.9447 66.6992 76.7689 66.0014 74.9004 64.7637C74.9004 64.7637 76.4298 68.1237 81.2204 67.9305L81.1867 66.7797Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M80.5588 60.4421C80.1121 60.2111 79.4928 59.7701 79.3622 59.7617C79.0672 59.7617 79.1262 60.1103 78.9408 60.3539C78.8509 60.4826 78.7989 60.6338 78.7907 60.7904C78.7825 60.947 78.8185 61.1028 78.8945 61.2401C79.0113 61.3934 79.1669 61.5131 79.3453 61.5869C79.5237 61.6607 79.7185 61.686 79.9099 61.6601C80.2343 61.5971 80.3649 61.3367 80.6051 61.1099C80.7345 60.981 80.8516 60.8404 80.9548 60.6899C81.0096 60.6395 80.6177 60.5219 80.5588 60.4421Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M85.3368 51.8108C85.2104 51.9536 84.768 51.7772 84.2244 51.7394C83.6809 51.7016 83.2133 51.7898 83.1163 51.6302C83.0742 51.5504 83.1543 51.4076 83.3607 51.2774C83.6386 51.117 83.9595 51.0466 84.2792 51.0758C84.5982 51.1002 84.9022 51.2203 85.1514 51.4202C85.3326 51.584 85.3915 51.7394 85.3368 51.8108Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M76.7291 53.7345C76.8007 53.8143 77.2684 53.4783 77.9257 53.4867C78.5829 53.4951 79.0633 53.8311 79.1349 53.7513C79.2065 53.6715 79.0928 53.5707 78.8863 53.4195C78.6043 53.2196 78.2675 53.1111 77.9215 53.1087C77.5793 53.1023 77.2441 53.2053 76.965 53.4027C76.7628 53.5539 76.6827 53.6967 76.7291 53.7345Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M76.6574 51.7361C76.7712 51.8873 77.2262 51.7361 77.7698 51.7361C78.3133 51.7361 78.7725 51.8453 78.8821 51.6941C78.9284 51.6185 78.8568 51.4673 78.6588 51.3245C78.3901 51.1517 78.0759 51.0627 77.7562 51.0686C77.4365 51.0746 77.1259 51.1754 76.8639 51.3581C76.6827 51.5135 76.6069 51.6605 76.6574 51.7361Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M78.0899 44.869C76.5731 44.2558 74.2474 44.449 72.9412 45.4528C71.6529 46.489 70.792 47.9616 70.5228 49.5898C70.2237 51.1984 70.6239 53.5798 71.0495 55.1548C73.5101 51.9964 76.0423 48.3508 78.4186 45.1294L78.0899 44.869Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M71.7148 57.4136C71.7148 57.0608 71.3651 56.2082 71.0154 56.1536C70.0884 55.9604 68.4031 55.952 68.2683 58.3166C68.0829 61.5464 71.3777 61.0676 71.3904 60.9752C71.403 60.8828 71.6558 58.6316 71.7148 57.4136Z",
                    fill: "#FFBE9D"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M70.8976 59.6779C70.8976 59.6779 70.8386 59.7115 70.7417 59.7493C70.6065 59.8035 70.4555 59.8035 70.3204 59.7493C69.9833 59.6023 69.7263 59.0437 69.7431 58.4599C69.7515 58.1819 69.8221 57.9093 69.9496 57.6619C69.9841 57.5609 70.0428 57.4699 70.1207 57.3967C70.1985 57.3235 70.2931 57.2704 70.3962 57.2419C70.4625 57.2275 70.5318 57.2374 70.5914 57.2698C70.651 57.3022 70.6969 57.3549 70.7206 57.4183C70.7586 57.5107 70.7206 57.5737 70.7543 57.5779C70.788 57.5821 70.826 57.5275 70.8091 57.3931C70.7912 57.3131 70.7502 57.2401 70.6911 57.1831C70.6491 57.1469 70.6002 57.1194 70.5475 57.1021C70.4947 57.0848 70.439 57.078 70.3836 57.0823C70.2487 57.1017 70.121 57.1551 70.0126 57.2374C69.9043 57.3197 69.8188 57.4282 69.7642 57.5527C69.6109 57.8253 69.5257 58.1307 69.5156 58.4431C69.5156 59.0941 69.8021 59.7031 70.2614 59.8837C70.347 59.9142 70.4384 59.9251 70.5288 59.9157C70.6193 59.9062 70.7064 59.8766 70.7838 59.8291C70.8892 59.7535 70.9102 59.6821 70.8976 59.6779Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M79.257 43.4324L79.0674 43.739C78.6228 43.3718 78.1057 43.1019 77.5497 42.9471C76.9936 42.7922 76.411 42.7558 75.8399 42.8402C74.5782 43.0442 73.3844 43.5485 72.3597 44.3102C70.3564 45.6113 68.7996 47.4914 67.8978 49.6988C67.5983 50.7537 67.416 51.8382 67.3543 52.9328C66.8908 55.2764 66.5495 58.4642 67.0299 60.2198C67.3122 61.2214 67.7562 62.1704 68.3444 63.0296C69.1871 63.962 69.6843 64.7642 70.3458 65.1296C70.6573 65.3563 70.9887 65.5545 71.3359 65.7218C71.3359 65.5202 71.3359 65.3018 71.357 65.1254C71.8963 64.6214 73.6574 62.7398 74.1293 59.09C74.2894 57.83 74.5844 54.1298 75.2627 53.0462C76.9017 50.4296 77.8792 48.0062 79.0842 45.3014L79.5055 45.3728C79.5055 45.3728 85.973 50.2196 86.8072 54.8522C86.8241 54.8312 87.5951 42.2606 79.257 43.4324Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M76.6824 56.8889C77.3501 56.8137 78.0253 56.9348 78.6247 57.2375C78.8143 57.3341 79.025 57.5105 78.9702 57.7163C78.9154 57.9221 78.7301 57.9557 78.5489 57.9977C77.7957 58.1739 77.0144 58.1954 76.2526 58.0607C76.004 58.0187 75.7175 57.9221 75.6417 57.6827C75.6203 57.5783 75.6323 57.4698 75.6762 57.3725C75.72 57.2753 75.7935 57.1943 75.8861 57.1409C76.1295 57.0096 76.3952 56.9242 76.6697 56.8889",
                    fill: "#FFA789"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M83.5335 57.271C83.8733 57.1318 84.2386 57.0651 84.6058 57.0752C84.973 57.0853 85.334 57.1721 85.6655 57.3298C85.743 57.3635 85.8131 57.412 85.8719 57.4726C85.9001 57.5041 85.9195 57.5423 85.9284 57.5835C85.9372 57.6248 85.9352 57.6676 85.9225 57.7078C85.8941 57.7547 85.8548 57.7941 85.8078 57.8227C85.7609 57.8512 85.7077 57.868 85.6528 57.8716C85.0228 58.016 84.3665 58.0001 83.7442 57.8254C83.675 57.8137 83.609 57.7879 83.5503 57.7496C83.4915 57.7113 83.4414 57.6613 83.4029 57.6028C83.3439 57.481 83.3397 57.3592 83.5335 57.271Z",
                    fill: "#FFA789"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M84.1148 55.8599C84.1125 56.0227 84.1743 56.1798 84.287 56.2976C84.3996 56.4154 84.5541 56.4844 84.7173 56.4899C84.7973 56.4968 84.8778 56.4876 84.9541 56.4628C85.0304 56.438 85.1009 56.3982 85.1614 56.3457C85.222 56.2931 85.2713 56.229 85.3065 56.1571C85.3416 56.0852 85.3619 56.007 85.3662 55.9271C85.3685 55.7644 85.3066 55.6073 85.194 55.4895C85.0813 55.3717 84.9268 55.3026 84.7637 55.2971C84.6837 55.2903 84.6032 55.2995 84.5269 55.3243C84.4506 55.3491 84.3801 55.3889 84.3195 55.4414C84.259 55.4939 84.2097 55.558 84.1745 55.6299C84.1393 55.7018 84.119 55.78 84.1148 55.8599Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M77.7905 55.6203C77.7893 55.7839 77.8519 55.9415 77.9652 56.0598C78.0784 56.1782 78.2333 56.248 78.3973 56.2545C78.4773 56.2602 78.5577 56.25 78.6338 56.2246C78.7098 56.1991 78.7801 56.1588 78.8404 56.1061C78.9008 56.0533 78.95 55.9892 78.9853 55.9173C79.0206 55.8455 79.0413 55.7674 79.0461 55.6875C79.0462 55.5247 78.9831 55.3682 78.87 55.2507C78.7569 55.1333 78.6026 55.064 78.4394 55.0575C78.3596 55.0512 78.2793 55.0609 78.2032 55.0859C78.1272 55.1109 78.0569 55.1508 77.9965 55.2032C77.9361 55.2556 77.8867 55.3195 77.8514 55.3911C77.816 55.4627 77.7953 55.5406 77.7905 55.6203Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M80.8958 60.6855C80.3344 60.4584 79.7968 60.1771 79.2905 59.8455H79.4127C79.2697 59.9546 79.1459 60.0866 79.0461 60.236C78.9681 60.3511 78.9161 60.4817 78.8936 60.6187C78.871 60.7557 78.8785 60.896 78.9155 61.0298C79.0024 61.241 79.1688 61.4098 79.379 61.5002C79.5864 61.5846 79.808 61.6287 80.032 61.6305C80.032 61.6305 79.7624 61.8069 79.32 61.6305C79.1872 61.5865 79.0655 61.5146 78.963 61.4197C78.8605 61.3247 78.7797 61.209 78.7259 61.0802C78.6723 60.9183 78.6566 60.7464 78.6799 60.5775C78.7033 60.4086 78.7652 60.2472 78.8607 60.1058C78.9763 59.9431 79.1188 59.801 79.2821 59.6858L79.341 59.6396L79.4042 59.6774C79.9361 59.9593 80.4362 60.2973 80.8958 60.6855Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M81.7134 69.493C81.587 69.1948 88.1598 75.1462 89.98 80.1568C91.1723 83.437 93.3717 94.6846 93.4222 94.714L94.088 102.135L75.1701 102.837L74.6645 101.505L73.2657 97.7254L71.3149 92.005C71.3149 92.005 66.2842 83.773 65.3572 80.665C64.9327 79.5328 64.855 78.3006 65.1339 77.1244C65.4331 75.4066 66.6255 73.7014 67.7883 72.3952L70.7629 69.0352C78.1236 72.3112 82.1305 75.4276 81.7134 69.493Z",
                    fill: theme.palette.primary.main
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    opacity: "0.3",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M90.8184 95.6C90.4927 96.4509 89.9904 97.2236 89.3444 97.8676C88.6984 98.5116 87.9233 99.0123 87.0697 99.337C86.2162 99.6618 85.3035 99.8031 84.3913 99.7519C83.4792 99.7007 82.5881 99.4581 81.7766 99.0399C79.9227 98.0823 78.6587 96.3183 77.222 94.8105C75.5366 93.0549 73.569 91.6017 71.8331 89.9007C70.0972 88.1997 68.5636 86.1627 68.1001 83.7812C70.5385 86.635 73.489 89.0108 76.8006 90.7869C81.271 93.1851 86.1879 93.5169 90.8184 95.6Z",
                        fill: "black"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M89.8702 59.283C89.8702 59.283 90.1104 58.905 90.5949 59.6022C91.0795 60.2994 92.2002 65.3604 92.2002 65.3604L90.2326 70.8792L87.7046 73.5084L89.8702 59.283Z",
                    fill: "#FFBE9D"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M90.2328 70.8793C90.2541 70.8502 90.2698 70.8174 90.2792 70.7827L90.3929 70.4929C90.4983 70.2241 90.6373 69.8503 90.8143 69.3883C91.1724 68.4097 91.6569 67.0405 92.2763 65.3857V65.3605C92.0656 64.3945 91.8213 63.3361 91.5348 62.2105C91.3873 61.6435 91.2314 61.0639 91.046 60.4759C90.9577 60.1689 90.8377 59.8719 90.6879 59.5897C90.5978 59.4456 90.4838 59.3177 90.3508 59.2117C90.2717 59.1509 90.1765 59.1144 90.0769 59.1067C90.0205 59.1046 89.9646 59.117 89.9144 59.1428C89.8642 59.1685 89.8215 59.2067 89.7904 59.2537V59.2747C89.7525 59.5267 89.7104 59.7997 89.6683 60.0727C89.1121 63.7729 88.6065 67.1245 88.2399 69.5731C88.0672 70.7743 87.9239 71.7529 87.8186 72.4543C87.7765 72.7819 87.7385 73.0423 87.7133 73.2397C87.703 73.3304 87.703 73.422 87.7133 73.5127C87.7393 73.4246 87.7591 73.3348 87.7723 73.2439L87.9113 72.4627C88.0251 71.7655 88.1852 70.7827 88.3832 69.5941C88.7666 67.1455 89.2891 63.7981 89.8663 60.1021C89.9084 59.8291 89.9505 59.5561 89.9927 59.3041V59.3377C90.0517 59.2579 90.1739 59.2621 90.2876 59.3377C90.4016 59.4306 90.4997 59.5412 90.5783 59.6653C90.7187 59.9333 90.8317 60.2147 90.9154 60.5053C91.1008 61.0891 91.2609 61.6687 91.4084 62.2273C91.6991 63.3529 91.9519 64.4071 92.171 65.3689V65.3269C91.5895 67.0069 91.1134 68.3677 90.7721 69.3505L90.3929 70.4719L90.3003 70.7659C90.2705 70.7989 90.2476 70.8374 90.2328 70.8793Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M84.1404 68.6953L83.8454 86.5705L79.0422 81.6271L69.3516 84.4117C69.3516 84.4117 81.4986 98.4523 85.5897 98.8345C86.7189 98.9395 88.4885 98.1205 89.1542 97.6627C89.7526 97.2499 90.2296 96.6856 90.5362 96.0278C90.8428 95.37 90.9679 94.6425 90.8986 93.9205L88.9604 73.3027L84.1404 68.6953Z",
                    fill: "#FFBE9D"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M90.692 91.7156L88.9013 73.7144C88.9013 73.7144 90.6625 65.2262 90.6709 64.2182C90.6793 63.2102 90.831 59.447 89.8872 58.964C89.8872 58.964 89.9968 57.011 89.23 57.0656C88.4631 57.1202 88.362 58.1702 88.362 58.1702C88.362 58.1702 88.223 57.1622 87.8058 57.0866C87.157 56.9732 86.9042 57.9266 86.9042 57.9266C86.9042 57.9266 86.1374 57.5906 85.7202 58.943C85.7202 58.943 83.6431 65.6126 83.3397 66.083C83.0364 66.5534 81.9409 65.5706 81.9409 65.5706C81.9409 65.5706 80.5758 63.4706 80.323 63.4202C80.0794 63.3918 79.8334 63.3918 79.5898 63.4202C79.5898 63.4202 80.7527 66.7214 81.4184 67.6202C82.0841 68.519 83.7105 71.4254 83.7105 71.4254L83.8706 86.6252",
                    fill: "#FFBE9D"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M83.8451 86.5706C83.8451 86.5706 83.8451 86.4782 83.8451 86.3018V85.5038C83.8451 84.794 83.8451 83.765 83.8451 82.4504C83.8451 79.8044 83.7945 76.0076 83.7566 71.3666C83.0866 70.1864 82.3999 68.9264 81.5488 67.6664C81.1278 67.0283 80.7801 66.345 80.5123 65.6294C80.2132 64.907 79.9266 64.1552 79.6696 63.3908L79.598 63.5042C79.7286 63.5042 79.8634 63.5042 79.9983 63.5042H80.1963H80.289C80.3102 63.5097 80.3293 63.5214 80.3438 63.5378C80.5375 63.7351 80.7137 63.9487 80.8704 64.1762C81.2075 64.6382 81.5404 65.1254 81.8648 65.621C82.031 65.7646 82.207 65.8965 82.3915 66.0158C82.5806 66.1503 82.7983 66.2394 83.0277 66.2762C83.0968 66.2877 83.1679 66.2796 83.2326 66.2529C83.2974 66.2262 83.3534 66.1819 83.3942 66.125C83.452 66.0243 83.5014 65.9189 83.5417 65.81C83.626 65.6042 83.6976 65.39 83.7734 65.1884C84.0641 64.3484 84.3464 63.5084 84.6161 62.6348L85.4588 59.9972C85.6062 59.5562 85.7284 59.0858 85.8801 58.6658C85.9599 58.458 86.0885 58.2722 86.2551 58.124C86.3312 58.055 86.4244 58.0073 86.5251 57.9859C86.6257 57.9645 86.7303 57.9702 86.8281 58.0022L86.925 58.0358L86.9545 57.9392C86.9988 57.7915 87.0626 57.6503 87.1441 57.5192C87.225 57.3821 87.3454 57.2723 87.4896 57.2042C87.5597 57.1793 87.6347 57.1707 87.7087 57.179C87.7426 57.1787 87.7762 57.1861 87.8069 57.2006C87.8376 57.2152 87.8645 57.2365 87.8856 57.263C88.0812 57.5333 88.2005 57.851 88.2311 58.1828L88.3365 58.7876L88.4207 58.1786C88.449 57.8862 88.5633 57.6085 88.7494 57.3806C88.9263 57.1832 89.2718 57.0698 89.4404 57.2588C89.6096 57.4922 89.7076 57.7693 89.7226 58.0568C89.759 58.355 89.7703 58.6556 89.7564 58.9556V59.0144L89.8069 59.0438C90.0551 59.2477 90.2212 59.5341 90.2746 59.8502C90.3605 60.1741 90.421 60.5041 90.4558 60.8372C90.5229 61.5001 90.5566 62.166 90.5569 62.8322C90.5569 63.164 90.5569 63.4916 90.5569 63.8192C90.5622 64.1412 90.5396 64.463 90.4895 64.781C90.3968 65.4194 90.2872 66.041 90.1735 66.671C89.7184 69.1574 89.2381 71.5094 88.7915 73.6976V73.7228C89.3519 79.1366 89.8153 83.6348 90.144 86.7848C90.3083 88.3514 90.4389 89.582 90.5316 90.4304C90.578 90.8504 90.6159 91.1612 90.6412 91.388C90.6664 91.6148 90.6833 91.7156 90.6833 91.7156C90.6833 91.7156 90.6833 91.6022 90.6622 91.3838C90.6412 91.1654 90.6159 90.8378 90.578 90.422C90.4979 89.582 90.3799 88.343 90.2325 86.7764C89.9249 83.6222 89.4825 79.124 88.9474 73.706V73.7312C89.4024 71.5388 89.8828 69.191 90.3462 66.7046C90.46 66.0788 90.5737 65.4446 90.6706 64.8062C90.7184 64.4794 90.7409 64.1495 90.7381 63.8192C90.7381 63.4916 90.7381 63.164 90.7381 62.8322C90.7398 62.1589 90.706 61.486 90.6369 60.8162C90.6015 60.4735 90.5409 60.1338 90.4558 59.7998C90.4107 59.6283 90.3472 59.4621 90.2662 59.3042C90.1866 59.1297 90.0559 58.9833 89.8912 58.8842L89.9417 58.9724C89.9558 58.6612 89.9445 58.3494 89.908 58.04C89.8883 57.8823 89.8559 57.7264 89.8111 57.5738C89.7703 57.4075 89.6877 57.2543 89.571 57.1286C89.5053 57.0624 89.4227 57.0153 89.3321 56.9923C89.2415 56.9694 89.1464 56.9715 89.0569 56.9984C88.8852 57.0384 88.7295 57.1292 88.6103 57.2588C88.396 57.5168 88.264 57.8327 88.2311 58.166H88.4165C88.3965 57.7911 88.2725 57.4291 88.0584 57.1202C87.9837 57.0375 87.8792 56.9876 87.7677 56.9816C87.6636 56.971 87.5585 56.9839 87.4601 57.0194C87.2832 57.1021 87.1361 57.237 87.0388 57.4058C86.9457 57.552 86.8734 57.7103 86.8239 57.8762L86.9545 57.8174C86.8251 57.7717 86.6858 57.7612 86.551 57.787C86.4162 57.8129 86.2908 57.8741 86.1877 57.9644C86.0012 58.1333 85.857 58.3433 85.7663 58.5776C85.5894 59.0354 85.4756 59.4806 85.345 59.9258C85.0585 60.8162 84.7804 61.694 84.5023 62.5634C84.2242 63.4328 83.942 64.2812 83.6597 65.1128C83.5838 65.3186 83.5122 65.5328 83.4321 65.7302C83.3976 65.8259 83.3553 65.9186 83.3057 66.0074C83.2827 66.039 83.2508 66.063 83.214 66.0764C83.1773 66.0899 83.1373 66.0922 83.0993 66.083C82.9001 66.0463 82.7116 65.966 82.5473 65.8478C82.3706 65.7365 82.203 65.6116 82.046 65.474V65.495C81.7173 64.9952 81.3845 64.508 81.0432 64.0418C80.8769 63.8016 80.6894 63.5767 80.4828 63.3698C80.4448 63.3404 80.4021 63.3177 80.3564 63.3026H80.2469H80.0278C79.8887 63.3026 79.7497 63.3026 79.6064 63.3026H79.4927L79.5306 63.4076C79.8087 64.1804 80.0952 64.928 80.3985 65.6546C80.5502 66.02 80.7061 66.377 80.8746 66.7256C81.0357 67.0776 81.2319 67.4125 81.4603 67.7252C82.303 68.9852 82.9982 70.2452 83.6681 71.4002V71.3666C83.7313 75.9866 83.7819 79.8002 83.8198 82.4504C83.8408 83.765 83.8577 84.7898 83.8703 85.4996C83.8703 85.844 83.8703 86.1086 83.8703 86.2976C83.8703 86.4866 83.8451 86.5706 83.8451 86.5706Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M69.8948 71.2317C73.0885 70.0809 74.6053 72.7899 77.3145 76.2213C78.7959 78.0166 80.068 79.9737 81.1065 82.0551L71.4579 88.2501C71.4579 88.2501 65.5593 80.4255 65.1379 78.8379C64.7166 77.2503 66.2924 72.5295 69.8948 71.2317Z",
                    fill: theme.palette.primary.main
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M85.6401 64.835C85.8033 64.5295 85.9319 64.2069 86.0236 63.8732C86.2793 63.0765 86.4764 62.2624 86.6134 61.4372C86.7542 60.6131 86.8456 59.7815 86.8873 58.9466C86.921 58.6016 86.921 58.2542 86.8873 57.9092C86.8177 58.2483 86.7754 58.5924 86.7609 58.9382C86.6935 59.5724 86.5966 60.446 86.4322 61.4036C86.2679 62.3612 86.0657 63.218 85.9014 63.8354C85.7891 64.1615 85.7017 64.4957 85.6401 64.835Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M87.4224 64.9868C87.5347 64.6745 87.6179 64.3525 87.6709 64.025C87.7973 63.4244 87.9575 62.597 88.0923 61.6688C88.2271 60.7406 88.3029 59.8964 88.3282 59.2874C88.3669 58.9567 88.3669 58.6227 88.3282 58.292C88.2647 58.6163 88.2253 58.9448 88.2103 59.2748C88.1513 59.8838 88.0586 60.7196 87.9237 61.6436C87.7889 62.5676 87.6583 63.3236 87.5572 63.9998C87.4807 64.3238 87.4356 64.6543 87.4224 64.9868Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M89.2891 64.8819C89.4232 64.6165 89.5197 64.3338 89.5756 64.0419C89.7504 63.3527 89.8674 62.6503 89.9253 61.9419C89.9821 61.2363 89.9948 60.528 89.9632 59.8209C89.9691 59.5267 89.9365 59.233 89.8663 58.9473C89.8073 58.9473 89.8663 60.2871 89.7357 61.9251C89.6788 62.63 89.5817 63.3311 89.445 64.0251C89.371 64.3063 89.3189 64.5927 89.2891 64.8819Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M83.5881 90.6861C83.5138 89.9732 83.48 89.2567 83.487 88.5399C83.5595 87.8277 83.6692 87.1198 83.8156 86.4189C83.2031 87.762 83.1219 89.286 83.5881 90.6861Z",
                    fill: "#EB996E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M77.6559 178.105L66.9077 186.9L77.8076 200.29C79.0295 199.173 75.9622 190.159 75.9622 190.159L83.0827 184.8L77.6559 178.105Z",
                    fill: "#455A64"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    opacity: "0.6",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M73.173 185.548C73.0295 185.451 72.8551 185.41 72.6832 185.433C72.5114 185.456 72.3542 185.542 72.2418 185.674C72.139 185.814 72.0938 185.987 72.1158 186.159C72.1377 186.331 72.2251 186.488 72.3598 186.598C72.5131 186.7 72.6988 186.743 72.8814 186.717C73.0641 186.691 73.2309 186.6 73.35 186.459C73.4416 186.302 73.4687 186.115 73.4255 185.938C73.3823 185.761 73.2722 185.608 73.1182 185.51",
                        fill: "white"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    opacity: "0.6",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M66.9497 186.858L68.0283 185.968L78.0181 199.24C78.0181 199.24 78.2414 200.046 77.7611 200.319L66.9497 186.858Z",
                        fill: "white"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M76.2066 190.319C76.1392 190.369 75.8442 190.067 75.3639 189.899C74.8836 189.731 74.4749 189.798 74.4538 189.718C74.4328 189.638 74.8752 189.428 75.4566 189.621C76.0381 189.815 76.2824 190.285 76.2066 190.319Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M76.771 192.197C76.7162 192.26 76.3749 192.066 75.9283 192.071C75.4817 192.075 75.1278 192.247 75.0856 192.18C75.0435 192.113 75.3722 191.76 75.9283 191.76C76.4845 191.76 76.83 192.142 76.771 192.197Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M75.7347 194.355C75.6715 194.309 75.9243 193.935 76.4214 193.83C76.9186 193.725 77.3062 193.897 77.2641 193.969C77.222 194.04 76.8849 194.006 76.4804 194.111C76.0759 194.216 75.7936 194.414 75.7347 194.355Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M77.6939 188.92C77.6138 188.941 77.4579 188.567 77.1335 188.219C76.8091 187.87 76.4551 187.677 76.4846 187.597C76.5141 187.517 76.9734 187.597 77.3526 188.017C77.7318 188.437 77.7739 188.912 77.6939 188.92Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M79.0296 187.32C79.0043 187.32 78.7515 187.119 78.4861 186.648C78.3331 186.371 78.2143 186.076 78.1322 185.771C78.0836 185.59 78.047 185.406 78.0226 185.22C78.0055 185.11 78.0055 184.999 78.0226 184.889C78.0337 184.808 78.0717 184.733 78.1306 184.677C78.1895 184.621 78.2658 184.586 78.3471 184.578C78.4193 184.574 78.4914 184.587 78.5579 184.615C78.6244 184.644 78.6834 184.687 78.7305 184.742C78.7987 184.828 78.8554 184.922 78.899 185.023C79.1164 185.484 79.2163 185.992 79.1897 186.501C79.2044 186.798 79.1263 187.091 78.9664 187.341C78.9201 187.341 79.0001 187.014 78.9664 186.501C78.9555 186.205 78.9059 185.911 78.819 185.628C78.7667 185.463 78.7005 185.303 78.6209 185.149C78.5451 184.977 78.4482 184.855 78.3555 184.868C78.2628 184.88 78.3091 184.868 78.2923 184.943C78.2819 185.024 78.2819 185.106 78.2923 185.187C78.2923 185.367 78.3428 185.544 78.3766 185.708C78.4444 185.995 78.5374 186.276 78.6546 186.548C78.7994 186.795 78.9247 187.054 79.0296 187.32Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M78.8648 187.32C78.8353 187.32 78.966 186.984 79.3704 186.619C79.6098 186.403 79.885 186.232 80.1836 186.11C80.3606 186.04 80.544 185.986 80.7313 185.951C80.8496 185.916 80.9748 185.913 81.0949 185.94C81.2151 185.967 81.3263 186.024 81.4181 186.106C81.4617 186.166 81.4886 186.237 81.496 186.311C81.5034 186.384 81.491 186.459 81.4602 186.526C81.4092 186.625 81.3439 186.715 81.2664 186.795C81.1366 186.94 80.9844 187.063 80.8156 187.16C80.5338 187.326 80.2156 187.422 79.8887 187.438C79.3241 187.438 79.0249 187.249 79.046 187.223C79.0671 187.198 79.3746 187.299 79.8887 187.223C80.1754 187.181 80.4497 187.077 80.6934 186.921C80.8351 186.831 80.9629 186.72 81.0726 186.593C81.199 186.459 81.2706 186.312 81.2117 186.27C81.1497 186.231 81.0799 186.206 81.0071 186.196C80.9343 186.187 80.8603 186.193 80.7903 186.215C80.6214 186.244 80.4551 186.286 80.2932 186.341C80.0147 186.444 79.7522 186.585 79.5137 186.761C79.0924 187.06 78.9027 187.32 78.8648 187.32Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M72.7852 185.287L72.9158 199.147L90.2157 199.076C90.1062 197.429 81.1444 194.157 81.1444 194.157L81.4267 185.274L72.7852 185.287Z",
                    fill: "#455A64"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    opacity: "0.6",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M75.7895 193.431C75.624 193.483 75.4834 193.594 75.3942 193.743C75.3049 193.891 75.2732 194.067 75.305 194.237C75.3507 194.404 75.4585 194.548 75.6064 194.638C75.7544 194.729 75.9313 194.76 76.1013 194.725C76.2742 194.67 76.4213 194.555 76.5151 194.4C76.6089 194.246 76.6431 194.063 76.6111 193.885C76.5474 193.714 76.4193 193.574 76.2541 193.496C76.089 193.417 75.8996 193.406 75.7263 193.465",
                        fill: "white"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    opacity: "0.6",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M72.9156 199.08L72.8945 197.682L89.533 198.24C89.533 198.24 90.2998 198.576 90.2113 199.114L72.9156 199.08Z",
                        fill: "white"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M81.4225 194.065C81.4225 194.149 81.0012 194.191 80.5799 194.464C80.1585 194.737 79.9436 195.09 79.8678 195.057C79.792 195.023 79.9141 194.536 80.4197 194.217C80.9253 193.897 81.4394 193.99 81.4225 194.065Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M83.2426 194.809C83.2426 194.889 82.8972 195.032 82.6106 195.393C82.3241 195.754 82.2441 196.14 82.1598 196.14C82.0756 196.14 82.0208 195.657 82.3831 195.221C82.7455 194.784 83.2384 194.725 83.2426 194.809Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M84.2664 196.98C84.1905 196.98 84.0726 196.56 84.2874 196.115C84.5023 195.67 84.8942 195.468 84.9321 195.539C84.97 195.611 84.7256 195.854 84.5529 196.237C84.3801 196.619 84.3633 196.98 84.2664 196.98Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M81.2625 192.036C81.2288 192.112 80.8411 191.998 80.3608 192.036C79.8805 192.074 79.5181 192.221 79.4676 192.15C79.417 192.078 79.7794 191.776 80.344 191.73C80.9085 191.683 81.3172 191.969 81.2625 192.036Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M80.8411 189.991C80.5569 190.068 80.2572 190.068 79.9731 189.991C79.6608 189.937 79.3565 189.844 79.0672 189.714C78.8948 189.641 78.7286 189.554 78.5701 189.454C78.4714 189.401 78.3819 189.333 78.3046 189.252C78.2491 189.193 78.2152 189.117 78.2083 189.036C78.2015 188.955 78.222 188.875 78.2667 188.807C78.3081 188.748 78.3628 188.699 78.4265 188.665C78.4901 188.631 78.561 188.612 78.6333 188.609C78.7445 188.608 78.8554 188.624 78.9619 188.656C79.1463 188.701 79.3266 188.762 79.5012 188.836C79.7941 188.966 80.0643 189.142 80.3017 189.357C80.702 189.722 80.8411 190.037 80.8116 190.054C80.7821 190.071 80.5798 189.819 80.1669 189.517C79.9284 189.345 79.6694 189.204 79.3959 189.097C79.2328 189.034 79.0652 188.983 78.8945 188.945C78.7133 188.899 78.5574 188.899 78.5111 188.979C78.4647 189.059 78.49 189.025 78.5111 189.076C78.569 189.134 78.6341 189.185 78.7049 189.227C78.8608 189.323 79.0125 189.407 79.1641 189.483C79.4345 189.614 79.7167 189.72 80.0068 189.798C80.2891 189.843 80.5678 189.908 80.8411 189.991Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M80.7314 190.113C80.5661 189.865 80.4849 189.57 80.4996 189.273C80.4836 188.954 80.5221 188.634 80.6134 188.328C80.6701 188.146 80.7435 187.971 80.8325 187.803C80.8809 187.692 80.957 187.595 81.0536 187.521C81.1502 187.448 81.2641 187.4 81.3844 187.383C81.461 187.386 81.5351 187.41 81.599 187.452C81.6628 187.495 81.7139 187.553 81.7468 187.622C81.7902 187.723 81.8199 187.829 81.8353 187.937C81.8647 188.129 81.8647 188.325 81.8353 188.517C81.7888 188.841 81.6629 189.148 81.4687 189.411C81.1316 189.861 80.7819 189.962 80.7735 189.932C80.7651 189.903 81.0389 189.726 81.296 189.298C81.4449 189.05 81.537 188.771 81.5656 188.483C81.5886 188.319 81.5886 188.152 81.5656 187.988C81.5361 187.803 81.4687 187.656 81.3971 187.673C81.3254 187.689 81.1653 187.811 81.0979 187.958C81.0125 188.108 80.9406 188.266 80.883 188.429C80.7891 188.707 80.7338 188.996 80.7187 189.29C80.685 189.785 80.7777 190.1 80.7314 190.113Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M74.6813 101.804C74.6813 101.804 73.1392 105.164 71.9469 107.654C70.7545 110.145 69.0986 115.269 69.0986 115.269C69.0986 115.269 65.749 122.699 66.2589 126.504C66.7687 130.309 70.1773 156.324 70.1773 156.324C70.1773 156.324 70.0087 181.604 72.423 186.115L72.9623 188.546L82.7119 186.82L82.6529 185.363L84.9534 135.803L90.8226 102.056L74.6813 101.804Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M96.2032 109.175C96.2032 109.175 102.03 141.174 102.548 146.731C103.067 152.288 83.2135 181.57 83.2135 181.57L74.1548 172.149L87.1824 148.012L82.9691 123.69L88.8677 102.001H94.5473L96.2032 109.175Z",
                    fill: "#263238"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M70.9269 178.235C70.9369 178.472 70.9594 178.707 70.9943 178.941C71.0533 179.403 71.1713 180.088 71.3314 180.965C71.6558 182.729 72.1741 185.283 72.8861 188.471V188.538H72.9535L82.7074 186.833H82.7832V186.761C83.0529 180.088 83.3773 172.112 83.7228 163.561C84.0852 154.358 84.418 145.824 84.6919 138.827C85.4208 133.203 86.0275 128.554 86.4488 125.299C86.6553 123.682 86.8154 122.413 86.9249 121.519C86.9755 121.099 87.0134 120.763 87.0429 120.532C87.0724 120.301 87.0724 120.191 87.0724 120.191C87.0724 120.191 87.0513 120.305 87.0176 120.527C86.9839 120.75 86.9334 121.09 86.8702 121.514C86.748 122.388 86.571 123.652 86.3477 125.269C85.9053 128.52 85.2733 133.165 84.5107 138.785C84.2242 145.786 83.8787 154.325 83.5037 163.519C83.1709 172.07 82.8549 180.046 82.5936 186.719L82.6737 186.631L72.924 188.378L73.0083 188.433C72.2794 185.249 71.7443 182.7 71.3862 180.944C71.2134 180.067 71.087 179.386 71.0154 178.928C70.9733 178.697 70.9522 178.508 70.9353 178.403C70.9185 178.298 70.9269 178.235 70.9269 178.235Z",
                    fill: "#455A64"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M71.4494 65.7721C71.403 65.765 71.3578 65.7523 71.3145 65.7343C71.1864 65.694 71.0622 65.642 70.9438 65.5789C70.5016 65.3519 70.099 65.0555 69.7514 64.7011C68.6199 63.5201 67.7752 62.0962 67.2824 60.5389C66.7884 58.9835 66.6445 57.3386 66.861 55.7215C66.9178 55.2344 67.0008 54.7507 67.1096 54.2725C67.1382 54.0951 67.1877 53.9217 67.2571 53.7559C67.2535 53.9353 67.2323 54.1139 67.1939 54.2893C67.1391 54.6295 67.0675 55.1293 67.0127 55.7383C66.8434 57.3311 67.0011 58.9416 67.4762 60.4717C67.9595 61.9986 68.7671 63.4039 69.8441 64.5919C70.3127 65.068 70.8546 65.4665 71.4494 65.7721Z",
                    fill: "#455A64"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M77.3144 76.2217C77.4248 76.3529 77.5235 76.4934 77.6093 76.6417L78.4014 77.8135L81.1696 82.0135L81.2202 82.0933L81.1401 82.1437L75.3763 85.8607L71.4958 88.3429L71.4115 88.3975L71.3568 88.3177L67.5647 82.8871L66.4861 81.3163L66.1996 80.8963C66.1633 80.8509 66.1323 80.8016 66.1069 80.7493C66.1069 80.7493 66.1533 80.7871 66.2291 80.8753L66.5409 81.2953C66.8063 81.6481 67.1898 82.1689 67.6701 82.8283C68.6223 84.1471 69.9579 86.0203 71.5084 88.2169L71.3652 88.1875L75.2414 85.6927L81.0221 82.0009L80.9926 82.1311L78.2919 77.8807L77.5461 76.6837C77.4586 76.535 77.3812 76.3807 77.3144 76.2217Z",
                    fill: "#263238"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParcelHeroImage);


/***/ }),

/***/ 67916:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ParcelHero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14017);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45269);
/* harmony import */ var _parcel_category_ParcelCategory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49819);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ParcelHero__WEBPACK_IMPORTED_MODULE_2__, _parcel_category_ParcelCategory__WEBPACK_IMPORTED_MODULE_4__]);
([_ParcelHero__WEBPACK_IMPORTED_MODULE_2__, _parcel_category_ParcelCategory__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const PercelComponents = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.scrollTo({
            top,
            behavior: "smooth"
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
        spacing: 5,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ParcelHero__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_parcel_category_ParcelCategory__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PercelComponents);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49819:
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
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _typographies_H1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74485);
/* harmony import */ var _ParcelCategoryCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45932);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_manage_hooks_react_query_percel_usePercelCategory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43382);
/* harmony import */ var _ParcelCategoryShimmer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57794);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_typographies_H1__WEBPACK_IMPORTED_MODULE_4__, _ParcelCategoryCard__WEBPACK_IMPORTED_MODULE_5__, _api_manage_hooks_react_query_percel_usePercelCategory__WEBPACK_IMPORTED_MODULE_7__]);
([_typographies_H1__WEBPACK_IMPORTED_MODULE_4__, _ParcelCategoryCard__WEBPACK_IMPORTED_MODULE_5__, _api_manage_hooks_react_query_percel_usePercelCategory__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const ParcelCategory = ()=>{
    const { data , refetch  } = (0,_api_manage_hooks_react_query_percel_usePercelCategory__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        refetch();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
        spacing: 2.5,
        sx: {
            paddingBottom: "100px"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_typographies_H1__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    text: "What are you sending ?"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {
                    container: true,
                    spacing: {
                        xs: 2,
                        sm: 3,
                        md: 5
                    },
                    children: data?.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: data?.map((item)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {
                                item: true,
                                xs: 12,
                                sm: 6,
                                md: 4,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ParcelCategoryCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    data: item
                                })
                            }, item.id);
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                        sx: {
                            marginTop: "70px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ParcelCategoryShimmer__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParcelCategory);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45932:
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
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CustomImageContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58861);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70547);
/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _home_featured_categories__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17573);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_slices_parcelCategoryData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31426);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styled_components_TextWithEllipsis__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(53556);
/* harmony import */ var _helper_functions_getLanguage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(46573);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_home_featured_categories__WEBPACK_IMPORTED_MODULE_8__]);
_home_featured_categories__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const ParcelCategoryCard = (props)=>{
    const { data  } = props;
    const { configData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.configData);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const handleClick = ()=>{
        dispatch((0,_redux_slices_parcelCategoryData__WEBPACK_IMPORTED_MODULE_10__/* .setParcelCategories */ .WC)(data));
        router.push("/parcel-delivery-info", undefined, {
            shallow: true
        });
    };
    const classes = (0,_styled_components_TextWithEllipsis__WEBPACK_IMPORTED_MODULE_12__/* .textWithEllipsis */ .C)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {
            ...props,
            sx: {
                padding: "10px",
                backgroundColor: (theme)=>(0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme.palette.primary.main, 0.2),
                cursor: "pointer"
            },
            onClick: handleClick,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                container: true,
                spacing: 3,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        item: true,
                        xs: 4,
                        sm: 4,
                        md: 4,
                        alignSelf: "center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImageContainer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            width: "100%",
                            src: `${configData?.base_urls?.parcel_category_image_url}/${data?.image}`,
                            height: "100%",
                            objectfit: "contain",
                            borderRadius: ".7rem"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        item: true,
                        xs: 8,
                        sm: 8,
                        md: 8,
                        alignSelf: "center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                width: "100%",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                        variant: "h6",
                                        children: data?.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                        className: classes.multiLineEllipsis,
                                        maxHeight: "40px",
                                        children: data?.description
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                justifyContent: "flex-end",
                                alignItems: "end",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_featured_categories__WEBPACK_IMPORTED_MODULE_8__/* .ButtonLeft */ .Tr, {
                                    language_direction: (0,_helper_functions_getLanguage__WEBPACK_IMPORTED_MODULE_13__/* .getLanguage */ .G)(),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_7___default()), {})
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParcelCategoryCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 57794:
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





const ParcelCategoryShimmer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
            container: true,
            spacing: 5,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                    item: true,
                    xs: 12,
                    sm: 6,
                    md: 4,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                        sx: {
                            padding: "20px"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                            container: true,
                            spacing: 2,
                            justifyContent: "center",
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                    item: true,
                                    xs: 4,
                                    sm: 4,
                                    md: 4,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                                        width: "100%",
                                        height: "120px",
                                        variant: "rounded"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                    item: true,
                                    xs: 8,
                                    sm: 8,
                                    md: 8,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                                            width: "50%",
                                            height: "20px",
                                            variant: "text"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                                            width: "80%",
                                            height: "20px",
                                            variant: "text"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                    item: true,
                    xs: 12,
                    sm: 6,
                    md: 4,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                        sx: {
                            padding: "20px"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                            container: true,
                            spacing: 2,
                            justifyContent: "center",
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                    item: true,
                                    xs: 4,
                                    sm: 4,
                                    md: 4,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                                        width: "100%",
                                        height: "120px",
                                        variant: "rounded"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                    item: true,
                                    xs: 8,
                                    sm: 8,
                                    md: 8,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                                            width: "50%",
                                            height: "20px",
                                            variant: "text"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                                            width: "80%",
                                            height: "20px",
                                            variant: "text"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                    item: true,
                    xs: 12,
                    sm: 6,
                    md: 4,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                        sx: {
                            padding: "20px"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                            container: true,
                            spacing: 2,
                            justifyContent: "center",
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                    item: true,
                                    xs: 4,
                                    sm: 4,
                                    md: 4,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                                        width: "100%",
                                        height: "120px",
                                        variant: "rounded"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                    item: true,
                                    xs: 8,
                                    sm: 8,
                                    md: 8,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                                            width: "50%",
                                            height: "20px",
                                            variant: "text"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                                            width: "80%",
                                            height: "20px",
                                            variant: "text"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParcelCategoryShimmer);


/***/ })

};
;
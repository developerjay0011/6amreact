"use strict";
exports.id = 8784;
exports.ids = [8784];
exports.modules = {

/***/ 11775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82433);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_4__);





const containerStyle = {
    width: "100%",
    height: "450px"
};
const initialState = {
    isMounted: false,
    map: null
};
const reducer = (state, action)=>{
    switch(action.type){
        case "setIsMounted":
            return {
                ...state,
                isMounted: action.payload
            };
        case "setMap":
            return {
                ...state,
                map: action.payload
            };
        default:
            return state;
    }
};
const ACTION = {
    setIsMounted: "setIsMounted",
    setMap: "setMap"
};
const MapComponent = (props)=>{
    const { latitude , longitude  } = props;
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
    const center = {
        lat: parseFloat(latitude),
        lng: parseFloat(longitude)
    };
    const options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false
        }), []);
    const { isLoaded  } = (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.useJsApiLoader)({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyCY3WbioX86LX2_nxamO-Wrt-62-GXqWMA"
    });
    const onLoad = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function callback(map) {
        dispatch({
            type: ACTION.setMap,
            payload: map
        });
    }, []);
    const onUnmount = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(function callback(map) {
        dispatch({
            type: ACTION.setMap,
            payload: null
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (state.map) {
            dispatch({
                type: ACTION.setIsMounted,
                payload: true
            });
        }
    }, [
        state.map
    ]);
    return isLoaded ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
        className: "map",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.GoogleMap, {
            mapContainerStyle: containerStyle,
            center: center,
            onLoad: onLoad,
            zoom: 10,
            onUnmount: onUnmount,
            options: options,
            children: state.isMounted ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Marker, {
                position: center
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                alignItems: "center",
                style: {
                    zIndex: 3,
                    position: "absolute",
                    marginTop: -37,
                    marginLeft: -11,
                    left: "50%",
                    top: "50%"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CircularProgress, {})
            })
        })
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
};
MapComponent.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapComponent);


/***/ })

};
;
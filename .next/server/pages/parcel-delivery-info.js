"use strict";
(() => {
var exports = {};
exports.id = 8243;
exports.ids = [8243,6812,5405];
exports.modules = {

/***/ 79857:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ _index__WEBPACK_IMPORTED_MODULE_7__.getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13258);
/* harmony import */ var _src_components_parcel_parcel_delivery_info_component_ParcelDelivary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31640);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _meta_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74121);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44369);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_2__, _src_components_parcel_parcel_delivery_info_component_ParcelDelivary__WEBPACK_IMPORTED_MODULE_3__, _index__WEBPACK_IMPORTED_MODULE_7__]);
([_src_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_2__, _src_components_parcel_parcel_delivery_info_component_ParcelDelivary__WEBPACK_IMPORTED_MODULE_3__, _index__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Index = ({ configData , landingPageData  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default()), {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_meta_data__WEBPACK_IMPORTED_MODULE_5__["default"], {
                title: `Parcel Deliver information - ${configData?.business_name}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                configData: configData,
                landingPageData: landingPageData,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.NoSsr, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_parcel_parcel_delivery_info_component_ParcelDelivary__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        configData: configData
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

/***/ 60754:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73467);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45269);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57987);
/* harmony import */ var _api_manage_hooks_react_query_address_useGetAddressList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19376);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94172);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(simplebar_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var simplebar_react_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48710);
/* harmony import */ var simplebar_react_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(simplebar_react_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _address_add_new_address__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(89728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_6__, _api_manage_hooks_react_query_address_useGetAddressList__WEBPACK_IMPORTED_MODULE_7__, _address_add_new_address__WEBPACK_IMPORTED_MODULE_10__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_6__, _api_manage_hooks_react_query_address_useGetAddressList__WEBPACK_IMPORTED_MODULE_7__, _address_add_new_address__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const SaveAddress = ({ handleSenderLocation , configData , setSenderFormattedAddress , setSenderLocation , setSenderOptionalAddress , setReceiverFormattedAddress , setReceiverLocation , sender , setReceiverOptionalAddress  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const [selectedAddress, setSelectedAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { data , refetch , isRefetching , isLoading  } = (0,_api_manage_hooks_react_query_address_useGetAddressList__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        refetch();
    }, []);
    const handleClick = (adds)=>{
        let location = {
            lat: adds?.latitude,
            lng: adds?.longitude
        };
        if (sender === "true") {
            setSenderLocation(location);
            setSenderFormattedAddress(adds.address);
            setSenderOptionalAddress(adds);
        } else {
            setReceiverLocation(location);
            setReceiverFormattedAddress(adds.address);
            setReceiverOptionalAddress(adds);
        }
        setSelectedAddress(adds?.id);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_5__/* .CustomStackFullWidth */ .Xw, {
        spacing: 2.5,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                direction: "row",
                justifyContent: "space-between",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                        fontWeight: "bold",
                        children: t("Saved Addresses")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_address_add_new_address__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        refetch: refetch,
                        t: t,
                        configData: configData,
                        parcel: "true"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((simplebar_react__WEBPACK_IMPORTED_MODULE_8___default()), {
                style: {
                    maxHeight: 130
                },
                children: [
                    data?.addresses?.length > 0 && data.addresses?.map((adds, index)=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                            // alignItems="center"
                            justifyContent: "flex-start",
                            direction: "row",
                            spacing: 1,
                            sx: {
                                cursor: "pointer"
                            },
                            backgroundColor: adds.id === selectedAddress && (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.alpha)(theme.palette.primary.main, 0.3),
                            onClick: ()=>handleClick(adds),
                            padding: "1rem",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    sx: {
                                        width: "16.5px",
                                        height: "16.5px"
                                    },
                                    color: "primary"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                            fontSize: "14px",
                                            fontWeight: "600",
                                            textTransform: "capitalize",
                                            children: t(adds?.address_type)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                            fontSize: "14px",
                                            children: adds?.address
                                        })
                                    ]
                                })
                            ]
                        }, adds.id);
                    }),
                    isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                        width: "100%",
                        height: 120
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaveAddress);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97720:
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
/* harmony import */ var react_geolocated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11022);
/* harmony import */ var react_geolocated__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_geolocated__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_manage_hooks_react_query_google_api_usePlaceAutoComplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52073);
/* harmony import */ var _api_manage_hooks_react_query_google_api_useGetGeoCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3586);
/* harmony import */ var _api_manage_hooks_react_query_google_api_useGetZone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55496);
/* harmony import */ var _api_manage_hooks_react_query_google_api_useGetPlaceDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99895);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86201);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22021);
/* harmony import */ var _Map_CustomMapSearch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_manage_hooks_react_query_google_api_usePlaceAutoComplete__WEBPACK_IMPORTED_MODULE_4__, _api_manage_hooks_react_query_google_api_useGetGeoCode__WEBPACK_IMPORTED_MODULE_5__, _api_manage_hooks_react_query_google_api_useGetZone__WEBPACK_IMPORTED_MODULE_6__, _api_manage_hooks_react_query_google_api_useGetPlaceDetails__WEBPACK_IMPORTED_MODULE_7__, react_hot_toast__WEBPACK_IMPORTED_MODULE_8__, i18next__WEBPACK_IMPORTED_MODULE_9__, _Map_CustomMapSearch__WEBPACK_IMPORTED_MODULE_10__]);
([_api_manage_hooks_react_query_google_api_usePlaceAutoComplete__WEBPACK_IMPORTED_MODULE_4__, _api_manage_hooks_react_query_google_api_useGetGeoCode__WEBPACK_IMPORTED_MODULE_5__, _api_manage_hooks_react_query_google_api_useGetZone__WEBPACK_IMPORTED_MODULE_6__, _api_manage_hooks_react_query_google_api_useGetPlaceDetails__WEBPACK_IMPORTED_MODULE_7__, react_hot_toast__WEBPACK_IMPORTED_MODULE_8__, i18next__WEBPACK_IMPORTED_MODULE_9__, _Map_CustomMapSearch__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const GetLocationForm = ({ fromparcel , formattedAddress , currentLocationValue , handleLocation , testLocation , setCurrentLactionValue  })=>{
    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const [geoLocationEnable, setGeoLocationEnable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [searchKey, setSearchKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [enabled, setEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [openLocation, setOpenLocation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [predictions, setPredictions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [currentLocation, setCurrentLocation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(formattedAddress);
    const [showCurrentLocation, setShowCurrentLocation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [zoneIdEnabled, setZoneIdEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [placeId, setPlaceId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [placeDescription, setPlaceDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const [placeDetailsEnabled, setPlaceDetailsEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    //****getting current location/***/
    const { coords , isGeolocationAvailable , isGeolocationEnabled , getPosition  } = (0,react_geolocated__WEBPACK_IMPORTED_MODULE_3__.useGeolocated)({
        positionOptions: {
            enableHighAccuracy: false
        },
        userDecisionTimeout: 5000,
        isGeolocationEnabled: true
    });
    const handleCloseLocation = ()=>{
        setOpenLocation(false);
        setShowCurrentLocation(false);
        setGeoLocationEnable(false);
        setCurrentLocation(undefined);
        setCurrentLactionValue({
            description: ""
        });
    };
    const handleAgreeLocation = ()=>{
        if (coords) {
            setLocation({
                lat: coords?.latitude,
                lng: coords?.longitude
            });
            setOpenLocation(false);
            setShowCurrentLocation(true);
            setGeoLocationEnable(true);
            setOpenLocation(true);
        }
    };
    //*****getting current location end****//
    //***place autocomplate***///
    const HandleChangeForSearch = (event)=>{
        setSearchKey(event.target.value);
        if (event.target.value) {
            setEnabled(true);
            setGeoLocationEnable(true);
            setCurrentLocation(event.target.value);
        } else {
            setEnabled(false);
            setCurrentLocation(undefined);
        }
    };
    const handleChange = (event, value)=>{
        if (value) {
            setPlaceId(value?.place_id);
            setPlaceDescription(value?.description);
            setZoneIdEnabled(false);
            setGeoLocationEnable(true);
        }
        setPlaceDetailsEnabled(true);
    };
    const { data: places , isLoading  } = (0,_api_manage_hooks_react_query_google_api_usePlaceAutoComplete__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(searchKey, enabled);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (places) {
            setPredictions(places?.predictions);
        }
    }, [
        places
    ]);
    const { data: geoCodeResults  } = (0,_api_manage_hooks_react_query_google_api_useGetGeoCode__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(location, geoLocationEnable);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (geoCodeResults?.results && showCurrentLocation) {
            setCurrentLocation(geoCodeResults?.results[0]?.formatted_address);
        }
    }, [
        geoCodeResults,
        location
    ]);
    const { data: zoneData  } = (0,_api_manage_hooks_react_query_google_api_useGetZone__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(location, zoneIdEnabled);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (false) {}
    }, [
        zoneData
    ]);
    //
    // //********************Pick Location */
    const { isLoading: isLoading2 , data: placeDetails  } = (0,_api_manage_hooks_react_query_google_api_useGetPlaceDetails__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(placeId, placeDetailsEnabled);
    //
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (placeDetails) {
            setLocation(placeDetails?.result?.geometry?.location);
        }
    }, [
        placeDetails
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (placeDescription) {
            setCurrentLocation(placeDescription);
        }
    }, [
        placeDescription
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        handleLocation(location, currentLocation);
    }, [
        location,
        currentLocation
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Map_CustomMapSearch__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            showCurrentLocation: showCurrentLocation,
            predictions: predictions,
            handleChange: handleChange,
            HandleChangeForSearch: HandleChangeForSearch,
            handleAgreeLocation: handleAgreeLocation,
            currentLocation: currentLocation,
            handleCloseLocation: handleCloseLocation,
            frommap: "false",
            fromparcel: fromparcel,
            currentLocationValue: currentLocationValue,
            testLocation: testLocation
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetLocationForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 31640:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _footer_Footer_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37056);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _typographies_H1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74485);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SenderInfoForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16234);
/* harmony import */ var _ReceiverInfoFrom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57679);
/* harmony import */ var _ParcelInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51238);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45269);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_geolocated__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11022);
/* harmony import */ var react_geolocated__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_geolocated__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ValidationSchema__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(73130);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _redux_slices_parcelDeliveryInfo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(78137);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(86201);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(22021);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_typographies_H1__WEBPACK_IMPORTED_MODULE_4__, _SenderInfoForm__WEBPACK_IMPORTED_MODULE_6__, _ReceiverInfoFrom__WEBPACK_IMPORTED_MODULE_7__, _ParcelInfo__WEBPACK_IMPORTED_MODULE_8__, _ValidationSchema__WEBPACK_IMPORTED_MODULE_13__, react_hot_toast__WEBPACK_IMPORTED_MODULE_16__, i18next__WEBPACK_IMPORTED_MODULE_17__]);
([_typographies_H1__WEBPACK_IMPORTED_MODULE_4__, _SenderInfoForm__WEBPACK_IMPORTED_MODULE_6__, _ReceiverInfoFrom__WEBPACK_IMPORTED_MODULE_7__, _ParcelInfo__WEBPACK_IMPORTED_MODULE_8__, _ValidationSchema__WEBPACK_IMPORTED_MODULE_13__, react_hot_toast__WEBPACK_IMPORTED_MODULE_16__, i18next__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const PercelDelivery = ({ configData  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_14__.useDispatch)();
    const { parcelCategories  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_14__.useSelector)((state)=>state.parcelCategories);
    const { profileInfo  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_14__.useSelector)((state)=>state.profileInfo);
    const [senderLocation, setSenderLocation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [senderFormattedAddress, setSenderFormattedAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [receiverLocation, setReceiverLocation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [receiverFormattedAddress, setReceiverFormattedAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let token = undefined;
    if (true) {
        token = localStorage.getItem("token");
    }
    const { coords , isGeolocationAvailable , isGeolocationEnabled , getPosition  } = (0,react_geolocated__WEBPACK_IMPORTED_MODULE_12__.useGeolocated)({
        positionOptions: {
            enableHighAccuracy: false
        },
        userDecisionTimeout: 5000,
        isGeolocationEnabled: true
    });
    const addAddressFormik = (0,formik__WEBPACK_IMPORTED_MODULE_9__.useFormik)({
        initialValues: {
            senderName: profileInfo?.f_name ? profileInfo?.f_name : "",
            senderPhone: profileInfo?.phone ? profileInfo?.phone : "",
            receiverName: "",
            receiverPhone: "",
            senderRoad: "",
            senderHouse: "",
            senderFloor: "",
            road: "",
            house: "",
            floor: ""
        },
        validationSchema: (0,_ValidationSchema__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(),
        onSubmit: async (values, helpers)=>{
            await formSubmitHandler(values);
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const currentLocationLatLng = JSON.parse(localStorage.getItem("currentLatLng"));
        const currentLocation = localStorage.getItem("location");
        setSenderLocation(currentLocationLatLng);
        setSenderFormattedAddress(currentLocation);
    }, []);
    const senderNameHandler = (value)=>{
        addAddressFormik.setFieldValue("senderName", value);
    };
    const senderPhoneHandler = (value)=>{
        addAddressFormik.setFieldValue("senderPhone", value);
    };
    const receiverNameHandler = (value)=>{
        addAddressFormik.setFieldValue("receiverName", value);
    };
    const receiverPhoneHandler = (value)=>{
        const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
        if (value.matches(phoneRegExp)) {
            addAddressFormik.setFieldValue("receiverPhone", value.replace(/[^0-9]/g, ""));
        }
    };
    const roadHandler = (value)=>{
        addAddressFormik.setFieldValue("road", value);
    };
    const houseHandler = (value)=>{
        addAddressFormik.setFieldValue("house", value);
    };
    const floorHandler = (value)=>{
        addAddressFormik.setFieldValue("floor", value);
    };
    const senderRoadHandler = (value)=>{
        addAddressFormik.setFieldValue("senderRoad", value);
    };
    const senderHouseHandler = (value)=>{
        addAddressFormik.setFieldValue("senderHouse", value);
    };
    const senderFloorHandler = (value)=>{
        addAddressFormik.setFieldValue("senderFloor", value);
    };
    const formSubmitHandler = (values)=>{
        const tempValue = {
            ...values,
            senderLocations: senderLocation,
            senderAddress: senderFormattedAddress,
            receiverLocations: receiverLocation,
            receiverAddress: receiverFormattedAddress,
            name: parcelCategories?.name,
            image: parcelCategories?.image,
            description: parcelCategories?.description
        };
        if (senderLocation && receiverLocation) {
            dispatch((0,_redux_slices_parcelDeliveryInfo__WEBPACK_IMPORTED_MODULE_15__/* .setParcelData */ .vz)(tempValue));
            if (token) {
                router.push({
                    pathname: "/checkout",
                    query: {
                        page: "parcel"
                    }
                }, undefined, {
                    shallow: true
                });
            } else {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_16__["default"].error("please login first");
            }
        } else {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_16__["default"].error((0,i18next__WEBPACK_IMPORTED_MODULE_17__.t)("Sender or Receiver location is missing"));
        }
    };
    const handleSenderLocation = (location, currentLocation)=>{
        setSenderLocation(location);
        setSenderFormattedAddress(currentLocation);
    };
    const handleReceiverLocation = (location, currentLocation)=>{
        setReceiverLocation(location);
        setReceiverFormattedAddress(currentLocation);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_10__/* .CustomStackFullWidth */ .Xw, {
        paddingBottom: {
            xs: "20px",
            sm: "20px",
            md: "80px"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                paddingBottom: "20px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_typographies_H1__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    text: "Parcel Delivery Information"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                noValidate: true,
                onSubmit: addAddressFormik.handleSubmit,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                    container: true,
                    spacing: 4,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                            item: true,
                            xs: 12,
                            sm: 12,
                            md: 4,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SenderInfoForm__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                addAddressFormik: addAddressFormik,
                                senderNameHandler: senderNameHandler,
                                senderPhoneHandler: senderPhoneHandler,
                                coords: coords,
                                configData: configData,
                                senderFormattedAddress: senderFormattedAddress,
                                handleLocation: handleSenderLocation,
                                setSenderFormattedAddress: setSenderFormattedAddress,
                                setSenderLocation: setSenderLocation,
                                senderRoadHandler: senderRoadHandler,
                                senderHouseHandler: senderHouseHandler,
                                senderFloorHandler: senderFloorHandler
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                            item: true,
                            xs: 12,
                            sm: 12,
                            md: 4,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReceiverInfoFrom__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                addAddressFormik: addAddressFormik,
                                receiverNameHandler: receiverNameHandler,
                                receiverPhoneHandler: receiverPhoneHandler,
                                roadHandler: roadHandler,
                                houseHandler: houseHandler,
                                floorHandler: floorHandler,
                                coords: coords,
                                handleLocation: handleReceiverLocation,
                                receiverFormattedAddress: receiverFormattedAddress,
                                setReceiverLocation: setReceiverLocation,
                                setReceiverFormattedAddress: setReceiverFormattedAddress,
                                configData: configData
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                            item: true,
                            xs: 12,
                            sm: 12,
                            md: 4,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ParcelInfo__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                parcelCategories: parcelCategories
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PercelDelivery);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51238:
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22021);
/* harmony import */ var _CustomImageContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58861);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styled_components_CustomButtons_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81029);
/* harmony import */ var _mui_icons_material_DriveFileRenameOutlineOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8953);
/* harmony import */ var _mui_icons_material_DriveFileRenameOutlineOutlined__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_DriveFileRenameOutlineOutlined__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_5__]);
i18next__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const ParcelInfo = ({ parcelCategories  })=>{
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const { configData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.configData);
    const borderColor = theme.palette.primary.main;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
            sx: {
                padding: "1.2rem "
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                spacing: 3,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                        direction: "row",
                        justifyCenter: "center",
                        alignItems: "center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                            justifyCenter: "center",
                            alignItems: "center",
                            flexGrow: "1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                variant: "h6",
                                children: (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)("Parcel Info")
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                        sx: {
                            backgroundColor: (theme)=>(0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.alpha)(theme.palette.primary.main, 0.2),
                            borderRadius: "7.8px"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            spacing: 2,
                            paddingTop: "70px",
                            paddingBottom: "70px",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImageContainer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    src: `${configData?.base_urls?.parcel_category_image_url}/${parcelCategories?.image}`,
                                    height: "100px",
                                    width: "100px",
                                    objectfit: "contain"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                    width: "100%",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                            variant: "h6",
                                            fontWeight: "500",
                                            children: parcelCategories?.name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                            p: ".7rem",
                                            children: parcelCategories?.description
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                        width: "100%",
                        paddingBottom: "25px",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomButtons_style__WEBPACK_IMPORTED_MODULE_8__/* .CustomButtonPrimary */ .TG, {
                            fullwidth: "true",
                            type: "submit",
                            children: (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)("Proceed to Checkout")
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParcelInfo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 57679:
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57987);
/* harmony import */ var _form_fields_CustomTextFieldWithFormik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42492);
/* harmony import */ var _mui_icons_material_Room__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49426);
/* harmony import */ var _mui_icons_material_Room__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Room__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Map_CustomMapSearch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69893);
/* harmony import */ var _SaveAddress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60754);
/* harmony import */ var _GetLocationFrom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(97720);
/* harmony import */ var _Map_MapModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80233);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_5__, _Map_CustomMapSearch__WEBPACK_IMPORTED_MODULE_8__, _SaveAddress__WEBPACK_IMPORTED_MODULE_9__, _GetLocationFrom__WEBPACK_IMPORTED_MODULE_10__, _Map_MapModal__WEBPACK_IMPORTED_MODULE_11__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_5__, _Map_CustomMapSearch__WEBPACK_IMPORTED_MODULE_8__, _SaveAddress__WEBPACK_IMPORTED_MODULE_9__, _GetLocationFrom__WEBPACK_IMPORTED_MODULE_10__, _Map_MapModal__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const ReceiverInfoFrom = ({ addAddressFormik , receiverNameHandler , receiverPhoneHandler , roadHandler , houseHandler , floorHandler , handleLocation , coords , sender , receiver , receiverFormattedAddress , setReceiverFormattedAddress , setReceiverLocation , configData  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const [receiverOptionalAddress, setReceiverOptionalAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [testLocation, setTestLocation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [currentLocationValue, setCurrentLactionValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        description: null
    });
    const handleOpen = ()=>setOpen(true);
    const handleClose = ()=>{
        setOpen(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (receiverFormattedAddress) {
            setCurrentLactionValue({
                description: receiverFormattedAddress
            });
            setTestLocation(receiverFormattedAddress);
        } else {
            setCurrentLactionValue({
                description: ""
            });
        }
    }, [
        receiverFormattedAddress
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        roadHandler(receiverOptionalAddress?.road ? receiverOptionalAddress?.road : "");
        floorHandler(receiverOptionalAddress?.floor ? receiverOptionalAddress?.floor : "");
        houseHandler(receiverOptionalAddress?.house ? receiverOptionalAddress?.house : "");
    }, [
        receiverOptionalAddress
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
        height: "100%",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                sx: {
                    padding: "1.2rem"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                            align: "center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                variant: "h6",
                                children: t("Receiver Information")
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                            alignItems: "center",
                            spacing: 3,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                    alignItems: "center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_fields_CustomTextFieldWithFormik__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        required: "true",
                                        type: "text",
                                        label: t("Receiver Name"),
                                        touched: addAddressFormik.touched.receiverName,
                                        errors: addAddressFormik.errors.receiverName,
                                        fieldProps: addAddressFormik.getFieldProps("receiverName"),
                                        onChangeHandler: receiverNameHandler,
                                        value: addAddressFormik.values.receiverName
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                    alignItems: "center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_fields_CustomTextFieldWithFormik__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        required: "true",
                                        type: "number",
                                        label: t("Receiver Phone"),
                                        touched: addAddressFormik.touched.receiverPhone,
                                        errors: addAddressFormik.errors.receiverPhone,
                                        fieldProps: addAddressFormik.getFieldProps("receiverPhone"),
                                        onChangeHandler: receiverPhoneHandler,
                                        value: addAddressFormik.values.receiverPhone
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                    direction: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                            children: t("Delivery Address")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                            spacing: 0.5,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            direction: "row",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                onClick: ()=>handleOpen(),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                        color: theme.palette.primary.main,
                                                        children: t("Set from map")
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Room__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                        sx: {
                                                            width: "16px",
                                                            height: "16px"
                                                        },
                                                        color: "primary"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GetLocationFrom__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        fromparcel: "true",
                                        handleLocation: handleLocation,
                                        formattedAddress: receiverFormattedAddress,
                                        currentLocationValue: currentLocationValue,
                                        setCurrentLactionValue: setCurrentLactionValue,
                                        testLocation: testLocation
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                                        sx: {
                                            padding: "1rem"
                                        },
                                        elevation: 9,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SaveAddress__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            handleLocation: handleLocation,
                                            configData: configData,
                                            setReceiverFormattedAddress: setReceiverFormattedAddress,
                                            setReceiverLocation: setReceiverLocation,
                                            setReceiverOptionalAddress: setReceiverOptionalAddress
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_fields_CustomTextFieldWithFormik__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        type: "text",
                                        label: t("Street number"),
                                        touched: addAddressFormik.touched.road,
                                        errors: addAddressFormik.errors.road,
                                        fieldProps: addAddressFormik.getFieldProps("road"),
                                        onChangeHandler: roadHandler,
                                        value: addAddressFormik.values.road
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                    direction: "row",
                                    spacing: 1.3,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_fields_CustomTextFieldWithFormik__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            type: "text",
                                            label: t("House no."),
                                            touched: addAddressFormik.touched.house,
                                            errors: addAddressFormik.errors.house,
                                            fieldProps: addAddressFormik.getFieldProps("house"),
                                            onChangeHandler: houseHandler,
                                            value: addAddressFormik.values.senderPhone
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_fields_CustomTextFieldWithFormik__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            type: "text",
                                            label: t("Floor no."),
                                            touched: addAddressFormik.touched.floor,
                                            errors: addAddressFormik.errors.floor,
                                            fieldProps: addAddressFormik.getFieldProps("floor"),
                                            onChangeHandler: floorHandler,
                                            value: addAddressFormik.values.floor
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Map_MapModal__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                open: open,
                handleClose: handleClose,
                coords: coords,
                toparcel: "1",
                handleLocation: handleLocation
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReceiverInfoFrom);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 16234:
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57987);
/* harmony import */ var _form_fields_CustomTextFieldWithFormik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42492);
/* harmony import */ var _mui_icons_material_Room__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49426);
/* harmony import */ var _mui_icons_material_Room__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Room__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Map_CustomMapSearch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69893);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73467);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _SaveAddress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60754);
/* harmony import */ var _GetLocationFrom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97720);
/* harmony import */ var _Map_MapModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80233);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _custom_component_CustomPhoneInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(65304);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_5__, _Map_CustomMapSearch__WEBPACK_IMPORTED_MODULE_8__, _SaveAddress__WEBPACK_IMPORTED_MODULE_10__, _GetLocationFrom__WEBPACK_IMPORTED_MODULE_11__, _Map_MapModal__WEBPACK_IMPORTED_MODULE_12__, _custom_component_CustomPhoneInput__WEBPACK_IMPORTED_MODULE_14__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_5__, _Map_CustomMapSearch__WEBPACK_IMPORTED_MODULE_8__, _SaveAddress__WEBPACK_IMPORTED_MODULE_10__, _GetLocationFrom__WEBPACK_IMPORTED_MODULE_11__, _Map_MapModal__WEBPACK_IMPORTED_MODULE_12__, _custom_component_CustomPhoneInput__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const SenderInfoForm = ({ addAddressFormik , senderNameHandler , senderPhoneHandler , handleLocation , coords , configData , senderFormattedAddress , setSenderFormattedAddress , setSenderLocation , senderRoadHandler , senderHouseHandler , senderFloorHandler  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [currentLocationValue, setCurrentLactionValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        description: null
    });
    const [senderOptionalAddress, setSenderOptionalAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [testLocation, setTestLocation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const handleOpen = ()=>setOpen(true);
    const handleClose = ()=>{
        setOpen(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (senderFormattedAddress) {
            setCurrentLactionValue({
                description: senderFormattedAddress
            });
            setTestLocation(senderFormattedAddress);
        } else {
            setCurrentLactionValue({
                description: ""
            });
        }
    }, [
        senderFormattedAddress
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        senderRoadHandler(senderOptionalAddress?.road ? senderOptionalAddress?.road : "");
        senderFloorHandler(senderOptionalAddress?.floor ? senderOptionalAddress?.floor : "");
        senderHouseHandler(senderOptionalAddress?.house ? senderOptionalAddress?.house : "");
    }, [
        senderOptionalAddress
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
        height: "100%",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                sx: {
                    padding: "1.2rem",
                    height: "100%"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                            align: "center",
                            width: "100%",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                variant: "h6",
                                children: t("Sender Information")
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                            alignItems: "center",
                            spacing: 3,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                    alignItems: "center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_fields_CustomTextFieldWithFormik__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        required: "true",
                                        type: "text",
                                        label: t("Sender Name"),
                                        touched: addAddressFormik.touched.senderName,
                                        errors: addAddressFormik.errors.senderName,
                                        fieldProps: addAddressFormik.getFieldProps("senderName"),
                                        onChangeHandler: senderNameHandler,
                                        value: addAddressFormik.values.senderName
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                    alignItems: "center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_fields_CustomTextFieldWithFormik__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        required: "true",
                                        type: "number",
                                        label: t("Sender Phone"),
                                        touched: addAddressFormik.touched.senderPhone,
                                        errors: addAddressFormik.errors.senderPhone,
                                        fieldProps: addAddressFormik.getFieldProps("senderPhone"),
                                        onChangeHandler: senderPhoneHandler,
                                        value: addAddressFormik.values.senderPhone
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                    direction: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                            children: t("Pickup Address")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                            spacing: 0.5,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            direction: "row",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                onClick: handleOpen,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                        color: theme.palette.primary.main,
                                                        children: t("Set from map")
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Room__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                        sx: {
                                                            width: "16px",
                                                            height: "16px"
                                                        },
                                                        color: "primary"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GetLocationFrom__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        handleLocation: handleLocation,
                                        sender: "true",
                                        fromparcel: "true",
                                        formattedAddress: senderFormattedAddress,
                                        currentLocationValue: currentLocationValue,
                                        testLocation: testLocation,
                                        setCurrentLactionValue: setCurrentLactionValue
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                                        sx: {
                                            padding: "1rem"
                                        },
                                        elevation: 9,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SaveAddress__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            handleLocation: handleLocation,
                                            configData: configData,
                                            setSenderFormattedAddress: setSenderFormattedAddress,
                                            setSenderLocation: setSenderLocation,
                                            setSenderOptionalAddress: setSenderOptionalAddress,
                                            sender: "true"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_fields_CustomTextFieldWithFormik__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        type: "text",
                                        label: t("Street number"),
                                        touched: addAddressFormik.touched.senderRoad,
                                        errors: addAddressFormik.errors.senderRoad,
                                        fieldProps: addAddressFormik.getFieldProps("senderRoad"),
                                        onChangeHandler: senderRoadHandler,
                                        value: addAddressFormik.values.senderRoad
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                                    direction: "row",
                                    spacing: 1.3,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_fields_CustomTextFieldWithFormik__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            type: "text",
                                            label: t("House no."),
                                            touched: addAddressFormik.touched.senderHouse,
                                            errors: addAddressFormik.errors.senderHouse,
                                            fieldProps: addAddressFormik.getFieldProps("senderHouse"),
                                            onChangeHandler: senderHouseHandler,
                                            value: addAddressFormik.values.senderHouse
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_fields_CustomTextFieldWithFormik__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            type: "text",
                                            label: t("Floor no."),
                                            touched: addAddressFormik.touched.senderFloor,
                                            errors: addAddressFormik.errors.senderFloor,
                                            fieldProps: addAddressFormik.getFieldProps("senderFloor"),
                                            onChangeHandler: senderFloorHandler,
                                            value: addAddressFormik.values.senderFloor
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Map_MapModal__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                open: open,
                handleClose: handleClose,
                coords: coords,
                setSenderFormattedAddress: setSenderFormattedAddress,
                setSenderLocation: setSenderLocation,
                handleLocation: handleLocation,
                toparcel: "1"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SenderInfoForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 73130:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57987);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22021);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_2__, i18next__WEBPACK_IMPORTED_MODULE_3__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_2__, i18next__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const ValidationSchemaForRestaurant = ()=>{
    return yup__WEBPACK_IMPORTED_MODULE_1__.object({
        senderName: yup__WEBPACK_IMPORTED_MODULE_1__.string().required((0,i18next__WEBPACK_IMPORTED_MODULE_3__.t)("Sender name required")),
        senderPhone: yup__WEBPACK_IMPORTED_MODULE_1__.string().required((0,i18next__WEBPACK_IMPORTED_MODULE_3__.t)("Sender phone required")),
        receiverName: yup__WEBPACK_IMPORTED_MODULE_1__.string().required((0,i18next__WEBPACK_IMPORTED_MODULE_3__.t)("Receiver name required")),
        receiverPhone: yup__WEBPACK_IMPORTED_MODULE_1__.string().required((0,i18next__WEBPACK_IMPORTED_MODULE_3__.t)("Receiver phone required"))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidationSchemaForRestaurant);

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

/***/ 8953:
/***/ ((module) => {

module.exports = require("@mui/icons-material/DriveFileRenameOutlineOutlined");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,8889,5269,7113,4121,8861,9240,4369,801], () => (__webpack_exec__(79857)));
module.exports = __webpack_exports__;

})();
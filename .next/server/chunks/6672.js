"use strict";
exports.id = 6672;
exports.ids = [6672];
exports.modules = {

/***/ 67019:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ OrderApi)
/* harmony export */ });
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_0__]);
_MainApi__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const OrderApi = {
    placeOrder: (formData)=>{
        return _MainApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("/api/v1/customer/order/place", formData);
    },
    prescriptionPlaceOrder: (orderData)=>{
        const { store_id , distance , address , longitude , latitude , prescriptionImages , order_note  } = orderData;
        let formData = new FormData();
        formData.append("store_id", store_id);
        formData.append("distance", distance);
        formData.append("address", address);
        formData.append("longitude", longitude);
        formData.append("latitude", latitude);
        prescriptionImages.forEach((prescriptionImages)=>{
            formData.append("order_attachment[]", prescriptionImages);
        });
        formData.append("order_note", order_note);
        return _MainApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("/api/v1/customer/order/prescription/place", formData);
    },
    orderHistory: (orderType, limit, offset)=>{
        return _MainApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/api/v1/customer/order/${orderType}?limit=${limit}&offset=${offset}`);
    },
    orderDetails: (order_id)=>{
        return _MainApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/api/v1/customer/order/details?order_id=${order_id}`);
    },
    orderTracking: (order_id)=>{
        return _MainApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/api/v1/customer/order/track?order_id=${order_id}`);
    },
    CancelOrder: (formData)=>{
        return _MainApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("/api/v1/customer/order/cancel", formData);
    },
    FailedPaymentMethodUpdate: (formData)=>{
        return _MainApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("/api/v1/customer/order/payment-method", formData);
    },
    FailedPaymentMethodCancel: (formData)=>{
        return _MainApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("/api/v1/customer/order/cancel", formData);
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 91326:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ GoogleApi)
/* harmony export */ });
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_0__]);
_MainApi__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const GoogleApi = {
    placeApiAutocomplete: (search)=>{
        if (search && search !== "") {
            return _MainApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/api/v1/config/place-api-autocomplete?search_text=${search}`);
        }
    },
    placeApiDetails: (placeId)=>{
        return _MainApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/api/v1/config/place-api-details?placeid=${placeId}`);
    },
    getZoneId: (location)=>{
        return _MainApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/api/v1/config/get-zone-id?lat=${location.lat}&lng=${location.lng}`);
    },
    distanceApi: (origin, destination)=>{
        return _MainApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/api/v1/config/distance-api?origin_lat=${origin.latitude}&origin_lng=${origin.longitude}&destination_lat=${destination.lat ? destination.lat : destination?.latitude}&destination_lng=${destination.lng ? destination.lng : destination?.longitude}&mode=walking`);
    },
    geoCodeApi: (location)=>{
        return _MainApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/api/v1/config/geocode-api?lat=${location.lat}&lng=${location.lng}`);
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
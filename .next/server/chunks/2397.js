"use strict";
exports.id = 2397;
exports.ids = [2397];
exports.modules = {

/***/ 54410:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useGetStoresCategoriesItem)
/* harmony export */ });
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61176);
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60274);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67759);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_0__, _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__]);
([_MainApi__WEBPACK_IMPORTED_MODULE_0__, _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const getData = async (pageParams)=>{
    const { storeId , categoryId , offset , type , limit , minMax  } = pageParams;
    if (minMax[0] !== 0 && minMax[1] !== 1) {
        const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`${_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__/* .latest_items_api */ .vV}?store_id=${storeId}&category_id=${categoryId}&offset=${offset}&limit=${limit}&type=${type}&min_price=${minMax[0]}&max_price=${minMax[1]}`);
        return data;
    } else {
        const { data: data1  } = await _MainApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`${_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__/* .latest_items_api */ .vV}?store_id=${storeId}&category_id=${categoryId}&offset=${offset}&limit=${limit}&type=${type}`);
        return data1;
    }
};
function useGetStoresCategoriesItem(pageParams, handleSuccess) {
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)("stores-categories-item", ()=>getData(pageParams), {
        enabled: false,
        onSuccess: handleSuccess,
        onError: _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__/* .onErrorResponse */ .R
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 67454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E3": () => (/* binding */ initialState),
/* harmony export */   "I6": () => (/* binding */ reducer),
/* harmony export */   "om": () => (/* binding */ ACTION)
/* harmony export */ });
const initialState = {
    data: null,
    isSidebarOpen: false,
    categoryId: 0,
    offSet: 1,
    searchKey: "",
    minMax: [
        0,
        1
    ],
    type: "all"
};
const reducer = (state, action)=>{
    switch(action.type){
        case "setData":
            return {
                ...state,
                data: action.payload
            };
        case "setIsSidebarOpen":
            return {
                ...state,
                isSidebarOpen: action.payload
            };
        case "setCategoryId":
            return {
                ...state,
                categoryId: action.payload
            };
        case "setOffSet":
            return {
                ...state,
                offSet: action.payload
            };
        case "setSearchKey":
            return {
                ...state,
                searchKey: action.payload
            };
        case "setType":
            return {
                ...state,
                type: action.payload
            };
        case "setMinMax":
            return {
                ...state,
                minMax: action.payload
            };
        default:
            return state;
    }
};
const ACTION = {
    setData: "setData",
    setIsSidebarOpen: "setIsSidebarOpen",
    setCategoryId: "setCategoryId",
    setOffSet: "setOffSet",
    setSearchKey: "setSearchKey",
    setMinMax: "setMinMax",
    setType: "setType"
};


/***/ })

};
;
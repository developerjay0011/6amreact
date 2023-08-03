"use strict";
exports.id = 7113;
exports.ids = [7113];
exports.modules = {

/***/ 18050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J6": () => (/* binding */ SettingsContext),
/* harmony export */   "ix": () => (/* binding */ SettingsConsumer),
/* harmony export */   "mu": () => (/* binding */ SettingsProvider)
/* harmony export */ });
/* unused harmony exports restoreSettings, storeSettings */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



const initialSettings = {
    direction: "ltr",
    responsiveFontSizes: true,
    theme: "light"
};
const restoreSettings = ()=>{
    let settings = null;
    try {
        const storedData = window.localStorage.getItem("settings");
        if (storedData) {
            settings = JSON.parse(storedData);
        } else {
            settings = {
                direction: "ltr",
                responsiveFontSizes: true,
                theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
            };
        }
    } catch (err) {
        console.error(err);
    // If stored data is not a stringified JSON this will fail,
    // that's why we catch the error
    }
    return settings;
};
const storeSettings = (settings)=>{
    window.localStorage.setItem("settings", JSON.stringify(settings));
};
const SettingsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    settings: initialSettings,
    saveSettings: ()=>{}
});
const SettingsProvider = (props)=>{
    const { children  } = props;
    const [settings, setSettings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialSettings);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const restoredSettings = restoreSettings();
        if (restoredSettings) {
            setSettings(restoredSettings);
        }
    }, []);
    const saveSettings = (updatedSettings)=>{
        setSettings(updatedSettings);
        storeSettings(updatedSettings);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingsContext.Provider, {
        value: {
            settings,
            saveSettings
        },
        children: children
    });
};
SettingsProvider.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired)
};
const SettingsConsumer = SettingsContext.Consumer;


/***/ }),

/***/ 90603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ getCurrentModuleType)
/* harmony export */ });
const getCurrentModuleType = ()=>{
    if (false) {}
};


/***/ }),

/***/ 23614:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AQ": () => (/* binding */ setCampaignItem),
/* harmony export */   "Aw": () => (/* binding */ setDecrementToCartItem),
/* harmony export */   "IN": () => (/* binding */ setBuyNowItemList),
/* harmony export */   "L8": () => (/* binding */ setCampaignItemList),
/* harmony export */   "O$": () => (/* binding */ setTotalAmount),
/* harmony export */   "Oj": () => (/* binding */ setUpdateItemToCart),
/* harmony export */   "RV": () => (/* binding */ setCart),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "aE": () => (/* binding */ setClearCart),
/* harmony export */   "jh": () => (/* binding */ setRemoveItemFromCart),
/* harmony export */   "o8": () => (/* binding */ setWalletAmount),
/* harmony export */   "qT": () => (/* binding */ setUpdateVariationToCart),
/* harmony export */   "yG": () => (/* binding */ setIncrementToCartItem)
/* harmony export */ });
/* unused harmony exports cartSlice, cart, setVariationToCart */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper_functions_getCurrentModuleType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90603);
/* harmony import */ var _utils_CustomFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81261);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_CustomFunctions__WEBPACK_IMPORTED_MODULE_2__]);
_utils_CustomFunctions__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const initialState = {
    cartItem: null,
    cartList: [],
    campaignItemList: [],
    buyNowItemList: [],
    campaignItem: null,
    type: "regular",
    totalAmount: null,
    walletAmount: null
};
const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "cart",
    initialState,
    reducers: {
        setCart: (state = initialState, action)=>{
            if (action.payload.module_type !== "food") {
                let isItemExist = state.cartList.find((obj)=>obj.id === action.payload.id);
                if (isItemExist) {
                    if (isItemExist?.selectedOption) {
                        if (JSON.stringify(isItemExist?.selectedOption) !== JSON.stringify(action.payload?.selectedOption)) {
                            state.cartList.push(action.payload);
                        }
                    } else {
                        state.cartList.push(action.payload);
                    }
                } else {
                    state.cartList = [
                        ...state.cartList,
                        {
                            ...action.payload
                        }
                    ];
                }
            } else {
                //for food module
                let isPayloadItemMatches = false;
                if (state.cartList.length > 0) {
                    for(let i = 0; i < state.cartList.length; i++){
                        if (lodash__WEBPACK_IMPORTED_MODULE_1___default().isEqual(state.cartList[i].food_variations, action.payload.food_variations) && state.cartList[i].id === action.payload.id) {
                            isPayloadItemMatches = true;
                            state.cartList[i] = {
                                ...state.cartList[i],
                                totalPrice: state.cartList[i].totalPrice + action.payload.totalPrice,
                                quantity: state.cartList[i].quantity + action.payload.quantity
                            };
                            return;
                        } else {
                            isPayloadItemMatches = false;
                        }
                    }
                    if (!isPayloadItemMatches) {
                        state.cartList.push(action.payload);
                    }
                } else {
                    state.cartList = [
                        ...state?.cartList,
                        {
                            ...action.payload
                        }
                    ];
                }
            }
        },
        setVariationToCart: (state = initialState, action)=>{
            let isAvailable = state.cartList.filter((item)=>item.id === action.payload.id);
            if (isAvailable.length > 0) {
                let isA = isAvailable.filter((item)=>item.variation.some((va)=>JSON.stringify(va) === JSON.stringify(action.payload.variation[0])));
                if (isA.length === 0) {
                    state.cartList.push(action.payload);
                }
            }
        },
        setUpdateItemToCart: (state = initialState, action)=>{
            let index = state.cartList.findIndex((item)=>item.id === action.payload.id && JSON.stringify(item?.selectedOption) === JSON.stringify(action.payload?.selectedOption));
            let newData = state.cartList.map((item, i)=>i === index ? action.payload : item);
            state.cartList = newData;
        },
        setUpdateVariationToCart: (state = initialState, action)=>{
            if (action.payload.newObj.module_type === "food") {
                const index = state.cartList.findIndex((item, index)=>index === action.payload.indexNumber);
                const newData = state.cartList.map((item, i)=>i === index ? action.payload.newObj : item);
                state.cartList = newData;
            }
        },
        setIncrementToCartItem: (state = initialState, action)=>{
            const price = action.payload.price + (0,_utils_CustomFunctions__WEBPACK_IMPORTED_MODULE_2__/* .getTotalVariationsPrice */ .SE)(action.payload.food_variations);
            //here quantity is incremented with number 1
            const productPrice = price * (action.payload.quantity + 1);
            const discountedTotalPrice = (0,_utils_CustomFunctions__WEBPACK_IMPORTED_MODULE_2__/* .getConvertDiscount */ .Tx)(action.payload.discount_type === "amount" ? action.payload.discount * (action.payload.quantity + 1) : action.payload.discount, action.payload.discount_type, productPrice, action.payload.store_discount);
            let newData;
            if ((0,_helper_functions_getCurrentModuleType__WEBPACK_IMPORTED_MODULE_3__/* .getCurrentModuleType */ .X)() === "food") {
                if (action.payload.food_variations.length > 0) {
                    let index = state.cartList.findIndex((item)=>lodash__WEBPACK_IMPORTED_MODULE_1___default().isEqual(item.food_variations, action.payload.food_variations));
                    newData = state.cartList.map((item, i)=>// action.payload.totalPrice * action.payload.quantity  +
                        i === index ? {
                            ...item,
                            totalPrice: discountedTotalPrice,
                            quantity: action.payload.quantity + 1
                        } : item);
                } else {
                    newData = state.cartList.map((item)=>item.id === action.payload.id ? {
                            ...item,
                            totalPrice: discountedTotalPrice,
                            quantity: action.payload.quantity + 1
                        } : item);
                }
            } else {
                newData = state.cartList.map((stateItem)=>{
                    if (stateItem.id === action.payload.id && JSON.stringify(stateItem?.selectedOption) === JSON.stringify(action.payload?.selectedOption)) {
                        return {
                            ...action.payload,
                            price: action.payload.price,
                            quantity: action.payload.quantity + 1,
                            totalPrice: (action.payload?.selectedOption?.length > 0 ? action.payload?.selectedOption?.[0]?.price : action.payload.price) * (action.payload.quantity + 1)
                        };
                    } else {
                        return stateItem;
                    }
                });
            }
            state.cartList = newData;
        },
        setDecrementToCartItem: (state = initialState, action)=>{
            const price = action.payload.price + (0,_utils_CustomFunctions__WEBPACK_IMPORTED_MODULE_2__/* .getTotalVariationsPrice */ .SE)(action.payload.food_variations);
            //here quantity is decremented with number 1
            const productPrice = price * (action.payload.quantity - 1);
            const discountedTotalPrice = (0,_utils_CustomFunctions__WEBPACK_IMPORTED_MODULE_2__/* .getConvertDiscount */ .Tx)(action.payload.discount_type === "amount" ? action.payload.discount * (action.payload.quantity - 1) : action.payload.discount, action.payload.discount_type, productPrice, action.payload.store_discount);
            // without food module
            let newData;
            if ((0,_helper_functions_getCurrentModuleType__WEBPACK_IMPORTED_MODULE_3__/* .getCurrentModuleType */ .X)() === "food") {
                if (action.payload.food_variations.length > 0) {
                    let index = state.cartList.findIndex((item)=>lodash__WEBPACK_IMPORTED_MODULE_1___default().isEqual(item.food_variations, action.payload.food_variations));
                    newData = state.cartList.map((item, i)=>i === index ? {
                            ...item,
                            totalPrice: discountedTotalPrice,
                            quantity: action.payload.quantity - 1
                        } : item);
                } else {
                    newData = state.cartList.map((item)=>item.id === action.payload.id ? {
                            ...item,
                            totalPrice: discountedTotalPrice,
                            quantity: action.payload.quantity - 1
                        } : item);
                }
            } else {
                newData = state.cartList.map((stateItem)=>{
                    if (stateItem.id === action.payload.id && JSON.stringify(stateItem?.selectedOption) === JSON.stringify(action.payload?.selectedOption)) {
                        return {
                            ...action.payload,
                            price: action.payload.price,
                            quantity: action.payload.quantity - 1,
                            totalPrice: (action.payload?.selectedOption?.length > 0 ? action.payload?.selectedOption?.[0]?.price : action.payload.price) * (action.payload.quantity - 1)
                        };
                    } else {
                        return stateItem;
                    }
                });
            }
            state.cartList = newData;
        },
        setRemoveItemFromCart: (state = initialState, action)=>{
            state.cartList = state.cartList.filter((cartItem)=>cartItem.module_type === action.payload.module_type ? cartItem?.id === action.payload.id ? JSON.stringify(cartItem?.selectedOption) !== JSON.stringify(action.payload?.selectedOption) : cartItem : cartItem);
        },
        setCampaignItemList: (state = initialState, action)=>{
            state.campaignItemList = [
                action.payload
            ];
        },
        setBuyNowItemList: (state = initialState, action)=>{
            state.buyNowItemList = [
                action.payload
            ];
        },
        setCampaignItem: (state = initialState, action)=>{
            state.campaignItem = action.payload;
        },
        setClearCart: (state = initialState, action)=>{
            const currentModule = (0,_helper_functions_getCurrentModuleType__WEBPACK_IMPORTED_MODULE_3__/* .getCurrentModuleType */ .X)();
            state.cartList = state.cartList.filter((item)=>item?.module_type !== currentModule);
        },
        setTotalAmount: (state, action)=>{
            state.totalAmount = action.payload;
        },
        setWalletAmount: (state, action)=>{
            state.walletAmount = action.payload;
        }
    }
});
const { cart , setCart , setUpdateItemToCart , setVariationToCart , setCampaignItemList , setBuyNowItemList , setCampaignItem , setClearCart , setIncrementToCartItem , setDecrementToCartItem , setRemoveItemFromCart , setUpdateVariationToCart , setTotalAmount , setWalletAmount  } = cartSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 53236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Zr": () => (/* binding */ setConfigData),
/* harmony export */   "m0": () => (/* binding */ setLanguage),
/* harmony export */   "mY": () => (/* binding */ setCountryCode),
/* harmony export */   "rm": () => (/* binding */ setModules)
/* harmony export */ });
/* unused harmony export configDataSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    configData: null,
    language: "",
    countryCode: "",
    modules: []
};
// Action creators are generated for each case reducer function
const configDataSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "config-data",
    initialState,
    reducers: {
        setConfigData: (state, action)=>{
            state.configData = action.payload;
        },
        setLanguage: (state, action)=>{
            state.language = action.payload;
        },
        setCountryCode: (state, action)=>{
            state.countryCode = action.payload;
        },
        setModules: (state, action)=>{
            state.modules = action.payload.map((item)=>item);
        }
    }
});
const { setConfigData , setCountryCode , setLanguage , setModules  } = configDataSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (configDataSlice.reducer);


/***/ }),

/***/ 59502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports exampleSlice, setExample */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    example: null
};
// Action creators are generated for each case reducer function
const exampleSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "example",
    initialState,
    reducers: {
        setExample: (state, action)=>{
            state.example = action.payload;
        }
    }
});
const { setExample  } = exampleSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exampleSlice.reducer);


/***/ }),

/***/ 50307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ij": () => (/* binding */ setJwtTokenByDispatch),
/* harmony export */   "kv": () => (/* binding */ setUserInfoByDispatch)
/* harmony export */ });
/* unused harmony export fbCredentialSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    userInfo: null,
    jwtToken: {
        credential: "",
        clientId: ""
    }
};
const fbCredentialSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "fbCredential",
    initialState,
    reducers: {
        setUserInfoByDispatch: (state, action)=>{
            state.userInfo = action.payload;
        },
        setJwtTokenByDispatch: (state, action)=>{
            state.jwtToken = {
                credential: action.payload.accessToken,
                clientId: action.payload.accessToken
            };
        }
    }
});
// Action creators are generated for each case reducer function
const { setUserInfoByDispatch , setJwtTokenByDispatch  } = fbCredentialSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fbCredentialSlice.reducer);


/***/ }),

/***/ 31426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WC": () => (/* binding */ setParcelCategories),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export parcelICategoriesSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    parcelCategories: null
};
// Action creators are generated for each case reducer function
const parcelICategoriesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "parcel-categories",
    initialState,
    reducers: {
        setParcelCategories: (state, action)=>{
            state.parcelCategories = action.payload;
        }
    }
});
const { setParcelCategories  } = parcelICategoriesSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parcelICategoriesSlice.reducer);


/***/ }),

/***/ 78137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "vz": () => (/* binding */ setParcelData)
/* harmony export */ });
/* unused harmony export parcelInfoDataSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    parcelInfo: null
};
// Action creators are generated for each case reducer function
const parcelInfoDataSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "parcel-data",
    initialState,
    reducers: {
        setParcelData: (state, action)=>{
            state.parcelInfo = action.payload;
        }
    }
});
const { setParcelData  } = parcelInfoDataSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parcelInfoDataSlice.reducer);


/***/ }),

/***/ 65337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ey": () => (/* binding */ setCouponInfo),
/* harmony export */   "R4": () => (/* binding */ setCouponType),
/* harmony export */   "Rf": () => (/* binding */ setLogoutUser),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "av": () => (/* binding */ setUser)
/* harmony export */ });
/* unused harmony export profileInfoSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    profileInfo: null,
    couponInfo: null,
    couponType: null
};
const profileInfoSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action)=>{
            state.profileInfo = action.payload;
        },
        setLogoutUser: (state, action)=>{
            state.profileInfo = action.payload;
        },
        setCouponInfo: (state, action)=>{
            state.couponInfo = action.payload;
        },
        setCouponType: (state, action)=>{
            state.couponType = action.payload;
        }
    }
});
// Action creators are generated for each case reducer function
const { setUser , setLogoutUser , setCouponInfo , setCouponType  } = profileInfoSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (profileInfoSlice.reducer);


/***/ }),

/***/ 5795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BC": () => (/* binding */ setFilterDrawerOpenByDispatch),
/* harmony export */   "V2": () => (/* binding */ setSortbyByDispatch),
/* harmony export */   "Yo": () => (/* binding */ setRatingByDispatch),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "gr": () => (/* binding */ setDeliveryManInfoByDispatch),
/* harmony export */   "jK": () => (/* binding */ setFilterbyByDispatch),
/* harmony export */   "jj": () => (/* binding */ setPriceByDispatch)
/* harmony export */ });
/* unused harmony exports searchFilterSlice, setBannerFoodByDispatch */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    isFilterDrawerOpen: false,
    filterData: {
        sortBy: "",
        filterBy: {
            veg: false,
            nonVeg: false,
            currentAvailableFoods: false,
            discountedFoods: false
        },
        price: "",
        rating: "",
        deliveryManInfo: null
    }
};
const searchFilterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "search-filter",
    initialState,
    reducers: {
        setSortbyByDispatch: (state, action)=>{
            state.filterData.sortBy = action.payload;
        },
        setFilterbyByDispatch: (state, action)=>{
            state.filterData.filterBy = action.payload;
        },
        setPriceByDispatch: (state, action)=>{
            state.filterData.price = action.payload;
        },
        setRatingByDispatch: (state, action)=>{
            state.filterData.rating = action.payload;
        },
        setFilterDrawerOpenByDispatch: (state, action)=>{
            state.isFilterDrawerOpen = action.payload;
        },
        setDeliveryManInfoByDispatch: (state, action)=>{
            state.deliveryManInfo = action.payload;
        }
    }
});
// Action creators are generated for each case reducer function
const { setSortbyByDispatch , setFilterbyByDispatch , setPriceByDispatch , setRatingByDispatch , setFilterDrawerOpenByDispatch , setBannerFoodByDispatch , setDeliveryManInfoByDispatch  } = searchFilterSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchFilterSlice.reducer);


/***/ }),

/***/ 8697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DG": () => (/* binding */ setCategories),
/* harmony export */   "LH": () => (/* binding */ setResetStoredData),
/* harmony export */   "Ww": () => (/* binding */ setPopularStores),
/* harmony export */   "ZD": () => (/* binding */ setNewArrivalStores),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Ze": () => (/* binding */ setBestReviewedItems),
/* harmony export */   "_q": () => (/* binding */ setPopularItemsNearby),
/* harmony export */   "dx": () => (/* binding */ setRunningCampaigns),
/* harmony export */   "hT": () => (/* binding */ setNewStores),
/* harmony export */   "lh": () => (/* binding */ setBasicCampaigns),
/* harmony export */   "vV": () => (/* binding */ setFeaturedCategories),
/* harmony export */   "zG": () => (/* binding */ setBanners)
/* harmony export */ });
/* unused harmony exports storedDataSlice, setSubCategories, setModules */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    categories: [],
    subCategories: [],
    popularStores: [],
    newStores: [],
    basicCampaigns: [],
    banners: {
        banners: [],
        campaigns: []
    },
    featuredCategories: [],
    popularItemsNearby: {
        products: []
    },
    runningCampaigns: [],
    newArrivalStores: [],
    bestReviewedItems: {
        products: []
    },
    modules: []
};
const storedDataSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "stored-data",
    initialState,
    reducers: {
        setCategories: (state, action)=>{
            state.categories = action.payload;
        },
        setSubCategories: (state, action)=>{
            state.subCategories = action.payload;
        },
        setPopularStores: (state, action)=>{
            state.popularStores = action.payload;
        },
        setNewStores: (state, action)=>{
            state.newStores = action.payload;
        },
        setBasicCampaigns: (state, action)=>{
            state.basicCampaigns = action.payload;
        },
        setBanners: (state, action)=>{
            state.banners.banners = action.payload.banners;
            state.banners.campaigns = action.payload.campaigns;
        },
        setFeaturedCategories: (state, action)=>{
            state.featuredCategories = action.payload;
        },
        setPopularItemsNearby: (state, action)=>{
            state.popularItemsNearby = {
                ...action.payload,
                products: action.payload.products
            };
        },
        setRunningCampaigns: (state, action)=>{
            state.runningCampaigns = action.payload;
        },
        setNewArrivalStores: (state, action)=>{
            state.newArrivalStores = action.payload;
        },
        setBestReviewedItems: (state, action)=>{
            state.bestReviewedItems = {
                ...action.payload,
                products: action.payload.products
            };
        },
        setModules: (state, action)=>{
            state.modules = action.payload;
        },
        setResetStoredData: (state, action)=>{
            return initialState;
        }
    }
});
// Action creators are generated for each case reducer function
const { setCategories , setSubCategories , setPopularStores , setNewStores , setBasicCampaigns , setBanners , setFeaturedCategories , setPopularItemsNearby , setRunningCampaigns , setNewArrivalStores , setBestReviewedItems , setModules , setResetStoredData  } = storedDataSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storedDataSlice.reducer);


/***/ }),

/***/ 92821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports themeSettingsSlice, setThemeSettings */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    settings: {
        direction: "ltr",
        responsiveFontSizes: true,
        theme: "light"
    }
};
// Action creators are generated for each case reducer function
const themeSettingsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "theme-settings",
    initialState,
    reducers: {
        setThemeSettings: (state, action)=>{
            state.settings = action.payload;
        }
    }
});
const { setThemeSettings  } = themeSettingsSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themeSettingsSlice.reducer);


/***/ }),

/***/ 67493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$w": () => (/* binding */ setSelectedModule),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "wk": () => (/* binding */ setOrderType)
/* harmony export */ });
/* unused harmony export utilsSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    selectedModule: null,
    orderType: 0
};
const utilsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "utils-data",
    initialState,
    reducers: {
        setSelectedModule: (state, action)=>{
            state.selectedModule = action.payload;
        },
        setOrderType: (state, action)=>{
            state.orderType = action.payload;
        }
    }
});
const { setSelectedModule , setOrderType  } = utilsSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (utilsSlice.reducer);


/***/ }),

/***/ 64134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$8": () => (/* binding */ removeWishListItem),
/* harmony export */   "$X": () => (/* binding */ removeWishListStore),
/* harmony export */   "KO": () => (/* binding */ addWishListStore),
/* harmony export */   "Q5": () => (/* binding */ setWishList),
/* harmony export */   "TM": () => (/* binding */ addWishList),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "nY": () => (/* binding */ clearWishList)
/* harmony export */ });
/* unused harmony export wishListSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    wishLists: {
        item: [],
        store: []
    }
};
const wishListSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "wishLists",
    initialState,
    reducers: {
        setWishList: (state, action)=>{
            state.wishLists = action.payload;
        },
        addWishList: (state, action)=>{
            wishLists: state.wishLists.item.push(action.payload);
        },
        addWishListStore: (state, action)=>{
            wishLists: state.wishLists.store.push(action.payload);
        },
        removeWishListItem: (state = initialState, action)=>{
            let tempWishList = state.wishLists.item?.filter((item)=>item.id !== action.payload);
            return {
                wishLists: {
                    ...state.wishLists,
                    item: [
                        ...tempWishList
                    ]
                }
            };
        },
        removeWishListStore: (state = initialState, action)=>{
            let tempWishList = state.wishLists.store?.filter((item)=>item.id !== action.payload);
            return {
                wishLists: {
                    ...state.wishLists,
                    store: [
                        ...tempWishList
                    ]
                }
            };
        },
        clearWishList: (state = initialState, action)=>{
            state.wishLists.item = action.payload;
            state.wishLists.store = action.payload;
        }
    }
});
// Action creators are generated for each case reducer function
const { setWishList , removeWishListItem , addWishList , removeWishListStore , addWishListStore , clearWishList  } = wishListSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wishListSlice.reducer);


/***/ }),

/***/ 40382:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _root_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83648);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98936);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14161);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_root_reducer__WEBPACK_IMPORTED_MODULE_1__]);
_root_reducer__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const persistConfig = {
    key: "sixam-mart",
    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default()),
    blacklist: [
        "storedData"
    ]
};
const persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_3__.persistReducer)(persistConfig, _root_reducer__WEBPACK_IMPORTED_MODULE_1__/* .rootReducer */ .Q);
const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: false
        })
});
//store.js
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: persistedReducer
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 83648:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ rootReducer)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slices_example__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59502);
/* harmony import */ var _slices_themeSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92821);
/* harmony import */ var _slices_configData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53236);
/* harmony import */ var _slices_parcelDeliveryInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78137);
/* harmony import */ var _slices_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67493);
/* harmony import */ var _slices_profileInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65337);
/* harmony import */ var _slices_parcelCategoryData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31426);
/* harmony import */ var _slices_cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23614);
/* harmony import */ var _slices_wishList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64134);
/* harmony import */ var _slices_searchFilter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5795);
/* harmony import */ var _slices_fbCredentials__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50307);
/* harmony import */ var _slices_storedData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8697);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_slices_cart__WEBPACK_IMPORTED_MODULE_8__]);
_slices_cart__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













//register all reducers here
const rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
    example: _slices_example__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP,
    themeSettings: _slices_themeSettings__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,
    configData: _slices_configData__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP,
    parcelInfoData: _slices_parcelDeliveryInfo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,
    utilsData: _slices_utils__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP,
    profileInfo: _slices_profileInfo__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP,
    parcelCategories: _slices_parcelCategoryData__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP,
    cart: _slices_cart__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,
    wishList: _slices_wishList__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,
    searchFilterStore: _slices_searchFilter__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP,
    fbCredentialsStore: _slices_fbCredentials__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP,
    storedData: _slices_storedData__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81261:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BH": () => (/* binding */ getProductDiscount),
/* harmony export */   "EN": () => (/* binding */ handleProductValueWithOutDiscount),
/* harmony export */   "J2": () => (/* binding */ getNumberWithConvertedDecimalPoint),
/* harmony export */   "KF": () => (/* binding */ getVariation),
/* harmony export */   "NY": () => (/* binding */ handleDistance),
/* harmony export */   "P": () => (/* binding */ getSubTotalPrice),
/* harmony export */   "PR": () => (/* binding */ getInfoFromZoneData),
/* harmony export */   "SE": () => (/* binding */ getTotalVariationsPrice),
/* harmony export */   "Tw": () => (/* binding */ getDayNumber),
/* harmony export */   "Tx": () => (/* binding */ getConvertDiscount),
/* harmony export */   "WT": () => (/* binding */ getDeliveryFees),
/* harmony export */   "YQ": () => (/* binding */ handleTotalAmountWithAddons),
/* harmony export */   "Yu": () => (/* binding */ isFoodAvailableBySchedule),
/* harmony export */   "_e": () => (/* binding */ isAvailable),
/* harmony export */   "bE": () => (/* binding */ getIndexFromArrayByComparision),
/* harmony export */   "be": () => (/* binding */ getTaxableTotalPrice),
/* harmony export */   "c4": () => (/* binding */ calculateItemBasePrice),
/* harmony export */   "gM": () => (/* binding */ FormatedDateWithTime),
/* harmony export */   "hU": () => (/* binding */ getAllSchedule),
/* harmony export */   "nK": () => (/* binding */ isObjectEmpty),
/* harmony export */   "r7": () => (/* binding */ getCalculatedTotal),
/* harmony export */   "vZ": () => (/* binding */ getFinalTotalPrice),
/* harmony export */   "x7": () => (/* binding */ getCouponDiscount)
/* harmony export */ });
/* unused harmony exports selectedAddonsTotal, currentTime, cartItemsTotalAmount, getItemTotalWithoutDiscount */
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formatedDays__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12212);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22021);
/* harmony import */ var _helper_functions_getCurrentModuleType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90603);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40382);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_2__, _redux_store__WEBPACK_IMPORTED_MODULE_3__]);
([i18next__WEBPACK_IMPORTED_MODULE_2__, _redux_store__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const getNumberWithConvertedDecimalPoint = (amount, digitAfterDecimalPoint)=>{
    if (amount === 0) {
        return amount;
    } else {
        return (amount * 100 / 100).toFixed(Number.parseInt(digitAfterDecimalPoint));
    }
};
const isAvailable = (start, end)=>{
    const startTime = moment__WEBPACK_IMPORTED_MODULE_0___default()(start, "HH:mm:ss");
    const endTime = moment__WEBPACK_IMPORTED_MODULE_0___default()(end, "HH:mm:ss");
    let currentTime = moment__WEBPACK_IMPORTED_MODULE_0___default()();
    return moment__WEBPACK_IMPORTED_MODULE_0___default()(currentTime).isBetween(startTime, endTime);
};
const handleTotalAmountWithAddons = (mainTotalAmount, selectedAddOns)=>{
    if (selectedAddOns?.length > 0) {
        let selectedAddonsTotalPrice = 0;
        selectedAddOns.forEach((item)=>selectedAddonsTotalPrice += item.price * item.quantity);
        return mainTotalAmount + selectedAddonsTotalPrice;
    } else {
        return mainTotalAmount;
    }
};
const getIndexFromArrayByComparision = (arrayOfObjects, object)=>{
    return arrayOfObjects.findIndex((item)=>_.isEqual(item.food_variations, object.food_variations) && item.id === object.id);
};
const calculateItemBasePrice = (item, selectedOptions)=>{
    let basePrice = item?.price;
    if (selectedOptions.length > 0) {
        selectedOptions?.forEach((option)=>{
            if (option.isSelected === true) {
                basePrice += Number.parseInt(option?.optionPrice);
            }
        });
    }
    return basePrice;
// if(item)
};
const FormatedDateWithTime = (date)=>{
    let dateString = moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format("YYYY-MM-DD hh:mm a");
    return dateString;
};
const getDayNumber = (day)=>{
    switch(day){
        case "Sunday":
            {
                return 0;
            }
        case "Monday":
            {
                return 1;
            }
        case "Tuesday":
            {
                return 2;
            }
        case "Wednesday":
            {
                return 3;
            }
        case "Thursday":
            {
                return 4;
            }
        case "Friday":
            {
                return 5;
            }
        case "Saturday":
            {
                return 6;
            }
    }
};
const handleVariationValuesSum = (productVariations)=>{
    let sum = 0;
    if (productVariations.length > 0) {
        productVariations?.forEach((pVal)=>{
            pVal?.values?.forEach((cVal)=>{
                if (cVal?.isSelected) {
                    sum += Number.parseInt(cVal.optionPrice);
                }
            });
        });
    }
    return sum;
};
const handleValuesSum = (productVariations)=>{
    let sum = 0;
    if (productVariations.length > 0) {
        productVariations?.forEach((pVal)=>sum += Number.parseInt(pVal.price));
    }
    return sum;
};
const handleProductValueWithOutDiscount = (product)=>{
    let productPrice = product.price;
    if ((0,_helper_functions_getCurrentModuleType__WEBPACK_IMPORTED_MODULE_4__/* .getCurrentModuleType */ .X)() === "food") {
        if (product.food_variations.length > 0) {
            productPrice += handleVariationValuesSum(product.food_variations);
            return productPrice;
        } else {
            return productPrice;
        }
    } else {
        if (product?.variations?.length > 0) {
            if (product?.selectedOption?.length > 0) {
                productPrice = product?.selectedOption?.[0]?.price;
                return productPrice;
            }
        } else {
            productPrice = product.price;
            return productPrice;
        }
    }
};
const selectedAddonsTotal = (addOns)=>{
    if (addOns?.length > 0) {
        let vv = addOns?.reduce((total, addOn)=>addOn.price * addOn.quantity + total, 0);
        return vv;
    } else {
        return 0;
    }
};
const handleValueWithOutDiscount = (product)=>{
    let productPrice = product.price;
    if (product.selectedOption.length > 0) {
        productPrice = handleValuesSum(product.selectedOption);
        return productPrice;
    } else {
        return productPrice;
    }
};
const handlePurchasedAmount = (cartList)=>{
    if ((0,_helper_functions_getCurrentModuleType__WEBPACK_IMPORTED_MODULE_4__/* .getCurrentModuleType */ .X)() === "food") {
        return cartList.reduce((total, product)=>(product.food_variations.length > 0 ? handleProductValueWithOutDiscount(product) : product.price) * product.quantity + selectedAddonsTotal(product.selectedAddons) + total, 0);
    } else {
        return cartList.reduce((total, product)=>(product?.selectedOption?.length > 0 ? handleValueWithOutDiscount(product) : product.price) * product.quantity + total, 0);
    }
};
const getCouponDiscount = (couponDiscount, storeData, cartList)=>{
    if (couponDiscount) {
        let purchasedAmount = handlePurchasedAmount(cartList);
        if (purchasedAmount >= couponDiscount.min_purchase) {
            switch(couponDiscount.coupon_type){
                case "zone_wise":
                    let zoneId = JSON.parse(couponDiscount.data);
                    if (Number.parseInt(zoneId[0]) === Number.parseInt(couponDiscount.zoneId[0])) {
                        if (couponDiscount && couponDiscount.discount_type === "amount") {
                            if (couponDiscount.max_discount === 0) {
                                return couponDiscount.discount;
                            } else {
                                return couponDiscount.discount;
                            }
                        } else {
                            let percentageWiseDis = (purchasedAmount - getProductDiscount(cartList, storeData)) * (couponDiscount.discount / 100);
                            if (couponDiscount.max_discount === 0) {
                                return percentageWiseDis;
                            } else {
                                if (percentageWiseDis >= couponDiscount.max_discount) {
                                    return couponDiscount.max_discount;
                                } else {
                                    return percentageWiseDis;
                                }
                            }
                        }
                    } else {
                        return 0;
                    }
                    break;
                case "store_wise":
                    let storeId = JSON.parse(couponDiscount.data);
                    if (Number.parseInt(storeId[0]) === storeData?.id) {
                        if (couponDiscount && couponDiscount.discount_type === "amount") {
                            if (couponDiscount.max_discount === 0) {
                                return couponDiscount.discount;
                            } else {}
                        } else {
                            let percentageWiseDis1 = (purchasedAmount - getProductDiscount(cartList, storeData)) * (couponDiscount.discount / 100);
                            if (couponDiscount.max_discount === 0) {
                                return percentageWiseDis1;
                            } else {
                                if (percentageWiseDis1 >= couponDiscount.max_discount) {
                                    return couponDiscount.max_discount;
                                } else {
                                    return percentageWiseDis1;
                                }
                            }
                        }
                    } else {
                        return 0;
                    }
                    break;
                case "free_delivery":
                    return 0;
                case "default":
                    if (couponDiscount && couponDiscount.discount_type === "amount") {
                        if (couponDiscount.max_discount === 0) {
                            return couponDiscount.discount;
                        } else {
                            return couponDiscount.discount;
                        }
                    } else if (true) {
                        let percentageWiseDis2 = (purchasedAmount - getProductDiscount(cartList, storeData)) * (couponDiscount.discount / 100);
                        if (couponDiscount.max_discount === 0) {
                            return percentageWiseDis2;
                        } else {
                            if (percentageWiseDis2 >= couponDiscount.max_discount) {
                                return couponDiscount.max_discount;
                            } else {
                                return percentageWiseDis2;
                            }
                        }
                    }
            }
        } else {
            return 0;
        }
    }
};
const getTaxableTotalPrice = (items, couponDiscount, storeData)=>{
    const isTaxIncluded = _redux_store__WEBPACK_IMPORTED_MODULE_3__/* .store */ .h?.getState?.()?.configData?.tax_included === 1;
    let tax = storeData?.tax || 0;
    let total = handlePurchasedAmount(items) - getProductDiscount(items, storeData) - (couponDiscount ? getCouponDiscount(couponDiscount, storeData, items) : 0);
    if (isTaxIncluded) {
        return total * tax / (100 + tax);
    } else {
        return total * tax / 100;
    }
};
// export const getTaxableTotalPrice = (items, couponDiscount, storeData) => {
//   const isTaxIncluded = store?.getState?.()?.configData?.tax_included === 1;
//   let tax = storeData?.data?.tax;
//   let total =
//     items.reduce(
//       (total, product) =>
//         (product.variations.length > 0
//           ? handleProductValueWithOutDiscount(product)
//           : product.price) *
//           product.quantity +
//         selectedAddonsTotal(product.selectedAddons) +
//         total,
//       0
//     ) -
//     getProductDiscount(items, storeData) -
//     (couponDiscount ? getCouponDiscount(couponDiscount, storeData, items) : 0);
//
//   if (isTaxIncluded) {
//     return (total * tax) / (100 + tax);
//   } else {
//     return (total * tax) / 100;
//   }
// };
const handleTotalDiscountBasedOnModules = (items, restaurentDiscount, resDisType)=>{
    if ((0,_helper_functions_getCurrentModuleType__WEBPACK_IMPORTED_MODULE_4__/* .getCurrentModuleType */ .X)() === "food") {
        return items.reduce((total, product)=>(product.food_variations.length > 0 ? handleProductValueWithOutDiscount(product) - getConvertDiscount(restaurentDiscount, resDisType, handleProductValueWithOutDiscount(product), product.store_discount) : product.price - getConvertDiscount(restaurentDiscount, resDisType, product.price, product.store_discount)) * product.quantity + total, 0);
    } else {
        return items.reduce((total, product)=>(product?.selectedOption?.length > 0 ? handleValueWithOutDiscount(product) - getConvertDiscount(restaurentDiscount, resDisType, handleValueWithOutDiscount(product), product.store_discount) : product.price - getConvertDiscount(restaurentDiscount, resDisType, product.price, product.store_discount)) * product.quantity + total, 0);
    }
};
const handleProductWiseDiscount = (items)=>{
    let totalDiscount = 0;
    items?.forEach((item)=>{
        if (item.discount > 0) {
            if (item.discount_type === "amount") {
                totalDiscount += item?.discount * item.quantity;
            } else {
                let a = handleProductValueWithOutDiscount(item) - getConvertDiscount(item.discount, item.discount_type, handleProductValueWithOutDiscount(item), item.store_discount);
                totalDiscount += a * item.quantity;
            }
        } else {
            totalDiscount += item.discount;
        }
    });
    return totalDiscount;
};
const getProductDiscount = (items, storeData)=>{
    if (storeData?.discount) {
        let endDate = storeData?.discount?.end_date;
        let endTime = storeData?.discount?.end_time;
        let combinedEndDateTime = moment__WEBPACK_IMPORTED_MODULE_0___default()(`${endDate} ${endTime}`, "YYYY-MM-DD HH:mm:ss").format();
        let currentDateTime = moment__WEBPACK_IMPORTED_MODULE_0___default()().format();
        if (combinedEndDateTime > currentDateTime) {
            //shop wise discount
            let restaurentDiscount = storeData?.discount?.discount;
            let resDisType = storeData?.discount?.discount_type;
            let restaurentMinimumPurchase = storeData?.discount?.min_purchase;
            let restaurentMaxDiscount = storeData?.discount?.max_discount;
            let totalDiscount = handleTotalDiscountBasedOnModules(items, restaurentDiscount, resDisType);
            let purchasedAmount = items.reduce((total, product)=>((product?.food_variations.length > 0 ? handleProductValueWithOutDiscount(product) : product?.price) + (product?.selectedAddons?.length > 0 ? product?.selectedAddons?.reduce((total, addOn)=>addOn.price * addOn.quantity + total, 0) : 0)) * product.quantity + total, 0);
            if (purchasedAmount >= restaurentMinimumPurchase) {
                if (totalDiscount >= restaurentMaxDiscount) {
                    return restaurentMaxDiscount;
                } else {
                    return totalDiscount;
                }
            } else {
                return 0;
            }
        } else {
            //product wise discount
            return handleProductWiseDiscount(items);
        }
    } else {
        //product wise discount
        return handleProductWiseDiscount(items);
    }
};
const getConvertDiscount = (dis, disType, price, restaurantDiscount)=>{
    if (restaurantDiscount === 0) {
        if (dis !== 0) {
            if (disType === "amount") {
                price = price - dis;
            } else if (disType === "percent") {
                price = price - dis / 100 * price;
            }
        }
        return price;
    } else {
        return price - price * restaurantDiscount / 100;
    }
};
const getFinalTotalPrice = (items, couponDiscount, taxAmount, storeData)=>{
    let totalPrice = 0;
    if (items?.length > 0) {
        items.map((item)=>{
            totalPrice += item.price * item.quantity - getProductDiscount(items, storeData) + taxAmount;
        });
        if (couponDiscount && couponDiscount?.discount) return totalPrice - getCouponDiscount(couponDiscount, storeData, items);
        return totalPrice;
    }
    return totalPrice;
};
const currentTime = moment__WEBPACK_IMPORTED_MODULE_0___default()(_formatedDays__WEBPACK_IMPORTED_MODULE_1__/* .currentDate */ .cQ).format("HH:mm");
function recursive(start, end, close, list, schedule_order_slot_duration, day) {
    const checkedEnd = moment__WEBPACK_IMPORTED_MODULE_0___default()(end, "HH:mm").subtract(1, "minutes");
    const date = getDayNumber(_formatedDays__WEBPACK_IMPORTED_MODULE_1__/* .today */ .Lg) === day ? moment__WEBPACK_IMPORTED_MODULE_0___default()(_formatedDays__WEBPACK_IMPORTED_MODULE_1__/* .currentDate */ .cQ).format("yyyy-MM-DD") : _formatedDays__WEBPACK_IMPORTED_MODULE_1__/* .nextday */ .JM;
    if (end.isBefore(close) || moment__WEBPACK_IMPORTED_MODULE_0___default()(end).format("HH:mm") === moment__WEBPACK_IMPORTED_MODULE_0___default()(close).format("HH:mm") || moment__WEBPACK_IMPORTED_MODULE_0___default()(checkedEnd).format("HH:mm") === moment__WEBPACK_IMPORTED_MODULE_0___default()(close).format("HH:mm")) {
        let label = "";
        if (currentTime > moment__WEBPACK_IMPORTED_MODULE_0___default()(start).format("HH:mm") && currentTime < moment__WEBPACK_IMPORTED_MODULE_0___default()(end).format("HH:mm")) {
            label = (0,i18next__WEBPACK_IMPORTED_MODULE_2__.t)("Now");
        } else {
            label = `${moment__WEBPACK_IMPORTED_MODULE_0___default()(start).format("HH:mm")} - ${moment__WEBPACK_IMPORTED_MODULE_0___default()(checkedEnd).format("HH:mm")}`;
        }
        if (currentTime < moment__WEBPACK_IMPORTED_MODULE_0___default()(end).format("HH:mm") && getDayNumber(_formatedDays__WEBPACK_IMPORTED_MODULE_1__/* .today */ .Lg) === day || currentTime > moment__WEBPACK_IMPORTED_MODULE_0___default()(end).format("HH:mm") && getDayNumber(_formatedDays__WEBPACK_IMPORTED_MODULE_1__/* .today */ .Lg) !== day) {
            list.push({
                label: label,
                start: moment__WEBPACK_IMPORTED_MODULE_0___default()(start).format("HH:mm"),
                end: moment__WEBPACK_IMPORTED_MODULE_0___default()(checkedEnd).format("HH:mm") === moment__WEBPACK_IMPORTED_MODULE_0___default()(close).format("HH:mm") ? moment__WEBPACK_IMPORTED_MODULE_0___default()(checkedEnd).format("HH:mm") : moment__WEBPACK_IMPORTED_MODULE_0___default()(end).format("HH:mm"),
                value: moment__WEBPACK_IMPORTED_MODULE_0___default()(checkedEnd).format("HH:mm") === moment__WEBPACK_IMPORTED_MODULE_0___default()(close).format("HH:mm") ? `${date} ${moment__WEBPACK_IMPORTED_MODULE_0___default()(checkedEnd).format("HH:mm")}` : `${date} ${moment__WEBPACK_IMPORTED_MODULE_0___default()(end).format("HH:mm")}`
            });
        }
        recursive(end, moment__WEBPACK_IMPORTED_MODULE_0___default()(end, "HH:mm").add(schedule_order_slot_duration, "minutes"), close, list, schedule_order_slot_duration, day);
    } else {
        return list;
    }
}
const getAllSchedule = (day, schedules, schedule_order_slot_duration)=>{
    let list = [];
    if (schedules && schedules.length > 0) {
        const days = schedules.filter((s)=>s.day === day);
        for(let index = 0; index < days.length; index++){
            let close = moment__WEBPACK_IMPORTED_MODULE_0___default()(days[index].closing_time, "HH:mm");
            let start = moment__WEBPACK_IMPORTED_MODULE_0___default()(days[index].opening_time, "HH:mm");
            let end = moment__WEBPACK_IMPORTED_MODULE_0___default()(start, "HH:mm").add(schedule_order_slot_duration, "minutes");
            recursive(start, end, close, list, schedule_order_slot_duration, day);
        }
    }
    return list;
};
function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}
function radians(degrees) {
    return degrees * (Math.PI / 180);
}
const degrees = (doubleRadiance)=>{
    return doubleRadiance * (180 / Math.PI);
};
const toRadians = (degree)=>{
    return degree * Math.PI / 180;
};
function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    const earthRadius = 6378137.0;
    const startLatitude = lat1;
    const endLatitude = lat2;
    const startLongitude = lon1;
    const endLongitude = lon2;
    const dLat = toRadians(endLatitude - startLatitude);
    const dLon = toRadians(endLongitude - startLongitude);
    const a = Math.pow(Math.sin(dLat / 2), 2) + Math.pow(Math.sin(dLon / 2), 2) * Math.cos(toRadians(startLatitude)) * Math.cos(toRadians(endLatitude));
    const c = 2 * Math.asin(Math.sqrt(a));
    return earthRadius * c;
// var startLongitudeRadians = radians(lon1);
// var startLatitudeRadians = radians(lat1);
// var endLongitudeRadians = radians(lon2);
// var endLatitudeRadians = radians(lat2);
//
// var y =
//   Math.sin(endLongitudeRadians - startLongitudeRadians) *
//   Math.cos(endLatitudeRadians);
// var x =
//   Math.cos(startLatitudeRadians) * Math.sin(endLatitudeRadians) -
//   Math.sin(startLatitudeRadians) *
//     Math.cos(endLatitudeRadians) *
//     Math.cos(endLongitudeRadians - startLongitudeRadians);
//
// return degrees(Math.atan2(y, x));
// const earthRadiusKm = 6371;
// let dLat = degreesToRadians(lat2 - lat1);
// let dLon = degreesToRadians(lon2 - lon1);
//
// lat1 = degreesToRadians(lat1);
// lat2 = degreesToRadians(lat2);
//
// let a =
//   Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//   Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
// let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
// return earthRadiusKm * c;
}
const handleDistance = (distance, origin, destination)=>{
    if (distance?.[0]?.distance?.value) {
        return distance?.[0]?.distance?.value / 1000;
    } else if (distance?.[0]?.status === "ZERO_RESULTS") {
        return distanceInKmBetweenEarthCoordinates(origin?.latitude || origin?.lat, origin?.longitude || origin?.lng, destination?.lat || destination?.latitude, destination?.lng || destination?.longitude) / 1000;
    } else {
        return 0;
    }
};
const cartItemsTotalAmount = (cartList)=>{
    let totalAmount = 0;
    if (cartList.length > 0) {
        cartList.forEach((item)=>{
            totalAmount += handleTotalAmountWithAddons(item?.totalPrice, item?.selectedAddons);
        });
    }
    return totalAmount;
};
const handleGlobalDeliveryFee = (configData, totalOrderAmount, orderType, deliveryFee)=>{
    if (configData?.free_delivery_over !== null && configData?.free_delivery_over > 0 && totalOrderAmount > configData?.free_delivery_over || orderType === "take_away") {
        return 0;
    } else {
        if (configData?.minimum_shipping_charge >= deliveryFee) {
            return configData?.minimum_shipping_charge;
        } else {
            return deliveryFee;
        }
    }
};
const getInfoFromZoneData = (zoneData)=>{
    let chargeInfo;
    if (zoneData?.data?.zone_data?.length > 0) {
        zoneData?.data?.zone_data?.forEach((item, index)=>{
            if (item?.modules?.length > 0) {
                item?.modules?.forEach((moduleItem)=>{
                    if (moduleItem?.module_type === (0,_helper_functions_getCurrentModuleType__WEBPACK_IMPORTED_MODULE_4__/* .getCurrentModuleType */ .X)()) {
                        chargeInfo = moduleItem;
                    }
                });
            }
        });
    }
    return chargeInfo;
};
const getDeliveryFees = (storeData, configData, cartList, distance, couponDiscount, couponType, orderType, zoneData, origin, destination, extraCharge)=>{
    if (orderType === "delivery") {
        //convert m to km
        let convertedDistance = handleDistance(distance?.rows?.[0]?.elements, origin, destination);
        let deliveryFee = convertedDistance * configData?.per_km_shipping_charge;
        let totalOrderAmount = cartItemsTotalAmount(cartList);
        //restaurant self delivery system checking
        if (Number.parseInt(storeData?.self_delivery_system) === 1) {
            if (storeData?.free_delivery) {
                return 0;
            } else {
                deliveryFee = convertedDistance * storeData?.per_km_shipping_charge || 0;
                if (deliveryFee >= storeData?.minimum_shipping_charge && deliveryFee <= storeData.maximum_shipping_charge) {
                    return deliveryFee;
                } else {
                    if (deliveryFee < storeData?.minimum_shipping_charge) {
                        return storeData?.minimum_shipping_charge;
                    } else if (storeData?.maximum_shipping_charge !== null && deliveryFee > storeData?.maximum_shipping_charge) {
                        return storeData?.maximum_shipping_charge;
                    }
                }
            }
        } else {
            if (zoneData?.data?.zone_data?.length > 0) {
                const chargeInfo = getInfoFromZoneData(zoneData);
                if (chargeInfo?.pivot?.per_km_shipping_charge !== null && chargeInfo?.pivot?.per_km_shipping_charge >= 0) {
                    deliveryFee = convertedDistance * (chargeInfo?.pivot?.per_km_shipping_charge || 0);
                    if (deliveryFee <= chargeInfo?.pivot?.minimum_shipping_charge) {
                        return chargeInfo?.pivot?.minimum_shipping_charge + extraCharge;
                    } else if (deliveryFee >= chargeInfo?.pivot?.maximum_shipping_charge && chargeInfo?.pivot?.maximum_shipping_charge !== null) {
                        return chargeInfo?.pivot?.maximum_shipping_charge + extraCharge;
                    } else {
                        if (configData?.free_delivery_over !== null && configData?.free_delivery_over > 0 && totalOrderAmount >= configData?.free_delivery_over || orderType === "take_away") {
                            return 0;
                        } else {
                            return deliveryFee + extraCharge;
                        }
                    }
                }
            }
        }
    } else {
        return 0;
    }
};
const getItemTotalWithoutDiscount = (item)=>{
    return item?.price + handleVariationValuesSum(item.food_variations);
};
const getSubTotalPrice = (cartList)=>{
    if ((0,_helper_functions_getCurrentModuleType__WEBPACK_IMPORTED_MODULE_4__/* .getCurrentModuleType */ .X)() === "food") {
        return cartList.reduce((total, product)=>(product?.food_variations.length > 0 ? getItemTotalWithoutDiscount(product) : product.price) * product.quantity + selectedAddonsTotal(product.selectedAddons) + total, 0);
    } else {
        return cartList.reduce((total, product)=>(product?.selectedOption?.length > 0 ? product?.selectedOption?.[0]?.price : product.price) * product.quantity + total, 0);
    }
};
const handleTaxIncludeExclude = (cartList, couponDiscount, storeData)=>{
    const stores = _redux_store__WEBPACK_IMPORTED_MODULE_3__/* .store */ .h?.getState();
    const { configData  } = stores?.configData;
    if (configData && configData?.tax_included === 0) {
        return getTaxableTotalPrice(cartList, couponDiscount, storeData);
    } else {
        return 0;
    }
};
const getCalculatedTotal = (cartList, couponDiscount, storeData, global, distanceData, couponType, orderType, freeDelivery, deliveryTip, zoneData, origin, destination, extraCharge)=>{
    if (couponDiscount) {
        if (couponDiscount?.coupon_type === "free_delivery") {
            return getSubTotalPrice(cartList) - getProductDiscount(cartList, storeData) + handleTaxIncludeExclude(cartList, couponDiscount, storeData) - (couponDiscount ? getCouponDiscount(couponDiscount, storeData, cartList) : 0);
        } else {
            return getSubTotalPrice(cartList) - getProductDiscount(cartList, storeData) + handleTaxIncludeExclude(cartList, couponDiscount, storeData) - (couponDiscount ? getCouponDiscount(couponDiscount, storeData, cartList) : 0) + getDeliveryFees(storeData, global, cartList, distanceData?.data, couponDiscount, couponType, orderType, zoneData, origin, destination, extraCharge) + deliveryTip;
        }
    } else {
        return getSubTotalPrice(cartList) - getProductDiscount(cartList, storeData) + handleTaxIncludeExclude(cartList, couponDiscount, storeData) - 0 + getDeliveryFees(storeData, global, cartList, distanceData?.data, couponDiscount, couponType, orderType, zoneData, origin, destination, extraCharge) + deliveryTip;
    }
};
const isFoodAvailableBySchedule = (cart, selectedTime)=>{
    if (selectedTime === "now") {
        let currentTime = moment__WEBPACK_IMPORTED_MODULE_0___default()();
        if (cart.length > 0) {
            let isAvailable = cart.every((item)=>{
                const startTime = moment__WEBPACK_IMPORTED_MODULE_0___default()(item.available_time_starts, "HH:mm:ss");
                const endTime = moment__WEBPACK_IMPORTED_MODULE_0___default()(item.available_time_ends, "HH:mm:ss");
                return moment__WEBPACK_IMPORTED_MODULE_0___default()(currentTime).isBetween(startTime, endTime);
            });
            return !!isAvailable;
        }
    } else {
        if (selectedTime) {
            const slug = selectedTime.split(" ").pop();
            if (cart.length > 0) {
                const isAvailable1 = cart.every((item)=>{
                    const startTime = moment__WEBPACK_IMPORTED_MODULE_0___default()(item.available_time_starts, "HH:mm:ss");
                    const endTime = moment__WEBPACK_IMPORTED_MODULE_0___default()(item.available_time_ends, "HH:mm:ss");
                    const currentTime = moment__WEBPACK_IMPORTED_MODULE_0___default()(selectedTime, "HH:mm:ss");
                    return moment__WEBPACK_IMPORTED_MODULE_0___default()(currentTime).isBetween(startTime, endTime);
                });
                return !!isAvailable1;
            }
        }
    }
};
const getVariation = (variations)=>{
    let variation = "";
    if (variations?.length > 0) {
        variations.map((item, index)=>{
            // if (index > 1) variation += `-${item.value}`
            // variation += item.value
            variation += `${index !== 0 ? "-" : ""}${item.value.type}`;
        });
    }
    return variation;
};
const getTotalVariationsPrice = (variations)=>{
    let value = 0;
    if (variations.length > 0) {
        variations?.forEach?.((item)=>{
            if (item?.values?.length > 0) {
                item?.values?.forEach((itemVal)=>{
                    if (itemVal?.isSelected) {
                        value += Number.parseInt(itemVal?.optionPrice);
                    }
                });
            }
        });
    }
    return value;
};
const isObjectEmpty = (obj)=>{
    return Object.keys(obj).length === 0 && obj.constructor === Object;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JM": () => (/* binding */ nextday),
/* harmony export */   "Lg": () => (/* binding */ today),
/* harmony export */   "Ro": () => (/* binding */ tomorrow),
/* harmony export */   "cQ": () => (/* binding */ currentDate)
/* harmony export */ });
/* unused harmony exports CurrentDatee, todayTime */
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const currentDate = moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY/MM/DD HH:mm");
const nextday = moment__WEBPACK_IMPORTED_MODULE_0___default()(currentDate).add(1, "days").format("YYYY/MM/DD");
const today = moment__WEBPACK_IMPORTED_MODULE_0___default()(currentDate).format("dddd");
const tomorrow = moment__WEBPACK_IMPORTED_MODULE_0___default()(nextday).format("dddd");
const CurrentDatee = moment__WEBPACK_IMPORTED_MODULE_0___default()().format();
const todayTime = moment__WEBPACK_IMPORTED_MODULE_0___default()(CurrentDatee).format("HH:mm");


/***/ })

};
;
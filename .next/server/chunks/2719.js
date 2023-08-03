"use strict";
exports.id = 2719;
exports.ids = [2719];
exports.modules = {

/***/ 28886:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useGetCategories)
/* harmony export */ });
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61176);
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60274);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67759);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_0__, _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__]);
([_MainApi__WEBPACK_IMPORTED_MODULE_0__, _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const getData = async (pageParams)=>{
    const { category_id , page_limit , offset , type  } = pageParams;
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`${_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__/* .categories_details_api */ .Cz}/${category_id}?limit=${page_limit}&offset=${offset}&type=${type}`);
    return data;
};
function useGetCategories(pageParams) {
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)("categories-details", ()=>getData(pageParams), {
        enabled: false,
        onError: _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__/* .onSingleErrorResponse */ .f
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4501:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useGetCategoriesForStore)
/* harmony export */ });
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61176);
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60274);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67759);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_0__, _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__]);
([_MainApi__WEBPACK_IMPORTED_MODULE_0__, _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const getData = async (pageParams)=>{
    const { category_id , page_limit , offset , type  } = pageParams;
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`${_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__/* .categories_details_Store_api */ .vl}/${category_id}?limit=${page_limit}&offset=${offset}&type=${type}`);
    return data;
};
function useGetCategoriesForStore(pageParams) {
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)("categories-details-stores", ()=>getData(pageParams), {
        enabled: false,
        onError: _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__/* .onSingleErrorResponse */ .f
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87316:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useGetCategoriesChildes)
/* harmony export */ });
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61176);
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60274);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67759);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_0__, _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__]);
([_MainApi__WEBPACK_IMPORTED_MODULE_0__, _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const getData = async (pageParams)=>{
    const { category_id  } = pageParams;
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`${_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__/* .categories_Childes_api */ .Db}/${category_id}`);
    return data;
};
function useGetCategoriesChildes(pageParams) {
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)("categories-details-Childes", ()=>getData(pageParams), {
        enabled: false,
        onError: _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__/* .onSingleErrorResponse */ .f
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62624:
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
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57987);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45269);
/* harmony import */ var _food_details_food_card_FoodCard_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36508);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_3__]);
react_i18next__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const ItemNavigation = ({ categoryMenus , setCategoryId , category_id , page_limit , setPageLimit , id , usein  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const matches = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)("(min-width:600px)");
    const [gridItem, setGridItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);
    const handleCategoryId = (catId)=>{
        setCategoryId(catId);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_5__/* .CustomTabs */ .YG, {
            orientation: "horizontal",
            // variant="contained"
            variant: "scrollable",
            scrollButtons: "auto",
            "aria-label": "scrollable auto tabs example",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Box, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_food_details_food_card_FoodCard_style__WEBPACK_IMPORTED_MODULE_6__/* .RestaurantDetailsNavButton */ .Ks, {
                        sx: {
                            color: category_id === 0 || category_id === id ? "whiteContainer.main" : "whiteContainer",
                            backgroundColor: (theme)=>category_id === id ? theme.palette.primary.main : "inherit",
                            "&:hover": {
                                backgroundColor: (theme)=>category_id === id ? theme.palette.primary.main : "inherit"
                            }
                        },
                        onClick: ()=>handleCategoryId(id),
                        children: t("All")
                    }),
                    categoryMenus?.length > 0 && categoryMenus?.map((menu)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_food_details_food_card_FoodCard_style__WEBPACK_IMPORTED_MODULE_6__/* .RestaurantDetailsNavButton */ .Ks, {
                            sx: {
                                color: (theme)=>category_id === menu.id && "whiteContainer.main",
                                backgroundColor: (theme)=>category_id === menu.id ? theme.palette.primary.main : "inherit",
                                "&:hover": {
                                    backgroundColor: (theme)=>category_id === menu.id ? theme.palette.primary.main : "inherit"
                                }
                            },
                            onClick: ()=>handleCategoryId(menu.id),
                            children: menu.name
                        }, menu.id);
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemNavigation);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8382:
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
/* harmony import */ var _custom_tabs_TabsTypeOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39991);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22021);
/* harmony import */ var _api_manage_hooks_react_query_categories_details_useGetCategoriesChildes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87316);
/* harmony import */ var _ItemNavigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62624);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45269);
/* harmony import */ var _product_page_ProductList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15776);
/* harmony import */ var _custom_empty_result__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58797);
/* harmony import */ var _home_stores_with_filter_cards_grid_StoresInfoCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20762);
/* harmony import */ var _public_static_nodata_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3715);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(69868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _search_ProductCardShimmer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(31615);
/* harmony import */ var _GroupButtons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(17230);
/* harmony import */ var _helper_functions_getItemsOrFoods__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(83838);
/* harmony import */ var _helper_functions_getStoresOrRestaurants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(37698);
/* harmony import */ var _utils_staticTexts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(76931);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_4__, _api_manage_hooks_react_query_categories_details_useGetCategoriesChildes__WEBPACK_IMPORTED_MODULE_5__, _ItemNavigation__WEBPACK_IMPORTED_MODULE_6__, _product_page_ProductList__WEBPACK_IMPORTED_MODULE_8__, _custom_empty_result__WEBPACK_IMPORTED_MODULE_9__, _home_stores_with_filter_cards_grid_StoresInfoCard__WEBPACK_IMPORTED_MODULE_10__, _search_ProductCardShimmer__WEBPACK_IMPORTED_MODULE_14__, _GroupButtons__WEBPACK_IMPORTED_MODULE_15__, _helper_functions_getItemsOrFoods__WEBPACK_IMPORTED_MODULE_16__, _helper_functions_getStoresOrRestaurants__WEBPACK_IMPORTED_MODULE_17__, _utils_staticTexts__WEBPACK_IMPORTED_MODULE_18__]);
([i18next__WEBPACK_IMPORTED_MODULE_4__, _api_manage_hooks_react_query_categories_details_useGetCategoriesChildes__WEBPACK_IMPORTED_MODULE_5__, _ItemNavigation__WEBPACK_IMPORTED_MODULE_6__, _product_page_ProductList__WEBPACK_IMPORTED_MODULE_8__, _custom_empty_result__WEBPACK_IMPORTED_MODULE_9__, _home_stores_with_filter_cards_grid_StoresInfoCard__WEBPACK_IMPORTED_MODULE_10__, _search_ProductCardShimmer__WEBPACK_IMPORTED_MODULE_14__, _GroupButtons__WEBPACK_IMPORTED_MODULE_15__, _helper_functions_getItemsOrFoods__WEBPACK_IMPORTED_MODULE_16__, _helper_functions_getStoresOrRestaurants__WEBPACK_IMPORTED_MODULE_17__, _utils_staticTexts__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const CategoriesDetails = ({ data , id , category_id , setCategoryId , storeData , offset , page_limit , type , setOffset , isLoading , setType , subCategory , isRefetching , itemIsLoading  })=>{
    const { selectedModule  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useSelector)((state)=>state.utilsData);
    const tabsData = [
        {
            title: (0,_helper_functions_getItemsOrFoods__WEBPACK_IMPORTED_MODULE_16__/* .getItemsOrFoods */ .p)(),
            value: (0,_helper_functions_getItemsOrFoods__WEBPACK_IMPORTED_MODULE_16__/* .getItemsOrFoods */ .p)()
        },
        {
            title: (0,_helper_functions_getStoresOrRestaurants__WEBPACK_IMPORTED_MODULE_17__/* .getStoresOrRestaurants */ .s)(),
            value: (0,_helper_functions_getStoresOrRestaurants__WEBPACK_IMPORTED_MODULE_17__/* .getStoresOrRestaurants */ .s)()
        }
    ];
    const [currentTab, setCurrentTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tabsData[0].value);
    const [categoryMenus, setCategoryMenus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const matches = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_12___default()("(max-width:1180px)");
    const matchesXs = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_12___default()("(max-width:480px)");
    const { configData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useSelector)((state)=>state.configData);
    const store_image_url = `${configData?.base_urls?.store_image_url}`;
    const { data: childesData , refetch  } = (0,_api_manage_hooks_react_query_categories_details_useGetCategoriesChildes__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        category_id
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (subCategory !== "true") {
            refetch();
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (id && childesData?.length > 0) {
            setCategoryMenus(childesData);
        }
        setCategoryId(id);
    }, [
        childesData,
        id
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_7__/* .CustomStackFullWidth */ .Xw, {
        sx: {
            minHeight: "70vh"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
            container: true,
            spacing: 5,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    item: true,
                    xs: 12,
                    sm: 12,
                    md: 12,
                    align: "center",
                    marginTop: "20px",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_custom_tabs_TabsTypeOne__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        tabs: tabsData,
                        currentTab: currentTab,
                        setCurrentTab: setCurrentTab,
                        t: i18next__WEBPACK_IMPORTED_MODULE_4__.t
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    item: true,
                    xs: 12,
                    sm: 12,
                    md: 12,
                    align: "center",
                    children: subCategory !== "true" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ItemNavigation__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        categoryMenus: categoryMenus,
                        setCategoryId: setCategoryId,
                        category_id: category_id,
                        id: id
                    })
                }),
                selectedModule?.module_type === "food" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    item: true,
                    xs: 12,
                    sm: 12,
                    md: 12,
                    align: "center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_7__/* .CustomStackFullWidth */ .Xw, {
                        alignItems: "center",
                        justifyContent: "center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GroupButtons__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                            setType: setType,
                            type: type
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    container: true,
                    item: true,
                    xs: 12,
                    sm: 12,
                    md: 12,
                    spacing: 1,
                    children: [
                        currentTab === (0,_helper_functions_getItemsOrFoods__WEBPACK_IMPORTED_MODULE_16__/* .getItemsOrFoods */ .p)() && (!isRefetching && !itemIsLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_product_page_ProductList__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    product_list: data,
                                    offset: offset,
                                    page_limit: page_limit,
                                    setOffset: setOffset,
                                    wishlistcard: "true"
                                }),
                                data?.products?.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_custom_empty_result__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    image: _public_static_nodata_png__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                                    label: _utils_staticTexts__WEBPACK_IMPORTED_MODULE_18__/* .not_found_text_item */ .Gw
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_search_ProductCardShimmer__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})),
                        currentTab === (0,_helper_functions_getStoresOrRestaurants__WEBPACK_IMPORTED_MODULE_17__/* .getStoresOrRestaurants */ .s)() && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                storeData?.stores?.length > 0 && !isLoading && storeData?.stores?.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                        item: true,
                                        md: matches ? 3 : 2.4,
                                        sm: 4,
                                        xs: matchesXs ? 12 : 6,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_stores_with_filter_cards_grid_StoresInfoCard__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            data: item
                                        })
                                    }, item.id)),
                                storeData?.stores?.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_custom_empty_result__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    label: _utils_staticTexts__WEBPACK_IMPORTED_MODULE_18__/* .not_found_text_store */ .Hh,
                                    image: _public_static_nodata_png__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoriesDetails);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 15776:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _cards_ProductCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71989);
/* harmony import */ var _custom_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92704);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_cards_ProductCard__WEBPACK_IMPORTED_MODULE_5__]);
_cards_ProductCard__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function ProductList({ product_list , page_limit =10 , offset , setOffset  }) {
    const matches = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default()("(max-width:1180px)");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: product_list?.products?.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        item: true,
                        sm: 4,
                        xs: 12,
                        md: matches ? 3 : 2.4,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_cards_ProductCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                            sm: 1,
                            xs: 1,
                            item: product,
                            changed_bg: "true"
                        })
                    }, product?.id))
            }),
            product_list?.total_size > page_limit ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                item: true,
                xs: 12,
                sm: 12,
                md: 12,
                align: "center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_custom_pagination__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    total_size: product_list?.total_size,
                    page_limit: page_limit,
                    offset: offset,
                    setOffset: setOffset
                })
            }) : ""
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 76931:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gw": () => (/* binding */ not_found_text_item),
/* harmony export */   "Hh": () => (/* binding */ not_found_text_store),
/* harmony export */   "TB": () => (/* binding */ forgot_password_header)
/* harmony export */ });
/* harmony import */ var _helper_functions_getStoresOrRestaurants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37698);
/* harmony import */ var _helper_functions_getItemsOrFoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83838);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helper_functions_getStoresOrRestaurants__WEBPACK_IMPORTED_MODULE_0__, _helper_functions_getItemsOrFoods__WEBPACK_IMPORTED_MODULE_1__]);
([_helper_functions_getStoresOrRestaurants__WEBPACK_IMPORTED_MODULE_0__, _helper_functions_getItemsOrFoods__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const not_found_text_store = `No ${(0,_helper_functions_getStoresOrRestaurants__WEBPACK_IMPORTED_MODULE_0__/* .getStoresOrRestaurants */ .s)()} found`;
const not_found_text_item = `No ${(0,_helper_functions_getItemsOrFoods__WEBPACK_IMPORTED_MODULE_1__/* .getItemsOrFoods */ .p)()} found`;
const forgot_password_header = "Please enter your registered mobile number";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
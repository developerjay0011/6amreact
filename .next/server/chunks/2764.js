"use strict";
exports.id = 2764;
exports.ids = [2764];
exports.modules = {

/***/ 52764:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45269);
/* harmony import */ var _custom_tabs_TabsTypeOne__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39991);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _typographies_H1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74485);
/* harmony import */ var _cards_ProductCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71989);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _api_manage_hooks_react_query_wish_list_useWishListDelete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94156);
/* harmony import */ var _redux_slices_wishList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(64134);
/* harmony import */ var _home_stores_with_filter_cards_grid_StoresInfoCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20762);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _custom_empty_result__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(58797);
/* harmony import */ var _public_static_nodata_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3715);
/* harmony import */ var _PushNotificationLayout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(74724);
/* harmony import */ var _helper_functions_getItemsOrFoods__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(83838);
/* harmony import */ var _helper_functions_getStoresOrRestaurants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(37698);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_18__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_typographies_H1__WEBPACK_IMPORTED_MODULE_6__, _cards_ProductCard__WEBPACK_IMPORTED_MODULE_7__, _api_manage_hooks_react_query_wish_list_useWishListDelete__WEBPACK_IMPORTED_MODULE_9__, _home_stores_with_filter_cards_grid_StoresInfoCard__WEBPACK_IMPORTED_MODULE_11__, _custom_empty_result__WEBPACK_IMPORTED_MODULE_13__, _PushNotificationLayout__WEBPACK_IMPORTED_MODULE_15__, _helper_functions_getItemsOrFoods__WEBPACK_IMPORTED_MODULE_16__, _helper_functions_getStoresOrRestaurants__WEBPACK_IMPORTED_MODULE_17__]);
([_typographies_H1__WEBPACK_IMPORTED_MODULE_6__, _cards_ProductCard__WEBPACK_IMPORTED_MODULE_7__, _api_manage_hooks_react_query_wish_list_useWishListDelete__WEBPACK_IMPORTED_MODULE_9__, _home_stores_with_filter_cards_grid_StoresInfoCard__WEBPACK_IMPORTED_MODULE_11__, _custom_empty_result__WEBPACK_IMPORTED_MODULE_13__, _PushNotificationLayout__WEBPACK_IMPORTED_MODULE_15__, _helper_functions_getItemsOrFoods__WEBPACK_IMPORTED_MODULE_16__, _helper_functions_getStoresOrRestaurants__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const WishLists = (props)=>{
    const { configData , t  } = props;
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
    const { wishLists  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.wishList);
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_18__.useTheme)();
    const matches = (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery)("(max-width:1100px)");
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
    const moduleId = JSON.parse(window.localStorage.getItem("module"))?.id;
    const store_image_url = `${configData?.base_urls?.store_image_url}`;
    const onSuccessHandlerForDelete = (res)=>{
        if (res) {
            dispatch((0,_redux_slices_wishList__WEBPACK_IMPORTED_MODULE_10__/* .removeWishListItem */ .$8)(res));
        }
    };
    const { mutate  } = (0,_api_manage_hooks_react_query_wish_list_useWishListDelete__WEBPACK_IMPORTED_MODULE_9__/* .useWishListDelete */ .V)(onSuccessHandlerForDelete);
    const deleteWishlistItem = (id)=>{
        mutate(id, {
            onSuccess: onSuccessHandlerForDelete(id)
        });
    };
    const empty_items_text = `No favourite ${(0,_helper_functions_getItemsOrFoods__WEBPACK_IMPORTED_MODULE_16__/* .getItemsOrFoods */ .p)()} found`;
    const empty_stores_text = `No favourite ${(0,_helper_functions_getStoresOrRestaurants__WEBPACK_IMPORTED_MODULE_17__/* .getStoresOrRestaurants */ .s)()} found`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PushNotificationLayout__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomPaperBigCard */ .iD, {
            sx: {
                minHeight: "70vh"
            },
            padding: "20px",
            backgroundcolor: theme.palette.background.custom2,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
                alignItems: "center",
                justifyContent: "center",
                spacing: 2,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_custom_tabs_TabsTypeOne__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        tabs: tabsData,
                        currentTab: currentTab,
                        setCurrentTab: setCurrentTab,
                        t: t
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                        container: true,
                        sx: {
                            width: "100%"
                        },
                        spacing: {
                            xs: 1,
                            sm: 1,
                            md: 2
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
                                    alignItems: "flex-start",
                                    justifyContent: "center",
                                    paddingY: "10px",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_typographies_H1__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        text: "Your Wishlist"
                                    })
                                })
                            }),
                            wishLists ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    currentTab === (0,_helper_functions_getItemsOrFoods__WEBPACK_IMPORTED_MODULE_16__/* .getItemsOrFoods */ .p)() && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            wishLists?.item?.map((product)=>{
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                                                    item: true,
                                                    xs: 12,
                                                    sm: 6,
                                                    md: matches ? 6 : 4,
                                                    aligns: "left",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_cards_ProductCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
                                                        item: product,
                                                        cardheight: "185px",
                                                        horizontalcard: "true",
                                                        wishlistcard: "true",
                                                        deleteWishlistItem: deleteWishlistItem
                                                    })
                                                }, product?.id);
                                            }),
                                            wishLists?.item?.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_custom_empty_result__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                label: t(empty_items_text),
                                                image: _public_static_nodata_png__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z
                                            })
                                        ]
                                    }),
                                    currentTab === (0,_helper_functions_getStoresOrRestaurants__WEBPACK_IMPORTED_MODULE_17__/* .getStoresOrRestaurants */ .s)() && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            wishLists?.store?.map((item)=>{
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                                                    item: true,
                                                    xs: 12,
                                                    sm: 6,
                                                    md: 3,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_stores_with_filter_cards_grid_StoresInfoCard__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                        data: item,
                                                        wishlistcard: "true",
                                                        moduleId: moduleId
                                                    })
                                                }, item?.id);
                                            }),
                                            wishLists?.store?.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_custom_empty_result__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                label: t(empty_stores_text),
                                                image: _public_static_nodata_png__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z
                                            })
                                        ]
                                    })
                                ]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                children: "loading"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
WishLists.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WishLists);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
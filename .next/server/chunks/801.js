"use strict";
exports.id = 801;
exports.ids = [801];
exports.modules = {

/***/ 40644:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_LibraryBooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96866);
/* harmony import */ var _mui_icons_material_LibraryBooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LibraryBooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73467);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_SmsRounded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19766);
/* harmony import */ var _mui_icons_material_SmsRounded__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_SmsRounded__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_ShoppingCartRounded__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72548);
/* harmony import */ var _mui_icons_material_ShoppingCartRounded__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ShoppingCartRounded__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27372);
/* harmony import */ var _mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94172);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(simplebar_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var simplebar_react_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48710);
/* harmony import */ var simplebar_react_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(simplebar_react_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45269);
/* harmony import */ var _NavBar_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(53523);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22021);
/* harmony import */ var _added_cart_view__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(78992);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _helper_functions_getCartListModuleWise__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(58345);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_12__, _added_cart_view__WEBPACK_IMPORTED_MODULE_13__]);
([i18next__WEBPACK_IMPORTED_MODULE_12__, _added_cart_view__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const styles = {
    maxWidth: 2000,
    width: "100%",
    height: "100%",
    padding: "0px 1rem"
};
const BottomNav = ()=>{
    const { wishLists  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_15__.useSelector)((state)=>state.wishList);
    const { cartList  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_15__.useSelector)((state)=>state.cart);
    const { selectedModule  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_15__.useSelector)((state)=>state.utilsData);
    const totalWishList = wishLists?.item?.length + wishLists?.store?.length;
    const [sideDrawerOpen, setSideDrawerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
    const currentRoute = router.pathname.replace("/", "");
    const handleCartDrawerOpen = ()=>{
        setSideDrawerOpen(true);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_10__/* .CustomStackFullWidth */ .Xw, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Paper, {
            sx: {
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "5px",
                width: "100%",
                zIndex: 111
            },
            elevation: 3,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((simplebar_react__WEBPACK_IMPORTED_MODULE_7___default()), {
                    style: styles,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.BottomNavigation, {
                        value: currentRoute,
                        onChange: (event, newValue)=>{
                            if (newValue !== "cart") router.push(`/${newValue}`, undefined, {
                                shallow: true
                            });
                        },
                        showLabels: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavBar_style__WEBPACK_IMPORTED_MODULE_11__/* .CustomBottomNavigationAction */ .rj, {
                                label: (0,i18next__WEBPACK_IMPORTED_MODULE_12__.t)("Home"),
                                value: "home",
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_3___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavBar_style__WEBPACK_IMPORTED_MODULE_11__/* .CustomBottomNavigationAction */ .rj, {
                                label: (0,i18next__WEBPACK_IMPORTED_MODULE_12__.t)("My Orders"),
                                value: "my-orders",
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Badge, {
                                    color: "error",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_LibraryBooks__WEBPACK_IMPORTED_MODULE_2___default()), {})
                                })
                            }),
                            selectedModule?.module_type !== "parcel" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavBar_style__WEBPACK_IMPORTED_MODULE_11__/* .CustomBottomNavigationAction */ .rj, {
                                onClick: ()=>handleCartDrawerOpen(),
                                label: (0,i18next__WEBPACK_IMPORTED_MODULE_12__.t)("Cart"),
                                value: "cart",
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Badge, {
                                    badgeContent: (0,_helper_functions_getCartListModuleWise__WEBPACK_IMPORTED_MODULE_16__/* .getCartListModuleWise */ .l)(cartList)?.length,
                                    color: "error",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ShoppingCartRounded__WEBPACK_IMPORTED_MODULE_5___default()), {})
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavBar_style__WEBPACK_IMPORTED_MODULE_11__/* .CustomBottomNavigationAction */ .rj, {
                                label: (0,i18next__WEBPACK_IMPORTED_MODULE_12__.t)("Chat"),
                                value: "chatting",
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Badge, {
                                    badgeContent: 0,
                                    color: "error",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_SmsRounded__WEBPACK_IMPORTED_MODULE_4___default()), {})
                                })
                            }),
                            !!sideDrawerOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_added_cart_view__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                sideDrawerOpen: sideDrawerOpen,
                                setSideDrawerOpen: setSideDrawerOpen
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavBar_style__WEBPACK_IMPORTED_MODULE_11__/* .CustomBottomNavigationAction */ .rj, {
                                label: (0,i18next__WEBPACK_IMPORTED_MODULE_12__.t)("WishList"),
                                value: "wishlist",
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Badge, {
                                    badgeContent: totalWishList,
                                    color: "error",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_6___default()), {})
                                })
                            })
                        ]
                    })
                }),
                !!sideDrawerOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_added_cart_view__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    sideDrawerOpen: sideDrawerOpen,
                    setSideDrawerOpen: setSideDrawerOpen,
                    cartList: cartList
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(BottomNav));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13258:
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
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52933);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4260);
/* harmony import */ var _LandingLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20580);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45269);
/* harmony import */ var _header_BottomNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40644);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28332);
/* harmony import */ var _api_manage_hooks_react_query_useGetModule__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38579);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_slices_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(67493);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_header__WEBPACK_IMPORTED_MODULE_3__, _footer__WEBPACK_IMPORTED_MODULE_4__, _LandingLayout__WEBPACK_IMPORTED_MODULE_5__, _header_BottomNav__WEBPACK_IMPORTED_MODULE_7__, _api_manage_hooks_react_query_useGetModule__WEBPACK_IMPORTED_MODULE_10__]);
([_header__WEBPACK_IMPORTED_MODULE_3__, _footer__WEBPACK_IMPORTED_MODULE_4__, _LandingLayout__WEBPACK_IMPORTED_MODULE_5__, _header_BottomNav__WEBPACK_IMPORTED_MODULE_7__, _api_manage_hooks_react_query_useGetModule__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const MainLayout = ({ children , configData , landingPageData  })=>{
    const [rerenderUi, setRerenderUi] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { data , refetch  } = (0,_api_manage_hooks_react_query_useGetModule__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_8__.useTheme)();
    const isSmall = (0,_mui_material__WEBPACK_IMPORTED_MODULE_8__.useMediaQuery)("(max-width:1180px)");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (router.pathname === "/home") {
            refetch();
        }
    }, []);
    if (data) {
        const selectedModuleType = JSON.parse(localStorage.getItem("module"))?.module_type;
        if (data.length === 0) {
            localStorage.removeItem("module");
            router.push("/", undefined, {
                shallow: true
            });
        } else {
            if (!data?.find((item)=>item.module_type === selectedModuleType)) {
                const newModule = data[0];
                localStorage.setItem("module", JSON.stringify(newModule));
                dispatch((0,_redux_slices_utils__WEBPACK_IMPORTED_MODULE_12__/* .setSelectedModule */ .$w)(newModule));
            }
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_LandingLayout__WEBPACK_IMPORTED_MODULE_5__/* .MainLayoutRoot */ .U, {
        justifyContent: "space-between",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    configData: configData
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_6__/* .CustomStackFullWidth */ .Xw, {
                mt: isSmall ? "5rem" : "7rem",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_6__/* .CustomStackFullWidth */ .Xw, {
                    sx: {
                        minHeight: "70vh"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        children: children
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    configData: configData,
                    landingPageData: landingPageData
                })
            }),
            isSmall && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header_BottomNav__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
        ]
    }, rerenderUi);
};
MainLayout.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(MainLayout));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
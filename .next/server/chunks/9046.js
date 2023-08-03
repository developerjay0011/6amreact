"use strict";
exports.id = 9046;
exports.ids = [9046];
exports.modules = {

/***/ 43953:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ useGetSubCategories)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60274);
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61176);
/* harmony import */ var _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67759);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_1__, _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__]);
([_MainApi__WEBPACK_IMPORTED_MODULE_1__, _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const getData = async (id, enable)=>{
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(`${_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__/* .subCategories_api */ .td}/${id}`);
    return data;
};
const useGetSubCategories = (id, enable)=>{
    return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        "get_subcategories_list",
        id
    ], ()=>getData(id), {
        enabled: enable,
        //onSuccess: handleRequestOnSuccess,
        onError: _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__/* .onErrorResponse */ .R
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39046:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64845);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57987);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _NavBar_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53523);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _NavPopover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41790);
/* harmony import */ var _api_manage_hooks_react_query_all_category_all_categorys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(40291);
/* harmony import */ var _api_manage_hooks_react_query_all_category_useGetSubCategory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(43953);
/* harmony import */ var _ViewMore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35762);
/* harmony import */ var _redux_slices_storedData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8697);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_4__, _NavPopover__WEBPACK_IMPORTED_MODULE_8__, _api_manage_hooks_react_query_all_category_all_categorys__WEBPACK_IMPORTED_MODULE_9__, _api_manage_hooks_react_query_all_category_useGetSubCategory__WEBPACK_IMPORTED_MODULE_10__, _ViewMore__WEBPACK_IMPORTED_MODULE_11__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_4__, _NavPopover__WEBPACK_IMPORTED_MODULE_8__, _api_manage_hooks_react_query_all_category_all_categorys__WEBPACK_IMPORTED_MODULE_9__, _api_manage_hooks_react_query_all_category_useGetSubCategory__WEBPACK_IMPORTED_MODULE_10__, _ViewMore__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const NavCategory = ({ openModal , setModal , setRestaurantModal  })=>{
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const searchKey = "";
    const { configData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.configData);
    const catImageUrl = `${configData?.base_urls?.category_image_url}`;
    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    const [anchorElSub, setAnchorElSub] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    const [categoryId, setCategoryId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [enable, setEnable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handlePopoverOpen = async (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = ()=>{
        handlePopoverCloseSub();
        setAnchorEl(null);
    };
    const handlePopoverOpenSub = (event, category)=>{
        if (category?.childes.length > 0) {
            setAnchorElSub(event.currentTarget);
            setCategoryId(category?.slug ? category?.slug : category?.id);
            setEnable(true);
        } else {
            handlePopoverCloseSub();
        }
    // handlePopoverOpen();
    };
    const handlePopoverCloseSub = ()=>{
        setAnchorElSub(null);
    };
    const open = Boolean(anchorEl);
    const openSub = Boolean(anchorElSub);
    const { data: subCategory  } = (0,_api_manage_hooks_react_query_all_category_useGetSubCategory__WEBPACK_IMPORTED_MODULE_10__/* .useGetSubCategories */ .f)(categoryId, enable);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        onMouseEnter: handlePopoverOpen,
        onMouseLeave: handlePopoverClose,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_NavBar_style__WEBPACK_IMPORTED_MODULE_6__/* .NavMenuLink */ .lC, {
            children: [
                t("Categories"),
                " ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_2___default()), {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavPopover__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    catImageUrl: catImageUrl,
                    open: open,
                    openSub: openSub,
                    handlePopoverOpenSub: handlePopoverOpenSub,
                    handlePopoverCloseSub: handlePopoverCloseSub,
                    anchorEl: anchorEl,
                    anchorElSub: anchorElSub,
                    subCategory: subCategory,
                    popoverFor: "category"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavCategory);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
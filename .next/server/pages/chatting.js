"use strict";
(() => {
var exports = {};
exports.id = 3050;
exports.ids = [3050,6812,5405];
exports.modules = {

/***/ 23703:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ _index__WEBPACK_IMPORTED_MODULE_9__.getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _meta_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74121);
/* harmony import */ var _src_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13258);
/* harmony import */ var _src_components_route_guard_AuthGuard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46941);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57987);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_components_chat_Chatting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6220);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44369);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_4__, react_i18next__WEBPACK_IMPORTED_MODULE_6__, _src_components_chat_Chatting__WEBPACK_IMPORTED_MODULE_8__, _index__WEBPACK_IMPORTED_MODULE_9__]);
([_src_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_4__, react_i18next__WEBPACK_IMPORTED_MODULE_6__, _src_components_chat_Chatting__WEBPACK_IMPORTED_MODULE_8__, _index__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Index = ({ configData , landingPageData  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default()), {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_meta_data__WEBPACK_IMPORTED_MODULE_3__["default"], {
                title: `Chat - ${configData?.business_name}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                configData: configData,
                landingPageData: landingPageData,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_route_guard_AuthGuard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    from: router.pathname.replace("/", ""),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_chat_Chatting__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
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

/***/ 27816:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ useGetChannelList)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61176);
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60274);
/* harmony import */ var _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67759);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_1__, _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__]);
([_MainApi__WEBPACK_IMPORTED_MODULE_1__, _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const getData = async ()=>{
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(`${_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__/* .get_channel_list */ .It}`);
    return data;
};
const useGetChannelList = (handleRequestOnSuccess)=>{
    return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)("get_channel_list", ()=>getData(), {
        enabled: false,
        onSuccess: handleRequestOnSuccess,
        onError: _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__/* .onErrorResponse */ .R
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 40836:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useGetConversation)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60274);
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61176);
/* harmony import */ var _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67759);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_1__, _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__]);
([_MainApi__WEBPACK_IMPORTED_MODULE_1__, _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const getData = async (params, pageParam)=>{
    const { channelId , apiFor , page_limit , offset  } = params;
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(`${_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__/* .get_conversations_api */ .Fq}?${apiFor}=${channelId === "admin" ? 0 : channelId}?&offset=${pageParam}&limit=${page_limit}`);
    return data;
};
const useGetConversation = (params)=>{
    return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useInfiniteQuery)("get_conversation", ({ pageParam =params.offset  })=>getData(params, pageParam), {
        getNextPageParam: (lastPage, allPages)=>{
            const nextPage = allPages.length + 1;
            return lastPage.messages.length > 0 ? nextPage : undefined;
        },
        enabled: false,
        onError: _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__/* .onErrorResponse */ .R
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46260:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ useSearchList)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60274);
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_1__]);
_MainApi__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const getSearched = async (searchedString)=>{
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(`${_ApiRoutes__WEBPACK_IMPORTED_MODULE_2__/* .channel_search_api */ .Pt}?name=${searchedString}&limit=20& offset=1`);
    return data;
};
const useSearchList = (searchedString, handleSearchFetchOnSuccess)=>{
    return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)("get_search_list", ()=>getSearched(searchedString), {
        enabled: false,
        onSuccess: handleSearchFetchOnSuccess
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47088:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ useStoreMessage)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60274);
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_1__]);
_MainApi__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const storeData = async (cData)=>{
    const { id , text , receiver_type , receiverId , file  } = cData;
    let formData = new FormData();
    formData.append(receiverId ? "receiver_id" : "conversation_id", id === "admin" ? 0 : id);
    if (text === "") {
        file.forEach((file)=>{
            formData.append("image[]", file);
        });
    } else {
        formData.append("message", text);
        file.forEach((file)=>{
            formData.append("image[]", file);
        });
    }
    formData.append("receiver_type", receiver_type);
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(`${_ApiRoutes__WEBPACK_IMPORTED_MODULE_2__/* .store_message_api */ .xD}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return data;
};
const useStoreMessage = ()=>{
    return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)("store_message", storeData);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59497:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useGetUserInfo)
/* harmony export */ });
/* harmony import */ var _MainApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61176);
/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60274);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67759);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainApi__WEBPACK_IMPORTED_MODULE_0__, _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__]);
([_MainApi__WEBPACK_IMPORTED_MODULE_0__, _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const getData = async ()=>{
    const { data  } = await _MainApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__/* .user_info_api */ .ul);
    return data;
};
function useGetUserInfo(handleSuccess) {
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)("user-info", ()=>getData(), {
        enabled: true,
        staleTime: 10000,
        cacheTime: 5000,
        onSuccess: handleSuccess,
        onError: _api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_2__/* .onSingleErrorResponse */ .f
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2254:
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
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38017);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45269);
/* harmony import */ var _custom_search_CustomSearch_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63270);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86072);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_lab__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22021);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_8__]);
i18next__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const ChatContactSearch = ({ searchValue , setSearchValue , handleSearch , isLoading , handleReset , searchSubmitHandler  })=>{
    const onChangeHandler = (e)=>{
        e.preventDefault();
        handleSearch(e.target.value);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        padding: ".4rem",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
            onSubmit: (e)=>searchSubmitHandler(e),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_custom_search_CustomSearch_style__WEBPACK_IMPORTED_MODULE_5__/* .Search */ .ol, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_custom_search_CustomSearch_style__WEBPACK_IMPORTED_MODULE_5__/* .StyledInputBase */ .el, {
                        fullWidth: true,
                        label: (0,i18next__WEBPACK_IMPORTED_MODULE_8__.t)("Search"),
                        placeholder: (0,i18next__WEBPACK_IMPORTED_MODULE_8__.t)("Search"),
                        InputProps: {
                            startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.InputAdornment, {
                                position: "start",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    fontSize: "small"
                                })
                            })
                        },
                        value: searchValue,
                        onChange: (e)=>onChangeHandler(e)
                    }),
                    searchValue !== "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__/* .CloseIconWrapper */ .B7, {
                            right: -1,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_lab__WEBPACK_IMPORTED_MODULE_6__.LoadingButton, {
                                loading: true,
                                variant: "text",
                                sx: {
                                    width: "10px"
                                }
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_4__/* .CloseIconWrapper */ .B7, {
                            onClick: handleReset,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    fontSize: "small"
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
};
ChatContactSearch.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatContactSearch);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 83505:
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
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ContactLists__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22546);
/* harmony import */ var _ChatContactSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2254);
/* harmony import */ var _ChatWithAdmin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6758);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContactLists__WEBPACK_IMPORTED_MODULE_5__, _ChatContactSearch__WEBPACK_IMPORTED_MODULE_6__, _ChatWithAdmin__WEBPACK_IMPORTED_MODULE_7__]);
([_ContactLists__WEBPACK_IMPORTED_MODULE_5__, _ChatContactSearch__WEBPACK_IMPORTED_MODULE_6__, _ChatWithAdmin__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const ChatContent = ({ isFetched , handleToggleSidebar , selectedId , handleReset , searchSubmitHandler , channelLoading , isLoading , channelList , handleChannelOnClick , searchValue , setSearchValue , handleSearch  })=>{
    const isAdmin = channelList && channelList?.find((item)=>item.receiver_type === "admin");
    const handleChatWithAdmin = ()=>{
        if (isFetched) {
            if (channelList.length === 0 || !isAdmin) {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChatWithAdmin__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    handleChannelOnClick: handleChannelOnClick
                });
            }
        } else {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                variant: "rantangle",
                width: "100%",
                height: "50px"
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        spacing: 2,
        padding: ".5rem",
        marginTop: {
            xs: "20px",
            md: "0px"
        },
        children: [
            handleChatWithAdmin(),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChatContactSearch__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                searchValue: searchValue,
                setSearchValue: setSearchValue,
                handleSearch: handleSearch,
                isLoading: isLoading,
                handleReset: handleReset,
                searchSubmitHandler: searchSubmitHandler
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContactLists__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                channelList: channelList,
                handleChannelOnClick: handleChannelOnClick,
                channelLoading: channelLoading,
                selectedId: selectedId
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20418:
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
/* harmony import */ var _CustomImageContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58861);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45269);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__);







const ChatImage = ({ body , removeImage  })=>{
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.useTheme)();
    const [files, setFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setFiles(body.file);
    }, [
        body.file
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {
        sx: {
            position: "absolute",
            bottom: 78,
            padding: "5px",
            display: "flex",
            flexDirection: "row",
            gap: "20px"
        },
        children: files?.map((item, index)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                sx: {
                    position: "relative",
                    width: "auto"
                },
                direction: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImageContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        objectFit: "contained",
                        src: URL.createObjectURL(item),
                        height: "70px",
                        width: "100px",
                        borderRadius: ".5rem"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                        sx: {
                            position: "absolute",
                            right: -10,
                            bottom: -10
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_4___default()), {
                            onClick: ()=>removeImage(item.name),
                            sx: {
                                color: (theme)=>theme.palette.error.main
                            }
                        })
                    })
                ]
            }, index);
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatImage);


/***/ }),

/***/ 15352:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Message_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65213);
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6959);
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CustomImageContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58861);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_CustomFunctions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81261);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_CustomFunctions__WEBPACK_IMPORTED_MODULE_10__]);
_utils_CustomFunctions__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






// import { FormatedDateWithTime } from "../../utils/customFunctions";





const ChatMessage = (props)=>{
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.useTheme)();
    const { body , createdAt , messgageData , authorAvatar , conversationData , image , handleImageOnClick  } = props;
    const { configData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.configData);
    const language_direction = localStorage.getItem("direction");
    const receiverImageUrl = ()=>{
        if (conversationData?.conversation?.receiver_type === "vendor") {
            return configData?.base_urls?.restaurant_image_url;
        }
        if (conversationData?.conversation?.receiver_type === "delivery_man") {
            return configData?.base_urls?.delivery_man_image_url;
        } else configData?.base_urls?.business_logo_url;
    };
    const customerImageUrl = configData?.base_urls?.customer_image_url;
    const authorType = messgageData.sender_id; //sender
    let userType;
    let userImage;
    let senderImage;
    const chatImageUrl = configData?.base_urls?.chat_image_url;
    if (conversationData?.conversation?.sender_type === "customer") {
        userType = conversationData?.conversation.sender_id;
        userImage = conversationData?.conversation?.receiver?.image;
        senderImage = conversationData?.conversation?.sender?.image;
    } else {
        userType = conversationData?.conversation?.receiver?.id;
    }
    const nameHandler = ()=>{
        if (conversationData?.conversation?.sender_type === "customer") {
            if (authorType === userType) {
                return conversationData?.conversation?.sender?.f_name.concat(" ", conversationData?.conversation?.sender?.l_name);
            } else {
                if (conversationData?.conversation?.receiver?.f_name) {
                    return conversationData?.conversation?.receiver?.f_name.concat(" ", conversationData?.conversation?.receiver?.l_name);
                } else {
                    return configData?.business_name;
                }
            }
        } else {
            if (authorType === userType) {
                return conversationData?.conversation?.receiver?.f_name.concat(" ", conversationData?.conversation?.receiver?.l_name) || " ";
            } else {
                return conversationData?.conversation?.sender?.f_name.concat(" ", conversationData?.conversation?.sender?.l_name) || " ";
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Message_style__WEBPACK_IMPORTED_MODULE_4__/* .ChatMessageWrapper */ .yj, {
        authortype: authorType,
        usertype: userType,
        language_direction: language_direction,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Message_style__WEBPACK_IMPORTED_MODULE_4__/* .CustomAvatar */ .zU, {
                src: `${authorType === userType ? customerImageUrl : receiverImageUrl()}/${authorType === userType ? senderImage : userImage}`,
                authortype: authorType,
                usertype: userType
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Message_style__WEBPACK_IMPORTED_MODULE_4__/* .BodyWrapper */ .ef, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                        direction: "row",
                        spacing: 3,
                        justifyContent: authorType === userType ? "flex-end" : "flex-start",
                        children: image?.map((item, index)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_9__.Box, {
                                sx: {
                                    cursor: "pointer"
                                },
                                onClick: ()=>handleImageOnClick(`${chatImageUrl}/${item}`),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomImageContainer__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    src: `${chatImageUrl}/${item}`,
                                    width: "100px",
                                    height: "90px",
                                    objectFit: "contained"
                                })
                            }, index);
                        })
                    }),
                    body && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Message_style__WEBPACK_IMPORTED_MODULE_4__/* .CardWrapper */ .UK, {
                        authortype: authorType,
                        usertype: userType,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                mb: 1,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                    pt: "3px",
                                    color: authorType === userType ? theme.palette.footer.appDownloadButtonBg : theme.palette.neutral[100],
                                    variant: "subtitle2",
                                    align: authorType === userType ? "right" : "left",
                                    children: nameHandler()
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                color: authorType === userType ? theme.palette.footer.appDownloadButtonBg : theme.palette.neutral[100],
                                align: authorType === userType ? "right" : "left",
                                children: body ? body : ""
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Message_style__WEBPACK_IMPORTED_MODULE_4__/* .TimeWrapper */ .qo, {
                        authortype: authorType,
                        usertype: userType,
                        children: [
                            authorType === userType ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_5___default()), {
                                fontSize: "14px",
                                style: {
                                    color: messgageData.is_seen === 0 ? theme.palette.primary.main : "green"
                                }
                            }) : "",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                color: "textSecondary",
                                noWrap: true,
                                variant: "caption",
                                children: (0,_utils_CustomFunctions__WEBPACK_IMPORTED_MODULE_10__/* .FormatedDateWithTime */ .gM)(createdAt)
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
ChatMessage.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatMessage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63149:
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
/* harmony import */ var _mui_icons_material_AttachFile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98416);
/* harmony import */ var _mui_icons_material_AttachFile__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AttachFile__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_InsertPhoto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54828);
/* harmony import */ var _mui_icons_material_InsertPhoto__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_InsertPhoto__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64731);
/* harmony import */ var _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86201);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22021);
/* harmony import */ var _ChatImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20418);
/* harmony import */ var _utils_toasterMessages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(70557);
/* harmony import */ var _helper_functions_getLanguage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46573);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_6__, i18next__WEBPACK_IMPORTED_MODULE_7__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_6__, i18next__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const CssTextField = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField)({
    "& label.Mui-focused": {
        color: "#EF7822",
        background: "#fff"
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#EF7822",
        background: "#fff"
    },
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none"
    },
    "& .MuiOutlinedInput-root": {
        border: "2px solid #D1D5DB",
        "& fieldset": {
        },
        "&:hover fieldset": {
            borderColor: "#EF7822"
        },
        "&.Mui-focused fieldset": {
            borderColor: "#EF7822"
        }
    }
});
const ChatMessageAdd = ({ onSend  })=>{
    const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        text: "",
        file: []
    });
    const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleChange = (event)=>{
        setBody({
            ...body,
            text: event.target.value
        });
    };
    const handleSend = ()=>{
        if (!body) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.error((0,i18next__WEBPACK_IMPORTED_MODULE_7__.t)("write something"));
            return;
        }
        if (body.file.length > 3) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.error((0,i18next__WEBPACK_IMPORTED_MODULE_7__.t)(_utils_toasterMessages__WEBPACK_IMPORTED_MODULE_9__/* .message_sending_image_limit */ .$m));
        } else {
            onSend?.(body);
            setBody({
                text: "",
                file: []
            });
        }
    };
    const handleAttach = ()=>{
        fileInputRef.current.click();
    };
    const handleKeyUp = (event)=>{
        if (event.code === "Enter" && !event.shiftKey) {
            handleSend();
        }
    };
    const MAX_LENGTH = 3;
    const handleFileOnChange = (e)=>{
        setBody({
            ...body,
            file: [
                ...body.file,
                ...e.target.files
            ]
        });
    };
    const removeImage = (name)=>{
        const tempData = body.file.filter((item)=>item.name !== name);
        setBody({
            file: tempData
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            alignItems: "center",
            backgroundColor: (theme)=>theme.palette.neutral[200],
            display: "flex",
            flexShrink: 0,
            p: 3,
            position: "relative"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CssTextField, {
                // disabled={disabled}
                fullWidth: true,
                onChange: handleChange,
                onKeyUp: handleKeyUp,
                placeholder: (0,i18next__WEBPACK_IMPORTED_MODULE_7__.t)("Leave a message"),
                value: body.text,
                size: "small",
                multiline: true
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    alignItems: "center",
                    display: "flex",
                    m: -2,
                    ml: (0,_helper_functions_getLanguage__WEBPACK_IMPORTED_MODULE_10__/* .getLanguage */ .G)() !== "rtl" && 2,
                    mr: (0,_helper_functions_getLanguage__WEBPACK_IMPORTED_MODULE_10__/* .getLanguage */ .G)() === "rtl" && "1rem"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
                        title: (0,i18next__WEBPACK_IMPORTED_MODULE_7__.t)("Attach photo"),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            sx: {
                                m: 1
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                                // disabled={disabled}
                                edge: "end",
                                onClick: handleAttach,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_InsertPhoto__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    fontSize: "small"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
                        title: (0,i18next__WEBPACK_IMPORTED_MODULE_7__.t)("Send"),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            sx: {
                                m: 1
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                                color: "primary",
                                disabled: body.text === "" && body.file.length === 0,
                                sx: {
                                    backgroundColor: "primary.main",
                                    color: "primary.contrastText",
                                    flexDirection: "row-reverse",
                                    transform: (0,_helper_functions_getLanguage__WEBPACK_IMPORTED_MODULE_10__/* .getLanguage */ .G)() === "rtl" && "rotate(180deg)",
                                    "&:hover": {
                                        backgroundColor: "primary.dark"
                                    }
                                },
                                onClick: handleSend,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    fontSize: "small"
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                hidden: true,
                ref: fileInputRef,
                type: "file",
                multiple: true,
                onChange: handleFileOnChange
            }),
            body.file.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChatImage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                body: body,
                removeImage: removeImage
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatMessageAdd);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51778:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ChatMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15352);
/* harmony import */ var _CustomImageContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58861);
/* harmony import */ var _styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45269);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ChatView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18569);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(86390);
/* harmony import */ var _ImagePreviewOnModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73369);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ChatMessage__WEBPACK_IMPORTED_MODULE_3__, _ChatView__WEBPACK_IMPORTED_MODULE_8__]);
([_ChatMessage__WEBPACK_IMPORTED_MODULE_3__, _ChatView__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




//import CustomModal from '../custom-modal/CustomModal'







//import ImagePreviewOnModal from "../image-preview-on-modal";
const ChatMessages = ({ conversationData , scrollBottom  })=>{
    const [messagesData, setMessagesData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [isMessage, setIsMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [conversationDetails, setConversationDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [openModal, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [modalImage, setModalImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let a = [];
        if (conversationData.length > 0) {
            conversationData.forEach((page)=>{
                setConversationDetails(page);
                page?.messages?.forEach((item)=>a.push(item));
            });
            setMessagesData(a);
            setIsMessage(true);
        }
    }, [
        conversationData
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        modalImage && setModalOpen(true);
    }, [
        modalImage
    ]);
    const handleImageOnClick = (value)=>{
        setModalImage(value);
    };
    const handleModalClose = (value)=>{
        setModalOpen(value);
        setModalImage(null);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
        sx: {
            p: 2
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                messagesData?.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChatMessage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        body: item?.message,
                        messgageData: item && item,
                        createdAt: item?.updated_at,
                        conversationData: conversationDetails,
                        image: JSON.parse(item?.file),
                        handleImageOnClick: handleImageOnClick
                    }, index)).reverse(),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    openModal: openModal,
                    setModalOpen: handleModalClose,
                    handleClose: handleModalClose,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImagePreviewOnModal__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        modalImage: modalImage,
                        handleModalClose: handleModalClose
                    })
                }),
                scrollBottom && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChatView__WEBPACK_IMPORTED_MODULE_8__/* .ScrollToBottom */ .a, {})
            ]
        })
    });
};
ChatMessages.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatMessages);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96465:
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
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Chat_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82711);
/* harmony import */ var _ChatContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83505);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ChatContent__WEBPACK_IMPORTED_MODULE_5__]);
_ChatContent__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const ChatSideBar = ({ chatFrom , open , isLoading , selectedId , handleReset , handleToggleSidebar , channelLoading , isFetched , channelList , handleChannelOnClick , searchSubmitHandler , setSearchValue , searchValue , handleSearch  })=>{
    const mdUp = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default()((theme)=>theme.breakpoints.up("md"));
    if (mdUp) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Chat_style__WEBPACK_IMPORTED_MODULE_4__/* .ChatSidebarDesktop */ .zr, {
            variant: "persistent",
            anchor: "left",
            open: Boolean("true"),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChatContent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                isFetched: isFetched,
                handleToggleSidebar: handleToggleSidebar,
                channelList: channelList,
                handleChannelOnClick: handleChannelOnClick,
                setSearchValue: setSearchValue,
                searchValue: searchValue,
                handleSearch: handleSearch,
                isLoading: isLoading,
                handleReset: handleReset,
                searchSubmitHandler: searchSubmitHandler,
                channelLoading: channelLoading,
                selectedId: selectedId
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Chat_style__WEBPACK_IMPORTED_MODULE_4__/* .ChatSidebarMobile */ .lt, {
        anchor: "left",
        variant: "temporary",
        open: chatFrom === "true" ? !open : open,
        children: [
            " ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChatContent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                isFetched: isFetched,
                handleToggleSidebar: handleToggleSidebar,
                channelList: channelList,
                handleChannelOnClick: handleChannelOnClick,
                setSearchValue: setSearchValue,
                searchValue: searchValue,
                handleSearch: handleSearch,
                isLoading: isLoading,
                handleReset: handleReset,
                searchSubmitHandler: searchSubmitHandler,
                selectedId: selectedId
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatSideBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 18569:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "a": () => (/* binding */ ScrollToBottom)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ChatMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51778);
/* harmony import */ var _ChatMessageAdd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63149);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ChatMessages__WEBPACK_IMPORTED_MODULE_3__, _ChatMessageAdd__WEBPACK_IMPORTED_MODULE_4__]);
([_ChatMessages__WEBPACK_IMPORTED_MODULE_3__, _ChatMessageAdd__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_5__.makeStyles)((theme)=>({
        root: {
            "&::-webkit-scrollbar": {
                width: 7
            },
            "&::-webkit-scrollbar-track": {
                boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`
            },
            "&::-webkit-scrollbar-thumb": {
                backgroundColor: "darkgrey",
                outline: `1px solid slategrey`
            }
        }
    }));
const StyledBox = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box)(({ theme  })=>({
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        // overflow: 'hidden',
        minHeight: "70vh",
        height: "100%",
        justifyContent: "space-between"
    }));
const ScrollToBottom = ()=>{
    const elementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>elementRef.current.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
        }));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: elementRef
    });
};
const ChatView = ({ conversationData , handleChatMessageSend , messageIsLoading , handleScroll , scrollBottom  })=>{
    const classes = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledBox, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    overflowY: "scroll",
                    height: "60vh"
                },
                onScroll: handleScroll,
                className: classes.root,
                children: conversationData && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChatMessages__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    conversationData: conversationData,
                    scrollBottom: scrollBottom
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChatMessageAdd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                onSend: handleChatMessageSend
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6758:
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
/* harmony import */ var _mui_icons_material_Chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54242);
/* harmony import */ var _mui_icons_material_Chat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Chat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57987);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_4__]);
react_i18next__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const ChatWithAdmin = ({ handleChannelOnClick  })=>{
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        direction: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: theme.palette.primary.main,
        spacing: 2,
        padding: "1rem",
        sx: {
            cursor: "pointer",
            borderRadius: "4px"
        },
        onClick: ()=>handleChannelOnClick({
                receiver_type: "admin",
                sender_type: "customer"
            }),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Chat__WEBPACK_IMPORTED_MODULE_3___default()), {
                sx: {
                    color: (theme)=>theme.palette.whiteContainer.main
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                sx: {
                    color: (theme)=>theme.palette.whiteContainer.main
                },
                children: t("Chatting with admin")
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatWithAdmin);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6220:
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
/* harmony import */ var _ChatSideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96465);
/* harmony import */ var _ChatView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18569);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _EmptyView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28356);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ConversationInfoTop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2166);
/* harmony import */ var _LoadingBox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45196);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(86201);
/* harmony import */ var _api_manage_hooks_react_query_chat_useGetChannelLists__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(27816);
/* harmony import */ var _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(67759);
/* harmony import */ var _api_manage_hooks_react_query_chat_useGetConversation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(40836);
/* harmony import */ var _api_manage_hooks_react_query_chat_useStoreMessage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(47088);
/* harmony import */ var _api_manage_hooks_react_query_chat_useSearch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(46260);
/* harmony import */ var _PushNotificationLayout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(74724);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ChatSideBar__WEBPACK_IMPORTED_MODULE_3__, _ChatView__WEBPACK_IMPORTED_MODULE_4__, _EmptyView__WEBPACK_IMPORTED_MODULE_6__, _LoadingBox__WEBPACK_IMPORTED_MODULE_12__, react_hot_toast__WEBPACK_IMPORTED_MODULE_13__, _api_manage_hooks_react_query_chat_useGetChannelLists__WEBPACK_IMPORTED_MODULE_14__, _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_15__, _api_manage_hooks_react_query_chat_useGetConversation__WEBPACK_IMPORTED_MODULE_16__, _api_manage_hooks_react_query_chat_useStoreMessage__WEBPACK_IMPORTED_MODULE_17__, _api_manage_hooks_react_query_chat_useSearch__WEBPACK_IMPORTED_MODULE_18__, _PushNotificationLayout__WEBPACK_IMPORTED_MODULE_19__]);
([_ChatSideBar__WEBPACK_IMPORTED_MODULE_3__, _ChatView__WEBPACK_IMPORTED_MODULE_4__, _EmptyView__WEBPACK_IMPORTED_MODULE_6__, _LoadingBox__WEBPACK_IMPORTED_MODULE_12__, react_hot_toast__WEBPACK_IMPORTED_MODULE_13__, _api_manage_hooks_react_query_chat_useGetChannelLists__WEBPACK_IMPORTED_MODULE_14__, _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_15__, _api_manage_hooks_react_query_chat_useGetConversation__WEBPACK_IMPORTED_MODULE_16__, _api_manage_hooks_react_query_chat_useStoreMessage__WEBPACK_IMPORTED_MODULE_17__, _api_manage_hooks_react_query_chat_useSearch__WEBPACK_IMPORTED_MODULE_18__, _PushNotificationLayout__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








// import { useGetConversation } from "../../hooks/react-query/config/chat/useGetConversation";
//import { useStoreMessage } from "../../hooks/react-query/config/chat/useStoreMessage";

//import { useSearchList } from "../../hooks/react-query/config/chat/useSearch";



//import Loading from "../custom-loading/Loading";

//import PushNotificationLayout from "../PushNotificationLayout";







const Chatting = ({ configData  })=>{
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_10__.useTheme)();
    const [page_limit, setPageLimit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);
    const [offset, setOffset] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [isSidebarOpen, setIsSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [channelId, setChannelId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [channelList, setChannelList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [messagesData, setMessagesData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [apiFor, setApiFor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("conversation_id");
    const [receiverType, setReceiverType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [receiverName, setReceiverName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [receiverId, setReceiverId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [receiver, setReceiver] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [receiverImage, setReceiverImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const mdUp = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_7___default()((theme)=>theme.breakpoints.up("md"));
    const mdDown = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_7___default()((theme)=>theme.breakpoints.down("md"));
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const { id , type , routeName , conversationId , chatFrom  } = router.query;
    //const { configData } = useSelector((state) => state.configDataSettings);
    const [scrollBottom, setScrollBottom] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const handleCloseSidebar = ()=>{
        setIsSidebarOpen(false);
    };
    const handleToggleSidebar = ()=>{
        setIsSidebarOpen((prevState)=>!prevState);
    };
    const handleChatListOnSuccess = (res)=>{
        setChannelList(res.conversations);
    };
    const { refetch: refetchChannelList , isFetched , isLoading: channelLoading  } = (0,_api_manage_hooks_react_query_chat_useGetChannelLists__WEBPACK_IMPORTED_MODULE_14__/* .useGetChannelList */ .U)(handleChatListOnSuccess);
    const handleConFetchOnSuccess = (res)=>{
        setConversationData(res.pages[0]);
    };
    const { data , isSuccess , hasNextPage , fetchNextPage , isFetchingNextPage , refetch , isRefetching: conversationDataRefetching , hasPreviousPage  } = (0,_api_manage_hooks_react_query_chat_useGetConversation__WEBPACK_IMPORTED_MODULE_16__/* .useGetConversation */ .h)({
        channelId,
        apiFor,
        page_limit,
        offset
    });
    // from notification
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (type) {
            setReceiverType(type);
        }
        if (conversationId) {
            setChannelId(conversationId);
            setScrollBottom(true);
            const tempReceiver = channelList.length !== 0 && channelList.filter((item)=>item.id == conversationId);
            setReceiver(tempReceiver[0]);
        }
        if (type === "admin") {
            setReceiverId(conversationId);
        } else {
            setReceiverId(null);
        }
    }, [
        conversationId,
        channelList,
        type
    ]);
    //from pages
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (id && routeName && type) {
            const tempReceiver = channelList.length !== 0 && channelList.filter((item)=>{
                if (type === "vendor") {
                    return item?.receiver?.vendor_id == id;
                } else if (type === "delivery_man") {
                    return item?.sender?.deliveryman_id == id;
                }
            });
            setReceiver(tempReceiver[0]);
            setChannelId(id);
            setReceiverId(id);
            setReceiverType(type);
            setApiFor(routeName);
        }
    }, [
        id,
        type,
        routeName,
        chatFrom,
        channelList
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (channelId) {
            refetch();
        }
    }, [
        channelId
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setMessagesData([
            data
        ]);
    }, [
        data
    ]);
    const handleChannelOnClick = async (value)=>{
        setReceiverId(null);
        await refetchChannelList();
        if (value.receiver_type === "admin") {
            setApiFor("admin_id");
            setChannelId("admin");
            setScrollBottom(true);
            setReceiverType(value.receiver_type);
            // setReceiverName(configData.business_name);
            setReceiverImage(value?.receiver?.image);
            setReceiver(value);
        } else {
            setApiFor("conversation_id");
            setChannelId(value.id);
            setScrollBottom(true);
            setReceiverType(value.receiver_type);
            setReceiverName(value.receiver.f_name);
            setReceiverImage(value?.receiver?.image);
            setReceiver(value);
        }
        mdDown && setIsSidebarOpen((prevState)=>!prevState);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        refetchChannelList().then();
    }, []);
    const { mutate: storeMessageByMutate , isLoading: isLoadingMessageSend  } = (0,_api_manage_hooks_react_query_chat_useStoreMessage__WEBPACK_IMPORTED_MODULE_17__/* .useStoreMessage */ .x)();
    const handleChatMessageSend = (values)=>{
        let newValues = {
            receiver_type: receiverType,
            id: channelId,
            receiverId,
            ...values
        };
        const handleSuccess = async (res)=>{
            await refetch();
            await refetchChannelList();
        };
        storeMessageByMutate(newValues, {
            onSuccess: handleSuccess,
            onError: _api_manage_api_error_response_ErrorResponses__WEBPACK_IMPORTED_MODULE_15__/* .onErrorResponse */ .R
        });
    };
    const handleSearchFetchOnSuccess = (res)=>{
        if (res) {
            setChannelList(res.conversations);
        }
    };
    const { isLoading , isRefetching: isRefetchingForSearch , refetch: searchRefetch  } = (0,_api_manage_hooks_react_query_chat_useSearch__WEBPACK_IMPORTED_MODULE_18__/* .useSearchList */ .m)(searchValue, handleSearchFetchOnSuccess);
    const searchSubmitHandler = (e)=>{
        e.preventDefault();
        if (searchValue) {
            try {
                searchRefetch().then();
            } catch (err) {}
        }
    };
    const handleSearch = (values)=>{
        setSearchValue(values);
    };
    const handleReset = ()=>{
        setSearchValue("");
        refetchChannelList().then();
    };
    const handleScroll = (e)=>{
        if (e.currentTarget.scrollTop === 0) {
            if (hasNextPage) {
                fetchNextPage().then();
                e.currentTarget.scrollTop = 300;
                setScrollBottom(false);
            }
        }
    };
    const ChatImageUrl = ()=>{
        if (receiver?.receiver_type === "vendor") {
            return configData?.base_urls?.store_image_url;
        }
        if (receiver?.receiver_type === "delivery_man") {
            return configData?.base_urls?.delivery_man_image_url;
        } else configData?.base_urls?.business_logo_url;
    };
    const userImage = receiverImage;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PushNotificationLayout__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
        refetch: refetch,
        pathName: "chat",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomBoxFullWidth */ .uu, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                spacing: 1,
                direction: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChatSideBar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            onClose: handleCloseSidebar,
                            handleToggleSidebar: handleToggleSidebar,
                            open: isSidebarOpen,
                            handleChannelOnClick: handleChannelOnClick,
                            isFetched: isFetched,
                            channelList: channelList,
                            searchValue: searchValue,
                            setSearchValue: setSearchValue,
                            handleSearch: handleSearch,
                            // isLoading={isLoading}
                            handleReset: handleReset,
                            searchSubmitHandler: searchSubmitHandler,
                            channelLoading: channelLoading,
                            selectedId: receiver?.id,
                            chatFrom: chatFrom,
                            setIsSidebarOpen: setIsSidebarOpen
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
                        children: [
                            receiver && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ConversationInfoTop__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                receiver: receiver,
                                mdUp: mdUp,
                                handleToggleSidebar: handleToggleSidebar,
                                ChatImageUrl: ChatImageUrl,
                                userImage: userImage,
                                theme: theme
                            }),
                            channelId && messagesData.length > 0 && !isFetchingNextPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChatView__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                conversationData: messagesData?.[0]?.pages,
                                handleChatMessageSend: handleChatMessageSend,
                                channelList: channelList,
                                handleScroll: handleScroll,
                                scrollBottom: scrollBottom
                            }),
                            isFetchingNextPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LoadingBox__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
                            !channelId && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EmptyView__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chatting);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 22546:
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
/* harmony import */ var _InfoCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74757);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94172);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(simplebar_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22021);
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40441);
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var simplebar_react_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48710);
/* harmony import */ var simplebar_react_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(simplebar_react_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _landing_page_hero_section_HeroSection_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(77591);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_InfoCard__WEBPACK_IMPORTED_MODULE_4__, i18next__WEBPACK_IMPORTED_MODULE_6__]);
([_InfoCard__WEBPACK_IMPORTED_MODULE_4__, i18next__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






// import { CustomTypography } from "../custom-tables/Tables.style";





const ContactLists = ({ channelList , handleChannelOnClick , channelLoading , selectedId  })=>{
    const { configData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state)=>state.configData);
    if (channelLoading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                ...Array(1, 2, 3, 4)
            ].map((index)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    padding: ".5rem",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                        direction: "row",
                        spacing: 3,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_7___default()), {
                                animation: "wave",
                                variant: "circular",
                                width: 40,
                                height: 40
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                justifyContent: "space-between",
                                direction: "column",
                                width: "100%",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        animation: "wave",
                                        height: 15,
                                        width: "20%"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        animation: "wave",
                                        height: 15,
                                        width: "40%"
                                    })
                                ]
                            })
                        ]
                    })
                }, index);
            })
        });
    }
    const handleInfoCard = (item)=>{
        if (item.sender_type === "customer") {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InfoCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                name: item.receiver_type.replaceAll("_", " "),
                messageTime: item.created_at,
                receiver: item.receiver ? item.receiver.f_name : configData?.business_name,
                unRead: item.unread_message_count,
                userList: item,
                selectedId: selectedId,
                currentId: item.id
            });
        } else {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InfoCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                name: item.sender_type.replaceAll("_", " "),
                messageTime: item.created_at,
                receiver: item?.sender?.f_name.concat(" ", item?.sender?.l_name) || " ",
                unRead: item.unread_message_count,
                userList: item,
                selectedId: selectedId,
                currentId: item.id
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
        children: [
            channelList?.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((simplebar_react__WEBPACK_IMPORTED_MODULE_5___default()), {
                style: {
                    maxHeight: "60vh"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.List, {
                    disablePadding: true,
                    children: channelList?.map((item, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomListItem */ .DF, {
                            disableGutters: true,
                            disablePadding: true,
                            cursor: "true",
                            onClick: ()=>handleChannelOnClick(item),
                            children: handleInfoCard(item)
                        }, index);
                    })
                })
            }),
            channelList.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_landing_page_hero_section_HeroSection_style__WEBPACK_IMPORTED_MODULE_10__/* .CustomTypography */ .ZT, {
                    children: (0,i18next__WEBPACK_IMPORTED_MODULE_6__.t)("You have no channels.")
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactLists);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2166:
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
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Chat_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82711);
/* harmony import */ var _mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61883);
/* harmony import */ var _mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_5__);






const ConversationInfoTop = ({ receiver , mdUp , handleToggleSidebar , ChatImageUrl , userImage , theme  })=>{
    const language_direction = localStorage.getItem("direction");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Chat_style__WEBPACK_IMPORTED_MODULE_4__/* .ChatUserTop */ .hE, {
            direction: "row",
            mdup: mdUp,
            children: [
                !mdUp && (language_direction === "rtl" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                    onClick: handleToggleSidebar,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_5___default()), {
                        fontSize: "small"
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                    onClick: handleToggleSidebar,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__.ArrowBack, {
                        fontSize: "small"
                    })
                })),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                    direction: "row",
                    spacing: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                            justifyContent: "flex-end",
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    align: "right",
                                    color: theme.palette.neutral[100],
                                    children: receiver.sender_type === "customer" ? receiver?.receiver?.f_name.concat(" ", receiver?.receiver?.l_name) || " " : receiver?.sender?.f_name.concat(" ", receiver?.sender?.l_name) || " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    variant: "h6",
                                    color: theme.palette.neutral[100],
                                    textTransform: "capitalize",
                                    align: "right",
                                    children: receiver?.sender_type === "customer" ? receiver?.receiver_type.replaceAll("_", " ") : receiver?.sender_type?.replaceAll("_", " ")
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                fontSize: "small",
                                src: `${ChatImageUrl()}/${userImage}`,
                                sx: {
                                    width: 35,
                                    height: 35
                                }
                            })
                        })
                    ]
                })
            ]
        })
    });
};
ConversationInfoTop.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConversationInfoTop);


/***/ }),

/***/ 28356:
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
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_Sms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59304);
/* harmony import */ var _mui_icons_material_Sms__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Sms__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_8__]);
react_i18next__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const StyledBox = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()))(({ theme  })=>({
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        height: "60vh"
    }));
const StyledAvatar = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Avatar)(({ theme  })=>({
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        height: 56,
        width: 56
    }));
const EmptyView = (props)=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledBox, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledAvatar, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Sms__WEBPACK_IMPORTED_MODULE_6___default()), {
                    fontSize: "small"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                color: "textSecondary",
                sx: {
                    mt: 2
                },
                variant: "subtitle1",
                children: t("Select And Start meaningful conversations!")
            })
        ]
    });
};
EmptyView.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmptyView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 74757:
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
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22021);
/* harmony import */ var _utils_CustomFunctions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81261);
/* harmony import */ var _api_manage_hooks_react_query_user_useGetUserInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59497);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_7__, _utils_CustomFunctions__WEBPACK_IMPORTED_MODULE_8__, _api_manage_hooks_react_query_user_useGetUserInfo__WEBPACK_IMPORTED_MODULE_9__]);
([i18next__WEBPACK_IMPORTED_MODULE_7__, _utils_CustomFunctions__WEBPACK_IMPORTED_MODULE_8__, _api_manage_hooks_react_query_user_useGetUserInfo__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// import {
//   FormatedDateWithTime,
//   getDateFormat,
// } from "../../utils/customFunctions";

// import { ProfileApi } from "../../hooks/react-query/config/profileApi";





// import adminImage from "../../../public/static/food.png";
const StyledBadge = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Badge)(({ theme  })=>({
        "& .MuiBadge-badge": {
            backgroundColor: "#44b700",
            color: "#44b700",
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            "&::after": {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                animation: "ripple 1.2s infinite ease-in-out",
                border: "1px solid currentColor",
                content: '""'
            }
        },
        "@keyframes ripple": {
            "0%": {
                transform: "scale(.8)",
                opacity: 1
            },
            "100%": {
                transform: "scale(2.4)",
                opacity: 0
            }
        }
    }));
const InfoCard = ({ name , messageTime , receiver , userList , unRead , currentId , selectedId  })=>{
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.useTheme)();
    const { configData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.configData);
    const { profileInfo  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.profileInfo);
    const ChatImageUrl = ()=>{
        if (userList.receiver_type === "vendor") {
            return configData?.base_urls?.store_image_url;
        }
        if (userList.receiver_type === "delivery_man") {
            return configData?.base_urls?.delivery_man_image_url;
        } else configData?.base_urls?.business_logo_url;
    };
    const { data , refetch , isLoading  } = (0,_api_manage_hooks_react_query_user_useGetUserInfo__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        refetch();
    }, []);
    const userImage = userList?.receiver?.image;
    const isSender = data?.userinfo?.id === userList.last_message.sender_id;
    const language_direction = localStorage.getItem("direction");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
        direction: "row",
        spacing: 2,
        alignItems: "center",
        padding: "10px 15px 10px 10px",
        sx: {
            background: selectedId === currentId ? (theme)=>theme.palette.primary.main : ""
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledBadge, {
                overlap: "circular",
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                    src: `${ChatImageUrl()}/${userImage}`
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_3__/* .CustomStackFullWidth */ .Xw, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                        direction: "row",
                        justifyContent: "space-between",
                        marginRight: language_direction === "rtl" ? "1rem" : "0rem",
                        color: selectedId === currentId ? theme.palette.neutral[100] : theme.palette.neutral[1000],
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                children: receiver
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                variant: "h5",
                                fontWeight: "700",
                                children: !isLoading && !isSender && unRead > 0 && unRead
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                        direction: "row",
                        justifyContent: "space-between",
                        color: selectedId === currentId ? theme.palette.neutral[100] : theme.palette.neutral[1000],
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                variant: "h7",
                                children: (0,i18next__WEBPACK_IMPORTED_MODULE_7__.t)(name)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                variant: "h7",
                                children: (0,_utils_CustomFunctions__WEBPACK_IMPORTED_MODULE_8__/* .FormatedDateWithTime */ .gM)(messageTime)
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfoCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45196:
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
/* harmony import */ var _ChatMessageAdd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63149);
/* harmony import */ var _custom_loading_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38730);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ChatMessageAdd__WEBPACK_IMPORTED_MODULE_3__]);
_ChatMessageAdd__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// import Loading from '../custom-loading/Loading'


const LoadingBox = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_components_CustomStyles_style__WEBPACK_IMPORTED_MODULE_2__/* .CustomStackFullWidth */ .Xw, {
        height: "71vh",
        justifyContent: "space-between",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_custom_loading_Loading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChatMessageAdd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingBox);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 38730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);



function Loading() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        alignItems: "center",
        style: {
            left: "50%"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CircularProgress, {})
    });
}


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

/***/ 98416:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AttachFile");

/***/ }),

/***/ 54242:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Chat");

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

/***/ 54828:
/***/ ((module) => {

module.exports = require("@mui/icons-material/InsertPhoto");

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

/***/ 64731:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Send");

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

/***/ 59304:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Sms");

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
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,8889,5269,7113,4121,8861,9240,4369,801,6941,5213,3369], () => (__webpack_exec__(23703)));
module.exports = __webpack_exports__;

})();
"use strict";
exports.id = 778;
exports.ids = [778];
exports.modules = {

/***/ 70778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_UserLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(72805);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
// EXTERNAL MODULE: external "@mui/material/List"
var List_ = __webpack_require__(94192);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@mui/material/ListItemText"
var ListItemText_ = __webpack_require__(78315);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);
// EXTERNAL MODULE: ./src/components/header/second-navbar/account-popover/menuData.js
var menuData = __webpack_require__(65164);
// EXTERNAL MODULE: ./src/components/CustomImageContainer.js + 1 modules
var CustomImageContainer = __webpack_require__(58861);
;// CONCATENATED MODULE: ./src/components/profile/MenuBar.js










const MenuBar = (props)=>{
    const { configData , t  } = props;
    const router = (0,router_.useRouter)();
    const activeRoute = (routeName, currentRoute)=>{
        return routeName.toLowerCase() === currentRoute;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                sx: {
                    padding: "0px 0px 30px 0px",
                    color: (theme)=>theme.palette.neutral[1000],
                    fontSize: "26px",
                    fontWeight: "700",
                    textAlign: "center",
                    marginTop: "12px"
                },
                children: t("Your Profile")
            }),
            menuData/* menuData.map */.K.map((item, index)=>{
                if (configData?.customer_wallet_status === 0 && item.id === 4 || configData?.loyalty_point_status === 0 && item.id === 5 || configData?.ref_earning_status === 0 && item.id === 6) {
                    return null;
                } else {
                    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `${item?.path}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            container: true,
                            md: 12,
                            xs: 12,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                md: 12,
                                xs: 12,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                        selected: activeRoute(item?.path, router.pathname),
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ListItem, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemIcon, {
                                                    children: item?.icon
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                    primary: t(item?.name)
                                                })
                                            ]
                                        }, index)
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {})
                                ]
                            })
                        })
                    }, index);
                }
            })
        ]
    });
};
MenuBar.propTypes = {};
/* harmony default export */ const profile_MenuBar = (MenuBar);

// EXTERNAL MODULE: ./src/components/side-drawer/CustomSideDrawer.js
var CustomSideDrawer = __webpack_require__(89216);
// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var Menu_ = __webpack_require__(63365);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
;// CONCATENATED MODULE: ./src/components/profile/SideDrawer.js









const SideDrawer = ({ t  })=>{
    const theme = (0,react_.useTheme)();
    const router = (0,router_.useRouter)();
    const { title  } = router.query;
    const [sideDrawerOpen, setSideDrawerOpen] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                item: true,
                xs: 2,
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                    variant: "outlined",
                    onClick: ()=>setSideDrawerOpen(true),
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                        sx: {
                            color: (theme)=>theme.palette.primary.main
                        }
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CustomSideDrawer/* default */.Z, {
                open: sideDrawerOpen,
                onClose: ()=>setSideDrawerOpen(false),
                anchor: "left",
                children: /*#__PURE__*/ jsx_runtime_.jsx(profile_MenuBar, {
                    t: t
                })
            })
        ]
    });
};
SideDrawer.propTypes = {};
/* harmony default export */ const profile_SideDrawer = (SideDrawer);

// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(18442);
;// CONCATENATED MODULE: ./src/components/layout/UserLayout.js








const CustomBodyContent = (0,styles_.styled)("div")(({ theme  })=>({
        flexGrow: 1,
        padding: theme.spacing.unit * 3
    }));
const UserLayout = (props)=>{
    const { component , configData , t  } = props;
    const router = (0,router_.useRouter)();
    const theme = (0,react_.useTheme)();
    const isSmall = (0,material_.useMediaQuery)(theme.breakpoints.down("sm"));
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
            container: true,
            md: 12,
            spacing: {
                xs: 0,
                md: 3,
                lg: 2
            },
            sx: {
                minHeight: "100vh"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    container: true,
                    item: true,
                    mt: "1rem",
                    sx: {
                        display: {
                            sm: "block",
                            md: "none"
                        }
                    },
                    alignItems: "center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(profile_SideDrawer, {
                        t: t
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    item: true,
                    //sm={3}
                    lg: 2.5,
                    md: 3,
                    xs: 12,
                    sx: {
                        display: {
                            xs: "none",
                            md: "block"
                        }
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(profile_MenuBar, {
                        configData: configData,
                        t: t
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    item: true,
                    md: 9,
                    lg: 9.5,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomBodyContent, {
                        children: component
                    })
                })
            ]
        })
    });
};
UserLayout.propTypes = {};
/* harmony default export */ const layout_UserLayout = (UserLayout);


/***/ })

};
;
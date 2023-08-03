(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888,6812];
exports.modules = {

/***/ 38484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30108);
/* harmony import */ var _src_styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35525);
/* harmony import */ var _src_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_utils_create_emotion_cache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58784);
/* harmony import */ var _src_redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40382);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94419);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_components_rtl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41064);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86201);
/* harmony import */ var _src_contexts_settings_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(18050);
/* harmony import */ var _src_language_i18n__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(89333);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(65918);
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(30808);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(14161);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _src_components_favicon_DynamicFavicon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(56241);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(57987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_redux_store__WEBPACK_IMPORTED_MODULE_6__, react_hot_toast__WEBPACK_IMPORTED_MODULE_11__, _src_language_i18n__WEBPACK_IMPORTED_MODULE_13__, react_i18next__WEBPACK_IMPORTED_MODULE_21__]);
([_src_redux_store__WEBPACK_IMPORTED_MODULE_6__, react_hot_toast__WEBPACK_IMPORTED_MODULE_11__, _src_language_i18n__WEBPACK_IMPORTED_MODULE_13__, react_i18next__WEBPACK_IMPORTED_MODULE_21__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















next_router__WEBPACK_IMPORTED_MODULE_17___default().events.on("routeChangeStart", (nprogress__WEBPACK_IMPORTED_MODULE_16___default().start));
next_router__WEBPACK_IMPORTED_MODULE_17___default().events.on("routeChangeError", (nprogress__WEBPACK_IMPORTED_MODULE_16___default().done));
next_router__WEBPACK_IMPORTED_MODULE_17___default().events.on("routeChangeComplete", (nprogress__WEBPACK_IMPORTED_MODULE_16___default().done));
const clientSideEmotionCache = (0,_src_utils_create_emotion_cache__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
function MyApp(props) {
    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;
    const getLayout = Component.getLayout ?? ((page)=>page);
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_21__.useTranslation)();
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_14__.QueryClient({
        defaultOptions: {
            queries: {
                cacheTime: 1000 * 60 * 5,
                staleTime: 1000 * 60 * 2
            }
        }
    });
    //storing persisted data
    let persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_18__.persistStore)(_src_redux_store__WEBPACK_IMPORTED_MODULE_6__/* .store */ .h);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.CacheProvider, {
            value: emotionCache,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_query__WEBPACK_IMPORTED_MODULE_14__.QueryClientProvider, {
                client: queryClient,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
                        store: _src_redux_store__WEBPACK_IMPORTED_MODULE_6__/* .store */ .h,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_contexts_settings_context__WEBPACK_IMPORTED_MODULE_12__/* .SettingsProvider */ .mu, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_contexts_settings_context__WEBPACK_IMPORTED_MODULE_12__/* .SettingsConsumer */ .ix, {
                                children: (value)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.ThemeProvider, {
                                        theme: (0,_src_theme__WEBPACK_IMPORTED_MODULE_8__/* .createTheme */ .j)({
                                            direction: value?.settings?.direction,
                                            responsiveFontSizes: value?.settings?.responsiveFontSizes,
                                            mode: value?.settings?.theme
                                        }),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_rtl__WEBPACK_IMPORTED_MODULE_10__/* .RTL */ .l, {
                                            direction: value?.settings?.direction,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_9___default()), {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_11__.Toaster, {
                                                    position: "top-center"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_favicon_DynamicFavicon__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_20___default()), {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                                        children: t("Loading...")
                                                    })
                                                }),
                                                getLayout(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                                    ...pageProps
                                                }))
                                            ]
                                        })
                                    })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_query_devtools__WEBPACK_IMPORTED_MODULE_15__.ReactQueryDevtools, {
                        initialIsOpen: false,
                        position: "bottom-right"
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);





const DynamicFavicon = ()=>{
    const { configData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.configData);
    const businessLogo = configData?.base_urls?.business_logo_url;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: `${businessLogo}/${configData?.fav_icon}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                href: `${businessLogo}/${configData?.fav_icon}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: `${businessLogo}/${configData?.fav_icon}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: `${businessLogo}/${configData?.fav_icon}`
            })
        ]
    });
};
DynamicFavicon.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicFavicon);


/***/ }),

/***/ 41064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "l": () => (/* binding */ RTL)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@emotion/cache"
var cache_ = __webpack_require__(71913);
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(72805);
;// CONCATENATED MODULE: external "stylis-plugin-rtl"
const external_stylis_plugin_rtl_namespaceObject = require("stylis-plugin-rtl");
var external_stylis_plugin_rtl_default = /*#__PURE__*/__webpack_require__.n(external_stylis_plugin_rtl_namespaceObject);
;// CONCATENATED MODULE: ./src/components/rtl/index.js






const styleCache = ()=>cache_default()({
        key: "rtl",
        prepend: true,
        stylisPlugins: [
            (external_stylis_plugin_rtl_default())
        ]
    });
const RTL = (props)=>{
    const { children , direction  } = props;
    (0,external_react_.useEffect)(()=>{
        document.dir = direction;
    }, [
        direction
    ]);
    if (direction === "rtl") {
        return /*#__PURE__*/ jsx_runtime_.jsx(react_.CacheProvider, {
            value: styleCache(),
            children: children
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    });
};
RTL.propTypes = {
    children: (external_prop_types_default()).node.isRequired,
    direction: external_prop_types_default().oneOf([
        "ltr",
        "rtl"
    ])
};


/***/ }),

/***/ 16985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ arabic)
/* harmony export */ });
const arabic = {
    Category: " فئة ",
    Email: " البريد الإلكتروني ",
    Password: " كلمة المرور ",
    "Remember me": " تذكرنى؟",
    "Forgot Password": "هل نسيت كلمة السر",
    Login: " تسجيل الدخول ",
    "Want to login to your services ?": " هل تريد تسجيل الدخول إلى خدماتك؟",
    "Login here": "تسجيل الدخول من هنا",
    Dashboard: " لوحة القيادة ",
    "Collect Cash": "جمع النقود",
    "Open Confirm Dialog": "افتح حوار التأكيد",
    "Confirm this request ? ": " تأكيد هذا الطلب؟",
    Cancel: " يلغي ",
    Yes: " نعم ",
    Download: " تحميل ",
    Filter: " منقي ",
    "Zone Name": "اسم المنطقة ",
    "What are you sending ?": "ماذا ترسل",
    Providers: " الموفرون",
    Services: " خدمات",
    Status: " حالة ",
    "Send your parcel anywhere in country instantly & Safely": "أرسل طردك إلى أي مكان في البلد على الفور وبأمان",
    "Receiver Information": "معلومات استقبال",
    "Receiver Name": "اسم المتلقي",
    "Receiver Phone": "هاتف المستقبل",
    "Sender Name": "اسم المرسل",
    "Sender Phone": "هاتف المرسل",
    "Instant Same Day Delivery": "توصيل فوري في نفس اليوم",
    "Parcel Delivery Information": "معلومات توصيل الطرود",
    "Sender Information": "معلومات المرسل",
    "Set from map": "تعيين من الخريطة",
    "Add New Address": "أضف عنوان جديد",
    "Saves Addresses": "يحفظ العناوين",
    "Street number": "رقم الشارع",
    "Parcel Info": "معلومات الطرد",
    "Proceed to Checkout": "الشروع في الخروج",
    "Pickup Address": "عنوان الاستلام",
    Action: " عمل ",
    "House no.": "رقم المنزل.",
    Contact: "اتصال",
    "My Account": " حسابي",
    "Prescription Order": "أمر وصفة طبية",
    "Please upload your prescription image": "يرجى تحميل صورة الوصفة الخاصة بك",
    Mails: " رسائل",
    Notification: "إشعارات",
    Resturants: "مطاعم",
    Categories: "فئات",
    "SOME COMPONENTS": " بعض المكونات",
    Components: " عناصر ",
    Tables: " الجداول ",
    Alerts: " تنبيهات ",
    Toasters: " محمصات ",
    Dialogs: " الحوارات ",
    "Form with formik": "شكل مع فورميك ",
    Charts: " الرسوم البيانية ",
    "Provider Details": " تفاصيل المزود ",
    "Multistep Form With Steppers": " نموذج متعدد الخطوات مع ستيبرز ",
    "SERVICE MANAGEMENT": " إدارة الخدمات ",
    "Service Zones": " مناطق الخدمة ",
    "Service Categories": " فئات الخدمة ",
    "Category Setup": " إعداد الفئة ",
    "Sub Category Setup": "إعداد الفئة الفرعية ",
    "Service List": " قائمة الخدمات ",
    "Upload File": " رفع ملف ",
    "On Demand Service": " خدمة عند الطلب ",
    "Page not found": " الصفحة غير موجودة ",
    "Go Back Home": " ارجع الى البيت ",
    "Sign In": "تسجيل الدخول",
    "Sign in to stay connected.": " تسجيل الدخول للبقاء على اتصال.",
    "Collect Cash From Provider": " تحصيل النقود من المزود ",
    Edit: " يحرر ",
    "Information Details": " تفاصيل المعلومات ",
    "This field is required": " هذه الخانة مطلوبه ",
    "Payment Method": "طريقة الدفع او السداد ",
    "Name on card": "الاسم على البطاقة",
    "Card Number": " رقم البطاقة ",
    Back: " خلف ",
    Next: " التالي ",
    "Review Your Order": " راجع طلباتك ",
    "Shipping Address": " عنوان الشحن ",
    "First Name": " الاسم الاول ",
    "Last Name": " الكنية ",
    Address: " تبوك ",
    "Payment Details": " بيانات الدفع ",
    "Place Order": "مكان الامر ",
    "Company / Individual name is required": " اسم الشركة / الفرد مطلوب ",
    "Phone number is not valid": " رقم الهاتف غير صالح ",
    "Phone number is required": " رقم الهاتف مطلوب ",
    "Address is required": " العنوان مطلوب ",
    "File is required*": " الملف مطلوب *",
    "Name is required": "مطلوب اسم",
    "Phone is required": " الهاتف مطلوب ",
    "Must be a valid email": " يجب أن يكون بريدًا إلكترونيًا صالحًا ",
    "Password is too short - should be 6 chars minimum.": "كلمة المرور قصيرة جدًا - يجب ألا تقل عن 6 أحرف.",
    "Email is required": " البريد الالكتروني مطلوب ",
    "No password provided.": " لم يتم تقديم كلمة مرور.",
    "Password is too short - should be 8 chars minimum.": " كلمة المرور قصيرة جدًا - يجب ألا تقل عن 8 أحرف.",
    "Passwords must match": " يجب ان تتطابق كلمات المرور ",
    "Form With Formik": " شكل مع فورميك ",
    "General Information": " معلومات عامة ",
    "Company / Individual Name": " اسم الشركة / الفرد ",
    "Add New Provider": " إضافة موفر جديد ",
    "Business Information": " معلومات العمل ",
    "Select Identity Type": " حدد نوع الهوية ",
    "Contact Person": " الشخص الذي يمكن الاتصال به ",
    "Same as general information": " نفس المعلومات العامة ",
    "Account Information": " معلومات الحساب ",
    "Confirm Password": " تأكيد كلمة المرور ",
    Submit: " يُقدِّم  ",
    Reset: " إعادة ضبط ",
    "Filter your order": " قم بتصفية طلبك ",
    "Select Date Range": " حدد النطاق الزمني ",
    "Select Categories": " حدد الفئات ",
    "Select  Sub Categories": " حدد الفئات الفرعية ",
    "Select  Zones": " حدد المناطق ",
    "Clear all Filter": " مسح الكل عامل التصفية ",
    "Open Delete Dialog": " افتح مربع حوار الحذف ",
    "Are Your Sure You Want to Delete This Zone ?": " هل أنت متأكد أنك تريد حذف هذه المنطقة؟ ",
    "This operation cannot be undone": " هذه العملية لا يمكن التراجع عنها ",
    "No, Keep this ": " لا ، احتفظ بهذا ",
    "Yes, Delete": " نعم ، احذف ",
    "Provider Details With Cards and Tabs": " تفاصيل المزود مع البطاقات وعلامات التبويب",
    Search: "يبحث",
    Logout: " تسجيل خروج ",
    Overview: " ملخص ",
    "Subscribed Services": " الخدمات المشتركة ",
    Orders: " الطلب",
    "Service Man List": " قائمة رجل الخدمة ",
    Settings: " إعدادات ",
    Reviews: " المراجعات ",
    Phone: " هاتف ",
    Name: " اسم ",
    "Identity Number": " رقم الهوية ",
    "Rows Per Page": " عدد الصفوف في الصفحة ",
    Checkout: " الدفع ",
    "Shipping address": " عنوان الشحن ",
    "Payment details": " بيانات الدفع ",
    "Review your order": " راجع طلباتك ",
    "First name is required": " الإسم الأول مطلوب ",
    "Last name is required": " إسم العائلة مطلوب ",
    "Address Form": " استمارة العنوان ",
    "items selected": " العناصر المحددة ",
    "Image Format - JPG, Pong, ZPEG, GIF Image Size - Maximum Size 2Mb Image Ratio - 1: 1": " تنسيق الصورة - JPG و Pong و ZPEG و GIF حجم الصورة - أقصى حجم 2 ميجا بايت نسبة الصورة - 1: 1",
    "Order ID": " رقم التعريف الخاص بالطلب ",
    "Order Amount": " كمية الطلب ",
    "Track Order": " ترتيب المسار",
    Pending: " قيد الانتظار ",
    Home: "مسكن",
    "Features Catagories": "فئات الميزات",
    Food: "غذاء",
    Campaigns: "الحملات",
    "Best Reviewed Foods": "أفضل الأطعمة التي تمت مراجعتها",
    "View all": "اظهار الكل",
    "New On StackFood": "جديد على ",
    "Popular Resturant Nearby": "مطاعم شهيرة بالجوار",
    "Popular Food": "الغذاء الشعبي",
    Nearby: "مجاور",
    view: "رأي",
    "Filter By": "مصنف بواسطة",
    "See more": "شاهد المزيد",
    All: "الجميع",
    Veg: "نباتي",
    "(Veg)": "نباتي",
    "Clear All Filter": "مسح الكل عامل التصفية",
    "Non-Veg": "غير نباتي",
    "(Non-Veg)": "غير نباتي",
    "Sort Grid": "فرز الشبكة",
    "Sort by": "صنف حسب",
    "Your Favourites": "مفضلاتك",
    "More from Store": "المزيد من المتجر",
    "We found": "وجدنا",
    "for you": "لك",
    "View More": "عرض المزيد",
    food: "غذاء",
    Description: "وصف",
    "Add to Cart": "أضف إلى السلة",
    "Total Amount": "المبلغ الإجمالي",
    "Add Ons (OPTIONAL)": "الإضافات (اختياري)",
    "Select Variations": "حدد الاختلافات",
    "Starts from": "يبدأ من",
    Capacity: "الاهلية",
    "Add to favorite": "أضف إلى المفضلة",
    "Minimum Order Value": "الحد الأدنى لقيمة الطلب",
    "Delivery Time": "موعد التسليم",
    Ratings: "التقييمات",
    Rating: "تقييم",
    Offer: "عرض",
    "Expired on": "انتهت يوم",
    Purchase: "شراء",
    "Min purchase": "الحد الأدنى للشراء",
    "Only for": "فقط ل",
    "Only for some specific zones": "فقط لبعض المناطق المحددة",
    Restaurant: "مطعم",
    Max: "أقصى",
    Copied: "تم نسخ الرمز",
    "Active Order": "أمر نشط",
    "Past Order": "طلب سابق",
    "FIND BEST RESTAURANTS NEAR YOU": "اعثر على أفضل المطاعم بالقرب منك",
    "Pick Form Map": "اختر خريطة النموذج",
    "Set Location": "تحديد المكان",
    "Search location here...": "ابحث عن الموقع هنا ...",
    "Let Google help apps determine location This means sending anonymous location data to Google, even when no apps are running.": " دع Google تساعد التطبيقات في تحديد الموقع. هذا يعني إرسال بيانات موقع مجهولة إلى Google ، حتى في حالة عدم تشغيل أي تطبيقات.",
    "Use Google's location service?": "هل تستخدم خدمة الموقع من Google؟",
    Disagree: "تعارض",
    Okay: "تمام",
    "Search...": "يبحث",
    Restaurants: " مطاعم ",
    "New Arrival": "قادم جديد",
    all: "الجميع",
    "Popular Restaurants": "مطعم شعبي",
    "Popular Food Nearby": " طعام شعبي قريب ",
    "food for you": " أطعمة لك ",
    restaurants: " مطاعم ",
    Location: "موقع",
    "Resturant Informations": " معلومات المطعم ",
    "Payment Status": " حالة السداد ",
    "Order Status": " حالة الطلب ",
    Amount: " مقدار ",
    "Payment method": " طريقة الدفع او السداد ",
    "Search for items...": "البحث عن العناصر ...",
    "Order placed": "تم الطلب",
    Order: "ترتيب",
    "Follow us on": "اتبعنا",
    "24/7 Helpline": "24/7 خط المساعدة",
    "DELIVERY DETAILS": "تفاصيل التسليم",
    "Delivery Options": "خيارات التوصيل",
    "Home Delivery": "توصيل منزلي",
    "Take Away": "يبعد",
    "Preferable Time": "الوقت المفضل",
    "Already have an account?": "هل لديك حساب؟",
    "Don't have an account?": "ليس لديك حساب؟",
    Time: "زمن",
    Today: "اليوم",
    Tomorrow: "الغد",
    Subtotal: "المجموع الفرعي",
    Discount: " تخفيض",
    "Payment Options": "خيارات الدفع",
    "Cash on delivery": "الدفع عند الاستلام",
    "Digital Payment": "الدفع الرقمي",
    "Wallet payment": "دفع المحفظة",
    " I agree that placing the order places me under Terms and Conditions & Privacy Policies": " أوافق على أن تقديم الطلب يضعني ضمن الشروط والأحكام وسياسات الخصوصية",
    "Have a Coupon?": "هل لديك قسيمة؟",
    "Apply Now": "قدم الآن",
    "View Saved Address": "عرض العنوان المحفوظ",
    "Delivery Address": "عنوان التسليم",
    " Add new address": " أضف عنوان جديد",
    " Add New +": "أضف جديد +",
    "Address Type": "نوع العنوان",
    home: "مسكن",
    "Price Range": "نطاق السعر",
    Others: "آحرون",
    "Contact Person Name": "اسم شخص الاتصال",
    "Contact Person Number": "رقم جهة الاتصال",
    "Street Number": "رقم الشارع",
    items: "أغراض",
    Stores: "المتاجر",
    "Sort By": "ترتيب حسب",
    "A to Z": "من الألف إلى الياء",
    "Z to A": "من ي إلى أ",
    "Filter Search Results": "تصفية نتائج البحث",
    "items for you !": "عناصر لك!",
    "Store for you !": "متجر لك!",
    "Transaction History": "تاريخ المعاملات",
    "AUTHENTIC ASIAN CUISINE": "المطبخ الآسيوي الأصيل",
    "BEST TACOS AROUND": "أفضل تاكو حولها",
    "Fast Home Delivery": "توصيل سريع للمنزل",
    "DISCOUNT UPTO 20%": "خصم يصل إلى 20٪",
    "for Chinese, Japanies & Asian foods": "للأطعمة الصينية واليابانية والآسيوية",
    "Open Your Own Virtual Restaurant On ": "افتح مطعمك الافتراضي على ",
    Price: "سعر",
    "Discounted Items": "الأصناف المخفضة",
    "Currently Available Items": "العناصر المتاحة حاليا",
    "Download our app from google play store & app store.": "قم بتنزيل تطبيقنا من متجر Google play ومتجر التطبيقات.",
    "I agree with the terms & conditions": "أوافق على الشروط والأحكام",
    "Item added to cart": "تمت إضافة العنصر إلى سلة التسوق",
    "You are not logged in": "لم يتم دخولك",
    Free: "حر",
    "Login Information": "معلومات تسجيل الدخول",
    "Owner Information": "معلومات المالك",
    "Delivery Man Image": "صورة رجل التسليم",
    "Loyalty Points !": "نقاط الولاء !",
    "Search your desired foods ": "ابحث عن الأطعمة التي تريدها ",
    "file Upload": "تحميل الملف",
    "Delivery Man Type": "نوع رجل التوصيل",
    Zone: "منطقة",
    "Identity Type": "نوع الهوية",
    "VAT/TEX": "ضريبة القيمة المضافة",
    "Restaurant Address": "عنوان المطعم",
    "Restaurant Name": "اسم المطعم",
    "restaurant address required": "عنوان المطعم مطلوب",
    "restaurant name required": "اسم المطعم مطلوب",
    "Minimum Delivery Time": "الحد الأدنى من وقت التسليم",
    Logo: "شعار",
    Items: "العناصر",
    "Coupon Applied": "تم تطبيق الكوبون",
    Paid: "مدفوع",
    Unpaid: "غير مدفوعة",
    "Order Summery": "ملخص الطلب",
    "Your food will be delivered within": "سيتم توصيل طعامك في الداخل",
    "Back to home": "العودة إلى المنزل",
    "Order Place Failed": "فشل مكان الطلب",
    "Order didn't place successfully.": "لم يتم تقديم الطلب بنجاح.",
    "Are you sure you want to cancel this order?": "هل أنت متأكد أنك تريد إلغاء هذا الطلب؟",
    "Delivery man doesnt assigned": "لم يتم تعيين رجل التسليم",
    "Delivery man has not been assigned": "لم يتم تعيين رجل التوصيل",
    "Not Available now": "غير متاح الآن",
    "Available will be": "سيكون متاحا",
    "non-veg": "غير نباتي",
    veg: "نباتي",
    Recommended: "مُستَحسَن",
    "Delivering to": "يسلم ل",
    "Switch to Cash On Delivery": "قم بالتبديل إلى الدفع النقدي عند التسليم",
    "Are you sure you want to switch this order to Cash On Delivery?": 'هل أنت متأكد أنك تريد تحويل هذا الطلب إلى "الدفع عند التسليم"؟',
    "Payment Failed": "عملية الدفع فشلت",
    "Store Information": "معلومات المتجر",
    " Change": " يتغيرون",
    "Added to favorite successfully.": "تمت الإضافة إلى المفضلة بنجاح.",
    "Removed from  favorite successfully.": "تمت الإزالة من المفضلة بنجاح.",
    "Something went wrong.": "هناك خطأ ما.",
    Update: " تحديث",
    Prescription: "روشتة",
    "Past orders": "الطلبات السابقة",
    "Active orders": "أوامر نشطة",
    Wallet: "محفظة",
    "Coupon Copied": "تم نسخ القسيمة",
    "Wallet Amount": "مبلغ المحفظة",
    Language: "لغة",
    "Identity number Is A Required Field": "رقم الهوية هو حقل مطلوب",
    "Delivery man image is required": "مطلوب صورة رجل التسليم",
    "Logged in successfully": "تم تسجيل الدخول بنجاح",
    "Copyright \xa9": "حقوق النشر \xa9",
    Copy: "ينسخ",
    "Terms & Conditions": "البنود و الظروف",
    "Privacy Policy": "سياسة الخصوصية",
    "Additional Note": "مذكرة إضافية",
    "Only for First Order": "فقط للطلب الأول",
    "Quick Links": "روابط سريعة",
    "Contact Us": "اتصل بنا",
    "About Us": "معلومات عنا",
    " Loyalty Points": " نقاط الولاء",
    "My account": "حسابي",
    Delivery: "توصيل",
    " Take away": " يبعد",
    "Please search some keywords.": "الرجاء البحث عن بعض الكلمات الرئيسية.",
    "Are you sure you want to delete this address?": "هل أنت متأكد أنك تريد حذف هذا العنوان؟",
    "No food found": "لم يتم العثور على طعام",
    "No restaurant found": "لم يتم العثور على مطعم",
    "You cannot order from multiple restaurants in a single order": "لا يمكنك الطلب من عدة مطاعم في طلب واحد",
    "You have food from another restaurant in cart. If you continue, your all previous food from cart will be removed": "لديك طعام من مطعم آخر في عربة التسوق. إذا تابعت ، ستتم إزالة كل طعامك السابق من عربة التسوق",
    "Are you sure, you want to reset?": "هل أنت متأكد أنك تريد إعادة تعيين؟",
    "Please Choose a delivery address.": "الرجاء اختيار عنوان التسليم.",
    "You denied location permission. Please allow browsers location permission from your device, refresh the site and receive more accurate delivery.": "لقد رفضت إذن تحديد الموقع. يرجى السماح بإذن تحديد موقع المستعرضات من جهازك ، وتحديث الموقع والحصول على توصيل أكثر دقة.",
    Variation: "تفاوت",
    Addon: "اضافه",
    "You place the order successfully.": "تهانينا! لقد قمت بوضع الطلب بنجاح",
    "Your order is placed Successfully. We start our delivery process and you will receive your food soon": "تم تقديم طلبك بنجاح. نبدأ عملية التوصيل وستتلقى طعامك قريبًا",
    "Congratulations!": "تهانينا!",
    "One or more item is not available for the chosen preferable schedule time.": "عنصر واحد أو أكثر غير متاح لوقت الجدول المفضل المختار.",
    "Download app to enjoy more!": "قم بتنزيل التطبيق للاستمتاع أكثر!",
    "Delete My Account": "احذف حسابي",
    "Are you sure you want to delete your account?": "هل انت متأكد انك تريد حذف حسابك؟",
    "Pick Locations": "اختر المواقع",
    "Sign in successfully.": "تسجيل الدخول بنجاح.",
    "Best Reviewed Food": "أفضل طعام تمت مراجعته",
    "Best Reviewed": "أفضل مراجعة",
    "Need Any help?": "هل تحتاج الى مساعدة؟",
    "Communicate with our support team to get proper guidance to your quaternaries.": "تواصل مع فريق الدعم الخاص بنا للحصول على التوجيه المناسب لأرباعك.",
    "VISIT US": "زورنا",
    "EMAIL US": "ارسل لنا عبر البريد الإلكتروني",
    "CALL US": "اتصل بنا",
    "write something": "أكتب شيئا",
    "Restaurant Registration": "تسجيل مطعم",
    "Logo is required": "الشعار مطلوب",
    "Cover photo is required": "صورة الغلاف مطلوبة",
    "Please search a location first.": "الرجاء البحث عن موقع أولا.",
    "New location has been set.": "تم تعيين موقع جديد.",
    "Popular Foods Nearby": "الأطعمة الشعبية المجاورة",
    "Please exchange more than": "الرجاء صرف أكثر من",
    points: "نقاط",
    debit: "مدين",
    credit: "تنسب إليه",
    "No Favourite Restaurant Found": "لم يتم العثور على مطعم مفضل",
    "No Favourite Food Found": "لم يتم العثور على طعام مفضل",
    "Delivery man": "رجل التوصيل",
    "Trip Route": "طريق الرحلة",
    away: "بعيد",
    "Order placed at": "تم تقديم الطلب في",
    "Search result for": "نتيجة البحث عن",
    "Enter phone number": "أدخل رقم الهاتف",
    "Free Delivery": "توصيل مجاني",
    referrer: "المرجع",
    "Please give an amount": "الرجاء إعطاء مبلغ",
    "order refund": "طلب استرداد",
    "Join as delivery man on": "انضم كرجل توصيل في",
    "Lets Connect !": "لنتواصل!",
    "Stay upto date with restaurants and foods around you": "ابق على اطلاع على المطاعم والأطعمة من حولك",
    "Best Restaurants Near Your Location": "أفضل المطاعم بالقرب من موقعك",
    "Light Mode": "وضع الضوء",
    "Dark Mode": "الوضع الداكن",
    "Food Campaigns": "الحملات الغذائية",
    "Best Restaurants": "أفضل المطاعم",
    History: "تاريخ",
    Suggestions: "اقتراحات",
    OFF: "إيقاف",
    "Days since Joining": "عدد الأيام منذ الانضمام",
    "Amount in Wallet": "المبلغ في المحفظة",
    Coupons: "كوبونات",
    Wallets: "محافظ",
    "Your Address": "عنوانك",
    "Loyalty Points": "نقاط الولاء",
    "Order placed ": "تم الطلب",
    "Restaurant Information's": "معلومات المطعم",
    "Items Price": "سعر الأصناف",
    "Addons Price": "سعر الإضافات",
    "Coupon Discount": "خصم القسيمة",
    VAT: "ضريبة القيمة المضافة",
    "Delivery fee": "رسوم التوصيل",
    "Share your opinion": "مشاركة رأيك",
    "Rate the food": "قيم الطعام",
    Quantity: "كمية",
    "Rate the deliveryman": "قيم عامل التوصيل",
    "I agree that placing the order places me under Terms and Conditions & Privacy Policies": "أوافق على أن تقديم الطلب يضعني ضمن الشروط والأحكام وسياسات الخصوصية",
    "Delivery Man Tips": "نصائح رجل التوصيل",
    Distance: "مسافة",
    "Confirm Parcel Request": "تأكيد طلب الطرد",
    "Charge Paid By": "الرسوم المدفوعة",
    "Delivery Fee": "رسوم التوصيل",
    "Item updated successfully": "تم تحديث العنصر بنجاح",
    Included: "متضمن",
    "Maximum 3 images can be send at a time.": "يمكن إرسال 3 صور كحد أقصى في المرة الواحدة.",
    "Attach photo": "إرفاق صورة",
    Send: "يرسل",
    "It Will Add To Your Balance When The Order Is Delivered": "ستضيف إلى رصيدك عند تسليم الطلب",
    "You have earned": "لقد ربحت نقطة",
    "Enjoy Off On All Foods": "استمتع بإيقاف جميع الأطعمة",
    "Discount Available From": "الخصم متاح من",
    "Minimum purchase value": "الحد الأدنى لقيمة الشراء",
    "Max Discount": "ماكس الخصم",
    "Search foods in restaurant ": "ابحث عن الأطعمة في المطعم",
    "Filter Your Search Results": "تصفية نتائج البحث الخاصة بك",
    "Currently Available Foods": "الأطعمة المتوفرة حاليًا",
    "Discounted Foods": "الأطعمة المخفضة",
    "clear all filter": "مسح كل عامل التصفية",
    "ascending (A-Z)": "تصاعدي (أ-ي)",
    "descending (Z-A)": "تنازلي (Z-A)",
    "Are You Sure You Want To Delete ?": "هل أنت متأكد أنك تريد حذف ؟",
    "Are You Sure You Want To Logout?": "هل أنت متأكد أنك تريد تسجيل الخروج؟",
    "Only for  Restaurant": "فقط للمطعم",
    Register: "يسجل",
    "Use Current Location": "انضم كرجل توصيل في",
    "My Orders": "طلباتي",
    Profile: "الملف الشخصي",
    "Personal Info": "معلومات شخصية",
    "Fast Name": "اسم سريع",
    "Theme Settings": "إعدادات الموضوع",
    "Change language": "تغيير اللغة",
    "Not changeable": "غير قابل للتغيير",
    "Add New +": "إضافة + جديد",
    "Add new address": "إضافة عنوان جديد",
    "Add new address +": "إضافة عنوان جديد +",
    "insufficient amount": "كمية غير كافية",
    "has been copied": "تم نسخه",
    Code: "شفرة",
    "Convert to currency now": "تحويل إلى عملة الآن",
    "Your loyalty point will convert to currency and transfer to wallet": "سيتم تحويل نقاط الولاء الخاصة بك إلى عملة وتحويلها إلى المحفظة",
    point: "نقطة",
    "Your Profile": "ملفك الشخصي",
    Office: "مكتب",
    "No Coupon Found": "لم يتم العثور على قسيمة",
    "% off": "٪ عن",
    "Search a restaurant": "ابحث عن مطعم",
    "Closed Now": "مغلق الآن",
    Min: "دقيقة",
    "% off on all foods": "٪ خصم على جميع الأطعمة",
    Enjoy: "يتمتع",
    "Discount available from": "الخصم متاح من",
    "Search foods in restaurant": "البحث عن الأطعمة في المطعم",
    "foods for you": "أطعمة لك",
    Off: "عن",
    "Your Wishlist": "قائمة امنياتك",
    "Only For": "فقط ل",
    "Cart is Empty": "السلة فارغة",
    "in your cart": "في عربة التسوق الخاصة بك",
    min: "دقيقة",
    "Clear All": "امسح الكل",
    "Total Price": "السعر الكلي",
    "Wallet balance is below total amount": "رصيد المحفظة أقل من المبلغ الإجمالي",
    "Selected Address": "العنوان المحدد",
    "Enter Your Coupon..": "أدخل قسيمتك ..",
    "Order Summary": "ملخص الطلب",
    Total: "المجموع",
    "Restaurant Informations": "معلومات المطعم",
    "Give a review": "قدِّم مراجعة",
    "Cancel Order": "الغاء الطلب",
    "Order Confirmed": "تم تاكيد الطلب",
    "Preparing Food": "تحضير الطعام",
    "Food is on the way": "الطعام في الطريق",
    Delivered: "تم التوصيل",
    "Give Review": "أعط مراجعة",
    "Are you sure you want to  delete this item?": "هل أنت متأكد أنك تريد حذف هذا البند؟",
    "Select And Start meaningful conversations!": "حدد وابدأ محادثات هادفة!",
    "Leave a message": "اترك رسالة",
    "Your order is placed Successfully. We start our delivery process and you will receive your food soon.": "تم تقديم طلبك بنجاح. نبدأ عملية التوصيل وستتلقى طعامك قريبًا",
    "point.": "نقطة",
    "It will add to your balance when the order is delivered.": "ستضيف إلى رصيدك عند تسليم الطلب.",
    "You must accept the": "يجب عليك قبول",
    "Terms and conditions": "الأحكام والشروط",
    "Forgot password?": "هل نسيت كلمة السر؟",
    "Sign Up": "اشتراك",
    "Refer Code (Optional)": "إحالة الكود (اختياري)",
    "Your Email Address": "عنوان بريدك  الإلكتروني",
    Join: "انضم",
    "Contact us": "اتصل بنا",
    "Send us mails": "أرسل لنا رسائل بريد إلكتروني",
    "Find us here": "اعثر علينا هنا",
    "Connect with our social media and other sites to keep up to date": "تواصل مع وسائل التواصل الاجتماعي الخاصة بنا والمواقع الأخرى للبقاء على اطلاع دائم",
    "My Wallet": "محفظتى",
    "Become a restaurant owner": "كن صاحب مطعم",
    "Become a delivery man": "كن رجل توصيل",
    "Help & Support": "ساعد لدعم",
    "Open your own  virtual restaurant on": "افتح مطعمك الافتراضي على",
    "Are you sure you want to  logout?": "هل أنت متأكد أنك تريد تسجيل الخروج؟",
    "Clear Cart": "مسح السلة",
    "Order Now": "اطلب الان",
    "Location is required.": "الموقع مطلوب.",
    Agree: "يوافق على",
    Close: "قريب",
    Favorites: "المفضلة",
    "Pick from map": "اختر من الخريطة",
    Or: "أو",
    TAX: "ضريبة",
    "Add-on": "اضافه",
    "items in your cart": "الوحدات الموجودة فى سلة التسوق الخاصة بك",
    "Delivery Addresses": "عناوين التسليم",
    "VAT/TAX": "ضريبة القيمة المضافة",
    "Maximum Delivery Time": "وقت التسليم الأقصى",
    "Cover Photo": "صورة الغلاف",
    Latitude: "خط العرض",
    Longitude: "خط الطول",
    "Confirm Password required": "مطلوب تأكيد كلمة المرور",
    "last name required": "نشاط اسم مطلوب",
    "phone number required": "رقم الهاتف مطلوب",
    "vat is required": "ضريبة القيمة المضافة مطلوبة",
    "Identity Image": "صورة الهوية",
    "Password is required": "كلمة المرور مطلوبة",
    Passport: "جواز سفر",
    Nid: "لا",
    FreeLancer: "مستقل",
    Salary: "مرتب",
    "Please enter your register Mobile Number": "الرجاء إدخال رقم الهاتف المتحرك المسجل الخاص بك",
    Done: "فعله",
    "field is empty": "الحقل فارغ",
    Verify: "يؤكد",
    take_away: "يبعد",
    Delete: "حذف",
    Now: "حاليا",
    Qty: "الكمية",
    Schedule: "برنامج",
    order_place: "مكان الطلب",
    loyalty_point: "نقطة ولاء",
    add_fund_by_admin: "إضافة تمويل من قبل المشرف",
    point_to_wallet: "أشر إلى المحفظة",
    pending: "ريثما",
    picked_up: "التقط",
    accepted: "وافقت",
    confirmed: "تم تأكيد",
    canceled: "ألغيت",
    cash_on_delivery: "الدفع عند الاستلام",
    delivered: "تم التوصيل",
    Comment: "تعليق",
    "You have no channels.": "ليس لديك قنوات.",
    admin: "مشرف",
    "delivery man": "رجل التوصيل",
    vendor: "بائع",
    "Refund Request": "طلب ارجاع",
    "Select an option": "حدد اختيارا",
    "Submit Refund Request": "إرسال طلب استرداد",
    Note: "ملحوظة",
    "Please select a reason": "الرجاء تحديد سبب",
    "Deliveryman Registration": "تسجيل موظف التوصيل",
    foods: "الأطعمة",
    House: "منزل",
    Floor: "أرضية",
    "No Data Found": "لاتوجد بيانات",
    "No title given": "لم يتم إعطاء عنوان",
    "Language Changed Successfully": "تم تغيير اللغة بنجاح",
    "Cancellation Policy": "سياسة الإلغاء",
    "Refund Policy": "سياسة الاسترجاع",
    "Shipping Policy": "سياسة الشحن",
    "(required)": "(مطلوب)",
    "(optional)": "(اختياري)",
    "Add Ons (Optional)": "إضافات (اختياري)",
    "Selected variation named": "الشكل المحدد المسمى",
    "Available Form": "النموذج المتاح",
    "is not available right now. You can order it later.": "غير متوفر الآن. يمكنك طلبها لاحقًا.",
    "must be in between Minimum": "يجب أن يكون بين الحد الأدنى",
    "and Maximum": "والحد الأقصى",
    "is not available right now.": "غير متوفر الآن.",
    This: "هذا",
    "can not remain without selection.": "لا يمكن أن يبقى بدون اختيار",
    "This Variation needs to be selected in between minimum": "يجب تحديد هذا الاختلاف بين الحد الأدنى",
    "items.": "العناصر.",
    "Social Register": "السجل الاجتماعي",
    "Social Login": "تسجيل الدخول الاجتماعي",
    "Continue with facebook": "تواصل مع Facebook",
    "Password can not be updated while you are logged in by using social logins.": "لا يمكن تحديث كلمة المرور أثناء تسجيل الدخول باستخدام عمليات تسجيل الدخول الاجتماعية.",
    "Previously added restaurant foods have been removed from cart. Now, try again.": "تمت إزالة أطعمة المطعم المضافة سابقًا من سلة التسوق. الآن ، حاول مرة أخرى",
    "All Restaurants": "جميع المطاعم",
    referral: "الإحالة",
    Get: "حصل على",
    "on joining": "عند الانضمام",
    "Earn money on every referral": "كسب المال على كل إحالة",
    "Refer your code to your friends": "قم بإحالة الكود الخاص بك إلى أصدقائك",
    "Tap to copy": "انقر للنسخ",
    "Your Referral Code": "رمز الإحالة الخاص بك",
    "Referral Code": "كود الإحالة",
    "Referral code Copied": "تم نسخ رمز الإحالة",
    "Search suggestions are loading...": "يتم تحميل اقتراحات البحث ...",
    "Your token has been expired.please sign in again": "انتهت صلاحية الرمز المميز الخاص بك. يرجى تسجيل الدخول مرة أخرى",
    // "away":"بعيد"
    "New On": "جديد",
    "Deliveryman tips": "نصائح التوصيل",
    "something went wrong.": "هناك خطأ ما.",
    "Please wait sometimes": "من فضلك انتظر احيانا",
    "No Cuisine Restaurant Found": "لم يتم العثور على مطعم للمأكولات",
    "Cuisine Restaurant": "مطعم كوزين",
    Cuisines: "المطابخ",
    RecommendProduct: "يوصي المنتج",
    "Cancel Reason": "إلغاء السبب",
    "You can not Order more then 1000৳ on COD order": "لا يمكنك طلب أكثر من 1000 عند طلب الدفع عند الاستلام",
    Chat: "محادثة",
    WishList: "قائمة الرغبات",
    "Search for items or store...": "البحث عن العناصر أو المتجر ...",
    Cart: "عربة التسوق",
    Store: "متجر",
    We: "نحن",
    satisfied: "راضي",
    handover: "سلم",
    processing: "يعالج",
    refund_requested: "استرداد طلب",
    "Delivery Information": "معلومات التوصيل",
    "Parcel Category": "فئة الطرد",
    "refund requested": "استرداد طلب",
    Billing: "الفواتير",
    "cash on delivery": "الدفع عند الاستلام",
    popular_stores: "المتاجر الشعبية",
    others: "آحرون",
    Receiver: "المتلقي",
    Sender: "مرسل",
    office: "مكتب",
    "refund requested canceled": "تم إلغاء طلب رد الأموال",
    refunded: "برد",
    "some Customer & Restaurant Owners": "بعض العملاء وأصحاب المطاعم",
    "Become a store owner": "كن صاحب متجر",
    "Become A Seller": "كن بائعا",
    "Register as seller and open shop in 6amMart to start your business": "سجل كبائع وافتح متجرًا في 6ammart لبدء عملك",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.": "العميل مهم جدا ، العميل سيتبعه.",
    "Select location first to start exploring shops & restaurants near you": "حدد الموقع أولاً لبدء استكشاف المتاجر والمطاعم القريبة منك",
    "Start Exploring!": "ابدأ الاستكشاف!",
    "Explore Now": "استكشف الآن",
    "Register as seller and open shop in": "سجل كبائع وافتح متجرًا في",
    "Let’s Start Earning with": "فلنبدأ في كسب المال باستخدام",
    "Become A Deliveryman": "كن موظف توصيل",
    "to start your business": "لبدء عملك",
    "Register as delivery man and earn money": "سجل كرجل توصيل واكسب المال",
    "Campaign Schedule :": "جدول الحملة:",
    "Daily time: ": "الوقت اليومي:",
    "Featured categories": "فئات مميزة",
    "Popular Items Nearby": "العناصر الشعبية المجاورة",
    "Running Campaigns": "الحملات الجارية",
    "New Arrival Stores": "متاجر وصول جديدة",
    "Best reviewed items": "أفضل العناصر التي تمت مراجعتها",
    "All Stores": "جميع المتاجر",
    "take away": "يبعد",
    "Select a type of module for your orders": "حدد نوع الوحدة لأوامرك",
    "Popular Stores": "المتاجر الشعبية",
    "A module has been selected.": "تم اختيار الوحدة النمطية.",
    "Please give a phone number": "يرجى إعطاء رقم هاتف",
    "Search a category": "ابحث عن فئة",
    "Login with": "تسجيل الدخول مع",
    Popular: "شائع",
    delivery: "توصيل",
    "Similar Products": "منتجات مماثلة",
    "Buy Now": "اشتري الآن",
    "Update To Cart": "التحديث إلى عربة التسوق",
    "Select the type of stores for your order": "حدد نوع المتاجر لطلبك",
    "A store must be selected to continue": "يجب تحديد متجر للمتابعة",
    "A module must be selected to continue.": "يجب تحديد وحدة للمتابعة.",
    "Please enter your registered mobile number": "الرجاء إدخال رقم هاتفك المحمول المسجل",
    "The total amount of the order, exceeds maximum amount of the cash on delivery method": "المبلغ الإجمالي للطلب ، يتجاوز الحد الأقصى لمبلغ الدفع نقدًا عند التسليم",
    "You have item from another store in cart. If you continue, your all previous item from cart will be removed and this one will be added.": "لديك عنصر من متجر آخر في سلة التسوق. إذا تابعت ، ستتم إزالة جميع العناصر السابقة من سلة التسوق وستتم إضافة هذا العنصر.",
    "More products need to apply the coupon": "تحتاج المزيد من المنتجات لتطبيق القسيمة",
    "terms and conditions": "الأحكام والشروط",
    "About us": "معلومات عنا",
    "Shipping policy": "سياسة الشحن",
    "Cancellation policy": "سياسة الإلغاء",
    "To apply this coupon, total item amount should be minimum": "لتطبيق هذه القسيمة ، يجب أن يكون إجمالي مبلغ العنصر هو الحد الأدنى",
    "Point to wallet transfer successfully.": "أشر إلى تحويل المحفظة بنجاح.",
    "Item Price": "سعر السلعة",
    "Vat/Tax (Included)": "(ضريبة القيمة المضافة (مضمنة)",
    Clear: "واضح",
    "Saved Addresses": "العناوين المحفوظة",
    "This variation is out of stock": "هذا الشكل غير متوفر",
    "Free delivery": "توصيل مجاني",
    "Store is closed. Try again later.": "المتجر مغلق. حاول مرة أخرى في وقت لاحق.",
    "Restaurant is closed. Try again later.": "المطعم مغلق. حاول مرة أخرى في وقت لاحق.",
    "I agree that placing the order places me under": "أوافق على أن وضع الطلب يضعني تحت",
    "Terms and Conditions": "الأحكام والشروط",
    "Join our online marketplace revolution and boost your income.": "انضم إلى ثورة سوقنا على الإنترنت وعزز دخلك.",
    "Loading...": "تحميل...",
    "Language has been changed": "تم تغيير اللغة",
    "No module found": "لم يتم العثور على وحدة",
    "Contact with the site owner to activate modules.": "تواصل مع مالك الموقع لتفعيل الوحدات.",
    "Google Play": "Google Play",
    "App Store": "App Store",
    "Seller App": "تطبيق البائع",
    "Deliveryman App": "تطبيق التوصيل",
    "We are under maintainance.": "نحن تحت الصيانة.",
    "We will be back very soon.": "ونحن سوف يعود قريبا جدا.",
    "Organic": "عضوي",
    "Theme mode": "وضع الموضوع",
    "What’s Wrong With This Order?": "ما الخطأ في هذا الطلب؟",
    "Getting Order List...": "الحصول على قائمة الطلبات ...",
    "Add Cutlery": "إضافة السكاكين",
    "Dont have a cutlery? Restaurant will provide you.": "لا تملك أدوات مائدة؟ سيوفر لك المطعم.",
    "If Any product is not available": "إذا كان أي منتج غير متوفر",
    "Remove it form my cart": "إزالته من عربة التسوق",
    "I will wait until it is restocked": "سأنتظر حتى يتم إعادة تخزينه",
    "Please cancel the order": "يرجى إلغاء النظام",
    "Call me ASAP": "الاتصال بي في اسرع وقت ممكن",
    "Notify me when it is back": "أعلمني عندما يعود",
    "Add More Delivery Instruction": "إضافة المزيد من تعليمات التوصيل",
    "Deliver to the front door": "التوصيل إلى الباب الأمامي",
    "Deliver to the reception desk": "تسليمها إلى مكتب الاستقبال",
    "Avoid calling phone": "تجنب الاتصال بالهاتف",
    "Come with no sound": "تعال بدون صوت",
    "Cutlery": "السكاكين",
    "Delivery instruction": "تعليمات التسليم",
    "Unavailable item note": "ملاحظة عنصر غير متوفر",
    "Deny": "ينكر",
    "Accept": "يقبل",
    "Without any payment method, you can not place the order.": "بدون أي طريقة دفع ، لا يمكنك تقديم الطلب",
    "Subscribe": "يشترك",
    "Nothing found": "لم يتم العثور على شيء",
    "Unit": "وحدة",
    "In Stock": "في الأوراق المالية",
    "Out of Stock": "إنتهى من المخزن",
    "Cancelled By": "ألغى بواسطة",
    "Cancellation Reason": "سبب الإلغاء",
    "Locate me": "تحديد موقع لي",
    "Explore": "يستكشف",
    "Are you sure to change the language?": "هل أنت متأكد من تغيير اللغة؟",
    "The browser will refresh to get translated content.": "سيتم تحديث المتصفح للحصول على المحتوى المترجم.",
    "No": "لا",
    "We are under maintenance.": "نحن تحت الصيانة.",
    "Remove it from my cart": "إزالته من عربة التسوق"
};


/***/ }),

/***/ 65794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ bengali)
/* harmony export */ });
const bengali = {
    "Checking theme and rtl": "থিম এবং আরটিএল পরীক্ষা করা হচ্ছে",
    "Light Mode": "হালকা মোড",
    "Location": "Location"
};


/***/ }),

/***/ 84029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ english)
/* harmony export */ });
const english = {
    "Checking theme and rtl": "Checking theme and rtl",
    "Download ON": "Download ON",
    "GET IT ON": "GET IT ON",
    "Become a store owner": "Become a store owner",
    "Search for items or store...": "Search for items or store...",
    Stores: "Stores",
    "Filter Search Results": "Filter Search Results",
    Your: "Your",
    "e-Commerce !": "e-Commerce !",
    "Venture Starts Here": "Venture Starts Here",
    "A module has been selected.": "A module has been selected.",
    "Select the type of stores for your order": "Select the type of stores for your order",
    "Search location here...": "Search location here...",
    "Login required.": "Login required.",
    "New delivery address selected.": "New delivery address selected.",
    "Download the Seller App": "Download the Seller App",
    "Download the deliveryman App": "Download the deliveryman App",
    "Download the Driver App": "Download the Driver App",
    "Best reviewed items": "Best reviewed items",
    "Featured categories": "Featured categories",
    "New Arrival Stores": "New Arrival Stores",
    "New Arrival": "New Arrival",
    "Popular Stores": "Popular Stores",
    "Login with": "Login with",
    "Please give a phone number": "Please give a phone number",
    "Search a category": "Search a category",
    "New on": "New on",
    "You got a free home delivery service": "You got a free home delivery service",
    "Instant Same Day Delivery": "Instant Same Day Delivery",
    "Send your parcel anywhere in country instantly & Safely": "Send your parcel anywhere in country instantly & Safely",
    "What are you sending ?": "What are you sending ?",
    "Parcel Delivery Information": "Parcel Delivery Information",
    "Sender Information": "Sender Information",
    "Receiver Information": "Receiver Information",
    "Sender Name": "Sender Name",
    "Pickup Address": "Pickup Address",
    "Sender Phone": "Sender Phone",
    "Set from map": "Set from map",
    "Add New Address": "Add New Address",
    "Saves Addresses": "Saves Addresses",
    "Street number": "Street number",
    "Parcel Info": "Parcel Info",
    "Proceed to Checkout": "Proceed to Checkout",
    "Sender name required": "Sender name required",
    "Receiver name required": "Receiver name required",
    "Sender phone required": "Sender phone required",
    "Receiver phone required": "Receiver phone required",
    "Delivery Information": "Delivery Information",
    Billing: "Billing",
    "Receiver Name": "Receiver Name",
    "Receiver Phone": "Receiver Phone",
    Sender: "Sender",
    "House no.": "House no.",
    "Floor no.": "Floor no.",
    Receiver: "Receiver",
    "Parcel Category": "Parcel Category",
    Distance: "Distance",
    Other: "Other",
    "Charge Paid By": "Charge Paid By",
    "Faster and safer way to send money": "Faster and safer way to send money",
    Send: "Send",
    "Confirm Parcel Request": "Confirm Parcel Request",
    "All Stores": "All Stores",
    "Take away": "Take away",
    "If you want to change store type, it will reset your cart and other related cache data.": "If you want to change store type, it will reset your cart and other related cache data.",
    Change: "Change",
    Location: "Location",
    "You must accept the terms and conditions": "You must accept the terms and conditions",
    "terms and conditions": "terms and conditions",
    "Available at": "Available at",
    to: "to",
    from: "from",
    "Minimum purchase": "Minimum purchase",
    "Maximum discount": "Maximum discount",
    Chat: "Chat",
    "Sender or Receiver location is missing": "Sender or Receiver location is missing",
    "please login first": "please login first",
    "Wallet balance is below total amount.": "Wallet balance is below total amount.",
    Color: "Color",
    "Buy Now": "Buy Now",
    "Similar Products": "Similar Products",
    Copy: "Copy",
    "No transaction found": "No transaction found",
    "insufficient amount": "insufficient amount",
    "You have item from another store in cart. If you continue, your all previous item from cart will be removed": "You have item from another store in cart. If you continue, your all previous item from cart will be removed",
    "Theme Settings": "Theme Settings",
    "Change language": "Change language",
    "Floor:": "Floor:",
    "Your Wishlist": "Your Wishlist",
    Products: "Products",
    Shops: "Shops",
    "Price Range": "Price Range",
    "Search for items...": "Search for items...",
    "Shipping policy": "Shipping policy",
    "Your cart has been cleared successfully. Now try to add the product again.": "Your cart has been cleared successfully. Now try to add the product again.",
    "items in your cart": "items in your cart",
    "No Favourite Items Found": "No Favourite Items Found",
    "No Favourite Stores Found": "No Favourite Stores Found",
    "You have nothing in your cart to checkout.": "You have nothing in your cart to checkout.",
    "Choose Your Interests": "Choose Your Interests",
    "Get personalized food recommendations.": "Get personalized food recommendations.",
    "Filter your search results": "Filter your search results",
    "Sort By": "Sort By",
    Ascending: "Ascending",
    "A to Z": "A to Z",
    Descending: "Descending",
    "Z to A": "Z to A",
    Price: "Price",
    "Filter By": "Filter By",
    "Forget password?": "Forget password?",
    "Welcome to React": "Welcome to React and react-i18next",
    Category: "Category",
    Email: "Email",
    Password: "Password",
    "Remember me": "Remember me",
    "Forgot Password": "Forgot Password",
    Login: "Login",
    "Want to login to your services ?": "Want to login to your services ?",
    "Login here": "Login here",
    Dashboard: "Dashboardd",
    "Collect Cash": "Collect Cash",
    "Open Confirm Dialog": "Open Confirm Dialog",
    "Confirm this request ? ": "Confirm this request ? ",
    Cancel: "Cancel",
    Yes: "Yes",
    Download: "Download",
    Filter: "Filter",
    "Zone Name": "Zone Name",
    Providers: "Providers",
    Services: "Services",
    Status: "Status",
    Action: "Action",
    "My Account": "My Account",
    Mails: "Mails",
    Notification: "Notifications",
    Restaurants: "Restaurants",
    Categories: "Categories",
    "SOME COMPONENTS": "SOME COMPONENTS",
    Components: "Components",
    Tables: "Tables",
    Alerts: "Alerts",
    Toasters: "Toasters",
    Dialogs: "Dialogs",
    "Form with formik": "Form with formik",
    Charts: "Charts",
    "Provider Details": "Provider Details",
    "Multistep Form With Steppers": "Multistep Form With Steppers",
    "SERVICE MANAGEMENT": "SERVICE MANAGEMENT",
    "Service Zones": "Service Zones",
    "Service Categories": "Service Categories",
    "Category Setup": "Category Setup",
    "Sub Category Setup": "Sub Category Setup",
    "Service List": "Service List",
    "Upload File": "Upload File",
    "On Demand Service": "On Demand Service",
    "Page not found": "Page not found",
    "Go Back Home": "Go Back Home",
    "Sign In": "Sign In",
    "Sign in to stay connected.": "Sign in to stay connected.",
    "Collect Cash From Provider": "Collect Cash From Provider",
    Edit: "Edit",
    "Information Details": "Information Details",
    "This field is required": "This field is required",
    "Payment Method": "Payment Method",
    "Name on card": "Name on card",
    "Card Number": "Card Number",
    Back: "Back",
    Next: "Next",
    "Review Your Order": "Review Your Order",
    "Shipping Address": "Shipping Address",
    "First Name": "First Name",
    "Last Name": "Last Name",
    Address: "Address",
    "Payment Details": "Payment Details",
    "Place Order": "Place Order",
    "Company / Individual name is required": "Company / Individual name is required",
    "Phone number is not valid": "Phone number is not valid",
    "Phone number is required": "Phone number is required",
    "Address is required": "Address is required",
    "File is required*": "File is required*",
    "Name is required": "Name is required",
    "Phone is required": "Phone is required",
    "Must be a valid email": "Must be a valid email",
    "Password is too short - should be 6 chars minimum.": "Password is too short - should be 6 chars minimum.",
    "Email is required": "Email is required",
    "No password provided.": "No password provided.",
    "Password is too short - should be 8 chars minimum.": "Password is too short - should be 8 chars minimum.",
    "Passwords must match": "Passwords must match",
    "Form With Formik": "Form With Formik",
    "General Information": "General Information",
    "Company / Individual Name": "Company / Individual Name",
    "Add New Provider": "Add New Provider",
    "Business Information": "Business Information",
    "Select Identity Type": "Select Identity Type",
    "Contact Person": "Contact Person",
    "Same as general information": "Same as general information",
    "Please upload your prescription image": "Please upload your prescription image",
    "Account Information": "Account Information",
    "Confirm Password": "Confirm Password",
    Submit: "Submit",
    Reset: "Reset",
    Contact: "Contact",
    Prescription: "Prescription",
    "Store Information": "Store Information",
    "Prescription Order": "Prescription Order",
    "Filter your order": "Filter your order",
    "Select Date Range": "Select Date Range",
    "Select Categories": "Select Categories",
    "Select  Sub Categories": "Select  Sub Categories",
    "Select  Zones": "Select  Zones",
    "Clear all Filter": "Clear all Filter",
    "Open Delete Dialog": "Open Delete Dialog",
    "Are Your Sure You Want to Delete This Zone ?": "Are Your Sure You Want to Delete This Zone ?",
    "This operation cannot be undone": "This operation cannot be undone",
    "No, Keep this ": "No, Keep this ",
    "Yes, Delete": "Yes, Delete",
    "Provider Details With Cards and Tabs": "Provider Details With Cards and Tabs",
    Search: "Search",
    Logout: "Logout",
    Overview: "Overview",
    "Subscribed Services": "Subscribed Services",
    Orders: "Orders",
    "Service Man List": "Service Man List",
    Settings: "Settings",
    Reviews: "Reviews",
    Phone: "Phone",
    Name: "Name",
    "Identity Number": "Identity Number",
    "Rows Per Page": "Rows Per Page",
    Checkout: "Checkout",
    "Shipping address": "Shipping address",
    "Payment details": "Payment details",
    "Review your order": "Review your order",
    "First name is required": "First name is required",
    "Last name is required": "Last name is required",
    "Address Form": "Address Form",
    "items selected": "items selected",
    "Image Format - JPG, Pong, ZPEG, GIF Image Size - Maximum Size 2Mb Image Ratio - 1: 1": "Image Format - JPG, Pong, ZPEG, GIF Image Size - Maximum Size 2Mb Image Ratio - 1: 1",
    "Order ID": "Order ID",
    "Order Amount": "Order Amount",
    "Track Order": "Track Order",
    Pending: "Pending",
    "More from Store": "More from Store",
    Home: "Home",
    "Features Catagories": "Features Catagories",
    Food: "Food",
    Campaigns: "Campaigns",
    "Best Reviewed Foods": "Best Reviewed Foods",
    "View all": "View all",
    "New On StackFood": "New On StackFood",
    "Popular Restaurants ": "Popular Restaurants",
    "Popular Food Nearby": "Popular Food Nearby",
    Nearby: "Nearby",
    "Best Resturants": "Best Resturants",
    "Filter by :": "Filter by :",
    "See more": "See more",
    All: "All",
    Veg: "Veg",
    "(Veg)": "(Veg)",
    "Non-Veg": "Non-Veg",
    "(Non-Veg)": "(Non-Veg)",
    "Sort Grid": "Sort Grid",
    "Sort by": "Sort by",
    "Your Favourites": "Your Favourites",
    view: "view",
    "View More": "View More",
    "We found": "We found",
    "foods for you": "foods for you",
    restaurants: "restaurants",
    "Best Reviewed": "Best Reviewed",
    "Sign in successfully.": "Sign in successfully.",
    food: "food",
    This: "This",
    "Available Form": "Available Form",
    "is not available right now. You can order it later.": "is not available right now. You can order it later.",
    Description: "Description",
    "is not available right now.": "is not available right now.",
    "Add to Cart": "Add to Cart",
    "Total Amount": "Total Amount",
    "Add Ons (OPTIONAL)": "Add Ons (OPTIONAL)",
    "Select Variations": "Select Variations",
    "Starts from": "Starts from",
    Capacity: "Capacity",
    "Add to favorite": "Add to favorite",
    "Minimum Order Value": "Minimum Order Value",
    "Delivery Time": "Delivery Time",
    Ratings: "Ratings",
    Rating: "Rating",
    Offer: "Offer",
    "Expired on": "Expired on",
    Purchase: "Purchase",
    "Min purchase": "Min purchase",
    "Only for": "Only for",
    "Only for some specific zones": "Only for some specific zones",
    Restaurant: "Restaurant",
    Max: "Max",
    Code: "Code",
    "has been copied": "has been copied",
    Copied: "Code copied!",
    "Active Order": "Active Order",
    "Past Order": "Past Order",
    "Resturant Informations": "Resturant Informations",
    "Payment Status": "Payment Status",
    "Order Status": "Order Status",
    Amount: "Amount",
    "Payment method": "Payment method",
    "Update To Cart": "Update To Cart",
    "Order placed": "Order placed",
    Order: "Order",
    "Follow us on": "Follow us on",
    "24/7 Helpline": "24/7 Helpline",
    "DELIVERY DETAILS": "DELIVERY DETAILS",
    "Delivery Options": "Delivery Options",
    "Home Delivery": "Home Delivery",
    "Take Away": "Take Away",
    "Preferable Time": "Preferable Time",
    "Already have an account?": "Already have an account?",
    "Don't have an account?": "Don't have an account?",
    Time: "Time",
    delivery: "delivery",
    Today: "Today",
    Tomorrow: "Tomorrow",
    Subtotal: "Subtotal",
    Discount: "Discount",
    "Payment Options": "Payment Options",
    "Cash on delivery": "Cash on delivery",
    "Digital Payment": "Digital Payment",
    "Wallet payment": "Wallet payment",
    Wallet: "Wallet",
    "cash on delivery": "cash on delivery",
    all: "all",
    "Active orders": "Active orders",
    "Past orders": "Past orders",
    " I agree that placing the order places me under Terms and Conditions & Privacy Policies": " I agree that placing the order places me under Terms and Conditions & Privacy Policies",
    "Have a Coupon?": "Have a Coupon?",
    "Apply Now": "Apply Now",
    "View Saved Address": "View Saved Address",
    "Delivery Address": "Delivery Address",
    " Add new address": " Add new address",
    "Add new address +": "Add new address +",
    " Add New +": " Add New +",
    "Address Type": "Address Type",
    home: "Home",
    Office: "Office",
    Others: "Others",
    "Contact Person Name": "Contact Person Name",
    "Contact Person Number": "Contact Person Number",
    "Street Number": "Street Number",
    "Transaction History": "Transaction History",
    "AUTHENTIC ASIAN CUISINE": "AUTHENTIC ASIAN CUISINE",
    "BEST TACOS AROUND": "BEST TACOS AROUND",
    "Fast Home Delivery": "Fast Home Delivery",
    "DISCOUNT UPTO 20%": "DISCOUNT UPTO 20%",
    "for Chinese, Japanies & Asian foods": "for Chinese, Japanese & Asian foods",
    "Download our app from google play store & app store.": "Download our app from google play store & app store.",
    "I agree with the terms & conditions": "I agree with the terms & conditions",
    "Item added to cart": "Item added to cart",
    "You are not logged in": "You are not logged in",
    Free: "Free",
    "Login Information": "Login Information",
    "Owner Information": "Owner Information",
    "Delivery Man Image": "Delivery Man Image",
    "Loyalty Points !": "Loyalty Points !",
    "Search your desired foods ": "Search your desired foods ",
    "file Upload": "file Upload",
    "Delivery Man Type": "Delivery Man Type",
    Zone: "Zone",
    "Identity Type": "Identity Type",
    "VAT/TEX": "VAT/TEX",
    "Restaurant Address": "Restaurant Address",
    "Restaurant Name": "Restaurant Name",
    "restaurant address required": "restaurant address required",
    "restaurant name required": "restaurant name required",
    "Minimum Delivery Time": "Minimum Delivery Time",
    Logo: "Logo",
    Items: "Items",
    "items for you !": "items for you !",
    "Store for you !": "Store for you !",
    items: "items",
    "Coupon Applied": "Coupon Applied",
    Paid: "Paid",
    Unpaid: "Unpaid",
    "Order Summery": "Order Summery",
    "Your food will be delivered within": "Your food will be delivered within",
    "Back to home": "Back to home",
    "Order Place Failed": "Order Place Failed",
    "Order didn't place successfully.": "Order didn't place successfully.",
    "Are you sure you want to cancel this order?": "Are you sure you want to cancel this order?",
    "Delivery man doesnt assigned": "Delivery man doesnt assigned",
    "Delivery man has not been assigned": "Delivery man has not been assigned",
    "Not Available now": "Not Available now",
    "Available will be": "Available will be",
    "non-veg": "non-veg",
    veg: "veg",
    "Delivering to": "Delivering to",
    Recommended: "Recommended",
    "Switch to cash on delivery": "Switch to cash on delivery",
    "Are you sure you want to switch this order to Cash On Delivery?": "Are you sure you want to switch this order to Cash On Delivery?",
    "Payment Failed": "Payment Failed",
    "My Orders": "My Orders",
    " Change": " Change",
    "Added to favorite successfully.": "Added to favorite successfully.",
    "Removed from  favorite successfully.": "Removed from  favorite successfully.",
    "Something went wrong.": "Something went wrong.",
    Update: " Update",
    "Coupon Copied": "Coupon Copied",
    "Wallet Amount": "Wallet Amount",
    Language: "Language",
    "Identity number Is A Required Field": "Identity number Is A Required Field",
    "Delivery man image is required": "Delivery man image is required",
    "Logged in successfully": "Logged in successfully",
    "Additional Note": "Additional Note",
    "Terms & Conditions": "Terms & Conditions",
    "Privacy Policy": "Privacy Policy",
    "Quick Links": "Quick Links",
    "Contact Us": "Contact Us",
    "About Us": "About Us",
    " Loyalty Points": " Loyalty Points",
    "Only for First Order": "Only for First Order",
    "My account": "My account",
    Delivery: "Delivery",
    "take away": "take away",
    "Please search some keywords.": "Please search some keywords.",
    "Are you sure you want to delete this address?": "Are you sure you want to delete this address?",
    "No food found": "No food found",
    "No restaurant found": "No restaurant found",
    "You cannot order from multiple restaurants in a single order": "You cannot order from multiple restaurants in a single order",
    "You have food from another restaurant in cart. If you continue, your all previous food from cart will be removed": "You have food from another restaurant in cart. If you continue, your all previous food from cart will be removed",
    "Are you sure, you want to reset?": "Are you sure, you want to reset?",
    "Please Choose a delivery address.": "Please Choose a delivery address.",
    "You denied location permission. Please allow browsers location permission from your device, refresh the site and receive more accurate delivery.": "You denied location permission. Please allow browsers location permission from your device, refresh the site and receive more accurate delivery.",
    Variation: "Variation",
    Addon: "Addon",
    "You place the order successfully.": "You place the order successfully.",
    "Your order is placed Successfully. We start our delivery process and you will receive your food soon": "Your order is placed Successfully. We start our delivery process and you will receive your food soon",
    "Congratulations!": "Congratulations!",
    "One or more item is not available for the chosen preferable schedule time.": "One or more item is not available for the chosen preferable schedule time.",
    "Download app to enjoy more!": "Download app to enjoy more!",
    "FIND BEST RESTAURANTS NEAR YOU": "FIND BEST RESTAURANTS NEAR YOU",
    "Pick Locations": "Pick Locations",
    "Best Reviewed Food": "Best Reviewed Food",
    "Need Any help?": "Need Any help?",
    "Communicate with our support team to get proper guidance to your quaternaries.": "Communicate with our support team to get proper guidance to your quaternaries.",
    "VISIT US": "VISIT US",
    "EMAIL US": "EMAIL US",
    "CALL US": "CALL US",
    "write something": "write something",
    "Restaurant Registration": "Restaurant Registration",
    "Logo is required": "Logo is required",
    "Cover photo is required": "Cover photo is required",
    "Please search a location first.": "Please search a location first.",
    "New location has been set.": "New location has been set.",
    "Popular Foods Nearby": "Popular Foods Nearby",
    "Please exchange more than": "Please exchange more than",
    points: "points",
    Popular: "Popular",
    debit: "debit",
    credit: "credit",
    "No Favourite Restaurant Found": "No Favourite Restaurant Found",
    "No Favourite Food Found": "No Favourite Food Found",
    "Delivery man": "Delivery man",
    "Trip Route": "Trip Route",
    away: "away",
    "Order placed at": "Order placed at",
    "Search result for": "Search result for",
    "Enter phone number": "Enter phone number",
    "Free Delivery": "Free Delivery",
    "order refund": "order refund",
    "Please give an amount": "Please give an amount",
    referrer: "referrer",
    "Open Your Own Virtual Restaurant On": "Open Your Own Virtual Restaurant On",
    "Join as delivery man on": "Join as delivery man on",
    "Lets Connect !": "Lets Connect !",
    "Stay upto date with restaurants and foods around you": "Stay upto date with restaurants and foods around you",
    "Best Restaurants Near Your Location": "Best Restaurants Near Your Location",
    "Light Mode": "Light Mode",
    "Dark Mode": "Dark Mode",
    "Food Campaigns": "Food Campaigns",
    "All Restaurants": "All Restaurants",
    History: "History",
    Suggestions: "Suggestions",
    "Days Since Joining": "Days Since Joining",
    "amount in wallet": "amount in wallet",
    Coupons: "Coupons",
    Wallets: "Wallets",
    "Your Address": "Your Address",
    "Loyalty Points": "Loyalty Points",
    "Order placed ": "Order placed ",
    "Restaurant Information's": "Restaurant Information's",
    "Items Price": "Items Price",
    "Addons Price": "Addons Price",
    "Coupon Discount": "Coupon Discount",
    VAT: "VAT",
    "Delivery Fee": "Delivery Fee",
    "Share your opinion": "Share your opinion",
    "Rate the food": "Rate the food",
    Quantity: "Quantity",
    "Rate the deliveryman": "Rate the deliveryman",
    "I agree that placing the order places me under Terms and Conditions & Privacy Policies": "I agree that placing the order places me under Terms and Conditions & Privacy Policies",
    "Delivery Man Tips": "Delivery Man Tips",
    "It Will Add To Your Balance When The Order Is Delivered": "It Will Add To Your Balance When The Order Is Delivered",
    "You Have Earned Point": "You Have Earned Point",
    "Enjoy Off On All Foods": "Enjoy Off On All Foods",
    "Discount Available From": "Discount Available From",
    "Minimum Purchase Value": "Minimum Purchase Value",
    "Max Discount ": "Max Discount ",
    "Search foods in restaurant ": "Search foods in restaurant ",
    "Filter Your Search Results": "Filter Your Search Results",
    "Currently Available Items": "Currently Available Items",
    "Discounted Items": "Discounted Items",
    "Clear All Filter": "Clear All Filter",
    "Give a valid phone number to continue sign-in": "Give a valid phone number to continue sign-in",
    "ascending (A-Z)": "ascending (A-Z)",
    "descending (Z-A)": "descending (Z-A)",
    "Are You Sure You Want To Delete ?": "Are You Sure You Want To Delete ?",
    "Are You Sure You Want To Logout?": "Are You Sure You Want To Logout?",
    "Only for  Restaurant": "Only for  Restaurant",
    "Connect with our social media and other sites to keep up to date": "Connect with our social media and other sites to keep up to date",
    "% off": "% off",
    Register: "Register",
    "Use Current Location": "Use Current Location",
    Profile: "Profile",
    "Personal Info": "Personal Info",
    "Fast Name": "Fast Name",
    "Not Changeable": "Not Changeable",
    "Add New +": "Add New +",
    "Add new address": "Add new address",
    "Convert to currency now": "Convert to currency now",
    "Your loyalty point will convert to currency and transfer to wallet": "Your loyalty point will convert to currency and transfer to wallet",
    point: "point",
    "Your Profile": "Your Profile",
    "No Coupon Found": "No Coupon Found",
    "Search a restaurant": "Search a restaurant",
    "Closed Now": "Closed Now",
    Min: "Min",
    "% off on all foods": "% off on all foods",
    Enjoy: "Enjoy",
    "Discount available from": "Discount available from",
    "Search foods in restaurant": "Search foods in restaurant",
    Off: "Off",
    "Only For": "Only For",
    OFF: "OFF",
    "Days since Joining": "Days since Joining",
    "Amount in Wallet": "Amount in Wallet",
    "Delivery fee": "Delivery fee",
    "You have earned": "You have earned",
    "Minimum purchase value": "Minimum purchase value",
    "Max Discount": "Max Discount",
    "Cart is Empty": "Cart is Empty",
    "in your cart": "in your cart",
    min: "min",
    "Clear All": "Clear All",
    "Total Price": "Total Price",
    "Wallet balance is below total amount": "Wallet balance is below total amount",
    "Selected Address": "Selected Address",
    "Enter Your Coupon..": "Enter Your Coupon..",
    "Order Summary": "Order Summary",
    Total: "Total",
    "Restaurant Informations": "Restaurant Informations",
    "Give a review": "Give a review",
    "Cancel Order": "Cancel Order",
    "Order Confirmed": "Order Confirmed",
    "Preparing Food": "Preparing Food",
    "Food is on the way": "Food is on the way",
    Delivered: "Delivered",
    "Give Review": "Give Review",
    "Are you sure you want to  delete this item?": "Are you sure you want to  delete this item?",
    "Select And Start meaningful conversations!": "Select And Start meaningful conversations!",
    "Leave a message": "Leave a message",
    "Your order is placed Successfully. We start our delivery process and you will receive your food soon.": "Your order is placed Successfully. We start our delivery process and you will receive your food soon.",
    "point.": "point.",
    "It will add to your balance when the order is delivered.": "It will add to your balance when the order is delivered.",
    "You must be login to access this page.": "You must be login to access this page.",
    "You must pick a zone to access this page.": "You must pick a zone to access this page.",
    "Your Email Address": "Your Email Address",
    Join: "Join",
    "Please insert a valid email.": "Please insert a valid email.",
    "You must accept the": "You must accept the",
    "Terms and conditions": "Terms and conditions",
    "Forgot password?": "Forgot password?",
    "Sign Up": "Sign Up",
    "Refer Code (Optional)": "Refer Code (Optional)",
    "Send us mails": "Send us mails",
    "Find us here": "Find us here",
    "My Wallet": "My Wallet",
    "Become a restaurant owner": "Become a restaurant owner",
    "Become a delivery man": "Become a delivery man",
    "Help & Support": "Help & Support",
    "Open your own  virtual restaurant on": "Open your own  virtual restaurant on",
    "Are you sure you want to  logout?": "Are you sure you want to  logout?",
    "Clear Cart": "Clear Cart",
    "Order Now": "Order Now",
    "To select from saved addresses, you need to sign in.": "To select from saved addresses, you need to sign in.",
    "Location is required.": "Location is required.",
    Agree: "Agree",
    Okay: "Okay",
    Close: "Close",
    Favorites: "Favorites",
    "Pick from map": "Pick from map",
    Or: "Or",
    "Delivery Addresses": "Delivery Addresses",
    "VAT/TAX": "VAT/TAX",
    TAX: "TAX",
    "Add-on": "Add-on",
    "Maximum Delivery Time": "Maximum Delivery Time",
    "Cover Photo": "Cover Photo",
    Latitude: "Latitude",
    Longitude: "Longitude",
    "Confirm Password required": "Confirm Password required",
    "last name required": "last name required",
    "phone number required": "phone number required",
    "vat is required": "vat is required",
    "Identity Image": "Identity Image",
    "Password is required": "Password is required",
    Passport: "Passport",
    Nid: "Nid",
    FreeLancer: "FreeLancer",
    Salary: "Salary",
    "Signup successfully.": "Signup successfully.",
    "Please enter your register Mobile Number": "Please enter your register Mobile Number",
    Done: "Done",
    "field is empty": "field is empty",
    Verify: "Verify",
    take_away: "take_away",
    Delete: "Delete",
    Now: "Now",
    Schedule: "Schedule",
    Qty: "Qty",
    order_place: "order_place",
    loyalty_point: "loyalty_point",
    add_fund_by_admin: "add_fund_by_admin",
    point_to_wallet: "point_to_wallet",
    pending: "pending",
    picked_up: "picked_up",
    accepted: "accepted",
    confirmed: "confirmed",
    canceled: "canceled",
    cash_on_delivery: "cash_on_delivery",
    delivered: "delivered",
    // "away":"away"
    Comment: "Comment",
    "You have no channels.": "You have no channels.",
    admin: "admin",
    "delivery man": "delivery man",
    vendor: "vendor",
    "Delete My Account": "Delete My Account",
    "Are you sure you want to delete your account?": "Are you sure you want to delete your account?",
    "Refund Request": "Refund Request",
    "Select an option": "Select an option",
    "Submit Refund Request": "Submit Refund Request",
    Note: "Note",
    "Please select a reason": "Please select a reason",
    "Maximum 3 images can be send at a time.": "Maximum 3 images can be send at a time.",
    "Attach photo": "Attach photo",
    "No saved addresses found to select.": "No saved addresses found to select.",
    "Deliveryman Registration": "Deliveryman Registration",
    foods: "foods",
    House: "House",
    Floor: "Floor",
    "No Data Found": "No Data Found",
    "No location found.": "No location found.",
    "Item updated successfully": "Item updated successfully",
    "Logged out successfully": "Logged out successfully",
    "No title given": "No title given",
    "Best reviewed Foods": "Best reviewed Foods",
    on: "on",
    "Language Changed Successfully.": "Language Changed Successfully.",
    "can not remain without selection.": "can not remain without selection.",
    "Refund Policy": "Refund Policy",
    "Shipping Policy": "Shipping Policy",
    "Cancellation Policy": "Cancellation Policy",
    "This Variation needs to be selected in between minimum": "This Variation needs to be selected in between minimum",
    "and maximum": "and maximum",
    "items.": "items.",
    "Enter the verification code (OTP) sent to": "Enter the verification code (OTP) sent to",
    "Selected variation named": "Selected variation named",
    "must be in between Minimum": "must be in between Minimum",
    "and Maximum": "and Maximum",
    "Add Ons (Optional)": "Add Ons (Optional)",
    "Social Register": "Social Register",
    "Social Login": "Social Login",
    "Continue with facebook": "Continue with facebook",
    "Password can not be updated while you are logged in by using social logins.": "Password can not be updated while you are logged in by using social logins.",
    "Previously added restaurant foods have been removed from cart. Now, try again.": "Previously added restaurant foods have been removed from cart. Now, try again.",
    "Order placement failed": "Order placement failed",
    "Order placed successfully.": "Order placed successfully.",
    referral: "referral",
    Get: "Get",
    "on joining": "on joining",
    "Earn money on every referral": "Earn money on every referral",
    "Refer your code to your friends": "Refer your code to your friends",
    "Tap to copy": "Tap to copy",
    "Your Referral Code": "Your Referral Code",
    "Referral Code": "Referral Code",
    "Referral code Copied": "Referral code Copied",
    "Search suggestions are loading...": "Search suggestions are loading...",
    "Your token has been expired.please sign in again": "Your token has been expired.please sign in again",
    "New On": "New On",
    "Deliveryman tips": "Deliveryman tips",
    "something went wrong.": "something went wrong.",
    "Please wait sometimes": "Please wait sometimes",
    "No Cuisine Restaurant Found": "No Cuisine Restaurant Found",
    "Cuisine Restaurant": "Cuisine Restaurant",
    Cuisines: "Cuisines",
    others: "others",
    office: "office",
    refund_requested: "refund_requested",
    popular_stores: "popular_stores",
    RecommendProduct: "RecommendProduct",
    "Cancel Reason": "Cancel Reason",
    "You can not Order more then 1000৳ on COD order": "You can not Order more then 1000৳ on COD order",
    WishList: "WishList",
    processing: "processing",
    refunded: "refunded",
    "refund requested": "refund requested",
    "refund requested canceled": "refund requested canceled",
    handover: "handover",
    "Explore Now": "Explore Now",
    "Start Exploring!": "Start Exploring!",
    "Select location first to start exploring shops & restaurants near you": "Select location first to start exploring shops & restaurants near you",
    Cart: "Cart",
    Store: "Store",
    We: "We",
    satisfied: "satisfied",
    "some Customer & Restaurant Owners": "some Customer & Restaurant Owners",
    "Become A Seller": "Become A Seller",
    "Register as seller and open shop in 6amMart to start your business": "Register as seller and open shop in 6amMart to start your business",
    "Become A Deliveryman": "Become A Deliveryman",
    "to start your business": "to start your business",
    "Register as seller and open shop in": "Register as seller and open shop in",
    "Register as delivery man and earn money": "Register as delivery man and earn money",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Let’s Start Earning with": "Let’s Start Earning with",
    "Campaign Schedule :": "Campaign Schedule :",
    "Daily time: ": "Daily time: ",
    "Popular Items Nearby": "Popular Items Nearby",
    "Running Campaigns": "Running Campaigns",
    "A store must be selected to continue": "A store must be selected to continue",
    "A module must be selected to continue.": "A module must be selected to continue.",
    "Please enter your registered mobile number": "Please enter your registered mobile number",
    "The total amount of the order, exceeds maximum amount of the cash on delivery method": "The total amount of the order, exceeds maximum amount of the cash on delivery method",
    "Select a type of module for your orders": "Select a type of module for your orders",
    "You have item from another store in cart. If you continue, your all previous item from cart will be removed and this one will be added.": "You have item from another store in cart. If you continue, your all previous item from cart will be removed and this one will be added.",
    "More products need to apply the coupon": "More products need to apply the coupon",
    "Terms And Conditions": "Terms And Conditions",
    "About us": "About us",
    "Cancellation policy": "Cancellation policy",
    "To apply this coupon, total order amount should be minimum": "To apply this coupon, total order amount should be minimum",
    "Point to wallet transfer successfully.": "Point to wallet transfer successfully.",
    "Item Price": "Item Price",
    "Vat/Tax (Included)": "Vat/Tax (Included)",
    Clear: "Clear",
    Included: "Included",
    "Saved Addresses": "Saved Addresses",
    "This variation is out of stock": "This variation is out of stock",
    "Free delivery": "Free delivery",
    "Store is closed. Try again later.": "Store is closed. Try again later.",
    "Restaurant is closed. Try again later.": "Restaurant is closed. Try again later.",
    "I agree that placing the order places me under": "I agree that placing the order places me under",
    "Terms and Conditions": "Terms and Conditions",
    "Join our online marketplace revolution and boost your income.": "Join our online marketplace revolution and boost your income.",
    "Loading...": "Loading...",
    "Language has been changed": "Language has been changed",
    "No module found": "No module found",
    "Contact with the site owner to activate modules.": "Contact with the site owner to activate modules.",
    "Google Play": "Google Play",
    "App Store": "App Store",
    "Seller App": "Seller App",
    "Deliveryman App": "Deliveryman App",
    "We are under maintainance.": "We are under maintainance.",
    "We will be back very soon.": "We will be back very soon.",
    "Organic": "Organic",
    "Theme mode": "Theme mode",
    "What’s Wrong With This Order?": "What’s Wrong With This Order?",
    "Getting Order List...": "Getting Order List...",
    "Add Cutlery": "Add Cutlery",
    "Dont have a cutlery? Restaurant will provide you.": "Dont have a cutlery? Restaurant will provide you.",
    "If Any product is not available": "If Any product is not available",
    "Remove it form my cart": "Remove it form my cart",
    "I will wait until it is restocked": "I will wait until it is restocked",
    "Please cancel the order": "Please cancel the order",
    "Call me ASAP": "Call me ASAP",
    "Notify me when it is back": "Notify me when it is back",
    "Add More Delivery Instruction": "Add More Delivery Instruction",
    "Deliver to the front door": "Deliver to the front door",
    "Deliver to the reception desk": "Deliver to the reception desk",
    "Avoid calling phone": "Avoid calling phone",
    "Come with no sound": "Come with no sound",
    "Cutlery": "Cutlery",
    "Delivery instruction": "Delivery instruction",
    "Unavailable item note": "Unavailable item note",
    "Deny": "Deny",
    "Accept": "Accept",
    "Without any payment method, you can not place the order.": "Without any payment method, you can not place the order.",
    "Subscribe": "Subscribe",
    "Nothing found": "Nothing found",
    "Unit": "Unit",
    "In Stock": "In Stock",
    "Out of Stock": "Out of Stock",
    "Cancelled By": "Cancelled By",
    "Cancellation Reason": "Cancellation Reason",
    "Locate me": "Locate me",
    "Explore": "Explore",
    "Are you sure to change the language?": "Are you sure to change the language?",
    "The browser will refresh to get translated content.": "The browser will refresh to get translated content.",
    "No": "No",
    "We are under maintenance.": "We are under maintenance.",
    "Remove it from my cart": "Remove it from my cart"
};


/***/ }),

/***/ 89333:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22021);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57987);
/* harmony import */ var _en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84029);
/* harmony import */ var _bn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65794);
/* harmony import */ var _ar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16985);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_0__, react_i18next__WEBPACK_IMPORTED_MODULE_1__]);
([i18next__WEBPACK_IMPORTED_MODULE_0__, react_i18next__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: _en__WEBPACK_IMPORTED_MODULE_2__/* .english */ .F
    },
    bn: {
        translation: _bn__WEBPACK_IMPORTED_MODULE_3__/* .bengali */ .S
    },
    ar: {
        translation: _ar__WEBPACK_IMPORTED_MODULE_4__/* .arabic */ .A
    }
};
i18next__WEBPACK_IMPORTED_MODULE_0__["default"].use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next) // passes i18n down to react-i18next
.init({
    resources,
    lng: "en",
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (i18n)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j": () => (/* binding */ createTheme)
});

// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(18442);
;// CONCATENATED MODULE: ./src/theme/base-theme-options.js
const baseThemeOptions = {
    breakpoints: {
        values: {
            xs: 0,
            sm: 750,
            md: 1000,
            lg: 1240,
            xl: 1920
        }
    },
    components: {
        MuiAvatar: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: 0
                }
            }
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true
            },
            styleOverrides: {
                root: {
                    textTransform: "none"
                },
                sizeSmall: {
                    padding: "6px 16px"
                },
                sizeMedium: {
                    padding: "8px 20px"
                },
                sizeLarge: {
                    padding: "11px 24px"
                },
                textSizeSmall: {
                    padding: "7px 12px"
                },
                textSizeMedium: {
                    padding: "9px 16px"
                },
                textSizeLarge: {
                    padding: "12px 16px"
                }
            }
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: "16px 24px"
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: "32px 24px",
                    "&:last-child": {
                        paddingBottom: "32px"
                    }
                }
            }
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: {
                    variant: "h6"
                },
                subheaderTypographyProps: {
                    variant: "body2"
                }
            },
            styleOverrides: {
                root: {
                    padding: "32px 24px"
                }
            }
        },
        MuiCheckbox: {
            defaultProps: {
                color: "primary"
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontWeight: 500
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                "*": {
                    boxSizing: "border-box"
                },
                html: {
                    MozOsxFontSmoothing: "grayscale",
                    WebkitFontSmoothing: "antialiased",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100%",
                    width: "100%"
                },
                body: {
                    display: "flex",
                    flex: "1 1 auto",
                    flexDirection: "column",
                    minHeight: "100%",
                    width: "100%"
                },
                "#__next": {
                    display: "flex",
                    flex: "1 1 auto",
                    flexDirection: "column",
                    height: "100%",
                    width: "100%"
                },
                "#nprogress": {
                    pointerEvents: "none"
                },
                "#nprogress .bar": {
                    backgroundColor: "#5048E5",
                    height: 3,
                    left: 0,
                    position: "fixed",
                    top: 0,
                    width: "100%",
                    zIndex: 2000
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: 8
                },
                sizeSmall: {
                    padding: 4
                }
            }
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    borderRadius: 3,
                    overflow: "hidden"
                }
            }
        },
        MuiLink: {
            defaultProps: {
                underline: "hover"
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    marginRight: "16px",
                    "&.MuiListItemIcon-root": {
                        minWidth: "unset"
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                input: {
                    fontWeight: 500
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none"
                }
            }
        },
        MuiPopover: {
            defaultProps: {
                elevation: 16
            }
        },
        MuiRadio: {
            defaultProps: {
                color: "primary"
            }
        },
        MuiSwitch: {
            defaultProps: {
                color: "primary"
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: 1.71,
                    minWidth: "auto",
                    paddingLeft: 0,
                    paddingRight: 0,
                    textTransform: "none",
                    "& + &": {
                        marginLeft: 24
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding: "15px 16px"
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    borderBottom: "none",
                    "& .MuiTableCell-root": {
                        borderBottom: "none",
                        fontSize: "12px",
                        fontWeight: 600,
                        lineHeight: 1,
                        letterSpacing: 0.5,
                        textTransform: "uppercase"
                    },
                    "& .MuiTableCell-paddingCheckbox": {
                        paddingTop: 4,
                        paddingBottom: 4
                    }
                }
            }
        }
    },
    direction: "ltr",
    shape: {
        borderRadius: 8
    },
    typography: {
        button: {
            fontWeight: 600
        },
        fontFamily: '"Rubik","sans-serif"',
        //this is default font size for typography
        body1: {
            fontSize: "0.875rem",
            fontWeight: 400,
            lineHeight: 1.5
        },
        body2: {
            fontSize: "0.75rem",
            fontWeight: 400,
            lineHeight: "11.85px"
        },
        body3: {
            fontSize: "0.625rem",
            fontWeight: 400,
            lineHeight: "11.85px"
        },
        body4: {
            fontSize: "0.5rem",
            fontWeight: 400,
            lineHeight: "17px"
        },
        subtitle1: {
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: "18.96px"
        },
        subtitle2: {
            fontSize: "0.875rem",
            fontWeight: 500,
            lineHeight: "20px"
        },
        overline: {
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.5px",
            lineHeight: 2.5,
            textTransform: "uppercase"
        },
        caption: {
            fontSize: "0.75rem",
            fontWeight: 400,
            lineHeight: 1.66
        },
        h1: {
            fontWeight: 700,
            fontSize: "3.5rem",
            lineHeight: 1.375
        },
        h2: {
            fontWeight: 700,
            fontSize: "3rem",
            lineHeight: 1.375
        },
        h3: {
            fontWeight: 700,
            fontSize: "2.25rem",
            lineHeight: 1.375
        },
        h4: {
            fontWeight: 700,
            fontSize: "2rem",
            lineHeight: 1.375
        },
        h5: {
            fontWeight: 600,
            fontSize: "1.5rem",
            lineHeight: 1.375
        },
        h6: {
            fontWeight: 600,
            fontSize: "1.25rem",
            lineHeight: 1.375
        },
        h7: {
            fontWeight: 600,
            fontSize: "1rem",
            lineHeight: 1.375
        },
        h8: {
            fontWeight: 600,
            fontSize: "0.75rem",
            lineHeight: 1.375
        }
    },
    zIndex: {
        appBar: 1200,
        drawer: 1100
    }
};

;// CONCATENATED MODULE: ./src/theme/dark-theme-options.js
// Colors
const neutral = {
    100: "#000000",
    200: "#303032",
    300: "#323232",
    400: "#9CA3AF",
    500: "#c5c5ca",
    600: "#f0f0fa",
    700: "#f0f2f4",
    800: "#1F2937",
    900: "#111827",
    1000: "#F3F4F6",
    1100: "#D6D6D6"
};
const background = {
    default: "#0B0F19",
    paper: neutral[900],
    custom: "#282829",
    custom2: "#1F2937",
    custom3: neutral[800]
};
const horizontalCardBG = neutral[900];
const divider = "#2D3748";
const foodCardColor = neutral[800];
const primary = {
    main: "#039D55",
    light: "#909BEF",
    dark: "#1c6641",
    contrastText: neutral[900],
    semiLight: "#E4FFF3",
    overLay: "#000000",
    customType2: "#3BB77E",
    lite: "rgba(3, 157, 85, 0.1)"
};
const secondary = {
    main: "#10B981",
    light: "#3FC79A",
    dark: "#0B815A",
    contrastText: neutral[900]
};
const success = {
    main: "#14B8A6",
    light: "#43C6B7",
    dark: "#0E8074",
    contrastText: neutral[900]
};
const info = {
    main: "#2196F3",
    light: "#64B6F7",
    dark: "#0B79D0",
    lite: "#DBF5FF",
    contrastText: neutral[900]
};
const warning = {
    main: "#FFB020",
    light: "#FFBF4C",
    dark: "#B27B16",
    lite: "#FFBD8B",
    contrastText: neutral[900]
};
const error = {
    main: "#D14343",
    light: "#DA6868",
    dark: "#922E2E",
    contrastText: neutral[900]
};
const dark_theme_options_text = {
    primary: "#e8eaec",
    secondary: "#A0AEC0",
    disabled: "rgba(255, 255, 255, 0.48)",
    custom: "#ede8e8",
    customText1: "#EDF2F7"
};
const footer = {
    inputButton: "#BBFFDF",
    inputButtonHover: "#67907e",
    bottom: "rgba(0, 98, 52, 0.3)",
    appDownloadButtonBg: "#1A1A1A",
    appDownloadButtonBgGray: "#3E594D"
};
const customColor = {
    textGray: "#9c9c9c",
    textGrayDeep: "#787676",
    buyButton: "#006371"
};
const whiteContainer = {
    main: "#ffffff"
};
const pink = {
    main: "#FF6D76"
};
const paperBoxShadow = "#E5EAF1";
const darkThemeOptions = {
    components: {
        MuiAvatar: {
            styleOverrides: {
                root: {
                    backgroundColor: neutral[500],
                    color: "#FFFFFF"
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    "&.MuiChip-filledDefault": {
                        backgroundColor: neutral[800],
                        "& .MuiChip-deleteIcon": {
                            color: neutral[500]
                        }
                    },
                    "&.MuiChip-outlinedDefault": {
                        borderColor: neutral[700],
                        "& .MuiChip-deleteIcon": {
                            color: neutral[700]
                        }
                    }
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    "&::placeholder": {
                        opacity: 1,
                        color: dark_theme_options_text.secondary
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: divider
                },
                input: {
                    "&:-webkit-autofill": {
                        "-webkit-box-shadow": "0 0 0 100px #282929 inset",
                        "-webkit-text-fill-color": "#fff"
                    }
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    borderColor: divider,
                    borderStyle: "solid",
                    borderWidth: 1
                }
            }
        },
        MuiPopover: {
            styleOverrides: {
                paper: {
                    borderColor: divider,
                    borderStyle: "solid",
                    borderWidth: 1
                }
            }
        },
        MuiSwitch: {
            styleOverrides: {
                switchBase: {
                    color: neutral[100]
                },
                track: {
                    backgroundColor: neutral[500],
                    opacity: 1
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: `1px solid ${divider}`
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: neutral[800],
                    ".MuiTableCell-root": {
                        color: neutral[300]
                    }
                }
            }
        }
    },
    palette: {
        action: {
            active: neutral[400],
            hover: "rgba(255, 255, 255, 0.04)",
            selected: "rgba(255, 255, 255, 0.08)",
            disabledBackground: "rgba(255, 255, 255, 0.12)",
            disabled: "rgba(255, 255, 255, 0.26)"
        },
        horizontalCardBG,
        background,
        divider,
        error,
        info,
        mode: "dark",
        neutral,
        primary,
        secondary,
        success,
        text: dark_theme_options_text,
        warning,
        footer,
        customColor,
        whiteContainer,
        pink,
        paperBoxShadow,
        foodCardColor
    },
    shadows: [
        "none",
        "0px 1px 2px rgba(0, 0, 0, 0.24)",
        "0px 1px 2px rgba(0, 0, 0, 0.24)",
        "0px 1px 4px rgba(0, 0, 0, 0.24)",
        "0px 1px 5px rgba(0, 0, 0, 0.24)",
        "0px 1px 6px rgba(0, 0, 0, 0.24)",
        "0px 2px 6px rgba(0, 0, 0, 0.24)",
        "0px 3px 6px rgba(0, 0, 0, 0.24)",
        "0px 4px 6px rgba(0, 0, 0, 0.24)",
        "0px 5px 12px rgba(0, 0, 0, 0.24)",
        "0px 5px 14px rgba(0, 0, 0, 0.24)",
        "0px 5px 15px rgba(0, 0, 0, 0.24)",
        "0px 6px 15px rgba(0, 0, 0, 0.24)",
        "0px 7px 15px rgba(0, 0, 0, 0.24)",
        "0px 8px 15px rgba(0, 0, 0, 0.24)",
        "0px 9px 15px rgba(0, 0, 0, 0.24)",
        "0px 10px 15px rgba(0, 0, 0, 0.24)",
        "0px 12px 22px -8px rgba(0, 0, 0, 0.24)",
        "0px 13px 22px -8px rgba(0, 0, 0, 0.24)",
        "0px 14px 24px -8px rgba(0, 0, 0, 0.24)",
        "0px 20px 25px rgba(0, 0, 0, 0.24)",
        "0px 25px 50px rgba(0, 0, 0, 0.24)",
        "0px 25px 50px rgba(0, 0, 0, 0.24)",
        "0px 25px 50px rgba(0, 0, 0, 0.24)",
        "0px 25px 50px rgba(0, 0, 0, 0.24)"
    ]
};

;// CONCATENATED MODULE: ./src/theme/light-theme-options.js
// Colors
const light_theme_options_neutral = {
    100: "#FFFFFF",
    200: "#E5E7EB",
    300: "#F6F7FB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
    1000: "#000000",
    1100: "#D6D6D6"
};
const light_theme_options_background = {
    default: "#F9FAFC",
    paper: "#FFFFFF",
    custom: "#f1f2f5",
    custom2: "#FFFFFF",
    custom3: "#F6F7FB"
};
const light_theme_options_divider = "#E6E8F0";
const light_theme_options_primary = {
    main: "#039D55",
    deep: "#288258",
    light: "#55e8a0",
    dark: "#1c6641",
    semiLight: "#E4FFF3",
    contrastText: "#FFFFFF",
    customType1: "#0DCB72",
    customType2: "#3BB77E",
    overLay: "#000000",
    lite: "rgba(3, 157, 85, 0.1)"
};
const light_theme_options_horizontalCardBG = "#E4FFF3";
const light_theme_options_secondary = {
    main: "#10B981",
    light: "#3FC79A",
    dark: "#0B815A",
    contrastText: "#FFFFFF"
};
const light_theme_options_success = {
    main: "#14B8A6",
    light: "#43C6B7",
    dark: "#0E8074",
    contrastText: "#FFFFFF"
};
const light_theme_options_info = {
    main: "#2196F3",
    light: "#64B6F7",
    dark: "#0B79D0",
    lite: "#DBF5FF",
    contrastText: "#FFFFFF"
};
const light_theme_options_warning = {
    main: "#FFB020",
    light: "#FFF8D5",
    lite: "#FFBD8B",
    dark: "#FE961C",
    contrastText: "#FFFFFF"
};
const light_theme_options_error = {
    main: "#D14343",
    light: "#DA6868",
    dark: "#922E2E",
    contrastText: "#FFFFFF"
};
const light_theme_options_text = {
    primary: "#3E594D",
    secondary: "#93A2AE",
    disabled: "rgba(55, 65, 81, 0.48)",
    custom: "#3F3F3F",
    customText1: "#4B5563"
};
const light_theme_options_footer = {
    inputButton: "#BBFFDF",
    inputButtonHover: "#6dcfa6",
    bottom: "rgba(0, 98, 52, 0.3)",
    appDownloadButtonBg: "#1A1A1A",
    appDownloadButtonBgGray: "#3E594D",
    appDownloadButtonBgHover: "#4f4f4f"
};
const light_theme_options_customColor = {
    textGray: "#9c9c9c",
    textGrayDeep: "#787676",
    buyButton: "#006371"
};
const light_theme_options_whiteContainer = {
    main: "#ffffff"
};
const light_theme_options_pink = {
    main: "#FF6D76"
};
const light_theme_options_foodCardColor = "#FFF6EF";
const light_theme_options_paperBoxShadow = "#E5EAF1";
const lightThemeOptions = {
    components: {
        MuiAvatar: {
            styleOverrides: {
                root: {
                    backgroundColor: light_theme_options_neutral[500],
                    color: "#FFFFFF"
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    "&.MuiChip-filledDefault": {
                        backgroundColor: light_theme_options_neutral[200],
                        "& .MuiChip-deleteIcon": {
                            color: light_theme_options_neutral[400]
                        }
                    },
                    "&.MuiChip-outlinedDefault": {
                        "& .MuiChip-deleteIcon": {
                            color: light_theme_options_neutral[300]
                        }
                    }
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    "&::placeholder": {
                        opacity: 1,
                        color: light_theme_options_text.secondary
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: light_theme_options_divider
                },
                input: {
                    "&:-webkit-autofill": {
                        "-webkit-box-shadow": "0 0 0 100px #f0f5f5 inset",
                        "-webkit-text-fill-color": "#000"
                    }
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    borderColor: light_theme_options_divider,
                    borderStyle: "solid",
                    borderWidth: 1
                }
            }
        },
        MuiPopover: {
            styleOverrides: {
                paper: {
                    borderColor: light_theme_options_divider,
                    borderStyle: "solid",
                    borderWidth: 1
                }
            }
        },
        MuiSwitch: {
            styleOverrides: {
                switchBase: {
                    color: light_theme_options_neutral[500]
                },
                track: {
                    backgroundColor: light_theme_options_neutral[400],
                    opacity: 1
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: `1px solid ${light_theme_options_divider}`
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: light_theme_options_neutral[100],
                    ".MuiTableCell-root": {
                        color: light_theme_options_neutral[700]
                    }
                }
            }
        }
    },
    palette: {
        action: {
            active: light_theme_options_neutral[500],
            focus: "rgba(55, 65, 81, 0.12)",
            hover: "rgba(55, 65, 81, 0.04)",
            selected: "rgba(55, 65, 81, 0.08)",
            disabledBackground: "rgba(55, 65, 81, 0.12)",
            disabled: "rgba(55, 65, 81, 0.26)"
        },
        horizontalCardBG: light_theme_options_horizontalCardBG,
        background: light_theme_options_background,
        divider: light_theme_options_divider,
        error: light_theme_options_error,
        info: light_theme_options_info,
        mode: "light",
        neutral: light_theme_options_neutral,
        primary: light_theme_options_primary,
        secondary: light_theme_options_secondary,
        success: light_theme_options_success,
        text: light_theme_options_text,
        warning: light_theme_options_warning,
        footer: light_theme_options_footer,
        customColor: light_theme_options_customColor,
        whiteContainer: light_theme_options_whiteContainer,
        pink: light_theme_options_pink,
        paperBoxShadow: light_theme_options_paperBoxShadow,
        foodCardColor: light_theme_options_foodCardColor
    },
    shadows: [
        "none",
        "0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)",
        "0px 1px 2px rgba(100, 116, 139, 0.12)",
        "0px 1px 4px rgba(100, 116, 139, 0.12)",
        "0px 1px 5px rgba(100, 116, 139, 0.12)",
        "0px 1px 6px rgba(100, 116, 139, 0.12)",
        "0px 2px 6px rgba(100, 116, 139, 0.12)",
        "0px 3px 6px rgba(100, 116, 139, 0.12)",
        "0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)",
        "0px 5px 12px rgba(100, 116, 139, 0.12)",
        "0px 5px 14px rgba(100, 116, 139, 0.12)",
        "0px 5px 15px rgba(100, 116, 139, 0.12)",
        "0px 6px 15px rgba(100, 116, 139, 0.12)",
        "0px 7px 15px rgba(100, 116, 139, 0.12)",
        "0px 8px 15px rgba(100, 116, 139, 0.12)",
        "0px 9px 15px rgba(100, 116, 139, 0.12)",
        "0px 10px 15px rgba(100, 116, 139, 0.12)",
        "0px 12px 22px -8px rgba(100, 116, 139, 0.25)",
        "0px 13px 22px -8px rgba(100, 116, 139, 0.25)",
        "0px 14px 24px -8px rgba(100, 116, 139, 0.25)",
        "0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)",
        "0px 25px 50px rgba(100, 116, 139, 0.25)",
        "0px 25px 50px rgba(100, 116, 139, 0.25)",
        "0px 25px 50px rgba(100, 116, 139, 0.25)",
        "0px 25px 50px rgba(100, 116, 139, 0.25)"
    ]
};

;// CONCATENATED MODULE: ./src/theme/index.js




const createTheme = (config)=>{
    let theme = (0,styles_.createTheme)(baseThemeOptions, config.mode === "dark" ? darkThemeOptions : lightThemeOptions, {
        direction: config.direction
    });
    if (config.responsiveFontSizes) {
        theme = (0,styles_.responsiveFontSizes)(theme);
    }
    return theme;
};


/***/ }),

/***/ 58784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createEmotionCache)
/* harmony export */ });
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71913);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);

const isBrowser = typeof document !== "undefined";
// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// This assures that Material UI styles are loaded first.
// It allows developers to easily override Material UI styles with other styling solutions, like CSS modules.
function createEmotionCache() {
    let insertionPoint;
    if (isBrowser) {
        const emotionInsertionPoint = document.querySelector('meta[name="emotion-insertion-point"]');
        insertionPoint = emotionInsertionPoint ?? undefined;
    }
    return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({
        key: "mui-style",
        insertionPoint
    });
}


/***/ }),

/***/ 30108:
/***/ (() => {



/***/ }),

/***/ 35525:
/***/ (() => {



/***/ }),

/***/ 71913:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/cache");

/***/ }),

/***/ 72805:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ 94960:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ 18442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 75184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 46517:
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ 32245:
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ 40968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 30808:
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ 580:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 61175:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ 65918:
/***/ ((module) => {

"use strict";
module.exports = require("react-query/devtools");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 14161:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ 98936:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ 22021:
/***/ ((module) => {

"use strict";
module.exports = import("i18next");;

/***/ }),

/***/ 86201:
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ }),

/***/ 57987:
/***/ ((module) => {

"use strict";
module.exports = import("react-i18next");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7113], () => (__webpack_exec__(38484)));
module.exports = __webpack_exports__;

})();
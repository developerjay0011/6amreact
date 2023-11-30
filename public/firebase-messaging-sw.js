importScripts(
    "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
    "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
// // Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyCY3WbioX86LX2_nxamO-Wrt-62-GXqWMA",
    authDomain: "gozoz-366b4.firebaseapp.com",
    projectId: "gozoz-366b4",
    storageBucket: "gozoz-366b4.appspot.com",
    messagingSenderId: "436179974467",
    appId: "1:436179974467:web:eec622a489d3ec179617f6",
    measurementId: "G-GMTML8YLCP"
};

firebase?.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase?.messaging();

messaging.onBackgroundMessage(function (payload) {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

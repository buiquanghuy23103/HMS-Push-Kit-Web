//Used to register service work, this file can be empty
importScripts('https://push-static.dbankcdn.com/hms-messaging.js');
// Your web app's  configuration
var hmsConfig = {
  apiKey: "PhxID5RKlRmvogA_MGFTMVqBUgOY7dC9kLq1OcYP",
  appId: "101826641"
};

// Initialize hmsConfig
hms.initializeApp(hmsConfig);
const messaging = hms.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
  console.log('[hms-messaging-sw1.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/hms-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
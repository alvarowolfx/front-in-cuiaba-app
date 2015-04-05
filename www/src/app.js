/*
* Hack to make swipe to go back work on browser
*/
window.cordova = {
    yup: true
};
ionic.Platform.isReady = true;

angular.module('app', ['ionic',
    'app.about',
    'app.agenda',
    'app.detail',
    'app.speakers',
    'app.config'
]);

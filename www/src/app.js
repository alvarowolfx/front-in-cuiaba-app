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
])

.filter('seeMore', function() {
    return function(input) {
        if (typeof input === 'undefined') return '';
        if (input.length > 150) {
            return input.substring(0, 150) + ' ... (ver detalhes)';
        } else {
            return input;
        }
    }
})

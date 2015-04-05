angular
    .module('app')
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

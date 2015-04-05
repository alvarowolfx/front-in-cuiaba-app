angular.module('app')
    .service('Speaker', Speaker);

Speaker.$inject = ['$http', '$q'];

function Speaker($http, $q) {

    var service = {
        getAll: getAll,
        getByTwitter: getByTwitter
    }

    return service;

    function getAll() {
        var defer = $q.defer();
        $http.get('data/speakers.json').then(function(response) {
            defer.resolve(response.data);
        }, function(error) {
            defer.reject('Failed to get Speaker data');
        });
        return defer.promise;
    }

    function getByTwitter(twitter) {
        var defer = $q.defer();
        this.getAll().then(function(speakers) {
            for (var i in speakers) {
                if (speakers[i].twitter === twitter) {
                    defer.resolve(speakers[i]);
                    return;
                }
            }
            defer.reject('Speaker with twitter ' + twitter + ' not found');
        });
        return defer.promise;
    }

};

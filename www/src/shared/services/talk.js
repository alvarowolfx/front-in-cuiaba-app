angular
    .module('app')
    .service("Talk", Talk);

Talk.$inject = ['$http', '$q'];

function Talk($http, $q) {

    var service = {
        getAll: getAll,
        getByTwitter: getByTwitter
    }

    return service;

    function getAll() {
        var defer = $q.defer();
        $http.get('data/talks.json').then(function(response) {
            defer.resolve(response.data);
        }, function(error) {
            defer.reject('Failed to get Talks data');
        });
        return defer.promise;
    }

    function getByTwitter(person) {
        var defer = $q.defer();
        this.getAll().then(function(talks) {
            for (var i in talks) {
                if (talks[i].isTalk && talks[i].person === person) {
                    defer.resolve(talks[i]);
                    return;
                }
            }
            defer.reject('Talks from person with twitter ' + twitter + ' not found');
        })
        return defer.promise;
    }

};

angular
    .module('app.config', [])
    .config(Config);

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

function Config($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('tabs', {
            url: "/tab",
            abstract: true,
            templateUrl: "src/shared/templates/tabs.html"
        })
        .state('tabs.speakers', {
            url: "/speakers",
            views: {
                'speakers-tab': {
                    templateUrl: "src/speakers/speakers.html",
                    controller: 'SpeakersTabController as vm'
                }
            }
        })
        .state('tabs.agenda', {
            url: "/agenda",
            views: {
                'agenda-tab': {
                    templateUrl: "src/agenda/agenda.html",
                    controller: 'AgendaTabController as vm'
                }
            }
        })

    .state('tabs.about', {
        url: "/about",
        views: {
            'about-tab': {
                templateUrl: "src/about/about.html",
                controller: 'AboutTabController as vm'
            }
        }
    });

    angular.forEach(['speakers', 'agenda'], function(view, key) {
        var views = {};
        views[view + '-tab'] = {
            templateUrl: "src/detail/detail.html",
            controller: 'DetailTabController as vm'
        };
        $stateProvider.state('tabs.detail-' + view, {
            url: '/detail/:id',
            views: views
        });
    });

    $urlRouterProvider.otherwise("/tab/speakers");

};

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

angular
	.module('app.about.controller',[])
	.controller('AboutTabController',AboutTabController);

function AboutTabController() {
	var vm = this;
}

angular.module('app.about',['app.about.controller']);

angular
    .module('app.agenda.controller', [])
    .controller('AgendaTabController', AgendaTabController);

AgendaTabController.$inject = ['Talk'];

function AgendaTabController(Talk) {
    var vm = this;
    Talk.getAll().then(function(talks) {
        vm.talks = talks;
    });
}

angular
    .module('app.agenda', ['app.agenda.controller'])

angular
    .module('app.detail.controller', [])
    .controller('DetailTabController', DetailTabController);

DetailTabController.$inject = ['$state', 'Talk', 'Speaker'];

function DetailTabController($state, Talk, Speaker) {
    var vm = this;

    var identifier = $state.params.id;
    Talk.getByTwitter(identifier).then(function(talk) {
        vm.talk = talk;
    });

    Speaker.getByTwitter(identifier).then(function(speaker) {
        vm.speaker = speaker;
    });
}

angular
    .module('app.detail', ['app.detail.controller'])

angular
    .module('app.speakers.controller', [])
    .controller('SpeakersTabController', SpeakersTabController);

SpeakersTabController.$inject = ['Speaker'];

function SpeakersTabController(Speaker) {
    var vm = this;
    Speaker.getAll().then(function(speakers) {
        vm.speakers = speakers;
    });
}

angular
    .module('app.speakers', ['app.speakers.controller'])

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

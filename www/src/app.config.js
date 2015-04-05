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

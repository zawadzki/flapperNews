(function() {
    'use strict';

    angular
        .module('flapperNews.homepage')
        .config(configFunction);

    configFunction.$inject = ['$routeProvider', '$locationProvider'];

    function configFunction($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl:  'homepage/homepage.html',
            controller:   'HomepageCtrl',
            controllerAs: 'vm'
        });

        $locationProvider.html5Mode(true);
    }

})();
(function() {
    'use strict';

    angular
        .module('flapperNews.homepage')
        .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider.when('/', {
            templateUrl:  'js/homepage/homepage.html',
            controller:   'HomepageCtrl',
            controllerAs: 'vm'
        });
    }

})();
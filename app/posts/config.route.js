(function() {
    'use strict';

    angular
        .module('flapperNews.posts')
        .config(configFunction);

    configFunction.$inject = ['$routeProvider', '$locationProvider'];

    function configFunction($routeProvider, $locationProvider) {
        $routeProvider.when('/posts/:id', {
            templateUrl:  'posts/posts.html',
            controller:   'PostsCtrl',
            controllerAs: 'vm'
        });

		$locationProvider.html5Mode(true);
    }

})();
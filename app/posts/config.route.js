(function() {
    'use strict';

    angular
        .module('flapperNews.posts')
        .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider.when('/posts/:id', {
            templateUrl:  'posts/posts.html',
            controller:   'PostsCtrl',
            controllerAs: 'vm'
        });
    }

})();
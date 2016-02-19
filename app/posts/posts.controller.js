(function() {
	'use strict';

	angular
		.module('flapperNews.posts')
		.controller('PostsCtrl', PostsCtrl);

	PostsCtrl.$inject = ['$routeParams', 'posts'];

	function PostsCtrl($routeParams, posts) {
		var vm = this;
		vm.post = posts.posts[$routeParams.id];
	}

})();

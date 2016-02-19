(function() {
	'use strict';

	angular
		.module('flapperNews.posts')
		.controller('PostsCtrl', PostsCtrl);

	PostsCtrl.$inject = ['$routeParams'];

	function PostsCtrl($routeParams, posts) {
		var vm = this;

		$log.info($routeParams.type, $routeParams.id);

		vm.posts.push({
			title: 'TEST',
			link: 'TEST',
			upvotes: 0,
			comments: [
				{ author: 'Joe', body: 'Cool post!', upvotes: 0 },
				{ author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0 }
			]
		});

		vm.post = posts.posts[$routeParams.id];
	}

})();

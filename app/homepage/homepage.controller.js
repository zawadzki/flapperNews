(function() {
	'use strict';

	angular
		.module('flapperNews.homepage')
		.controller('HomepageCtrl', ['posts', HomepageCtrl]);

	function HomepageCtrl(posts) {
		var vm = this;

		function Post() {
			this.title 	 = '';
			this.link 	 = '';
			this.desc  	 = '';
			this.upvotes = 0;
		}

		vm.newPost = new Post();
		vm.posts = posts.posts;
		vm.addPost = addPost;

		function addPost() {
			if( vm.newPost.title === '' ) { return; }
			vm.posts.push(vm.newPost);
			vm.newPost = new Post();
		}

		//Upvotes handler
		vm.incrementUpvotes = incrementUpvotes;

		function incrementUpvotes(post) {
			post.upvotes += 1;
		}
	}

})();

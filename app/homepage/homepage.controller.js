(function() {
	'use strict';

	angular
		.module('flapperNews.homepage')
		.controller('HomepageCtrl', HomepageCtrl);

	HomepageCtrl.$inject = ['posts'];

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
		vm.upVote = upVote;
		vm.downVote = downVote;

		function upVote(post) {
            post.upvotes ++;
            post.class = 'upvoted';
		}

        function downVote(post) {
            post.upvotes--;
            post.class = 'downvoted';
        }
	}

})();

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
		vm.posts = [
			{title: 'Title One', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi expedita facilis nesciunt rem rerum unde, velit veniam voluptas voluptates.', upvotes: 5},
			{title: 'Title Two', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi expedita facilis nesciunt rem rerum unde, velit veniam voluptas voluptates.', upvotes: 2},
			{title: 'Title Three', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi expedita facilis nesciunt rem rerum unde, velit veniam voluptas voluptates.', upvotes: 15},
			{title: 'Title Four', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi expedita facilis nesciunt rem rerum unde, velit veniam voluptas voluptates.', upvotes: 9},
			{title: 'Title Five', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi expedita facilis nesciunt rem rerum unde, velit veniam voluptas voluptates.', upvotes: 4}
		];
		//vm.posts = posts.posts;
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
			post.upvotes += 1;
            post.class = 'upvoted';
		}

        function downVote(post) {
            post.upvotes -= 1;
            post.class = 'downvoted';
        }
	}

})();

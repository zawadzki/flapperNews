(function() {
	'use strict';

	angular
		.module('flapperNews.homepage')
		.controller('HomepageCtrl', HomepageCtrl);

	HomepageCtrl.$inject = ['posts', 'aside'];

	function HomepageCtrl(posts, aside) {
		var vm = this;

        //Adding post handler
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

		//Votes handler
		vm.upVote = upVote;

		function upVote(post) {
            post.upvotes ++;
            post.class = 'upvoted';
		}

        vm.downVote = downVote;

        function downVote(post) {
            post.upvotes --;
            post.class = 'downvoted';
        }

        //Trigger sticky aside
        (function() {
            var el = document.getElementsByTagName('aside');
            var className = 'sticked';

            aside.sticky(el, className);
        })();

	}

})();

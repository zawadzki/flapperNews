(function() {
	'use strict';

	angular
		.module('flapperNews.homepage')
		.controller('HomepageCtrl', HomepageCtrl);

	HomepageCtrl.$inject = ['posts', 'aside', 'vote'];

	function HomepageCtrl(posts, aside, vote) {
		var vm = this;

        //Adding post handler
		function Post() {
			this.id 	  = posts.posts.length;
			this.title 	  = '';
			this.link 	  = '';
			this.desc  	  = '';
			this.upvotes  = 0;
			this.date 	  = moment(new Date());
			this.comments = [];
		}

		vm.newPost = new Post();
		vm.posts = posts.posts;
		vm.addPost = addPost;

		function addPost() {
			if( vm.newPost.title === '' ) { return; }
			vm.posts.push(vm.newPost);
			vm.newPost = new Post();
		}

		//Voting handler
		vm.upvote = upvote;
		function upvote(post) {
			vote.up(post)
		}

		vm.downvote = downvote;
		function downvote(post) {
			vote.down(post)
		}

        //Trigger sticky aside
        (function() {
            var el = document.getElementsByTagName('aside');
            var className = 'sticked';

            aside.sticky(el, className);
        })();

	}

})();

(function() {
	'use strict';

	angular
		.module('flapperNews.posts')
		.controller('PostsCtrl', PostsCtrl);

	PostsCtrl.$inject = ['$routeParams', 'posts', 'vote'];

	function PostsCtrl($routeParams, posts, vote) {
		var vm = this;

        vm.post = posts.posts[$routeParams.id];

        //Adding comment handler
        function Comment() {
            this.body  = '';
			this.author = '';
            this.likes = 0;
			this.liked = false;
        }

        vm.newComment = new Comment();
        vm.comments = vm.post.comments;
        vm.addComment = addComment;

        function addComment() {
			if( vm.newComment.body === '' ) { return; }
            vm.comments.push(vm.newComment);
            vm.newComment = new Comment();
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

		vm.likeIt = likeIt;
		function likeIt(comment) {
			if( comment.liked === false ) {
				comment.likes ++;
				comment.class = 'liked';
				comment.liked = true;
			}
		}
	}

})();

(function() {
	'use strict';

	angular
		.module('flapperNews.posts')
		.controller('PostsCtrl', PostsCtrl);

	PostsCtrl.$inject = ['$routeParams', 'aside', 'posts', 'vote'];

	function PostsCtrl($routeParams, aside, posts, vote) {
		var vm = this;

		vm.posts = posts.posts;

        vm.post = posts.posts[$routeParams.id];

        //Adding comment handler
        function Comment() {
            this.body  = '';
			this.author = '';
			this.date = moment(new Date());
			this.upvotes = 0;
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

		//Trigger sticky aside
		(function() {
			var el = document.getElementsByTagName('aside');
			var className = 'sticked';

			aside.sticky(el, className);
		})();

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
				comment.classLike = 'liked';
				comment.liked = true;
			} else {
				comment.likes --;
				comment.classLike = '';
				comment.liked = false;
			}
		}

		//Popularity Filter
		vm.popularityFilter = function (post) {
			return ( post.upvotes > 10 && post.link != '' && post.id != vm.post.id );
		}
	}

})();

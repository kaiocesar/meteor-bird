// ./client/lib/helpers/timeline.js

Template.timeline.helpers({
	posts : function() {
		return Post.find({});
	}
});
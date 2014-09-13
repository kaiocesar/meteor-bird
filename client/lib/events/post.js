// ./client/lib/events/post.js

Template.post.events({
	"submit form" : function(e, template){
		e.preventDefault();
		var textarea = template.find('textarea');
		var posts    = Session.get('posts') || [];
		Post.insert({message: textarea.value});
		//posts.push({message: textarea.value});
		//Session.set("posts", posts);
		textarea.value = "";
	}
});
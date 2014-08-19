import Ember from "ember";

var TelegramPostComponent = Ember.Component.extend({
  tagName: 'article',
  myPost: function() {
    return this.get('post.author.id') === this.get('session.user.id');
  }.property('post.author.id', 'session.user.id'),
  actions: {
  	delete: function(post) {
      post.deleteRecord();
      post.save();
  	}
  }
});

export default TelegramPostComponent;
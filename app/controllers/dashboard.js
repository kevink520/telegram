import Ember from "ember";

var DashboardController = Ember.ArrayController.extend({
  sessionId: function() {
    return this.get('session.user.id');
  }.property('session.user.id'),
  sessionName: function() {
    return this.get('session.user.name');
  }.property('session.user.name'),
  newPostBody: '',
  characterCount: function() {
    return 140 - this.get('newPostBody.length');
  }.property('newPostBody.length'),
  warning: function() {
    return this.get('characterCount') < 0 ? true : false;
  }.property('characterCount'),
  inflection: function() {
    return Math.abs(this.get('characterCount')) === 1 ? '' : 's';
  }.property('characterCount'),
  errorMessage: function(key, value) {		
    if (arguments.length === 2) {
      return value;
    }
  }.property('characterCount'),
  actions: {
    publish: function() {
      var controller = this;
      var sessionId = this.get('sessionId');
      var newPostBody = this.get('newPostBody'); 
      if (!newPostBody) {
        return false;
      }
      if (!newPostBody.trim()) {
        return;
      }
      if (this.get('warning')) {
        this.set('errorMessage', 'Oops! Your post was over the 140 characters limit. Try making your post shorter and publishing it again.');
        return;
      }
      var post = this.store.createRecord('post', {
        body: newPostBody,
        createdDate: new Date().toISOString()
      });
      this.store.find('user', sessionId).then(function(user) {
        post.set('author', user);
        post.save();
        controller.set('newPostBody', '');
      });
    }
  },
  sortProperties: ['createdDate'],
  sortAscending: false
});

export default DashboardController;
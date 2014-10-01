import Ember from "ember";

var DashboardController = Ember.ArrayController.extend({
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

  /*index: function() {
    return (+(this.get('content').sortBy('id').get('lastObject').get('id')) + 1).toString();
  }.property('content.@each'),*/
  
  actions: {

    publish: function() {
      var user = this.get('session').get('user');
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
        author: user,
        body: newPostBody,
        createdDate: new Date().toISOString()
      });

      console.log(post);
      
      post.save();
      this.set('newPostBody', '');
    }

  },
  
  sortProperties: ['createdDate'],
  sortAscending: false,
  
  limitedContent: function() {
    return this.get('arrangedContent.length') > 7 ? this.get('arrangedContent').slice(0, 7) : this.get('arrangedContent');
  }.property('arrangedContent.@each')
});

export default DashboardController;
import Ember from "ember";

var ProfileIndexController = Ember.ArrayController.extend({
  sortProperties: ['createdDate'],
  sortAscending: false,
  
  limitedContent: function() {
    return this.get('arrangedContent.length') > 7 ? this.get('arrangedContent').slice(0, 7) : this.get('arrangedContent');
  }.property('arrangedContent.length'),
  
  actions: {
  	delete: function(post) {
  		var retry = function(callback, nTimes) {
        return callback().catch(function(reason) {
          if (nTimes-- > 0) {
            return retry(callback, nTimes);
          }
          throw reason;
        });
      };

      retry(function() {
      	return post.destroyRecord();
      }, 5);
      
  	}
  }
});

export default ProfileIndexController;
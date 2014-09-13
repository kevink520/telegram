import Ember from "ember";

var TelegramPostComponent = Ember.Component.extend({
  tagName: 'article',
  
  myPost: function() {
    return this.get('post.author.username') === this.get('session.user.username');
  }.property('post.author.username', 'session.user.username'),
  
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
        return post.destroyRecord().then(function() {
          console.log('Deleted the post from the records.');
        });
      }, 5);
    }
  }

});

export default TelegramPostComponent;
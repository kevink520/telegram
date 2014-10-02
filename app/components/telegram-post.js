import Ember from "ember";

var TelegramPostComponent = Ember.Component.extend({
  tagName: 'article',
  
  myPost: function() {
    return this.get('post.author.id') === this.get('session.user.id');
  }.property('post.author.id', 'session.user.id'),

  myRepost: function() {
    return this.get('post.repostedBy.id') === this.get('session.user.id');
  }.property('post.repostedBy.id', 'session.user.id'),

  myPostOrRepost: function() {
    return this.get('myPost') || this.get('myRepost');
  }.property('myPost', 'myRepost'),

  repostRequested: false,

  repostSucceeded: false,

  actions: {
    requestRepost: function() {
      this.set('repostRequested', true);
    },

    cancelRepostRequest: function() {
      this.set('repostRequested', false);
    },

    repost: function(post) {
      var store = this.get('targetObject').get('store');
      var currentUser = this.get('session').get('user');
      var repost = store.createRecord('post', {
        author: post.get('author'),
        repostedBy: currentUser,
        body: post.get('body'),
        createdDate: new Date().toISOString()
      });
      
      var component = this;
      repost.save().then(function success() {
        component.set('repostRequested', false);
        component.set('repostSucceeded', true);
      }, function failure() {
        console.log('Failed to save post record.');
      });
    },

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
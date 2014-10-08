import Ember from "ember";

var TelegramPostComponent = Ember.Component.extend({
  tagName: 'article',
  
  myPostOrRepost: function() {
    return this.get('post.author.id') === this.get('session.user.id');
  }.property('post.author.id', 'session.user.id'),

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
      var component = this;
      var originalAuthor;
      post.get('author').then(function(author) {
        if (!post.get('repostedFrom')) {
          originalAuthor = author;
          var repost = store.createRecord('post', {
            author: currentUser,
            repostedFrom: originalAuthor,
            body: post.get('body'),
            createdDate: new Date().toISOString()
          });

          repost.get('author').then(function getAuthorSuccess() {
            repost.get('repostedFrom').then(function getRepostedFromSuccess() {
              repost.save().then(function saveSuccess() {
                component.set('repostRequested', false);
                component.set('repostSucceeded', true);
              }, function failure() {
                console.log('Failed to save post record.');
              });
            }, function getRepostedFromFailure() {
              console.log('Failed to get RepostedFrom user record.');
            });
          }, function getAuthorFailure() {
            console.log('Failed to get author user record.');
          });

        } else {
          post.get('repostedFrom').then(function(repostedFrom) {
            if (repostedFrom) {
              originalAuthor = repostedFrom;
            }

            var repost = store.createRecord('post', {
              author: currentUser,
              repostedFrom: originalAuthor,
              body: post.get('body'),
              createdDate: new Date().toISOString()
            });

            repost.get('author').then(function getAuthorSuccess() {
              repost.get('repostedFrom').then(function getRepostedFromSuccess() {
                repost.save().then(function saveSuccess() {
                  component.set('repostRequested', false);
                  component.set('repostSucceeded', true);
                }, function failure() {
                  console.log('Failed to save post record.');
                });
              }, function getRepostedFromFailure() {
                console.log('Failed to get RepostedFrom user record.');
              });
            }, function getAuthorFailure() {
              console.log('Failed to get author user record.');
            });

          }, function() {
            console.log('Failed to get repostedFrom user object of original post');
          });
        }
        
        
      }, function() {
        console.log('Failed to get author user object of original post');
      }); 
    },

    delete: function(post) { 
      post.get('author').then(function getAuthorSuccess() {
        if (!post.get('repostedFrom')) {
          post.destroyRecord().then(function destroySuccess() {
            console.log('Deleted the post from the records.');
          }, function destroyFailure() {
            console.log('Failed to delete the post.');
          });
        } else {
          post.get('repostedFrom').then(function getRepostedFromSuccess() {
            post.destroyRecord().then(function destroySuccess() {
              console.log('Deleted the post from the records.');
            }, function destroyFailure() {
              console.log('Failed to delete the post.');
            });
          }, function getRepostedFromFailure() {
            console.log('Failed to get RepostedFrom user record.');
          });
        }
        
      }, function getAuthorFailure() {
        console.log('Failed to get author user record.');
      });
    }
  }
});

export default TelegramPostComponent;

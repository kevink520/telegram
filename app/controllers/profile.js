import Ember from 'ember';

var ProfileController = Ember.ObjectController.extend({
  showFollowUnfollowButton: function() {
    if (this.get('session').get('user')) {
      return this.get('id') !== this.get('session').get('user').get('id');
    } else {
      return false;
    }   
  }.property('id', 'session.user.id'),

  actions: {
    follow: function() {
      var updateEvent = {
        id: this.get('id'),
        followedByCurrentUser: true
      };
      var user = this.store.update('user', updateEvent);

      user.save().then(function() {
        console.log('Saved updated user record.');
      }, function() {
        console.log('Failed to save updated user record.');
      });     
    },

    unfollow: function() {
      var updateEvent = {
        id: this.get('id'),
        followedByCurrentUser: false
      };
      var user = this.store.update('user', updateEvent);

      user.save().then(function() {
        console.log('Saved updated user record.');
      }, function() {
        console.log('Failed to save updated user record.');
      }); 
    }
  }
});

export default ProfileController;

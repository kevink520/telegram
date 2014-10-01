import Ember from "ember";

var ProfileFollowingRoute = Ember.Route.extend({
  model: function() {
    var profiledUser = this.modelFor('profile').get('firstObject').get('id');
    return this.store.find('user', {
      followedBy: profiledUser
    });
  }
});

export default ProfileFollowingRoute;

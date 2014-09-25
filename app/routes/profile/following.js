import Ember from "ember";

var ProfileFollowingRoute = Ember.Route.extend({
  model: function() {
    var profiledUser = this.controllerFor('profile').get('id');
    return this.store.find('user', {
      followedBy: profiledUser
    });
  }
});

export default ProfileFollowingRoute;

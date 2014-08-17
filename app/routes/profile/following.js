import Ember from "ember";

var ProfileFollowingRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('user');
  }
});

export default ProfileFollowingRoute;
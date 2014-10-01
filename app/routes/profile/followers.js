import Ember from "ember";

var ProfileFollowersRoute = Ember.Route.extend({
  model: function() {
    var profileUser = this.modelFor('profile').get('firstObject').get('id');
    return this.store.find('user', {
      follows: profileUser
    });
  }
});

export default ProfileFollowersRoute;

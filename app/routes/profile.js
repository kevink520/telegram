import Ember from "ember";

var ProfileRoute = Ember.Route.extend({
  model: function(params) {
  	return this.store.find('user', params.user_id);
  }
});

export default ProfileRoute;
import Ember from "ember";

var ProfileIndexRoute = Ember.Route.extend({
  model: function() {
  	return this.store.find('post');
  }
});

export default ProfileIndexRoute;
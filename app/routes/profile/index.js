import Ember from "ember";

var ProfileIndexRoute = Ember.Route.extend({
  
  model: function() {
    var profiledUser = this.controllerFor('profile').get('id');
  	return this.store.find('post', {
      ownedBy: profiledUser
    });
  }
});

export default ProfileIndexRoute;
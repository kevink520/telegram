import Ember from "ember";

var ProfileIndexRoute = Ember.Route.extend({
  
  model: function() {
    var profiledUser = this.modelFor('profile').get('firstObject').get('id');
  	return this.store.find('post', {
      ownedBy: profiledUser
    });
  }
});

export default ProfileIndexRoute;
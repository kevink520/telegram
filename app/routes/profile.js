import Ember from "ember";

var ProfileRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('user', { username: params.username });
  },

  setupController: function(controller, model) {
    controller.set('model', model.get('firstObject'));
  }
});

export default ProfileRoute;

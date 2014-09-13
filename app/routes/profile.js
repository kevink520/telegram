import Ember from "ember";

var ProfileRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('user', { username: params.username });
  },

  serialize: function(model) {
    return {
      username: model.get('username')
    };
  },

  setupController: function(controller, model) {
    controller.set('model', model.get('firstObject'));
  }
});

export default ProfileRoute;

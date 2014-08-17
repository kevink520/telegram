import Ember from "ember";

var DashboardRoute = Ember.Route.extend({
  beforeModel: function() {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('account.index');
    }
  },
  model: function() {
    return this.store.find('post');
  }
});

export default DashboardRoute;
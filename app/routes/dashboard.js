import Ember from "ember";

var DashboardRoute = Ember.Route.extend({
  beforeModel: function() {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('account.index');
    }
  },
  
  model: function() {
    var route = this;
    return this.store.find('post', {
      ownedByFolloweesOf: route.get('session').get('user').get('username')
    });
  }
});

export default DashboardRoute;
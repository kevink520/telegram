import Ember from "ember";

var ApplicationRoute = Ember.Route.extend({
  beforeModel: function() {
    var route = this;
    var promise = this.store.find('user', { isAuthenticated: true });
    return promise.then(function(users) {
      if (users && users.get('length') > 0) {
        var user = users.get('firstObject');
        route.set('session.user', user);
      }
      return users;
    });
  },
  actions: {
    error: function(reason) {
      console.log(reason);
      this.transitionTo('account.index');
    },
    logout: function() {
      var route = this;
      Ember.$.get('/api/logout', function(data) {
        console.log(data);
        route.transitionTo('account.index');
      });
    }
  }
});

export default ApplicationRoute;
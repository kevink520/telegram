import Ember from "ember";

var LoginController = Ember.ObjectController.extend({
  username: '',
  password: '',
  actions: {
    logIn: function() {
      var username = this.get('username');
      var password = this.get('password');
      if (!username || !password) {
        return false;
      }
      if (!username.trim() || !password.trim()) {
        return;
      }
      var controller = this;
      this.store.find('user', { id: username, password: password }).then(function(users) {
        var user = users.get('firstObject');
        controller.get('session').set('user', user);
        controller.set('username', '');
        controller.set('password', '');
        controller.transitionToRoute('dashboard');
      }, function() {
        console.log('Failed to get the user with the username and password.');
      });
    }
  }
});

export default LoginController;
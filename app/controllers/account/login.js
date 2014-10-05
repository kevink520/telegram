import Ember from "ember";

var LoginController = Ember.ObjectController.extend({
  username: '',
  password: '',
  actions: {
    logIn: function() {
      var username = this.get('username');
      var password = this.get('password');

      this.set('password', '');
      
      if (!username || !password) {
        return false;
      }
      
      if (!username.trim() || !password.trim()) {
        return;
      }

      var salt = username.trim() + 'telegramApp2014';
      var md5 = Ember.$.md5(salt + password);
      
      var controller = this;

      var retry = function(callback, nTimes) {
        return callback().catch(function(reason) {
          if (nTimes-- > 0) {
            return retry(callback, nTimes);
          }
          throw reason;
        });
      };

      retry(function() {
        return controller.store.find('user', { username: username, 
          password: md5 }).then(function(users) {
          if (users) {
            controller.get('session').set('user', users.get('firstObject'));
            controller.set('username', '');
          
            controller.transitionToRoute('dashboard');
          }  

        });
      }, 5);
          
    }
  }
});

export default LoginController;
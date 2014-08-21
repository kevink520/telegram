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

      var retry = function(callback, nTimes) {
        return callback().catch(function(reason) {
          if (nTimes-- > 0) {
            return retry(callback, nTimes);
          }
          throw reason;
        });
      };

      retry(function() {
        return controller.store.find('user', { id: username, password: password }).then(function(result) {
          var user = result.get('firstObject');

          if (user) {
            controller.get('session').set('user', user);
            controller.set('username', '');
            controller.set('password', '');
          
            controller.transitionToRoute('dashboard');
          }  
                
        });
      }, 5);
          
    }
  }
});

export default LoginController;
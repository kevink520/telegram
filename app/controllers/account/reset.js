import Ember from "ember";

var ResetController = Ember.ObjectController.extend({
  email: '',
  actions: {
    reset: function() {
      var email = this.get('email');
      
      if (!email) {
        return false;
      }
      
      if (!email.trim()) {
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
        return controller.store.find('user', { email: email }).then(function(user) {
          var password = user.get('firstObject').get('password');
          
          // Email password

          if (password) {
            controller.set('email', '');
            controller.transitionToRoute('account.reset_success');
          }
        });
      }, 5);
      
    }
  }
});

export default ResetController;
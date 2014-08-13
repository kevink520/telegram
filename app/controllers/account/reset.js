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
      this.store.find('user', { email: email }).then(function(user) {
        var password = user.get('firstObject').get('password');
        // Email password
        controller.set('email', '');
        controller.transitionToRoute('account.reset_success');
      });
    }
  }
});

export default ResetController;
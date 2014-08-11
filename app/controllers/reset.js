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
				var password = user.content[0]._data.password;
				// Email password
				controller.set('email', '');
				controller.transitionToRoute('reset_success');
			});
		}
	}
});

export default ResetController;
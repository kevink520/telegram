import Ember from "ember";

var LoginController = Ember.ObjectController.extend({
	content: this,
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
			this.store.find('user', { id: username, password: password }).then(function(user) {
				var user_id = user.content[0]._data.id;
				console.log(user_id);
				controller.transitionToRoute('dashboard');
			}, function() {
				console.log('Failed to get the user with the username and password.');
			});
		}
	}
});

export default LoginController;
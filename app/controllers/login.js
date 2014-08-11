import Ember from "ember";

var LoginController = Ember.ObjectController.extend({
	username: '',
	password: '',
	needs: ['application'],
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
				var sessionId = user.content[0]._data.id;
				var sessionName = user.content[0]._data.name;
				controller.set('controllers.application.sessionId', sessionId);
				controller.set('controllers.application.sessionName', sessionName);
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
import Ember from "ember";

var IndexController = Ember.ObjectController.extend({
	content: this,
	actions: {
		signUp: function() {
			var name = this.get('name');
		  var username = this.get('username');
		  var password = this.get('password');
			if (!name || !username || !password) {
				return false;
			}
			if (!name.trim() || !username.trim() || !password.trim()) {
				return;
			}
			var user = this.store.createRecord('user', {
				id: username,
				name: name,
				password: password,
				email: '',
				photo: ''
			});
			this.set('name', '');
			this.set('username', '');
			this.set('password', '');
			user.save();
			this.transitionToRoute('dashboard');
		}
	}
});

export default IndexController;
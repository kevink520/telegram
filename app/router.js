import Ember from 'ember';

var Router = Ember.Router.extend({
  location: TelegramENV.locationType
});

Router.map(function() {
	this.route('login');
	this.route('reset');
	this.route('resetSuccess');
	this.route('dashboard');
	this.resource('profile', { path: '/:user_id'}, function() {
		this.route('following');
		this.route('followers');
	});
});

export default Router;

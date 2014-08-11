import Ember from "ember";

var DashboardRoute = Ember.Route.extend({
	beforeModel: function() {
		if (!this.controllerFor('application').get('sessionId') || !this.controllerFor('application').get('sessionName')) {
			this.transitionTo('index');
		}
	},
	model: function() {
		return this.store.find('post');
	}
});

export default DashboardRoute;
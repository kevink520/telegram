import Ember from 'ember';

var Router = Ember.Router.extend({
  location: TelegramENV.locationType
});

Router.map(function() {
  this.resource('account', { path: '/' }, function() {
    this.route('login');
    this.route('reset');
    this.route('reset_success');
  });

  this.route('dashboard');
  
  this.resource('profile', { path: '/:username' }, function() {
    this.route('following');
    this.route('followers');
  });
});

export default Router;

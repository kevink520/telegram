import Ember from "ember";

var IndexController = Ember.ObjectController.extend({
  name: '',
  username: '',
  password: '',
  actions: {
    signUp: function() {
      var name = this.get('name');
      var username = this.get('username');
      var password = this.get('password');

      this.set('password', '');

      if (!name || !username || !password) {
        return false;
      }
      
      if (!name.trim() || !username.trim() || !password.trim()) {
        return;
      }

      var salt = username.trim() + 'telegramApp2014';
      var md5 = Ember.$.md5(salt + password);

      var user = this.store.createRecord('user', {
        'username': username,
        'name': name,
        'password': md5,
        'email': '',
        'photo': 'http://placehold.it/70'
      });
      
      this.get('session').set('user', user);

      user.save().then(function() {
        console.log('Saved user record.');
      }, function() {
        console.log('Failed to save user record');
      });     

      this.set('name', '');
      this.set('username', '');
      console.log(user);
      this.transitionToRoute('dashboard');         
    }
  }
});

export default IndexController;
import Ember from "ember";

var IndexController = Ember.ObjectController.extend({
  name: '',
  username: '',
  password: '',
  needs: ['application'],
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
        //'user': {
          'id': username,
          'name': name,
          'password': password,
          'email': '',
          'photo': 'http://placehold.it/70'
        //}
      });
      
      this.get('session').set('user', user);
      var controller = this;

      user.save().then(function() {
        console.log('Saved user record.');
      }, function() {
        console.log('Failed to save user record');
      });     

      controller.set('name', '');
      controller.set('username', '');
      controller.set('password', '');
      console.log(user);
      controller.transitionToRoute('dashboard');         
    }
  }
});

export default IndexController;
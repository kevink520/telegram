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
        id: username,
        name: name,
        password: password,
        email: '',
        photo: 'http://placehold.it/70'
      });

      var retry = function(callback, nTimes) {
        return callback().catch(function(reason) {
          if (nTimes-- > 0) {
            return retry(callback, nTimes);
          }
          throw reason;
        });
      };
      
      this.get('session').set('user', user);

      retry(function() {
        return user.save();  
      }, 5);

      this.set('name', '');
      this.set('username', '');
      this.set('password', '');

      this.transitionToRoute('dashboard');      
    }
  }
});

export default IndexController;
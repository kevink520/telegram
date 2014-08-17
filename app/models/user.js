import DS from "ember-data";

var attr = DS.attr;

var User = DS.Model.extend({
  name: attr('string'),
  password: attr('string'),
  email: attr('string'),
  photo: attr('string')
});

User.reopenClass({
  FIXTURES: [
    { 
      id: 'cristianstrat',
      name: 'Cristian Strat', 
      password: 'cs1234', 
      email: 'cristianstrat@gmail.com', 
      photo: 'http://placehold.it/70'
    },
    { 
      id: 'johnmaeda',
      name: 'John Maeda',
      password: 'jm1234',
      email: 'johnmaeda@gmail.com',
      photo: 'http://placehold.it/70'
    },
    {
      id: 'clarkewolfe',
      name: 'Clarke Wolfe',
      password: 'cw1234',
      email: 'clarkewolfe@yahoo.com',
      photo: 'http://placehold.it/70'
    },
    {
      id: 'fastcompany',
      name: 'Fast Company',
      password: 'fc1234',
      email: 'info@fastcompany.com',
      photo: 'http://placehold.it/70'
    }
  ]
});

export default User;
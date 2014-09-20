import DS from "ember-data";

var attr = DS.attr;

var User = DS.Model.extend({
  username: attr('string'),
  name: attr('string'),
  password: attr('string'),
  email: attr('string'),
  photo: attr('string')
});

export default User;

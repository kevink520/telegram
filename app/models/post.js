import DS from "ember-data";

var attr = DS.attr;

var Post = DS.Model.extend({
  author: DS.belongsTo('user', {
    async: true
  }),
  repostedFrom: DS.belongsTo('user', {
    async: true
  }),
  body: attr('string'),
  createdDate: attr('string')
});

export default Post;

import DS from "ember-data";

var PostSerializer = DS.JSONSerializer.extend({
  primaryKey: '_id'
});

export default PostSerializer;

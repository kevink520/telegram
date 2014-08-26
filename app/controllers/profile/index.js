import Ember from "ember";

var ProfileIndexController = Ember.ArrayController.extend({
  sortProperties: ['createdDate'],
  sortAscending: false,
  
  limitedContent: function() {
    return this.get('arrangedContent.length') > 7 ? this.get('arrangedContent').slice(0, 7) : this.get('arrangedContent');
  }.property('arrangedContent.@each')

});

export default ProfileIndexController;
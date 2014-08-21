import Ember from "ember";

var FormatDateComponent = Ember.Component.extend({
  tagName: 'span',
  classNames: ['formatted-date'],
  
  formattedDate: function() {
    return moment(this.get('date')).fromNow();
  }.property('date')
});

export default FormatDateComponent;
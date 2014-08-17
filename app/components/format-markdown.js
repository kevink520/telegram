import Ember from "ember";

var FormatMarkdownComponent = Ember.Component.extend({
  tagName: 'p',
  classNames: ['body'],
  formattedMarkdown: function() {
    //var showdown = new Showdown.converter();
    return new Ember.Handlebars.SafeString(this.get('body'));
    //return new Ember.Handlebars.SafeString(showdown.makeHtml(this.get('body')));
  }.property('body')
});

export default FormatMarkdownComponent;
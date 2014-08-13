import Ember from "ember";
//import Showdown from "../../vendor/showdown/src/showdown";

//var showdown = new Showdown.converter();

var FormatMarkdownComponent = Ember.Component.extend({
  tagName: 'p',
  classNames: ['body'],
  formattedMarkdown: function() {
    return new Ember.Handlebars.SafeString(this.get('body'));
    //return new Ember.Handlebars.SafeString(showdown.makeHtml(this.get('body')));
  }.property('body')
});

export default FormatMarkdownComponent;
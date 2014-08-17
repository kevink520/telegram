import Ember from "ember";

var DeletePostComponent = Ember.Component.extend({
	tagName: 'a',
	attributeBindings: ['href'],
	href: '#',
	classNames: ['delete'],
  click: function(e) {
  	e.preventDefault();
    this.sendAction('action', this.get('post'));
  }
});

export default DeletePostComponent;
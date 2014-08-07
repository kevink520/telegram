import DS from "ember-data";

var attr = DS.attr;

var User = DS.Model.extend({
	name: attr('string'),
	password: attr('string'),
	email: attr('string'),
	photo: attr('string')
});

User.FIXTURES = [
	{ 
		id: 'cristianslat',
		name: 'Cristian Strat', 
		password: '4270gRt%8', 
		email: 'cristianslat@gmail.com', 
		photo: '/assets/images/cristianslat.jpg'
	},
	{ 
		id: 'johnmaeda',
		name: 'John Maeda',
		password: 'fgcffgu97g^',
		email: 'johnmaeda@gmail.com',
		photo: '/assets/images/johnmaeda.jpg'
	},
	{
		id: 'clarkewolfe',
		name: 'Clarke Wolfe',
		password: '#ft56j93*',
		email: 'clarkewolfe@yahoo.com',
		photo: '/assets/images/clarkewolfe.png'
	},
	{
		id: 'fastcompany',
		name: 'Fast Company',
		password: 'y7^O978p',
		email: 'info@fastcompany.com',
		photo: '/assets/images/fastcompany.png'
	}
];

export default User;
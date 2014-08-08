import DS from "ember-data";

var attr = DS.attr;

var Post = DS.Model.extend({
	author: DS.belongsTo('user'),
	body: attr('string'),
	createdDate: attr('date')
});

Post.reopenClass({
	FIXTURES: [
		{
			id: '1',
			author: 'fastcompany',
			body: 'Leica celebrates 100 years with a georgeously minimalist shooter that pays homage to its first <a href="http://wrd.cm/1ieFplL">http://wrd.cm/1ieFplL</a> <a href="http://pic.twitter.com/SNvy9PGZwc">pic.twitter.com/SNvy9PGZwc</a>',
			createdDate: new Date(2014, 3, 24, 13, 39, 0)
		},
		{
			id: '2',
			author: 'fastcompany',
			body: 'This app is like a remote control for your credit cards: <a href="http://f-st.co/OXzg2eEw">http://f-st.co/OXzg2eEw</a> <a href="pic.twitter.com/eAL1sdVhrh">pic.twitter.com/eAL1sdVhrh</a>',
			createdDate: new Date(2014, 3, 24, 13, 40, 0)
		},
		{
			id: '3',
			author: 'clarkewolfe',
			body: 'Listen, I don\'t want to brag about my awesome #gaming skills but someone made it into an @IGN article today...',
			createdDate: new Date(2014, 3, 24, 13, 42, 0)
		},
		{
			id: '4',
			author: 'johnmaeda',
			body: 'Great teams constantly learn and re-learn how to move from the ego of *I* to the ego of *WE*.',
			createdDate: new Date(2014, 3, 24, 13, 39, 0)
		},
		{
			id: '5',
			author: 'cristianslat',
			body: 'Ponies enhance cognition. To be safe around horses you must stay focused, alert, aware, and never forget that they can kick your ass.',
			createdDate: new Date(2014, 3, 24, 13, 34, 0)
		}
	]
});

export default Post;
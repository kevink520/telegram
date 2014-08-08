import DS from "ember-data";

var ApplicationAdapter = DS.FixtureAdapter.extend({
	queryFixtures : function(fixtures, query, type) {
		return fixtures.filter(function(item) {
			for (var prop in query) {
				return (item[prop] == query[prop]);
			}
			return true;
		});
	}
});

export default ApplicationAdapter;
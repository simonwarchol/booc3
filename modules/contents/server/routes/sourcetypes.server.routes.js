'use strict';

module.exports = function(app) {
	var sourcetype = require('../controllers/sourcetypes.server.controller');

	// Courses Routes
	app.route('/sourcetypes')
		.get(sourcetype.list)
		.post(sourcetype.create);

	app.route('/sourcetypes/:sourcetypeId')
		.get(sourcetype.read)
		.put(sourcetype.update)
		.delete(sourcetype.delete);

	// Finish by binding the Course middleware
	app.param('sourcetypeId', sourcetype.sourcetypeByID);
};

'use strict';

module.exports = function(app) {
	var conceptdependencies = require('../controllers/conceptdependencies.server.controller');

	// Conceptdependencies Routes
	app.route('/conceptdependencies')
		.get(conceptdependencies.list)
		.post(conceptdependencies.create);

	app.route('/conceptdependencies/:conceptdependencyId')
		.get(conceptdependencies.read)
		.post(conceptdependencies.create)
		.put(conceptdependencies.update)
		.delete(conceptdependencies.delete);

	// Finish by binding the Conceptdependency middleware
	app.param('conceptdependencyId', conceptdependencies.conceptdependencyByID);
};

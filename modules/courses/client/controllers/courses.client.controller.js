'use strict';

// Courses controller
angular.module('courses').controller('CoursesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Courses', 'Concepts',
	function($scope, $stateParams, $location, Authentication, Courses, Concepts) {
		$scope.authentication = Authentication;

		/*
		 title: '',
		 short: '',
		 description: '',
		 created: '',
		 concepts: [],
		 segments: []
		 */

		// Create new Course
		$scope.create = function()
		{

			var course = new Courses($scope.course);

			// Redirect after save
			course.$save(function(response)
			{
				var courseId = response._id;

				// Now also create a first concept so the map will work
				var concept = new Concepts(
				{
					"children" : [],
					//"color" : "#338833",
					"color" : "#CB654F",
					"courses" : [courseId],
					"dependencies" : [],
					"order" : 0,
					"parents" : [],
					"providing" : [],
					"segments" : [],
					"title" : "First Concept"
				});

				concept.$save(function(r)
				{
					$location.path('courses/' + courseId);
				});

				// Clear form fields
				$scope.name = '';

			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Course
		$scope.remove = function(course) {
			if ( course ) { 
				course.$remove();

				for (var i in $scope.courses) {
					if ($scope.courses [i] === course) {
						$scope.courses.splice(i, 1);
					}
				}
			} else {
				$scope.course.$remove(function() {
					$location.path('courses');
				});
			}
		};

		// Update existing Course
		$scope.update = function() {
			var course = $scope.course;

			course.$update(function() {
				$location.path('courses/' + course._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Courses
		$scope.find = function() {
			$scope.courses = Courses.query();
		};

		// Find existing Course
		$scope.findOne = function() {

			if($stateParams.courseId)
			{
				$scope.course = Courses.get({
					courseId: $stateParams.courseId
				});
			}
			else
			{
				$scope.course =
				{
					title: '',
					short: '',
					description: '',
					concepts: [],
					segments: []
				};
			}

		};
	}
]);

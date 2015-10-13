angular.module('conceptdependencies').controller('FeedbackModalController',
    function ($scope, Courses, $modalInstance, $http)
    {
        //$scope.dependency = dependency;
        $scope.feedbackMode = 'course';
        $scope.technicalProblemOn = false;
        $scope.course = null;
        $scope.courses = Courses.query();
        $scope.courseContent = '';
        $scope.websiteContent = '';

        $scope.ok = function ()
        {
            var feedback = { type: $scope.feedbackMode };

            if($scope.feedbackMode == 'course')
            {
                feedback.courseId = $scope.course._id;
                feedback.content = $scope.courseContent;
            }
            else if($scope.feedbackMode == 'website')
            {
                feedback.technical = $scope.technicalProblemOn;
                feedback.content = $scope.websiteContent;
            }

            $http.post('/api/feedback/send', feedback).success(function (response) {
                /*$scope.credentials = null;
                $scope.success = response.message;*/

            }).error(function (response) {
                /*$scope.credentials = null;
                $scope.error = response.message;*/
            });

            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss();
        };
    });

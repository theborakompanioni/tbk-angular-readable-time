(function (angular) {

  angular.module('tbk.readableTime.directives')
    .directive('tbkReadableTimeCountdown', [function () {
      var d = {
        scope: {
          start: '@',
          interval: '@',
          reverse: '@'
        },
        controller: ['$scope', '$interval', function ($scope, $interval) {
          var factor = !!$scope.reverse ? -1 : 1;
          var value = function () {
            return ($scope.start - new Date().getTime()) * factor;
          };

          $scope.milliseconds = value();
          $interval(function () {
            $scope.milliseconds = value();
          }, $scope.interval || 1000);
        }],
        template: '<span>{{ milliseconds | tbkReadableTimeRecursive }}</span>'
      };

      return d;
    }])
  ;

})(angular);

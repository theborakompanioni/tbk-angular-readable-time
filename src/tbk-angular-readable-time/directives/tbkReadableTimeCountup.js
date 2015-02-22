(function (angular) {

  angular.module('tbk.readableTime.directives')
    .directive('tbkReadableTimeCountup', [function () {
      var d = {
        scope: {
          start: '@',
          interval: '@',
          minUnit: '@',
          reverse: '@'
        },
        controller: ['$scope', function ($scope) {
          $scope.reverse = !!$scope.reverse || false;
        }],
        template: '<span tbk-readable-time-countdown' +
        ' data-start="{{start}}" ' +
        ' data-interval="{{interval}}" ' +
        ' data-min-unit="{{minUnit}}" ' +
        ' data-reverse="{{!reverse}}"></span>'
      };

      return d;
    }])
  ;

})(angular);

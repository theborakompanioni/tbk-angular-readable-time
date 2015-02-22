(function (angular) {
  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var week = day * 7;
  var year = day * 365;
  var month = year / 12;

  angular.module('tbk.readableTime.config', [])
    .value('tbkReadableTimeConfig', {
      debug: true,
      time: {
        second: second,
        minute: minute,
        hour: hour,
        day: day,
        week: week,
        month: month,
        year: year
      }
    });

  angular.module('tbk.readableTime.directives', []);
  angular.module('tbk.readableTime.filters', [
    'tbk.readableTime.config'
  ]);
  angular.module('tbk.readableTime', [
    'tbk.readableTime.config',
    'tbk.readableTime.directives',
    'tbk.readableTime.filters'
  ]);

})(angular);

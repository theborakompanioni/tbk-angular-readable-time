'use strict';

describe('filters', function () {
  var scope;

  beforeEach(module('tbk.readableTime'));

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  describe('Filter: tbkReadableTime', function () {
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var week = day * 7;
    var year = day * 365;
    var month = year / 12;

    var tbkReadableTime = null;
    var tbkReadableTimeRecursive = null;

    beforeEach(inject(function ($filter) {
      tbkReadableTime = $filter('tbkReadableTime');
      tbkReadableTimeRecursive = $filter('tbkReadableTimeRecursive');

    }));

    it('should correctly format time recursively', function () {

      expect(tbkReadableTimeRecursive('1', 0)).to.eql('1 millisecond');
      expect(tbkReadableTimeRecursive('1001', 0)).to.eql('1 second 1 millisecond');
      expect(tbkReadableTimeRecursive('61001', 0)).to.eql('1 minute 1 second 1 millisecond');
      expect(tbkReadableTimeRecursive('62001', 0)).to.eql('1 minute 2 seconds 1 millisecond');

      expect(tbkReadableTimeRecursive('3662001', 0)).to.eql(
        '1 hour 1 minute 2 seconds 1 millisecond'
      );
      expect(tbkReadableTimeRecursive(4 * day + 25 * minute, 0)).to.eql(
        '4 days 25 minutes'
      );
      expect(tbkReadableTimeRecursive(2 * year + 23 * hour, 0)).to.eql(
        '2 years 23 hours'
      );
      expect(tbkReadableTimeRecursive(2 * year + 23 * hour + 999, 0)).to.eql(
        '2 years 23 hours 999 milliseconds'
      );
    });

    it('should correctly format time', function () {

      expect(tbkReadableTime('1', 0)).to.eql('1 millisecond');
      expect(tbkReadableTime('2', 0)).to.eql('2 milliseconds');
      expect(tbkReadableTime('999', 0)).to.eql('999 milliseconds');


      expect(tbkReadableTime(1 * second)).to.eql('1 second');
      expect(tbkReadableTime(1 * second, 2)).to.eql('1 second');
      expect(tbkReadableTime(1 * second + 9, 2)).to.eql('1.01 seconds');
      expect(tbkReadableTime(1 * second + 270, 1)).to.eql('1.3 seconds');
      expect(tbkReadableTime(2 * second, 1)).to.eql('2 seconds');
      expect(tbkReadableTime(1 * minute - 0.5 * second, 2)).to.eql('59.5 seconds');
      expect(tbkReadableTime(1 * minute - 0.49 * second, 2)).to.eql('59.51 seconds');
      expect(tbkReadableTime(1 * minute - 1, 2)).to.eql('60 seconds');

      expect(tbkReadableTime(1 * minute)).to.eql('1 minute');
      expect(tbkReadableTime(1 * minute + 1, 0)).to.eql('1 minute');
      expect(tbkReadableTime(2 * minute)).to.eql('2 minutes');
      expect(tbkReadableTime(1 * hour - 0.5 * minute, 2)).to.eql('59.5 minutes');
      expect(tbkReadableTime(1 * hour - 0.49 * minute, 2)).to.eql('59.51 minutes');
      expect(tbkReadableTime(1 * hour - 1 * second, 0)).to.eql('60 minutes');

      expect(tbkReadableTime(1 * hour)).to.eql('1 hour');
      expect(tbkReadableTime(1 * hour + 0.5 * second, 4)).to.eql('1.0001 hours');
      expect(tbkReadableTime(1 * hour + 1, 0)).to.eql('1 hour');
      expect(tbkReadableTime(2 * hour, 0)).to.eql('2 hours');
      expect(tbkReadableTime(1 * day - 0.5 * hour, 2)).to.eql('23.5 hours');
      expect(tbkReadableTime(1 * day - 0.49 * hour, 2)).to.eql('23.51 hours');
      expect(tbkReadableTime(1 * day - 1 * minute, 0)).to.eql('24 hours');

      expect(tbkReadableTime(1 * day)).to.eql('1 day');
      expect(tbkReadableTime(1 * day + 1, 0)).to.eql('1 day');
      expect(tbkReadableTime(2 * day, 0)).to.eql('2 days');
      expect(tbkReadableTime(1 * week - 0.5 * day, 2)).to.eql('6.5 days');
      expect(tbkReadableTime(1 * week - 0.49 * day, 2)).to.eql('6.51 days');
      expect(tbkReadableTime(1 * week - 1 * hour, 0)).to.eql('7 days');

      expect(tbkReadableTime(1 * week)).to.eql('1 week');
      expect(tbkReadableTime(1 * week + 1, 0)).to.eql('1 week');
      expect(tbkReadableTime(2 * week, 0)).to.eql('2 weeks');
      expect(tbkReadableTime(1 * month - day, 2)).to.eql('4.2 weeks');
      expect(tbkReadableTime(1 * month - 2.5 * day, 2)).to.eql('3.99 weeks');
      expect(tbkReadableTime(1 * month - 1 * day, 0)).to.eql('4 weeks');

      expect(tbkReadableTime(1 * month)).to.eql('1 month');
      expect(tbkReadableTime(1 * month + 1, 0)).to.eql('1 month');
      expect(tbkReadableTime(2 * month, 0)).to.eql('2 months');
      expect(tbkReadableTime(1 * year - 0.5 * month, 2)).to.eql('11.5 months');
      expect(tbkReadableTime(1 * year - 0.49 * month, 2)).to.eql('11.51 months');
      expect(tbkReadableTime(1 * year - 1 * week, 0)).to.eql('12 months');

      expect(tbkReadableTime(1 * year)).to.eql('1 year');
      expect(tbkReadableTime(1 * year + 1, 0)).to.eql('1 year');
      expect(tbkReadableTime(2 * year, 0)).to.eql('2 years');
      expect(tbkReadableTime(2 * year + 6 * month, 2)).to.eql('2.5 years');
      expect(tbkReadableTime(2 * year + 9 * month, 2)).to.eql('2.75 years');
      expect(tbkReadableTime(999 * year, 3)).to.eql('999 years');
    });
  });
});

'use strict';

describe('', function () {

  var module;
  var dependencies;
  dependencies = [];

  var hasModule = function (module) {
    return dependencies.indexOf(module) >= 0;
  };

  beforeEach(function () {
    module = angular.module('tbk.readableTime');
    dependencies = module.requires;
  });

  it('should load config module', function () {
    expect(hasModule('tbk.readableTime.config')).to.be.ok;
  });


  it('should load filters module', function () {
    expect(hasModule('tbk.readableTime.filters')).to.be.ok;
  });


  it('should load directives module', function () {
    expect(hasModule('tbk.readableTime.directives')).to.be.ok;
  });


});

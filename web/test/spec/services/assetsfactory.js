'use strict';

describe('Service: assetsFactory', function () {

  // load the service's module
  beforeEach(module('tmaApp'));

  // instantiate service
  var assetsFactory;
  beforeEach(inject(function (_assetsFactory_) {
    assetsFactory = _assetsFactory_;
  }));

  it('should do something', function () {
    expect(!!assetsFactory).toBe(true);
  });

});

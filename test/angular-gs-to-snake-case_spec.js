describe('angular-gs-to-snake-case', function () {
  beforeEach(module('gs.to-snake-case'));

  var toSnakeCase;

  beforeEach(inject(function (_toSnakeCase_) {
    toSnakeCase = _toSnakeCase_;
  }));

  it('converts camel case to snake case', function () {
    var a = 'gabeIsCool',
      b = 'GabeIsCool',
      solution = 'gabe_is_cool';

    expect(toSnakeCase(a)).toEqual(solution);
    expect(toSnakeCase(b)).toEqual(solution);
  });

  it('returns undefined if given undefined', function () {
    expect(toSnakeCase(undefined)).toEqual(undefined);
  });

  it('raises an exception', function () {

    var throwMe = function () {
      toSnakeCase([1,2,3]);
    };

    expect(throwMe).toThrow();
  });

});

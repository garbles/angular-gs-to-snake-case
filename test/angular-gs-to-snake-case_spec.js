describe('angular-gs-to-snake-case', function () {
  beforeEach(module('gs.to-snake-case'));

  var toSnakeCase;

  beforeEach(inject(function (_toSnakeCase_) {
    toSnakeCase = _toSnakeCase_;
  }));

  it('converts a string from camel case to snake case', function () {
    var a = 'gabeIsCool',
      b = 'GabeIsCool',
      solution = 'gabe_is_cool';

    expect(toSnakeCase(a)).toEqual(solution);
    expect(toSnakeCase(b)).toEqual(solution);
  });

  it('converts an array of strings from camel case to snake case', function () {
    var a = 'gabeIsCool',
      b = 'GabeIsCool',
      solution = 'gabe_is_cool';

    expect(toSnakeCase([a,b])).toEqual([solution, solution]);
  });

  it('returns null if given undefined', function () {
    expect(toSnakeCase(null)).toEqual(undefined);
  });

  it('returns nulls for', function () {
    var a = [1,2,3];

    expect(toSnakeCase(a)).toEqual([null, null, null]);
  });

});

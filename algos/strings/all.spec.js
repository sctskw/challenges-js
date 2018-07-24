/*eslint-env node, mocha */

require('should');

var format = require('util').format;


describe('Find the first non-repeated character in a String', function() {
  var given = 'aaaaacadcccb';
  var expect = 'd';

  describe(format('Given: [%s], Expect: %s', given, expect), function() {

    it('should find `d`', function() {
      var result = require('./first_non_repeated_char').find(given);
      result.should.equal(expect);
    });

  })
})


describe('Reverse a String iteratively and recursively', function() {

  var given = 'abcdef';
  var expect = 'fedcba';

  describe(format('Given: [%s], Expect: %s', given, expect), function() {

    var methods = require('./reverse_string');

    it('should work iteratively', function() {
      methods.iterative(given).should.equal(expect);
    })

    it('should work recursively', function() {
      methods.recursive(given).should.equal(expect);
    })

  })

})


describe('Determine if a string is a palindrome', function() {

  var palindromes = require('./is_palindrome');
  var given = 'racecar';
  var expect = true;

  it(format('Given: [%s], Expect: %s', given, expect), function() {
    palindromes.check(given).should.equal(expect);
  })

  var given2 = 'racer';
  var expect2 = false;

  it(format('Given: [%s], Expect: %s', given2, expect2), function() {
    palindromes.check(given2).should.equal(expect2);
  })

})


describe('Find all permutations of a String', function() {

  var permutations  = require('./permutations');

  var given = 'abc';
  var expect = [
    'abc',
    'acb',
    'bac',
    'bca',
    'cab',
    'cba'
  ];

  it(format('Given: [%s], Expect: %s', given, expect), function() {
    permutations.solve(given).should.deepEqual(expect);
  })

});

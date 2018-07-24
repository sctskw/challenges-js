/*eslint-env node, mocha */

require('should');

var format = require('util').format;


describe('Find the most frequent integer in an array', function() {
  var given = [1, 2, 3, 3, 3, 4, 4, 5];
  var given = [3, 1, 2, 3, 4, 4, 3, 3, 4, 5];
  var expect = 3;

  describe(format('Given: [%s], Expect: %s', given, expect), function() {

    it('using arrays only', function() {
      var result = require('./most_frequent_integer').withArray(given);
      result.should.equal(expect);
    });

    it('using hashmap', function() {
      var result = require('./most_frequent_integer').withMap(given);
      result.should.equal(expect);
    });

  });
})


describe('Find pairs in an integer Array whose sum is X', function() {

  var given = [5, 2, 3, 8, 3, 4, 6, 5, 7, 9];
  var expect = [[5, 5], [2, 8], [3, 7], [4, 6]];

  describe(format('Given: %s, Expect: %s', given, expect), function() {

    it('runs in non-linear time O(n^2)', function() {
      var result = require('./find_pairs_with_sum').nonLinear(given, 10);

      result.should.deepEqual(expect);
    })

    it('runs in linear time O(n)', function() {
      var result = require('./find_pairs_with_sum').linear(given, 10);

      result.length.should.equal(4);
    })

  })
})

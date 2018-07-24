/*eslint-env node, mocha */

require('should');

var format = require('util').format;


describe('Sorting', function() {
  var given = [5, 3, 2, 8, 7];
  var expect = [2, 3, 5, 7, 8];

  describe(format('Given: [%s], Expect: %s', given, expect), function() {

    it('should use BubbleSort', function() {
      var given = [5, 3, 2, 8, 7];
      var result = require('./bubble').sort(given);
      result.toString().should.equal(expect.toString());
      result.should.eql(expect);
    });

    it('should use SelectionSort', function() {
      var given = [5, 3, 2, 8, 7];
      var result = require('./selection').sort(given);
      result.should.eql(expect);
    });

    it('should use InsertionSort', function() {
      var given = [5, 3, 2, 8, 7];
      var result = require('./insertion').sort(given);
      result.should.eql(expect);
    });

    it('should use MergeSort', function() {
      var given = [5, 3, 2, 8, 7];
      var result = require('./merge').sort(given);
      result.should.eql(expect);
    });

  });
})

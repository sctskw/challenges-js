#!/usr/bin/env node

/**
 *
 * Problem: Find the most frequent integer in an array
 *
 * Given: [1, 2, 3, 3, 3, 4, 4, 5]
 * Expect: 5
 *
 */



module.exports.withArray = function withArray(ints) {

  var counts = [];
  var max = 0;

  ints.forEach(function(int) {

    if(!counts[int]) {
      counts[int] = 0;
    }

    counts[int] += 1;
  });

  counts.forEach(function(count, idx) {
    if((count || 0) > max) {
      max = idx;
    }
  });

  return max;

}


module.exports.withMap = function withMap(ints) {

  var counts = {};
  var max = 0;

  ints.forEach(function(int) {
    if(!counts[int]) {
      counts[int] = 0;
    }

    counts[int] += 1;
  });


  Object.keys(counts).forEach(function(int) {
    if(counts[int] > max) {
      max = parseInt(int);
    }
  });

  return max;

}

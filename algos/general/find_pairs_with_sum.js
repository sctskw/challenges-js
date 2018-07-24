#!/usr/bin/env node

/* eslint-env node */

/**
 * Problem: Find pairs in an integer array whose sum is equal to 10
 * BONUS: do it in linear time
 *
 * Given: [5, 2, 3, 8, 3, 4, 6, 5, 7, 9]
 *
 * Expect: [[5, 5], [2, 8], [3, 7], [3, 7], [4, 6]]
 *
 */



module.exports.nonLinear = function nonLinear(ints, sum) {

  var values = [];
  var used = {};

  ints.forEach(function(int, idx) {
    var left = sum - int;
    var i = ints.indexOf(left, idx+1); //this makes is n^2

    if(i != idx && i >= 0 && !used[int]) {
      used[int] = true;
      values.push([int, ints[i]]);
    }
  });

  return values;

}

module.exports.linear = function linear(ints, sum) {

  var values = [];
  var unused = {};

  ints.forEach(function(left, idx) {
    var right = sum - left; //the right side of expression: a + b

    if(unused[right] >= 0) {
      values.push([left, right]);
      delete unused[right]; //cleanup
    } else {
      //cache the unused value
      unused[left] = idx;
    }

  });

  return values;

}

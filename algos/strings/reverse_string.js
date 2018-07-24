#!/usr/bin/env node

/* eslint-env node */


/**
 *  Problem: Reverse a string iteratively
 *
 *  Given: 'abcdef'
 *  Expect: 'fedcba'
 */

module.exports.iterative = function(subject) {
  var chr,k;
  var result = [];

  for(k in subject) {
    var chr = subject[k];
    result[(subject.length - 1) - k] = chr;
  }

  return result.join('');
};


/**
 *  Problem: Reverse a string recursively
 *
 *  Given: 'abcdef'
 *  Expect: 'fedcba'
 */

module.exports.recursive = function(subject) {
  var results = '';

  //swap the last element to the first element
  function swap(values) {
    var value = values.pop(); //last element

    //no more values left. return
    if(!value) {
      return results;
    }

    //move the first element
    results += value;

    //continue
    return swap(values);
  }

  //start
  return swap(subject.split(''));
};

#!/usr/bin/env node
/* eslint-env node */

/**
 *  Problem: Find all permutations of a string
 *
 *  Given: 'abc'
 *  Expect: [
 *    'abc',
 *    'acb',
 *    'bac',
 *    'bca',
 *    'cab',
 *    'cba'
 *  ]
 */

module.exports.solve = function(subject) {
  var perms = [];

  function permutation(prefix, str) {
    var ln = str.length;

    if(!ln) {
      perms.push(prefix);
    } else {
      for(var k=0; k < ln; k++) {
        var rest = str.substring(0, k) + str.substring(k+1, ln);
        permutation(prefix + str[k], rest);
      }
    }
  }


  permutation('', subject);

  return perms;
}



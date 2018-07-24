#!/usr/bin/env node

/* eslint-env node */

/**
 * Problem: Find the first non-repeated character in a String
 *
 *  Given: 'bbbbcbbbbacd'
 *  Expect: 'a'
 */


//count all the characters in a string
function getCharacterCounts(str) {
  var counts = []; //use array to guarantee order

  str.split('').every(function(char) {

    if(!counts[char]) {
      counts[char] = 0;
    }

    counts[char] += 1;

    return true;
  });

  return counts;
}

module.exports.find = function(subject) {
  var counts = getCharacterCounts(subject);
  var first, char;

  for(char in counts) {

    if(counts[char] === 1) {
      first = char;
      break; //don't keep looping
    }
  }


  return first;
};

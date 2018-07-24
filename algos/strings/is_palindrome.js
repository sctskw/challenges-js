#!/usr/bin/env node

/* eslint-env node */

/**
 *  Problem: determine if a String is an Anagram
 *
 *  Given: 'racecar'
 *  Expect: true
 *
 *  Given: 'racer'
 *  Expect: false
 */



module.exports.check = function(subject) {
  return subject.split('').reverse().join('') === subject;
};

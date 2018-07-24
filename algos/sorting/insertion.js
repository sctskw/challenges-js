#!/usr/bin/env node

/* eslint-env node */


/**
 * Problem: InsertionSort
 *
 *  Given: [4, 8, 6, 5, 2]
 *  Expect: [2, 4, 5, 6, 8]
 *
 */

module.exports.sort = function(subject) {

  var k, j, min;
  var len = subject.length;


  //start at second position in list
  for(k=1; k < len; k++) {
    min = subject[k]; //initial position value

    j = k - 1; //prevision position

    //move all values greater than initial up
    while(j >= 0 && subject[j] > min) {
      subject[j+1] = subject[j]; //move value up a position
      j = j - 1; //decrease position until hits beginning
    }

    subject[j+1] = min; //insert min value into open position

  }

  return subject
}

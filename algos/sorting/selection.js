#!/usr/bin/env node

/* eslint-env node */


/**
 * Problem: SelectionSort
 *
 *  Given: [4, 8, 6, 5, 2]
 *  Expect: [2, 4, 5, 6, 8]
 *
 */

module.exports.sort = function(subject) {

  var k, j, min, swap;
  var len = subject.length;

  for(k=0; k < len-1; k++) {

    min = k; //set the minimum index for left array

    //compare the following values in right array
    for(j=k+1; j < len; j++) {

      //compare value with largest in left array
      if(subject[j] < subject[min]) {
        min = j; //set the new min
      }

      //the left array min index has changed
      if(min != k) {

        swap = subject[k]; //hold for swap
        subject[k] = subject[min]; //swap the current min for the new min
        subject[min] = swap; //swap the old min to old min position

        min = k; //reset min (new array length)
      }
    }


  }


  return subject
}

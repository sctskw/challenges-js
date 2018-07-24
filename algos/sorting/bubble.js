#!/usr/bin/env node
/* eslint-env node */


/**
 * Problem: BubbleSort
 *
 *  Given: [4, 8, 6, 5, 2]
 *  Expect: [2, 4, 5, 6, 8]
 *
 */


module.exports.sort = function(subject) {
  var noom = subject.length;
  var k, curr, prev, offset;

  while(noom > 0) {

    var offset = 0;

    for(k=1; k < noom; k++) {

      curr = subject[k];
      prev = subject[k-1];

      if(prev > curr) {

        //swap
        subject[k-1] = curr;
        subject[k] = prev;

        offset = k;
      }

    }

    noom = offset;

  }


  return subject;
}

#!/usr/bin/env node

/* eslint-env node */


/**
 * Problem: MergeSort
 *
 *  Given: [4, 8, 6, 5, 2]
 *  Expect: [2, 4, 5, 6, 8]
 *
 */


function merge(left, right) {

  var result = [];
  var idxLeft = 0;
  var idxRight = 0;

  while(idxLeft < left.length && idxRight < right.length) {

    if(left[idxLeft] < right[idxRight]) {
      result.push(left[idxLeft++]);
    } else {
      result.push(right[idxRight++]);
    }
  }

  return result.concat(left.slice(idxLeft)).concat(right.slice(idxRight));


}

function mergeSort(subject) {

  var len = subject.length;

  if(len < 2) {
    //easy to sort these
    return subject;
  }

  var middle = ~~(len/2); //floor it
  var left = subject.slice(0, middle); //left node
  var right = subject.slice(middle); //right node (the rest)

  var args = merge(mergeSort(left), mergeSort(right));

  args.unshift(0, len);
  subject.splice.apply(subject, args);

  return subject
}


module.exports.sort = mergeSort;


#!/usr/bin/env node

const A =[2, 17, 3, 34, 3, 1, 12, 33];


function merge(left, right) {

  let result = [];
  let l = 0;
  let r = 0;

  while (l < left.length && r < right.length) {

    if(left[l] <= right[r]) {
      result.push(left[l++]);
    } else {
      result.push(right[r++]);
    }
  }

  if(left) result = result.concat(left.slice(l));
  if(right) result = result.concat(right.slice(r));

  return result;
}

function msort(arr) {

  if(arr.length === 1) return arr;

  let mid = arr.length / 2;
  let left = msort(arr.slice(0, mid));
  let right = msort(arr.slice(mid));

  return merge(left, right);

}

console.log(msort(A));

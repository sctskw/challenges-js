function toSubArray (A) {
  if (A.length === 1) return A;

  let subs = [];

  for (let i = 0; i < A.length; i++) {
    for (let j = i; j < A.length; j++) {
      let sub = A.slice(i, j);
      if (sub.length) subs.push(sub);
    }
  }

  return subs;
}

function toSubArrayMin (A) {
  if (A.length === 1) return A;

  let subs = [];

  return subs;
}

// NOTE: this is a powerset, and is not contiguous as a SubArray
function toSubArrayBit (A) {
  let size = Math.pow(2, A.length);
  let pad = (size - 1).toString(2).length;
  let count = 0;
  let rep = null;
  let subs = new Array(size);
  let sub = null;

  while (count < size) {
    rep = count.toString(2).padStart(pad, '0');
    sub = [];

    for (let i = 0; i < rep.length; i++) {
      if (rep[i] === '1') sub.push(A[i]);
    }

    if (sub.length) subs.push(sub);

    count++;
  }

  return subs;
}

var subarrayBitwiseORs = function (A) {
  let subs = toSubArrayMin(A);
  let total = 0;

  console.log(subs);

  if (subs.length === 1) return 1;

  return total;
};

module.exports = subarrayBitwiseORs;

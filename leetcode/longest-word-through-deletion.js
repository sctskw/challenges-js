#!/usr/bin/env node

const CASES = require('./test-cases.json');

// const S = 'abpcplea';
// const D = ['ale', 'apple', 'monkey', 'plea'];

// const S = 'abpcplea';
// const D = ['a', 'b', 'c'];

// console.log(findLongestWord(S, D));
console.log(findLongestWord(CASES.subject, CASES.words));

function findLongestWord (subject, words) {
  let subsets = words.filter(function (word) {
    return isSubset(subject, word);
  });

  return longest(subsets);
}

function longest (words) {
  if (!words.length) return '';

  let sorted = Array.prototype.slice.call(words)
    .sort(function (a, b) {
      return b.length - a.length;
    });

  if (sorted.length === 1) return sorted[0];

  let maxLen = sorted[0].length;

  let results = sorted.filter(function (word) {
    return word.length === maxLen;
  });

  if (results.length === 1) return results[0];

  return results.sort(function (a, b) {
    return a.localeCompare(b);
  })[0];
}

function isSubset (subject, word) {
  let chars = word.split('');

  if (word === subject) return true;
  if (word.length >= subject.length) return false;

  let isSubset = false;
  let lastIdx = 0;
  let rest = null;

  for (let i = 0; i < chars.length; i++) {
    rest = subject.slice(lastIdx);
    let idx = rest.indexOf(chars[i]);

    if (!rest || idx < 0) {
      isSubset = false;
      break;
    }

    isSubset = true;
    lastIdx = lastIdx + idx + 1;
  }

  return isSubset;
}

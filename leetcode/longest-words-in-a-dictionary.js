#!/usr/bin/env node

const dict = ['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple'];
// const dict = ['yo', 'ew', 'fc', 'zrc', 'yodn', 'fcm', 'qm', 'qmo', 'fcmz', 'z', 'ewq', 'yod', 'ewqz', 'y'];

// const dict = ['ogz', 'eyj', 'e', 'ey', 'hmn', 'v', 'hm', 'ogznkb', 'ogzn', 'hmnm', 'eyjuo', 'vuq', 'ogznk', 'og', 'eyjuoi', 'd'];

// const dict = ['ts', 'e', 'x', 'pbhj', 'opto', 'xhigy', 'erikz', 'pbh', 'opt', 'erikzb', 'eri', 'erik', 'xlye', 'xhig', 'optoj', 'optoje', 'xly', 'pb', 'xhi', 'x', 'o'];

// const dict = ['m', 'mo', 'moc', 'moch', 'mocha', 'l', 'la', 'lat', 'latt', 'latte', 'c', 'ca', 'cat'];

console.log(longestWord(dict));

function longestWord (words) {
  let sorted = words.sort().reverse();
  let storage = {};

  sorted.forEach(function (word) {
    for (let i = 0; i < word.length; i++) {
      let prefix = word.slice(0, i + 1);

      if (!prefix) continue;
      if (sorted.indexOf(prefix) < 0) break;

      if (!storage[word]) storage[word] = [];

      storage[word].push(prefix);
    }
  });

  let keys = Object
    .keys(storage)
    .filter(function (word) {
      if (storage[word].length !== word.length) return false;
      return true;
    })
    .sort(function (a, b) {
      return b.length - a.length;
    });

  let top = keys[0];

  keys = keys.filter(function (word) {
    return word.length === top.length;
  });

  return keys.sort(function (a, b) {
    return a.localeCompare(b);
  })[0];
}

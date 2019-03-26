function reverseBitsCheat(n) {
  return parseInt(n.toString(2).split('').reverse().join('').padEnd(32, '0'), 2);
};

module.exports = reverseBitsCheat;

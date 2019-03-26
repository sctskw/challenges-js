
function calculate(x, y) {

  let xor = x ^ y;
  let count = 0;

  while(xor > 0) {
    if(xor & 1) count += 1
    xor = xor >> 1
  }

  return count;

}

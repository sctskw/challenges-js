function fib (a, b, n) {
  console.log(b)
  return n ? fib(b, a + b, n - 1) : a
}

console.log('=>', fib(0, 1, 11))

// modified fib
function fibMod (a, b, n) {
  return n > 1 ? fibMod(b, a + Math.pow(b, 2), n - 1) : a
}

// NOTE: not possible in JS!!!
console.log('=>', fibMod(0, 1, 10))

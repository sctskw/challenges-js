const p1 = 'tacocat'
const p2 = 'Egad! Loretta has Adams as mad as a hatter. Old age!'
const p3 = 'notapalindrome'

function isPalindrome (str) {
  let value = str.replace(/[!?.*_()<>\s]/ig, '').toLowerCase()
  let len = value.length
  let first = value.slice(0, Math.ceil(len / 2))
  let last = value.slice(Math.ceil(len / 2) * -1)

  // reverse the string
  let flip = last.split('').reverse().join('')

  return first === flip
}

console.log(isPalindrome(p1), p1)
console.log(isPalindrome(p2), p2)
console.log(isPalindrome(p3), p3)

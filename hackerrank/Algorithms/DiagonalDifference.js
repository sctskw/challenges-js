/**
a = [[0,0] + [1,1] + [2,2]]
b = [[0,2] + [1,1] + [2,0]]
**/

const INPUT = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
]

/**
a = [[0,0] + [1,1] + [2,2], [3,3]]
b = [[0,3] + [1,2] + [2,1], + [3, 0]]
**/
const INPUT2 = [
  [11, 2, 4, 8],
  [4, 5, 6, 9],
  [10, 8, -12, 10],
  [10, 8, -12, 11]
]

function findAbsoluteDiff (values) {
  let h = values.length
  let a = []
  let b = []

  for (let i = 0; i < h; i++) {
    let row = values[i]
    let rlen = row.length

    for (let j = 0; j < rlen; j++) {
      let value = row[j]

      if (i === j) a.push(value)
      if ((i + j) === rlen - 1) b.push(value)
    }
  }

  return Math.abs(sum(a) - sum(b))
}

function sum (arr) {
  return arr.reduce((memo, val) => {
    return memo + val
  }, 0)
}

console.log(findAbsoluteDiff(INPUT))
console.log(findAbsoluteDiff(INPUT2))

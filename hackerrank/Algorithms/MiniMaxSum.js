function miniMaxSum (values) {
  let min = values.sort().slice(0, values.length - 1)
  let max = values.sort().reverse().slice(0, values.length - 1)

  console.log(sum(min), sum(max))
}

function sum (values) {
  return values.reduce((sum, val) => {
    return sum + val
  }, 0)
}

miniMaxSum([1, 2, 3, 4, 5])

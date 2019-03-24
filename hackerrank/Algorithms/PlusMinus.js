const INPUT = [-4, 3, -9, 0, 4, 1]

// const INPUT2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10]

function round (val) {
  return parseFloat(val || 0).toFixed(6)
}

function plusMinus (arr) {
  let values = []
  let denom = arr.length

  if (denom > 100) return false

  arr.forEach((value) => {
    let val = parseFloat(value)

    if (isNaN(val) || val > 100 || val < -100) return false

    if (val < 0) values[-1] = (values[-1] || 0) + 1
    if (val === 0) values[0] = (values[0] || 0) + 1
    if (val > 0) values[1] = (values[1] || 0) + 1
  })

  console.log(round(values[1] / denom))
  console.log(round(values[-1] / denom))
  console.log(round(values[0] / denom))
}

plusMinus(INPUT)

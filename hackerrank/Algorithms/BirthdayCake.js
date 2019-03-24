function birthdayCakeCandles (values) {
  let max = Math.max.apply(null, values)
  let candles = values.reduce((memo, val) => {
    if (val === max) memo++
    return memo
  }, 0)

  console.log(candles)
}

birthdayCakeCandles([3, 2, 1, 3])

function staircase (size) {
  for (let i = 0; i < size; i++) {
    let values = []
    for (let j = 0; j < i + 1; j++) {
      values.push('#')
    }
    console.log(values.join('').padStart(size))
  }
}

staircase(6)

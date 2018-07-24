const GAME = require('./setup.js')

/**
 *
 * puzzles must be in 2D Array form:
 *
 * [
 *    [00, 01, 02, 03, 04, 05, 06, 07, 08]
 *    [10, 11, 12, 13, 14, 15, 16, 17, 18]
 *    [20, 21, 22, 23, 24, 25, 26, 27, 28]
 *    [30, 31, 32, 33, 34, 35, 36, 37, 38]
 *    [40, 41, 42, 43, 44, 45, 46, 47, 48]
 *    [50, 51, 52, 53, 54, 55, 56, 57, 58]
 *    [60, 61, 62, 63, 64, 65, 66, 67, 68]
 *    [70, 71, 72, 73, 74, 75, 76, 77, 78]
 *    [80, 81, 82, 83, 84, 85, 86, 87, 88]
 * ]
 *
 * rules:
 * A puzzle is solved if the squares in each unit are filled with
 * a permutation of the digits 1 to 9.
 *
 * If a square has only one possible value, then eliminate that value
 * from the square’s peers.
 *
 * If a unit has only one possible place for a value, then put the value there.
 */
module.exports.solve = function (puzzle, opts) {
  let game = GAME.setup(puzzle, opts)

  console.log(`game size: ${game.size}`)

  solve(game)

  console.log('game has been solved!')
}

function solve (game) {
  let state = game.state.slice()
  let next = getNextSquare(game, state)
  console.log(next)
  return solveNextSquare(game, state, next)
}

function isSolved (squares) {
  return squares.every((row) => {
    return row.every((col) => {
      return col.length === 1
    })
  })
}

function getNextSquare (game, squares) {
}

function solveNextSquare (game, squares, next) {
  // bad case?
  if (!next || !squares) return false

  // puzzle is solved, bail
  if (isSolved(squares)) return true

  setValue(squares, next, '4')
}

function setValue (squares, square, value) {
  if (square.value === value) return true
  if (square.values === square.value) return false
  if (!square.values.includes(value)) return false

  return false
}

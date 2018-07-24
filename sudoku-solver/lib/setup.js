// TODO: can we dynamically calculate these?
const VALID_SIZES = {
  4: [2, 2],
  6: [2, 3],
  8: [2, 4],
  9: [3, 3],
  10: [2, 5],
  12: [3, 4],
  14: [2, 7],
  15: [3, 5],
  16: [4, 4]
}

// TODO: limited to 9x9
const VALID_VALUES = '123456789'

// TODO: limited to 26x26
const ROW_LABELS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// provide access
module.exports.VALID_VALUES = VALID_VALUES
module.exports.ROW_LABELS = ROW_LABELS

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
 */
module.exports.setup = function (puzzle, opts) {
  let size = VALID_SIZES[puzzle.length]

  if (!size) throw new Error('bad puzzle size')

  return createState(puzzle, size, opts)
}

function createState (puzzle, size, opts) {
  let board = createBoard(puzzle, size, opts)
  let boxes = createBoxes(board, size, opts)
  let squares = createSquares(board, size, opts)

  for (let s in squares) {
    let square = squares[s]
    square.box = getBox(boxes, square)
    square.peers = getPeers(squares, boxes, square)
    square.value = getSquareValue(puzzle, squares, square)
    square.values = getPossibleValues(puzzle, squares, square)
  }

  const Game = {
    size: Object.keys(squares).length,
    puzzle: puzzle,
    board: board,
    boxes: boxes,
    squares: squares
  }

  // dynamic property for current state of the board
  Object.defineProperty(Game, 'draw', {
    get: function () {
      return Game.state.map((row) => {
        return row.map((col) => {
          return col.toString().padStart(3).padEnd(6)
        }).join('|')
      })
    }
  })

  Object.defineProperty(Game, 'state', {
    get: function () {
      return Game.board.reduce((memo, row) => {
        let values = row.map((key) => {
          let square = Game.squares[key]
          return parseInt(square.value) || square.values
        })

        memo.push(values)

        return memo
      }, [])
    }
  })

  return Game
}

function createBoard (puzzle, size, opts) {
  let rows = ROW_LABELS.toString()

  if (puzzle.length > (size[0] * size[1])) {
    throw new Error(`invalid puzzle length: ${puzzle.length}`)
  }
  return puzzle.reduce((memo, row, idx) => {
    memo[idx] = row.map((col, colIdx) => {
      return [rows[idx], colIdx + 1].join('')
    })
    return memo
  }, [])
}

function createBoxes (board, size) {
  let height = size[0]
  let width = size[1]
  let columns = (height * width)

  if (!height || !width) throw new Error('invalid box size')

  let boxes = board.reduce((memo, cols, rowIdx) => {
    cols.forEach((col, colIdx) => {
      let rowVal = rowIdx + 1
      let colVal = colIdx + 1
      let row = [
        Math.ceil((rowVal / columns) * height),
        Math.ceil((colVal / columns) * width)
      ]

      if (!memo[row]) memo[row] = []

      memo[row].push(col)
    })

    return memo
  }, [])

  return Object.values(boxes)
}

function createSquares (puzzle, size) {
  if (puzzle.length > (size[0] * size[1])) {
    throw new Error(`invalid puzzle length: ${puzzle.length}`)
  }

  let squares = puzzle.reduce((memo, row, rowIdx) => {
    row.forEach((label, colIdx) => {
      let square = createSquare(rowIdx, colIdx, label, size)
      memo[square.label] = square
    })
    return memo
  }, {})

  return squares
}

// create a 3x3 square
// TODO: how to determine sizes from input?
function createSquare (row, col, label, size = [3, 3]) {
  return {
    label: label,
    row: row,
    col: col,
    column: col, // alias
    size: size,
    peers: [],
    box: null,
    value: null
  }
}

function getBox (boxes, square) {
  return square.box || boxes.findIndex((box, idx) => {
    return box.includes(square.label)
  })
}

function getBoxPeers (squares, boxes, square) {
  return boxes[getBox(boxes, square)]
    .map((box) => {
      return squares[box]
    })
}

function getPeers (squares, boxes, square) {
  let rows = getRowPeers(squares, square)
  let box = getBoxPeers(squares, boxes, square)
  let all = [].concat(rows, box)

  // create a unique set
  return all.reduce((memo, sq) => {
    if (!sq.label) return memo
    if (memo.includes(sq.label)) return memo

    memo.push(sq.label)

    return memo
  }, [])
}

// get the row and column peers
function getRowPeers (squares, square) {
  let peers = []

  for (let sq in squares) {
    let peer = squares[sq]
    if (peer.label === square.label) continue
    if (peer.row === square.row) peers.push(peer)
    if (peer.col === square.col) peers.push(peer)
  }

  return peers
}

function getSquareValue (puzzle, squares, square) {
  return square.value || puzzle[square.row][square.col]
}

function getPossibleValues (puzzle, squares, square) {
  let valid = VALID_VALUES.toString()
  let current = getSquareValue(puzzle, squares, square)

  if (valid.includes(current)) return current

  let peered = square.peers.reduce((memo, peer) => {
    let value = getSquareValue(puzzle, squares, squares[peer])

    if (memo.includes(value)) return memo

    if (valid.includes(value)) memo.push(value)

    return memo
  }, []).sort()

  return valid.split('').filter((val) => {
    return !peered.includes(val)
  }).sort().join('')
}

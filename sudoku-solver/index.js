const parser = require('./lib/parser.js')
const solver = require('./lib')

try {
  let args = parser.parse(process.argv.slice(2))
  let puzzle = args.puzzle

  if (!puzzle) throw new Error(`please provide a puzzle`)

  solver.solve(puzzle)
} catch (err) {
  console.log(`${err} \n`)
  parser.usage()
}

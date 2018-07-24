const path = require('path')
const solver = require('lib')
const parser = require('lib/parser')

const FILE = path.resolve(__dirname, './mock.input.txt')
const INPUT = parser.parse([`--file=${FILE}`])

test('solver has function #solve()', () => {
  expect(solver.solve).toBeDefined()
  expect(solver.solve).toBeInstanceOf(Function)
})

test('solver rejects bad puzzles', () => {
  expect(()=> {
    solver.solve([])
  }).toThrow()
})

test('solver solves a puzzle', () => {
  solver.solve(INPUT.puzzle, INPUT)
})

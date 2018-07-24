const path = require('path')
const parser = require('lib/parser.js')

const INPUT_OK = '000100000|020003000|000000000|011030000|111000000|000000000|011030000|111000000|000000000'
const INPUT_BAD = '000100000|020003000|000000000|01030000|111000000|000000000|011030000|111000000|000000000'

const FILE_ABS = path.resolve(__dirname, './mock.input.txt')
const FILE_REL = path.relative('.', FILE_ABS)
const FILE_BAD = path.resolve(__dirname, './mock.bad.input.txt')

test('parser has function #parse()', () => {
  expect(parser.parse).toBeDefined()
  expect(parser.parse).toBeInstanceOf(Function)
})

test('parser parses input string with pipe delimited', () => {
  let parsed = parser.parse([`--input=${INPUT_OK}`])

  expect(parsed.puzzle).toBeDefined()
  expect(parsed.puzzle).toHaveLength(9) // TODO: hardcoded
})

test('parser parses input string with comma delimited', () => {
  let parsed = parser.parse([`--input=${INPUT_OK}`])

  expect(parsed.puzzle).toBeDefined()
  expect(parsed.puzzle).toHaveLength(9) // TODO: hardcoded
})

test('parser reads from relative file', () => {
  let parsed = parser.parse([`--file=${FILE_REL}`])

  expect(parsed.puzzle).toBeDefined()
  expect(parsed.puzzle).toHaveLength(9) // TODO: hardcoded
})

test('parser reads from absolute file', () => {
  let parsed = parser.parse([`--file=${FILE_ABS}`])

  expect(parsed.puzzle).toBeDefined()
  expect(parsed.puzzle).toHaveLength(9) // TODO: hardcoded
})


test('parser throws error for bad puzzle', () => {

  expect(() => {
    parser.parse([`--input=${INPUT_BAD}`])
  }).toThrow()

  expect(() => {
    parser.parse([`--file=${FILE_BAD}`])
  }).toThrow()

})


const path = require('path')
const fs = require('fs')
const minimist = require('minimist')

// show command line usage of this parser
module.exports.usage = function () {
  console.log('usage:')
}

// parse command line string into consumable arguments
module.exports.parse = function argParser (args) {
  let options = minimist(args)
  let parsed = {
    verbose: options.verbose || true
  }

  if (options.file) parsed.puzzle = parseFile(options.file, parsed)
  if (options.input) parsed.puzzle = parseInput(options.input, parsed)

  return parsed
}

// parse a file. determine whether it's absolute or relative first
function parseFile (file) {
  let isAbsolute = file.charAt(0) === '/'
  let input = isAbsolute ? parseAbsFile(file) : parseRelFile(file)

  // remove blank lines and convert newlines to a pipe |
  let value = input.trim().replace(/\n/ig, '|')

  return parseInput(value)
}

// parse a file with absolute path
function parseAbsFile (file) {
  return fs.readFileSync(path.resolve(file)).toString()
}

// parse a file with relative path
function parseRelFile (file) {
  return fs.readFileSync(path.resolve(__dirname, '..', file)).toString()
}

// parse string input into consumable Array/Object
function parseInput (input) {
  let delimiter = /(\||,)/ig // TODO: configurable
  let rows = input.split(delimiter)
  let len = 0

  return rows.reduce(function (memo, row) {
    if (delimiter.test(row)) return memo

    // save this as the initial row length so all other rows can follow suit
    if (!len) len = row.length

    // skip extra lines
    if (len > 0 && memo.length > (len - 1)) return memo

    // TODO: can't hardcode this if we want different sized puzzles
    if (len > 0 && row.length !== len) throw new Error('invalid row length')

    // break row into an array of chars by splitting after each char
    memo.push(row.split(''))

    return memo
  }, [])
}

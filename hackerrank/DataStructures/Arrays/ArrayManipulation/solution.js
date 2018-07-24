'use strict';

const fs = require('fs');
const path = require('path');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.trim().split('\n').map(str => str.trim());

  main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH || path.resolve(__dirname, 'output'));
  const nm = readLine().split(' ');
  const n = parseInt(nm[0], 10);
  const m = parseInt(nm[1], 10);

  if(n < 3) throw "invalid min length of N";
  if(n > Math.pow(10, 7)) throw "invalid max length of N";

  let res = calculateMax(n, m);

  console.log(res);

  ws.write(res + "\n");

  ws.end();
}

function calculateMax(n, m) {

  let amounts = [];
  let temp = [];

  for (let op = 0; op < m; op++) {

    let query = readLine().split(' ');
    let x = parseInt(query[0]) - 1; //get back to zero-based
    let y = parseInt(query[1]);
    let val = parseInt(query[2]);

    if(x > n || y > n) continue; //invalid input
    if(x > y) continue; //invalid input
    if(!val) continue;

    if(!amounts[x]) amounts[x] = 0;
    amounts[x] += val;

    if(y < n) {
      if(!amounts[y]) amounts[y] = 0;
      amounts[y] -= val;
    }


    for(x; x<y; x++) {
      if(!temp[x]) temp[x] = 0;
      temp[x] += val;
    }

  }

  let max = 0;
  let sum = 0;

  let all = amounts.reduce(function(memo, val) {

    if(val) memo.push(val);

    sum += val || 0;
    if(max < sum) max = sum;

    return memo;

  }, []);

  console.log(all);
  console.log(temp);

  return max;

}

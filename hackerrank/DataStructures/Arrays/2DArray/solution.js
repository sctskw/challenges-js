'use strict';

const fs = require('fs');

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

/*
 * Complete the array2D function below.
 *
  [0,0, 0,1, 0,2, 0,3, 0,4, 0,5]
  [1,0, 1,1, 1,2, 1,3, 1,4, 1,5]
  [2,0, 2,1, 2,2, 2,3, 2,4, 2,5]
  [3,0, 3,1, 3,2, 3,3, 3,4, 3,5]
  [4,0, 4,1, 4,2, 4,3, 4,4, 4,5]
  [5,0, 5,1, 5,2, 5,3, 5,4, 5,5]


  00 01 02
     11
  20 21 22

  01 02 03
     12
  21 22 23

  02 03 04
     13
  22 23 24


 */
function array2D(arr) {

  let len = arr.length;
  let hourGlasses = [];

  for(let i=0; i <= (len / 2); i++) {

    let row = arr[i];
    let jlen = row.length;

    for(let j=0; j <= (jlen / 2); j++) {

      let top = row.slice(j, (j + jlen/2));
      let middle = arr[i+1][j+1];
      let bottom = arr[i+2].slice(j, (j + jlen/2));

      hourGlasses.push([].concat(top, middle, bottom));

    }

  }

  return findMaxSum(hourGlasses);
}

function findMaxSum(arrs) {

  return arrs.reduce(function(max, arr) {

    let val = sum(arr);

    if(max === null || val > max) return val;

    return max;

  }, null);

}

function sum(arr) {
  return arr.reduce(function(memo, val) {
    return memo += val;
  }, 0);

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let arrRowItr = 0; arrRowItr < 6; arrRowItr++) {
        arr[arrRowItr] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = array2D(arr);

    ws.write(result + "\n");

    ws.end();
}


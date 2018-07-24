
/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function twoPass(input, target) {
  var compliments = {}; //O(n) space
  let result = [];

  if(input.length < 2) return false;

  //O(n) time complexity
  for(let i=0; i<input.length; i++) {
    compliments[target - input[i]] = i;
  }

  //O(n) time complexity
  for(let i=0; i<input.length; i++) {
    let val = input[i];
    let comp = compliments[val];

    if(comp + val === target) {
      result.push([val, comp]);
    }
  }

  console.log(result);

  return result.length > 0;
}


/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * *NOTE: Time Comp is still O(n) but we only do a single pass
 */
function onePass(input, target) {

  let comps = {}; //O(n) space
  let results = [];

  //O(n) time complexity (linear)
  for(let i = 0; i < input.length; i++) {

    let val = input[i];
    let comp = target - val;

    if(comps[val] === comp) {
      results.push([val, comp]);
      delete comps[comp]; //save space?
    } else {
      comps[comp] = val;
    }

  }

  console.log(results);

  return results.length > 0;
}


/**
 * Time Complexity: O(nlogn)
 * Space Complexity: O(1)
 */
function inPlace(input, target) {

  let values = input.sort(function(a, b) { return a - b }); //O(nlogn)
  let left = 0;
  let right = values.length - 1;
  let results = [];


  while(left < right) {
    let lVal = values[left];
    let rVal = values[right];
    let sum = lVal + rVal;

    if(sum === target) {
      results.push([lVal, rVal]);
      left++;
    } else if( sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    }

  }

  console.log(results);

  return results.length > 0;
}


/**
 * Questions about Input
 *
 * 1. Is it sorted?
 * 2. Is it all unique values?
 * 3. Should we support other data types?
 * 4. Should we validate it?
 *
 */

var input = [3, 8, 10, 9, 4, 5, 11, 7];

console.log(twoPass(input, 15));
console.log(onePass(input, 15));
console.log(inPlace(input, 15));

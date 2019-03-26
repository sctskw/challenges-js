/**

Given an array of integers, return indices of the two numbers such that
they add up to a specific target.

You may assume that each input would have exactly one solution, and you
may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,

return [0, 1].

*/

function twoSum(nums, target) {

  let num = 0;
  let map = {};
  let result = [];

  for(let i=0; i<nums.length; i++) {

    num = nums[i];

    let diff = target - num;

    // console.log('t=', target, 'i=', i, 'num=', num, 'diff=', diff);

    // we've come across the diff value before. we're done
    if(map.hasOwnProperty(diff)) {
      result = [map[diff], i];
      break;
    }

    // cache for later
    map[num] = i;
  }

  return result;
};

module.exports = twoSum;

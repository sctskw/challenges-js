/*
 Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.

Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

function lengthOfLongestSubstring (s) {
  let result = '';
  let sub = '';
  let i = 0; let j = 0; let char;

  for (i; i < s.length; i++) {
    for (j = i + 1; j <= s.length; j++) {
      sub = s.substring(i, j);
      if (sub.length < result.length) continue;
      if (!unique(sub)) continue;
      result = sub;
    }
  }

  console.log('result: ', result);

  return result.length;
};

function unique (str) {
  let seen = {};
  let result = false;

  for (let i = 0; i < str.length; i++) {
    if (seen[str[i]]) {
      result = false;
      break;
    }
    seen[str[i]] = true;
    result = true;
  }

  return result;
}

module.exports = lengthOfLongestSubstring;

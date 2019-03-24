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
  let max = '';
  let curr = '';
  let char = s[0]; // prefill with first one
  let start = 0;
  let end = 1;
  let len = s.length;

  if (!len) return 0;
  if (len === 1) return 1;

  while (start < len && end <= len) {
    console.log(`[${char}] curr: ${curr}`);

    let idx = curr.indexOf(char);
    curr = s.substring(start, end);

    console.log('idx: ', idx, 'start:', start, 'end:', end);

    if (idx >= 0) {
      curr = curr.substring(idx + 1);
      start = end - curr.length;
    }

    if (curr.length > max.length) max = curr;

    char = s[end];
    end++;
  }

  console.log('max: ', max, 'curr: ', curr);

  return max.length;
};

module.exports = lengthOfLongestSubstring;

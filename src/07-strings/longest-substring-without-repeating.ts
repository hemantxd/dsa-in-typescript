/**
 * Problem: Longest Substring Without Repeating Characters
 * --------------------------------------------------------
 * Given a string s, find the length of the longest substring without
 * repeating characters.
 *
 * Examples:
 *   lengthOfLongestSubstring("abcabcbb")  → 3   ("abc")
 *   lengthOfLongestSubstring("bbbbb")     → 1   ("b")
 *   lengthOfLongestSubstring("pwwkew")    → 3   ("wke")
 */

// TODO: Implement this function
function lengthOfLongestSubstring(s: string): number {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: "abcabcbb", expected: 3 },
    { input: "bbbbb", expected: 1 },
    { input: "pwwkew", expected: 3 },
    { input: "", expected: 0 },
    { input: " ", expected: 1 },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    try {
      const result = lengthOfLongestSubstring(input);
      if (result === expected) {
        console.log(`✅ lengthOfLongestSubstring("${input}") = ${result}`);
        passed++;
      } else {
        console.log(`❌ lengthOfLongestSubstring("${input}") = ${result} (expected ${expected})`);
      }
    } catch (e: any) {
      console.log(`❌ lengthOfLongestSubstring("${input}") threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
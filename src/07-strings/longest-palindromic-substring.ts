/**
 * Problem: Longest Palindromic Substring
 * ----------------------------------------
 * Given a string s, return the longest palindromic substring in s.
 *
 * Examples:
 *   longestPalindrome("babad")  → "bab" or "aba"
 *   longestPalindrome("cbbd")   → "bb"
 *   longestPalindrome("a")      → "a"
 */

// TODO: Implement this function
function longestPalindrome(s: string): string {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: "babad", expected: ["bab", "aba"] }, // either is valid
    { input: "cbbd", expected: ["bb"] },
    { input: "a", expected: ["a"] },
    { input: "", expected: [""] },
    { input: "ac", expected: ["a", "c"] },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    try {
      const result = longestPalindrome(input);
      const pass = expected.includes(result);
      if (pass) {
        console.log(`✅ longestPalindrome("${input}") = "${result}"`);
        passed++;
      } else {
        console.log(`❌ longestPalindrome("${input}") = "${result}" (expected one of ${JSON.stringify(expected)})`);
      }
    } catch (e: any) {
      console.log(`❌ longestPalindrome("${input}") threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
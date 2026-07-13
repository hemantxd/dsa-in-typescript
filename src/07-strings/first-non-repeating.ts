/**
 * Problem: First Non-Repeating Character
 * ----------------------------------------
 * Given a string s, find the first non-repeating character and return
 * its index. If it doesn't exist, return -1.
 *
 * Examples:
 *   firstUniqChar("leetcode")        → 0   (l is first unique)
 *   firstUniqChar("loveleetcode")    → 2   (v is first unique)
 *   firstUniqChar("aabb")            → -1  (no unique char)
 */

// TODO: Implement this function
function firstUniqChar(s: string): number {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: "leetcode", expected: 0 },
    { input: "loveleetcode", expected: 2 },
    { input: "aabb", expected: -1 },
    { input: "", expected: -1 },
    { input: "a", expected: 0 },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    try {
      const result = firstUniqChar(input);
      if (result === expected) {
        console.log(`✅ firstUniqChar("${input}") = ${result}`);
        passed++;
      } else {
        console.log(`❌ firstUniqChar("${input}") = ${result} (expected ${expected})`);
      }
    } catch (e: any) {
      console.log(`❌ firstUniqChar("${input}") threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
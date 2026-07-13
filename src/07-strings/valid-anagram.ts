/**
 * Problem: Valid Anagram
 * -----------------------
 * Given two strings s and t, return true if t is an anagram of s.
 * An anagram is a word formed by rearranging letters of another word.
 *
 * Examples:
 *   isAnagram("anagram", "nagaram")  → true
 *   isAnagram("rat", "car")          → false
 *   isAnagram("a", "a")             → true
 */

// TODO: Implement this function
function isAnagram(s: string, t: string): boolean {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { s: "anagram", t: "nagaram", expected: true },
    { s: "rat", t: "car", expected: false },
    { s: "a", t: "a", expected: true },
    { s: "", t: "", expected: true },
    { s: "ab", t: "a", expected: false },
  ];

  let passed = 0;
  for (const { s, t, expected } of tests) {
    try {
      const result = isAnagram(s, t);
      if (result === expected) {
        console.log(`✅ isAnagram("${s}", "${t}") = ${result}`);
        passed++;
      } else {
        console.log(`❌ isAnagram("${s}", "${t}") = ${result} (expected ${expected})`);
      }
    } catch (e: any) {
      console.log(`❌ isAnagram("${s}", "${t}") threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
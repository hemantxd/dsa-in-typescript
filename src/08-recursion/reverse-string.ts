/**
 * Problem: Reverse a String (recursive)
 * --------------------------------------
 * Reverse the characters of a string using recursion.
 *
 * Examples:
 *   reverseString("hello") → "olleh"
 *   reverseString("a")     → "a"
 */

// ---------- SOLUTION ----------

function reverseString(s: string): string {
  if (s.length <= 1) return s; // base case
  return reverseString(s.slice(1)) + s[0];
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { s: "hello", expected: "olleh" },
    { s: "a", expected: "a" },
    { s: "", expected: "" },
    { s: "racecar", expected: "racecar" },
    { s: "TypeScript", expected: "tpircSepyT" },
  ];

  let passed = 0;
  for (const { s, expected } of tests) {
    const result = reverseString(s);
    if (result === expected) {
      console.log(`✅ reverseString("${s}") = "${result}"`);
      passed++;
    } else {
      console.log(`❌ reverseString("${s}") = "${result}" (expected "${expected}")`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
/**
 * Problem: Smallest Letter Greater Than Target
 * ----------------------------------------------
 * Given a sorted array of characters letters sorted in non-decreasing order,
 * and a character target, return the smallest character in letters that is
 * strictly greater than target. If no such character exists, wrap around
 * and return the first character.
 *
 * Examples:
 *   nextGreatestLetter(["c","f","j"], "a")  → "c"
 *   nextGreatestLetter(["c","f","j"], "c")  → "f"
 *   nextGreatestLetter(["x","x","y","y"], "z")  → "x"  (wrap around)
 *   nextGreatestLetter(["c","f","j"], "j")  → "c"  (wrap around)
 */

// TODO: Implement this function
function nextGreatestLetter(letters: string[], target: string): string {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { letters: ["c","f","j"], target: "a", expected: "c" },
    { letters: ["c","f","j"], target: "c", expected: "f" },
    { letters: ["x","x","y","y"], target: "z", expected: "x" },
    { letters: ["c","f","j"], target: "j", expected: "c" },
    { letters: ["c","f","j"], target: "k", expected: "c" },
  ];

  let passed = 0;
  for (const { letters, target, expected } of tests) {
    try {
      const result = nextGreatestLetter(letters, target);
      if (result === expected) {
        console.log(`✅ nextGreatestLetter([${letters}], "${target}") = "${result}"`);
        passed++;
      } else {
        console.log(`❌ nextGreatestLetter([${letters}], "${target}") = "${result}" (expected "${expected}")`);
      }
    } catch (e: any) {
      console.log(`❌ nextGreatestLetter([${letters}], "${target}") threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
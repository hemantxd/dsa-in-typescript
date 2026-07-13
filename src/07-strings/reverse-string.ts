/**
 * Problem: Reverse a String
 * --------------------------
 * Write a function that reverses a string in-place.
 *
 * Examples:
 *   reverseString(["h","e","l","l","o"])  → ["o","l","l","e","h"]
 *   reverseString(["H","a","n","n","a","h"])  → ["h","a","n","n","a","H"]
 */

// TODO: Implement this function
function reverseString(s: string[]): void {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: ["h","e","l","l","o"], expected: ["o","l","l","e","h"] },
    { input: ["H","a","n","n","a","h"], expected: ["h","a","n","n","a","H"] },
    { input: ["a"], expected: ["a"] },
    { input: [], expected: [] },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    try {
      const arr = [...input];
      reverseString(arr);
      const pass = JSON.stringify(arr) === JSON.stringify(expected);
      if (pass) {
        console.log(`✅ reverseString([${input}]) = [${arr}]`);
        passed++;
      } else {
        console.log(`❌ reverseString([${input}]) = [${arr}] (expected [${expected}])`);
      }
    } catch (e: any) {
      console.log(`❌ reverseString([${input}]) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
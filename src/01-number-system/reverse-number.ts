/**
 * Problem: Reverse Digits of a Number
 * ------------------------------------
 * Given an integer, reverse its digits.
 *
 * Examples:
 *   reverseNumber(1234)  → 4321
 *   reverseNumber(-123)  → -321
 *   reverseNumber(120)   → 21
 *   reverseNumber(0)     → 0
 */

// TODO: Implement this function
function reverseNumber(n: number): number {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: 1234, expected: 4321 },
    { input: -123, expected: -321 },
    { input: 120, expected: 21 },
    { input: 0, expected: 0 },
    { input: 5, expected: 5 },
    { input: 1000, expected: 1 },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    try {
      const result = reverseNumber(input);
      if (result === expected) {
        console.log(`✅ reverseNumber(${input}) = ${result}`);
        passed++;
      } else {
        console.log(`❌ reverseNumber(${input}) = ${result} (expected ${expected})`);
      }
    } catch (e: any) {
      console.log(`❌ reverseNumber(${input}) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
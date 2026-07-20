/**
 * Problem: Find Square Root of a Number (Integer)
 * -------------------------------------------------
 * Given a non-negative integer x, return the square root of x rounded
 * down to the nearest integer. You must NOT use built-in sqrt function.
 *
 * Examples:
 *   mySqrt(4)   → 2
 *   mySqrt(8)   → 2   (sqrt(8) ≈ 2.828, floor = 2)
 *   mySqrt(16)  → 4
 *   mySqrt(0)   → 0
 *   mySqrt(1)   → 1
 */

// TODO: Implement this function
function mySqrt(x: number): number {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: 4, expected: 2 },
    { input: 8, expected: 2 },
    { input: 16, expected: 4 },
    { input: 0, expected: 0 },
    { input: 1, expected: 1 },
    { input: 100, expected: 10 },
    { input: 2147395599, expected: 46339 },  // large number
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    try {
      const result = mySqrt(input);
      if (result === expected) {
        console.log(`✅ mySqrt(${input}) = ${result}`);
        passed++;
      } else {
        console.log(`❌ mySqrt(${input}) = ${result} (expected ${expected})`);
      }
    } catch (e: any) {
      console.log(`❌ mySqrt(${input}) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
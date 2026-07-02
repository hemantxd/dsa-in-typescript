/**
 * Problem: Find Missing Number (0 to n)
 * --------------------------------------
 * Given an array containing n distinct numbers taken from 0 to n,
 * find the one that is missing.
 *
 * Examples:
 *   missingNumber([3, 0, 1])        → 2
 *   missingNumber([0, 1])           → 2
 *   missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])  → 8
 *   missingNumber([0])              → 1
 */

// TODO: Implement this function
function missingNumber(nums: number[]): number {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: [3, 0, 1], expected: 2 },
    { input: [0, 1], expected: 2 },
    { input: [9, 6, 4, 2, 3, 5, 7, 0, 1], expected: 8 },
    { input: [0], expected: 1 },
    { input: [1], expected: 0 },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    try {
      const result = missingNumber(input);
      if (result === expected) {
        console.log(`✅ missingNumber([${input}]) = ${result}`);
        passed++;
      } else {
        console.log(`❌ missingNumber([${input}]) = ${result} (expected ${expected})`);
      }
    } catch (e: any) {
      console.log(`❌ missingNumber([${input}]) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
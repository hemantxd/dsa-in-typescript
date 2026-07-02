/**
 * Problem: Maximum Subarray Sum (Kadane's Algorithm)
 * --------------------------------------------------
 * Given an integer array, find the contiguous subarray (containing at
 * least one number) which has the largest sum and return its sum.
 *
 * Examples:
 *   maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])  → 6   (subarray [4, -1, 2, 1])
 *   maxSubarray([1])                                → 1
 *   maxSubarray([5, 4, -1, 7, 8])                  → 23
 */

// TODO: Implement this function
function maxSubarray(nums: number[]): number {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: [-2, 1, -3, 4, -1, 2, 1, -5, 4], expected: 6 },
    { input: [1], expected: 1 },
    { input: [5, 4, -1, 7, 8], expected: 23 },
    { input: [-1], expected: -1 },
    { input: [-2, -1], expected: -1 },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    try {
      const result = maxSubarray(input);
      if (result === expected) {
        console.log(`✅ maxSubarray([${input}]) = ${result}`);
        passed++;
      } else {
        console.log(`❌ maxSubarray([${input}]) = ${result} (expected ${expected})`);
      }
    } catch (e: any) {
      console.log(`❌ maxSubarray([${input}]) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
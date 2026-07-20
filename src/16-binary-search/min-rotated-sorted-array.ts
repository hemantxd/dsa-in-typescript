/**
 * Problem: Find Minimum in Rotated Sorted Array
 * -----------------------------------------------
 * Given a rotated sorted array of unique elements, find the minimum element.
 * Must be O(log n) time.
 *
 * Examples:
 *   findMin([3, 4, 5, 1, 2])     → 1
 *   findMin([4, 5, 6, 7, 0, 1, 2]) → 0
 *   findMin([11, 13, 15, 17])    → 11   (not rotated)
 *   findMin([1])                 → 1
 */

// TODO: Implement this function
function findMin(nums: number[]): number {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: [3, 4, 5, 1, 2], expected: 1 },
    { input: [4, 5, 6, 7, 0, 1, 2], expected: 0 },
    { input: [11, 13, 15, 17], expected: 11 },
    { input: [1], expected: 1 },
    { input: [2, 1], expected: 1 },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    try {
      const result = findMin(input);
      if (result === expected) {
        console.log(`✅ findMin([${input}]) = ${result}`);
        passed++;
      } else {
        console.log(`❌ findMin([${input}]) = ${result} (expected ${expected})`);
      }
    } catch (e: any) {
      console.log(`❌ findMin([${input}]) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
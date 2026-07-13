/**
 * Problem: Search in Rotated Sorted Array
 * ----------------------------------------
 * Given a rotated sorted array and a target, return the index of target.
 * If not found, return -1. O(log n) time required.
 *
 * Examples:
 *   search([4, 5, 6, 7, 0, 1, 2], 0)  → 4
 *   search([4, 5, 6, 7, 0, 1, 2], 3)  → -1
 *   search([1], 0)                     → -1
 */

// TODO: Implement this function
function search(nums: number[], target: number): number {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { nums: [4, 5, 6, 7, 0, 1, 2], target: 0, expected: 4 },
    { nums: [4, 5, 6, 7, 0, 1, 2], target: 3, expected: -1 },
    { nums: [1], target: 0, expected: -1 },
    { nums: [1, 3], target: 3, expected: 1 },
    { nums: [3, 1], target: 1, expected: 1 },
  ];

  let passed = 0;
  for (const { nums, target, expected } of tests) {
    try {
      const result = search(nums, target);
      if (result === expected) {
        console.log(`✅ search([${nums}], ${target}) = ${result}`);
        passed++;
      } else {
        console.log(`❌ search([${nums}], ${target}) = ${result} (expected ${expected})`);
      }
    } catch (e: any) {
      console.log(`❌ search([${nums}], ${target}) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
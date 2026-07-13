/**
 * Problem: First and Last Position in Sorted Array
 * -------------------------------------------------
 * Given a sorted array and a target, find the starting and ending
 * position of the target. Return [-1, -1] if not found.
 *
 * Examples:
 *   searchRange([5, 7, 7, 8, 8, 10], 8)  → [3, 4]
 *   searchRange([5, 7, 7, 8, 8, 10], 6)  → [-1, -1]
 *   searchRange([], 0)                    → [-1, -1]
 */

// TODO: Implement this function
function searchRange(nums: number[], target: number): number[] {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { nums: [5, 7, 7, 8, 8, 10], target: 8, expected: [3, 4] },
    { nums: [5, 7, 7, 8, 8, 10], target: 6, expected: [-1, -1] },
    { nums: [], target: 0, expected: [-1, -1] },
    { nums: [1], target: 1, expected: [0, 0] },
    { nums: [2, 2], target: 2, expected: [0, 1] },
  ];

  let passed = 0;
  for (const { nums, target, expected } of tests) {
    try {
      const result = searchRange(nums, target);
      const pass = JSON.stringify(result) === JSON.stringify(expected);
      if (pass) {
        console.log(`✅ searchRange([${nums}], ${target}) = [${result}]`);
        passed++;
      } else {
        console.log(`❌ searchRange([${nums}], ${target}) = [${result}] (expected [${expected}])`);
      }
    } catch (e: any) {
      console.log(`❌ searchRange([${nums}], ${target}) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
/**
 * Problem: Search Insert Position
 * ---------------------------------
 * Given a sorted array and a target, return the index where target would
 * be inserted to maintain sorted order. If target exists, return its index.
 *
 * Examples:
 *   searchInsert([1, 3, 5, 6], 5)  → 2
 *   searchInsert([1, 3, 5, 6], 2)  → 1
 *   searchInsert([1, 3, 5, 6], 7)  → 4
 *   searchInsert([1, 3, 5, 6], 0)  → 0
 */

// TODO: Implement this function
function searchInsert(nums: number[], target: number): number {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { nums: [1, 3, 5, 6], target: 5, expected: 2 },
    { nums: [1, 3, 5, 6], target: 2, expected: 1 },
    { nums: [1, 3, 5, 6], target: 7, expected: 4 },
    { nums: [1, 3, 5, 6], target: 0, expected: 0 },
    { nums: [], target: 5, expected: 0 },
  ];

  let passed = 0;
  for (const { nums, target, expected } of tests) {
    try {
      const result = searchInsert(nums, target);
      if (result === expected) {
        console.log(`✅ searchInsert([${nums}], ${target}) = ${result}`);
        passed++;
      } else {
        console.log(`❌ searchInsert([${nums}], ${target}) = ${result} (expected ${expected})`);
      }
    } catch (e: any) {
      console.log(`❌ searchInsert([${nums}], ${target}) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
/**
 * Problem: Find Maximum and Minimum in Array
 * -------------------------------------------
 * Given an array of integers, find the maximum and minimum elements.
 *
 * Examples:
 *   findMaxMin([3, 1, 9, 2, 7])  → { max: 9, min: 1 }
 *   findMaxMin([5])              → { max: 5, min: 5 }
 *   findMaxMin([-1, -5, -3])    → { max: -1, min: -5 }
 */

// TODO: Implement this function
function findMaxMin(nums: number[]): { max: number; min: number } {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { nums: [3, 1, 9, 2, 7], expected: { max: 9, min: 1 } },
    { nums: [5], expected: { max: 5, min: 5 } },
    { nums: [-1, -5, -3], expected: { max: -1, min: -5 } },
    { nums: [100, 200, 50, 150], expected: { max: 200, min: 50 } },
    { nums: [0, 0, 0], expected: { max: 0, min: 0 } },
  ];

  let passed = 0;
  for (const { nums, expected } of tests) {
    try {
      const result = findMaxMin(nums);
      if (result.max === expected.max && result.min === expected.min) {
        console.log(`✅ findMaxMin([${nums}]) = { max: ${result.max}, min: ${result.min} }`);
        passed++;
      } else {
        console.log(`❌ findMaxMin([${nums}]) = { max: ${result.max}, min: ${result.min} } (expected { max: ${expected.max}, min: ${expected.min} })`);
      }
    } catch (e: any) {
      console.log(`❌ findMaxMin([${nums}]) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
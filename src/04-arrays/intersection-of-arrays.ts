/**
 * Problem: Intersection of Two Arrays
 * ------------------------------------
 * Given two arrays, return an array of their intersection.
 * Each element in the result must be unique.
 *
 * Examples:
 *   intersection([1, 2, 2, 1], [2, 2])           → [2]
 *   intersection([4, 9, 5], [9, 4, 9, 8, 4])    → [4, 9]  (order doesn't matter)
 *   intersection([1, 2, 3], [4, 5, 6])           → []
 */

// TODO: Implement this function
function intersection(nums1: number[], nums2: number[]): number[] {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { nums1: [1, 2, 2, 1], nums2: [2, 2], expected: [2] },
    { nums1: [4, 9, 5], nums2: [9, 4, 9, 8, 4], expected: [4, 9] },
    { nums1: [1, 2, 3], nums2: [4, 5, 6], expected: [] },
    { nums1: [], nums2: [1, 2], expected: [] },
    { nums1: [1], nums2: [1], expected: [1] },
  ];

  let passed = 0;
  for (const { nums1, nums2, expected } of tests) {
    try {
      const result = intersection(nums1, nums2).sort((a, b) => a - b);
      const exp = [...expected].sort((a, b) => a - b);
      const pass = JSON.stringify(result) === JSON.stringify(exp);
      if (pass) {
        console.log(`✅ intersection([${nums1}], [${nums2}]) = [${result}]`);
        passed++;
      } else {
        console.log(`❌ intersection([${nums1}], [${nums2}]) = [${result}] (expected [${expected}])`);
      }
    } catch (e: any) {
      console.log(`❌ intersection([${nums1}], [${nums2}]) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
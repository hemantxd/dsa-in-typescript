/**
 * Problem: 3 Sum
 * ---------------
 * Given an integer array nums, return all unique triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i != k, j != k, and nums[i] + nums[j] + nums[k] == 0.
 *
 * Examples:
 *   threeSum([-1,0,1,2,-1,-4])  → [[-1,-1,2],[-1,0,1]]
 *   threeSum([0,1,1])           → []
 *   threeSum([0,0,0])           → [[0,0,0]]
 */

// TODO: Implement this function
function threeSum(nums: number[]): number[][] {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    {
      input: [-1,0,1,2,-1,-4],
      expected: [[-1,-1,2],[-1,0,1]],
    },
    { input: [0,1,1], expected: [] },
    { input: [0,0,0], expected: [[0,0,0]] },
    { input: [], expected: [] },
    { input: [1,2,-2,-1], expected: [] },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    try {
      const result = threeSum(input);
      // Sort for comparison (sort each triplet + sort array of triplets)
      const sorted = result
        .map((triplet) => [...triplet].sort((a, b) => a - b))
        .sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
      const expSorted = expected
        .map((triplet) => [...triplet].sort((a, b) => a - b))
        .sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
      const pass = JSON.stringify(sorted) === JSON.stringify(expSorted);
      if (pass) {
        console.log(`✅ threeSum([${input}]) = ${JSON.stringify(result)}`);
        passed++;
      } else {
        console.log(`❌ threeSum([${input}]) = ${JSON.stringify(result)} (expected ${JSON.stringify(expected)})`);
      }
    } catch (e: any) {
      console.log(`❌ threeSum([${input}]) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
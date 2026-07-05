/**
 * Problem: Two Sum
 * -----------------
 * Given an array of integers nums and an integer target, return indices
 * of the two numbers that add up to target.
 *
 * You may assume each input has exactly one solution, and you may not
 * use the same element twice.
 *
 * Examples:
 *   twoSum([2, 7, 11, 15], 9)  → [0, 1]   (2 + 7 = 9)
 *   twoSum([3, 2, 4], 6)       → [1, 2]   (2 + 4 = 6)
 *   twoSum([3, 3], 6)          → [0, 1]   (3 + 3 = 6)
 */

// ---------- SOLUTION ----------

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }

    map.set(nums[i], i);
  }

  return []; // No solution found (shouldn't happen per problem constraints)
}


// ---------- TESTS ----------

function runTests() {
  const tests = [
    { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { nums: [3, 2, 4], target: 6, expected: [1, 2] },
    { nums: [3, 3], target: 6, expected: [0, 1] },
    { nums: [1, 5, 3, 7], target: 8, expected: [1, 2] },
    { nums: [-1, -2, -3, -4], target: -5, expected: [1, 3] },
  ];

  let passed = 0;
  for (const { nums, target, expected } of tests) {
    const result = twoSum(nums, target);
    const pass =
      result.length === 2 &&
      nums[result[0]] + nums[result[1]] === target;
    if (pass) {
      console.log(`✅ twoSum([${nums}], ${target}) = [${result}]`);
      passed++;
    } else {
      console.log(`❌ twoSum([${nums}], ${target}) = [${result}] (expected [${expected}])`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
/**
 * Problem: Binary Search
 * -----------------------
 * Given a sorted array of integers and a target value, return the index
 * of the target. If not found, return -1.
 *
 * Examples:
 *   binarySearch([-1, 0, 3, 5, 9, 12], 9)  → 4
 *   binarySearch([-1, 0, 3, 5, 9, 12], 2)  → -1
 *   binarySearch([5], 5)                     → 0
 */

// ---------- SOLUTION ----------

function binarySearch(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { nums: [-1, 0, 3, 5, 9, 12], target: 9, expected: 4 },
    { nums: [-1, 0, 3, 5, 9, 12], target: 2, expected: -1 },
    { nums: [5], target: 5, expected: 0 },
    { nums: [5], target: 3, expected: -1 },
    { nums: [1, 2, 3, 4, 5], target: 1, expected: 0 },
    { nums: [1, 2, 3, 4, 5], target: 5, expected: 4 },
  ];

  let passed = 0;
  for (const { nums, target, expected } of tests) {
    const result = binarySearch(nums, target);
    if (result === expected) {
      console.log(`✅ binarySearch([${nums}], ${target}) = ${result}`);
      passed++;
    } else {
      console.log(`❌ binarySearch([${nums}], ${target}) = ${result} (expected ${expected})`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
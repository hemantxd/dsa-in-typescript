/**
 * Problem: Recursive Binary Search
 * ---------------------------------
 * Search for a target in a sorted array using recursion (divide & conquer).
 * Time: O(log n), Space: O(log n) recursion stack.
 *
 * Examples:
 *   binarySearch([-1,0,3,5,9,12], 9) → 4
 *   binarySearch([-1,0,3,5,9,12], 2) → -1
 */

// ---------- SOLUTION ----------

function binarySearch(nums: number[], target: number): number {
  function search(left: number, right: number): number {
    if (left > right) return -1; // base case: not found

    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) return search(mid + 1, right);
    return search(left, mid - 1);
  }

  return search(0, nums.length - 1);
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { nums: [-1, 0, 3, 5, 9, 12], target: 9, expected: 4 },
    { nums: [-1, 0, 3, 5, 9, 12], target: 2, expected: -1 },
    { nums: [5], target: 5, expected: 0 },
    { nums: [1, 3, 5, 7, 9, 11], target: 1, expected: 0 },
    { nums: [1, 3, 5, 7, 9, 11], target: 11, expected: 5 },
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
/**
 * Problem: Subsets / Power Set (LeetCode 78)
 * --------------------------------------------
 * Given an array of unique integers, return all possible subsets
 * (the power set) using recursion/backtracking.
 *
 * Examples:
 *   subsets([1,2,3]) → [[], [3], [2], [2,3], [1], [1,3], [1,2], [1,2,3]]
 *   subsets([0])     → [[], [0]]
 */

// ---------- SOLUTION ----------

function subsets(nums: number[]): number[][] {
  const result: number[][] = [];

  function backtrack(index: number, current: number[]): void {
    if (index === nums.length) {
      result.push([...current]); // record a copy
      return;
    }
    // Choice 1: exclude nums[index]
    backtrack(index + 1, current);
    // Choice 2: include nums[index]
    current.push(nums[index]);
    backtrack(index + 1, current);
    current.pop(); // undo (backtrack)
  }

  backtrack(0, []);
  return result;
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { nums: [1, 2, 3], expected: 8 },
    { nums: [0], expected: 2 },
    { nums: [1, 2], expected: 4 },
  ];

  let passed = 0;
  for (const { nums, expected } of tests) {
    const result = subsets(nums);
    if (result.length === expected) {
      console.log(`✅ subsets([${nums}]) → ${result.length} subsets: ${JSON.stringify(result)}`);
      passed++;
    } else {
      console.log(`❌ subsets([${nums}]) → ${result.length} subsets (expected ${expected})`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
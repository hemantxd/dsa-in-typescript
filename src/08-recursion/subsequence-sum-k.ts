/**
 * Problem: Print All Subsequences with Sum K
 * -------------------------------------------
 * Given an array of integers and a target sum K, print (return) all
 * subsequences whose elements add up to K, using recursion/backtracking.
 * This is the classic "pick / not-pick" pattern (same as Subsets, but
 * only record the subsequence when it hits the end with sum === K).
 *
 * Examples:
 *   subsequenceWithSumK([1,2,1], 2) → [[1,1], [2]]
 *   subsequenceWithSumK([1,2,3], 5) → [[2,3]]
 *   subsequenceWithSumK([1,2,3], 7) → []
 */

// ---------- SOLUTION ----------

function subsequenceWithSumK(nums: number[], k: number): number[][] {
  const result: number[][] = [];

  function backtrack(index: number, current: number[], currentSum: number): void {
    if (index === nums.length) {
      if (currentSum === k) {
        result.push([...current]); // found one — record a copy
      }
      return;
    }
    // Choice 1: pick nums[index]
    current.push(nums[index]);
    backtrack(index + 1, current, currentSum + nums[index]);
    current.pop(); // undo (backtrack)
    // Choice 2: skip nums[index]
    backtrack(index + 1, current, currentSum);
  }

  backtrack(0, [], 0);
  return result;
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { nums: [1, 2, 1], k: 2, expected: [[1, 1], [2]] },
    { nums: [1, 2, 3], k: 5, expected: [[2, 3]] },
    { nums: [1, 2, 3], k: 7, expected: [] },
    { nums: [3, 1, 2], k: 3, expected: [[3], [1, 2]] },
  ];

  let passed = 0;
  for (const { nums, k, expected } of tests) {
    const result = subsequenceWithSumK(nums, k);
    const normalize = (arr: number[][]) =>
      JSON.stringify(arr.map((s) => [...s]).sort());
    if (normalize(result) === normalize(expected)) {
      console.log(`✅ subsequenceWithSumK([${nums}], ${k}) = ${JSON.stringify(result)}`);
      passed++;
    } else {
      console.log(
        `❌ subsequenceWithSumK([${nums}], ${k}) = ${JSON.stringify(result)} (expected ${JSON.stringify(expected)})`
      );
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
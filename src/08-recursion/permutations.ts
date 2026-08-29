/**
 * Problem: Permutations (LeetCode 46)
 * -------------------------------------
 * Given an array of unique integers, return all possible permutations
 * using recursion/backtracking.
 *
 * Examples:
 *   permute([1,2,3]) → [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *   permute([0,1])   → [[0,1],[1,0]]
 */

// ---------- SOLUTION ----------

function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  function backtrack(current: number[], used: boolean[]): void {
    if (current.length === nums.length) {
      result.push([...current]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      current.push(nums[i]);
      backtrack(current, used);
      current.pop(); // undo (backtrack)
      used[i] = false;
    }
  }

  backtrack([], new Array(nums.length).fill(false));
  return result;
}

// ---------- TESTS ----------

function runTests() {
  const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));

  const tests = [
    { nums: [1, 2, 3], expected: 6 },
    { nums: [0, 1], expected: 2 },
    { nums: [7], expected: 1 },
  ];

  let passed = 0;
  for (const { nums, expected } of tests) {
    const result = permute(nums);
    // verify all permutations are unique and correct count
    const unique = new Set(result.map((p) => JSON.stringify(p))).size;
    if (result.length === expected && unique === expected && factorial(nums.length) === expected) {
      console.log(`✅ permute([${nums}]) → ${result.length} permutations`);
      passed++;
    } else {
      console.log(`❌ permute([${nums}]) → ${result.length} unique=${unique} (expected ${expected})`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
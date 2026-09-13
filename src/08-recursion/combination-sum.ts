/**
 * Problem: Combination Sum (LeetCode 39)
 * ----------------------------------------
 * Given an array of DISTINCT integers (candidates) and a target,
 * return all unique combinations where the numbers sum to target.
 * The same number may be used an UNLIMITED number of times.
 * Order does not matter: [2,2,3] and [3,2,2] are the same combo.
 *
 * Examples:
 *   combinationSum([2,3,6,7], 7) → [[2,2,3],[7]]
 *   combinationSum([2,3,5], 8)   → [[2,2,2,2],[2,3,3],[3,5]]
 *   combinationSum([2], 1)       → []
 */

// ---------- SOLUTION ----------

function combinationSum(candidates: number[], target: number): number[][] {
    const ans: number[][] = [];
    const n = candidates.length;

    function recursion(index: number, t: number, array: number[]): void {
        // base
        if (t === 0) {
            ans.push([...array]);
            return;
        }

        if (index >= n || t < 0) {
            return;
        }

        // include
        array.push(candidates[index]);
        recursion(index, t - candidates[index], array);

        // backtrack
        array.pop();

        // exclude
        recursion(index + 1, t, array);
    }

    recursion(0, target, []);
    return ans;
}


// ---------- TESTS ----------

function runTests() {
  const tests = [
    { candidates: [2, 3, 6, 7], target: 7, expected: [[2, 2, 3], [7]] },
    { candidates: [2, 3, 5], target: 8, expected: [[2, 2, 2, 2], [2, 3, 3], [3, 5]] },
    { candidates: [2], target: 1, expected: [] },
    { candidates: [3, 5, 8], target: 11, expected: [[3, 8], [3, 3, 5]] },
  ];

  const normalize = (arr: number[][]) =>
    JSON.stringify(arr.map((combo) => [...combo].sort((a, b) => a - b).join(",")).sort());

  let passed = 0;
  for (const { candidates, target, expected } of tests) {
    const result = combinationSum(candidates, target);
    if (normalize(result) === normalize(expected)) {
      console.log(`✅ combinationSum([${candidates}], ${target}) = ${JSON.stringify(result)}`);
      passed++;
    } else {
      console.log(
        `❌ combinationSum([${candidates}], ${target}) = ${JSON.stringify(result)} (expected ${JSON.stringify(expected)})`
      );
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
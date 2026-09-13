/**
 * Problem: Subset Sum I (with Power Set as prerequisite)
 * --------------------------------------------------------
 * PART 1 (prerequisite) — POWER SET: generate every possible subset.
 *   Each element has two choices: PICK it or SKIP it (2^n subsets).
 *   powerSet([2,3]) → [[], [3], [2], [2,3]]
 *
 * PART 2 — SUBSET SUM I (GFG): return the sum of EVERY subset
 * (including the empty subset, whose sum is 0), sorted ascending.
 *   Same pick/skip recursion, but instead of storing the subset,
 *   store its sum. Number of answers = 2^n.
 *
 * Examples:
 *   subsetSums([2,3])   → [0, 2, 3, 5]
 *   subsetSums([5,2,1]) → [0, 1, 2, 3, 5, 6, 7, 8]
 */

// ---------- PART 1: POWER SET (prerequisite — read this first) ----------

function powerSet(nums: number[]): number[][] {
  const result: number[][] = [];

  function backtrack(index: number, current: number[]): void {
    if (index === nums.length) {
      result.push([...current]); // reached the end — one full subset is formed
      return;
    }
    // Choice 1: SKIP nums[index]
    backtrack(index + 1, current);
    // Choice 2: PICK nums[index]
    current.push(nums[index]);
    backtrack(index + 1, current);
    current.pop(); // undo (backtrack)
  }

  backtrack(0, []);
  return result;
}

// ---------- PART 2: SUBSET SUM I (same skeleton, track sum instead) ----------

function subsetSums(nums: number[]): number[] {
  const result: number[] = [];

  function backtrack(index: number, currentSum: number): void {
    if (index === nums.length) {
      result.push(currentSum); // one subset fully decided — record its sum
      return;
    }
    // Choice 1: SKIP nums[index] (sum unchanged)
    backtrack(index + 1, currentSum);
    // Choice 2: PICK nums[index] (add it to the sum)
    backtrack(index + 1, currentSum + nums[index]);
  }

  backtrack(0, 0);
  return result.sort((a, b) => a - b); // GFG expects ascending order
}

// ---------- TESTS ----------

function runTests() {
  let passed = 0;
  let total = 0;

  // Part 1 tests
  const powerSetTests = [
    { nums: [2, 3], expected: [[], [3], [2], [2, 3]] },
    { nums: [1], expected: [[], [1]] },
    { nums: [], expected: [[]] },
  ];

  const normalize = (arr: number[][]) =>
    JSON.stringify(arr.map((s) => [...s]).sort());

  for (const { nums, expected } of powerSetTests) {
    total++;
    const result = powerSet(nums);
    if (normalize(result) === normalize(expected)) {
      console.log(`✅ powerSet([${nums}]) = ${JSON.stringify(result)}`);
      passed++;
    } else {
      console.log(`❌ powerSet([${nums}]) = ${JSON.stringify(result)} (expected ${JSON.stringify(expected)})`);
    }
  }

  // Part 2 tests
  const subsetSumTests = [
    { nums: [2, 3], expected: [0, 2, 3, 5] },
    { nums: [5, 2, 1], expected: [0, 1, 2, 3, 5, 6, 7, 8] },
    { nums: [], expected: [0] },
    { nums: [4], expected: [0, 4] },
  ];

  for (const { nums, expected } of subsetSumTests) {
    total++;
    const result = subsetSums(nums);
    if (JSON.stringify(result) === JSON.stringify(expected)) {
      console.log(`✅ subsetSums([${nums}]) = [${result}]`);
      passed++;
    } else {
      console.log(`❌ subsetSums([${nums}]) = [${result}] (expected [${expected}])`);
    }
  }

  console.log(`\n${passed}/${total} tests passed`);
}

runTests();
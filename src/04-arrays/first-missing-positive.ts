/**
 * Problem: First Missing Positive
 * --------------------------------
 * Given an unsorted integer array nums, return the smallest positive
 * integer that is not present in nums.
 * You must implement an algorithm that runs in O(n) time and uses
 * O(1) auxiliary space.
 *
 * Examples:
 *   firstMissingPositive([1, 2, 0])        → 3
 *   firstMissingPositive([3, 4, -1, 1])    → 2
 *   firstMissingPositive([7, 8, 9, 11])    → 1
 *   firstMissingPositive([1, 2, 3])        → 4
 */

// TODO: Implement this function
function firstMissingPositive(nums: number[]): number {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: [1, 2, 0], expected: 3 },
    { input: [3, 4, -1, 1], expected: 2 },
    { input: [7, 8, 9, 11], expected: 1 },
    { input: [1, 2, 3], expected: 4 },
    { input: [1], expected: 2 },
    { input: [2], expected: 1 },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    try {
      const result = firstMissingPositive(input);
      if (result === expected) {
        console.log(`✅ firstMissingPositive([${input}]) = ${result}`);
        passed++;
      } else {
        console.log(`❌ firstMissingPositive([${input}]) = ${result} (expected ${expected})`);
      }
    } catch (e: any) {
      console.log(`❌ firstMissingPositive([${input}]) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
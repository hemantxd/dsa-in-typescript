/**
 * Problem: Longest Consecutive Sequence
 * --------------------------------------
 * Given an unsorted array of integers, find the length of the longest
 * consecutive elements sequence. Works for both positive & negative numbers.
 * Must run in O(n) time.
 *
 * Examples:
 *   longestConsecutive([100, 4, 200, 1, 3, 2])           → 4   ([1, 2, 3, 4])
 *   longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])  → 9   ([0,1,2,3,4,5,6,7,8])
 *   longestConsecutive([-5, -3, -2, -1, 0, 1])           → 5   ([-3,-2,-1,0,1])
 *   longestConsecutive([1, 2, 0, 1])                      → 3   ([0,1,2])
 */

// TODO: Implement this function
function longestConsecutive(nums: number[]): number {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: [100, 4, 200, 1, 3, 2], expected: 4 },
    { input: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1], expected: 9 },
    { input: [-5, -3, -2, -1, 0, 1], expected: 5 },      // negative numbers
    { input: [1, 2, 0, 1], expected: 3 },
    { input: [], expected: 0 },
    { input: [1], expected: 1 },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    try {
      const result = longestConsecutive(input);
      if (result === expected) {
        console.log(`✅ longestConsecutive([${input}]) = ${result}`);
        passed++;
      } else {
        console.log(`❌ longestConsecutive([${input}]) = ${result} (expected ${expected})`);
      }
    } catch (e: any) {
      console.log(`❌ longestConsecutive([${input}]) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
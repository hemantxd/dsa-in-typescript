/**
 * Problem: Remove Duplicates from Sorted Array
 * ---------------------------------------------
 * Given a sorted array, remove duplicates in-place and return the
 * new length. Order should be maintained.
 *
 * Examples:
 *   removeDuplicates([1, 1, 2])              → 2   (array becomes [1, 2, _])
 *   removeDuplicates([0, 0, 1, 1, 1, 2, 2]) → 3   (array becomes [0, 1, 2, ...])
 *   removeDuplicates([1, 2, 3])              → 3
 */

// TODO: Implement this function
function removeDuplicates(nums: number[]): number {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: [1, 1, 2], expected: 2 },
    { input: [0, 0, 1, 1, 1, 2, 2], expected: 3 },
    { input: [1, 2, 3], expected: 3 },
    { input: [], expected: 0 },
    { input: [1], expected: 1 },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    try {
      const result = removeDuplicates([...input]);
      if (result === expected) {
        console.log(`✅ removeDuplicates([${input}]) = ${result}`);
        passed++;
      } else {
        console.log(`❌ removeDuplicates([${input}]) = ${result} (expected ${expected})`);
      }
    } catch (e: any) {
      console.log(`❌ removeDuplicates([${input}]) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
/**
 * Problem: Check if Array is Sorted
 * ----------------------------------
 * Given an array, check if it is sorted in non-decreasing order.
 *
 * Examples:
 *   isSorted([1, 2, 3, 4, 5])  → true
 *   isSorted([1, 3, 2, 4, 5])  → false
 *   isSorted([])               → true
 *   isSorted([5])              → true
 */

// TODO: Implement this function
function isSorted(nums: number[]): boolean {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: [1, 2, 3, 4, 5], expected: true },
    { input: [1, 3, 2, 4, 5], expected: false },
    { input: [], expected: true },
    { input: [5], expected: true },
    { input: [5, 4, 3], expected: false },
    { input: [1, 1, 2, 3], expected: true },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    try {
      const result = isSorted(input);
      if (result === expected) {
        console.log(`✅ isSorted([${input}]) = ${result}`);
        passed++;
      } else {
        console.log(`❌ isSorted([${input}]) = ${result} (expected ${expected})`);
      }
    } catch (e: any) {
      console.log(`❌ isSorted([${input}]) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
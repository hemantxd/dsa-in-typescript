/**
 * Problem: Reverse an Array
 * --------------------------
 * Given an array, reverse it in-place and return it.
 *
 * Examples:
 *   reverseArray([1, 2, 3, 4, 5])  → [5, 4, 3, 2, 1]
 *   reverseArray([1, 2])           → [2, 1]
 *   reverseArray([])               → []
 */

// TODO: Implement this function
function reverseArray(arr: number[]): number[] {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: [1, 2, 3, 4, 5], expected: [5, 4, 3, 2, 1] },
    { input: [1, 2], expected: [2, 1] },
    { input: [], expected: [] },
    { input: [1], expected: [1] },
    { input: [10, 20, 30], expected: [30, 20, 10] },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    try {
      const result = reverseArray([...input]);
      const pass = JSON.stringify(result) === JSON.stringify(expected);
      if (pass) {
        console.log(`✅ reverseArray([${input}]) = [${result}]`);
        passed++;
      } else {
        console.log(`❌ reverseArray([${input}]) = [${result}] (expected [${expected}])`);
      }
    } catch (e: any) {
      console.log(`❌ reverseArray([${input}]) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
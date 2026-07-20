/**
 * Problem: Find Peak Element
 * ----------------------------
 * A peak element is an element that is strictly greater than its neighbors.
 * Given a 0-indexed integer array, find a peak element and return its index.
 * If the array contains multiple peaks, return the index of any peak.
 * Must be O(log n) time.
 *
 * Examples:
 *   findPeakElement([1, 2, 3, 1])    → 2   (3 is peak)
 *   findPeakElement([1, 2, 1, 3, 5, 6, 4])  → 5  (6 is peak, index 5 also valid)
 *   findPeakElement([1])             → 0
 *   findPeakElement([2, 1])          → 0   (2 is peak)
 */

// TODO: Implement this function
function findPeakElement(nums: number[]): number {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: [1, 2, 3, 1], expected: [2] },  // both are valid peaks
    { input: [1, 2, 1, 3, 5, 6, 4], expected: [1, 5] }, // 2 or 6
    { input: [1], expected: [0] },
    { input: [2, 1], expected: [0] },
    { input: [1, 2], expected: [1] },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    try {
      const result = findPeakElement(input);
      const pass = expected.includes(result);
      if (pass) {
        console.log(`✅ findPeakElement([${input}]) = ${result}`);
        passed++;
      } else {
        console.log(`❌ findPeakElement([${input}]) = ${result} (expected one of ${JSON.stringify(expected)})`);
      }
    } catch (e: any) {
      console.log(`❌ findPeakElement([${input}]) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
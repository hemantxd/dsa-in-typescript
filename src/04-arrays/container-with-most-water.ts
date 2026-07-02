/**
 * Problem: Container With Most Water
 * -----------------------------------
 * You are given an integer array height of length n. There are n vertical
 * lines drawn such that the two endpoints of the i-th line are (i, 0) and
 * (i, height[i]).
 *
 * Find two lines that together with the x-axis form a container that
 * contains the most water. Return the maximum amount of water.
 *
 * Examples:
 *   maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])  → 49
 *   maxArea([1, 1])                          → 1
 *   maxArea([4, 3, 2, 1, 4])                → 16
 */

// TODO: Implement this function
function maxArea(height: number[]): number {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: [1, 8, 6, 2, 5, 4, 8, 3, 7], expected: 49 },
    { input: [1, 1], expected: 1 },
    { input: [4, 3, 2, 1, 4], expected: 16 },
    { input: [1, 2, 1], expected: 2 },
    { input: [1, 2, 4, 3], expected: 4 },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    try {
      const result = maxArea(input);
      if (result === expected) {
        console.log(`✅ maxArea([${input}]) = ${result}`);
        passed++;
      } else {
        console.log(`❌ maxArea([${input}]) = ${result} (expected ${expected})`);
      }
    } catch (e: any) {
      console.log(`❌ maxArea([${input}]) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
/**
 * Problem: Pascal's Triangle
 * ---------------------------
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 *
 * Examples:
 *   generate(5)  → [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 *   generate(1)  → [[1]]
 *   generate(3)  → [[1],[1,1],[1,2,1]]
 */

// TODO: Implement this function
function generate(numRows: number): number[][] {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: 5, expected: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]] },
    { input: 1, expected: [[1]] },
    { input: 3, expected: [[1],[1,1],[1,2,1]] },
    { input: 2, expected: [[1],[1,1]] },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    try {
      const result = generate(input);
      const pass = JSON.stringify(result) === JSON.stringify(expected);
      if (pass) {
        console.log(`✅ generate(${input}) = ${JSON.stringify(result)}`);
        passed++;
      } else {
        console.log(`❌ generate(${input}) = ${JSON.stringify(result)} (expected ${JSON.stringify(expected)})`);
      }
    } catch (e: any) {
      console.log(`❌ generate(${input}) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
/**
 * Problem: Search in a 2D Matrix
 * -------------------------------
 * Given a 2D matrix where each row is sorted left-to-right and each
 * next row starts with a value greater than the previous row's last,
 * write an efficient O(log(m*n)) search.
 *
 * Examples:
 *   searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)   → true
 *   searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)  → false
 *   searchMatrix([[1]], 1)                                       → true
 */

// TODO: Implement this function
function searchMatrix(matrix: number[][], target: number): boolean {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { matrix: [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target: 3, expected: true },
    { matrix: [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target: 13, expected: false },
    { matrix: [[1]], target: 1, expected: true },
    { matrix: [[1]], target: 0, expected: false },
    { matrix: [[1, 2]], target: 2, expected: true },
  ];

  let passed = 0;
  for (const { matrix, target, expected } of tests) {
    try {
      const result = searchMatrix(matrix, target);
      if (result === expected) {
        console.log(`✅ searchMatrix(..., ${target}) = ${result}`);
        passed++;
      } else {
        console.log(`❌ searchMatrix(..., ${target}) = ${result} (expected ${expected})`);
      }
    } catch (e: any) {
      console.log(`❌ searchMatrix(..., ${target}) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
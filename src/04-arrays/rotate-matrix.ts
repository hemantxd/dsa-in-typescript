/**
 * Problem: Rotate Matrix by 90 Degrees
 * -------------------------------------
 * Given an n x n 2D matrix, rotate it by 90 degrees clockwise in-place.
 *
 * Examples:
 *   rotateMatrix([[1,2,3],[4,5,6],[7,8,9]])
 *     → [[7,4,1],[8,5,2],[9,6,3]]
 *
 *   rotateMatrix([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])
 *     → [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 */

// TODO: Implement this function
function rotateMatrix(matrix: number[][]): void {
  const n = matrix.length;

  // Transpose
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    {
      input: [[1,2,3],[4,5,6],[7,8,9]],
      expected: [[7,4,1],[8,5,2],[9,6,3]],
    },
    {
      input: [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]],
      expected: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]],
    },
    {
      input: [[1]],
      expected: [[1]],
    },
    {
      input: [[1,2],[3,4]],
      expected: [[3,1],[4,2]],
    },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    try {
      const mat = input.map(row => [...row]);
      rotateMatrix(mat);
      const pass = JSON.stringify(mat) === JSON.stringify(expected);
      if (pass) {
        console.log(`✅ rotateMatrix(${JSON.stringify(input)}) = ${JSON.stringify(mat)}`);
        passed++;
      } else {
        console.log(`❌ rotateMatrix(${JSON.stringify(input)}) = ${JSON.stringify(mat)} (expected ${JSON.stringify(expected)})`);
      }
    } catch (e: any) {
      console.log(`❌ rotateMatrix(${JSON.stringify(input)}) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
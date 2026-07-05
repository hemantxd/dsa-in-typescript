/**
 * Problem: Move Zeros to End
 * ---------------------------
 * Given an array, move all zeros to the end while maintaining the
 * relative order of non-zero elements.
 *
 * Examples:
 *   moveZeros([0, 1, 0, 3, 12])  → [1, 3, 12, 0, 0]
 *   moveZeros([0, 0, 1])         → [1, 0, 0]
 *   moveZeros([1, 2, 3])         → [1, 2, 3]
 */

// TODO: Implement this function
function moveZeros(nums: number[]): number[] {
    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
    }
    return nums;
}
// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: [0, 1, 0, 3, 12], expected: [1, 3, 12, 0, 0] },
    { input: [0, 0, 1], expected: [1, 0, 0] },
    { input: [1, 2, 3], expected: [1, 2, 3] },
    { input: [0], expected: [0] },
    { input: [], expected: [] },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    try {
      const result = moveZeros([...input]);
      const pass = JSON.stringify(result) === JSON.stringify(expected);
      if (pass) {
        console.log(`✅ moveZeros([${input}]) = [${result}]`);
        passed++;
      } else {
        console.log(`❌ moveZeros([${input}]) = [${result}] (expected [${expected}])`);
      }
    } catch (e: any) {
      console.log(`❌ moveZeros([${input}]) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
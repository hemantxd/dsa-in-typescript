/**
 * Problem: Product of Array Except Self
 * --------------------------------------
 * Given an integer array nums, return an array answer such that answer[i]
 * is equal to the product of all elements of nums except nums[i].
 * You must solve it without using division.
 *
 * Examples:
 *   productExceptSelf([1, 2, 3, 4])  → [24, 12, 8, 6]
 *   productExceptSelf([-1, 1, 0, -3, 3])  → [0, 0, 9, 0, 0]
 *   productExceptSelf([2, 3])        → [3, 2]
 */

// TODO: Implement this function
function productExceptSelf(nums: number[]): number[] {
  // Your code here

  const answer: number[] = new Array(nums.length).fill(1);

  let prefix : number[] = new Array(nums.length).fill(1);
  let suffix : number[] = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1];
  }
  

  for (let i = 0; i < nums.length; i++) {
    answer[i] = prefix[i] * suffix[i];
  }


  return answer;
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: [1, 2, 3, 4], expected: [24, 12, 8, 6] },
    { input: [-1, 1, 0, -3, 3], expected: [0, 0, 9, 0, 0] },
    { input: [2, 3], expected: [3, 2] },
    { input: [1, 2], expected: [2, 1] },
    { input: [10], expected: [1] },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    try {
      const result = productExceptSelf(input);
      const pass = JSON.stringify(result) === JSON.stringify(expected);
      if (pass) {
        console.log(`✅ productExceptSelf([${input}]) = [${result}]`);
        passed++;
      } else {
        console.log(`❌ productExceptSelf([${input}]) = [${result}] (expected [${expected}])`);
      }
    } catch (e: any) {
      console.log(`❌ productExceptSelf([${input}]) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
/**
 * Problem: Rotate Array by K Positions
 * -------------------------------------
 * Given an array, rotate the array to the right by k steps.
 *
 * Examples:
 *   rotate([1, 2, 3, 4, 5, 6, 7], 3)  → [5, 6, 7, 1, 2, 3, 4]
 *   rotate([-1, -100, 3, 99], 2)      → [3, 99, -1, -100]
 *   rotate([1, 2], 3)                 → [2, 1]   (k > length)
 */

// TODO: Implement this function
function rotate(nums: number[], k: number): number[] {
  // Your code here
  const n = nums.length;
  k = k % n; // Handle cases where k is greater than the length of the array

  reverse(nums, 0, n - 1); // Reverse the entire array
  reverse(nums, 0, k - 1); // Reverse the first k elements
  reverse(nums, k, n - 1); // Reverse the remaining elements

  return nums;
}

function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { nums: [1, 2, 3, 4, 5, 6, 7], k: 3, expected: [5, 6, 7, 1, 2, 3, 4] },
    { nums: [-1, -100, 3, 99], k: 2, expected: [3, 99, -1, -100] },
    { nums: [1, 2], k: 3, expected: [2, 1] },
    { nums: [1], k: 0, expected: [1] },
    { nums: [1, 2, 3], k: 0, expected: [1, 2, 3] },
  ];

  let passed = 0;
  for (const { nums, k, expected } of tests) {
    try {
      const result = rotate([...nums], k);
      const pass = JSON.stringify(result) === JSON.stringify(expected);
      if (pass) {
        console.log(`✅ rotate([${nums}], ${k}) = [${result}]`);
        passed++;
      } else {
        console.log(`❌ rotate([${nums}], ${k}) = [${result}] (expected [${expected}])`);
      }
    } catch (e: any) {
      console.log(`❌ rotate([${nums}], ${k}) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
/**
 * Problem: Find Duplicate in Array
 * ---------------------------------
 * Given an array of integers where each value is between 1 and n
 * (inclusive), and there is exactly one duplicate, find the duplicate.
 *
 * Examples:
 *   findDuplicate([1, 3, 4, 2, 2])  → 2
 *   findDuplicate([3, 1, 3, 4, 2])  → 3
 *   findDuplicate([1, 1])           → 1
 */

// TODO: Implement this function
function findDuplicate(nums: number[]): number {
  // Your code here

  let slow = nums[0];
  let fast = nums[0];

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  fast = nums[0];
  while(slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return fast;

}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: [1, 3, 4, 2, 2], expected: 2 },
    { input: [3, 1, 3, 4, 2], expected: 3 },
    { input: [1, 1], expected: 1 },
    { input: [2, 2, 2], expected: 2 },
    { input: [1, 2, 3, 4, 5, 5], expected: 5 },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    try {
      const result = findDuplicate(input);
      if (result === expected) {
        console.log(`✅ findDuplicate([${input}]) = ${result}`);
        passed++;
      } else {
        console.log(`❌ findDuplicate([${input}]) = ${result} (expected ${expected})`);
      }
    } catch (e: any) {
      console.log(`❌ findDuplicate([${input}]) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
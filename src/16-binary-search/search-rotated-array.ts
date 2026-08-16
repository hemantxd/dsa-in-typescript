/**
 * Problem: Search in Rotated Sorted Array
 * ----------------------------------------
 * Given a rotated sorted array and a target, return the index of target.
 * If not found, return -1. O(log n) time required.
 *
 * Examples:
 *   search([4, 5, 6, 7, 0, 1, 2], 0)  → 4
 *   search([4, 5, 6, 7, 0, 1, 2], 3)  → -1
 *   search([1], 0)                     → -1
 */

// TODO: Implement this function
function search(nums: number[], target: number): number {
  // Your code here
  let low=0;
    let high=nums.length-1;

    let ans=-1;

    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(nums[mid]===target){
            ans=mid;
            break;
        }
        if(nums[low]<=nums[mid]){
          // left side is sorted
          if(target>=nums[low] && target<nums[mid]){
            high=mid-1;
          }
          else{
            low=mid+1;
          }
        }
        else{
          // right side is sorted
          if(target>nums[mid] && target<=nums[high]){
            low=mid+1;
          }
          else{
            high=mid-1;
          }
        }
    }
    return ans;
        }


// ---------- TESTS ----------

function runTests() {
  const tests = [
    { nums: [4, 5, 6, 7, 0, 1, 2], target: 0, expected: 4 },
    { nums: [4, 5, 6, 7, 0, 1, 2], target: 3, expected: -1 },
    { nums: [1], target: 0, expected: -1 },
    { nums: [1, 3], target: 3, expected: 1 },
    { nums: [3, 1], target: 1, expected: 1 },
  ];

  let passed = 0;
  for (const { nums, target, expected } of tests) {
    try {
      const result = search(nums, target);
      if (result === expected) {
        console.log(`✅ search([${nums}], ${target}) = ${result}`);
        passed++;
      } else {
        console.log(`❌ search([${nums}], ${target}) = ${result} (expected ${expected})`);
      }
    } catch (e: any) {
      console.log(`❌ search([${nums}], ${target}) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
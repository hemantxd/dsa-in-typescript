/**
 * DAY 2 — Exercise 1: Sliding Window Maximum (LeetCode 239) ★★
 * -----------------------------------------------------------------
 * PROBLEM
 * Given an array nums and a window size k, return the maximum of every
 * contiguous subarray of length k, sliding left to right.
 *
 * EXAMPLES
 *   maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3) → [3,3,5,5,6,7]
 *     windows: [1,3,-1]→3, [3,-1,-3]→3, [-1,-3,5]→5, ...
 *   maxSlidingWindow([1], 1) → [1]
 *   maxSlidingWindow([9,8,7,6], 2) → [9,8,7]
 *
 * CONSTRAINTS
 *   1 <= nums.length <= 10^5, 1 <= k <= nums.length.
 *
 * HINTS (read one at a time, only if stuck)
 *   H1. Brute force scans each window (k elements × n windows = O(n·k)).
 *       Windows OVERLAP heavily — the max of window i+1 is almost the max
 *       of window i. What single structure could carry candidates forward?
 *   H2. Keep a deque of INDICES with DECREASING values (front = current max).
 *       New value x: pop from the BACK while nums[back] <= x (they can never
 *       be anyone's max again — x is newer AND ≥). Then push x's index.
 *   H3. Drop the front when it slides out of the window (front <= i - k).
 *       Record nums[front] once i >= k - 1. Store INDICES (need positions!),
 *       not values.
 *
 * YOUR TASK
 * Implement maxSlidingWindow() below. Run THIS file to check yourself:
 *   npx ts-node src/12-queue/day-2/sliding-window-maximum.ts
 * The solution (with tests) lives in solutions/sliding-window-maximum.solution.ts —
 * open it ONLY after you have tried for 10–15 minutes.
 */

export function maxSlidingWindow(nums: number[], k: number): number[] {
  // TODO: decreasing deque of indices; evict smaller from back, expired from front.
  throw new Error("Not implemented yet — your turn! (See Hints above.)");
}

// ---------- SELF-CHECK (no answers leaked — just pass/fail) ----------

function selfCheck() {
  const cases: Array<[number[], number, number[]]> = [
    [[1, 3, -1, -3, 5, 3, 6, 7], 3, [3, 3, 5, 5, 6, 7]],
    [[1], 1, [1]],
    [[9, 8, 7, 6], 2, [9, 8, 7]],
  ];
  let passed = 0;
  for (const [nums, k, expected] of cases) {
    try {
      const got = maxSlidingWindow(nums, k);
      if (JSON.stringify(got) === JSON.stringify(expected)) {
        console.log(`✅ maxSlidingWindow([${nums}], ${k}) = [${got}]`);
        passed++;
      } else {
        console.log(`❌ maxSlidingWindow([${nums}], ${k}) = [${got}] (expected [${expected}])`);
      }
    } catch {
      console.log(`⏳ maxSlidingWindow([${nums}], ${k}) — not implemented yet.`);
    }
  }
  console.log(`\n${passed}/${cases.length} passing. Solution: solutions/sliding-window-maximum.solution.ts`);
}

if (require.main === module) {
  selfCheck();
}

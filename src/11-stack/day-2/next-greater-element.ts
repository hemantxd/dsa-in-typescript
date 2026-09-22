/**
 * DAY 2 — Exercise 1: Next Greater Element (LeetCode 496) ★
 * --------------------------------------------------------------
 * PROBLEM
 * For each element in nums1, find the NEXT GREATER element in nums2: the first
 * element to its right in nums2 that is larger. (Every value of nums1 appears
 * in nums2.) Answer -1 when there is none.
 *
 * EXAMPLES
 *   nextGreaterElement([4,1,2], [1,3,4,2]) → [-1,3,-1]
 *     4: nothing greater after it in nums2 → -1
 *     1: next greater is 3 → 3
 *     2: nothing after it → -1
 *   nextGreaterElement([2,4], [1,2,3,4]) → [3,-1]
 *
 * CONSTRAINTS
 *   1 <= nums1.length <= nums2.length <= 1000. All values unique.
 *
 * HINTS (read one at a time, only if stuck)
 *   H1. Brute force: for each x, scan right in nums2 → O(n·m). The repeated
 *       rightward scans overlap. What if ONE right-to-left (or left-to-right)
 *       pass remembered "candidates that still need an answer"?
 *   H2. Walk nums2 left to right, keeping a stack of values with NO answer yet.
 *       New value x: it IS the answer for every smaller value waiting on the
 *       stack — pop them and record x. Then push x (it waits for ITS answer).
 *   H3. Keep the stack INCREASING (bottom→top). Popping while top < x maintains
 *       that. Leftovers at the end → -1. Finally, look up each nums1 value.
 *
 * YOUR TASK
 * Implement nextGreaterElement() below. Run THIS file to check yourself:
 *   npx ts-node src/11-stack/day-2/next-greater-element.ts
 * The solution (with tests) lives in solutions/next-greater-element.solution.ts —
 * open it ONLY after you have tried for 10–15 minutes.
 */

export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  // TODO: one pass over nums2 with an increasing stack + a value→answer map.
  throw new Error("Not implemented yet — your turn! (See Hints above.)");
}

// ---------- SELF-CHECK (no answers leaked — just pass/fail) ----------

function selfCheck() {
  const cases: Array<[number[], number[], number[]]> = [
    [[4, 1, 2], [1, 3, 4, 2], [-1, 3, -1]],
    [[2, 4], [1, 2, 3, 4], [3, -1]],
  ];
  let passed = 0;
  for (const [a, b, expected] of cases) {
    try {
      const got = nextGreaterElement(a, b);
      if (JSON.stringify(got) === JSON.stringify(expected)) {
        console.log(`✅ nextGreaterElement([${a}], [${b}]) = [${got}]`);
        passed++;
      } else {
        console.log(`❌ nextGreaterElement([${a}], [${b}]) = [${got}] (expected [${expected}])`);
      }
    } catch {
      console.log(`⏳ nextGreaterElement([${a}], …) — not implemented yet.`);
    }
  }
  console.log(`\n${passed}/${cases.length} passing. Solution: solutions/next-greater-element.solution.ts`);
}

if (require.main === module) {
  selfCheck();
}

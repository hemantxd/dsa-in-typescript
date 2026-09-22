/**
 * DAY 2 — Solution: Next Greater Element (LeetCode 496) ★
 * ------------------------------------------------------------
 * THOUGHT PROCESS
 *   Brute force idea: for each x in nums1, find x in nums2 then scan right
 *   for the first larger value — O(n·m). The scans overlap: many elements ask
 *   "what's to my right?" about the SAME suffix.
 *   Observation: walk nums2 left→right ONCE, remembering values that still
 *   need an answer. A new value x answers EVERY waiting value smaller than x
 *   (x is the first greater element for each of them — anything between was
 *   already popped, i.e. ≤ them... wait, no: popped elements were smaller than
 *   some earlier value, so they can't be "next greater" for the waiters).
 *   Why a stack helps / why popping is SAFE: the stack stays increasing
 *   (bottom→top). When x arrives, every popped value v has x as its genuine
 *   next greater: all elements between v and x were popped earlier, meaning
 *   each was ≤ v... hmm, precisely: they were popped by values ≤ ... the
 *   clean argument (see README 5.5): between v and x, everything is ≤ v,
 *   otherwise v would already have its answer. So x is v's FIRST greater
 *   element. v is resolved forever → discard. Values ≥ x stay: x can't answer
 *   them, and they may still answer future elements.
 *   Algorithm: increasing stack over nums2 + map value→answer; leftovers → -1.
 *   Complexity: Time O(n + m) — each element pushed/popped ≤ once;
 *   Space O(n) for stack + map.
 */

export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const answer = new Map<number, number>(); // value → its next greater
  const stack: number[] = []; // increasing stack of values awaiting answers

  for (const x of nums2) {
    while (stack.length > 0 && x > stack[stack.length - 1]) {
      const smaller = stack.pop()!; // x is smaller's next greater — resolved
      answer.set(smaller, x);
    }
    stack.push(x); // x waits for its own next greater
  }
  while (stack.length > 0) {
    answer.set(stack.pop()!, -1); // never beaten → -1
  }

  return nums1.map((x) => answer.get(x)!);
}

// ---------- TESTS ----------

function runTests() {
  const cases: Array<[number[], number[], number[]]> = [
    [[4, 1, 2], [1, 3, 4, 2], [-1, 3, -1]],
    [[2, 4], [1, 2, 3, 4], [3, -1]],
    [[1], [1], [-1]],
    [[3, 2, 1], [3, 2, 1], [-1, -1, -1]],
  ];
  let passed = 0;
  for (const [a, b, expected] of cases) {
    const got = nextGreaterElement(a, b);
    if (JSON.stringify(got) === JSON.stringify(expected)) {
      console.log(`✅ nextGreaterElement([${a}], [${b}]) = [${got}]`);
      passed++;
    } else {
      console.log(`❌ nextGreaterElement([${a}], [${b}]) = [${got}] (expected [${expected}])`);
    }
  }
  console.log(`\n${passed}/${cases.length} tests passed`);
  console.log("Time: O(n + m) | Space: O(n)");
}

if (require.main === module) {
  runTests();
}

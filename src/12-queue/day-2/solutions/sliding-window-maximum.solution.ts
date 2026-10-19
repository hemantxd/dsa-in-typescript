/**
 * DAY 2 — Solution: Sliding Window Maximum (LeetCode 239) ★★
 * ---------------------------------------------------------------
 * THOUGHT PROCESS
 *   Brute force idea: scan all k elements of every window — O(n·k). Windows
 *   overlap in k-1 elements, so almost all of that work is repeated.
 *   Observation: when a new value x arrives, every smaller value waiting in
 *   the window is DEAD: x is newer (stays in the window longer) AND ≥ them,
 *   so they can never be anyone's maximum. Only a decreasing sequence of
 *   "record highs" can still matter. And the current max is simply the
 *   oldest survivor — the FRONT of a deque.
 *   Why popping is SAFE (two directions!): from the BACK — a popped value v
 *   has x ≥ v with x newer, so v loses every future comparison to x and
 *   expires no later than x. Useless forever → discard. From the FRONT —
 *   an index ≤ i-k has physically left the window; it can't be any answer.
 *   Algorithm: deque of INDICES with decreasing values. For each i: evict
 *   smaller/equal from back, push i, evict expired front (≤ i-k), record
 *   nums[front] once i ≥ k-1.
 *   Complexity: Time O(n) — each index pushed/popped ≤ once; Space O(k).
 */

export function maxSlidingWindow(nums: number[], k: number): number[] {
  const deque: number[] = []; // indices; values strictly decreasing
  const answer: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    // 1. new value buries smaller/equal values — useless forever
    while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }
    deque.push(i);
    // 2. front slid out of the window — expired
    if (deque[0] <= i - k) {
      deque.shift();
    }
    // 3. record once the first full window exists; front is its max
    if (i >= k - 1) {
      answer.push(nums[deque[0]]);
    }
  }
  return answer;
}

// ---------- TESTS ----------

function runTests() {
  const cases: Array<[number[], number, number[]]> = [
    [[1, 3, -1, -3, 5, 3, 6, 7], 3, [3, 3, 5, 5, 6, 7]],
    [[1], 1, [1]],
    [[9, 8, 7, 6], 2, [9, 8, 7]],
    [[1, 3, 1, 2, 0, 5], 3, [3, 3, 2, 5]],
    [[7, 6, 5, 4, 3], 5, [7]], // whole array = one window
  ];
  let passed = 0;
  for (const [nums, k, expected] of cases) {
    const got = maxSlidingWindow(nums, k);
    if (JSON.stringify(got) === JSON.stringify(expected)) {
      console.log(`✅ maxSlidingWindow([${nums}], ${k}) = [${got}]`);
      passed++;
    } else {
      console.log(`❌ maxSlidingWindow([${nums}], ${k}) = [${got}] (expected [${expected}])`);
    }
  }
  console.log(`\n${passed}/${cases.length} tests passed`);
  console.log("Time: O(n) | Space: O(k)");
}

if (require.main === module) {
  runTests();
}

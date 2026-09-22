/**
 * DAY 3 — Solution: Largest Rectangle in Histogram (LeetCode 84) ★★
 * --------------------------------------------------------------------
 * THOUGHT PROCESS
 *   Brute force idea: for every pair of boundaries, take min height × width —
 *   O(n²). Too slow for n = 10^5.
 *   Observation: for bar j with height h, the tallest rectangle USING bar j
 *   (h as its height) stretches left/right until a STRICTLY SHORTER bar on
 *   each side. So each bar needs its previous-smaller and next-smaller bounds.
 *   That's TWO "nearest smaller" queries — the same family as Daily
 *   Temperatures ("nearest warmer"), just mirrored to "smaller" and asked in
 *   both directions. One increasing stack can find both in a single pass:
 *   when bar i arrives SHORTER than stack-top j, i is j's next-smaller, and
 *   the new stack top is j's previous-smaller. Compute j's area immediately.
 *   Why popping is SAFE: a shorter bar i fixes j's right boundary FOREVER
 *   (nothing past i can extend j's h-tall rectangle). And j can never serve as
 *   a boundary for anything to its right either — i is nearer AND shorter, so
 *   i blocks j for all future bars. j is useless forever → discard.
 *   Algorithm: increasing stack of indices over heights + a 0-height sentinel
 *   (flushes leftovers). On pop of j at position i with new top p:
 *     width = i - p - 1; area = heights[j] × width; track max.
 *   Complexity: Time O(n) — each index pushed/popped ≤ once (+1 sentinel);
 *   Space O(n).
 */

export function largestRectangleArea(heights: number[]): number {
  const stack: number[] = []; // increasing stack of indices (heights rising)
  let maxArea = 0;
  const n = heights.length;

  for (let i = 0; i <= n; i++) {
    const h = i === n ? 0 : heights[i]; // sentinel 0 flushes the stack at the end
    while (stack.length > 0 && h < heights[stack[stack.length - 1]]) {
      const j = stack.pop()!; // i is j's next-smaller boundary — j is DONE
      const prevSmaller = stack.length === 0 ? -1 : stack[stack.length - 1];
      const width = i - prevSmaller - 1;
      maxArea = Math.max(maxArea, heights[j] * width);
    }
    stack.push(i);
  }
  return maxArea;
}

// ---------- TESTS ----------

function runTests() {
  const cases: Array<[number[], number]> = [
    [[2, 1, 5, 6, 2, 3], 10],
    [[2, 4], 4],
    [[5], 5],
    [[1, 1, 1, 1], 4],
    [[4, 3, 2, 1], 6], // decreasing: 3×2=6 wins
    [[1, 2, 3, 4], 6], // increasing: 3×2=6 (or 2×3) wins
    [[0, 0, 0], 0],
  ];
  let passed = 0;
  for (const [input, expected] of cases) {
    const got = largestRectangleArea(input);
    if (got === expected) {
      console.log(`✅ largestRectangleArea([${input}]) = ${got}`);
      passed++;
    } else {
      console.log(`❌ largestRectangleArea([${input}]) = ${got} (expected ${expected})`);
    }
  }
  console.log(`\n${passed}/${cases.length} tests passed`);
  console.log("Time: O(n) | Space: O(n)");
}

if (require.main === module) {
  runTests();
}

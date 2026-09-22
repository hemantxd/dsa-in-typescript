/**
 * DAY 3 — Challenge 4 (boss fight): Largest Rectangle in Histogram (LC 84) ★★
 * -------------------------------------------------------------------------------
 * PROBLEM
 * Given bar heights (width 1 each), find the area of the largest rectangle
 * that fits entirely inside the bars.
 *
 * EXAMPLES
 *   largestRectangleArea([2,1,5,6,2,3]) → 10  (bars 5,6 → 2 wide × 5 tall)
 *   largestRectangleArea([2,4])         → 4   (min(2,4) × 2 wide)
 *   largestRectangleArea([5])           → 5
 *
 * CONSTRAINTS
 *   1 <= heights.length <= 10^5. Brute force (every pair of boundaries) is
 *   O(n²) — far too slow. Target: O(n).
 *
 * HINTS (read one at a time, only if stuck)
 *   H1. For bar i with height h: how far left/right can a rectangle of height h
 *       extend? Until a STRICTLY SHORTER bar on each side. So each bar needs
 *       its previous-smaller and next-smaller boundaries.
 *   H2. "Nearest smaller" = monotonic INCREASING stack of indices. Sound
 *       familiar? It's Daily Temperatures with "smaller" instead of "warmer".
 *   H3. When bar i < stack-top bar j: i is j's next-smaller boundary; j's
 *       previous-smaller is the new stack top. width = i - prevSmall - 1,
 *       area = heights[j] × width. Track the max. Why safe to pop j? A shorter
 *       bar has arrived — j's right boundary is FIXED forever, and j can never
 *       bound anything taller to its right (i is nearer and shorter). Useless
 *       forever → discard. Append a 0-height "sentinel" bar to flush the stack.
 *
 * YOUR TASK
 * Implement largestRectangleArea() below. Run THIS file to check yourself:
 *   npx ts-node src/11-stack/day-3/largest-rectangle.ts
 * The solution (with tests) lives in solutions/largest-rectangle.solution.ts —
 * open it ONLY after you have tried for 15–20 minutes.
 */

export function largestRectangleArea(heights: number[]): number {
  // TODO: increasing stack of indices + sentinel; area = h[j] × (i - prev - 1).
  throw new Error("Not implemented yet — your turn! (See Hints above.)");
}

// ---------- SELF-CHECK (no answers leaked — just pass/fail) ----------

function selfCheck() {
  const cases: Array<[number[], number]> = [
    [[2, 1, 5, 6, 2, 3], 10],
    [[2, 4], 4],
    [[5], 5],
  ];
  let passed = 0;
  for (const [input, expected] of cases) {
    try {
      const got = largestRectangleArea(input);
      if (got === expected) {
        console.log(`✅ largestRectangleArea([${input}]) = ${got}`);
        passed++;
      } else {
        console.log(`❌ largestRectangleArea([${input}]) = ${got} (expected ${expected})`);
      }
    } catch {
      console.log(`⏳ largestRectangleArea([${input}]) — not implemented yet.`);
    }
  }
  console.log(`\n${passed}/${cases.length} passing. Solution: solutions/largest-rectangle.solution.ts`);
}

if (require.main === module) {
  selfCheck();
}

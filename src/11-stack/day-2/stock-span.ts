/**
 * DAY 2 — Exercise 3: Stock Span (LeetCode 901 — simplified as a function)
 * --------------------------------------------------------------------------
 * PROBLEM
 * Given daily stock prices, return the SPAN of each day: the number of
 * consecutive days up to and including today with price <= today's price.
 *
 * EXAMPLES
 *   stockSpan([100,80,60,70,60,75,85]) → [1,1,1,2,1,4,6]
 *     70: days 60,70 qualify → 2.  75: 60,70,60,75 qualify → 4.
 *     85: everything before is <= 85 → 6... wait, 100 > 85! → 6 (days 1..6).
 *   stockSpan([10,4,5,90,120,80]) → [1,1,2,4,5,1]
 *
 * CONSTRAINTS
 *   1 <= prices.length <= 10^5.
 *
 * HINTS (read one at a time, only if stuck)
 *   H1. Span = today minus the previous day with a STRICTLY greater price.
 *       ("Previous greater element" — same family as next greater!)
 *   H2. Walk left to right, keeping an increasing stack of indices with no
 *       "previous greater" resolved... actually here it's simpler: pop every
 *       index with price <= today (they can't bound ANY future span either —
 *       today is nearer AND at least as tall, so they are useless forever).
 *   H3. After popping, span = i - stack.top (or i + 1 if the stack is empty).
 *       Then push i. Store (price, span) pairs or recompute from indices.
 *
 * YOUR TASK
 * Implement stockSpan() below. Run THIS file to check yourself:
 *   npx ts-node src/11-stack/day-2/stock-span.ts
 * The solution (with tests) lives in solutions/stock-span.solution.ts —
 * open it ONLY after you have tried for 10–15 minutes.
 */

export function stockSpan(prices: number[]): number[] {
  // TODO: increasing stack of indices; pop while prices[top] <= today.
  throw new Error("Not implemented yet — your turn! (See Hints above.)");
}

// ---------- SELF-CHECK (no answers leaked — just pass/fail) ----------

function selfCheck() {
  const cases: Array<[number[], number[]]> = [
    [[100, 80, 60, 70, 60, 75, 85], [1, 1, 1, 2, 1, 4, 6]],
    [[10, 4, 5, 90, 120, 80], [1, 1, 2, 4, 5, 1]],
  ];
  let passed = 0;
  for (const [input, expected] of cases) {
    try {
      const got = stockSpan(input);
      if (JSON.stringify(got) === JSON.stringify(expected)) {
        console.log(`✅ stockSpan([${input}]) = [${got}]`);
        passed++;
      } else {
        console.log(`❌ stockSpan([${input}]) = [${got}] (expected [${expected}])`);
      }
    } catch {
      console.log(`⏳ stockSpan([${input}]) — not implemented yet.`);
    }
  }
  console.log(`\n${passed}/${cases.length} passing. Solution: solutions/stock-span.solution.ts`);
}

if (require.main === module) {
  selfCheck();
}

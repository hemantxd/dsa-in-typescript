/**
 * DAY 2 — Solution: Stock Span (simplified LeetCode 901)
 * ----------------------------------------------------------
 * THOUGHT PROCESS
 *   Brute force idea: for each day, walk left while prices are ≤ today —
 *   O(n²) worst case (e.g. steadily rising prices re-walk everything).
 *   Observation: span(i) = i - (previous index with STRICTLY greater price).
 *   So this is a "previous greater element" problem — the mirror of NGE.
 *   Why a stack helps / why popping is SAFE: keep an increasing stack of
 *   indices (strictly decreasing prices bottom→top... precisely: prices at
 *   stack indices are strictly decreasing). When today arrives with price p,
 *   every popped index has price ≤ p: it can NEVER bound any future span,
 *   because today is nearer AND at least as tall. Useless forever → discard.
 *   Algorithm: pop while prices[top] <= today; span = empty ? i+1 : i - top;
 *   push i.
 *   Complexity: Time O(n) — each index pushed/popped ≤ once; Space O(n).
 */

export function stockSpan(prices: number[]): number[] {
  const answer: number[] = [];
  const stack: number[] = []; // indices with strictly decreasing prices

  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[stack[stack.length - 1]] <= prices[i]) {
      stack.pop(); // buried by today: nearer and ≥ — useless forever
    }
    // top (if any) is the previous strictly-greater day → the span boundary
    answer.push(stack.length === 0 ? i + 1 : i - stack[stack.length - 1]);
    stack.push(i);
  }
  return answer;
}

// ---------- TESTS ----------

function runTests() {
  const cases: Array<[number[], number[]]> = [
    [[100, 80, 60, 70, 60, 75, 85], [1, 1, 1, 2, 1, 4, 6]],
    [[10, 4, 5, 90, 120, 80], [1, 1, 2, 4, 5, 1]],
    [[5, 4, 3, 2, 1], [1, 1, 1, 1, 1]],
    [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],
    [[7], [1]],
  ];
  let passed = 0;
  for (const [input, expected] of cases) {
    const got = stockSpan(input);
    if (JSON.stringify(got) === JSON.stringify(expected)) {
      console.log(`✅ stockSpan([${input}]) = [${got}]`);
      passed++;
    } else {
      console.log(`❌ stockSpan([${input}]) = [${got}] (expected [${expected}])`);
    }
  }
  console.log(`\n${passed}/${cases.length} tests passed`);
  console.log("Time: O(n) | Space: O(n)");
}

if (require.main === module) {
  runTests();
}

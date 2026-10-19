/**
 * DAY 2 — Solution: Reveal Cards In Increasing Order (LeetCode 950)
 * ----------------------------------------------------------------------
 * THOUGHT PROCESS
 *   Brute force idea: try orderings until the reveal comes out sorted —
 *   factorial possibilities. Useless.
 *   Observation: the reveal PROCESS is fixed (reveal top, move top to
 *   bottom). Instead of asking "what output does this order give?", ask the
 *   inverse: "what order feeds the process to produce sorted output?" Run the
 *   process BACKWARDS: the inverse of (reveal top, move top→bottom) is
 *   (move bottom→top, place next card on top). Feed cards largest-first.
 *   Why a deque helps: inverse moves touch BOTH ends — take from the bottom,
 *   place on the top. A deque does both in O(1).
 *   Algorithm: sort ascending; iterate descending; before each card (except
 *   the first) move bottom→top; unshift the card.
 *   Complexity: Time O(n log n) for the sort (simulation itself O(n));
 *   Space O(n).
 */

export function deckRevealedIncreasing(deck: number[]): number[] {
  deck.sort((a, b) => a - b); // reveal order must be increasing
  const deque: number[] = [];

  for (let i = deck.length - 1; i >= 0; i--) {
    if (deque.length > 0) {
      deque.unshift(deque.pop()!); // inverse move: bottom card back to top
    }
    deque.unshift(deck[i]); // place the next-largest card on top
  }
  return deque;
}

// ---------- TESTS ----------

function runTests() {
  // verify by actually simulating the reveal process on the answer
  function simulate(order: number[]): number[] {
    const q = [...order];
    const out: number[] = [];
    while (q.length > 0) {
      out.push(q.shift()!); // reveal top
      if (q.length > 0) q.push(q.shift()!); // move next top to bottom
    }
    return out;
  }

  const cases: number[][] = [
    [17, 13, 11, 2, 3, 5, 7],
    [1, 1000],
    [1],
    [1, 2, 3, 4, 5],
  ];
  let passed = 0;
  for (const deck of cases) {
    const order = deckRevealedIncreasing([...deck]);
    const revealed = simulate(order);
    const sorted = [...deck].sort((a, b) => a - b);
    const ok = JSON.stringify(revealed) === JSON.stringify(sorted);
    if (ok) {
      console.log(`✅ [${deck}] → order [${order}] reveals sorted`);
      passed++;
    } else {
      console.log(`❌ [${deck}] → order [${order}] reveals [${revealed}]`);
    }
  }

  // exact LeetCode answers
  const exact = JSON.stringify(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7])) === "[2,13,3,11,5,17,7]";
  if (exact) {
    console.log("✅ exact LeetCode answer matches");
    passed++;
  } else {
    console.log("❌ exact LeetCode answer mismatch");
  }

  console.log(`\n${passed}/${cases.length + 1} tests passed`);
  console.log("Time: O(n log n) sort + O(n) simulation | Space: O(n)");
}

if (require.main === module) {
  runTests();
}

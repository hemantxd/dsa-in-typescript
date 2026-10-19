/**
 * DAY 2 — Exercise 3: Reveal Cards In Increasing Order (LeetCode 950)
 * -----------------------------------------------------------------------
 * PROBLEM
 * A deck is revealed one card at a time: take the TOP card (reveal it), then
 * move the next top card to the BOTTOM. Repeat. Given the deck, return an
 * ORDERING of it so that the revealed sequence is increasing.
 *
 * EXAMPLES
 *   deckRevealedIncreasing([17,13,11,2,3,5,7]) → [2,13,3,11,5,17,7]
 *     reveal 2, move 13 down, reveal 3, move 11 down, … → 2,3,5,7,11,13,17 ✓
 *   deckRevealedIncreasing([1,1000]) → [1,1000]
 *
 * CONSTRAINTS
 *   1 <= deck.length <= 1000, all values unique.
 *
 * HINTS (read one at a time, only if stuck)
 *   H1. Forward simulation tells you WHAT comes out for a given order — but
 *       you need the REVERSE: which order produces sorted output? Simulate
 *       BACKWARDS: feed sorted cards in REVERSE through the inverse moves.
 *   H2. Inverse of "reveal top, move top to bottom" is: "move bottom to top,
 *       then place next card on top". A deque supports both ends.
 *   H3. Sort ascending; iterate DESCENDING; before placing each card (except
 *       the first), move the bottom card to the top. Then unshift the card.
 *
 * YOUR TASK
 * Implement deckRevealedIncreasing() below. Run THIS file to check yourself:
 *   npx ts-node src/12-queue/day-2/reveal-cards.ts
 * The solution (with tests) lives in solutions/reveal-cards.solution.ts —
 * open it ONLY after you have tried for 10–15 minutes.
 */

export function deckRevealedIncreasing(deck: number[]): number[] {
  // TODO: sort, walk down, inverse moves (bottom→top, then unshift) on a deque.
  throw new Error("Not implemented yet — your turn! (See Hints above.)");
}

// ---------- SELF-CHECK (no answers leaked — just pass/fail) ----------

function selfCheck() {
  const cases: Array<[number[], number[]]> = [
    [[17, 13, 11, 2, 3, 5, 7], [2, 13, 3, 11, 5, 17, 7]],
    [[1, 1000], [1, 1000]],
    [[1], [1]],
  ];
  let passed = 0;
  for (const [deck, expected] of cases) {
    try {
      const got = deckRevealedIncreasing([...deck]);
      if (JSON.stringify(got) === JSON.stringify(expected)) {
        console.log(`✅ deckRevealedIncreasing([${deck}]) = [${got}]`);
        passed++;
      } else {
        console.log(`❌ deckRevealedIncreasing([${deck}]) = [${got}] (expected [${expected}])`);
      }
    } catch {
      console.log(`⏳ deckRevealedIncreasing([${deck}]) — not implemented yet.`);
    }
  }
  console.log(`\n${passed}/${cases.length} passing. Solution: solutions/reveal-cards.solution.ts`);
}

if (require.main === module) {
  selfCheck();
}

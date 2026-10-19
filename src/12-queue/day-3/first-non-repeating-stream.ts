/**
 * DAY 3 — Challenge 1 (warm-up): First Non-Repeating Char in a Stream
 * ------------------------------------------------------------------------
 * PROBLEM (GFG classic)
 * Given a stream of lowercase letters, after EACH character report the first
 * non-repeating character seen so far — or '#' if every character so far
 * repeats.
 *
 * EXAMPLES
 *   firstNonRepeating("aabc") → "a#bb"
 *     'a' → first unique is 'a'; 'a' again → none ('#');
 *     'b' → 'b'; 'c' → 'b' still first.
 *   firstNonRepeating("zz")   → "z#"
 *   firstNonRepeating("abc")  → "abc"
 *
 * HINTS (read one at a time, only if stuck)
 *   H1. A frequency map tells you WHAT repeats, but not WHICH came first.
 *       You need arrival order too — a queue of candidates in arrival order.
 *   H2. On each char: bump its count, enqueue it. Then peek: while the front
 *       has count > 1, dequeue it (it's disqualified forever). Front (if any)
 *       is the answer; empty queue → '#'.
 *   H3. Why safe to drop the front? Its count only grows — once repeating,
 *       it can never become unique again. Useless forever → discard.
 *
 * YOUR TASK
 * Implement firstNonRepeating() below. Run THIS file to check yourself:
 *   npx ts-node src/12-queue/day-3/first-non-repeating-stream.ts
 * The solution (with tests) lives in solutions/first-non-repeating-stream.solution.ts —
 * open it ONLY after you have tried for 15–20 minutes.
 */

export function firstNonRepeating(stream: string): string {
  // TODO: freq map + queue of candidates; drop disqualified fronts.
  throw new Error("Not implemented yet — your turn! (See Hints above.)");
}

// ---------- SELF-CHECK (no answers leaked — just pass/fail) ----------

function selfCheck() {
  const cases: Array<[string, string]> = [
    ["aabc", "a#bb"],
    ["zz", "z#"],
    ["abc", "aaa"],
  ];
  let passed = 0;
  for (const [input, expected] of cases) {
    try {
      const got = firstNonRepeating(input);
      if (got === expected) {
        console.log(`✅ firstNonRepeating("${input}") = "${got}"`);
        passed++;
      } else {
        console.log(`❌ firstNonRepeating("${input}") = "${got}" (expected "${expected}")`);
      }
    } catch {
      console.log(`⏳ firstNonRepeating("${input}") — not implemented yet.`);
    }
  }
  console.log(`\n${passed}/${cases.length} passing. Solution: solutions/first-non-repeating-stream.solution.ts`);
}

if (require.main === module) {
  selfCheck();
}

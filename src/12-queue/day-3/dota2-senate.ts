/**
 * DAY 3 — Challenge 2: Dota2 Senate (LeetCode 649)
 * -----------------------------------------------------
 * PROBLEM
 * Senators are 'R' (Radiant) or 'D' (Dire) in a line. Rounds proceed in order:
 * each senator BANS one opponent (who misses all future rounds). Banned
 * senators are skipped. Voting ends when one party is gone. Given the initial
 * lineup, predict the winner ("Radiant" or "Dire"). Both sides play optimally.
 *
 * EXAMPLES
 *   predictPartyVictory("RD")    → "Radiant"  (R bans D first)
 *   predictPartyVictory("RDD")   → "Dire"     (R bans one D, D bans R, D remains)
 *   predictPartyVictory("RRDDD") → "Radiant"
 *
 * CONSTRAINTS
 *   1 <= senate.length <= 10^4.
 *
 * HINTS (read one at a time, only if stuck)
 *   H1. Simulating round-by-round with deletions is O(n²). Notice the pattern:
 *       each surviving senator acts again exactly n steps later. That's a
 *       queue: act, then re-enqueue for the next round.
 *   H2. Keep TWO queues of indices: radiant and dire. Each round, compare
 *       fronts: the SMALLER index acts first, bans the other (drop it), and
 *       re-enqueues itself at index + n (next round).
 *   H3. When one queue empties, the other party wins. Each step removes one
 *       senator → O(n) steps total.
 *
 * YOUR TASK
 * Implement predictPartyVictory() below. Run THIS file to check yourself:
 *   npx ts-node src/12-queue/day-3/dota2-senate.ts
 * The solution (with tests) lives in solutions/dota2-senate.solution.ts —
 * open it ONLY after you have tried for 15–20 minutes.
 */

export function predictPartyVictory(senate: string): string {
  // TODO: two index-queues; smaller front bans larger, winner re-queues at +n.
  throw new Error("Not implemented yet — your turn! (See Hints above.)");
}

// ---------- SELF-CHECK (no answers leaked — just pass/fail) ----------

function selfCheck() {
  const cases: Array<[string, string]> = [
    ["RD", "Radiant"],
    ["RDD", "Dire"],
    ["RRDDD", "Radiant"],
  ];
  let passed = 0;
  for (const [input, expected] of cases) {
    try {
      const got = predictPartyVictory(input);
      if (got === expected) {
        console.log(`✅ predictPartyVictory("${input}") = "${got}"`);
        passed++;
      } else {
        console.log(`❌ predictPartyVictory("${input}") = "${got}" (expected "${expected}")`);
      }
    } catch {
      console.log(`⏳ predictPartyVictory("${input}") — not implemented yet.`);
    }
  }
  console.log(`\n${passed}/${cases.length} passing. Solution: solutions/dota2-senate.solution.ts`);
}

if (require.main === module) {
  selfCheck();
}

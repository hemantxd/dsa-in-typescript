/**
 * DAY 1 — Exercise 3: Remove Adjacent Duplicates (LeetCode 1047)
 * -----------------------------------------------------------------
 * PROBLEM
 * Given a string s, repeatedly delete adjacent duplicate characters until
 * no more deletions are possible. Return the final string.
 * ("abbaca" → "aa" removed → "ca"... trace it yourself below.)
 *
 * EXAMPLES
 *   removeDuplicates("abbaca") → "ca"
 *   removeDuplicates("azxxzy") → "ay"
 *   removeDuplicates("a")      → "a"
 *
 * CONSTRAINTS
 *   1 <= s.length <= 10^5
 *
 * HINTS (read one at a time, only if stuck)
 *   H1. Process left to right. Each new character only cares about its
 *       immediate left neighbour in the CURRENT (partially cleaned) answer.
 *   H2. The "current answer" behaves like a stack: append normally, but if the
 *       new char equals the top, pop instead (they cancel each other out).
 *   H3. "abbaca": a | b | b cancels b | a cancels a | c | a → "ca".
 *
 * YOUR TASK
 * Implement removeDuplicates() below. Run THIS file to check yourself:
 *   npx ts-node src/11-stack/day-1/remove-duplicates.ts
 * The solution (with tests) lives in solutions/remove-duplicates.solution.ts —
 * open it ONLY after you have tried for 10–15 minutes.
 */

export function removeDuplicates(s: string): string {
  // TODO: use a char stack — equal to top? pop. Otherwise push.
  throw new Error("Not implemented yet — your turn! (See Hints above.)");
}

// ---------- SELF-CHECK (no answers leaked — just pass/fail) ----------

function selfCheck() {
  const cases: Array<[string, string]> = [
    ["abbaca", "ca"],
    ["azxxzy", "ay"],
    ["a", "a"],
    ["aa", ""],
  ];
  let passed = 0;
  for (const [input, expected] of cases) {
    try {
      const got = removeDuplicates(input);
      if (got === expected) {
        console.log(`✅ removeDuplicates("${input}") = "${got}"`);
        passed++;
      } else {
        console.log(`❌ removeDuplicates("${input}") = "${got}" (expected "${expected}")`);
      }
    } catch {
      console.log(`⏳ removeDuplicates("${input}") — not implemented yet.`);
    }
  }
  console.log(`\n${passed}/${cases.length} passing. Solution: solutions/remove-duplicates.solution.ts`);
}

if (require.main === module) {
  selfCheck();
}

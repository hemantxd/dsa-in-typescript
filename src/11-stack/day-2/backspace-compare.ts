/**
 * DAY 2 — Exercise 5: Backspace String Compare (LeetCode 844)
 * ---------------------------------------------------------------
 * PROBLEM
 * '#' means backspace (deletes the previous character). Determine whether
 * the two strings are equal AFTER applying all backspaces.
 *
 * EXAMPLES
 *   backspaceCompare("ab#c", "ad#c") → true   (both become "ac")
 *   backspaceCompare("ab##", "c#d#") → true   (both become "")
 *   backspaceCompare("a#c", "b")     → false  ("c" vs "b")
 *
 * CONSTRAINTS
 *   1 <= s.length, t.length <= 200.
 *
 * HINTS (read one at a time, only if stuck)
 *   H1. '#' undoes the most recent surviving character. "Undo the most
 *       recent" = pop from a stack.
 *   H2. Build the final string for each input: normal char → push,
 *       '#' → pop (if anything is there — guard the empty case!).
 *   H3. (Follow-up, O(1) space: walk both strings backwards, skipping
 *       characters cancelled by '#' counters. Try it after the stack version.)
 *
 * YOUR TASK
 * Implement backspaceCompare() below. Run THIS file to check yourself:
 *   npx ts-node src/11-stack/day-2/backspace-compare.ts
 * The solution (with tests) lives in solutions/backspace-compare.solution.ts —
 * open it ONLY after you have tried for 10–15 minutes.
 */

export function backspaceCompare(s: string, t: string): boolean {
  // TODO: helper that builds the final string with a stack; compare results.
  throw new Error("Not implemented yet — your turn! (See Hints above.)");
}

// ---------- SELF-CHECK (no answers leaked — just pass/fail) ----------

function selfCheck() {
  const cases: Array<[string, string, boolean]> = [
    ["ab#c", "ad#c", true],
    ["ab##", "c#d#", true],
    ["a#c", "b", false],
    ["a##c", "#a#c", true],
  ];
  let passed = 0;
  for (const [s, t, expected] of cases) {
    try {
      const got = backspaceCompare(s, t);
      if (got === expected) {
        console.log(`✅ backspaceCompare("${s}", "${t}") = ${got}`);
        passed++;
      } else {
        console.log(`❌ backspaceCompare("${s}", "${t}") = ${got} (expected ${expected})`);
      }
    } catch {
      console.log(`⏳ backspaceCompare("${s}", "${t}") — not implemented yet.`);
    }
  }
  console.log(`\n${passed}/${cases.length} passing. Solution: solutions/backspace-compare.solution.ts`);
}

if (require.main === module) {
  selfCheck();
}

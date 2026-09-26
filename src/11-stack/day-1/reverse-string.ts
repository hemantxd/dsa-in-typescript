/**
 * DAY 1 — Exercise 1: Reverse a String (warm-up)
 * ------------------------------------------------
 * PROBLEM
 * Given a string s, return it reversed.
 *
 * EXAMPLES
 *   reverseString("hello") → "olleh"
 *   reverseString("stack") → "kcats"
 *   reverseString("")      → ""
 *
 * CONSTRAINTS
 *   0 <= s.length <= 10^5
 *
 * HINTS (read one at a time, only if stuck)
 *   H1. A stack returns items in the reverse order they went in. So…?
 *   H2. Push every character, then pop them all into the answer.
 *   H3. push = s[i] in order; pop = reversed order. That's the whole trick.
 *
 * YOUR TASK
 * Implement reverseString() below. Run THIS file to check yourself:
 *   npx ts-node src/11-stack/day-1/reverse-string.ts
 * The solution (with tests) lives in solutions/reverse-string.solution.ts —
 * open it ONLY after you have tried for 10–15 minutes.
 */

export function reverseString(s: string): string {
  // TODO: push each char onto a stack, then pop them into the result.

  const stack: string[] = []; s


  throw new Error("Not implemented yet — your turn! (See Hints above.)");
}

// ---------- SELF-CHECK (no answers leaked — just pass/fail) ----------

function selfCheck() {
  const cases: Array<[string, string]> = [
    ["hello", "olleh"],
    ["stack", "kcats"],
    ["a", "a"],
    ["", ""],
  ];
  let passed = 0;
  for (const [input, expected] of cases) {
    try {
      const got = reverseString(input);
      if (got === expected) {
        console.log(`✅ reverseString("${input}") = "${got}"`);
        passed++;
      } else {
        console.log(`❌ reverseString("${input}") = "${got}" (expected "${expected}")`);
      }
    } catch {
      console.log(`⏳ reverseString("${input}") — not implemented yet.`);
    }
  }
  console.log(`\n${passed}/${cases.length} passing. Solution: solutions/reverse-string.solution.ts`);
}

if (require.main === module) {
  selfCheck();
}

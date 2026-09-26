/**
 * DAY 1 — Exercise 2: Valid Parentheses (LeetCode 20) ★
 * --------------------------------------------------------
 * PROBLEM
 * Given a string s containing just the characters '(', ')', '{', '}',
 * '[' and ']', determine if the input string is valid. A string is valid if:
 *   1. Open brackets are closed by the same type of brackets.
 *   2. Open brackets are closed in the correct order.
 *   3. Every close bracket has a corresponding open bracket.
 *
 * EXAMPLES
 *   isValid("()")     → true
 *   isValid("()[]{}") → true
 *   isValid("(]")     → false
 *   isValid("([)]")   → false   (correct types, WRONG order)
 *   isValid("{[]}")   → true
 *   isValid(")")      → false   (nothing to match it)
 *
 * CONSTRAINTS
 *   1 <= s.length <= 10^4
 *
 * HINTS (read one at a time, only if stuck)
 *   H1. When you see an OPENER, you can't decide yet — remember it for later.
 *       What remembers "most recent unfinished business"? A stack.
 *   H2. When you see a CLOSER, which opener must it match? The MOST RECENT
 *       unmatched one — exactly the top of the stack.
 *   H3. Push openers. On a closer: if the stack is empty → false; pop the top;
 *       if it isn't the matching opener → false. Non-empty stack at the end → false.
 *
 * YOUR TASK
 * Implement isValid() below. Run THIS file to check yourself:
 *   npx ts-node src/11-stack/day-1/valid-parentheses.ts
 * The solution (with tests) lives in solutions/valid-parentheses.solution.ts —
 * open it ONLY after you have tried for 10–15 minutes.
 */

export function isValid(s: string): boolean {
  // TODO: push openers; on a closer, pop and check the match.
  throw new Error("Not implemented yet — your turn! (See Hints above.)");
}

// ---------- SELF-CHECK (no answers leaked — just pass/fail) ----------

function selfCheck() {
  const cases: Array<[string, boolean]> = [
    ["()", true],
    ["()[]{}", true],
    ["(]", false],
    ["([)]", false],
    ["{[]}", true],
    [")", false],
    ["(", false],
  ];
  let passed = 0;
  for (const [input, expected] of cases) {
    try {
      const got = isValid(input);
      if (got === expected) {
        console.log(`✅ isValid("${input}") = ${got}`);
        passed++;
      } else {
        console.log(`❌ isValid("${input}") = ${got} (expected ${expected})`);
      }
    } catch {
      console.log(`⏳ isValid("${input}") — not implemented yet.`);
    }
  }
  console.log(`\n${passed}/${cases.length} passing. Solution: solutions/valid-parentheses.solution.ts`);
}

if (require.main === module) {
  selfCheck();
}

/**
 * DAY 2 — Exercise 4: Evaluate Reverse Polish Notation (LeetCode 150)
 * ----------------------------------------------------------------------
 * PROBLEM
 * Evaluate an expression in Reverse Polish Notation: operators come AFTER
 * their operands. ["2","1","+","3","*"] means ((2 + 1) * 3) = 9.
 *
 * EXAMPLES
 *   evalRPN(["2","1","+","3","*"]) → 9
 *   evalRPN(["4","13","5","/","+"]) → 6   (4 + (13/5) = 4 + 2 = 6)
 *   evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]) → 22
 *
 * CONSTRAINTS
 *   Tokens are integers or '+','-','*','/'. Division truncates toward zero.
 *   The expression is always valid.
 *
 * HINTS (read one at a time, only if stuck)
 *   H1. In "2 1 +", when you reach '+', which two numbers does it apply to?
 *       The two MOST RECENT ones. That screams a stack of operands.
 *   H2. Number → push. Operator → pop b, pop a (ORDER MATTERS for - and /!),
 *       push the result of a <op> b.
 *   H3. For division use Math.trunc(a / b) (truncates toward zero).
 *
 * YOUR TASK
 * Implement evalRPN() below. Run THIS file to check yourself:
 *   npx ts-node src/11-stack/day-2/reverse-polish-notation.ts
 * The solution (with tests) lives in solutions/reverse-polish-notation.solution.ts —
 * open it ONLY after you have tried for 10–15 minutes.
 */

export function evalRPN(tokens: string[]): number {
  // TODO: operand stack — numbers in, operators collapse the top two.
  throw new Error("Not implemented yet — your turn! (See Hints above.)");
}

// ---------- SELF-CHECK (no answers leaked — just pass/fail) ----------

function selfCheck() {
  const cases: Array<[string[], number]> = [
    [["2", "1", "+", "3", "*"], 9],
    [["4", "13", "5", "/", "+"], 6],
    [["18"], 18],
  ];
  let passed = 0;
  for (const [input, expected] of cases) {
    try {
      const got = evalRPN(input);
      if (got === expected) {
        console.log(`✅ evalRPN([${input}]) = ${got}`);
        passed++;
      } else {
        console.log(`❌ evalRPN([${input}]) = ${got} (expected ${expected})`);
      }
    } catch {
      console.log(`⏳ evalRPN([${input}]) — not implemented yet.`);
    }
  }
  console.log(`\n${passed}/${cases.length} passing. Solution: solutions/reverse-polish-notation.solution.ts`);
}

if (require.main === module) {
  selfCheck();
}

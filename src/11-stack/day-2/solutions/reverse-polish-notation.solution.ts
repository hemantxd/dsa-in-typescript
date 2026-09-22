/**
 * DAY 2 — Solution: Evaluate Reverse Polish Notation (LeetCode 150)
 * --------------------------------------------------------------------
 * THOUGHT PROCESS
 *   Brute force idea: parse the expression with precedence rules and
 *   parentheses — but RPN was INVENTED to avoid all that. The notation itself
 *   tells you the evaluation order: an operator always applies to the two
 *   values immediately before it.
 *   Observation: "the two most recent operands" = the top two stack entries.
 *   Why a stack helps: operands wait on the stack; each operator collapses
 *   the top two into one result, which itself becomes an operand for later
 *   operators. The stack depth mirrors the nesting of the computation.
 *   Algorithm: number → push; operator → pop b, pop a (ORDER: a op b!),
 *   push result. One value remains at the end.
 *   Complexity: Time O(n), Space O(n).
 */

export function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  for (const t of tokens) {
    if (t === "+" || t === "-" || t === "*" || t === "/") {
      const b = stack.pop()!; // second operand (popped FIRST)
      const a = stack.pop()!; // first operand
      if (t === "+") stack.push(a + b);
      else if (t === "-") stack.push(a - b);
      else if (t === "*") stack.push(a * b);
      else stack.push(Math.trunc(a / b)); // truncate toward zero
    } else {
      stack.push(Number(t));
    }
  }
  return stack.pop()!;
}

// ---------- TESTS ----------

function runTests() {
  const cases: Array<[string[], number]> = [
    [["2", "1", "+", "3", "*"], 9],
    [["4", "13", "5", "/", "+"], 6],
    [["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"], 22],
    [["18"], 18],
    [["3", "4", "-"], -1], // order check: 3 - 4, NOT 4 - 3
    [["7", "2", "/"], 3], // truncates: 3.5 → 3
    [["-7", "2", "/"], -3], // toward zero: -3.5 → -3
  ];
  let passed = 0;
  for (const [input, expected] of cases) {
    const got = evalRPN(input);
    if (got === expected) {
      console.log(`✅ evalRPN([${input}]) = ${got}`);
      passed++;
    } else {
      console.log(`❌ evalRPN([${input}]) = ${got} (expected ${expected})`);
    }
  }
  console.log(`\n${passed}/${cases.length} tests passed`);
  console.log("Time: O(n) | Space: O(n)");
}

if (require.main === module) {
  runTests();
}

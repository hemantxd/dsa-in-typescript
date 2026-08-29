/**
 * Problem: Generate Parentheses (LeetCode 22)
 * ---------------------------------------------
 * Given n pairs of parentheses, generate all combinations of
 * well-formed parentheses using recursion/backtracking.
 *
 * Examples:
 *   generateParenthesis(3) → ["((()))","(()())","(())()","()(())","()()()"]
 *   generateParenthesis(1) → ["()"]
 */

// ---------- SOLUTION ----------

function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  function backtrack(current: string, open: number, close: number): void {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }
    if (open < n) backtrack(current + "(", open + 1, close); // can still open
    if (close < open) backtrack(current + ")", open, close + 1); // can close only after open
  }

  backtrack("", 0, 0);
  return result;
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { n: 1, expected: ["()"] },
    { n: 2, expected: ["(())", "()()"] },
    { n: 3, expected: ["((()))", "(()())", "(())()", "()(())", "()()()"] },
  ];

  let passed = 0;
  for (const { n, expected } of tests) {
    const result = generateParenthesis(n).sort();
    const ok =
      result.length === expected.length &&
      result.every((r, i) => r === expected.sort()[i]);
    if (ok) {
      console.log(`✅ generateParenthesis(${n}) → [${result.join(", ")}]`);
      passed++;
    } else {
      console.log(`❌ generateParenthesis(${n}) → [${result.join(", ")}]`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
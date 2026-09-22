/**
 * DAY 1 — Solution: Valid Parentheses (LeetCode 20) ★
 * ------------------------------------------------------
 * THOUGHT PROCESS
 *   Brute force idea: for each closer, scan backwards for its opener. Messy,
 *   and nesting ("([)]" vs "{[]}") makes index juggling error-prone — O(n²).
 *   Observation: a closer must match the MOST RECENT unmatched opener. "Most
 *   recent unfinished business" is exactly what a stack's top holds.
 *   Why a stack helps: nesting means last-opened closes first = LIFO order.
 *   Algorithm: push every opener; on a closer, pop and require the matching
 *   opener (empty stack → invalid). Non-empty stack at the end → invalid.
 *   Complexity: Time O(n) — one pass; Space O(n) worst case (all openers).
 */

export function isValid(s: string): boolean {
  const stack: string[] = [];
  // map each CLOSER to the opener it requires
  const match: Record<string, string> = { ")": "(", "]": "[", "}": "{" };

  for (const ch of s) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch); // opener: can't decide yet — remember it
    } else {
      if (stack.length === 0) return false; // closer with nothing to match
      const top = stack.pop()!; // most recent unmatched opener
      if (top !== match[ch]) return false; // wrong type or wrong order
    }
  }

  return stack.length === 0; // leftovers = unclosed openers
}

// ---------- TESTS ----------

function runTests() {
  const cases: Array<[string, boolean]> = [
    ["()", true],
    ["()[]{}", true],
    ["(]", false],
    ["([)]", false],
    ["{[]}", true],
    [")", false],
    ["(", false],
    ["", true],
    ["((()))", true],
    ["(()", false],
  ];
  let passed = 0;
  for (const [input, expected] of cases) {
    const got = isValid(input);
    if (got === expected) {
      console.log(`✅ isValid("${input}") = ${got}`);
      passed++;
    } else {
      console.log(`❌ isValid("${input}") = ${got} (expected ${expected})`);
    }
  }
  console.log(`\n${passed}/${cases.length} tests passed`);
  console.log("Time: O(n) | Space: O(n)");
}

if (require.main === module) {
  runTests();
}

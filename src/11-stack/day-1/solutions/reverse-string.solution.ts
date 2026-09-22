/**
 * DAY 1 — Solution: Reverse a String
 * -------------------------------------
 * THOUGHT PROCESS
 *   Brute force idea: build the answer by reading the string backwards
 *   (s[n-1] + s[n-2] + ...). That already works in O(n) — so why a stack?
 *   Because this exercise teaches the CORE stack behaviour: whatever goes in
 *   last comes out first. Push order in, pop order out = reversed.
 *   Observation: push('h'),push('e'),... then pop → 'o','l','l','e','h'.
 *   Why a stack helps: LIFO *is* reversal. No index maths needed.
 *   Algorithm: push every char → pop everything into the result.
 *   Complexity: Time O(n), Space O(n) for the stack.
 */

export function reverseString(s: string): string {
  const stack: string[] = [];
  for (const ch of s) {
    stack.push(ch);
  }
  let result = "";
  while (stack.length > 0) {
    result += stack.pop();
  }
  return result;
}

// ---------- TESTS ----------

function runTests() {
  const cases: Array<[string, string]> = [
    ["hello", "olleh"],
    ["stack", "kcats"],
    ["a", "a"],
    ["", ""],
    ["ab", "ba"],
  ];
  let passed = 0;
  for (const [input, expected] of cases) {
    const got = reverseString(input);
    if (got === expected) {
      console.log(`✅ reverseString("${input}") = "${got}"`);
      passed++;
    } else {
      console.log(`❌ reverseString("${input}") = "${got}" (expected "${expected}")`);
    }
  }
  console.log(`\n${passed}/${cases.length} tests passed`);
  console.log("Time: O(n) | Space: O(n)");
}

if (require.main === module) {
  runTests();
}

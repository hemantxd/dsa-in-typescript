/**
 * DAY 1 — Solution: Remove Adjacent Duplicates (LeetCode 1047)
 * ---------------------------------------------------------------
 * THOUGHT PROCESS
 *   Brute force idea: rescan the string after every deletion — O(n²), because
 *   each deletion can create a NEW adjacent pair ("azxxzy" → "azzy" → "ay").
 *   Observation: deletions only ever affect the boundary between the cleaned
 *   prefix and the next character. So one left-to-right pass suffices IF the
 *   "cleaned so far" part supports remove-from-end.
 *   Why a stack helps: the cleaned prefix IS a stack — append normally, and a
 *   duplicate cancels the top instead of being added. Chain reactions resolve
 *   themselves: after popping, the new top is exposed for the next char.
 *   Algorithm: for each char — if top === char, pop; else push. Join at end.
 *   Complexity: Time O(n), Space O(n).
 */

export function removeDuplicates(s: string): string {
  const stack: string[] = [];
  for (const ch of s) {
    if (stack.length > 0 && stack[stack.length - 1] === ch) {
      stack.pop(); // adjacent pair found — both disappear
    } else {
      stack.push(ch);
    }
  }
  return stack.join("");
}

// ---------- TESTS ----------

function runTests() {
  const cases: Array<[string, string]> = [
    ["abbaca", "ca"],
    ["azxxzy", "ay"],
    ["a", "a"],
    ["aa", ""],
    ["abba", ""],
    ["abcd", "abcd"],
  ];
  let passed = 0;
  for (const [input, expected] of cases) {
    const got = removeDuplicates(input);
    if (got === expected) {
      console.log(`✅ removeDuplicates("${input}") = "${got}"`);
      passed++;
    } else {
      console.log(`❌ removeDuplicates("${input}") = "${got}" (expected "${expected}")`);
    }
  }
  console.log(`\n${passed}/${cases.length} tests passed`);
  console.log("Time: O(n) | Space: O(n)");
}

if (require.main === module) {
  runTests();
}

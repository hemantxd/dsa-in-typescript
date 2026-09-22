/**
 * DAY 2 — Solution: Backspace String Compare (LeetCode 844)
 * --------------------------------------------------------------
 * THOUGHT PROCESS
 *   Brute force idea: apply backspaces by repeatedly splicing the string —
 *   O(n²) due to shifting. Or compare char-by-char with index juggling.
 *   Observation: '#' means "undo the most recent surviving character".
 *   Undo-most-recent = pop. So simulate a tiny typewriter: normal chars push,
 *   '#' pops (guarded — backspacing an empty line does nothing).
 *   Why a stack helps: each character is pushed once and popped at most once;
 *   the final stack content IS the typed result. Build both, compare.
 *   Algorithm: build(s), build(t), compare strings.
 *   Complexity: Time O(n + m), Space O(n + m).
 *   Follow-up: O(1) space by walking both strings BACKWARDS with skip
 *   counters (each '#' cancels one earlier char). Same answers, no stack.
 */

export function backspaceCompare(s: string, t: string): boolean {
  return build(s) === build(t);
}

/** Simulate typing: chars push, '#' pops (if anything is there). */
function build(s: string): string {
  const stack: string[] = [];
  for (const ch of s) {
    if (ch === "#") {
      stack.pop(); // pop on empty is safe (returns undefined, no crash)
    } else {
      stack.push(ch);
    }
  }
  return stack.join("");
}

// ---------- TESTS ----------

function runTests() {
  const cases: Array<[string, string, boolean]> = [
    ["ab#c", "ad#c", true],
    ["ab##", "c#d#", true],
    ["a#c", "b", false],
    ["a##c", "#a#c", true],
    ["###", "##", true], // both empty
    ["xy#z", "xw#z", true], // both "xz"
    ["xy#z", "xyz", false],
  ];
  let passed = 0;
  for (const [s, t, expected] of cases) {
    const got = backspaceCompare(s, t);
    if (got === expected) {
      console.log(`✅ backspaceCompare("${s}", "${t}") = ${got}`);
      passed++;
    } else {
      console.log(`❌ backspaceCompare("${s}", "${t}") = ${got} (expected ${expected})`);
    }
  }
  console.log(`\n${passed}/${cases.length} tests passed`);
  console.log("Time: O(n + m) | Space: O(n + m)  (O(1)-space follow-up: walk backwards with skip counters)");
}

if (require.main === module) {
  runTests();
}

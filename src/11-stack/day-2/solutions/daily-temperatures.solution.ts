/**
 * DAY 2 — Solution: Daily Temperatures (LeetCode 739) ★
 * ----------------------------------------------------------
 * THOUGHT PROCESS
 *   Brute force idea: for each day, scan right for a warmer day — O(n²).
 *   Observation: this is Next Greater Element, but the question is HOW FAR
 *   (index distance), not WHAT (the temperature). Distances need POSITIONS,
 *   so the stack must hold indices, not values.
 *   Why a stack helps / why popping is SAFE: same argument as NGE — when a
 *   warmer day i arrives, every popped index j genuinely has i as its FIRST
 *   warmer day (everything between j and i was popped = not warmer than j).
 *   j is resolved forever → record i - j and discard.
 *   Algorithm: answer defaults to 0; increasing stack of indices; on warmer
 *   day i, pop j and set answer[j] = i - j. Leftovers keep 0.
 *   Complexity: Time O(n) — each index pushed/popped ≤ once; Space O(n).
 */

export function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const answer = new Array<number>(n).fill(0); // 0 = "no warmer day"
  const stack: number[] = []; // increasing stack of INDICES awaiting answers

  for (let i = 0; i < n; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const j = stack.pop()!; // day i is j's first warmer day — resolved
      answer[j] = i - j;
    }
    stack.push(i); // day i waits for its own warmer day
  }
  // leftovers already 0 — nothing more to do (the "cleanup pass" is free here)
  return answer;
}

// ---------- TESTS ----------

function runTests() {
  const cases: Array<[number[], number[]]> = [
    [[73, 74, 75, 71, 69, 72, 76, 73], [1, 1, 4, 2, 1, 1, 0, 0]],
    [[30, 40, 50, 60], [1, 1, 1, 0]],
    [[30, 60, 90], [1, 1, 0]],
    [[90, 80, 70], [0, 0, 0]],
    [[50], [0]],
  ];
  let passed = 0;
  for (const [input, expected] of cases) {
    const got = dailyTemperatures(input);
    if (JSON.stringify(got) === JSON.stringify(expected)) {
      console.log(`✅ dailyTemperatures([${input}]) = [${got}]`);
      passed++;
    } else {
      console.log(`❌ dailyTemperatures([${input}]) = [${got}] (expected [${expected}])`);
    }
  }
  console.log(`\n${passed}/${cases.length} tests passed`);
  console.log("Time: O(n) | Space: O(n)");
}

if (require.main === module) {
  runTests();
}

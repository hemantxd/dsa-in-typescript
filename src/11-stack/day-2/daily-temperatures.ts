/**
 * DAY 2 — Exercise 2: Daily Temperatures (LeetCode 739) ★
 * ------------------------------------------------------------
 * PROBLEM
 * Given daily temperatures, answer for EACH day: how many days until a WARMER
 * temperature? 0 if no future day is warmer.
 *
 * EXAMPLES
 *   dailyTemperatures([73,74,75,71,69,72,76,73]) → [1,1,4,2,1,1,0,0]
 *     day 0 (73°): next warmer is day 1 → 1
 *     day 2 (75°): next warmer is day 6 (76°) → 4
 *   dailyTemperatures([30,40,50,60]) → [1,1,1,0]
 *   dailyTemperatures([30,60,90])    → [1,1,0]
 *
 * CONSTRAINTS
 *   1 <= temperatures.length <= 10^5, values 30..100.
 *
 * HINTS (read one at a time, only if stuck)
 *   H1. This is Next Greater Element, but the answer is a DISTANCE (i - j),
 *       not a value. What must the stack store so you can compute i - j?
 *       (Values can't do that — you need positions.)
 *   H2. Keep an increasing stack of INDICES whose answer is unknown. Warmer
 *       day i arrives → pop every cooler index j, answer[j] = i - j.
 *   H3. Default every answer to 0; indices never popped keep 0 (no warmer day).
 *
 * YOUR TASK
 * Implement dailyTemperatures() below. Run THIS file to check yourself:
 *   npx ts-node src/11-stack/day-2/daily-temperatures.ts
 * The solution (with tests) lives in solutions/daily-temperatures.solution.ts —
 * open it ONLY after you have tried for 10–15 minutes.
 */

export function dailyTemperatures(temperatures: number[]): number[] {
  // TODO: increasing stack of INDICES; on warmer day i, pop j and set ans[j] = i - j.
  throw new Error("Not implemented yet — your turn! (See Hints above.)");
}

// ---------- SELF-CHECK (no answers leaked — just pass/fail) ----------

function selfCheck() {
  const cases: Array<[number[], number[]]> = [
    [[73, 74, 75, 71, 69, 72, 76, 73], [1, 1, 4, 2, 1, 1, 0, 0]],
    [[30, 40, 50, 60], [1, 1, 1, 0]],
    [[30, 60, 90], [1, 1, 0]],
  ];
  let passed = 0;
  for (const [input, expected] of cases) {
    try {
      const got = dailyTemperatures(input);
      if (JSON.stringify(got) === JSON.stringify(expected)) {
        console.log(`✅ dailyTemperatures([${input}]) = [${got}]`);
        passed++;
      } else {
        console.log(`❌ dailyTemperatures([${input}]) = [${got}] (expected [${expected}])`);
      }
    } catch {
      console.log(`⏳ dailyTemperatures([${input}]) — not implemented yet.`);
    }
  }
  console.log(`\n${passed}/${cases.length} passing. Solution: solutions/daily-temperatures.solution.ts`);
}

if (require.main === module) {
  selfCheck();
}

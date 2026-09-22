/**
 * DAY 3 — Challenge 1 (warm-up): Asteroid Collision (LeetCode 735)
 * -------------------------------------------------------------------
 * PROBLEM
 * Asteroids move in a line: positive values move RIGHT, negative move LEFT.
 * When a right-mover meets a left-mover, they collide: the SMALLER explodes;
 * equal sizes both explode. Right–right and left–left never meet. Given the
 * initial order, return the survivors in order.
 *
 * EXAMPLES
 *   asteroidCollision([5,10,-5])  → [5,10]    (10 beats -5)
 *   asteroidCollision([8,-8])     → []        (both explode)
 *   asteroidCollision([10,2,-5])  → [10]      (-5 beats 2, then loses to 10)
 *   asteroidCollision([-2,-1,1,2]) → [-2,-1,1,2]  (moving apart — no collisions)
 *
 * CONSTRAINTS
 *   2 <= asteroids.length <= 10^4, values are non-zero, |v| <= 1000.
 *
 * HINTS (read one at a time, only if stuck)
 *   H1. Process left to right. Only ONE kind of meeting is possible: a LEFT
 *       mover (-) arriving while RIGHT movers (+) are still "alive" before it.
 *       The survivors-so-far behave like a stack.
 *   H2. New asteroid a: while top > 0 AND a < 0 (collision!): if top < -a,
 *       pop the top (it explodes, keep checking); if top == -a, pop and a dies
 *       too; if top > -a, a dies. Otherwise push a.
 *   H3. Trace [10,2,-5]: stack [10,2]; -5 arrives: 2 < 5 → pop; 10 > 5 → -5
 *       dies. Result [10].
 *
 * YOUR TASK
 * Implement asteroidCollision() below. Run THIS file to check yourself:
 *   npx ts-node src/11-stack/day-3/asteroid-collision.ts
 * The solution (with tests) lives in solutions/asteroid-collision.solution.ts —
 * open it ONLY after you have tried for 15–20 minutes.
 */

export function asteroidCollision(asteroids: number[]): number[] {
  // TODO: survivor stack — only +top vs incoming - can collide.
  throw new Error("Not implemented yet — your turn! (See Hints above.)");
}

// ---------- SELF-CHECK (no answers leaked — just pass/fail) ----------

function selfCheck() {
  const cases: Array<[number[], number[]]> = [
    [[5, 10, -5], [5, 10]],
    [[8, -8], []],
    [[10, 2, -5], [10]],
    [[-2, -1, 1, 2], [-2, -1, 1, 2]],
  ];
  let passed = 0;
  for (const [input, expected] of cases) {
    try {
      const got = asteroidCollision(input);
      if (JSON.stringify(got) === JSON.stringify(expected)) {
        console.log(`✅ asteroidCollision([${input}]) = [${got}]`);
        passed++;
      } else {
        console.log(`❌ asteroidCollision([${input}]) = [${got}] (expected [${expected}])`);
      }
    } catch {
      console.log(`⏳ asteroidCollision([${input}]) — not implemented yet.`);
    }
  }
  console.log(`\n${passed}/${cases.length} passing. Solution: solutions/asteroid-collision.solution.ts`);
}

if (require.main === module) {
  selfCheck();
}

/**
 * DAY 3 — Solution: Asteroid Collision (LeetCode 735)
 * ------------------------------------------------------
 * THOUGHT PROCESS
 *   Brute force idea: repeatedly scan for adjacent opposing pairs and resolve
 *   them — O(n²), with fiddly index management after removals.
 *   Observation: only ONE meeting is possible — a left-mover (-) arriving
 *   while right-movers (+) sit before it. (+,+), (-,-), and (-,+) pairs never
 *   collide. The "alive so far" prefix is naturally a stack.
 *   Why a stack helps: the incoming asteroid only interacts with the TOP of
 *   the survivor stack; each asteroid is pushed once and popped at most once.
 *   Algorithm: for each a — while top > 0 and a < 0: compare sizes (smaller
 *   explodes; equal both explode). Survivors get pushed.
 *   Complexity: Time O(n) — each asteroid pushed/popped ≤ once; Space O(n).
 */

export function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = []; // survivors so far

  for (const a of asteroids) {
    let alive = true;
    // only +top vs incoming - can collide
    while (alive && a < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {
      const top = stack[stack.length - 1];
      if (top < -a) {
        stack.pop(); // top explodes — keep checking against the next one
      } else if (top === -a) {
        stack.pop(); // both explode
        alive = false;
      } else {
        alive = false; // incoming asteroid explodes
      }
    }
    if (alive) stack.push(a);
  }
  return stack;
}

// ---------- TESTS ----------

function runTests() {
  const cases: Array<[number[], number[]]> = [
    [[5, 10, -5], [5, 10]],
    [[8, -8], []],
    [[10, 2, -5], [10]],
    [[-2, -1, 1, 2], [-2, -1, 1, 2]],
    [[1, -2, -2, -2], [-2, -2, -2]], // 1 explodes, left-movers survive
    [[-2, 2, 1, -1], [-2, 2]], // 1 vs -1: both explode
    [[1, 2, 3, -3], [1, 2]], // chain: -3 kills 3 only... check: 3==3 both die → [1,2]
  ];
  let passed = 0;
  for (const [input, expected] of cases) {
    const got = asteroidCollision(input);
    if (JSON.stringify(got) === JSON.stringify(expected)) {
      console.log(`✅ asteroidCollision([${input}]) = [${got}]`);
      passed++;
    } else {
      console.log(`❌ asteroidCollision([${input}]) = [${got}] (expected [${expected}])`);
    }
  }
  console.log(`\n${passed}/${cases.length} tests passed`);
  console.log("Time: O(n) | Space: O(n)");
}

if (require.main === module) {
  runTests();
}

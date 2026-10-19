/**
 * DAY 3 — Challenge 3: Rotting Oranges (LeetCode 994) ★★
 * ------------------------------------------------------------
 * PROBLEM
 * Grid cells: 0 = empty, 1 = fresh orange, 2 = rotten. Every minute, fresh
 * oranges ADJACENT (4-directionally) to a rotten one rot. Return the minutes
 * until no fresh orange remains, or -1 if some can never rot.
 *
 * EXAMPLES
 *   orangesRotting([[2,1,1],[1,1,0],[0,1,1]]) → 4
 *   orangesRotting([[2,1,1],[0,1,1],[1,0,1]]) → -1  (bottom-left isolated)
 *   orangesRotting([[0,2]])                   → 0   (nothing fresh)
 *
 * CONSTRAINTS
 *   1 <= m, n <= 10.
 *
 * HINTS (read one at a time, only if stuck)
 *   H1. Rot spreads in WAVES: minute-1 rots minute-0's neighbours, minute-2
 *       rots theirs... Waves from MULTIPLE starting points = BFS from ALL
 *       rotten oranges at once (multi-source BFS).
 *   H2. Queue holds this minute's rotten cells. Process the whole LEVEL
 *       (snapshot queue length first!), enqueue newly-rotted neighbours, then
 *       minutes++. Level-by-level = minute-by-minute.
 *   H3. Track fresh count: decrement on each rot; if fresh hits 0, return
 *       minutes. Leftover fresh at the end → -1. Edge: 0 fresh initially → 0.
 *
 * YOUR TASK
 * Implement orangesRotting() below. Run THIS file to check yourself:
 *   npx ts-node src/12-queue/day-3/rotten-oranges.ts
 * The solution (with tests) lives in solutions/rotten-oranges.solution.ts —
 * open it ONLY after you have tried for 15–20 minutes.
 */

export function orangesRotting(grid: number[][]): number {
  // TODO: enqueue all rotten cells; BFS level by level; count fresh.
  throw new Error("Not implemented yet — your turn! (See Hints above.)");
}

// ---------- SELF-CHECK (no answers leaked — just pass/fail) ----------

function selfCheck() {
  const cases: Array<[number[][], number]> = [
    [[[2, 1, 1], [1, 1, 0], [0, 1, 1]], 4],
    [[[2, 1, 1], [0, 1, 1], [1, 0, 1]], -1],
    [[[0, 2]], 0],
  ];
  let passed = 0;
  for (const [grid, expected] of cases) {
    try {
      const got = orangesRotting(grid.map((r) => [...r]));
      if (got === expected) {
        console.log(`✅ orangesRotting(${JSON.stringify(grid)}) = ${got}`);
        passed++;
      } else {
        console.log(`❌ orangesRotting(${JSON.stringify(grid)}) = ${got} (expected ${expected})`);
      }
    } catch {
      console.log(`⏳ orangesRotting(${JSON.stringify(grid)}) — not implemented yet.`);
    }
  }
  console.log(`\n${passed}/${cases.length} passing. Solution: solutions/rotten-oranges.solution.ts`);
}

if (require.main === module) {
  selfCheck();
}

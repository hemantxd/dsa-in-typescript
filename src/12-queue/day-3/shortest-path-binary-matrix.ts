/**
 * DAY 3 — Challenge 4 (boss fight): Shortest Path in Binary Matrix (LC 1091) ★★
 * ---------------------------------------------------------------------------------
 * PROBLEM
 * An n×n grid of 0s (open) and 1s (blocked). Find the shortest path from the
 * top-left to the bottom-right moving in 8 directions (including diagonals).
 * Return the number of CELLS in the path, or -1 if unreachable.
 *
 * EXAMPLES
 *   shortestPathBinaryMatrix([[0,1],[1,0]]) → 2   (diagonal straight through)
 *   shortestPathBinaryMatrix([[0,0,0],[1,1,0],[1,1,0]]) → 4
 *   shortestPathBinaryMatrix([[1,0],[0,0]]) → -1  (start blocked)
 *
 * CONSTRAINTS
 *   1 <= n <= 100.
 *
 * HINTS (read one at a time, only if stuck)
 *   H1. "Fewest steps in an unweighted grid" = BFS. The FIRST time BFS reaches
 *       a cell, it's via the shortest path (BFS expands in distance order —
 *       level 0, then level 1, ...). DFS can't promise that.
 *   H2. Why safe to mark visited on ENQUEUE (not dequeue)? BFS meets cells in
 *       distance order, so the first enqueue of a cell is already via the
 *       shortest route — any later visit is ≥ as long. Useless → skip.
 *   H3. Queue stores [row, col, distance]. 8 directions: dr,dc ∈ {-1,0,1}
 *       minus (0,0). Guard: start/end blocked → -1 immediately. n==1 open → 1.
 *
 * YOUR TASK
 * Implement shortestPathBinaryMatrix() below. Run THIS file to check yourself:
 *   npx ts-node src/12-queue/day-3/shortest-path-binary-matrix.ts
 * The solution (with tests) lives in solutions/shortest-path-binary-matrix.solution.ts —
 * open it ONLY after you have tried for 15–20 minutes.
 */

export function shortestPathBinaryMatrix(grid: number[][]): number {
  // TODO: BFS with [r, c, dist]; 8 directions; visited on enqueue.
  throw new Error("Not implemented yet — your turn! (See Hints above.)");
}

// ---------- SELF-CHECK (no answers leaked — just pass/fail) ----------

function selfCheck() {
  const cases: Array<[number[][], number]> = [
    [[[0, 1], [1, 0]], 2],
    [[[0, 0, 0], [1, 1, 0], [1, 1, 0]], 4],
    [[[1, 0], [0, 0]], -1],
  ];
  let passed = 0;
  for (const [grid, expected] of cases) {
    try {
      const got = shortestPathBinaryMatrix(grid.map((r) => [...r]));
      if (got === expected) {
        console.log(`✅ shortestPathBinaryMatrix(${JSON.stringify(grid)}) = ${got}`);
        passed++;
      } else {
        console.log(`❌ shortestPathBinaryMatrix(${JSON.stringify(grid)}) = ${got} (expected ${expected})`);
      }
    } catch {
      console.log(`⏳ shortestPathBinaryMatrix(${JSON.stringify(grid)}) — not implemented yet.`);
    }
  }
  console.log(`\n${passed}/${cases.length} passing. Solution: solutions/shortest-path-binary-matrix.solution.ts`);
}

if (require.main === module) {
  selfCheck();
}

/**
 * DAY 3 — Solution: Shortest Path in Binary Matrix (LeetCode 1091) ★★
 * ------------------------------------------------------------------------
 * THOUGHT PROCESS
 *   Brute force idea: DFS explores one path deeply — but the FIRST path found
 *   needn't be the SHORTEST, so you'd have to enumerate (exponential). Wrong
 *   tool.
 *   Observation: all moves cost 1 (unweighted), so shortest = fewest steps =
 *   BFS layers. BFS visits cells in DISTANCE order: all distance-1 cells,
 *   then distance-2, ... The first time the target is dequeued, that's the
 *   minimum — you can return immediately.
 *   Why a queue helps / why visited-on-ENQUEUE is safe: BFS meets cells in
 *   distance order, so the first enqueue of a cell already came via the
 *   shortest route. A later visit would be ≥ as long — useless → skip. (This
 *   also prevents the queue exploding with duplicates.)
 *   Algorithm: guards (start/end blocked → -1; 1×1 open → 1); queue of
 *   [r, c, dist]; 8 directions; mark visited when enqueuing; return dist at
 *   target; -1 if queue empties.
 *   Complexity: Time O(n²) — each cell enqueued ≤ once; Space O(n²).
 */

export function shortestPathBinaryMatrix(grid: number[][]): number {
  const n = grid.length;
  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1; // no start/end
  if (n === 1) return 1; // single open cell

  const dirs = [-1, 0, 1];
  const queue: Array<[number, number, number]> = [[0, 0, 1]]; // [row, col, dist]
  grid[0][0] = 1; // mark visited (mutates the input copy)
  let head = 0;

  while (head < queue.length) {
    const [r, c, dist] = queue[head++];
    for (const dr of dirs) {
      for (const dc of dirs) {
        if (dr === 0 && dc === 0) continue;
        const nr = r + dr;
        const nc = c + dc;
        if (nr < 0 || nr >= n || nc < 0 || nc >= n || grid[nr][nc] === 1) continue;
        if (nr === n - 1 && nc === n - 1) return dist + 1; // reached — shortest!
        grid[nr][nc] = 1; // visited on ENQUEUE — first visit is shortest
        queue.push([nr, nc, dist + 1]);
      }
    }
  }
  return -1; // target never reached
}

// ---------- TESTS ----------

function runTests() {
  const cases: Array<[number[][], number]> = [
    [[[0, 1], [1, 0]], 2],
    [[[0, 0, 0], [1, 1, 0], [1, 1, 0]], 4],
    [[[1, 0], [0, 0]], -1],
    [[[0]], 1],
    [[[1]], -1],
    [[[0, 0, 0], [0, 1, 0], [0, 0, 0]], 4], // diagonal shortcut through middle gap
  ];
  let passed = 0;
  for (const [grid, expected] of cases) {
    const got = shortestPathBinaryMatrix(grid.map((r) => [...r]));
    if (got === expected) {
      console.log(`✅ shortestPathBinaryMatrix(${JSON.stringify(grid)}) = ${got}`);
      passed++;
    } else {
      console.log(`❌ shortestPathBinaryMatrix(${JSON.stringify(grid)}) = ${got} (expected ${expected})`);
    }
  }
  console.log(`\n${passed}/${cases.length} tests passed`);
  console.log("Time: O(n²) | Space: O(n²)");
}

if (require.main === module) {
  runTests();
}

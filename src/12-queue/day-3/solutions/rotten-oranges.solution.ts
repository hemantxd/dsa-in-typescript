/**
 * DAY 3 — Solution: Rotting Oranges (LeetCode 994) ★★
 * ---------------------------------------------------------
 * THOUGHT PROCESS
 *   Brute force idea: rescan the whole grid every minute until nothing
 *   changes — O(minutes × m × n), and tracking "changed" flags is messy.
 *   Observation: rot spreads in WAVES — minute k rots exactly the fresh
 *   neighbours of minute-(k-1) rots. Waves from MANY sources at once = BFS
 *   seeded with ALL initially-rotten cells (multi-source BFS). Processing
 *   level-by-level makes "one level = one minute" fall out naturally.
 *   Why a queue helps / level discipline: snapshot the queue length BEFORE
 *   the level — those are exactly this minute's rotters. Newly rotted cells
 *   enqueue for NEXT minute (they must not rot others in the same minute).
 *   Count fresh downward; leftovers at the end mean unreachable → -1.
 *   Algorithm: enqueue all 2s, count 1s; while queue non-empty and fresh > 0:
 *   process one level, rot neighbours (mark 2 immediately = visited),
 *   minutes++. Return fresh == 0 ? minutes : -1.
 *   Complexity: Time O(m·n) — each cell enqueued ≤ once; Space O(m·n).
 */

export function orangesRotting(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const queue: Array<[number, number]> = [];
  let fresh = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) queue.push([r, c]); // all sources at minute 0
      else if (grid[r][c] === 1) fresh++;
    }
  }
  if (fresh === 0) return 0;

  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let minutes = 0;
  let head = 0;

  while (head < queue.length && fresh > 0) {
    const levelSize = queue.length - head; // this minute's rotters ONLY
    for (let i = 0; i < levelSize; i++) {
      const [r, c] = queue[head++];
      for (const [dr, dc] of dirs) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || grid[nr][nc] !== 1) continue;
        grid[nr][nc] = 2; // mark immediately = visited (never re-enqueue)
        fresh--;
        queue.push([nr, nc]); // rots others NEXT minute
      }
    }
    minutes++;
  }
  return fresh === 0 ? minutes : -1;
}

// ---------- TESTS ----------

function runTests() {
  const cases: Array<[number[][], number]> = [
    [[[2, 1, 1], [1, 1, 0], [0, 1, 1]], 4],
    [[[2, 1, 1], [0, 1, 1], [1, 0, 1]], -1],
    [[[0, 2]], 0],
    [[[1]], -1], // fresh but nothing rotten — can never rot
    [[[2]], 0],
    [[[2, 2], [1, 1]], 1], // two sources rot two fresh in one minute
  ];
  let passed = 0;
  for (const [grid, expected] of cases) {
    const got = orangesRotting(grid.map((r) => [...r]));
    if (got === expected) {
      console.log(`✅ orangesRotting(${JSON.stringify(grid)}) = ${got}`);
      passed++;
    } else {
      console.log(`❌ orangesRotting(${JSON.stringify(grid)}) = ${got} (expected ${expected})`);
    }
  }
  console.log(`\n${passed}/${cases.length} tests passed`);
  console.log("Time: O(m·n) | Space: O(m·n)");
}

if (require.main === module) {
  runTests();
}

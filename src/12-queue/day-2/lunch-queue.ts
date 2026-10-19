/**
 * DAY 2 — Exercise 4: Students Unable to Eat Lunch (LeetCode 1700)
 * --------------------------------------------------------------------
 * PROBLEM
 * Students queue for sandwiches stacked with 0s/1s on top. The FRONT student
 * takes the top sandwich if it matches their preference; otherwise they go to
 * the BACK of the line. If a full rotation passes with NOBODY taking a
 * sandwich, the rest never eat. Return how many students can't eat.
 *
 * EXAMPLES
 *   countStudents([1,1,0,0], [0,1,0,1]) → 0  (everyone eventually eats)
 *   countStudents([1,1,1,0,0,1], [1,0,0,0,1,1]) → 3
 *
 * CONSTRAINTS
 *   students.length == sandwiches.length, 1 <= n <= 100.
 *
 * HINTS (read one at a time, only if stuck)
 *   H1. Simulate literally first: queue of students + pointer into sandwiches.
 *       Track "rotations without anyone eating" — if it reaches the queue
 *       length, stop. That's O(n²) worst case but correct.
 *   H2. Notice only COUNTS matter, not order: if nobody wants the current
 *       sandwich type (count of that preference is 0), everyone left starves.
 *   H3. Count 0-lovers and 1-lovers. For each sandwich top-down: if someone
 *       wants it, decrement; else return everyone remaining. O(n)!
 *
 * YOUR TASK
 * Implement countStudents() below. Run THIS file to check yourself:
 *   npx ts-node src/12-queue/day-2/lunch-queue.ts
 * The solution (with tests) lives in solutions/lunch-queue.solution.ts —
 * open it ONLY after you have tried for 10–15 minutes.
 */

export function countStudents(students: number[], sandwiches: number[]): number {
  // TODO: simulate with a queue first; then try the O(n) counting shortcut.
  throw new Error("Not implemented yet — your turn! (See Hints above.)");
}

// ---------- SELF-CHECK (no answers leaked — just pass/fail) ----------

function selfCheck() {
  const cases: Array<[number[], number[], number]> = [
    [[1, 1, 0, 0], [0, 1, 0, 1], 0],
    [[1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1], 3],
    [[0, 0], [1, 1], 2],
  ];
  let passed = 0;
  for (const [students, sandwiches, expected] of cases) {
    try {
      const got = countStudents([...students], sandwiches);
      if (got === expected) {
        console.log(`✅ countStudents([${students}], [${sandwiches}]) = ${got}`);
        passed++;
      } else {
        console.log(`❌ countStudents([${students}], [${sandwiches}]) = ${got} (expected ${expected})`);
      }
    } catch {
      console.log(`⏳ countStudents([${students}], [${sandwiches}]) — not implemented yet.`);
    }
  }
  console.log(`\n${passed}/${cases.length} passing. Solution: solutions/lunch-queue.solution.ts`);
}

if (require.main === module) {
  selfCheck();
}

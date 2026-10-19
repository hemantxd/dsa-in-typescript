/**
 * DAY 2 — Solution: Students Unable to Eat Lunch (LeetCode 1700)
 * -------------------------------------------------------------------
 * THOUGHT PROCESS
 *   Brute force idea: simulate the line literally — front student eats or
 *   rotates to the back; stop after a full rotation with no one eating.
 *   Correct, O(n²) worst case, and fiddly rotation counting.
 *   Observation: ORDER doesn't matter — only COUNTS. If the current sandwich
 *   is type 0 and zero 0-lovers remain, NO future sandwich of type 0 can be
 *   taken either... more precisely: sandwiches are taken top-down, and the
 *   moment nobody wants the current type, everyone left starves (the queue
 *   just rotates forever). So count preferences once, then walk sandwiches.
 *   Why counting works: students are interchangeable within a preference.
 *   Each sandwich is either taken (decrement that count) or proves the rest
 *   starve (its count is 0 → return everyone remaining).
 *   Algorithm: count 0s/1s; for each sandwich: if wanted, decrement; else
 *   return sandwiches.length - i.
 *   Complexity: Time O(n), Space O(1).
 */

export function countStudents(students: number[], sandwiches: number[]): number {
  let zeros = 0;
  let ones = 0;
  for (const s of students) {
    if (s === 0) zeros++;
    else ones++;
  }

  for (let i = 0; i < sandwiches.length; i++) {
    if (sandwiches[i] === 0) {
      if (zeros === 0) return sandwiches.length - i; // nobody wants 0 — rest starve
      zeros--;
    } else {
      if (ones === 0) return sandwiches.length - i; // nobody wants 1 — rest starve
      ones--;
    }
  }
  return 0; // every sandwich taken
}

// ---------- TESTS ----------

function runTests() {
  const cases: Array<[number[], number[], number]> = [
    [[1, 1, 0, 0], [0, 1, 0, 1], 0],
    [[1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1], 3],
    [[0, 0], [1, 1], 2],
    [[1], [0], 1],
    [[0], [0], 0],
  ];
  let passed = 0;
  for (const [students, sandwiches, expected] of cases) {
    const got = countStudents(students, sandwiches);
    if (got === expected) {
      console.log(`✅ countStudents([${students}], [${sandwiches}]) = ${got}`);
      passed++;
    } else {
      console.log(`❌ countStudents([${students}], [${sandwiches}]) = ${got} (expected ${expected})`);
    }
  }
  console.log(`\n${passed}/${cases.length} tests passed`);
  console.log("Time: O(n) | Space: O(1)");
}

if (require.main === module) {
  runTests();
}

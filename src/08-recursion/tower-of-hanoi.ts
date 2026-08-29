/**
 * Problem: Tower of Hanoi
 * -------------------------
 * Move n disks from rod A to rod C using rod B as auxiliary.
 * Rules: move one disk at a time; never place a larger disk on a smaller one.
 * Minimum moves = 2^n - 1.
 *
 * Example:
 *   hanoi(2, 'A', 'B', 'C') →
 *     Move disk 1 from A to B
 *     Move disk 2 from A to C
 *     Move disk 1 from B to C
 */

// ---------- SOLUTION ----------

function hanoi(n: number, from: string, aux: string, to: string, moves: string[] = []): string[] {
  if (n === 0) return moves; // base case
  hanoi(n - 1, from, to, aux, moves); // move n-1 disks to aux
  moves.push(`Move disk ${n} from ${from} to ${to}`);
  hanoi(n - 1, aux, from, to, moves); // move n-1 disks from aux to target
  return moves;
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { n: 1, expected: 1 },
    { n: 2, expected: 3 },
    { n: 3, expected: 7 },
    { n: 5, expected: 31 },
  ];

  let passed = 0;
  for (const { n, expected } of tests) {
    const moves = hanoi(n, "A", "B", "C");
    if (moves.length === expected) {
      console.log(`✅ hanoi(${n}) → ${moves.length} moves`);
      passed++;
    } else {
      console.log(`❌ hanoi(${n}) → ${moves.length} moves (expected ${expected})`);
    }
  }

  console.log("\nSample trace for n = 3:");
  hanoi(3, "A", "B", "C").forEach((m) => console.log("  " + m));

  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
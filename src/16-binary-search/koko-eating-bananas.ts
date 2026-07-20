/**
 * Problem: Koko Eating Bananas
 * ------------------------------
 * Koko loves bananas. There are n piles of bananas, the i-th pile has
 * piles[i] bananas. The guards have gone and will come back in h hours.
 * Koko can decide her bananas-per-hour eating speed k. Each hour she
 * chooses a pile and eats k bananas from it. If the pile has less than k,
 * she eats all of them and moves on.
 *
 * Return the minimum integer k such that she can eat all bananas within h hours.
 *
 * Examples:
 *   minEatingSpeed([3, 6, 7, 11], 8)  → 4
 *   minEatingSpeed([30, 11, 23, 4, 20], 5)  → 30
 *   minEatingSpeed([30, 11, 23, 4, 20], 6)  → 23
 */

// TODO: Implement this function
function minEatingSpeed(piles: number[], h: number): number {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { piles: [3, 6, 7, 11], h: 8, expected: 4 },
    { piles: [30, 11, 23, 4, 20], h: 5, expected: 30 },
    { piles: [30, 11, 23, 4, 20], h: 6, expected: 23 },
    { piles: [1, 1, 1], h: 3, expected: 1 },
    { piles: [5], h: 1, expected: 5 },
  ];

  let passed = 0;
  for (const { piles, h, expected } of tests) {
    try {
      const result = minEatingSpeed(piles, h);
      if (result === expected) {
        console.log(`✅ minEatingSpeed([${piles}], ${h}) = ${result}`);
        passed++;
      } else {
        console.log(`❌ minEatingSpeed([${piles}], ${h}) = ${result} (expected ${expected})`);
      }
    } catch (e: any) {
      console.log(`❌ minEatingSpeed([${piles}], ${h}) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
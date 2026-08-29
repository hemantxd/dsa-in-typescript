/**
 * Problem: Pow(x, n) (LeetCode 50)
 * ---------------------------------
 * Implement x^n (x raised to power n) without using Math.pow.
 * Naive recursion is O(n); fast exponentiation (divide & conquer)
 * achieves O(log n).
 *
 * Examples:
 *   myPow(2, 10)  → 1024
 *   myPow(2, -2)  → 0.25
 */

// ---------- SOLUTION ----------

function myPow(x: number, n: number): number {
  if (n === 0) return 1;
  if (n < 0) return 1 / myPow(x, -n);

  const half = myPow(x, Math.floor(n / 2));
  if (n % 2 === 0) return half * half;
  return x * half * half;
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { x: 2, n: 10, expected: 1024 },
    { x: 2, n: -2, expected: 0.25 },
    { x: 5, n: 0, expected: 1 },
    { x: 3, n: 5, expected: 243 },
    { x: -2, n: 3, expected: -8 },
  ];

  let passed = 0;
  for (const { x, n, expected } of tests) {
    const result = myPow(x, n);
    if (Math.abs(result - expected) < 1e-9) {
      console.log(`✅ myPow(${x}, ${n}) = ${result}`);
      passed++;
    } else {
      console.log(`❌ myPow(${x}, ${n}) = ${result} (expected ${expected})`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
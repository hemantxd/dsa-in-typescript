/**
 * Problem: Sum of Digits (recursive)
 * -----------------------------------
 * Given a non-negative integer, return the sum of its digits using recursion.
 *
 * Examples:
 *   sumOfDigits(1234) → 10
 *   sumOfDigits(0)    → 0
 */

// ---------- SOLUTION ----------

function sumOfDigits(n: number): number {
  if (n === 0) return 0; // base case
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { n: 1234, expected: 10 },
    { n: 0, expected: 0 },
    { n: 9, expected: 9 },
    { n: 99999, expected: 45 },
    { n: 100, expected: 1 },
  ];

  let passed = 0;
  for (const { n, expected } of tests) {
    const result = sumOfDigits(n);
    if (result === expected) {
      console.log(`✅ sumOfDigits(${n}) = ${result}`);
      passed++;
    } else {
      console.log(`❌ sumOfDigits(${n}) = ${result} (expected ${expected})`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
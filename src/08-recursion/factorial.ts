/**
 * Problem: Factorial of N
 * ------------------------
 * Compute n! (n factorial) recursively.
 *   n! = n * (n-1)!   with base case 0! = 1
 *
 * Examples:
 *   factorial(0) → 1
 *   factorial(5) → 120
 */

// ---------- SOLUTION ----------

function factorial(n: number): number {
  if (n <= 1) return 1; // base case
  return n * factorial(n - 1); // recursive case
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { n: 0, expected: 1 },
    { n: 1, expected: 1 },
    { n: 5, expected: 120 },
    { n: 10, expected: 3628800 },
  ];

  let passed = 0;
  for (const { n, expected } of tests) {
    const result = factorial(n);
    if (result === expected) {
      console.log(`✅ factorial(${n}) = ${result}`);
      passed++;
    } else {
      console.log(`❌ factorial(${n}) = ${result} (expected ${expected})`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
/**
 * Problem: Fibonacci Number (LeetCode 509)
 * -----------------------------------------
 * Return the nth Fibonacci number.
 *   F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)
 *
 * Shows naive recursion vs memoized recursion (top-down DP).
 *
 * Examples:
 *   fib(2) → 1
 *   fib(10) → 55
 */

// ---------- SOLUTION ----------

// Naive recursion — O(2^n) time
function fib(n: number): number {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

// Memoized recursion — O(n) time
function fibMemo(n: number, memo: Map<number, number> = new Map()): number {
  if (n <= 1) return n;
  if (memo.has(n)) return memo.get(n)!;
  const result = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  memo.set(n, result);
  return result;
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { n: 0, expected: 0 },
    { n: 1, expected: 1 },
    { n: 2, expected: 1 },
    { n: 10, expected: 55 },
    { n: 30, expected: 832040 },
  ];

  let passed = 0;
  for (const { n, expected } of tests) {
    const r1 = fib(n);
    const r2 = fibMemo(n);
    if (r1 === expected && r2 === expected) {
      console.log(`✅ fib(${n}) = ${r1}`);
      passed++;
    } else {
      console.log(`❌ fib(${n}) = ${r1}/${r2} (expected ${expected})`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
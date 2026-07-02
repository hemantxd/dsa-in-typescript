/**
 * Problem: Check if a Number is Prime
 * ------------------------------------
 * A prime number is a positive integer greater than 1 that has no positive
 * divisors other than 1 and itself.
 *
 * Examples:
 *   isPrime(7)  → true   (divisors: 1, 7)
 *   isPrime(1)  → false  (not greater than 1)
 *   isPrime(4)  → false  (divisors: 1, 2, 4)
 *   isPrime(17) → true
 */

// TODO: Implement this function
function isPrime(n: number): boolean {
  // Your code here

  if (n <= 1) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: 7, expected: true },
    { input: 1, expected: false },
    { input: 4, expected: false },
    { input: 17, expected: true },
    { input: 2, expected: true },
    { input: 0, expected: false },
    { input: 97, expected: true },
    { input: 100, expected: false },
    { input: -5, expected: false },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    try {
      const result = isPrime(input);
      if (result === expected) {
        console.log(`✅ isPrime(${input}) = ${result}`);
        passed++;
      } else {
        console.log(`❌ isPrime(${input}) = ${result} (expected ${expected})`);
      }
    } catch (e: any) {
      console.log(`❌ isPrime(${input}) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
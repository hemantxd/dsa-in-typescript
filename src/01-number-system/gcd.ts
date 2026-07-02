/**
 * Problem: Find GCD / HCF of Two Numbers
 * ---------------------------------------
 * GCD (Greatest Common Divisor) or HCF (Highest Common Factor) is the
 * largest positive integer that divides both numbers without a remainder.
 *
 * Examples:
 *   gcd(12, 8)  → 4
 *   gcd(7, 13)  → 1   (coprime / relatively prime)
 *   gcd(0, 5)   → 5
 *   gcd(18, 12) → 6
 */

// TODO: Implement this function
function gcd(a: number, b: number): number {
  // Your code here

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;

  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { a: 12, b: 8, expected: 4 },
    { a: 7, b: 13, expected: 1 },
    { a: 0, b: 5, expected: 5 },
    { a: 18, b: 12, expected: 6 },
    { a: 100, b: 10, expected: 10 },
    { a: 17, b: 19, expected: 1 },
    { a: 48, b: 18, expected: 6 },
  ];

  let passed = 0;
  for (const { a, b, expected } of tests) {
    try {
      const result = gcd(a, b);
      if (result === expected) {
        console.log(`✅ gcd(${a}, ${b}) = ${result}`);
        passed++;
      } else {
        console.log(`❌ gcd(${a}, ${b}) = ${result} (expected ${expected})`);
      }
    } catch (e: any) {
      console.log(`❌ gcd(${a}, ${b}) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
/**
 * Problem: Check if a Number is Armstrong Number
 * -----------------------------------------------
 * An Armstrong number (also called narcissistic number) is a number
 * that equals the sum of its own digits each raised to the power of
 * the number of digits.
 *
 * Examples:
 *   153 → true   (1³ + 5³ + 3³ = 1 + 125 + 27 = 153)
 *   9474 → true  (9⁴ + 4⁴ + 7⁴ + 4⁴ = 6561 + 256 + 2401 + 256 = 9474)
 *   123 → false  (1³ + 2³ + 3³ = 1 + 8 + 27 = 36 ≠ 123)
 *   0 → true     (0¹ = 0)
 */

// TODO: Implement this function
function isArmstrong(n: number): boolean {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: 153, expected: true },
    { input: 9474, expected: true },
    { input: 123, expected: false },
    { input: 0, expected: true },
    { input: 1, expected: true },
    { input: 370, expected: true },
    { input: 371, expected: true },
    { input: 407, expected: true },
    { input: 100, expected: false },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    try {
      const result = isArmstrong(input);
      if (result === expected) {
        console.log(`✅ isArmstrong(${input}) = ${result}`);
        passed++;
      } else {
        console.log(`❌ isArmstrong(${input}) = ${result} (expected ${expected})`);
      }
    } catch (e: any) {
      console.log(`❌ isArmstrong(${input}) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
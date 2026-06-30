/**
 * Problem: Reverse Digits of a Number
 * ------------------------------------
 * Given an integer, reverse its digits.
 *
 * Example:
 *   Input:  1234
 *   Output: 4321
 *
 *   Input:  -123
 *   Output: -321
 *
 *   Input:  120
 *   Output: 21   (leading zeros are dropped)
 */

function reverseNumber(n: number): number {
  let num = Math.abs(n);
  let reversed = 0;

  while (num > 0) {
    const digit = num % 10;           // Get last digit
    reversed = reversed * 10 + digit; // Append to reversed
    num = Math.floor(num / 10);       // Remove last digit
  }

  return n < 0 ? -reversed : reversed;
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: 1234, expected: 4321 },
    { input: -123, expected: -321 },
    { input: 120, expected: 21 },
    { input: 0, expected: 0 },
    { input: 5, expected: 5 },
    { input: 1000, expected: 1 },
  ];

  for (const { input, expected } of tests) {
    const result = reverseNumber(input);
    const pass = result === expected;
    console.log(`${pass ? "✅" : "❌"} reverseNumber(${input}) = ${result} ${pass ? "" : `(expected ${expected})`}`);
  }
}

runTests();
/**
 * Problem: Valid Palindrome
 * --------------------------
 * A phrase is a palindrome if it reads the same forwards and backwards
 * after converting all uppercase letters to lowercase and removing all
 * non-alphanumeric characters.
 *
 * Examples:
 *   isPalindrome("A man, a plan, a canal: Panama")  → true
 *   isPalindrome("race a car")                       → false
 *   isPalindrome(" ")                                → true
 */

// ---------- SOLUTION ----------

function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Skip non-alphanumeric characters from left
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }
    // Skip non-alphanumeric characters from right
    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function isAlphanumeric(ch: string): boolean {
  const code = ch.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) ||   // 0-9
    (code >= 65 && code <= 90) ||   // A-Z
    (code >= 97 && code <= 122)     // a-z
  );
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: "A man, a plan, a canal: Panama", expected: true },
    { input: "race a car", expected: false },
    { input: " ", expected: true },
    { input: "aba", expected: true },
    { input: "ab_a", expected: true },
    { input: "0P", expected: false },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    const result = isPalindrome(input);
    if (result === expected) {
      console.log(`✅ isPalindrome("${input.substring(0, 30)}...") = ${result}`);
      passed++;
    } else {
      console.log(`❌ isPalindrome("${input.substring(0, 30)}...") = ${result} (expected ${expected})`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
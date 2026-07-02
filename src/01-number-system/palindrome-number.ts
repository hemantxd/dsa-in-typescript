/**
 * Problem: Check if a Number is Palindrome
 * -----------------------------------------
 * A palindrome number reads the same forwards and backwards.
 *
 * Examples:
 *   isPalindrome(121)   → true
 *   isPalindrome(-121)  → false   (negative numbers are not palindromes)
 *   isPalindrome(10)    → false
 *   isPalindrome(0)     → true
 */

// TODO: Implement this function
function isPalindrome(n: number): boolean {
  // Your code here

  // const result = n.toString();
  // const reversed = result.split('').reverse().join('');
  // return result === reversed;
  // throw new Error("Not implemented"); 
  
  //method 2 maths

  let temp = n;
  let reversed =0;

  while(temp>0){
    let digit = temp % 10;
    reversed = reversed * 10 + digit;
    temp = Math.floor(temp / 10);
  }
  if (n === reversed) {
    return true;
  } else {
    return false;
  }

}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: 121, expected: true },
    { input: -121, expected: false },
    { input: 10, expected: false },
    { input: 0, expected: true },
    { input: 12321, expected: true },
    { input: 123, expected: false },
    { input: 1, expected: true },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    try {
      const result = isPalindrome(input);
      if (result === expected) {
        console.log(`✅ isPalindrome(${input}) = ${result}`);
        passed++;
      } else {
        console.log(`❌ isPalindrome(${input}) = ${result} (expected ${expected})`);
      }
    } catch (e: any) {
      console.log(`❌ isPalindrome(${input}) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
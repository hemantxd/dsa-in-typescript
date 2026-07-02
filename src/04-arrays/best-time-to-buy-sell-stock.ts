/**
 * Problem: Best Time to Buy and Sell Stock
 * -----------------------------------------
 * You are given an array prices where prices[i] is the price of a given
 * stock on day i. You want to maximize profit by choosing a single day
 * to buy and a different day in the future to sell.
 *
 * Return the maximum profit. If no profit can be made, return 0.
 *
 * Examples:
 *   maxProfit([7, 1, 5, 3, 6, 4])  → 5   (buy at 1, sell at 6)
 *   maxProfit([7, 6, 4, 3, 1])     → 0   (no profit possible)
 *   maxProfit([2, 4, 1])           → 2   (buy at 2, sell at 4)
 */

// TODO: Implement this function
function maxProfit(prices: number[]): number {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: [7, 1, 5, 3, 6, 4], expected: 5 },
    { input: [7, 6, 4, 3, 1], expected: 0 },
    { input: [2, 4, 1], expected: 2 },
    { input: [1], expected: 0 },
    { input: [3, 2, 6, 5, 0, 3], expected: 4 },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    try {
      const result = maxProfit(input);
      if (result === expected) {
        console.log(`✅ maxProfit([${input}]) = ${result}`);
        passed++;
      } else {
        console.log(`❌ maxProfit([${input}]) = ${result} (expected ${expected})`);
      }
    } catch (e: any) {
      console.log(`❌ maxProfit([${input}]) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
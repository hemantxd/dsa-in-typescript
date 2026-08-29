/**
 * Problem: Middle of the Linked List (LeetCode 876)
 * ----------------------------------------------------
 * Return the middle node. For even length, return the second middle.
 * Slow/fast pointer trick: fast moves 2 steps, slow moves 1 step;
 * when fast reaches the end, slow is at the middle.
 *
 * Examples:
 *   [1,2,3,4,5] → [3,4,5]
 *   [1,2,3,4]   → [3,4]
 */

import { ListNode, buildList, listToArray } from "./helpers";

// ---------- SOLUTION ----------

function middleNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  return slow;
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: [1, 2, 3, 4, 5], expected: [3, 4, 5] },
    { input: [1, 2, 3, 4], expected: [3, 4] },
    { input: [1], expected: [1] },
    { input: [1, 2], expected: [2] },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    const result = listToArray(middleNode(buildList(input)));
    if (JSON.stringify(result) === JSON.stringify(expected)) {
      console.log(`✅ middleNode([${input}]) = [${result}]`);
      passed++;
    } else {
      console.log(`❌ middleNode([${input}]) = [${result}] (expected [${expected}])`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
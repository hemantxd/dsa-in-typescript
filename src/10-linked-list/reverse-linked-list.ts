/**
 * Problem: Reverse Linked List (LeetCode 206)
 * ---------------------------------------------
 * Reverse a singly linked list and return the new head.
 * Iterative: O(n) time, O(1) space.
 *
 * Examples:
 *   [1,2,3,4,5] → [5,4,3,2,1]
 *   [1,2]       → [2,1]
 */

import { ListNode, buildList, listToArray } from "./helpers";

// ---------- SOLUTION ----------

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let cur = head;

  while (cur) {
    const next: ListNode | null = cur.next; // save next
    cur.next = prev; // reverse pointer
    prev = cur; // advance prev
    cur = next; // advance cur
  }

  return prev; // new head
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: [1, 2, 3, 4, 5], expected: [5, 4, 3, 2, 1] },
    { input: [1, 2], expected: [2, 1] },
    { input: [], expected: [] },
    { input: [7], expected: [7] },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    const result = listToArray(reverseList(buildList(input)));
    if (JSON.stringify(result) === JSON.stringify(expected)) {
      console.log(`✅ reverseList([${input}]) = [${result}]`);
      passed++;
    } else {
      console.log(`❌ reverseList([${input}]) = [${result}] (expected [${expected}])`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
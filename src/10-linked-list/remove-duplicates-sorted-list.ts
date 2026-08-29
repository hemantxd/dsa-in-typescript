/**
 * Problem: Remove Duplicates from Sorted List (LeetCode 83)
 * ------------------------------------------------------------
 * Given a sorted linked list, delete all duplicates so each element
 * appears only once.
 *
 * Examples:
 *   [1,1,2]     → [1,2]
 *   [1,1,2,3,3] → [1,2,3]
 */

import { ListNode, buildList, listToArray } from "./helpers";

// ---------- SOLUTION ----------

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let cur = head;

  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next; // skip duplicate
    } else {
      cur = cur.next;
    }
  }

  return head;
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: [1, 1, 2], expected: [1, 2] },
    { input: [1, 1, 2, 3, 3], expected: [1, 2, 3] },
    { input: [], expected: [] },
    { input: [1, 1, 1], expected: [1] },
    { input: [1, 2, 3], expected: [1, 2, 3] },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    const result = listToArray(deleteDuplicates(buildList(input)));
    if (JSON.stringify(result) === JSON.stringify(expected)) {
      console.log(`✅ deleteDuplicates([${input}]) = [${result}]`);
      passed++;
    } else {
      console.log(`❌ deleteDuplicates([${input}]) = [${result}] (expected [${expected}])`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
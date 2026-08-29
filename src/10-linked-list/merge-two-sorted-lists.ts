/**
 * Problem: Merge Two Sorted Lists (LeetCode 21)
 * ------------------------------------------------
 * Merge two sorted linked lists into one sorted list by splicing
 * nodes together. Classic use of a dummy head node.
 *
 * Examples:
 *   [1,2,4] + [1,3,4] → [1,1,2,3,4,4]
 *   []      + [0]     → [0]
 */

import { ListNode, buildList, listToArray } from "./helpers";

// ---------- SOLUTION ----------

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode(); // dummy head simplifies edge cases
  let tail = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }

  // attach whatever remains
  tail.next = l1 ?? l2;
  return dummy.next;
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { a: [1, 2, 4], b: [1, 3, 4], expected: [1, 1, 2, 3, 4, 4] },
    { a: [], b: [0], expected: [0] },
    { a: [], b: [], expected: [] },
    { a: [5], b: [1, 2, 3], expected: [1, 2, 3, 5] },
  ];

  let passed = 0;
  for (const { a, b, expected } of tests) {
    const result = listToArray(mergeTwoLists(buildList(a), buildList(b)));
    if (JSON.stringify(result) === JSON.stringify(expected)) {
      console.log(`✅ mergeTwoLists([${a}], [${b}]) = [${result}]`);
      passed++;
    } else {
      console.log(`❌ mergeTwoLists([${a}], [${b}]) = [${result}] (expected [${expected}])`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
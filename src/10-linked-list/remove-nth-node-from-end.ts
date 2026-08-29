/**
 * Problem: Remove Nth Node From End of List (LeetCode 19)
 * ---------------------------------------------------------
 * Remove the nth node from the end of the list in one pass using
 * the two-pointer gap technique (fast gets n steps ahead, then both move).
 * Dummy head handles removing the actual head.
 *
 * Examples:
 *   [1,2,3,4,5], n=2 → [1,2,3,5]
 *   [1], n=1         → []
 */

import { ListNode, buildList, listToArray } from "./helpers";

// ---------- SOLUTION ----------

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let fast: ListNode | null = dummy;
  let slow: ListNode | null = dummy;

  // move fast n+1 steps ahead so slow lands right before the target
  for (let i = 0; i <= n; i++) {
    fast = fast!.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow!.next;
  }

  slow!.next = slow!.next!.next; // skip the target node
  return dummy.next;
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: [1, 2, 3, 4, 5], n: 2, expected: [1, 2, 3, 5] },
    { input: [1], n: 1, expected: [] },
    { input: [1, 2], n: 1, expected: [1] },
    { input: [1, 2], n: 2, expected: [2] },
  ];

  let passed = 0;
  for (const { input, n, expected } of tests) {
    const result = listToArray(removeNthFromEnd(buildList(input), n));
    if (JSON.stringify(result) === JSON.stringify(expected)) {
      console.log(`✅ removeNthFromEnd([${input}], ${n}) = [${result}]`);
      passed++;
    } else {
      console.log(`❌ removeNthFromEnd([${input}], ${n}) = [${result}] (expected [${expected}])`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
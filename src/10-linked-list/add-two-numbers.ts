/**
 * Problem: Add Two Numbers (LeetCode 2)
 * ----------------------------------------
 * Two numbers are stored as reversed linked lists (each node = one digit).
 * Add them and return the sum as a reversed linked list.
 *
 * Examples:
 *   [2,4,3] + [5,6,4] → [7,0,8]   (342 + 465 = 807)
 *   [0]     + [0]     → [0]
 *   [9,9,9] + [9,9,9,9] → [8,9,9,9,1]
 */

import { ListNode, buildList, listToArray } from "./helpers";

// ---------- SOLUTION ----------

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode();
  let tail = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    carry = Math.floor(sum / 10);
    tail.next = new ListNode(sum % 10);
    tail = tail.next;
    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  return dummy.next;
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { a: [2, 4, 3], b: [5, 6, 4], expected: [7, 0, 8] },
    { a: [0], b: [0], expected: [0] },
    { a: [9, 9, 9], b: [9, 9, 9, 9], expected: [8, 9, 9, 0, 1] },
    { a: [5], b: [5], expected: [0, 1] },
  ];

  let passed = 0;
  for (const { a, b, expected } of tests) {
    const result = listToArray(addTwoNumbers(buildList(a), buildList(b)));
    if (JSON.stringify(result) === JSON.stringify(expected)) {
      console.log(`✅ addTwoNumbers([${a}], [${b}]) = [${result}]`);
      passed++;
    } else {
      console.log(`❌ addTwoNumbers([${a}], [${b}]) = [${result}] (expected [${expected}])`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
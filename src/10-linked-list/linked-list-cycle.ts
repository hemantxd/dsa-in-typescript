/**
 * Problem: Linked List Cycle (LeetCode 141)
 * --------------------------------------------
 * Determine if a linked list has a cycle using
 * Floyd's Cycle Detection (slow & fast pointers). O(1) space.
 *
 * Examples:
 *   1 → 2 → 3 → (back to 1)  → true
 *   1 → 2 → 3                → false
 */

import { ListNode, buildList } from "./helpers";

// ---------- SOLUTION ----------

function hasCycle(head: ListNode | null): boolean {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
    if (slow === fast) return true; // they met → cycle
  }

  return false; // fast reached the end → no cycle
}

// ---------- TESTS ----------

function runTests() {
  // test 1: with cycle 1→2→3→(1)
  const cyclic = buildList([1, 2, 3])!;
  let tail = cyclic;
  while (tail.next) tail = tail.next;
  tail.next = cyclic; // create cycle

  // test 2: no cycle
  const linear = buildList([1, 2, 3]);

  const tests = [
    { head: cyclic as ListNode | null, expected: true, label: "1→2→3→(1)" },
    { head: linear as ListNode | null, expected: false, label: "1→2→3" },
    { head: null, expected: false, label: "empty" },
  ];

  let passed = 0;
  for (const { head, expected, label } of tests) {
    const result = hasCycle(head);
    if (result === expected) {
      console.log(`✅ hasCycle(${label}) = ${result}`);
      passed++;
    } else {
      console.log(`❌ hasCycle(${label}) = ${result} (expected ${expected})`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
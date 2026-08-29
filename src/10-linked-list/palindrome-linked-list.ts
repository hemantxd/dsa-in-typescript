/**
 * Problem: Palindrome Linked List (LeetCode 234)
 * -------------------------------------------------
 * Check if a linked list is a palindrome in O(n) time and O(1) space:
 * find the middle (slow/fast), reverse the second half, compare halves.
 *
 * Examples:
 *   [1,2,2,1] → true
 *   [1,2]     → false
 */

import { ListNode, buildList, listToArray } from "./helpers";

// ---------- SOLUTION ----------

function isPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) return true;

  // 1. find middle (slow ends at first half's end for even, at middle for odd)
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast.next && fast.next.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // 2. reverse second half
  let second: ListNode | null = reverse(slow!.next);
  slow!.next = null;

  // 3. compare both halves
  let p1: ListNode = head;
  let p2 = second;
  let result = true;
  while (p2) {
    if (p1.val !== p2.val) {
      result = false;
      break;
    }
    p1 = p1.next!;
    p2 = p2.next;
  }

  // 4. (optional) restore the list
  slow!.next = reverse(second);

  return result;
}

function reverse(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let cur = head;
  while (cur) {
    const next: ListNode | null = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    { input: [1, 2, 2, 1], expected: true },
    { input: [1, 2], expected: false },
    { input: [1, 2, 1], expected: true },
    { input: [1], expected: true },
    { input: [1, 2, 3, 2, 1], expected: true },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    const head = buildList(input);
    const result = isPalindrome(head);
    const restored = listToArray(head); // verify list was restored
    const ok = result === expected && JSON.stringify(restored) === JSON.stringify(input);
    if (ok) {
      console.log(`✅ isPalindrome([${input}]) = ${result}`);
      passed++;
    } else {
      console.log(`❌ isPalindrome([${input}]) = ${result} (expected ${expected})`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
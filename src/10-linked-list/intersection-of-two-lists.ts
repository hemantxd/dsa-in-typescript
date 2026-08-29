/**
 * Problem: Intersection of Two Linked Lists (LeetCode 160)
 * -----------------------------------------------------------
 * Find the node where two singly linked lists intersect (by reference).
 * Two-pointer switching trick: when a pointer hits the end, redirect it
 * to the other list's head. They meet at the intersection (or both null).
 *
 * Examples:
 *   A: 4→1→(8→4→5), B: 5→6→1→(8→4→5) → node 8
 *   A: 2→6→4, B: 1→5 → null
 */

import { ListNode, buildList, listToArray } from "./helpers";

// ---------- SOLUTION ----------

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (!headA || !headB) return null;

  let a: ListNode | null = headA;
  let b: ListNode | null = headB;

  // pointers switch lists; they travel a+b steps each → meet at intersection
  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }

  return a; // intersection node, or null if lists don't intersect
}

// ---------- TESTS ----------

function runTests() {
  let passed = 0;

  // Case 1: intersecting lists
  const shared = buildList([8, 4, 5]);
  const headA = buildList([4, 1]);
  const headB = buildList([5, 6, 1]);
  let tailA = headA!;
  while (tailA.next) tailA = tailA.next;
  tailA.next = shared;
  let tailB = headB!;
  while (tailB.next) tailB = tailB.next;
  tailB.next = shared;

  const r1 = getIntersectionNode(headA, headB);
  if (r1 === shared) {
    console.log(`✅ intersection found at node ${r1?.val} (shared list [8,4,5])`);
    passed++;
  } else {
    console.log(`❌ intersection = ${r1?.val ?? "null"} (expected node 8)`);
  }

  // Case 2: no intersection
  const l1 = buildList([2, 6, 4]);
  const l2 = buildList([1, 5]);
  const r2 = getIntersectionNode(l1, l2);
  if (r2 === null) {
    console.log("✅ no intersection → null");
    passed++;
  } else {
    console.log(`❌ expected null but got node ${r2.val}`);
  }

  console.log(`\n${passed}/2 tests passed`);
}

runTests();
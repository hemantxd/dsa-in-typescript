/**
 * Shared helpers for linked-list problems.
 */

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

/** Build a linked list from an array. Returns the head (or null for []). */
export function buildList(values: number[]): ListNode | null {
  let head: ListNode | null = null;
  let tail: ListNode | null = null;
  for (const v of values) {
    const node = new ListNode(v);
    if (!head) {
      head = tail = node;
    } else {
      tail!.next = node;
      tail = node;
    }
  }
  return head;
}

/** Convert a linked list back to an array (for printing / assertions). */
export function listToArray(head: ListNode | null): number[] {
  const out: number[] = [];
  let cur = head;
  while (cur) {
    out.push(cur.val);
    cur = cur.next;
  }
  return out;
}

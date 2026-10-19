/**
 * DAY 2 — Solution: Design Circular Queue (LeetCode 622) ★
 * --------------------------------------------------------------
 * THOUGHT PROCESS
 *   Brute force idea: a plain array with shift() — O(n) per dequeue, and the
 *   buffer only grows. For a FIXED capacity k we can do better.
 *   Observation: with capacity k, only k slots ever exist. The queue is a
 *   "window" sliding over a ring: front at `head`, back at (head+count)%k.
 *   Freed slots at the front are naturally reused — no shifting, no growth.
 *   Why count (not just head/tail pointers): with head==tail meaning BOTH
 *   empty and full, you'd waste a slot or add a flag. A `count` field makes
 *   empty (count==0) vs full (count==k) unambiguous and Rear() trivial.
 *   Algorithm: fixed array + head + count, all index math modulo k.
 *   Complexity: all operations Time O(1); Space O(k).
 */

export class MyCircularQueue {
  private data: number[];
  private head = 0; // index of the front element
  private count = 0; // how many elements are stored
  private k: number;

  constructor(k: number) {
    this.k = k;
    this.data = new Array<number>(k);
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false;
    this.data[(this.head + this.count) % this.k] = value; // back of the ring
    this.count++;
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;
    this.head = (this.head + 1) % this.k; // front advances, slot reused later
    this.count--;
    return true;
  }

  Front(): number {
    return this.isEmpty() ? -1 : this.data[this.head];
  }

  Rear(): number {
    return this.isEmpty() ? -1 : this.data[(this.head + this.count - 1) % this.k];
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  isFull(): boolean {
    return this.count === this.k;
  }
}

// ---------- TESTS ----------

function runTests() {
  let passed = 0;
  let total = 0;

  total++;
  const q = new MyCircularQueue(3);
  const log: unknown[] = [q.enQueue(1), q.enQueue(2), q.enQueue(3)];
  log.push(q.enQueue(4), q.Rear(), q.isFull(), q.deQueue(), q.enQueue(4), q.Rear());
  const expected = [true, true, true, false, 3, true, true, true, 4];
  if (JSON.stringify(log) === JSON.stringify(expected)) {
    console.log(`✅ walkthrough → ${JSON.stringify(log)}`);
    passed++;
  } else {
    console.log(`❌ walkthrough → ${JSON.stringify(log)} (expected ${JSON.stringify(expected)})`);
  }

  total++;
  const q2 = new MyCircularQueue(1); // wrap-around with k=1
  const log2 = [q2.enQueue(5), q2.enQueue(6), q2.Front(), q2.Rear(), q2.deQueue(), q2.isEmpty()];
  const expected2 = [true, false, 5, 5, true, true];
  if (JSON.stringify(log2) === JSON.stringify(expected2)) {
    console.log(`✅ k=1 edge case → ${JSON.stringify(log2)}`);
    passed++;
  } else {
    console.log(`❌ k=1 edge case → ${JSON.stringify(log2)} (expected ${JSON.stringify(expected2)})`);
  }

  console.log(`\n${passed}/${total} tests passed`);
  console.log("All ops Time: O(1) | Space: O(k)");
}

if (require.main === module) {
  runTests();
}

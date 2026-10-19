/**
 * DAY 2 — Exercise 2: Design Circular Queue (LeetCode 622) ★
 * ---------------------------------------------------------------
 * PROBLEM
 * Design a queue with FIXED capacity k supporting enQueue, deQueue, Front,
 * Rear, isEmpty, isFull — all in O(1). "Circular" means freed slots at the
 * front get reused: indices wrap around with modulo.
 *
 * EXAMPLE
 *   const q = new MyCircularQueue(3);
 *   q.enQueue(1); // → true
 *   q.enQueue(2); // → true
 *   q.enQueue(3); // → true
 *   q.enQueue(4); // → false (full)
 *   q.Rear();     // → 3
 *   q.isFull();   // → true
 *   q.deQueue();  // → true (frees a slot)
 *   q.enQueue(4); // → true (reuses the freed slot!)
 *   q.Rear();     // → 4
 *
 * HINTS (read one at a time, only if stuck)
 *   H1. Front is at `head`; the back is at `(head + count) % k`. Track `count`
 *       separately — it makes empty (count==0) vs full (count==k) trivial and
 *       avoids the classic "head==tail means both?" ambiguity.
 *   H2. enQueue: refuse if full; write at (head+count)%k; count++.
 *       deQueue: refuse if empty; head = (head+1)%k; count--.
 *   H3. Front() = data[head]; Rear() = data[(head+count-1)%k]. Return -1 when
 *       the queue is empty.
 *
 * YOUR TASK
 * Implement the MyCircularQueue class below. Run THIS file to check yourself:
 *   npx ts-node src/12-queue/day-2/circular-queue.ts
 * The solution (with tests) lives in solutions/circular-queue.solution.ts —
 * open it ONLY after you have tried for 10–15 minutes.
 */

export class MyCircularQueue {
  // TODO: fixed array + head index + count; modulo for wrap-around.

  constructor(k: number) {
    throw new Error("Not implemented yet — your turn! (See Hints above.)");
  }

  enQueue(value: number): boolean {
    throw new Error("Not implemented yet — your turn! (See Hints above.)");
  }

  deQueue(): boolean {
    throw new Error("Not implemented yet — your turn! (See Hints above.)");
  }

  Front(): number {
    throw new Error("Not implemented yet — your turn! (See Hints above.)");
  }

  Rear(): number {
    throw new Error("Not implemented yet — your turn! (See Hints above.)");
  }

  isEmpty(): boolean {
    throw new Error("Not implemented yet — your turn! (See Hints above.)");
  }

  isFull(): boolean {
    throw new Error("Not implemented yet — your turn! (See Hints above.)");
  }
}

// ---------- SELF-CHECK (no answers leaked — just pass/fail) ----------

function selfCheck() {
  try {
    const q = new MyCircularQueue(3);
    const log: unknown[] = [];
    log.push(q.enQueue(1), q.enQueue(2), q.enQueue(3));
    log.push(q.enQueue(4)); // false — full
    log.push(q.Rear());     // 3
    log.push(q.isFull());   // true
    log.push(q.deQueue());  // true
    log.push(q.enQueue(4)); // true — slot reused
    log.push(q.Rear());     // 4
    const expected = [true, true, true, false, 3, true, true, true, 4];
    const ok = JSON.stringify(log) === JSON.stringify(expected);
    console.log(ok ? `✅ walkthrough → ${JSON.stringify(log)}` : `❌ got ${JSON.stringify(log)}, expected ${JSON.stringify(expected)}`);
    console.log(ok ? "\n1/1 passing." : "\n0/1 passing.");
  } catch {
    console.log("⏳ MyCircularQueue — not implemented yet.");
  }
  console.log("Solution: solutions/circular-queue.solution.ts");
}

if (require.main === module) {
  selfCheck();
}

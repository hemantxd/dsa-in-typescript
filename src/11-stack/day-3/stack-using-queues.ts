/**
 * DAY 3 — Challenge 2: Implement a Stack Using Queues (LeetCode 225)
 * ---------------------------------------------------------------------
 * PROBLEM
 * Implement a last-in-first-out stack using ONLY queues (think of a queue as
 * an object with enqueue(x), dequeue(), isEmpty() — FIFO only). You must
 * support push, pop, top, and empty. (A two-queue or one-queue version both
 * count — one queue is enough.)
 *
 * EXAMPLE
 *   const s = new MyStack();
 *   s.push(1); s.push(2);
 *   s.top();  // → 2
 *   s.pop();  // → 2
 *   s.empty();// → false
 *
 * HINTS (read one at a time, only if stuck)
 *   H1. A queue gives you the OLDEST element; a stack needs the NEWEST. So on
 *       push, you must rearrange so the new element ends up at the FRONT.
 *   H2. One-queue trick: enqueue x, then rotate the queue (dequeue + enqueue)
 *       size-1 times. Now x is at the front and pop/top are trivial.
 *   H3. Cost: push becomes O(n), pop/top stay O(1). (The two-queue version
 *       just swaps which operation pays — same complexity either way.)
 *
 * YOUR TASK
 * Implement the MyStack class below (only FIFO queue operations inside!).
 * Run THIS file to check yourself:
 *   npx ts-node src/11-stack/day-3/stack-using-queues.ts
 * The solution (with tests) lives in solutions/stack-using-queues.solution.ts —
 * open it ONLY after you have tried for 15–20 minutes.
 */

// Minimal FIFO queue YOU MAY USE (do not add stack-like helpers to it).
class SimpleQueue<T> {
  private items: T[] = [];
  enqueue(x: T): void { this.items.push(x); }
  dequeue(): T | undefined { return this.items.shift(); }
  isEmpty(): boolean { return this.items.length === 0; }
  size(): number { return this.items.length; }
}

export class MyStack {
  // TODO: one SimpleQueue<number> field; rotate on push.
  push(x: number): void {
    throw new Error("Not implemented yet — your turn! (See Hints above.)");
  }

  pop(): number {
    throw new Error("Not implemented yet — your turn! (See Hints above.)");
  }

  top(): number {
    throw new Error("Not implemented yet — your turn! (See Hints above.)");
  }

  empty(): boolean {
    throw new Error("Not implemented yet — your turn! (See Hints above.)");
  }
}

// ---------- SELF-CHECK (no answers leaked — just pass/fail) ----------

function selfCheck() {
  try {
    const s = new MyStack();
    s.push(1); s.push(2);
    const t = s.top();   // 2
    const p = s.pop();   // 2
    const e = s.empty(); // false
    const ok = t === 2 && p === 2 && e === false;
    console.log(ok ? "✅ walkthrough → top=2, pop=2, empty=false" : `❌ got top=${t}, pop=${p}, empty=${e}`);
    console.log(ok ? "\n1/1 passing." : "\n0/1 passing.");
  } catch {
    console.log("⏳ MyStack — not implemented yet.");
  }
  console.log("Solution: solutions/stack-using-queues.solution.ts");
}

if (require.main === module) {
  selfCheck();
}

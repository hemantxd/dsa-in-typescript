/**
 * DAY 1 — Queue fundamentals: build your own generic Queue<T>.
 * ----------------------------------------------------------------
 * Read this file first. It explains each method as it is defined.
 * Run it to see every operation in action:
 *
 *   npx ts-node src/12-queue/basics/Queue.ts
 *
 * THE BIG IDEA
 * A queue touches OPPOSITE ends: add at the BACK, remove from the FRONT
 * (FIFO — first in, first out). Think of a checkout line: newcomers join at
 * the back, the cashier serves the front.
 *
 * THE ARRAY TRAP: array.shift() removes from the front but costs O(n),
 * because every remaining element moves one slot left. So this
 * implementation keeps a `head` index pointing at the front instead of ever
 * shifting: dequeue just advances `head` — O(1). (When the wasted prefix
 * grows large, we compact the array once; that cost averages out.)
 */
export class Queue<T> {
  private items: T[] = [];
  private head = 0; // index of the front element

  /** Add a value at the back. O(1) amortized. */
  enqueue(value: T): void {
    this.items.push(value);
  }

  /**
   * Remove the front value and return it.
   * Returns undefined when the queue is empty — so callers must check
   * isEmpty() first (or handle undefined). O(1).
   */
  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;
    const value = this.items[this.head];
    this.head++;
    // compact occasionally so the dead prefix doesn't grow forever
    if (this.head > 100 && this.head * 2 > this.items.length) {
      this.items = this.items.slice(this.head);
      this.head = 0;
    }
    return value;
  }

  /** Look at the front value WITHOUT removing it. O(1). */
  peek(): T | undefined {
    return this.isEmpty() ? undefined : this.items[this.head];
  }

  /** True when there is nothing to dequeue/peek. O(1). */
  isEmpty(): boolean {
    return this.head >= this.items.length;
  }

  /** How many values are stored. O(1). */
  size(): number {
    return this.items.length - this.head;
  }
}

// ---------- GUIDED TOUR (runs only when you execute THIS file) ----------

function tour() {
  const queue = new Queue<string>();

  console.log("isEmpty:", queue.isEmpty()); // true — nothing stored yet

  queue.enqueue("A");
  queue.enqueue("B");
  queue.enqueue("C");
  console.log("after enqueues, peek:", queue.peek(), "| size:", queue.size()); // A, 3

  console.log("dequeue:", queue.dequeue()); // A (first in, first out!)
  console.log("dequeue:", queue.dequeue()); // B
  console.log("peek (no removal):", queue.peek()); // C — still there
  console.log("size:", queue.size()); // 1

  queue.dequeue();
  console.log("empty now:", queue.isEmpty()); // true
  console.log("dequeue on empty:", queue.dequeue()); // undefined — never crashes
}

// importers (solution files) reuse the class without re-running the tour
if (require.main === module) {
  tour();
}

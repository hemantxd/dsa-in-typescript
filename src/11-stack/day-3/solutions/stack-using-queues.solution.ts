/**
 * DAY 3 — Solution: Stack Using Queues (LeetCode 225)
 * ------------------------------------------------------
 * THOUGHT PROCESS
 *   Brute force idea: there is none — the constraint IS the problem (FIFO
 *   only). A queue hands you the OLDEST element; a stack must hand you the
 *   NEWEST. So the trick must live in push: rearrange the queue so the newest
 *   element ends up at the FRONT.
 *   Observation: after push(x), rotate the queue (move front→back) size-1
 *   times. The new x stays put while everything older cycles behind it. The
 *   queue is now in "stack order": front = top of stack.
 *   Why it works: pop/top just dequeue/peek the front — O(1). All the cost is
 *   paid once in push — O(n). (A two-queue variant moves the cost to pop;
 *   same totals. One queue suffices.)
 *   Complexity: push Time O(n), pop/top/empty Time O(1); Space O(n).
 */

class SimpleQueue<T> {
  private items: T[] = [];
  enqueue(x: T): void { this.items.push(x); }
  dequeue(): T | undefined { return this.items.shift(); }
  peek(): T | undefined { return this.items[0]; }
  isEmpty(): boolean { return this.items.length === 0; }
  size(): number { return this.items.length; }
}

export class MyStack {
  private q = new SimpleQueue<number>();

  push(x: number): void {
    this.q.enqueue(x);
    // rotate the older elements behind x → x ends up at the front
    for (let i = 0; i < this.q.size() - 1; i++) {
      this.q.enqueue(this.q.dequeue()!);
    }
  }

  pop(): number {
    return this.q.dequeue()!;
  }

  top(): number {
    return this.q.peek()!;
  }

  empty(): boolean {
    return this.q.isEmpty();
  }
}

// ---------- TESTS ----------

function runTests() {
  let passed = 0;
  let total = 0;

  total++;
  const s = new MyStack();
  s.push(1); s.push(2);
  const t = s.top();   // 2
  const p = s.pop();   // 2
  const e = s.empty(); // false
  if (t === 2 && p === 2 && e === false) {
    console.log("✅ walkthrough → top=2, pop=2, empty=false");
    passed++;
  } else {
    console.log(`❌ walkthrough → top=${t}, pop=${p}, empty=${e}`);
  }

  total++;
  const s2 = new MyStack();
  const seq: number[] = [];
  s2.push(1); s2.push(2); s2.push(3);
  seq.push(s2.pop(), s2.pop(), s2.pop()); // LIFO: 3,2,1
  const lifo = JSON.stringify(seq) === "[3,2,1]" && s2.empty();
  if (lifo) {
    console.log(`✅ LIFO order → pops gave [${seq}], then empty`);
    passed++;
  } else {
    console.log(`❌ LIFO broken → pops gave [${seq}]`);
  }

  console.log(`\n${passed}/${total} tests passed`);
  console.log("push: O(n) | pop/top/empty: O(1) | Space: O(n)");
}

if (require.main === module) {
  runTests();
}

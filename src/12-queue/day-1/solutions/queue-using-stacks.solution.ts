/**
 * DAY 1 — Solution: Queue using Stacks (LeetCode 232) ★
 * ----------------------------------------------------------
 * THOUGHT PROCESS
 *   Brute force idea: there is none — the constraint IS the problem (LIFO
 *   only). A single stack hands you the NEWEST item; a queue must hand you
 *   the OLDEST. So reverse twice: one reversal gets you the oldest on top,
 *   but then the stack is backwards for the NEXT operation…
 *   Observation: split the roles. An "in" stack accepts pushes (newest on
 *   top). An "out" stack serves pops (oldest on top). When "out" runs dry,
 *   pour ALL of "in" into it — that single reversal puts the oldest on top,
 *   and newer pushes keep piling onto "in" undisturbed.
 *   Why it works / amortized O(1): each element moves in→out AT MOST ONCE.
 *   A pop that triggers a pour pays O(n), but that pour serves the next n
 *   pops for free. Total over n operations: O(n) → O(1) amortized each.
 *   Algorithm: push → in.push. pop/peek → pour if out empty, then out.pop/top.
 *   Complexity: push O(1); pop/peek O(1) amortized; Space O(n).
 */

export class MyQueue {
  private inStack: number[] = []; // newest pushes land here
  private outStack: number[] = []; // oldest items surface here, on top

  push(x: number): void {
    this.inStack.push(x);
  }

  /** Move everything over only when outStack is exhausted. */
  private pour(): void {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop()!); // reversal → oldest on top
      }
    }
  }

  pop(): number {
    this.pour();
    return this.outStack.pop()!;
  }

  peek(): number {
    this.pour();
    return this.outStack[this.outStack.length - 1];
  }

  empty(): boolean {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }
}

// ---------- TESTS ----------

function runTests() {
  let passed = 0;
  let total = 0;

  total++;
  const q = new MyQueue();
  q.push(1); q.push(2);
  const t = q.peek();   // 1
  const p = q.pop();    // 1
  const e = q.empty();  // false
  if (t === 1 && p === 1 && e === false) {
    console.log("✅ walkthrough → peek=1, pop=1, empty=false");
    passed++;
  } else {
    console.log(`❌ walkthrough → peek=${t}, pop=${p}, empty=${e}`);
  }

  total++;
  const q2 = new MyQueue();
  const seq: number[] = [];
  q2.push(1); q2.push(2); q2.push(3);
  seq.push(q2.pop(), q2.pop());
  q2.push(4); // interleaved push after a pour — must still come out last
  seq.push(q2.pop(), q2.pop());
  const fifo = JSON.stringify(seq) === "[1,2,3,4]" && q2.empty();
  if (fifo) {
    console.log(`✅ FIFO incl. interleaved push → [${seq}], then empty`);
    passed++;
  } else {
    console.log(`❌ FIFO broken → [${seq}]`);
  }

  console.log(`\n${passed}/${total} tests passed`);
  console.log("push: O(1) | pop/peek: O(1) amortized | Space: O(n)");
}

if (require.main === module) {
  runTests();
}

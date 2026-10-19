/**
 * DAY 1 — Exercise 1: Implement Queue using Stacks (LeetCode 232) ★
 * --------------------------------------------------------------------
 * PROBLEM
 * Implement a first-in-first-out queue using ONLY two stacks. You must
 * support push(x), pop(), peek(), and empty().
 *
 * EXAMPLE
 *   const q = new MyQueue();
 *   q.push(1); q.push(2);
 *   q.peek();  // → 1
 *   q.pop();   // → 1
 *   q.empty(); // → false
 *
 * CONSTRAINTS
 *   Methods pop/peek are only called on non-empty queues.
 *
 * HINTS (read one at a time, only if stuck)
 *   H1. A stack reverses order; TWO reversals restore it. One stack for
 *       incoming items, one for outgoing — move items between them.
 *   H2. Push always goes on the "in" stack. For pop/peek: if the "out" stack
 *       is empty, pour EVERYTHING from "in" to "out" (this reverses them into
 *       FIFO order), then pop/peek "out".
 *   H3. Each element moves in→out at most once → pop/peek are O(1) amortized,
 *       even though one call can cost O(n).
 *
 * YOUR TASK
 * Implement the MyQueue class below. Run THIS file to check yourself:
 *   npx ts-node src/12-queue/day-1/queue-using-stacks.ts
 * The solution (with tests) lives in solutions/queue-using-stacks.solution.ts —
 * open it ONLY after you have tried for 10–15 minutes.
 */

export class MyQueue {
  // TODO: an "in" stack + an "out" stack, with a pour helper.

  push(x: number): void {
    throw new Error("Not implemented yet — your turn! (See Hints above.)");
  }

  pop(): number {
    throw new Error("Not implemented yet — your turn! (See Hints above.)");
  }

  peek(): number {
    throw new Error("Not implemented yet — your turn! (See Hints above.)");
  }

  empty(): boolean {
    throw new Error("Not implemented yet — your turn! (See Hints above.)");
  }
}

// ---------- SELF-CHECK (no answers leaked — just pass/fail) ----------

function selfCheck() {
  try {
    const q = new MyQueue();
    q.push(1); q.push(2);
    const t = q.peek();   // 1
    const p = q.pop();    // 1
    const e = q.empty();  // false
    const ok = t === 1 && p === 1 && e === false;
    console.log(ok ? "✅ walkthrough → peek=1, pop=1, empty=false" : `❌ got peek=${t}, pop=${p}, empty=${e}`);
    console.log(ok ? "\n1/1 passing." : "\n0/1 passing.");
  } catch {
    console.log("⏳ MyQueue — not implemented yet.");
  }
  console.log("Solution: solutions/queue-using-stacks.solution.ts");
}

if (require.main === module) {
  selfCheck();
}

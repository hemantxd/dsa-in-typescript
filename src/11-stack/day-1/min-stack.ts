/**
 * DAY 1 — Exercise 4: Min Stack (LeetCode 155) ★
 * -------------------------------------------------
 * PROBLEM
 * Design a stack that supports push, pop, top, and retrieving the MINIMUM
 * element — all in O(1) time.
 *
 * EXAMPLE
 *   const m = new MinStack();
 *   m.push(-2); m.push(0); m.push(-3);
 *   m.getMin(); // → -3
 *   m.pop();
 *   m.top();    // → 0
 *   m.getMin(); // → -2
 *
 * CONSTRAINTS
 *   Methods pop/top/getMin are only called on non-empty stacks.
 *
 * HINTS (read one at a time, only if stuck)
 *   H1. Scanning for the min on every getMin() is O(n). What if you
 *       remembered the answer instead of recomputing it?
 *   H2. Keep a SECOND stack (minStack) where each entry is "the minimum of
 *       everything below this point". Push min(val, minStack.top).
 *   H3. Pop from BOTH stacks together so they stay aligned. top() reads the
 *       main stack; getMin() reads minStack's top.
 *
 * YOUR TASK
 * Implement the MinStack class below. Run THIS file to check yourself:
 *   npx ts-node src/11-stack/day-1/min-stack.ts
 * The solution (with tests) lives in solutions/min-stack.solution.ts —
 * open it ONLY after you have tried for 10–15 minutes.
 */

export class MinStack {
  // TODO: add a main stack + a min-tracking stack.

  push(val: number): void {
    throw new Error("Not implemented yet — your turn! (See Hints above.)");
  }

  pop(): void {
    throw new Error("Not implemented yet — your turn! (See Hints above.)");
  }

  top(): number {
    throw new Error("Not implemented yet — your turn! (See Hints above.)");
  }

  getMin(): number {
    throw new Error("Not implemented yet — your turn! (See Hints above.)");
  }
}

// ---------- SELF-CHECK (no answers leaked — just pass/fail) ----------

function selfCheck() {
  try {
    const m = new MinStack();
    const log: unknown[] = [];
    m.push(-2); m.push(0); m.push(-3);
    log.push(m.getMin()); // -3
    m.pop();
    log.push(m.top());    // 0
    log.push(m.getMin()); // -2
    const expected = [-3, 0, -2];
    const ok = JSON.stringify(log) === JSON.stringify(expected);
    console.log(ok ? `✅ MinStack walkthrough → ${JSON.stringify(log)}` : `❌ got ${JSON.stringify(log)}, expected ${JSON.stringify(expected)}`);
    console.log(ok ? "\n1/1 passing." : "\n0/1 passing.");
  } catch {
    console.log("⏳ MinStack — not implemented yet.");
  }
  console.log("Solution: solutions/min-stack.solution.ts");
}

if (require.main === module) {
  selfCheck();
}

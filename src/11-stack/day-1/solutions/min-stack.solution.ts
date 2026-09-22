/**
 * DAY 1 — Solution: Min Stack (LeetCode 155) ★
 * ------------------------------------------------
 * THOUGHT PROCESS
 *   Brute force idea: scan all elements on every getMin() — O(n) per query.
 *   Too slow if getMin() is called often.
 *   Observation: the minimum only changes on push/pop, so REMEMBER it instead
 *   of recomputing. But a single variable breaks on pop (the old min is lost).
 *   Why a stack helps: minima nest exactly like pushes/pops. Keep a second
 *   stack where entry i = "minimum of the first i elements". Popping restores
 *   the previous minimum automatically — history is preserved.
 *   Algorithm: push → main.push(val), min.push(min(val, min.top ?? val)).
 *   pop → pop BOTH. top → main.top. getMin → min.top.
 *   Complexity: all four operations Time O(1), Space O(n) extra.
 */

export class MinStack {
  private main: number[] = [];
  private mins: number[] = []; // mins[i] = min of main[0..i]

  push(val: number): void {
    this.main.push(val);
    const prevMin = this.mins.length > 0 ? this.mins[this.mins.length - 1] : val;
    this.mins.push(Math.min(val, prevMin));
  }

  pop(): void {
    this.main.pop();
    this.mins.pop(); // stay aligned — this restores the previous min
  }

  top(): number {
    return this.main[this.main.length - 1];
  }

  getMin(): number {
    return this.mins[this.mins.length - 1];
  }
}

// ---------- TESTS ----------

function runTests() {
  let passed = 0;
  let total = 0;

  // LeetCode walkthrough
  total++;
  const m = new MinStack();
  m.push(-2); m.push(0); m.push(-3);
  const a = m.getMin(); // -3
  m.pop();
  const b = m.top();    // 0
  const c = m.getMin(); // -2
  if (a === -3 && b === 0 && c === -2) {
    console.log(`✅ walkthrough → getMin=${a}, top=${b}, getMin=${c}`);
    passed++;
  } else {
    console.log(`❌ walkthrough → getMin=${a}, top=${b}, getMin=${c} (expected -3, 0, -2)`);
  }

  // min history must survive pops
  total++;
  const m2 = new MinStack();
  m2.push(5); m2.push(1); m2.push(4);
  const before = m2.getMin(); // 1
  m2.pop(); m2.pop();
  const after = m2.getMin(); // 5 — restored, not lost
  if (before === 1 && after === 5) {
    console.log(`✅ min restored after pops → ${before} then ${after}`);
    passed++;
  } else {
    console.log(`❌ min history broken → ${before} then ${after} (expected 1 then 5)`);
  }

  console.log(`\n${passed}/${total} tests passed`);
  console.log("All ops Time: O(1) | Extra Space: O(n)");
}

if (require.main === module) {
  runTests();
}

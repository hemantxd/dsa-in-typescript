/**
 * DAY 1 — Exercise 2: Number of Recent Calls (LeetCode 933) ★
 * ---------------------------------------------------------------
 * PROBLEM
 * Implement RecentCounter: ping(t) records a request at time t and returns
 * how many requests happened in the last 3000ms — the range [t - 3000, t].
 * Calls to ping() arrive with strictly increasing t.
 *
 * EXAMPLE
 *   const c = new RecentCounter();
 *   c.ping(1);    // → 1   ([1])
 *   c.ping(100);  // → 2   ([1, 100])
 *   c.ping(3001); // → 3   ([1, 100, 3001])
 *   c.ping(3002); // → 3   ([100, 3001, 3002] — 1 expired)
 *
 * HINTS (read one at a time, only if stuck)
 *   H1. Times arrive in order, so the stored times are automatically sorted.
 *       Expired times are always the OLDEST — which end of a queue is that?
 *   H2. ping(t): enqueue t, then dequeue from the front while front < t - 3000.
 *   H3. The answer is just the queue's size. Each time is enqueued/dequeued
 *       once → O(1) amortized per ping.
 *
 * YOUR TASK
 * Implement the RecentCounter class below. Run THIS file to check yourself:
 *   npx ts-node src/12-queue/day-1/recent-counter.ts
 * The solution (with tests) lives in solutions/recent-counter.solution.ts —
 * open it ONLY after you have tried for 10–15 minutes.
 */

export class RecentCounter {
  // TODO: a queue of timestamps; drop expired ones from the front on each ping.

  ping(t: number): number {
    throw new Error("Not implemented yet — your turn! (See Hints above.)");
  }
}

// ---------- SELF-CHECK (no answers leaked — just pass/fail) ----------

function selfCheck() {
  try {
    const c = new RecentCounter();
    const log = [c.ping(1), c.ping(100), c.ping(3001), c.ping(3002)];
    const expected = [1, 2, 3, 3];
    const ok = JSON.stringify(log) === JSON.stringify(expected);
    console.log(ok ? `✅ walkthrough → ${JSON.stringify(log)}` : `❌ got ${JSON.stringify(log)}, expected ${JSON.stringify(expected)}`);
    console.log(ok ? "\n1/1 passing." : "\n0/1 passing.");
  } catch {
    console.log("⏳ RecentCounter — not implemented yet.");
  }
  console.log("Solution: solutions/recent-counter.solution.ts");
}

if (require.main === module) {
  selfCheck();
}

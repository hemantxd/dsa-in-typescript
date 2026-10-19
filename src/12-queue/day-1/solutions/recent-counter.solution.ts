/**
 * DAY 1 — Solution: Number of Recent Calls (LeetCode 933) ★
 * --------------------------------------------------------------
 * THOUGHT PROCESS
 *   Brute force idea: store every timestamp; on each ping scan all of them
 *   and count those ≥ t - 3000 — O(n) per ping, O(n²) total.
 *   Observation: pings arrive in INCREASING order, so stored times are sorted
 *   for free. Expired entries are always the oldest = the FRONT of a queue.
 *   Timely entries are never in the middle — expiry is one-sided.
 *   Why a queue helps: both ends do exactly what's needed — enqueue the new
 *   time at the back, dequeue expired times from the front. Each timestamp is
 *   enqueued once and dequeued at most once → O(1) amortized per ping, and
 *   the queue size IS the answer (no recounting).
 *   Algorithm: ping(t) → enqueue t; while front < t - 3000: dequeue; return size.
 *   Complexity: Time O(1) amortized per ping; Space O(n) worst case.
 */

export class RecentCounter {
  private times: number[] = [];
  private head = 0; // front index — avoids O(n) shift()

  ping(t: number): number {
    this.times.push(t);
    const cutoff = t - 3000; // keep [t - 3000, t]
    while (this.head < this.times.length && this.times[this.head] < cutoff) {
      this.head++; // expired — drop from the front
    }
    return this.times.length - this.head;
  }
}

// ---------- TESTS ----------

function runTests() {
  let passed = 0;
  let total = 0;

  total++;
  const c = new RecentCounter();
  const log = [c.ping(1), c.ping(100), c.ping(3001), c.ping(3002)];
  const expected = [1, 2, 3, 3];
  if (JSON.stringify(log) === JSON.stringify(expected)) {
    console.log(`✅ walkthrough → ${JSON.stringify(log)}`);
    passed++;
  } else {
    console.log(`❌ walkthrough → ${JSON.stringify(log)} (expected ${JSON.stringify(expected)})`);
  }

  total++;
  const c2 = new RecentCounter();
  const log2 = [c2.ping(1), c2.ping(3000), c2.ping(3001), c2.ping(6002)];
  // [1] → [1,3000] → [1,3000,3001] → [6002] (all old times < 3002 expire)
  const expected2 = [1, 2, 3, 1];
  if (JSON.stringify(log2) === JSON.stringify(expected2)) {
    console.log(`✅ boundary expiry → ${JSON.stringify(log2)}`);
    passed++;
  } else {
    console.log(`❌ boundary expiry → ${JSON.stringify(log2)} (expected ${JSON.stringify(expected2)})`);
  }

  console.log(`\n${passed}/${total} tests passed`);
  console.log("Time: O(1) amortized per ping | Space: O(n)");
}

if (require.main === module) {
  runTests();
}

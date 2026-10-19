/**
 * DAY 1 — Solution: Time Needed to Buy Tickets (LeetCode 2073)
 * ----------------------------------------------------------------
 * THOUGHT PROCESS
 *   Brute force idea: this problem basically ASKS for simulation — rotate the
 *   line, one ticket per second. With a queue of indices that's O(total
 *   tickets) time, which is fine for the constraints (≤ 100×100 steps).
 *   Observation: the process stops the moment person k is done, so people
 *   BEHIND k never get the extra round they'd need in a full simulation.
 *   Person i (i ≤ k) contributes min(tickets[i], tickets[k]) seconds; person
 *   i (i > k) contributes min(tickets[i], tickets[k] - 1).
 *   Why a queue helps: the line IS a queue — pop front, serve, push back if
 *   still hungry. Indices (not values) let us watch person k specifically.
 *   Algorithm (simulation): queue of indices; each step pop front, decrement,
 *   re-enqueue if tickets remain; stop when k hits zero. Return seconds.
 *   Complexity: Time O(n + answer) steps, each O(1); Space O(n).
 */

export function timeRequiredToBuy(tickets: number[], k: number): number {
  const line: number[] = tickets.map((_, i) => i); // queue of person indices
  let seconds = 0;

  while (line.length > 0) {
    const person = line.shift()!; // front of the line buys now
    tickets[person]--;
    seconds++;
    if (tickets[person] === 0 && person === k) break; // k is done — stop!
    if (tickets[person] > 0) line.push(person); // still hungry → back of line
  }
  return seconds;
}

// ---------- TESTS ----------

function runTests() {
  const cases: Array<[number[], number, number]> = [
    [[2, 3, 2], 2, 6],
    [[5, 1, 1, 1], 0, 8],
    [[1], 0, 1],
    [[84, 49, 5, 24, 70, 77, 87, 8], 3, 154], // LeetCode hard case
  ];
  let passed = 0;
  for (const [tickets, k, expected] of cases) {
    const got = timeRequiredToBuy([...tickets], k);
    if (got === expected) {
      console.log(`✅ timeRequiredToBuy([${tickets}], ${k}) = ${got}`);
      passed++;
    } else {
      console.log(`❌ timeRequiredToBuy([${tickets}], ${k}) = ${got} (expected ${expected})`);
    }
  }
  console.log(`\n${passed}/${cases.length} tests passed`);
  console.log("Time: O(answer) steps | Space: O(n)");
}

if (require.main === module) {
  runTests();
}

/**
 * DAY 3 — Solution: Dota2 Senate (LeetCode 649)
 * --------------------------------------------------
 * THOUGHT PROCESS
 *   Brute force idea: simulate rounds with splicing banned senators out of an
 *   array — O(n²) from shifting, plus manual round bookkeeping.
 *   Observation: each surviving senator acts again exactly one full round
 *   later. "Act now, repeat later" is a queue cycle: dequeue the actor, ban
 *   someone, re-enqueue the actor with a future turn number (index + n).
 *   Two parties → two index-queues. The smaller front index acts FIRST in the
 *   current round (order within a round = original order), bans the other
 *   front (drop it), and survives to the next round.
 *   Why queues help: no deletions from the middle, no round counter — turn
 *   order falls out of the indices themselves. Each step removes exactly one
 *   senator → O(n) steps, each O(1).
 *   Algorithm: radiant/dire index queues; while both non-empty: r=shift,
 *   d=shift; smaller wins, re-enqueue at +n. Winner = surviving party.
 *   Complexity: Time O(n) steps; Space O(n).
 */

export function predictPartyVictory(senate: string): string {
  const n = senate.length;
  const radiant: number[] = []; // turn indices of living R senators
  const dire: number[] = []; // turn indices of living D senators
  for (let i = 0; i < n; i++) {
    if (senate[i] === "R") radiant.push(i);
    else dire.push(i);
  }

  let rHead = 0;
  let dHead = 0;
  while (rHead < radiant.length && dHead < dire.length) {
    const r = radiant[rHead++];
    const d = dire[dHead++];
    if (r < d) {
      radiant.push(r + n); // R acts first: D banned, R returns next round
    } else {
      dire.push(d + n); // D acts first: R banned, D returns next round
    }
  }
  return rHead < radiant.length ? "Radiant" : "Dire";
}

// ---------- TESTS ----------

function runTests() {
  const cases: Array<[string, string]> = [
    ["RD", "Radiant"],
    ["RDD", "Dire"],
    ["RRDDD", "Radiant"],
    ["DRRDRDRDRDDRDRDR", "Radiant"],
    ["D", "Dire"],
    ["R", "Radiant"],
  ];
  let passed = 0;
  for (const [input, expected] of cases) {
    const got = predictPartyVictory(input);
    if (got === expected) {
      console.log(`✅ predictPartyVictory("${input}") = "${got}"`);
      passed++;
    } else {
      console.log(`❌ predictPartyVictory("${input}") = "${got}" (expected "${expected}")`);
    }
  }
  console.log(`\n${passed}/${cases.length} tests passed`);
  console.log("Time: O(n) rounds | Space: O(n)");
}

if (require.main === module) {
  runTests();
}

/**
 * DAY 3 — Solution: First Non-Repeating Char in a Stream (GFG classic)
 * --------------------------------------------------------------------------
 * THOUGHT PROCESS
 *   Brute force idea: after each character, rescan everything so far for the
 *   first unique one — O(n²).
 *   Observation: you need TWO things — HOW MANY times each char appeared
 *   (a frequency map) and IN WHAT ORDER candidates arrived (a queue). The
 *   queue front is the answer UNLESS it started repeating; and a repeating
 *   char can never become unique again (counts only grow), so dropping it is
 *   permanent and safe.
 *   Why a queue helps: arrival order = FIFO. Disqualified fronts are popped
 *   once each; every char is enqueued once, dequeued at most once → O(1)
 *   amortized per character.
 *   Algorithm: per char — count++, enqueue; while front count > 1: dequeue;
 *   answer = front ?? '#'.
 *   Complexity: Time O(n) total; Space O(1) (alphabet is fixed-size).
 */

export function firstNonRepeating(stream: string): string {
  const count = new Map<string, number>();
  const queue: string[] = []; // candidates in arrival order
  let head = 0; // front index — avoids O(n) shift()
  let answer = "";

  for (const ch of stream) {
    count.set(ch, (count.get(ch) ?? 0) + 1);
    queue.push(ch);
    // drop disqualified fronts — repeating chars never recover
    while (head < queue.length && count.get(queue[head])! > 1) {
      head++;
    }
    answer += head < queue.length ? queue[head] : "#";
  }
  return answer;
}

// ---------- TESTS ----------

function runTests() {
  const cases: Array<[string, string]> = [
    ["aabc", "a#bb"],
    ["zz", "z#"],
    ["abc", "aaa"], // 'a' stays first-non-repeating the whole time
    ["aabbcc", "a#b#c#"], // every char repeats the moment it doubles
    ["abcdabcd", "aaaabcd#"], // a survives until its repeat; then b, c, d, then none
  ];
  let passed = 0;
  for (const [input, expected] of cases) {
    const got = firstNonRepeating(input);
    if (got === expected) {
      console.log(`✅ firstNonRepeating("${input}") = "${got}"`);
      passed++;
    } else {
      console.log(`❌ firstNonRepeating("${input}") = "${got}" (expected "${expected}")`);
    }
  }
  console.log(`\n${passed}/${cases.length} tests passed`);
  console.log("Time: O(n) | Space: O(1) alphabet");
}

if (require.main === module) {
  runTests();
}

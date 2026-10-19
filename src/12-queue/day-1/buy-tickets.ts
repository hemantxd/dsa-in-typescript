/**
 * DAY 1 — Exercise 3: Time Needed to Buy Tickets (LeetCode 2073)
 * ------------------------------------------------------------------
 * PROBLEM
 * People stand in a line; tickets[i] = how many tickets person i wants.
 * Each second, the FRONT person buys one ticket and — if they still need
 * more — goes to the BACK of the line. If done, they leave. Return the total
 * seconds until person k finishes buying ALL their tickets.
 *
 * EXAMPLES
 *   timeRequiredToBuy([2,3,2], k=2) → 6
 *     line evolves: [2,3,2] → [3,2,1] → [2,1,2] → [1,2,1] → [2,1] → [1,1] → [1] → []
 *     person 2 finishes on second 6.
 *   timeRequiredToBuy([5,1,1,1], k=0) → 8
 *
 * CONSTRAINTS
 *   1 <= tickets.length <= 100, 1 <= tickets[i] <= 100.
 *
 * HINTS (read one at a time, only if stuck)
 *   H1. Simulate the line literally with a queue of INDICES: pop front, use
 *       one ticket, push back if they need more. Count seconds.
 *   H2. You only need the count, not the final line — stop the moment
 *       person k's tickets hit zero.
 *   H3. (Math shortcut, try after simulating: each person i contributes
 *       min(tickets[i], tickets[k]) rounds — or min(tickets[i], tickets[k]-1)
 *       for i > k, since the line stops before they get an extra turn.)
 *
 * YOUR TASK
 * Implement timeRequiredToBuy() below. Run THIS file to check yourself:
 *   npx ts-node src/12-queue/day-1/buy-tickets.ts
 * The solution (with tests) lives in solutions/buy-tickets.solution.ts —
 * open it ONLY after you have tried for 10–15 minutes.
 */

function timeRequiredToBuy(tickets: number[], k: number): number {

    let ans =0;
    let queue:[number, number][] = tickets.map((temp, index)=>[index,temp]) 


    while(queue.length>0){
        const [index, remaining] = queue.shift()!;
      
        ans++;
        
        if(remaining>1){
            queue.push([index, remaining-1]);
        }else if(index==k){
            return ans;
        }
            
    }

    return ans;

};

// ---------- SELF-CHECK (no answers leaked — just pass/fail) ----------

function selfCheck() {
  const cases: Array<[number[], number, number]> = [
    [[2, 3, 2], 2, 6],
    [[5, 1, 1, 1], 0, 8],
    [[1], 0, 1],
  ];
  let passed = 0;
  for (const [tickets, k, expected] of cases) {
    try {
      const got = timeRequiredToBuy([...tickets], k);
      if (got === expected) {
        console.log(`✅ timeRequiredToBuy([${tickets}], ${k}) = ${got}`);
        passed++;
      } else {
        console.log(`❌ timeRequiredToBuy([${tickets}], ${k}) = ${got} (expected ${expected})`);
      }
    } catch {
      console.log(`⏳ timeRequiredToBuy([${tickets}], ${k}) — not implemented yet.`);
    }
  }
  console.log(`\n${passed}/${cases.length} passing. Solution: solutions/buy-tickets.solution.ts`);
}

if (require.main === module) {
  selfCheck();
}

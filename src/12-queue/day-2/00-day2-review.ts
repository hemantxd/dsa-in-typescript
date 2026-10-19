/**
 * DAY 2 — Start here: review of Day 1 + the pattern map.
 * ---------------------------------------------------------
 * Run: npx ts-node src/12-queue/day-2/00-day2-review.ts
 * (This file only prints a recap — no code to write.)
 *
 * DAY 1 RECAP (one line each)
 *   Queue using Stacks .... in-stack takes pushes; pour to out-stack when dry.
 *                           Each element moves once → O(1) amortized.
 *   Recent Counter ......... enqueue new time; dequeue expired from front.
 *                           Queue size IS the answer.
 *   Buy Tickets ............ simulate the line with a queue of indices;
 *                           stop the moment person k is done.
 *
 * THE PATTERN MAP (when you see X, think queue/deque/BFS)
 *   "implement FIFO with LIFO" .......... two-stack queue (Day 1 done)
 *   "drop expired / keep last K" ........ sliding window from the FRONT
 *   "max/min of every window of size k" . MONOTONIC deque (today's big topic)
 *   "fixed capacity, wrap around" ....... circular buffer (today)
 *   "reveal / rotate simulation" ........ deque: push/pop BOTH ends (today)
 *   "spread / closest / fewest steps" ... BFS = queue over a grid/graph (Day 3)
 *
 * TODAY'S PLAN
 *   1. sliding-window-maximum.ts . your first monotonic deque (WHAT is max?)
 *   2. circular-queue.ts ........ design: head + count in a fixed array
 *   3. reveal-cards.ts .......... reverse-simulate with a deque
 *   4. lunch-queue.ts ........... queue + stack interacting
 */

function review() {
  console.log("=== DAY 1 RECAP ===");
  console.log("Queue using Stacks: in-stack for pushes, pour to out-stack when dry.");
  console.log("Recent Counter:     enqueue new, dequeue expired, size is the answer.");
  console.log("Buy Tickets:        queue of indices; stop when person k is done.");
  console.log("\n=== TODAY: DEQUE PATTERNS ===");
  console.log("A deque (double-ended queue) pushes/pops at BOTH ends in O(1).");
  console.log("Its killer app: the MONOTONIC deque for sliding-window max/min.");
  console.log("Rule of thumb: 'max/min of every window of size k' → monotonic deque.");
  console.log("\nStart with: day-2/sliding-window-maximum.ts");
}

if (require.main === module) {
  review();
}

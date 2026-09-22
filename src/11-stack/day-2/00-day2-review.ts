/**
 * DAY 2 — Start here: review of Day 1 + the pattern map.
 * ---------------------------------------------------------
 * Run: npx ts-node src/11-stack/day-2/00-day2-review.ts
 * (This file only prints a recap — no code to write.)
 *
 * DAY 1 RECAP (one line each)
 *   Reverse String ............ LIFO reverses order: push in, pop out.
 *   Valid Parentheses ......... push OPENERS; each closer must match the
 *                               most recent unmatched opener (stack top).
 *   Remove Adjacent Duplicates  one pass: char == top → pop (cancel),
 *                               else push. Chain reactions resolve free.
 *   Min Stack ................. a second stack remembers the min at every
 *                               depth, so pop restores history. All O(1).
 *
 * THE PATTERN MAP (when you see X, think stack)
 *   "match / nest / balance (){}[]" ... Matching pattern (Day 1 done, RPN today)
 *   "cancel neighbours / collisions" . Simulation pattern (Asteroids, Day 3)
 *   "next/nearest greater or smaller"  MONOTONIC stack (today's big topic)
 *   "how many days until warmer" ....  Monotonic stack answering distance
 *   "span of consecutive smaller" ...  Monotonic stack answering a count
 *   "need min/max in O(1)" ..........  Auxiliary stack (Min Stack done)
 *
 * TODAY'S PLAN
 *   1. next-greater-element.ts .... your first monotonic stack (WHAT is next?)
 *   2. daily-temperatures.ts ...... same skeleton, answers HOW FAR?
 *   3. reverse-polish-notation.ts . expression evaluation (operand stack)
 *   4. backspace-compare.ts ....... undo pattern (typewriter simulation)
 *   5. stock-span.ts .............. monotonic stack answering a COUNT
 */

function review() {
  console.log("=== DAY 1 RECAP ===");
  console.log("Reverse String:           push all, pop all → reversed.");
  console.log("Valid Parentheses:        push openers; closer must match the top.");
  console.log("Remove Adjacent Duplicates: char == top ? pop : push.");
  console.log("Min Stack:                second stack stores min-at-each-depth.");
  console.log("\n=== TODAY: TWO PATTERNS ===");
  console.log("A. Matching / nested structures  (RPN expression evaluation)");
  console.log("B. MONOTONIC stack (next greater / warmer / span)");
  console.log("   Rule of thumb: 'for EACH element, find the NEAREST bigger/");
  console.log("   smaller one' → think monotonic stack, not nested loops.");
  console.log("\nStart with: day-2/next-greater-element.ts");
}

if (require.main === module) {
  review();
}

/**
 * DAY 3 — Solution: Browser History using two stacks
 * -----------------------------------------------------
 * THOUGHT PROCESS
 *   Brute force idea: keep an array + a current index, slicing forward history
 *   on visit — O(n) slice each time, plus manual index clamping.
 *   Observation: back() and forward() move ONE page at a time between "past"
 *   and "future". Past-behind-you and future-ahead-of-you are two LIFO piles:
 *   backing out pushes onto the future pile; going forward pops it back.
 *   Why two stacks help: visit/back/forward are all O(1) amortized (each page
 *   moves between stacks at most once per navigation), and "visit wipes
 *   forward history" is just clearing a stack.
 *   Algorithm: current page on top of backStack.
 *     visit(url) → push url, clear forwardStack.
 *     back(k) → move ≤k pages backStack→forwardStack, keep ≥1 page behind.
 *     forward(k) → move ≤k pages forwardStack→backStack.
 *   Complexity: each operation Time O(k) worst case, O(1) amortized per page
 *   move; Space O(n) total across both stacks.
 */

export class BrowserHistory {
  private backStack: string[] = []; // top = current page; below = pages behind
  private forwardStack: string[] = []; // top = next page forward()

  constructor(homepage: string) {
    this.backStack.push(homepage);
  }

  visit(url: string): void {
    this.backStack.push(url);
    this.forwardStack = []; // new visit wipes forward history
  }

  back(steps: number): string {
    // keep at least one page (can't go back past the homepage)
    while (steps > 0 && this.backStack.length > 1) {
      this.forwardStack.push(this.backStack.pop()!);
      steps--;
    }
    return this.backStack[this.backStack.length - 1];
  }

  forward(steps: number): string {
    while (steps > 0 && this.forwardStack.length > 0) {
      this.backStack.push(this.forwardStack.pop()!);
      steps--;
    }
    return this.backStack[this.backStack.length - 1];
  }
}

// ---------- TESTS ----------

function runTests() {
  let passed = 0;
  let total = 0;

  // course walkthrough
  total++;
  const b = new BrowserHistory("home");
  b.visit("a"); b.visit("b"); b.visit("c");
  const log = [b.back(1), b.back(1), b.forward(1)];
  b.visit("d"); // wipes "c"
  log.push(b.forward(1)); // stays "d"
  log.push(b.back(5)); // clamped → "home"
  const expected = ["b", "a", "b", "d", "home"];
  if (JSON.stringify(log) === JSON.stringify(expected)) {
    console.log(`✅ walkthrough → ${JSON.stringify(log)}`);
    passed++;
  } else {
    console.log(`❌ walkthrough → ${JSON.stringify(log)} (expected ${JSON.stringify(expected)})`);
  }

  // visit wipes forward history — "c" must be unreachable
  total++;
  const b2 = new BrowserHistory("home");
  b2.visit("a"); b2.visit("b");
  b2.back(1); // at "a", forward = ["b"]
  b2.visit("c"); // forward wiped
  const f = b2.forward(3); // stays "c"
  if (f === "c") {
    console.log(`✅ forward after visit stays put → "${f}"`);
    passed++;
  } else {
    console.log(`❌ forward after visit → "${f}" (expected "c")`);
  }

  console.log(`\n${passed}/${total} tests passed`);
  console.log("Each page moves stacks ≤ once per trip: O(1) amortized | Space: O(n)");
}

if (require.main === module) {
  runTests();
}

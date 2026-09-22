/**
 * DAY 3 — Challenge 3: Browser History using two stacks (LeetCode 1472 style)
 * ------------------------------------------------------------------------------
 * PROBLEM
 * Model a browser with visit(url), back(steps), and forward(steps).
 * back() goes to earlier pages; forward() re-visits pages you went back from;
 * visiting a NEW page wipes the forward history.
 *
 * EXAMPLE
 *   const b = new BrowserHistory("home");
 *   b.visit("a"); b.visit("b"); b.visit("c");
 *   b.back(1);      // → "b"
 *   b.back(1);      // → "a"
 *   b.forward(1);   // → "b"
 *   b.visit("d");   // forward history (c) is wiped
 *   b.forward(1);   // → "d" (nothing to go forward to)
 *   b.back(5);      // → "home" (clamped — can't go past the start)
 *
 * HINTS (read one at a time, only if stuck)
 *   H1. Two stacks: backStack (pages behind you, top = most recent) and
 *       forwardStack (pages you backed out of, top = next forward page).
 *       The current page can live on top of backStack.
 *   H2. visit(url): push url onto backStack, CLEAR forwardStack.
 *   H3. back(k): move up to k pages from backStack to forwardStack — but stop
 *       when only ONE page remains (you can't go back past the homepage).
 *       forward(k): move up to k pages back the other way (no clamping needed).
 *
 * YOUR TASK
 * Implement the BrowserHistory class below. Run THIS file to check yourself:
 *   npx ts-node src/11-stack/day-3/browser-history.ts
 * The solution (with tests) lives in solutions/browser-history.solution.ts —
 * open it ONLY after you have tried for 15–20 minutes.
 */

export class BrowserHistory {
  // TODO: backStack + forwardStack (+ current page handling — your choice).
  constructor(homepage: string) {
    throw new Error("Not implemented yet — your turn! (See Hints above.)");
  }

  visit(url: string): void {
    throw new Error("Not implemented yet — your turn! (See Hints above.)");
  }

  back(steps: number): string {
    throw new Error("Not implemented yet — your turn! (See Hints above.)");
  }

  forward(steps: number): string {
    throw new Error("Not implemented yet — your turn! (See Hints above.)");
  }
}

// ---------- SELF-CHECK (no answers leaked — just pass/fail) ----------

function selfCheck() {
  try {
    const b = new BrowserHistory("home");
    const log: unknown[] = [];
    b.visit("a"); b.visit("b"); b.visit("c");
    log.push(b.back(1));    // b
    log.push(b.back(1));    // a
    log.push(b.forward(1)); // b
    b.visit("d");
    log.push(b.forward(1)); // d (wiped)
    log.push(b.back(5));    // home (clamped)
    const expected = ["b", "a", "b", "d", "home"];
    const ok = JSON.stringify(log) === JSON.stringify(expected);
    console.log(ok ? `✅ walkthrough → ${JSON.stringify(log)}` : `❌ got ${JSON.stringify(log)}, expected ${JSON.stringify(expected)}`);
    console.log(ok ? "\n1/1 passing." : "\n0/1 passing.");
  } catch {
    console.log("⏳ BrowserHistory — not implemented yet.");
  }
  console.log("Solution: solutions/browser-history.solution.ts");
}

if (require.main === module) {
  selfCheck();
}

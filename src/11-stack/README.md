# 11 — Stack: A 2–3 Day Mini-Course

> A small, self-contained TypeScript course. You will go from "what is a stack?"
> to solving **monotonic stack** problems — by attempting each problem yourself
> *before* reading the solution.

## 1. Overview

This folder teaches **stacks** through short explanations, TypeScript code,
small examples, exercises, and classic interview problems. The progression is:

```
basics (what is a stack + build your own)
  → Day 1: fundamentals (reverse, matching, min-stack)
  → Day 2: patterns (matching + monotonic stack)
  → Day 3 (optional): harder challenges (histogram, asteroids, design)
```

**Rule of the course:** every problem lives in its own file with a *starter stub
only*. Solutions live in a separate `solutions/` folder. Attempt first, then compare.

## 2. Prerequisites

You should be comfortable with basic TypeScript:

- variables (`let` / `const`)
- arrays (`push`, `pop`, indexing, `length`)
- functions
- classes (constructor, methods, `private`)
- basic generics (`Array<T>`, `Stack<T>` — just "a placeholder for a type")
- loops (`for`, `while`) and conditionals (`if` / `else`)

## 3. The 2-Day Quick Path (core)

**Day 1 — Stack fundamentals** (~1–2 hours)

1. Read `basics/Stack.ts` — what a stack is, then build one yourself
2. `day-1/reverse-string.ts` — warm-up: LIFO in action
3. `day-1/valid-parentheses.ts` — ★ the matching pattern (most important)
4. `day-1/min-stack.ts` — ★ design: getting `getMin()` in O(1)

**Day 2 — Stack patterns** (~2 hours)

1. Read `day-2/00-day2-review.ts` — Day 1 recap + pattern map
2. `day-2/next-greater-element.ts` — ★ your first monotonic stack

## 5. Concepts

### 5.1 LIFO — Last In, First Out

A stack is a collection where you **add and remove from the same end** (the
"top"). Think of a stack of plates: you put a plate on top (`push`), you take
the top plate off (`pop`). You never reach into the middle.

```
push(1) → [1]            top = 1
push(2) → [1, 2]         top = 2
pop()   → returns 2      [1]
peek()  → returns 1      (look, don't remove)
```

### 5.2 The five operations

| Operation | What it does | Complexity (array-backed) |
|-----------|--------------|---------------------------|
| `push(x)` | put `x` on top | O(1) amortized |
| `pop()` | remove + return the top | O(1) |
| `peek()` | return the top *without* removing | O(1) |
| `isEmpty()` | `true` if nothing is stored | O(1) |
| `size()` | how many items are stored | O(1) |

Why is `push`/`pop` O(1)? An array-backed stack only ever touches the **end**
of the array. Appending/removing the last element never shifts other elements,
so no work grows with `n`. (`push` is "amortized" because the array
occasionally resizes — that cost averages out.) `search` is O(n): a stack is
not designed for looking things up.

### 5.3 The implementation (`basics/Stack.ts`)

```ts
class Stack<T> {
  private items: T[] = [];

  push(value: T): void {
    this.items.push(value);          // add to the END = the top
  }

  pop(): T | undefined {
    return this.items.pop();         // remove from the END
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1]; // look, don't touch
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}
```

Key ideas: the **end of the array is the top of the stack** (never use index 0
— removing from the front is O(n) because everything shifts). `pop()`/`peek()`
on an empty stack return `undefined`, so **always guard** with `isEmpty()` (or
handle `undefined`) in real code.

Real-world stacks: function call stack, undo/redo, browser back button,
expression evaluation, syntax matching (`(){}[]`), DFS traversal.

### 5.4 Common stack patterns (pattern → recognition cue)

| # | Pattern | "Use a stack when…" | Example here |
|---|---------|---------------------|--------------|
| 1 | **Matching / nested structures** | …you must match openers with closers in order | Valid Parentheses |
| 2 | **Undo / reverse processing** | …the last thing added must be handled first | Reverse String, Backspace Compare |
| 3 | **Monotonic stack (next greater/smaller)** | …for each element you need the nearest bigger/smaller element | Next Greater, Daily Temperatures, Stock Span, Largest Rectangle |
| 4 | **Expression evaluation** | …operators apply to the most recent operands | Reverse Polish Notation |
| 5 | **Collision / cancellation simulation** | …new arrivals can destroy/merge with previous ones | Asteroid Collision, Remove Adjacent Duplicates |
| 6 | **Auxiliary stack for O(1) queries** | …you need min/max alongside normal ops | Min Stack |
| 7 | **Two stacks cooperating** | …you move "forward/backward" through history | Browser History |
| 8 | **One structure from another** | …design questions: "implement X using Y" | Stack Using Queues |

### 5.5 Monotonic stack — the big idea of Day 2

A **monotonic stack** is a stack whose elements are kept in sorted order —
*increasing* (small → big, bottom → top) or *decreasing* (big → small).

The algorithm for "next greater element" (increasing stack of indices):

```
for each index i:
  while stack not empty AND arr[i] > arr[stack.top]:
    j = stack.pop()        // arr[i] is the "next greater" of j — j is DONE
    answer[j] = arr[i]
  stack.push(i)            // i waits for its own "next greater"
```

**Why is popping safe?** When `arr[i] > arr[j]` and every element between `j`
and `i` was already popped (they were ≤ `arr[j]`, otherwise `j` would have been
popped earlier), `arr[i]` is genuinely the *first* element after `j` that is
greater. Nothing to the left can still need `j`, because `j` is buried under
newer unresolved elements. So `j` will never be useful again → discard it.

**Why O(n)?** Each index is pushed once and popped at most once. The `while`
loop looks scary, but across the whole run it performs at most `n` pops. Total
work: `n` pushes + `n` pops = O(n). The brute force re-scans to the right for
every element (O(n²)); the stack remembers *only the unresolved candidates*.

**Recognition cues:** "next greater / smaller …", "nearest … to the
left/right", "how many days until …", "for each element, find the first …
after it".

3. `day-2/daily-temperatures.ts` — ★ same idea, "how far?" instead of "what?"
4. `day-2/reverse-polish-notation.ts` — stacks evaluate expressions naturally
5. `day-2/backspace-compare.ts` + `day-2/stock-span.ts` — consolidation

Problems marked ★ are the highest-yield interview problems. If you are short on
time, do exactly: Stack → Valid Parentheses → Min Stack → Next Greater Element
→ Daily Temperatures.

## 4. The 3-Day Full Path (add Day 3)

**Day 3 — Optional challenges** (~2 hours, harder)

1. `day-3/asteroid-collision.ts` — simulation with a stack (warm-up)
2. `day-3/stack-using-queues.ts` — implement one data structure with another
3. `day-3/browser-history.ts` — two stacks (`backStack` / `forwardStack`)
4. `day-3/largest-rectangle.ts` — ★★ the hardest classic monotonic-stack problem

## 6. Problem Checklist

- [ ] Day 1 — Reverse String
- [ ] Day 1 — Valid Parentheses
- [ ] Day 1 — Remove Adjacent Duplicates
- [ ] Day 1 — Min Stack
- [ ] Day 2 — Next Greater Element
- [ ] Day 2 — Daily Temperatures
- [ ] Day 2 — Stock Span
- [ ] Day 2 — Evaluate Reverse Polish Notation
- [ ] Day 2 — Backspace String Compare
- [ ] Day 3 — Largest Rectangle in Histogram
- [ ] Day 3 — Asteroid Collision
- [ ] Day 3 — Implement a Stack Using Queues
- [ ] Day 3 — Browser History using two stacks

## 7. How to Practice (recommended workflow)

```
Read problem (the non-solution file, e.g. day-1/valid-parentheses.ts)
  ↓
Think for 10–15 minutes (no code — pen/paper or comments)
  ↓
Write your approach in plain words
  ↓
Implement the starter stub
  ↓
Test it yourself
  ↓  (only if stuck)
Check the Hints section
  ↓  (only then)
Read the solution (day-1/solutions/valid-parentheses.solution.ts)
  ↓
Write down the PATTERN you learned (one sentence, e.g.
"match closers with the most recent unmatched opener → stack")
```

Run any file with:

```bash
npx ts-node src/11-stack/basics/Stack.ts
npx ts-node src/11-stack/day-1/solutions/valid-parentheses.solution.ts
```

## 8. Common Mistakes

1. **Using the wrong end of the array** — `shift()`/`unshift()` work on the
   *front* and cost O(n). The top of an array-backed stack is always the END
   (`push`/`pop`).
2. **Forgetting the empty-stack check** — `pop()`/`peek()` on empty gives
   `undefined`. In Valid Parentheses, `")"` alone must return `false`, not crash.
3. **Confusing `peek` with `pop`** — `peek` looks, `pop` removes. In matching
   problems you check the top first, and only `pop` when it actually matches.
4. **Storing values when you need indices** — monotonic problems usually need
   *positions* (to compute widths/distances), so push indices, not values.
5. **Not understanding why monotonic pops are safe** — re-read section 5.5. If
   you can't explain *why* a popped element is useless forever, you memorized
   the template instead of the reasoning.
6. **Memorizing solutions instead of patterns** — after each problem, write the
   one-sentence pattern (section 7). The pattern transfers; the code doesn't.
7. **Forgetting the cleanup pass** — in monotonic problems, elements left in the
   stack after the loop ends still need answers (e.g. `-1`, `0`). Handle them.

## 9. Complexity Cheat Sheet

| Operation | Time | Space | Notes |
|-----------|------|-------|-------|
| `push` | O(1) amortized | O(1) | occasional array resize |
| `pop` | O(1) | O(1) | — |
| `peek` | O(1) | O(1) | no mutation |
| `isEmpty` / `size` | O(1) | O(1) | just checks `length` |
| Search in a stack | O(n) | O(1) | wrong tool for lookup — that's fine |
| Monotonic traversal (whole array) | O(n) | O(n) | each element pushed + popped ≤ once |
| Valid Parentheses / RPN / Asteroids | O(n) | O(n) | one pass, stack ≤ input size |

## 10. Final Self-Test

Answer these without looking back. Then verify against sections 5–9.

1. What does LIFO mean, and which stack end is the "top" in an array implementation?
2. When should you use a stack? Name three recognition cues.
3. Why are `push`/`pop` O(1) with an array-backed stack?
4. How does Valid Parentheses use a stack? Why must you check for empty before popping?
5. What is a monotonic stack? What's the difference between increasing and decreasing?
6. How can a monotonic stack turn an O(n²) approach into O(n)? (Argue with push/pop counts.)
7. Why is it safe to pop an element in Next Greater Element? (What makes it "useless forever"?)
8. How does Min Stack achieve O(1) `getMin()`? What is stored in the second stack?
9. How do `backStack` and `forwardStack` cooperate in Browser History? What happens to `forwardStack` on `visit()`?
10. Can you implement `Stack<T>` from scratch without looking at the code?

---

### Folder map (what lives where)

```
src/11-stack/
├── README.md                  ← you are here
├── basics/
│   └── Stack.ts               ← Stack<T> implementation + guided tour (RUN THIS FIRST)
├── day-1/
│   ├── reverse-string.ts      ← problem + hints + starter (YOU write the code)
│   ├── valid-parentheses.ts
│   ├── remove-duplicates.ts
│   ├── min-stack.ts
│   └── solutions/             ← solutions + tests (open AFTER attempting)
│       ├── reverse-string.solution.ts
│       ├── valid-parentheses.solution.ts
│       ├── remove-duplicates.solution.ts
│       └── min-stack.solution.ts
├── day-2/
│   ├── 00-day2-review.ts      ← Day 1 recap + pattern map (read first on Day 2)
│   ├── next-greater-element.ts
│   ├── daily-temperatures.ts
│   ├── stock-span.ts
│   ├── reverse-polish-notation.ts
│   ├── backspace-compare.ts
│   └── solutions/
│       ├── next-greater-element.solution.ts
│       ├── daily-temperatures.solution.ts
│       ├── stock-span.solution.ts
│       ├── reverse-polish-notation.solution.ts
│       └── backspace-compare.solution.ts
└── day-3/
    ├── largest-rectangle.ts
    ├── asteroid-collision.ts
    ├── stack-using-queues.ts
    ├── browser-history.ts
    └── solutions/
        ├── largest-rectangle.solution.ts
        ├── asteroid-collision.solution.ts
        ├── stack-using-queues.solution.ts
        └── browser-history.solution.ts
```



# Day 1, step 1 — read + run the stack itself:
npx ts-node src/11-stack/basics/Stack.ts

# Then attempt your first problem (try 10–15 min before peeking):
npx ts-node src/11-stack/day-1/reverse-string.ts

# Only afterwards, compare with the solution + tests:
npx ts-node src/11-stack/day-1/solutions/reverse-string.solution.ts

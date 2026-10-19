# 12 — Queue: A 2–3 Day Mini-Course

> A small, self-contained TypeScript course. You will go from "what is a queue?"
> to solving **sliding-window maximum** and **multi-source BFS** — by attempting
> each problem yourself *before* reading the solution.

## 1. Overview

This folder teaches **queues** through short explanations, TypeScript code,
small examples, exercises, and classic interview problems. The progression is:

```
basics (what is a queue + build your own)
  → Day 1: fundamentals (two stacks, recent counter, simulation)
  → Day 2: deque patterns (sliding window max, circular queue)
  → Day 3 (optional): BFS challenges (rotten oranges, shortest path)
```

**Rule of the course:** every problem lives in its own file with a *starter stub
only*. Solutions live in a separate `solutions/` folder. Attempt first, then compare.

## 2. Prerequisites

You should be comfortable with basic TypeScript:

- variables (`let` / `const`)
- arrays (`push`, `pop`, indexing, `length`)
- functions
- classes (constructor, methods, `private`)
- basic generics (`Array<T>`, `Queue<T>` — just "a placeholder for a type")
- loops (`for`, `while`) and conditionals (`if` / `else`)

## 3. The 2-Day Quick Path (core)

**Day 1 — Queue fundamentals** (~1–2 hours)

1. Read `basics/Queue.ts` — what a queue is, then build one yourself
2. `day-1/queue-using-stacks.ts` — ★ implement FIFO with two LIFO stacks
3. `day-1/recent-counter.ts` — ★ the "drop expired entries from the front" pattern
4. `day-1/buy-tickets.ts` — simulation: rotate the line until person k is done

**Day 2 — Deque patterns** (~2 hours)

1. Read `day-2/00-day2-review.ts` — Day 1 recap + pattern map
2. `day-2/sliding-window-maximum.ts` — ★★ monotonic deque (hardest + most asked)
3. `day-2/circular-queue.ts` — ★ design: fixed-size buffer with head/count
4. `day-2/reveal-cards.ts` — reverse-simulation with a deque
5. `day-2/lunch-queue.ts` — queue + stack interacting, early-stop insight

## 5. Concepts

### 5.1 FIFO — First In, First Out

A queue is a collection where you **add at one end and remove from the other**.
Newcomers join the BACK (`enqueue`), service happens at the FRONT (`dequeue`).
Think of a checkout line — no cutting, no reaching into the middle.

```
enqueue(A) → [A]               front = A
enqueue(B) → [A, B]            front = A
dequeue()  → returns A   [B]   front = B
peek()     → returns B   (look, don't remove)
```

### 5.2 The five operations

| Operation | What it does | Complexity (head-index impl) |
|-----------|--------------|------------------------------|
| `enqueue(x)` | add `x` at the back | O(1) amortized |
| `dequeue()` | remove + return the front | O(1) |
| `peek()` | return the front *without* removing | O(1) |
| `isEmpty()` | `true` if nothing is stored | O(1) |
| `size()` | how many items are stored | O(1) |

Why not just use `array.shift()` for dequeue? `shift()` removes index 0, so
every remaining element moves one slot left — O(n) per dequeue, O(n²) for n
operations. The `Queue<T>` in `basics/Queue.ts` instead keeps a `head` index:
dequeue just advances `head` — O(1), no shifting. (The dead prefix is compacted
occasionally; that cost averages out.)

Real-world queues: printer spoolers, request rate-limiting, call-center lines,
task schedulers, message brokers, and — the big one for interviews — **BFS**.

### 5.3 The implementation (`basics/Queue.ts`)

```ts
class Queue<T> {
  private items: T[] = [];
  private head = 0; // index of the front element

  enqueue(value: T): void {
    this.items.push(value);              // back of the line
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this.items[this.head++];      // front advances — no shifting!
  }

  peek(): T | undefined {
    return this.isEmpty() ? undefined : this.items[this.head];
  }

  isEmpty(): boolean {
    return this.head >= this.items.length;
  }

  size(): number {
    return this.items.length - this.head;
  }
}
```

Key ideas: the **front is `items[head]`, the back is the array end**.
`dequeue()`/`peek()` on an empty queue return `undefined`, so **always guard**
with `isEmpty()` (or handle `undefined`) in real code.

### 5.4 Common queue patterns (pattern → recognition cue)

| # | Pattern | "Use a queue when…" | Example here |
|---|---------|---------------------|--------------|
| 1 | **Simulate a line** | …entities take turns / rotate to the back | Buy Tickets, Lunch Queue |
| 2 | **Sliding window expiry** | …only the last K items / last T seconds matter | Recent Counter |
| 3 | **Monotonic deque (window max/min)** | …you need the max/min of EVERY window of size k | Sliding Window Maximum |
| 4 | **Deque (both ends)** | …the process touches front AND back | Reveal Cards |
| 5 | **Fixed buffer, wrap around** | …capacity is fixed and slots must be reused | Circular Queue |
| 6 | **Two structures cooperating** | …FIFO order from LIFO parts (or vice versa) | Queue Using Stacks |
| 7 | **Frequency + order** | …you need counts AND arrival order together | First Non-Repeating Stream |
| 8 | **Round simulation** | …survivors act again exactly one round later | Dota2 Senate |
| 9 | **BFS (levels = distance/time)** | …spread / closest / fewest steps in unweighted space | Rotten Oranges, Shortest Path |

### 5.5 Monotonic deque — the big idea of Day 2

A **monotonic deque** keeps candidates in sorted order (here: decreasing values,
front = current maximum) while sliding a window across the array:

```
for each index i:
  while deque not empty AND nums[deque.back] <= nums[i]:
    deque.popBack()      // buried by nums[i] — useless forever
  deque.pushBack(i)
  if deque.front <= i - k:
    deque.popFront()     // slid out of the window — expired
  if i >= k - 1:
    answer.push(nums[deque.front])   // front is this window's max
```

**Why is popping from the BACK safe?** A popped value `v` has `nums[i] ≥ v`
with `i` NEWER. `i` stays in every future window at least as long as `v` does,
and beats `v` in every comparison — so `v` can never be anyone's maximum again.
Useless forever → discard. (Compare: the stack course's "next greater" pop —
same "newer and ≥" logic, but here the survivor answers max-queries instead of
nearest-queries.)

**Why O(n)?** Each index enters once and leaves at most once (from either end).
The `while` loop looks scary, but across the whole run it performs at most `n`
pops. Total: `n` pushes + `n` pops = O(n). Brute force re-scans each window
(O(n·k)); the deque carries only *unbeaten record highs* forward.

**Recognition cues:** "maximum/minimum of every subarray of size k",
"sliding window max/min".

### 5.6 BFS with a queue — the big idea of Day 3

**Breadth-first search** visits cells in DISTANCE order: all distance-0 cells,
then distance-1, then distance-2… The queue enforces that order (FIFO = oldest
= closest first). Two consequences:

1. **First visit = shortest.** The first time BFS dequeues the target, it came
   via the minimum number of steps. So mark visited on ENQUEUE (any later visit
   is ≥ as long — useless → skip) and return immediately at the target.
2. **Levels = time/distance.** Snapshot the queue length before each level;
   those nodes are exactly "one step further". Rotten Oranges counts minutes
   this way; Shortest Path carries `dist` per node — same idea.

**Multi-source BFS:** seed the queue with ALL starting points (every rotten
orange). Waves expand simultaneously and the first wave to reach a cell is the
closest one — no need to run BFS per source.

**Recognition cues:** "fewest steps / minimum time / closest …", "spread to
neighbours each minute", unweighted grid or graph.


Problems marked ★ are the highest-yield interview problems. If you are short on
time, do exactly: Queue → Queue Using Stacks → Recent Counter → Sliding Window Maximum.

## 4. The 3-Day Full Path (add Day 3)

**Day 3 — Optional challenges** (~2 hours, harder)

1. `day-3/first-non-repeating-stream.ts` — queue + frequency map (warm-up)
2. `day-3/dota2-senate.ts` — two queues simulating rounds (voting bans)
3. `day-3/rotten-oranges.ts` — ★★ multi-source BFS, level by level
4. `day-3/shortest-path-binary-matrix.ts` — ★★ BFS shortest path in a grid

## 6. Problem Checklist

- [ ] Day 1 — Queue Using Stacks
- [ ] Day 1 — Recent Counter
- [ ] Day 1 — Buy Tickets
- [ ] Day 2 — Sliding Window Maximum
- [ ] Day 2 — Circular Queue
- [ ] Day 2 — Reveal Cards
- [ ] Day 2 — Lunch Queue
- [ ] Day 3 — First Non-Repeating Stream
- [ ] Day 3 — Dota2 Senate
- [ ] Day 3 — Rotting Oranges
- [ ] Day 3 — Shortest Path in Binary Matrix

## 7. How to Practice (recommended workflow)

```
Read problem (the non-solution file, e.g. day-1/recent-counter.ts)
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
Read the solution (day-1/solutions/recent-counter.solution.ts)
  ↓
Write down the PATTERN you learned (one sentence, e.g.
"expiry from one side only → queue, size is the answer")
```

Run any file with:

```bash
npx ts-node src/12-queue/basics/Queue.ts
npx ts-node src/12-queue/day-1/solutions/recent-counter.solution.ts
```

## 8. Common Mistakes

1. **Using `shift()` as dequeue** — `shift()` is O(n) (everything moves left).
   Use a `head` index (basics/Queue.ts), a circular buffer, or accept O(n)
   only when constraints are tiny (the buy-tickets simulation does — deliberately).
2. **Forgetting the empty-queue check** — `dequeue()`/`peek()` on empty gives
   `undefined`. Recent Counter with no pings yet, BFS with no sources — guard them.
3. **Confusing which end is which** — enqueue = BACK (`push`), dequeue = FRONT
   (`head`). In a deque, name your ends explicitly (front/back) in comments.
4. **Storing values when you need indices** — sliding-window problems need
   *positions* (to detect expiry `front <= i - k`), so the deque holds indices.
5. **Not understanding why monotonic pops are safe** — re-read section 5.5. If
   you can't explain *why* a buried value is useless forever, you memorized the
   template instead of the reasoning.
6. **Mixing up BFS levels and minutes** — snapshot the queue length BEFORE the
   level; nodes enqueued during the level belong to the NEXT minute. Forgetting
   this is the #1 Rotten Oranges bug.
7. **Marking visited on dequeue instead of enqueue in BFS** — the same cell
   then enqueues many times (queue explosion). First enqueue is already via the
   shortest route — mark it there.
8. **Memorizing solutions instead of patterns** — after each problem, write the
   one-sentence pattern (section 7). The pattern transfers; the code doesn't.

## 9. Complexity Cheat Sheet

| Operation | Time | Space | Notes |
|-----------|------|-------|-------|
| `enqueue` | O(1) amortized | O(1) | occasional compaction/resize |
| `dequeue` | O(1) | O(1) | head-index impl — never `shift()` in loops |
| `peek` | O(1) | O(1) | no mutation |
| `isEmpty` / `size` | O(1) | O(1) | arithmetic on `head`/`length` |
| Sliding window maximum (whole array) | O(n) | O(k) | each index pushed + popped ≤ once |
| Recent Counter ping | O(1) amortized | O(n) | each timestamp leaves at most once |
| Queue Using Stacks pop/peek | O(1) amortized | O(n) | each element pours over at most once |
| BFS (grid) | O(rows·cols) | O(rows·cols) | each cell enqueued ≤ once |
| Circular queue ops | O(1) | O(k) | fixed buffer, modulo wrap |

## 10. Final Self-Test

Answer these without looking back. Then verify against sections 5–9.

1. What does FIFO mean, and why is `array.shift()` a bad dequeue?
2. How does the `head`-index queue achieve O(1) dequeue? What is compaction for?
3. How do two stacks make a queue? Why is pop/peek O(1) *amortized* rather than
   worst-case?
4. How does Recent Counter use a queue? Why is the queue's size the answer?
5. What is a deque, and what makes it different from a plain queue?
6. How can a monotonic deque turn an O(n·k) approach into O(n)? (Argue with
   push/pop counts.)
7. Why is it safe to pop a smaller value from the back in Sliding Window
   Maximum? What makes it "useless forever"? Why evict the front separately?
8. How does a circular queue reuse freed slots? Why track `count` instead of
   just head/tail pointers?
9. Why does BFS guarantee the shortest path in an unweighted grid? Why mark
   visited on enqueue, not dequeue?
10. What is multi-source BFS, and why does seeding all sources at once work?
11. Can you implement `Queue<T>` from scratch without looking at the code?

---

### Folder map (what lives where)

```
src/12-queue/
├── README.md                  ← you are here
├── basics/
│   └── Queue.ts               ← Queue<T> implementation + guided tour (RUN THIS FIRST)
├── day-1/
│   ├── queue-using-stacks.ts  ← problem + hints + starter (YOU write the code)
│   ├── recent-counter.ts
│   ├── buy-tickets.ts
│   └── solutions/             ← solutions + tests (open AFTER attempting)
│       ├── queue-using-stacks.solution.ts
│       ├── recent-counter.solution.ts
│       └── buy-tickets.solution.ts
├── day-2/
│   ├── 00-day2-review.ts      ← Day 1 recap + pattern map (read first on Day 2)
│   ├── sliding-window-maximum.ts
│   ├── circular-queue.ts
│   ├── reveal-cards.ts
│   ├── lunch-queue.ts
│   └── solutions/
│       ├── sliding-window-maximum.solution.ts
│       ├── circular-queue.solution.ts
│       ├── reveal-cards.solution.ts
│       └── lunch-queue.solution.ts
└── day-3/
    ├── first-non-repeating-stream.ts
    ├── dota2-senate.ts
    ├── rotten-oranges.ts
    ├── shortest-path-binary-matrix.ts
    └── solutions/
        ├── first-non-repeating-stream.solution.ts
        ├── dota2-senate.solution.ts
        ├── rotten-oranges.solution.ts
        └── shortest-path-binary-matrix.solution.ts
```


# 08 — Recursion

## Most Important Interview Questions

| # | Question | Concept You Learn | Difficulty |
|---|----------|-------------------|------------|
| 1 | Factorial of N | Basic recursion, base & recursive case | Easy |
| 2 | Fibonacci Number | Naive recursion vs memoization (top-down DP) | Easy |
| 3 | Sum of digits of a number | Recursion on digits (n % 10 pattern) | Easy |
| 4 | Pow(x, n) — fast exponentiation | Divide & conquer in O(log n) | Medium |
| 5 | Reverse a string recursively | Head/tail recursion on strings | Easy |
| 6 | Recursive Binary Search | Divide & conquer on sorted arrays | Easy |
| 7 | Tower of Hanoi | Multi-step recursion, 2^n − 1 moves | Medium |
| 8 | Subsets / Power Set | Include/exclude backtracking | Medium |
| 9 | Permutations | Backtracking with used[] tracking | Medium |
| 10 | Generate Parentheses | Backtracking with constraints (open/close) | Medium |
| 11 | Print All Subsequences with Sum K | Pick/not-pick backtracking with running sum | Medium |
| 12 | Combination Sum (LC 39) | Backtracking with unlimited reuse of candidates | Medium |
| 13 | Subset Sum I (power set walk-through included) | Pick/skip: track running sum instead of subset | Medium |

## Key Concepts

- **Base case** — the condition that stops recursion. Every recursive function needs at least one.
- **Recursive case** — the function calls itself on a smaller subproblem.
- **Call stack** — each call is pushed onto the stack; deep recursion can cause stack overflow.
- **Memoization** — caching results of subproblems to avoid recomputation (turns O(2^n) Fibonacci into O(n)).
- **Backtracking** — explore a choice, recurse, then *undo* the choice (used in subsets, permutations, parentheses).
- **Divide & conquer** — split the problem in half (binary search, pow) for O(log n)-style solutions.

## How to Run Any File

```bash
npx ts-node src/08-recursion/factorial.ts
```
